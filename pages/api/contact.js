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

await new Promise((resolve, reject) => {
  // verify connection configuration
  transporter.verify(function (error, success) {
      if (error) {
          console.log(error);
          reject(error);
      } else {
          console.log("Server is ready to take our messages");
          resolve(success);
      }
  });
});

const sendEmail = async (body) => {
  const mailData = {
    to: "charlielin.org@gmail.com",
    subject: `Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:
      ${body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

const handler = async (req, res) => {
  const emailRes = await sendEmail(req.body);
  return res.status(200).json({ message: `Email sent successfuly` });
};

export default handler;
