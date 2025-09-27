import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, company, email, phone, location, serviceType, urgency, message } = body;

    // Validate required fields
    if (!name || !company || !email || !phone || !serviceType || !urgency) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
      New Service Request from Nexa Facilities Group Website

      ========================================
      CONTACT INFORMATION
      ========================================
      Name: ${name}
      Company: ${company}
      Email: ${email}
      Phone: ${phone}
      Location: ${location || 'Not specified'}

      ========================================
      SERVICE DETAILS
      ========================================
      Service Type: ${serviceType}
      Urgency: ${urgency}

      ========================================
      MESSAGE
      ========================================
      ${message || 'No additional message provided'}

      ========================================
      Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}
    `;

    // For now, we'll use a service like Nodemailer or SendGrid
    // This is a placeholder - you'll need to set up an email service

    // Option 1: Using Nodemailer (requires setup)
    // You'll need to install: npm install nodemailer @types/nodemailer

    // Option 2: Using a service like SendGrid, Resend, or Postmark
    // These services provide better deliverability and are easier to set up

    // For demonstration, I'll show the Nodemailer approach
    // You'll need to set up environment variables for email credentials

    const nodemailer = require('nodemailer');

    // Create transporter using SMTP
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Your SMTP host
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
    });

    // Send email
    const mailOptions = {
      from: `"Nexa Facilities Website" <${process.env.SMTP_USER}>`,
      to: 'service@nexafacilitiesgroup.com',
      subject: `New Service Request - ${urgency} - ${company}`,
      text: emailContent,
      replyTo: email, // Set reply-to as the customer's email
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}