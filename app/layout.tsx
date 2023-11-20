
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body>
        {children}
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  )
}
