import Footer from './footer'
import MyNavbar from '../components/nav'
import LoginButton from '../components/login'
import ModalInfo from '../components/modal-info'
import MyModal from '../components/modal'
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
    <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <div className="bggradient2 relative">
      <title>A2IM Knowledge Base</title>
      <meta
          name="description"
          content="Founded by independents, for independents, A2IM Indie Week is a four-day conference for the independent music community in the United States."
          key="desc"
        />
        <Footer/>
    </div>
    </>
  )
}
