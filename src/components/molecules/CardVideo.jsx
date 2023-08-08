export default function CardVideo({ title, description, thumbnail }) {
    return (
        <div className="aspect-[9/16] px-3 py-5 w-full rounded-xl overflow-hidden group relative bg-cover bg-center flex flex-col justify-end cursor-pointer transition duration-500 hover:-translate-y-2"
            style={{
                backgroundImage: `url('${thumbnail}')`
            }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div className="z-10">
                <h1 className="text-teal-500 text-xl line-clamp-1 mb-1">{title}</h1>
                <small className="text-sm line-clamp-2">{description}</small>
            </div>
        </div>
    )
}