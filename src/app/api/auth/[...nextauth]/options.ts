import { prisma } from '@/lib/prisma'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile! :(')
      }

      try {
        const user = await prisma.user.upsert({
          where: { email: profile.email },
          create: {
            email: profile.email!,
            firstName: profile.name!,
            lastName: ''!,
            provider: account?.provider as string
          },
          update: {}
        })

        console.log('profile created!')
        console.log(user)
      } catch (error) {
        console.log('Signin Error: ', error)
        throw new Error('Error signing in.. Try again later')
      }

      return true
    },
    async jwt({ token, user }) {
      if (user) {
        // get user from db with the email
        // if there is no user with the email, create new user
        // else set the user data to token
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        // set the token data to session
      }

      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}
