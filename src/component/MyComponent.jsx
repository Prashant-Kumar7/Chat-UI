import React from 'react';
import { Message, Card } from '@voiceflow/react-chat';

export const ProactiveMessage = ({ messageData, setMessageArray }) => {
  


  function handleButtonClick(e){

    const tag = e.target

    
    if(isHTML(tag.innerHTML)){

      const innerTag = tag.innerHTML;
      const parser = new DOMParser();
      const document = parser.parseFromString(innerTag, "text/html");
      const innerText = document.querySelector("h3").innerHTML
      setMessageArray((prevValue)=>{
        return [...prevValue, innerText]
      })

    }else {
      setMessageArray((prevValue)=>{
        return [...prevValue, tag.innerHTML]
      })
    }
  }

  function isHTML(str) {
    var a = document.createElement('div');
    a.innerHTML = str;
  
    for (var c = a.childNodes, i = c.length; i--; ) {
      if (c[i].nodeType == 1) return true; 
    }
  
    return false;
  }

  return (
    <Message >
      {messageData.content}
      {messageData.components.map((component) => (
        <div onClick={handleButtonClick}>
          <Card key={component.id} action={{
              type: 'custom',
              payload: { handleButtonClick } // Pass the onClick function as payload
              }} title={component.title}/>
        </div>
      ))}
    </Message>
  );
};

export const MyComponent = ({setMessageArray}) => {
  const messageData = {
    content: 'Would you like to:',
    components: [
      {
        id: 1,
        title: 'Say Hi'
        
      },
      {
        id: 2,
        title: 'Ask GPT'
      },{
        id: 3,
        title: 'End Chat'
    
      }
    ],
  };

  return (
    <div className=''>
        <ProactiveMessage setMessageArray={setMessageArray} messageData={messageData} />
    </div>      
    )
};

export default MyComponent;
