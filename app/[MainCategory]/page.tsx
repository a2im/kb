import Footer from '../footer'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'
  
export default async function MainCategory({params}: { params: { 
  MainCategory : String,
 }}) {
  var title = params.MainCategory
  var cleantitle = title.replace('%20',' ')
  return (
    <>
    <h2 className="mx-auto max-w-5xl pt-20 pb-10 text-center drop-shadow-2xl dark:text-neutral-50">{cleantitle}</h2>
    
        <div className=" grid grid-cols-0 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 overflow-hidden"></div>
    <div className="pt-8 mx-auto">
        <title>A2IM Knowledge Base</title>
        <div className="pt-8 mx-auto max-w-4xl">
        </div>
        <div className="pb-96 md:pb-40 mb-20"></div>
        <Footer/>
    </div>
    </>
  )
}

  