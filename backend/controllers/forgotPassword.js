import { transporter } from "../services/email.service.js"
import { generateOtp } from "../utils/helper.js"
import bcrypt from "bcrypt"
import { Otp } from "../models/Otp.js"
import { User } from "../models/User.js"
import { changePasswordSchema } from "../validations/auth.validations.js"

export const forgotPassword = async (request, response) => {

    const { email } = request.body

    try {
        if (!request.body.email) {
            response.status(400).send({ message: "Please Fill Details" })
            return
        }

        const res = await User.findOne({ email })
        if (!res) {
            response.status(400).send({ message: "user not found" })
            return
        }

        const otp = generateOtp()

        const hashedOtp = await bcrypt.hash(otp, 10)

        const data = await Otp.create({
            email,
            otp: hashedOtp,
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

export const changePassword = async (request, response) => {

    const { email } = request.body

    const { error, value } = changePasswordSchema.validate(request.body)

    if (error) {
        response.status(400).json(error.details[0].message)
    }

    try {

        const { newPassword } = value

        if (!email || !newPassword) {
            response.status(400).send({ message: "email and password is required" })
            return
        }

        const user = await User.findOne({ email })
        if (!user) {
            response.status(400).send({ message: "user not found" })
            return
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10)

        user.password = hashedPassword
        user.otp = undefined
        await user.save()

        response.status(200).json({ message: "Password Reset Sucessfully" })

    } catch (error) {
        console.error("Error While Resetting Password", error)
    }
}

export default { forgotPassword, verifyOtp, changePassword }