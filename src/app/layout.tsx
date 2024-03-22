import './globals.css'
import { Inter } from 'next/font/google'
import { BottomNavigation } from "../components/bottomnavigation/BottomNavigation";
import { TopNavigation } from "../components/topnavigation/TopNavigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recipe Website',
  description: 'Website for Recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <TopNavigation />
              {children}
            <BottomNavigation />
          </div>
        </div>
      </body>
    </html>
  )
}