/**
 * ============================================================================
 * HAVEN TUTORS - BACKEND API SERVER
 * ============================================================================
 * 
 * This is the main backend server for Haven Tutors website.
 * It handles three main form submissions:
 *   1. Contact Form (/api/contact)
 *   2. Student Demo Booking (/api/student-demo)
 *   3. Tutor Application (/api/tutor-application)
 * 
 * For each form submission, the server:
 *   - Validates and processes the incoming data
 *   - Sends a notification email to the admin
 *   - Sends an auto-reply confirmation email to the user
 * 
 * Email Service: Resend API (https://resend.com)
 * File Upload: Multer (for tutor resume uploads)
 * 
 * Environment Variables Required:
 *   - RESEND_API_KEY: Your Resend API key for sending emails
 *   - MAIL_USER: Admin email address (receives all form notifications)
 *   - PORT: Server port (defaults to 5000)
 * ============================================================================
 */

import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// ============================================================================
// MIDDLEWARE CONFIGURATION
// ============================================================================

// Enable CORS (Cross-Origin Resource Sharing) to allow frontend requests
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// Configure Multer for file uploads (stores files temporarily in 'uploads/' folder)
const upload = multer({ dest: "uploads/" });

// ============================================================================
// EMAIL CONFIGURATION
// ============================================================================

/**
 * Default sender email with display name
 * This appears as "Haven Tutors <info@haventutor.com>" in recipient's inbox
 */
const DEFAULT_FROM = `Haven Tutors <${process.env.MAIL_USER || 'info@haventutor.com'}>`;

/**
 * Resend API endpoint for sending emails
 */
const RESEND_API_URL = "https://api.resend.com/emails";

/**
 * Check if Resend API key is configured
 * Warns if missing but doesn't stop the server (for development)
 */
function ensureResendKey() {
  if (!process.env.RESEND_API_KEY) {
    console.warn("⚠️ RESEND_API_KEY is not set. Emails will fail until it's provided.");
  }
}

/**
 * Determine MIME type based on file extension
 * Used for email attachments (resumes)
 * 
 * @param {string} filename - Name of the file
 * @returns {string} MIME type string
 */
function getMimeType(filename) {
  const ext = (filename || "").split('.').pop().toLowerCase();
  switch (ext) {
    case 'pdf': return 'application/pdf';
    case 'docx': return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    case 'doc': return 'application/msword';
    case 'txt': return 'text/plain';
    default: return 'application/octet-stream';
  }
}

/**
 * Send email using Resend API
 * 
 * This function makes a direct HTTP call to Resend's API using fetch.
 * It supports HTML emails and file attachments.
 * 
 * @param {Object} options - Email options
 * @param {string} options.from - Sender email address
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject line
 * @param {string} options.html - HTML content of the email
 * @param {string} [options.reply_to] - Reply-to email address (optional)
 * @param {Array} [options.attachments] - Array of attachment objects (optional)
 * @returns {Promise<Object>} Response from Resend API
 * @throws {Error} If API key is missing or API request fails
 */
async function sendResendEmail({ from, to, subject, html, reply_to, attachments }) {
  ensureResendKey();
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY not set");

  // Build email payload
  const payload = { from, to, subject, html };
  if (reply_to) payload.reply_to = reply_to;

  // Add attachments if provided (for tutor resumes)
  if (attachments && Array.isArray(attachments) && attachments.length) {
    payload.attachments = attachments.map(a => ({
      filename: a.filename,
      content: a.content,  // Base64 encoded file content
      type: a.type || getMimeType(a.filename)
    }));
  }

  // Make HTTP POST request to Resend API
  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Handle API errors
  if (!res.ok) {
    const text = await res.text();
    const err = new Error(`Resend API error ${res.status}: ${text}`);
    err.status = res.status;
    throw err;
  }

  return res.json();
}

// Server startup messages
console.log("📧 Email sending configured (Resend HTTP API)");
console.log("🚀 Server starting...");

// ============================================================================
// API ROUTES
// ============================================================================

/**
 * ROOT ENDPOINT
 * GET /
 * 
 * Health check endpoint - confirms server is running
 * Returns list of available API endpoints
 */
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

