import bcrypt from "bcrypt"
import { Otp } from "../models/Otp.js"
import { generateOtp } from "../utils/helper.js"
import { transporter } from "../services/email.service.js"

export const verifyOtp = async (request, response) => {

    const { email, otp } = request.body

    try {
        const otpRecord = await Otp.findOne({ email })

        if (!otpRecord) {
            response.status(400).send({ message: "Otp Not Found" })
            return
        }

        const isVerified = await bcrypt.compare(otp.toString(), otpRecord.otp)
        if (!isVerified) {
            response.status(400).send({ message: "invalid otp" })
            return
        }

        response.status(200).json({ message: "OTP Verified" })

    } catch (error) {
        console.error("Error Verifying Otp")
    }
}

export const resendOtp = async (request, response) => {
    try {
        const { email } = request.body

        const user = await Otp.findOne({ email })

        if (!user) {
            response.status(400).send({ message: "user not found" })
            return
        }

        const newOtp = generateOtp()

        const hashedOtp = await bcrypt.hash(newOtp, 10)

        const isMatched = await bcrypt.compare(newOtp, hashedOtp)

        if (!isMatched) {
            response.status(400).send({ message: "Otp does not match" })
            return
        }

        const data = await Otp.findOneAndUpdate(
            { email: email },
            { otp: hashedOtp },
            { new: true },
        )

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Resend Otp Verification",
            text: `Your Otp is ${newOtp}`
        }

        await transporter.sendMail(mailOptions)

        response.status(200).json({ message: "Otp Resend Sucessfully", data })

    } catch (error) {
        console.error("Error resending otp", error)
    }
}

export default { verifyOtp, resendOtp }