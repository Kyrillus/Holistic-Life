import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import {loginUser} from "../../../lib/userAPI";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "username"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const {user, jwt} = await loginUser(credentials.username, credentials.password);
                if (jwt)
                    return {...user, jwt: jwt};
                return null;
            }
        })
    ],
    session: {strategy: "jwt"},

    pages: {
        signIn: "/login",
        error: "/login"
    },

    callbacks: {
        async session({session, token, user}) {
            session.jwt = token.jwt;
            session.user.username = token.username;
            session.user.id = token.user.id;
            session.user.email = token.user.email;
            session.user.firstname = token.user.firstname;
            session.user.lastname = token.user.lastname;
            return Promise.resolve(session);
        },

        async jwt({token, user, account}) {
            const isSignIn = !!user;
            if (isSignIn) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/${account?.provider}/callback?access_token=${account?.access_token}`
                );
                const data = await response.json();
                if (account?.provider === "credentials") {
                    token.jwt = user.jwt;
                    token.createdAt = user.createdAt;
                    token.user = {id: user.id, email: user.email, username: user.username, firstname: user.firstname, lastname: user.lastname};
                }else {
                    token.jwt = data.jwt;
                    token.user = {...user, id: data.user?.id};
                }
            }
            return Promise.resolve(token);
        },

        async signIn({account, profile}) {
            return true
        },
    },
    secret: process.env.NEXTAUTH_SECRET
})