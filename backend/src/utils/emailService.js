const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends a notification email about a potential match
 * @param {String} toEmail 
 * @param {Object} itemDetails 
 * @param {Object} matchDetails 
 */
const sendMatchEmail = async (toEmail, itemDetails, matchDetails) => {
  if (!toEmail) return;

  const mailOptions = {
    from: `"Lost & Found AI" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: `✨ Potential Match Found: ${itemDetails.title}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #5cb9a5; margin-bottom: 10px;">Great News!</h1>
          <p style="color: #666; font-size: 18px;">Our AI has detected a potential match for your item.</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 15px; margin-bottom: 30px;">
          <h3 style="color: #0B1528; margin-top: 0;">Your Item:</h3>
          <p style="font-weight: bold; font-size: 20px; margin: 5px 0;">${itemDetails.title}</p>
          <p style="color: #888; font-size: 14px;">Location: ${itemDetails.location}</p>
        </div>

        <div style="border-left: 4px solid #5cb9a5; padding-left: 20px; margin-bottom: 30px;">
          <h3 style="color: #0B1528; margin-top: 0;">Potential Match Detected:</h3>
          <p style="font-size: 16px; color: #444;">${(matchDetails.description || "No description provided").substring(0, 150)}...</p>
          <p style="color: #5cb9a5; font-weight: bold;">Match Confidence: ${Math.round(matchDetails.score * 100)}%</p>
        </div>

        <div style="text-align: center;">
          <a href="http://localhost:5173/app" style="background-color: #5cb9a5; color: white; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: bold; display: inline-block;">View Match Details</a>
        </div>

        <hr style="margin: 40px 0; border: 0; border-top: 1px solid #eee;" />
        <p style="color: #999; font-size: 12px; text-align: center;">
          This is an automated notification from your Lost & Found AI helper. 
          If you didn't expect this, please ignore this email.
        </p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
};

module.exports = { sendMatchEmail };
