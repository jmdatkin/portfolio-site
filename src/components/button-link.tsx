import Link from "next/link";

export default function ButtonLink(props: any) {

    const { href, children, className, ...restProps } = props;

    return (
        <Link className={`${className ? className + " " : ''}block transition w-fit  dark:border-zinc-50 hover:bg-zinc-50 hover:text-zinc-900 border-2 p-3 px-6 uppercase text-center tracking-wider`} href={href} {...restProps}>{props.children}</Link>
    )
}