import type { DefaultSession, NextAuthConfig } from "next-auth";

import { env } from "./env";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authConfig = {
  // In development, we need to skip checks to allow Expo to work
  // ...(!isSecureContext
  //   ? {
  //       skipCSRFCheck: skipCSRFCheck,
  //       trustHost: true,
  //     }
  //   : {}),
  secret: env.AUTH_SECRET,
  providers: [],
} satisfies NextAuthConfig;

// export const validateToken = async (
//   token: string,
// ): Promise<NextAuthSession | null> => {
//   const sessionToken = token.slice("Bearer ".length);
//   const session = await adapter.getSessionAndUser?.(sessionToken);
//   return session
//     ? {
//         user: {
//           ...session.user,
//         },
//         expires: session.session.expires.toISOString(),
//       }
//     : null;
// };

// export const invalidateSessionToken = async (token: string) => {
//   const sessionToken = token.slice("Bearer ".length);
//   await adapter.deleteSession?.(sessionToken);
// };
