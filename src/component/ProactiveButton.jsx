export const ProactiveButtons = ({text, setMessageArray})=>{

    function handleClick(){
        setMessageArray((prevValue)=>{
            return [...prevValue, text]
        })
    }


    return (
        <div className="m-1">
            <button className="border-2 border-slate-300 rounded-full p-2 bg-slate-200 hover:bg-slate-300" onClick={handleClick}>{text}</button>
        </div>
    )
}