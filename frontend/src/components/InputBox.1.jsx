export function InputBox({ placeholder, onChange }) {
    return(
        <div className="py-6">
            <input onChange={onChange} placeholder={placeholder} className="w-full pl-4 px-1 py-2.5 border rounded border-slate-200 bg-custom-gray" />
        </div>
    )
}
