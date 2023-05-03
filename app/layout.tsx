// Packages
import './globals.css'
import { Nunito } from 'next/font/google'
// Components
import Navbar from './components/Navbar'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
// Providers
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'


const font = Nunito({ subsets: ['latin'] })
export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal/>
          <LoginModal/>
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
