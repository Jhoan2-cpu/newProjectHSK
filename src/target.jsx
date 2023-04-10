import "./target.css"
function Target({direct, description, button, moreInf}){
    return (
        <div className="target">
            <div><h1>📓</h1></div>
            <div>
                <div><a href="#">{direct}</a></div>
                <div><p>{description}</p></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Target