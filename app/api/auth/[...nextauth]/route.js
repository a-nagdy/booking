import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const prisma = new PrismaClient();
export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.User.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("No User Found With Email Please Sign Up...!");
        }

        // const isPasswordValid = await compare(
        //   credentials.password,
        //   user.password
        // );
        const isPasswordValid = user.password === credentials.password;
        if (!isPasswordValid || user.email !== credentials.email) {
          throw new Error("UserName or password doesn't match");
        }
        return {
          id: user.id,
          email: user.email,
          name: user.firstName,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      // console.log(session, token);
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      };
    },
    jwt: ({ token, user }) => {
      // console.log(user, token);
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
