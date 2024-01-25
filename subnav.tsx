'use client'

import { subProductGroup } from "@/config/site"
import { Link } from "@nextui-org/link"
import clsx from "clsx"
import { useState } from "react"

import { link as linkStyles } from "@nextui-org/theme"


interface SubNavBarProps {
    isBlur: boolean
    isVisible: boolean
    onClose: () => void
}




export const SubNavBar = ({ isVisible, isBlur, onClose }: SubNavBarProps) => {
    const [currentSelect, setCurrectSelect] = useState("VPS");

    return (
        <div className={
            clsx(
                isVisible ? "h-auto " : "h-0",
                isBlur ? "bg-[rgba(255,255,255,.8)]" : "bg-[rgba(255,255,255,.2)]",
                " w-full backdrop-blur  lg:absolute lg:inline-block hidden transition-all "
            )
        }>
            <div onMouseLeave={() => onClose()} className={
                clsx(
                    isVisible ? " h-[480px]" : "h-0",
                    "flex gap-x-4 flex-row mt-8 px-8 py-4 mx-auto max-w-5xl will-change-[height]  duration-300 transition-[height]  ease-in-out"
                )
            }>
                {
                    isVisible ? (
                        <>
                            <div className="flex flex-col gap-y-3">
                                <h1 className="text-md font-light text-titleSecondary">
                                    All Products
                                </h1>
                                <Link
                                    key="/cart"
                                    className={
                                        clsx(
                                            linkStyles({ color: "foreground" }),
                                            "font-semibold text-2xl  cursor-pointer text-titleSecondary"
                                        )
                                    }
                                >All products</Link>
                                {
                                    subProductGroup.map(e => (
                                        <Link
                                            key={e.href}
                                            href={e.href}
                                            className={
                                                clsx(
                                                    linkStyles({ color: "foreground" }),
                                                    e.label == currentSelect ? "text-black" : " text-titleSecondary",
                                                    "font-semibold text-2xl  cursor-pointer"
                                                )
                                            }
                                            onClick={() => setCurrectSelect(e.label)}
                                        >{e.label}</Link>
                                    ))
                                }
                            </div>

                            <div className="ml-16">
                                <div className="flex flex-col gap-y-1">
                                    <h1 className="text-md font-light text-titleSecondary">
                                        {currentSelect}
                                    </h1>

                                </div>
                            </div>
                        </>
                    ) : <></>
                }
            </div>
        </div>
    )
}