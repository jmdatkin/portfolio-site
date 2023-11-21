import Link from "next/link";
import { ReactNode } from "react"
import { IconType } from "react-icons";

type IconButtonLinkProps = {
    icon: IconType,
    href: string,
    [key: string]: any;
}

export default function IconButtonLink(props: IconButtonLinkProps) {

    const { icon, href, className, ...restProps } = props;

    return (
        <Link target="_blank" href={href} className={`${className ? className : ''} transition duration-[0.2s] rounded-full outline-none w-10 h-10 flex justify-center items-center  hover:bg-zinc-700 active:bg-zinc-800 !dark:text-zinc-900`} {...restProps}>
            <span className="dark:text-zinc-900">
                {props.icon({className: "[&>*]:dark:text-slate-100",size: 26})}
            </span>
        </Link>
    )
}