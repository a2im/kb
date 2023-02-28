'use client';
import { useState, useEffect } from 'react'

export default function Chatbot({interchanges}) {
  const [userQuestion, setUserQuestion] = useState('')
  const [allow, setAllow] = useState(false)
  const [interchange, setInterchange] = useState([])
  
  useEffect(() => {
      const initialBotTyping = async (setInterchange, setAllow) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      let initial = true
      setInterchange([{owner: false, text: ''}])
      setAllow(true)
      scrollDown()    
      setInterchange([{
      owner: false,
      text: tranformInterchanges(interchanges, initial)
   }])
      };
    initialBotTyping(setInterchange, setAllow);
   }, [interchanges])

   const handleSubmit = async (e) => {
    e.preventDefault()
    if(!userQuestion || !allow) return
    const uQ = userQuestion
    const newInterchange = [...interchange, {
      owner: true,
      text: userQuestion
    }]
  
    setInterchange(newInterchange)
    setUserQuestion('')
    setAllow(false)
    getBotAnswer(interchanges, setInterchange,  uQ, newInterchange, setAllow)
  }
  return (
<div className="flex flex-col font-mono items-center justify-center z-80">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col bg-gray-200 overflow-scroll p-2 w-full" style={{ height: "80vh"}}>
            {interchange.map((chat,i) => (
              chat.owner ? 
              <div key={i} className = "user flex flex-row my-2 w-full p-2">
              <span className = "w-2/3"></span>
              <span className = "w-1/3 bg-gray-100 p-2 rounded">
               {chat.text}
              </span>
            </div>
             :   
              <div key={i} className = "bot bg-gray-100 w-1/2 lg:w-1/3  p-2 rounded">
                <span dangerouslySetInnerHTML={createMarkup(chat.text)} />
              </div>
            ))}
            <div id="scrollTo"></div>
            </div>
            <footer className = "flex flex-row justify-between items-center p-1 h-5/6  w-full bg-black">
            <div className = "flex flex-row justify-between  bg-white w-full">
              <input className = " bg-gray-200 w-2/3 p-2 " placeholder="Type a message" value={userQuestion} onChange={ (e) => { setUserQuestion(e.target.value)}}/>
              <button className = " bg-black p-2 ml-2 w-1/3  text-white" type="submit"> Send</button>
            </div>
            </footer>
          </form>
        </div>
  )
}

const createMarkup = (text) => {
  return {__html: text};
}

export const tranformInterchanges = (interchanges, initial = false) => { 
  let initialText = initial ? `<b>Welcome to my page, glad to have you here 🥰</b> <br/>
 Tell me what you would like to know: <br/> <br/> `: ''
  interchanges.data.map((e, i) => {
      initialText += `${(i+1)}. ${e.attributes.question} <br /> <br />`
  })
  return initialText
}

export const searchInterchange = (interchanges, question) => {
  let result = interchanges.data.find(e => e.attributes.question.toLowerCase().includes(question.toLowerCase()))
  console.log(result?.attributes?.answer)
  if(result?.attributes?.answer === undefined ) 
  return `Cant seem to understand your question, please try again 😔<br><br>
    Here are the options again: <br/> <br/>
    ${tranformInterchanges(interchanges)}`;
  return result?.attributes?.answer
};

export const showBotTyping = async (setInterchange, prevState, setAllow) => {
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 1000));
  setInterchange([...prevState, {
    owner: false,
    text: 'A2IM Assistant is typing.'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 1000));
  setInterchange([...prevState, {
    owner: false,
    text: 'A2IM Assistant is typing..'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 1000));
  setInterchange([...prevState, {
    owner: false,
    text: 'A2IM Assistant is typing...'
  }])
  scrollDown()
  await new Promise(resolve => setTimeout(resolve, 1000));
  setAllow(true)
  scrollDown()
}

const scrollDown = () => {
  document.getElementById('scrollTo').scrollIntoView({behavior: "smooth", block: "start"});
}

export const getBotAnswer = async (interchanges, setInterchange, question, prevState, setAllow) => {
  await showBotTyping(setInterchange, prevState, setAllow)

  setInterchange([...prevState, {
    owner: false,
    text: searchInterchange(interchanges,question)
  }])
  scrollDown()
}
