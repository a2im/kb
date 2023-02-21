import Footer from '../footer'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import Image from 'next/image'
import ThemeToggle from '@/components/theme-switcher'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
    <div className="bg:a2imblue relative">
      <title>A2IM Knowledge Base!!!</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
        <div className="py-64 mx-auto max-w-3xl">
          <ThemeToggle/>
        <div className="rounded-full max-w-[100px] relative overflow-hidden">
          
          <Image src={session.user.image} 
          className="inline-block"
          alt="profile photo"
            width={500}
            height={500}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}>

                  </Image></div>
          <h2 className="animate-text 
          bg-gradient-to-r 
          from-teal-500 
          via-purple-500 
          to-orange-500 
          bg-clip-text 
          text-transparent">
            Congrats, {session.user.name}!</h2>
          <p>You&apos;ve Discovered a <span className="animate-pulse">secret</span> A2IM Zone!</p>
        </div>
        <Footer/>
    </div>
    </>
  )
}
