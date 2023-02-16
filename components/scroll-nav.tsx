'use client';
import Link from "next/link";
export default function ScrollNav({posts, KbName}){ 

    return(
      <>
<div className="side-bar fixed bg-stone-100 rounded-xl border-2 border-black ml-10">
  <nav className="navigation">
    <ul>
      <h4 className="text-black px-1 -mt-5 ">Index</h4>
      
{/* Map through the data */}
{posts?.data.map(posts => (
                <li key={posts.attributes.Title} className="mx-auto relative hover:scale-105 p-1">
                    <Link href={`/${posts.attributes.MainCategory}/${KbName}#${posts.attributes.Title}`} prefetch={false} passHref replace>{posts.attributes.Title}</Link>
                </li>
              )
            )}
            </ul>
        </nav>
        </div>
      </>
    )}