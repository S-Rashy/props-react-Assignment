import "./Props3.css"

const Props3 = ({Title, Time, Author, Content, Date, blogClass }) => {
    return ( <div className={`props3 ${blogClass}`}>
        <h1>{Title}</h1>
        <h5><span>{Author}</span> ● {Date}  ● {Time} minutes read</h5>
        <p>{Content}</p>
        <a href="">See More</a>
        

    </div> );
}
 
export default Props3;