// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, phone, email, apartments, number, message, checkin, checkout } = req.body;

      // Создаем транспорт для отправки почты (замените данными вашего почтового сервера)
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Хост для Gmail SMTP
        port: 465, // Порт для SSL
        secure: true, // Использовать SSL
        auth: {
          user: 'alexander.banduk@gmail.com', // Ваш адрес электронной почты Gmail
          pass: 'xfkavxyrypvkxtrs', // Ваш пароль приложения Gmail
        },
      });

      // Опции для отправки письма
      const mailOptions = {
        from: email,
        to: 'alexander.banduk@gmail.com',
        subject: `New message from ${name} - Luft Apartments`,
        text: `${message}\n\nContact Details:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nApartment: ${apartments}\nNumber of Guests: ${number}\nCheck-In Date: ${checkin}\nCheck-Out Date: ${checkout}`,
      };

      // Отправляем письмо
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}