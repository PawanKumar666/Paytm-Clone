export default function Button({title, onPress}){
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onPress}>{title}</button>
    )
}