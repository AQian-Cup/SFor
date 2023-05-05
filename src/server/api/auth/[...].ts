import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

export default NuxtAuthHandler({
  secret: "LUT",
  pages: {
    signIn: "/auth",
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "credentials",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        const { email, password } = credentials;
        if (!(await hasUser(email))) {
          return null;
        }
        if (!(await authUser(email, password))) {
          return null;
        }
        return true;
      },
    }),
  ],
});
