const nodemailer = require("nodemailer");

// Validate email config at module load time
const EMAIL_CONFIG = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
};

if (!EMAIL_CONFIG.host || !EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
  console.warn("[Email] ⚠️ EMAIL CONFIGURATION INCOMPLETE — emails will not be sent.");
  console.warn(`[Email]   EMAIL_HOST: ${EMAIL_CONFIG.host ? "✅ set" : "❌ MISSING"}`);
  console.warn(`[Email]   EMAIL_PORT: ${EMAIL_CONFIG.port ? "✅ set" : "❌ MISSING"}`);
  console.warn(`[Email]   EMAIL_USER: ${EMAIL_CONFIG.user ? "✅ set" : "❌ MISSING"}`);
  console.warn(`[Email]   EMAIL_PASS: ${EMAIL_CONFIG.pass ? "✅ set" : "❌ MISSING"}`);
} else {
  console.log("[Email] ✅ Email service configured successfully.");
}

const transporter = nodemailer.createTransport({
  host: EMAIL_CONFIG.host,
  port: EMAIL_CONFIG.port,
  secure: EMAIL_CONFIG.port === 465, // true for 465, false for other ports
  auth: {
    user: EMAIL_CONFIG.user,
    pass: EMAIL_CONFIG.pass,
  },
});

/**
 * Sends a notification email about a potential match
 * @param {String} toEmail 
 * @param {Object} itemDetails 
 * @param {Object} matchDetails 
 */
const sendMatchEmail = async (toEmail, itemDetails, matchDetails) => {
  if (!toEmail) {
    console.warn("[Email] ⚠️ sendMatchEmail called with no recipient email — skipping.");
    return false;
  }

  if (!EMAIL_CONFIG.host || !EMAIL_CONFIG.user || !EMAIL_CONFIG.pass) {
    console.warn(`[Email] ⚠️ Cannot send email to ${toEmail} — email service not configured.`);
    return false;
  }

  const mailOptions = {
    from: `"Lost & Found AI" <${EMAIL_CONFIG.user}>`,
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
          <a href="${process.env.FRONTEND_URL || 'http://localhost:7860'}/app" style="background-color: #5cb9a5; color: white; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: bold; display: inline-block;">View Match Details</a>
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
    console.log(`[Email] ✅ Email sent successfully to ${toEmail} — MessageID: ${info.messageId}`);
    return true;
  } catch (error) {
    console.error(`[Email] ❌ Failed to send email to ${toEmail}:`, error.message);
    if (error.code) console.error(`[Email]   Error code: ${error.code}`);
    if (error.responseCode) console.error(`[Email]   SMTP response code: ${error.responseCode}`);
    return false;
  }
};

module.exports = { sendMatchEmail };
