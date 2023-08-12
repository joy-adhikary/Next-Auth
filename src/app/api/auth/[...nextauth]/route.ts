

import NextAuth, { NextAuthOptions } from "next-auth";
// import EmailProvider from "next-auth/providers/email";
// import FacebookProvider from "next-auth/providers/facebook";
// import GithubProvider from "next-auth/providers/github";
// import TwitterProvider from "next-auth/providers/twitter";
// import Auth0Provider from "next-auth/providers/auth0";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {

    providers: [

        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM,
        // }),

        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID as string,
        //     clientSecret: process.env.FACEBOOK_SECRET as string,
        // }),

        // GithubProvider({
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),

        // TwitterProvider({
        //     clientId: process.env.TWITTER_ID as string,
        //     clientSecret: process.env.TWITTER_SECRET as string,
        // }),

        // Auth0Provider({
        //     clientId: process.env.AUTH0_ID,
        //     clientSecret: process.env.AUTH0_SECRET,
        //     issuer: process.env.AUTH0_ISSUER,
        // }),

        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],

    pages: {
        signIn: '/signin',
        signOut: '/signout',
    },

    theme: {
        colorScheme: "light",
    },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }