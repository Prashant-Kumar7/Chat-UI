export const Message = ({text})=>{
    return (
        <div className="p-2 flex justify-end">
            <span style={{maxWidth : "14rem", borderRadius: "1rem"}} className="bg-blue-400 text-white p-2">{text}</span>
        </div>
    )
}