import "./PropsOne.css"
const PropsOne = (props) => {
    return ( <div className="propsOne">

        <div className="empty"></div>


        <div className="imgDiv">
            <img src={props.image} alt="" />
            
            <h3>{props.Name}</h3>
            <hr />
            <h3>Age: <span>{props.Age}</span></h3>
            <h3>Location: <span>{props.Location}</span></h3>
        </div>


    </div> );
}
 
export default PropsOne;
