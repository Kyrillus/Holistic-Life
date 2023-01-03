import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
        }),
    ],
    session: { strategy: "jwt" },

    callbacks: {

        async session({ session, token, user }) {
            session.jwt = token.jwt;
            session.id = token.id;
            return session;
        },

        async jwt({ token, user, account }) {

            const isSignIn = !!user;
            if (isSignIn) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/${account?.provider}/callback?access_token=${account?.access_token}`
                );
                const data = await response.json();
                token.jwt = data.jwt;
                token.id = data.user.id;
            }
            return token
        }
    },
    secret: process.env.NEXTAUTH_SECRET
})