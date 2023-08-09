import Header from "../organisms/Header";

export default function Base({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-bl to-slate-950 from-slate-800 text-slate-300">
            <Header />
            <main className="container px-3 mt-5 mx-auto">
                {children}
            </main>
        </div>
    );
}