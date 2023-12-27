import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";


export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SERVER_ID as string,
    }),
  ],
};
