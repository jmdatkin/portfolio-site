import { ReactNode } from "react";
import { IconType } from "react-icons"

type FeatureProps = {
    icon: IconType,
    title: string,
    children: ReactNode
};

export default function Feature(props: any) {

    return (
        <div className="flex gap-4">
            <div>
                {props.icon({size: 42, className: "[&>*]:dark:text-slate-300"})}
            </div>
            <div className="flex-grow flex flex-col">
               <h4 className="dark:text-slate-200">{props.title}</h4> 
               <p className="dark:text-slate-400">{props.children}</p>
            </div>
        </div>
    )
}