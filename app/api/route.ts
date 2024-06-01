import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "testuser",
            credentials: {
                id: {
                    label: "Id",
                    type: "text",
                },
                password: {label: "Password", type: "password"},
            },
            async authorize(credentials) {
                
                const matched =
                    credentials?.id === "id" &&
                    credentials?.password === "password"
                if(matched) {
                    return {
                        id: "0116",
                    }
                } else {
                    return null
                }
            },
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }