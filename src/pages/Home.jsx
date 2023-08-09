import { useEffect } from "react";
import FormControl from "../components/atoms/FormControl";
import CardVideo from "../components/molecules/CardVideo";
import Base from "../components/templates/Base";
import { getAllVideos } from "../../libs/play-api";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAllVideos(search).then((res) => {
            setVideos(res.data);
        }).catch((err) => {
            alert(err.message);
        });
    }, [search]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <Base>
            <FormControl type="text" placeholder="Search video ..." onChange={handleSearch} value={search} />
            <div className="grid grid-cols-2 gap-3 mt-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {videos.map((video) => {
                    return (
                        <Link to={`/video/${video._id}`} key={video._id}>
                            <CardVideo
                                title={video.title}
                                description={video.description}
                                thumbnail={video.thumbnail}
                            />
                        </Link>
                    )
                })}
            </div>
        </Base>
    )
}