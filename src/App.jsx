import Task from "./Task"
import Target from "./target"
import Languages from "./languages"
let data = [
  {
    title: "Carlos",
    count: 323
  },
  {
    title: "Carlosd",
    count: 3123
  },
  {
    title: "PTLSN-SC",
    count: "22K"
  },
  {
    title: "KSD-NN0",
    count: "1.2M"
  }
]
let dat = [
  {
    title: "JAVA SCRIPT",
    count: 323
  },
  {
    title: "PHP",
    count: 3123
  },
  {
    title: "JAVA",
    count: "22K"
  },
  {
    title: "PYTHON",
    count: "1.2M"
  }
]

function App() {
  return (
    <div>
      <Target direct={"Jhoan/NoNeFYoyu"} description={"esto es una descripción, se agrego un proyecto a esta cuenta"} button={["🌟 Star","End", "Jsx","HTML", "CSS3"]} moreInf={[334, "PLSQL", "GPL-3.0 license", "Updated on Dec 12, 2022"]}/>
      <Target direct={"Carlos/Ultimate"} description={"última actualización, las anteriores versiones de prueba fueron borrados de la cuenta"} button={["🌟 Star","End", "Js","HTML"]} moreInf={[6334, "Jupyter Notebook", "MIT license", "Updated on Feb 8, 2023"]}/>
      <Task options={data} />
      <h2>Project React  nav_target...</h2>
      <Languages dat={dat}/>
    </div>
  )
}
export default App
