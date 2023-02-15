'use client';

import { GET_KB_CATEGORIES } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import { useRouter } from "next/navigation";
import Link from "next/link";

export function GetCategories({MainCategory}) {
  const router = useRouter()
    const { loading, error, data } = useQuery(GET_KB_CATEGORIES, { 
      variables: {
        MainCategory: MainCategory
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
    return (
        <ul className="md:lvl2 max-w-3xl relativemx-auto justify-evenly">
        {/* Map through the data */}
        {data?.kbCategories.data.map(kbCategories => (
                <li key={kbCategories.id} className="text-stone-800 border-2 rounded-xl bg-stone-100 border-black">
                   <Link href={`/${MainCategory}/${kbCategories.attributes.Name}`} onClick={() => router.push(`/${MainCategory}/${kbCategories.attributes.Name}`)}><h3 className="text-xl hover:scale-105 px-3 -mt-3">{kbCategories.attributes?.Name}</h3></Link>
                </li>
              )
            )}
        </ul>
    );
}