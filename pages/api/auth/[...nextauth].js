import NextAuth from "next-auth"
import connectDB from "./lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from '../../models/userModel';
import bcrypt from 'bcrypt';

connectDB();

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await Users.findOne({ email });
                if (!user) {
                    throw new Error("You have'nt registered yet");
                }

                if (user) {
                    return signInUser({ password, user });
                }
            }
        })
    ],
    pages: {
        signIn: '/signin',
    },
    secret: 'secret',
    database: process.env.MONGODB_URI
})


const signInUser = async ({ password, user }) => {

    if (!user.password) {
        throw new Error("Please enter password");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Password is incorrect");
    }
    return user;
}