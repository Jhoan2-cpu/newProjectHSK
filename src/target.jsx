import { FaBeer } from "react-icons/fa";
import {BsStar, BsJournalBookmark} from "react-icons/bs";
import { SiAbbrobotstudio } from "react-icons/si";

import "./target.css"
function Target({direct, description, button, moreInf}){
    return (
        <div className="target">
            <div className="target_child"><h1 className="icon"><BsJournalBookmark /></h1></div>
            <div className="target_child">
                <div><a href="#">{direct}</a></div>
                <div className="mid"><p>{description}</p></div>
                <div>
                    {button.map((user, ind)=>{
                        return <button key={ind}>
                            {user}
                        </button>
                    })}
                </div>
                <div className="ult">
                    {

                    }
                    <span className="span_in"><BsStar /> {moreInf[0]}</span>
                    <span className="span_in"><span className="span_circle"></span> {moreInf[1]}</span>
                    <span className="span_in">{moreInf[2]}</span>
                    <span className="span_in">{moreInf[3]}</span>
                    </div>
            </div>
        </div>
    )
}
export default Target