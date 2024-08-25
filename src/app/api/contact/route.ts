import nodemailer from 'nodemailer';

export async function POST(request: Request) {
     const { name, email, message } = await request.json()

     const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
               user: process.env.SAM_EMAIL,
               pass: process.env.SAM_PASS,
          },
     });

     const mailOptions = {
          from: process.env.SAM_EMAIL,
          to: process.env.SAMS_EMAIL,
          subject: `Response from ${name}`,
          html: `
         <html lang="en" dir="ltr">
           <head>
             <title>Response</title>
             <style>
               @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
               body {
                 font-family: 'Roboto', Verdana, sans-serif;
               }
             </style>
           </head>
           <body
             <div>
             <p>${message}</p>
             <h4>Contact: ${email}</h4>
             </div>
           </body>
         </html>
     `,
     };

     try {
          const res = await transporter.sendMail(mailOptions);
          console.log(res)
          return Response.json(
               {
                    success: true,
                    message: "Response sent successfully."
               }, { status: 200 })

     } catch (emailError) {
          return Response.json(
               {
                    success: false,
                    message: "Failed to send Response."
               }, { status: 500 })
     }
}