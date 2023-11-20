import Image from "next/image";

function Portrait(props: any) {
    return (
        <div className="rounded-full">
            <Image {...props} src="/portrait.jpg" fill alt="A headshot picture of me"
                style={{ objectFit: "cover" }}></Image>
        </div>
    );
}

export default Portrait;