'use client';

import { GET_KB_CATEGORIES } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import { useRouter } from "next/navigation";
import Link from "next/link";

export function GetCategories({MainCategory,listyle, textstyle}) {
  const router = useRouter()
    const { loading, error, data } = useQuery(GET_KB_CATEGORIES, { 
      variables: {
        MainCategory: MainCategory
      }});
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>


    return data?.kbCategories.data.map(kbCategories => (
                <li key={kbCategories.id} className={listyle}>
                   <Link href={`/${MainCategory}/${kbCategories.attributes.Name}`} onClick={() => router.push(`/${MainCategory}/${kbCategories.attributes.Name}`)}><h4 className={textstyle}>{kbCategories.attributes.Name}</h4></Link>
                </li>
              )
    );
}