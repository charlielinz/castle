// import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const transporter = nodemailer.createTransport({
//   port: 465,
//   host: "smtp.gmail.com",
//   auth: {
//     user: process.env.account,
//     pass: process.env.password,
//   },
//   secure: true,
// });

const sendEmail = async (body) => {
  const mailOptions = {
    from: "ilovealinlin@gmail.com",
    to: "charlielin.org@gmail.com",
    subject: `Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`,
  };
  sgMail
    .send(mailOptions)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.log(error);
    });
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const emailRes = await sendEmail(req.body);
    return res.status(200).json({ message: `Email sent successfuly` });
  }
};

export default handler;
