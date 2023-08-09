import { useEffect } from "react";
import FormControl from "../components/atoms/FormControl";
import CardVideo from "../components/molecules/CardVideo";
import Base from "../components/templates/Base";
import { getAllVideos } from "../../libs/play-api";
import { useState } from "react";

export default function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getAllVideos().then((res) => {
            setVideos(res.data);
        }).catch((err) => {
            alert(err.message);
        });
    }, []);

    return (
        <Base>
            <FormControl type="text" placeholder="Search ..." />
            <div className="grid grid-cols-2 gap-3 mt-3">
                {videos.map((video) => {
                    return (
                        <CardVideo
                            key={video.id}
                            title={video.title}
                            description={video.description}
                            thumbnail={video.thumbnail}
                        />
                    )
                })}
            </div>
        </Base>
    )
}