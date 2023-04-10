import Target from "./target"
function App() {
  return (
    <div>
      <h1>No ocurrio nada</h1>
      <Target direct={"Jhoan/NoNeFYoyu"} description={"esto es una descripción"} button={["🌟 Star","End", "Jsx","HTML", "CSS3"]} moreInf={[334, "PLSQL", "GPL-3.0 license", "Updated on Dec 12, 2022"]}/>
      <Target direct={"Carlos/Ultimate"} description={"última actualización"} button={["🌟 Star","End", "Js","HTML"]} moreInf={[6334, "Jupyter Notebook", "MIT license", "Updated on Feb 8, 2023"]}/>
    </div>
  )
}
export default App
