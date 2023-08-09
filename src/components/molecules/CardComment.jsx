export default function CardComment({ comment }) {
    return <div className="bg-slate-800 rounded-lg p-3">
        <h1 className="text-sm text-teal-600 mb-2">{comment.username}</h1>
        <p className="text-sm">{comment.comment}</p>
    </div>
}