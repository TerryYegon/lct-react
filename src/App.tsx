import { Header } from "./components/Header"
import { HabitForm } from "./components/HabitForm"
import { HabitList } from "./components/HabitList"
export default function() {
  return <div className ="max-w-3xl mx-auto p-4 flex flex-col gap-4">
<Header></Header>
<HabitForm></HabitForm>
<HabitList></HabitList>
  </div>
}

 