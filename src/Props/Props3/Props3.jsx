import "./Props3.css"

const Props3 = ({Title, Time, Author, Content, Date}) => {
    return ( <div className="props3">
        <h1>{Title}</h1>
        <h5>{Author} ● {Date}  ● {Time} minutes read</h5>
        <p>{Content}</p>
        <a href="">see more</a>
        

    </div> );
}
 
export default Props3;