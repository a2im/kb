'use client';
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { useQuery } from "@apollo/client";
import { GET_INFO_BUTTON } from "../lib/gql/queries";

export default function ModalInfo(){
    const { loading, error, data } = useQuery(GET_INFO_BUTTON, { 
        variables: {
          PublicationState: "LIVE", 
          Name: "Indie Week"
        }});
        if (loading) return <div className="animate-pulse h-[150px] w-[100px] bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        if (error) return <p>Error</p>
    return (
        <div>
            {data?.infoButtons.data.map(info => (
            <div key={info.id} className="px-4 pb-4 justify-evenly rounded-xl">
              <h3 className="text-2xl py-2 font-bold">INFORMATION</h3>
                <ReactMarkdown className="line-break" remarkPlugins={[remarkGfm]}>{info.attributes.Info}</ReactMarkdown>
                </div>
                              )
            )}
        </div>
    )
}