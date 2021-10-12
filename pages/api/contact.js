import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.account,
    pass: process.env.password,
  },
  secure: true,
  tls: {
    ciphers: "SSLv3",
  },
});

const sendEmail = async (body) => {
  const mailOptions = {
    to: "charlielin.org@gmail.com",
    subject: `Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const emailRes = await sendEmail(req.body);
    return res.status(200).json({ message: `Email sent successfuly` });
  }
};

export default handler;
