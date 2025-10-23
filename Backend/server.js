import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 15000,
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1'
  },
  debug: false,
  logger: false
});

console.log("📧 Email server configured");
console.log("� Server starting...");

app.get("/", (req, res) => {
  res.json({ 
    message: "✅ Haven Tutors Backend API is running!", 
    endpoints: [
      "POST /api/contact",
      "POST /api/student-demo",
      "POST /api/tutor-application"
    ],
    status: "Active"
  });
});


app.post("/api/contact", upload.none(), async (req, res) => {
  try {
    const { user_name, user_email, user_phone, message } = req.body;

    res.status(200).json({ success: true, message: "Message received successfully" });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: user_email,
      subject: `New Contact Form Submission from ${user_name}`,
      text: `
Contact Form Submission

Name: ${user_name}
Email: ${user_email}
Phone: ${user_phone || "Not provided"}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone || "Not provided"}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send auto-reply to user
    const autoReply = {
      from: process.env.MAIL_USER,
      to: user_email,
      subject: `We've Received Your Message - Haven Tutors`,
      text: `
Dear ${user_name},

Thank you for contacting Haven Tutors. We truly appreciate you reaching out to us.

Your message has been successfully received by our team. One of our education consultants will review your inquiry and respond within 24 hours.

In the meantime, feel free to explore our website to learn more about our personalized tutoring programs and success stories.

If you have any urgent questions, please don't hesitate to call us directly.

Warm regards,
The Haven Tutors Team

Contact: info@haventutor.com
WhatsApp: +91 9606840892
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">We've Received Your Message</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">Dear ${user_name},</p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for contacting Haven Tutors. We truly appreciate you reaching out to us.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Your message has been successfully received by our team. One of our education consultants will review your inquiry and respond within 24 hours.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to explore our website to learn more about our personalized tutoring programs and success stories.
            </p>
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #1e40af;"><strong>📧 Email:</strong> info@haventutor.com</p>
              <p style="margin: 5px 0; color: #1e40af;"><strong>💬 WhatsApp:</strong> +91 9606840892</p>
            </div>
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              Warm regards,<br>
              <strong style="color: #2563eb;">The Haven Tutors Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    Promise.all([
      transporter.sendMail(mailOptions).catch(err => console.error("Admin email error:", err)),
      transporter.sendMail(autoReply).catch(err => console.error("Auto-reply error:", err))
    ]);

  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});


app.post("/api/student-demo", upload.none(), async (req, res) => {
  try {
    const { name, email, mobile, class_grade, board, city, state, country } = req.body;

    res.status(200).json({ success: true, message: "Demo request received successfully" });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `New Student Demo Booking - ${name}`,
      text: `
Student Demo Booking

Name: ${name}
Email: ${email}
Phone: ${mobile}
Class/Grade: ${class_grade}
Board: ${board}
City: ${city}
State: ${state}
Country: ${country}
      `,
      html: `
        <h3>New Student Demo Booking</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobile}</p>
        <p><strong>Class/Grade:</strong> ${class_grade}</p>
        <p><strong>Board:</strong> ${board}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
      `,
    };

    transporter.sendMail(mailOptions).catch(err => console.error("Student demo email error:", err));
    transporter.sendMail(autoReply).catch(err => console.error("Student auto-reply error:", err));

  } catch (err) {
    console.error("Student form error:", err);
    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});

app.post("/api/tutor-application", upload.single("resume"), async (req, res) => {
  try {
    const { tutor_name, tutor_email, tutor_phone, city, state, country, expertise, experience } = req.body;
    const file = req.file;

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: tutor_email,
      subject: `New Tutor Application - ${tutor_name}`,
      text: `
Tutor Application

Name: ${tutor_name}
Email: ${tutor_email}
Phone: ${tutor_phone}
City: ${city}
State: ${state}
Country: ${country}
Expertise: ${expertise}
Experience: ${experience} years

${file ? 'Resume attached: ' + file.originalname : 'No resume attached'}
      `,
      html: `
        <h3>New Tutor Application</h3>
        <p><strong>Name:</strong> ${tutor_name}</p>
        <p><strong>Email:</strong> ${tutor_email}</p>
        <p><strong>Phone:</strong> ${tutor_phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Expertise:</strong> ${expertise}</p>
        <p><strong>Experience:</strong> ${experience} years</p>
      `,
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [],
    };

    // Send auto-reply to tutor applicant
    const autoReply = {
      from: process.env.MAIL_USER,
      to: tutor_email,
      subject: `Application Received - Haven Tutors Teaching Opportunity`,
      text: `
Dear ${tutor_name},

Thank you for your interest in joining Haven Tutors as an educator!

We are delighted to have received your application. Your passion for teaching and commitment to student success is exactly what we look for in our tutoring team.

Application Status: Under Review

What's Next?
• Our recruitment team will carefully review your application and resume
• If your profile matches our requirements, we will contact you within 24-48 hours
• You'll be invited for a discussion about teaching methodologies and expectations
• Successful candidates will undergo a brief demo session evaluation

About Haven Tutors:
We pride ourselves on maintaining the highest standards of education. Our tutors work with students globally, helping them achieve academic excellence through personalized, one-on-one instruction.

We appreciate your patience during the review process. If you have any questions, please feel free to reach out.

Best wishes,
The Haven Tutors Recruitment Team

Contact: info@haventutor.com
WhatsApp: +91 9606840892
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px;">👩‍🏫 Application Received Successfully</h2>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">Dear ${tutor_name},</p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in joining <strong>Haven Tutors</strong> as an educator!
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              We are delighted to have received your application. Your passion for teaching and commitment to student success is exactly what we look for in our tutoring team.
            </p>
            
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 0; color: #92400e; font-weight: bold;">Application Status: <span style="color: #d97706;">Under Review</span></p>
            </div>
            
            <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
              <ul style="color: #374151; line-height: 1.8; margin: 10px 0;">
                <li>Our recruitment team will carefully review your application and resume</li>
                <li>If your profile matches our requirements, we will contact you within 24-48 hours</li>
                <li>You'll be invited for a discussion about teaching methodologies and expectations</li>
                <li>Successful candidates will undergo a brief demo session evaluation</li>
              </ul>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #166534; margin-top: 0;">About Haven Tutors</h4>
              <p style="color: #374151; margin: 0; font-size: 14px;">
                We pride ourselves on maintaining the highest standards of education. Our tutors work with students globally, 
                helping them achieve academic excellence through personalized, one-on-one instruction.
              </p>
            </div>
            
            <p style="color: #374151; font-size: 16px; line-height: 1.6;">
              We appreciate your patience during the review process. If you have any questions, please feel free to reach out.
            </p>
            
            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #1e40af;"><strong>📧 Email:</strong> info@haventutor.com</p>
              <p style="margin: 5px 0; color: #1e40af;"><strong>💬 WhatsApp:</strong> +91 9606840892</p>
            </div>
            
            <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 14px;">
              Best wishes,<br>
              <strong style="color: #2563eb;">The Haven Tutors Recruitment Team</strong>
            </p>
          </div>
        </div>
      `,
    };

    res.status(200).json({ success: true, message: "Application received successfully" });

    Promise.all([
      transporter.sendMail(mailOptions).catch(err => console.error("Admin tutor email error:", err)),
      transporter.sendMail(autoReply).catch(err => console.error("Tutor auto-reply error:", err))
    ]).then(() => {
      if (file) fs.unlinkSync(file.path);
    });

  } catch (err) {
    console.error("Tutor form error:", err);
    if (req.file) fs.unlinkSync(req.file.path);
    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
