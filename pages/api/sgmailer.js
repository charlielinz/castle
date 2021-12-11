import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (body, resolve, reject) => {
  const mailData = {
    to: "charlielin.org@gmail.com",
    from: "ilovealinlin@gmail.com",
    subject: `${body.name} want to contact you`,
    html: `<div>${body.message}</div><p>Sent from:
        ${body.email}</p>`,
  };
  sendgrid.send(mailData, function (err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
};

const handler = async (req, res) => {
  await new Promise((resolve, reject) => {
    sendEmail(req.body, resolve, reject);
  });
  return res.status(200).json({});
};

export default handler;
