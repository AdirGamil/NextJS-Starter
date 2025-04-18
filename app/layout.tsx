import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js 15 StarterKit by AdirG',
  description:
    'A modern and minimal starterkit powered by Next.js 15, TypeScript, and TailwindCSS — built by Adir Gamil for fast and scalable development.',
  keywords: [
    'Adir Gamil',
    'Adir',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'Next.js 15',
    'StarterKit',
    'TailwindCSS',
    'TypeScript',
    'Frontend Developer',
    'Developer Template',
    'Boilerplate',
  ],
  authors: [{ name: 'Adir Gamil', url: 'https://adirg.dev/' }],
  creator: 'Adir Gamil',
  openGraph: {
    title: 'Next.js 15 StarterKit by AdirG',
    description:
      'Kickstart your development with a sleek, fast, and customizable Next.js 15 starter template. Created by Adir Gamil using TypeScript and TailwindCSS.',
    url: 'https://adirg.dev/',
    siteName: 'AdirG StarterKit',
    images: [
      {
        url: 'https://res.cloudinary.com/dhweqnxgd/image/upload/v1743880187/starter_ad8wex.png',
        width: 1200,
        height: 630,
        alt: 'Next.js 15 StarterKit by AdirG',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 15 StarterKit by AdirG',
    description:
      'A developer boilerplate built by Adir Gamil using Next.js, TypeScript, and TailwindCSS.',
    creator: '@adirgamil',
    images: [
      'https://res.cloudinary.com/dhweqnxgd/image/upload/v1743880187/starter_ad8wex.png',
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
