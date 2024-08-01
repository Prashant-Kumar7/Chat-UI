import { Avatar, Button, Chat, ChatInput, Launcher, Textarea } from '@voiceflow/react-chat'
import { useState } from 'react'
import { ChatUI } from './component/ChatUI'


function App() {
  const [launch, setLaunch] = useState(false)

  return (

    <div className='w-screen h-screen flex flex-col p-6 items-end justify-end bg-slate-800'>

        {/* <div className='flex flex-col'> */}
          <div className={launch? "" :" hidden" }>
              <ChatUI setLaunch={setLaunch} Launch={launch}/>
          </div>

          <Launcher onClick={()=>setLaunch(!launch)}/>

        {/* </div> */}



    </div>
  )
}

export default App
