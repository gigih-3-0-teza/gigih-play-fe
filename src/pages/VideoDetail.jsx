import { useEffect, useState } from "react";
import Base from "../components/templates/Base";
import { useParams } from "react-router-dom";
import { addComment, getVideoById } from "../../libs/play-api";
import CardProduct from "../components/molecules/CardProduct";
import CardComment from "../components/molecules/CardComment";
import FormComment from "../components/molecules/FormComment";

export default function VideoDetail() {
    const { videoId } = useParams();
    const [video, setVideo] = useState({});
    const [comments, setComments] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getVideoById(videoId).then((res) => {
            setVideo(res.data);
            setComments(res.data.comments);
            setProducts(res.data.products);
        }).catch((err) => {
            alert(err.message);
        });
    }, [videoId]);

    const handleSubmit = (values) => {
        addComment({ ...values, video: videoId }).then((res) => {
            setComments([res.data, ...comments]);
        }).catch((err) => {
            alert(err.message);
        });
    }

    return (
        <Base>
            <div className="lg:grid lg:grid-cols-3 lg:gap-3 lg:grid-rows-2">
                <div className="pb-5 mb-3 border-b border-slate-700 lg:col-span-2">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                        <iframe
                            className="w-full h-full"
                            src={video.urlEmbed}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}>
                        </iframe>
                    </div>
                    <h1 className="text-2xl text-teal-500 mb-2">{video.title}</h1>
                    <p className="text-sm">{video.description}</p>
                </div>
                <div className="mb-3 border-b border-slate-700 pb-5 lg:row-span-2">
                    <h1 className="text-xl text-teal-500 mb-2 font-bold">Products</h1>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2">
                        {products.map((product) => {
                            return (
                                <CardProduct product={product} key={product._id} />
                            )
                        })}
                    </div>
                </div>
                <div className="border-b border-slate-700 lg:col-span-2">
                    <h1 className="text-xl text-teal-500 mb-2 font-bold">Comments</h1>
                    <div className="mb-3">
                        <FormComment onSubmit={handleSubmit} />
                    </div>
                    <div className="flex flex-col gap-2">
                        {comments.map((comment) => {
                            return (
                                <CardComment comment={comment} key={comment._id} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Base>
    )
}