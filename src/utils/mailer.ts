import * as nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
interface Mail {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}
interface SendMail {
  placeholder: string;
  to: string;
  subject: string;
  text: string;
  html: string;
}

export class Mailer {
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
  from: string;
  constructor(mail: Mail, from: string) {
    this.transporter = nodemailer.createTransport(mail);
    this.from = from;
  }

  /**
   * Энэ функцыг Exception Handle хийх шаардлагатай.
   * @param {string} from
   * @param {string} placeholder
   * @param {string} to
   * @param {string} subject
   * @param {string} html
   */
  async sendMail({ placeholder, to, subject, text, html }: SendMail) {
    const info = await this.transporter.sendMail({
      from: `${placeholder} <${this.from}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return info;
  }
}
