export function RedirectButton({label,onClick}){
    return <button onClick={onClick} type="button" 
    className="rounded h-8 px-5 py-1 font-medium rounded-lg text-sm outline outline-offset-2 outline-1 outline-black">{label}</button>
}