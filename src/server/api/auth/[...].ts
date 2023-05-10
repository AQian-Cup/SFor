/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  secret: "LUT",
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id ?? "";
        token.username = (user as any).username ?? "";
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      (session as any).user.id = token.id;
      (session as any).user.username = token.username;
      return Promise.resolve(session);
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;
        if (!(await hasUser(email))) {
          return null;
        }
        const user = await authUser(email, password);
        return user;
      },
    }),
  ],
});
