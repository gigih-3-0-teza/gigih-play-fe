export default function Button({ children, className, ...rest }) {
    return (
        <button className={`bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:ring text-white px-3 py-2 rounded-lg flex shadow-xl ${className}`} {...rest}>
            {children}
        </button>
    )
}