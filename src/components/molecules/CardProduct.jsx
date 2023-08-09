import { currencyFormatter } from "../../../libs/helper";

export default function CardProduct({ product }) {
    return (
        <a href={product.link} target="_blank" rel="noreferrer" className="bg-slate-800 rounded-lg overflow-hidden shadow-xl group cursor-pointer">
            <div className="overflow-hidden h-48 sm:h-56">
                <img src={product.image} alt={product.name} className="group-hover:scale-110 transition-all duration-300 w-full h-full object-cover" />
            </div>
            <div className="p-3">
                <h1 className="text-lg text-teal-500 mb-2">{product.name}</h1>
                <p className="text-sm">{currencyFormatter(product.price)}</p>
                <h2></h2>
            </div>
        </a>
    )
}