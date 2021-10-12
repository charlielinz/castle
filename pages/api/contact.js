import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.account,
    pass: process.env.password,
  },
  secure: true,
});

const sendEmail = async (body, resolve, reject) => {
  const mailData = {
    to: "charlielin.org@gmail.com",
    subject: `Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.error(err);
      reject(err);
    } else {
      console.log(info);
      resolve(info);
    }
  });
};

const handler = async (req, res) => {
  await new Promise((resolve, reject) => {
    sendEmail(req.body,resolve, reject);
  });
  return res.status(200).json({ message: `Email sent successfuly` });
};

export default handler;
