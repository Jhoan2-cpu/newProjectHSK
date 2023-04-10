import "./task.css"
function Task({options}){
    return (
        <div className="task">
            <ul>
            {
                options.map((cont, ind)=>{
                    return <li key={ind}><span>{cont}</span></li>
                })
            }
            </ul>
        </div>
    )
}
export default Task