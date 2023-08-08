import FormControl from "../components/atoms/FormControl";
import CardVideo from "../components/molecules/CardVideo";
import Base from "../components/templates/Base";

export default function Home() {
    return (
        <Base>
            <FormControl type="text" placeholder="Search ..." />
            <div className="grid grid-cols-2 gap-3 mt-3">
                <CardVideo
                    thumbnail="https://i.ytimg.com/vi/9XaS93WMRQQ/maxresdefault.jpg"
                    title="React JS Crash Course 2021"
                    description="Learn the basics of React JS in this crash course for beginners. We will cover what React is, components, state, props, ..."
                />
            </div>
        </Base>
    )
}