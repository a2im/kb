import './globals.css'
import { Providers } from '../components/providers';
import { config } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AuthContext from '../components/next-auth-provider';

config.autoAddCss = false
library.add(fas)

export const runtime = 'nodejs'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}, pageProps: { session }) { 
  return (
    <html lang="en">
      <head/>
      <body className="min-h-screen">
        <AuthContext>
      <Providers> 
        {children}
      </Providers>
      </AuthContext>
      </body>
    </html>
  )
}
