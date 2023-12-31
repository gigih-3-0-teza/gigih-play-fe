import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="z-50 bg-slate-900 shadow-xl sticky top-0">
            <div className="container mx-auto py-4 px-3 flex justify-between border-slate-600 border-b-2">
                <Link to="/">
                    <h1 className="text-xl text-teal-500 my-auto font-bold">GigihPlay</h1>
                </Link>
            </div>
        </header>
    )
}