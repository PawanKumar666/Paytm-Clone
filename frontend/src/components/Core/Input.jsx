export default function Input({type, placeholder, onChange}){
    return (
        <input className="border-2 border-gray-300 rounded-md my-2" type={type} placeholder={placeholder} onChange={onChange} />
    )
}