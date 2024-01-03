import '@styles/globals.css';

export const metadata = {
  title: 'Nextjs Journey Code',
  description: 'My Journey to Learn Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
