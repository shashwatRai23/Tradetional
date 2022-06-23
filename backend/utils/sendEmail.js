const nodeMailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN =
  "1//047qEaL8FGQaoCgYIARAAGAQSNwF-L9Irx4RmXoyLT6t-LDly9YliXl50wo-JhiZHGiK72mLLLbQtWQW3F2OFoKYlDqK4V8AAsWw";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendEmail = async (options) => {
  try {
    console.log("in the sendEmail function....");
    // const accessToken = await oAuth2Client.getAccessToken();
    const accessToken =
      "ya29.a0ARrdaM8vzxLK1E4964UQe6ksaD5Efoozia18HsTE9xSo8L_qyzC6cMPglvtLs3xrJqiTgjpOQyA37uuqpGgEwb3AU03wDnGBdCEudrJdIOBjpceTyWc1d0XawYlx4Lp66UmIQpjubPKHzNLBNNqmo24MfbUTiQ";

    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "shashwatr05@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;
