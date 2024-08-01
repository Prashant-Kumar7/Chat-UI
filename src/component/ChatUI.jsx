import { Avatar, ChatInput, Header, TypingIndicator } from '@voiceflow/react-chat'
import { useState, useEffect, useRef } from 'react'
import { Message } from './Message'
import MyComponent from './MyComponent'


export const ChatUI = ({setLaunch, Launch})=>{

    const [typing, setTyping] = useState(true)
    const bottomOfChatRef = useRef(null)

    const [message, setMessage] = useState("")
    const [messageArray, setMessageArray] = useState([])

    useEffect(()=>{
        if(bottomOfChatRef.current){
            bottomOfChatRef.current.scrollIntoView()
        }
    }, [messageArray])

    

    function handleChange(e){
        // setTyping(true)
        setMessage(e)
    }


    function handleStartUp(){
        setTimeout(()=>{
            setTyping(false)
        },3000)
    }

    function handleDown(){
        bottomOfChatRef.current.scrollIntoView()
    }

    return (
        <div className='pr-14'>
            <div style={{height : "35rem", width : "22.5rem"}} className='bg-white rounded-lg'>
                <div style={{height: "32rem"}} className='w-full bg-white '>
                    
                    
                    <div style={{backgroundColor: "#3d82e2"}} className='flex items-center justify-between'>
                        <div style={{width : "19rem", border: "0px"}}>
                            <Header title='AI assistant' image='https://www.shutterstock.com/image-vector/cute-robot-waving-hand-cartoon-600nw-1917055787.jpg'/>
                        </div>
                        <div className='text-center text-white flex justify-between items-center'>
                            <span onClick={()=>setLaunch(false)} className='m-1 mr-3 p-1 text-2xl cursor-pointer hover:text-slate-300'>x</span>
                        </div>
                    </div>
                    <div style={{height: "28.5rem", position: "absolute", width: "22.5rem"}} className='overflow-y-auto'>
                        <div className='flex justify-center p-4'>
                            <Avatar size={"large"} avatar='https://www.shutterstock.com/image-vector/cute-robot-waving-hand-cartoon-600nw-1917055787.jpg'/>
                        </div>
                        <div className='text-center mb-4 font-semibold text-gray-500'>
                            <p>Hi I am your AI assistant.</p>
                            <p>Ask me Anything.</p>
                        </div>
                        

                        <div className={!typing? "pl-2" : "hidden"}>
                            

                            <MyComponent setMessageArray={setMessageArray}/>

                        </div>

                        {Launch? handleStartUp() : ""}


                        {messageArray.map((message, index)=>{
                        return <Message key={index} text={message}/>
                        
                        })}


                        

                        <div ref={bottomOfChatRef} className='p-2 m-2 flex'>
                            {typing? <TypingIndicator/> : <div></div> }
                        </div>
                        
                    </div>
                    
                </div>
                
                <div>
                    <ChatInput onSend={()=>{
                        setMessageArray((prevValue)=>{
                            return [...prevValue, message]
                        })
                        setMessage("")
                    }} value={message} disabled = {messageArray.length===0 ? true : false} onValueChange={handleChange} placeholder='Ask something'/>
                </div>


            </div>
        </div>
    )
}