/**
 * CONTACT FORM ENDPOINT
 * POST /api/contact
 * 
 * Handles general contact form submissions from the website.
 * 
 * Expected form fields:
 *   - user_name: Name of the person contacting
 *   - user_email: Email address for reply
 *   - user_phone: Phone number (optional)
 *   - message: The message content
 * 
 * Process:
 *   1. Immediately responds to user with success message
 *   2. Sends notification email to admin with contact details
 *   3. Sends auto-reply confirmation to user
 */
app.post("/api/contact", upload.none(), async (req, res) => {
  try {
    // Extract form data from request body
    const { user_name, user_email, user_phone, message } = req.body;

    // Respond immediately to user (don't wait for emails)
    res.status(200).json({ success: true, message: "Message received successfully" });

    // ========================================================================
    // ADMIN NOTIFICATION EMAIL
    // ========================================================================
    const adminMessageHtml = `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      <p><strong>Phone:</strong> ${user_phone || "Not provided"}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // ========================================================================
    // USER AUTO-REPLY EMAIL
    // ========================================================================
    const autoReplyHtml = `
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
    `;

    // Send emails asynchronously (fire-and-forget pattern)
    // Errors are logged but don't affect the user's response

    // Send notification to admin
    sendResendEmail({
      from: DEFAULT_FROM,
      to: process.env.MAIL_USER,
      subject: `New Contact Form Submission from ${user_name}`,
      html: adminMessageHtml,
      reply_to: user_email  // Admin can reply directly to user
    }).catch(err => console.error("Admin email error:", err));

    // Send confirmation to user
    sendResendEmail({
      from: DEFAULT_FROM,
      to: user_email,
      subject: `We've Received Your Message - Haven Tutors`,
      html: autoReplyHtml
    }).catch(err => console.error("Auto-reply error:", err));

  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});

/**
 * STUDENT DEMO BOOKING ENDPOINT
 * POST /api/student-demo
 * 
 * Handles demo session booking requests from students/parents.
 * 
 * Expected form fields:
 *   - name: Student/parent name
 *   - email: Contact email
 *   - mobile: Phone number
 *   - class_grade: Student's class/grade level
 *   - board: Educational board (e.g., CBSE, ICSE, IB)
 *   - city: City name
 *   - state: State/province
 *   - country: Country
 * 
 * Process:
 *   1. Immediately responds to user with success message
 *   2. Sends notification email to admin with booking details
 *   3. Sends confirmation email to user with submitted details
 */
