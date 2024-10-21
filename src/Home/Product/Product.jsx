import PropsTwo from "../../Props/Props2/PropsTwo";

import Shawarma from "../../assets/props2/shawarma.jpg"
import Doughnut from "../../assets/props2/doughnut.jpg"
import Eggroll from "../../assets/props2/egg-roll.jpg"
import Meatpie from "../../assets/props2/meatpie.jpg"
import SmallChops from "../../assets/props2/small-chops.jpg"
import ChinChin from "../../assets/props2/chinchin.jpg"

import "./Product.css"

const Product = () => {
    return ( <div className="productContainer">
        <div className="productDiv">
            <PropsTwo Image={Shawarma} ProductName="Shawarma" Price="7,500" Description="Creamy chicken shawarma with sausage"/>
            <PropsTwo Image={Doughnut} ProductName="Doughnut" Price="4,500" Description="Box of 3 milky doughnuts"/>
            <PropsTwo Image={Eggroll} ProductName="Egg roll" Price="9,550" Description="Box of 10 Eegg roll"/>
            <PropsTwo Image={Meatpie} ProductName="Meatpie" Price="10,500" Description="Meatpie"/>
            <PropsTwo Image={SmallChops} ProductName="Shawarma" Price="7,500" Description="Platter of Small Chops"/>
            <PropsTwo Image={ChinChin} ProductName="ChinChin" Price="6,000" Description="Jar of crunchy ChinChin"/>
        </div>
    </div> );
}
 
export default Product;