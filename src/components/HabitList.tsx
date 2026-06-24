import { useContext } from "react";
import { Button } from "./Button";
import {endOfWeek, startOfWeek, format, eachDayOfInterval,} from "date-fns"
import { HabitContext, useHabits } from "../Context/HabitProvider";


 export type Habit = {
    id : "string"; name: "string"
}
type HabitListProps = {
    habits: Habit[]
    deleteHabit: (id:string) => void
    visibleDates : Date []
}

export function HabitList({habits,deleteHabit, visibleDates} : HabitListProps){
    
    if (habits.length === 0) {
    return (<p className="text-zinc-500 py-12" >
        No habits added yet.</p>
    )
}
return <div className="flex flex-col gap-3">
{habits.map(habit => (
   <HabitItem
   deleteHabit ={deleteHabit}
   key={habit.id} habit ={habit}/>
))}

</div>
}

type HabitItemProps ={
    habit : Habit
    deleteHabit: (id:string) => void
    
}
function HabitItem( {habit, deleteHabit} :HabitItemProps){
useContext(HabitContext)

    const visibleDate= eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    })

    return <div className ="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
       <div className="flex items-center justify-between">
        
        <div className="flex gap-3 items-center" >
        <span className="font-medium">{habit.name}</span>
        <span className="text-sm text-amber-400">3 streak</span>
        </div>
        <Button  variant="ghost-destructive" onClick={() => deleteHabit(habit.id)}>Delete</Button>

        </div> 
        <div className="flex gap-1.5">
            {visibleDate.map(date => (
                <Button key = {date.toISOString()} disabled ="true">
          <span className="font-medium">{format(date, "EEE")}</span>
        <span>2</span>
                </Button>
            ))}
        </div>
    </div>
}