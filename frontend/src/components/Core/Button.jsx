export default function Button({title, onClick}){
    return (
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClick}>{title}</button>
    )
}