import Task from "./task"
import Target from "./target"
let data = [
  {
    title: "Carlos",
    count: 323
  },
  {
    title: "Carlosd",
    count: 3123
  }
]
function App() {
  return (
    <div>
      <Target direct={"Jhoan/NoNeFYoyu"} description={"esto es una descripción, se agrego un proyecto a esta cuenta"} button={["🌟 Star","End", "Jsx","HTML", "CSS3"]} moreInf={[334, "PLSQL", "GPL-3.0 license", "Updated on Dec 12, 2022"]}/>
      <Target direct={"Carlos/Ultimate"} description={"última actualización, las anteriores versiones de prueba fueron borrados de la cuenta"} button={["🌟 Star","End", "Js","HTML"]} moreInf={[6334, "Jupyter Notebook", "MIT license", "Updated on Feb 8, 2023"]}/>
      <Task options={["21323","3232"]} />
      <h2>Project React ...</h2>
      
    </div>
  )
}
export default App
