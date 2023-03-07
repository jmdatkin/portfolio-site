import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProjectLaunchButton(props: any) {
    return (
        <div className="w-full h-full">
            <Link target="_blank" href={props.href} className="w-full h-full cursor-pointer bg-white block hover:bg-zinc-50 active:bg-zinc-100 hover:shadow-md active:shadow-sm duration-[0.07s]">
                <div className="w-full h-full flex flex-col p-6 items-center justify-around">
                    <div className="flex flex-col text-xl font-semibold">
                        <span>Launch App</span>
                        <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                    </div>
                </div>
            </Link>

        </div>
    );
}

export default ProjectLaunchButton;