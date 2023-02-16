'use client';
import Link from "next/link";
export default function ScrollNav({posts, KbName}){ 

    return(
      <>
<div className="mt-5 side-bar md:sticky md:top-16 my-auto bg-stone-100 rounded-xl border-2 border-black ml-5">
  <nav className="navigation">
    <ul className="list-inside p-2 marker:text-black items-center content-center">
      <h4 className="text-black px-2 -mt-5">{KbName}</h4>
      <hr className="border-black mx-2"/>
{/* Map through the data */}
{posts?.data.map(posts => (
                <li key={posts.attributes.Title} className="relative align-middle">
                    <Link href={`/${posts.attributes.MainCategory}/${KbName}#${posts.attributes.Title}`} prefetch={false} passHref replace><h5 className="hover:scale-[1.01] text-lg px-2 align-middle tracking-normal leading-tight whitespace-nowrap">{posts.attributes.Title}</h5></Link>
                </li>
              )
            )}
            </ul>
        </nav>
        </div>
      </>
    )}