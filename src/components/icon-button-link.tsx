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
        <Link target="_blank" href={href} className={`${className ? className : ''} rounded-full outline-none w-12 h-12 flex justify-center items-center x!dark:text-zinc-900`} {...restProps}>
            <span className="dark:text-zinc-900">
                {props.icon({className: "!dark:text-zinc-900",size: 26})}
            </span>
        </Link>
    )
}