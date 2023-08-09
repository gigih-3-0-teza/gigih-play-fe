export default function FormControl({ type, placeholder, className, ...props }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full block py-2 px-3 rounded-lg border border-slate-600 bg-slate-700 text-slate-300 focus:outline-none focus:ring focus:ring-teal-400/75 focus:border-transparent ${className}`}
            {...props}
        />
    )
}