app.post("/api/student-demo", upload.none(), async (req, res) => {
  try {
    // Extract form data from request body
    const { name, email, mobile, class_grade, board, city, state, country } = req.body;

    // Respond immediately to user
    res.status(200).json({ success: true, message: "Demo request received successfully" });

    // ========================================================================
    // ADMIN NOTIFICATION EMAIL
    // ========================================================================
    const adminHtml = `
      <h3>New Student Demo Booking</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${mobile}</p>
      <p><strong>Class/Grade:</strong> ${class_grade}</p>
      <p><strong>Board:</strong> ${board}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Country:</strong> ${country}</p>
    `;

    // ========================================================================
    // USER CONFIRMATION EMAIL
    // ========================================================================
    const userConfirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #2563eb; margin-bottom: 20px;">🎉 Demo Request Received</h2>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">Dear ${name},</p>
          <p style="color: #374151; font-size: 16px; line-height: 1.6;">
            Thank you for booking a <strong>demo session</strong> with Haven Tutors. Our team will contact you shortly to schedule your session at a convenient time.
          </p>
          <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin: 0 0 10px;">Submitted Details</h3>
            <ul style="color: #374151; margin: 0; padding-left: 18px; line-height: 1.8;">
              <li><strong>Class/Grade:</strong> ${class_grade}</li>
              <li><strong>Board:</strong> ${board}</li>
              <li><strong>City:</strong> ${city}</li>
              <li><strong>State:</strong> ${state}</li>
              <li><strong>Country:</strong> ${country}</li>
            </ul>
          </div>
          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0; color: #166534;">
              Our consultant will reach out within <strong>24 hours</strong> to confirm your session time.
            </p>
          </div>
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
    `;

    // Send emails asynchronously (fire-and-forget pattern)

    // Send notification to admin
    sendResendEmail({
      from: DEFAULT_FROM,
      to: process.env.MAIL_USER,
      subject: `New Student Demo Booking - ${name}`,
      html: adminHtml,
      reply_to: email  // Admin can reply directly to student/parent
    }).catch(err => console.error("Student demo email error:", err));

    // Send confirmation to user
    sendResendEmail({
      from: DEFAULT_FROM,
      to: email,
      subject: `Your Demo Session Request Is Confirmed - Haven Tutors`,
      html: userConfirmationHtml
    }).catch(err => console.error("Student auto-reply error:", err));

  } catch (err) {
    console.error("Student form error:", err);
    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});

/**
 * TUTOR APPLICATION ENDPOINT
 * POST /api/tutor-application
 * 
 * Handles tutor job applications with optional resume upload.
 * 
 * Expected form fields:
 *   - tutor_name: Applicant's full name
 *   - tutor_email: Contact email
 *   - tutor_phone: Phone number
 *   - city: City name
 *   - state: State/province
 *   - country: Country
 *   - expertise: Subject expertise (e.g., Mathematics, Physics)
 *   - experience: Years of teaching experience
 *   - resume: File upload (PDF, DOC, DOCX) - optional
 * 
 * Process:
 *   1. Accepts file upload using Multer middleware
 *   2. Immediately responds to user with success message
 *   3. Converts resume to base64 for email attachment
 *   4. Sends notification email to admin with resume attached
 *   5. Sends confirmation email to applicant
 *   6. Deletes temporary uploaded file from server
 */
app.post("/api/tutor-application", upload.single("resume"), async (req, res) => {
  try {
    // Extract form data from request body
    const { tutor_name, tutor_email, tutor_phone, city, state, country, expertise, experience } = req.body;

    // Get uploaded file (if any) from Multer
    const file = req.file;

    // Respond immediately to user
    res.status(200).json({ success: true, message: "Application received successfully" });

    // ========================================================================
    // PREPARE FILE ATTACHMENT (if resume was uploaded)
    // ========================================================================
    let attachmentsForResend = [];
    if (file) {
      try {
        // Read the uploaded file from temporary storage
        const fileBuffer = fs.readFileSync(file.path);

        // Convert to base64 (required by Resend API)
        const base64 = fileBuffer.toString('base64');

        // Add to attachments array
        attachmentsForResend.push({
          filename: file.originalname,
          content: base64,
          type: getMimeType(file.originalname)
        });
      } catch (e) {
        console.error('Failed to read uploaded file for attachment:', e);
      }
    }

    // ========================================================================
    // ADMIN NOTIFICATION EMAIL (with resume attachment)
    // ========================================================================
    const adminHtml = `
      <h3>New Tutor Application</h3>
      <p><strong>Name:</strong> ${tutor_name}</p>
      <p><strong>Email:</strong> ${tutor_email}</p>
      <p><strong>Phone:</strong> ${tutor_phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>State:</strong> ${state}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Expertise:</strong> ${expertise}</p>
      <p><strong>Experience:</strong> ${experience} years</p>
      <p><strong>Resume:</strong> ${file ? file.originalname : 'No resume attached'}</p>
    `;

    // ========================================================================
    // APPLICANT CONFIRMATION EMAIL
    // ========================================================================
    const applicantConfirmationHtml = `
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
    `;

    // Send emails asynchronously (fire-and-forget pattern)

    // Send notification to admin with resume attachment
    sendResendEmail({
      from: DEFAULT_FROM,
      to: process.env.MAIL_USER,
      subject: `New Tutor Application - ${tutor_name}`,
      html: adminHtml,
      reply_to: tutor_email,  // Admin can reply directly to applicant
      attachments: attachmentsForResend
    }).catch(err => console.error("Admin tutor email error:", err))
      .finally(() => {
        // Clean up: Delete temporary uploaded file after email is sent
        if (file) {
          try {
            fs.unlinkSync(file.path);
          } catch (e) {
            console.error("Failed to delete temporary file:", e);
          }
        }
      });

    // Send confirmation to applicant (no attachment needed)
    sendResendEmail({
      from: DEFAULT_FROM,
      to: tutor_email,
      subject: `Application Received - Haven Tutors Teaching Opportunity`,
      html: applicantConfirmationHtml
    }).catch(err => console.error("Tutor auto-reply error:", err));

  } catch (err) {
    console.error("Tutor form error:", err);

    // Clean up uploaded file if there was an error
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (e) {
        console.error("Failed to delete temporary file:", e);
      }
    }

    res.status(500).json({ success: false, message: "Failed to process request" });
  }
});

// ============================================================================
// START SERVER
// ============================================================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
