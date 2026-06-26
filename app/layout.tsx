import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Titan Fitness Gym',
  description: 'Transform Your Body, Transform Your Life. Premium fitness center with weightlifting, cardio, yoga, and zumba programs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
