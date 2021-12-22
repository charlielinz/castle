import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = (body, resolve, reject) => {
  const mailData = {
    to: "contact@charlielin.org",
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
  })
    .then((value) => {
      const statusCode = value[0].statusCode;
      return res.status(statusCode).json({});
    })
    .catch((reason) => {
      const statusCode = reason[0].statusCode;
      return res.status(statusCode).json({});
    });
};

export default handler;
