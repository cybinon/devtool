import * as nodemailer from 'nodemailer';

interface Mail {
    host  : string,
    port  : number,
    secure: boolean,
    auth  : {
      user:string,
      pass: string
    }
  }
export const sendMail = async (mail: Mail, from:string, placeholder:string, to: string, subject: string, text:string, html: string):Promise<void> => {
    const transporter = nodemailer.createTransport(mail);

    const info = await transporter.sendMail({
        from: `${placeholder} <${from}>`,
        to,
        subject,
        text,
        html,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
