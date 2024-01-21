import nodemailer from "nodemailer";
var smtpTransport = require("nodemailer-smtp-transport");


export async function SentEmail(EmailTo, EmailText, EmailSubject) {
 let Transport= nodemailer.createTransport(smtpTransport({
        host:"s1.bitsboxhost.com",
        port:465,
        secure:true,
        auth:{user:"demo@buildawebsiteeasily.com", pass:"000***000"},
        tls:{rejectUnauthorized:false}
    }))

  let MailOption = {
    from: "Next js news portal<demo@buildawebsiteeasily.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };
  return await Transport.sendMail(MailOption);
}


