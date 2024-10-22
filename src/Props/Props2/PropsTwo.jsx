import "./PropsTwo.css"

const PropsTwo = ({Image, ProductName, Price, Description }) => {
    return ( <div className="product">

        <img src={Image} alt={`${ProductName}`} />
        <div className="subproduct">
            <h1>{ProductName}</h1>
            <h2>₦{Price}.00</h2>
            <p>{Description}</p>
            <button>  Add to Cart  </button>
        </div>

    </div> );
}
 
export default PropsTwo;