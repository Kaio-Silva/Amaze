import nodemailer from 'nodemailer'


const sender = nodemailer.createTransport({
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
      user: 'amazetcc@gmail.com',
      pass: 'amaze2021', 
    },
  });

  async function enviarEmail(para, senha) {
    const response = await sender.sendMail({
      from: 'Amaze "<amazetcc@gmail.com>"',
      to: para,
      subject: "Sua Senha",
      html: `
        <main>  
            <h1> Sua senha é: ${senha}</h1>
        </main>
      `
    })
    return response;
  }

  export default enviarEmail;