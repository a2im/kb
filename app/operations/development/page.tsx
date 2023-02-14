import Footer from '../../footer'
import MyNavbar from '../../../components/nav'
import LoginButton from '../../../components/login'
import ModalInfo from '../../../components/modal-info'
import MyModal from '../../../components/modal'

export default async function OperationsDevelopment() {

  return (
    <>
    <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <div className="bggradient2 pt-8 mx-auto">
        <title>Development - Operations - A2IM Knowledge Base</title>
        <div className="pt-8 mx-auto max-w-4xl">
          <h2 className="text-center">Development</h2>
        </div>
        <div className="pb-96 md:pb-40 mb-20"></div>
        <Footer/>
    </div>
    </>
  )
}
