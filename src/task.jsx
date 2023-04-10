import "./task.css"
function Task({options}){
    return (
        <div className="task">
            {
                options.map((cont, ind)=>{
                    return <a key={ind} className="task_li" href="#"><span className="title">{cont.title}</span><span className="count">{cont.count}</span></a>
                })
            }
        </div>
    )
}
export default Task