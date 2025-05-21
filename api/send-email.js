// api/send-email.js
import { Resend } from 'resend';

const resend = new Resend('re_U3eS6QrG_9CUxDM34jTDuK9HGdB5kriQU');

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { to, subject, html } = req.body;

  if (!to || !subject || !html) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const result = await resend.emails.send({
      from: 'simplymacaronsyyj@gmail.com',
      to,
      cc: 'simplymacaronsyyj@gmail.com',
      subject,
      html,
    });
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
