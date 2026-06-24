import { createContext , useContext, type ReactNode} from "react";
type Context = {
    name: string
}
type HabitProviderProps = {
    children: ReactNode
}

 export const HabitContext =createContext <null | Context>(null)

export function HabitProvider({children} : HabitProviderProps) {
    return <HabitContext value={{name: "Terry"}}>
        {children}
    </HabitContext>

}
export function useHabits (){
    const habitContext = useContext(HabitContext)
    if(habitContext === null) throw new Error("Null context")
        return habitContext
} 