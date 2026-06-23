import { Button } from "./Button";
import {endOfWeek, startOfWeek, format, eachDayOfInterval,} from "date-fns"
export function HabitList(){
    const habits =[
        { id: 1, name: "Terry" },
    ];
    if (habits.length === 0) {
    return (<p className="text-zinc-500 py-12" >
        No habits added yet.</p>
    )
}
return <div className="flex flex-col gap-3">
{habits.map(habit => (
   <HabitItem key={habit.id} habit ={habit}/>
))}

</div>
}

type HabitItemProps ={
    habit :{
        id : "string"; name: "string"
    }
}
function HabitItem( habit :HabitItemProps){

    const visibleDate= eachDayOfInterval({
        start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    })

    return <div className ="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
       <div className="flex items-center justify-between">
        
        <div className="flex gap-3 items-center" >
        <span className="font-medium">{habit. habit.name}</span>
        <span className="text-sm text-amber-400">3 streak</span>
        </div>
        <Button variant="ghost-destructive">Delete</Button>

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