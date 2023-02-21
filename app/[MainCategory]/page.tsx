import Footer from '../footer'

export default async function MainCategory({params}: { params: { 
  MainCategory : String,
 }}) {
  var title = params.MainCategory
  var cleantitle = title.replace('%20',' ')
  return (
    <>
    <h2 className="mx-auto max-w-5xl pt-20 pb-10 text-center drop-shadow-2xl">{cleantitle}</h2>
    
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

export async function generateStaticParams(
  ) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/kb-categories?populate=*`, { next: { revalidate: 10 } });
    const data = await res.json();
    return data?.data?.map((data) => ({
      id: data.id,
      MainCategory: data?.attributes?.MainCategory,
      KbName: data?.attributes?.Name,
    }));
  }
  