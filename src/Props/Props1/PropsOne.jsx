import "./PropsOne.css"
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram-svgrepo-com.svg"
import Twitter from "../../assets/twitter.svg"
const PropsOne = (props) => {
    return ( <div className="propsOne">

        <div className="empty"></div>


        <div className="imgDiv">
            <img src={props.image} alt="" />
            
            <h4>{props.Name}</h4>
            <hr />
            <h3>Age: <span>{props.Age}</span></h3>
            <h3>Location: <span>{props.Location}</span></h3>

            <div className="imgLogo">
            <a href=""><img src={Facebook} alt="Facebook" /></a>
            <a href=""><img src={Twitter} alt="Twitter" /></a>
            <a href=""><img src={Instagram} alt="Instagram" /></a>
        </div>
        </div>

      


    </div> );
}
 
export default PropsOne;
