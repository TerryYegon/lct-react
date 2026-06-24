import { Header } from "./components/Header"
import { HabitForm } from "./components/HabitForm"
import { HabitList,type Habit } from "./components/HabitList"
import { useState } from "react"
import { HabitProvider } from "./Context/HabitProvider"
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns"

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([])
   
  function deleteHabit(id: string){
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), {weekStartsOn : 1}),
    end: endOfWeek(new Date(), {weekStartsOn : 1})
  })
  
  
  function addHabit (name: string){
   setHabits(curr => [...curr, { id: crypto.randomUUID(), name }])
   
   
   }
   const[weekoffset, setWeekOffset] = useState(0)
   const week =addWeeks( new Date(), weekoffset)
  //  const visibleDates = eachDayOfInterval({
  //   start: startOfWeek(new Date(), {weekStartsOn : 1}),
  //   end: endOfWeek(new Date(), {weekStartsOn : 1})
  // })
     
  
  return (
    <div className ="max-w-3xl mx-auto p-4 flex flex-col gap-4">
     <HabitProvider>
      <Header
       visibleDates={visibleDates} 
      onNext = {() =>setWeekOffset(0 => 0 + 1)}
      onPrev = {() =>setWeekOffset(0 => 0 - 1)}
      />
      <HabitForm addHabit ={addHabit}/>
      <HabitList  deleteHabit ={deleteHabit}habits={habits}
      visibleDates = {visibleDates}/>
</HabitProvider>
    </div>
  )

}


 