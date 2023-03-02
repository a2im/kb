import { GetCategories } from '../../components/get-categories';

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
    <h1 className="mx-auto max-w-5xl pt-20 pb-10 text-center drop-shadow-2xl dark:text-neutral-50">{cleantitle}</h1>
    <div className="pt-8 mx-auto">
        <title>A2IM Knowledge Base - {cleantitle}</title>
        <div className=" mx-auto w-64">
          <ul className="relative mx-auto justify-evenly list-inside ">
        <GetCategories MainCategory={cleantitle} listyle={"my-5 relative side-bar md:sticky md:top-16 my-auto bg-neutral-100 dark:bg-neutral-800  rounded-xl border-2 border-black ml-5 dark:border-white mx-auto hover:scale-105 dark:bg-gradient-to-tl from-neutral-800 to-neutral-700"} textstyle={"mx-auto text-black text-center align-center dark:text-white"}/>
        </ul>
        </div>
        <div className="pb-96 md:pb-40 mb-20"></div>
    </div>
    </>
  )
}

  