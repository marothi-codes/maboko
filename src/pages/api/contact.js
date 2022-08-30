import NextCors from 'nextjs-cors';
import nodemailer from 'nodemailer';

async function handler(req, res) {
  const { name, email, phone, subject, message } = req.body;

  await NextCors(req, res, {
    // Options
    methods: ['POST'],
    origin: '*',
    optionsSuccessStatus: 200, // For Legacy browsers & various smart TVs
  });

  const foremostBody = `
    <h1>Foremost Solar Website</h1>
    <p>
      <strong>Name: </strong> ${name}<br />
      <strong>Email: </strong> ${email}<br />
      <strong>Phone: </strong> ${phone}<br />
      <strong>Subject: </strong> ${subject}<br />
      <strong>Message: </strong> ${message}
    </p>
    <p>
      Be sure to contact the website user ASAP because it might be a potential client.
    </p>
  `;

  const userBody = `
    <h1>Thank You for Contacting Foremost Solar</h1>

    <p>
      One of our team members will be sure to contact you very soon. We are looking forward to working with you.
    </p>
  `;

  const to = ['no-reply@foremostsolar.co.za', email];
  const bodies = [foremostBody, userBody];

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    let info;

    for (let i = 0; i < 2; i++) {
      info = await transport.sendMail({
        from: 'Foremost Solar (Pty) Ltd <no-reply@foremostsolar.co.za>',
        to: to[i],
        subject: subject,
        html: bodies[i],
      });
    }
    console.log(info.messageId);
    res.status(200).json({
      message: `Thank you for contacting Us ${name}, Foremost Solar has received your message.`,
      type: 'success',
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: error.message, type: 'danger' });
  }
}

export default handler;
