import Footer from '../../footer'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import MyLineBreak from '@/components/linebreak'
import ScrollNav from '@/components/scroll-nav'

export const dynamic = 'force-dynamic',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default async function OperationsDevelopment({params}: { params: { 
  MainCategory : string,
  KbName: string,
  slug: string,
 }}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/kb-articles?filters[MainCategory][$eq]=${params.MainCategory}&filters[kb_categories][Name][$eq]=${params.KbName}`, { next: { revalidate: 60 }});
  const posts = await res.json()
  var title = params.KbName
  var cleantitle = title.replace('%20',' ')
  return (
    <>
    <h2 className="mx-auto pt-20 pb-10 text-center drop-shadow-2xl dark:text-neutral-50">{cleantitle}</h2>
    <div className="flex flex-col-reverse md:flex-row max-w-5xl mx-auto">
      <div className="invisible md:visible md:display shrink">
    <ScrollNav posts={posts} KbName={cleantitle}/>
    </div>
        <div className="grid grid-cols-0 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 overflow-hidden px-5">
        {/* Map through the data */}
        {posts?.data?.map(posts => (
                <section key={posts.id} id="articlesection" className="articlesection border-2 rounded-xl p-10 border-black dark:border-white bg-neutral-100 dark:bg-gradient-to-tl from-neutral-800 to-neutral-700 dark:text-neutral-50">
                  <h2 className="dark:text-neutral-50" >{posts.attributes.Title}</h2>
                  <MyLineBreak/>
                  <div className="max-w-4xl">
                  <span className="kbarticle"><ReactMarkdown className="line-break list-inside" remarkPlugins={[remarkGfm]}>{posts.attributes.Text}</ReactMarkdown></span>
                  </div>
                </section>
              )
            )}
        </div>
        </div>
    <Footer/>
    </>
  )
}


