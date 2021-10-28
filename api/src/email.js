import nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: 'amazetcc@gmail.com', 
    pass: 'amaze2021',
  },
});


async function enviarEmail(email, senha, usuario) {
  const response = await sender.sendMail({
    from: '"TCC AMAZE" <amazetcc@gmail.com>',
    to: email, 
    subject: 'Teste',
    html: `<p> Olá ${usuario}, sua senha é :<b>${senha}</b> </p>`
  })
  return response;
}


export default enviarEmail;