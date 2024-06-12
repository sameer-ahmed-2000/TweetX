export function FunctionButton({label,onClick}){
    return <button onClick={onClick} type="button"
    className="rounded h-10 w-32 px-5 py-1 font-medium rounded-m text-sm bg-custom-red text-white">{label}</button>
}