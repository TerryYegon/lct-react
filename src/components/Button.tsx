import type { ComponentProps, ReactNode } from "react"

type ButtonProps = {
variant?: "primary" | "secondary" | "ghost-destructive"
} & ComponentProps<"button">


export function Button({  variant ="primary", ...props }:ButtonProps){
    return <button 
    {...props}
    
    className ={getVariantStyle(variant) + " rounded px-2 py-1 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"}></button>
}
function getVariantStyle(variant:variant){
    switch(variant){
        case "primary":
            return "bg-violet-600 hover:bg-violet-500"
        case "secondary":
            return "bg-zinc-800 hover:bg-zinc-700"
        case "ghost-destructive":
            return " hover:bg-red text-red-500 hover:text-red-400"


        default:
        throw new Error(`invalid variant: ${'variant satisfys never'}`)
    }
}