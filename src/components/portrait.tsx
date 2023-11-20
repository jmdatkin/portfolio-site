import Image from "next/image";

function Portrait(props: any) {
    return (
        <Image {...props} src="/portrait.jpg" fill alt="A headshot picture of me" className=""
            style={{ objectFit: "cover" }}></Image>
    );
}

export default Portrait;