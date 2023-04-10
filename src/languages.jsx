import "./languages.css"
function Languages({dat}){
    return (
        <div className="language">
            <h5 className="langues_title">Languages</h5>
            {
                dat.map((cont, ind)=>{
                    return <a key={ind} className="language_li" href="#"><span className="language_title">{cont.title}</span><span className="language_count">{cont.count}</span></a>
                })
            }
        </div>
    )
}
export default Languages