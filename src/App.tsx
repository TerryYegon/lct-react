import { Header } from "./components/Header"
import { HabitForm } from "./components/HabitForm"
import { HabitList,type Habit } from "./components/HabitList"
import { useState } from "react"
import { HabitProvider } from "./Context/HabitProvider"

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([])
   
  function deleteHabit(id: string){
    setHabits(curr => curr.filter(h => h.id !== id))
  }
  
  
  function addHabit (name: string){
   setHabits(curr => [...curr, { id: crypto.randomUUID(), name }])
   
   
   }
  
  return (
    <div className ="max-w-3xl mx-auto p-4 flex flex-col gap-4">
     <HabitProvider>
      <Header/>
      <HabitForm addHabit ={addHabit}/>
      <HabitList  deleteHabit ={deleteHabit}habits={habits}/>
</HabitProvider>
    </div>
  )

}


 