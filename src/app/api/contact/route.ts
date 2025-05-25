import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    console.log('Starting contact form submission...');
    
    // Log the request body
    const body = await req.json();
    console.log('Request body:', body);
    
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields:', { name, email, message });
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    try {
      console.log('Attempting to connect to MongoDB...');
      await connectDB();
      console.log('MongoDB connection successful');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { message: 'Database connection failed', error: dbError instanceof Error ? dbError.message : String(dbError) },
        { status: 500 }
      );
    }

    // Save to database
    let contact;
    try {
      console.log('Attempting to save contact to database...');
      contact = await Contact.create({
        name,
        email,
        message,
      });
      console.log('Contact saved successfully:', contact._id);
    } catch (saveError) {
      console.error('Error saving to database:', saveError);
      return NextResponse.json(
        { message: 'Failed to save message', error: saveError instanceof Error ? saveError.message : String(saveError) },
        { status: 500 }
      );
    }

    // Send email notification
    try {
      console.log('Checking email configuration...');
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Missing email configuration');
        throw new Error('Email configuration is missing');
      }

      console.log('Creating email transporter...');
      // Create transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      console.log('Verifying email transporter...');
      // Verify transporter configuration
      await transporter.verify();
      console.log('Email transporter verified successfully');

      const mailOptions = {
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #666;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        `
      };

      console.log('Sending email...');
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');

      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );

    } catch (emailError: any) {
      console.error('Error sending email:', {
        error: emailError,
        message: emailError.message,
        stack: emailError.stack
      });
      
      // Check if the contact was saved but email failed
      if (contact) {
        return NextResponse.json(
          { 
            message: 'Message saved but email notification failed',
            error: emailError.message
          },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Failed to send message', error: emailError.message },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('General error:', {
      error,
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
} 