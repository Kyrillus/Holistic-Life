import nodemailer from 'nodemailer';

export default async (req: any, res: any) => {
    const { name, tel, addInfo } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'mail.smtp2go.com',
        port: 2525,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Holistic Life" <support@holistic-life.dev>',
        to: "company@holistic-life.dev",
        subject: "You have a new contact!",
        html: "Name: " + name + "<br>" + "Tel: " + tel + "<br>" + "Text: " + addInfo
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent' });
};
