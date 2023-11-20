import DateFormatter from "./date-formatter";

type Props = {
    title: string,
    date: string,
};

function PostHeader(props: Props) {
    return (
        <header className="min-h-[24rem] p-6 flex flex-col items-center justify-around border-b relative">
            <div className="flex flex-col items-center text-center">
                <h1 className="leading-[1.15] text-6xl sm:text-7xl  max-w-6xl mb-4">{props.title}</h1>
                <h3 className="font-normal"><DateFormatter className="text-zinc-400" dateString={props.date}></DateFormatter></h3>
            </div>
        </header>
    );
}

export default PostHeader;