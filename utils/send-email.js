const nodemailer = require("nodemailer")

const sendEmail = async (code, email) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.APP_KEY
            }
        })

        await transporter.sendMail({
            subject: "Shopping",
            from: process.env.MAIL_USER,
            to: email,
            html: `<h2>Tasdiqlash kodi ${code}</h2>`
        })
    } catch (error) {
        console.log("Email xabar yuborishda xatolik: ", error.message);
    }
}

module.exports = sendEmail
