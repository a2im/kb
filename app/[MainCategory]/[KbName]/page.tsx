import Footer from '../../footer'
import MyNavbar from '../../../components/nav'
import LoginButton from '../../../components/login'
import ModalInfo from '../../../components/modal-info'
import MyModal from '../../../components/modal'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import MyLineBreak from '@/components/linebreak'


export default async function OperationsDevelopment({params}: { params: { 
  MainCategory : String,
  KbName: String,
  slug: String,
 }}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/kb-articles?filters[MainCategory][$eq]=${params.MainCategory}&filters[kb_categories][Name][$eq]=${params.KbName}`);
  const posts = await res.json()
  var title = params.KbName
  var cleantitle = title.replace('%20',' ')
  return (
    <>
    <MyNavbar><LoginButton/></MyNavbar>
    <MyModal><ModalInfo/></MyModal>
    <h2 className="mx-auto max-w-5xl pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle}</h2>
    
        <div className=" grid grid-cols-0 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 overflow-hidden">
        {/* Map through the data */}
        {posts?.data.map(posts => (
                <div key={posts.id} className="text-stone-800 border-2 rounded-xl bg-stone-100 p-10 border-black">
                  <h2 >{posts.attributes.Title}</h2>
                  <MyLineBreak/>
                  <div className="max-w-4xl">
                  <p className="kbarticle"><ReactMarkdown className="line-break list-inside" remarkPlugins={[remarkGfm]}>{posts.attributes.Text}</ReactMarkdown></p>
                  </div>
                </div>
              )
            )}
        </div>
    <Footer/>
    </>
  )
}

export async function generateStaticParams(
) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/kb-categories?populate=*`);
  const data = await res.json();
  return data?.data?.map((data) => ({
    id: data.id,
    MainCategory: data?.attributes?.MainCategory,
    KbName: data?.attributes?.Name,
  }));
}
