import type { ReactNode } from "react"

type ButtonProps = {
    children :ReactNode
}


export function Button({ children  }:ButtonProps){
    return <button className ="bg-violet-600 hover:bg-violet-500 rounded px-2 py-1 transition-colors disabled:opacity-30
     disabled:cursor-not-allowed">{children}</button>
}