import pool from "../config/db.js";
import transporter from "../config/mailer.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    const insertQuery = `
      INSERT INTO contact_messages (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING id, name, email, message, created_at
    `;

    const values = [name.trim(), email.trim(), message.trim()];
    const result = await pool.query(insertQuery, values);
    const savedMessage = result.rows[0];
    console.log(savedMessage.email);
    // Mail to admin
    await transporter.sendMail({
        from: `"${savedMessage.email}" <${process.env.MAIL_FROM}>`,
        to: process.env.ADMIN_EMAIL,
        // replyTo: savedMessage.email,
        subject: `${savedMessage.name} sent a contact form message`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${savedMessage.name}</p>
          <p><strong>Email:</strong> ${savedMessage.email}</p>
          <p><strong>Message:</strong></p>
          <p>${savedMessage.message.replace(/\n/g, "<br>")}</p>
          <hr />
          <p><strong>Submitted At:</strong> ${new Date(savedMessage.created_at).toLocaleString()}</p>
        `,
      });

    // Auto reply to user
    await transporter.sendMail({
      from: `<${process.env.MAIL_FROM}>`,
      to: savedMessage.email,
      subject: "We received your message",
      html: `
        <p>Hi ${savedMessage.name},</p>
        <p>Thank you for contacting us. We have received your message successfully.</p>
        <p>We will get back to you soon.</p>
        <br />
        <p>Best regards,</p>
        <p>Utsav Patel</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      data: savedMessage,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};