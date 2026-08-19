import { transporter } from "../services/email.service.js"
import { generateOtp } from "../utils/helper.js"
import bcrypt from "bcrypt"
import { Otp } from "../models/Otp.js"

export const forgotPassword = async (request, response) => {

    const { email } = request.body

    try {
        if (!request.body.email) {
            response.status(400).send({ message: "Please Fill Details" })
            return
        }

        const otp = generateOtp()

        const hashedOtp = await bcrypt.hash(otp, 10)

        const data = await Otp.create({
            email,
            otp: hashedOtp
        })

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Password Reset Verification",
            text: `Your OTP is ${otp}`
        }

        await transporter.sendMail(mailOptions)

        response.status(200).json({ message: "Password Reset Email Sent", data })
    } catch (error) {
        console.error("Error sending email", error)
    }
}

export const verifyOtp = async (request, response) => {

    const { email, otp } = request.body

    try {

        if (!request.body.email || !request.body.otp) {
            response.status(400).send({ message: "email ans otp required" })
            return
        }

        const otpRecord = await Otp.findOne({ email })
        if (!otpRecord) {
            response.status(400).send({ message: "Otp Not Found" })
            return
        }

        const isVerified = await bcrypt.compare(otp, otpRecord.otp)
        if (!isVerified) {
            response.status(400).send({ message: "invalid otp" })
            return
        }

        response.status(200).json({ message: "OTP Verified" })

    } catch (error) {
        console.error("Error Verifying Otp")
    }
}

export const changePassword = (request, response) => {
    try {

    } catch (error) {

    }
}

export default { forgotPassword, verifyOtp, changePassword }