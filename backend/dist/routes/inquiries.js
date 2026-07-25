"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const nodemailer_1 = __importDefault(require("nodemailer"));
const db_1 = require("../db");
const router = (0, express_1.Router)();
// Retrieve environmental configuration variables
const receiverEmail = process.env.RECEIVER_EMAIL || 'dorrylmbula2022@gmail.com';
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
// Function to handle SMTP emailing in the background
async function sendForwardingEmail(name, email, phone, message, currentDate) {
    // If SMTP configuration parameters are missing, output details locally and return early
    if (!smtpHost || !smtpUser || !smtpPass) {
        console.warn(`[SMTP Warning] Email forwarding skipped. Define SMTP_HOST, SMTP_USER, and SMTP_PASS in .env to email: ${receiverEmail}`);
        return;
    }
    // Create transporter configuration
    const transporter = nodemailer_1.default.createTransport({
        host: smtpHost,
        port: Number(smtpPort) || 587,
        secure: Number(smtpPort) === 465, // SSL configuration
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
    });
    // Execute sending email message
    await transporter.sendMail({
        from: `"Bonifrid Homes Portal" <${smtpUser}>`,
        to: receiverEmail,
        subject: `New Client Contact Inquiry - ${name}`,
        text: `You have received a new contact inquiry from Bonifrid Homes website:\n\nClient Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Date: ${currentDate}\n\nMessage:\n----------------------------------------\n${message}\n----------------------------------------\n\nThis inquiry was successfully stored in database.sqlite.`,
        html: `
      <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a; border-bottom: 2px solid #b82c3c; padding-bottom: 10px; margin-top: 0;">New Bonifrid Homes Inquiry</h2>
        <p style="color: #475569; font-size: 0.95rem;">You have received a new inquiry submission from your website portal.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; color: #0f172a; width: 120px;">Client Name:</td>
            <td style="padding: 10px; color: #334155;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #0f172a;">Email:</td>
            <td style="padding: 10px; color: #334155;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; font-weight: bold; color: #0f172a;">Phone:</td>
            <td style="padding: 10px; color: #334155;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #0f172a;">Date:</td>
            <td style="padding: 10px; color: #334155;">${new Date(currentDate).toLocaleString()}</td>
          </tr>
        </table>
        
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #b82c3c; margin: 20px 0;">
          <h4 style="margin: 0 0 8px 0; color: #0f172a;">Client Message:</h4>
          <p style="margin: 0; color: #334155; line-height: 1.5; white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="color: #94a3b8; font-size: 0.8rem; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
          This inquiry has been securely saved in the database.
        </p>
      </div>
    `,
    });
}
// POST submit a new inquiry (Public - contact/inquiry form submission)
router.post('/', async (req, res) => {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields (name, email, phone, message) are required' });
    }
    try {
        const db = await (0, db_1.getDb)();
        const currentDate = new Date().toISOString();
        // Persist in local SQLite database
        const result = await db.run(`INSERT INTO inquiries (name, email, phone, message, date)
       VALUES (?, ?, ?, ?, ?)`, [name, email, phone, message, currentDate]);
        // Forward copy to email asynchronously (non-blocking)
        sendForwardingEmail(name, email, phone, message, currentDate)
            .then(() => console.log(`Inquiry successfully forwarded to ${receiverEmail}`))
            .catch((err) => console.error(`Error forwarding inquiry to ${receiverEmail}:`, err));
        res.status(201).json({
            message: 'Inquiry submitted successfully',
            inquiryId: result.lastID,
            inquiry: { id: result.lastID, name, email, phone, message, date: currentDate }
        });
    }
    catch (error) {
        console.error('Error creating inquiry:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.default = router;
