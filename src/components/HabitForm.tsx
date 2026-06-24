import { useHabits } from "../Context/HabitProvider";
import { Button } from "./Button";
import { useState } from "react";

type HabitFormProps ={
 addHabit : (name:string) => void
}

export function HabitForm({ addHabit }: HabitFormProps) {
    const [name, setName] = useState("")
    // const{addHabit} = useHabits()

    function HandleSubmit(e:SubmitEvent){
        e.preventDefault()
        if (name.trim()==="") return
        setName("")
        addHabit(name)
       
    }
    return (
        <form  className="flex gap-2" onSubmit={HandleSubmit}>
            <input
            value={name}
            onChange={e => setName(e.target.value)}
             className="flex-1" rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2
            focus-visible:ring-violet-500
            placeholder="New Habit..."/>
            <Button>Add Habit</Button>
        </form>
    )
}