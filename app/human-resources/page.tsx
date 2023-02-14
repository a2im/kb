import Footer from '../footer'
import MyNavbar from '../../components/nav'
import LoginButton from '../../components/login'
import ModalInfo from '../../components/modal-info'
import MyModal from '../../components/modal'

export default async function HumanResources() {

  return (
    <>
    <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <div className="bggradient2 pt-8">
          <title>Human Resources - A2IM Knowledge Base</title>
<h2>Human Resources</h2>
          <div className="pb-96 md:pb-40 mb-20"></div>
          <Footer/>
    </div>
    </>
  )
}
