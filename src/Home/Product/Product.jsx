import PropsTwo from "../../Props/Props2/PropsTwo";

import Shawarma from "../../assets/props2/shawarma.jpg"
import Doughnut from "../../assets/props2/doughnut.jpg"
import Eggroll from "../../assets/props2/egg-roll.jpg"
import Meatpie from "../../assets/props2/meatpie.jpg"
import SmallChops from "../../assets/props2/small-chops.jpg"
import ChinChin from "../../assets/props2/chinchin.jpg"
import Parfait from "../../assets/props2/parfait.jpg"
import Chickenpie from "../../assets/props2/chickenpie.jpg"
import Cakeparfait from "../../assets/props2/cakeparfait.jpg"

import "./Product.css"

const Product = () => {
    return ( <div className="productContainer">
        <h1 id="snacks">Snacks</h1>
        <div className="productDiv">
            <PropsTwo Image={Shawarma} ProductName="Shawarma" Price="7,500" Description="Creamy chicken shawarma" />
            <PropsTwo Image={Doughnut} ProductName="Doughnut" Price="6,550" Description="Box of 3 milky doughnuts"/>
            <PropsTwo Image={Eggroll} ProductName="Egg roll" Price="9,050" Description="Box of 10 Eegg roll"/>
            <PropsTwo Image={Parfait} ProductName="Parfait" Price="4,555" Description="Tasty cup of yoghurt parfait"/>
            <PropsTwo Image={Meatpie} ProductName="Meatpie" Price="10,500" Description="Box of exquisite Meatpies"/>
            <PropsTwo Image={SmallChops} ProductName="Small Chops" Price="17,500" Description="Platter of Small Chops"/>
            <PropsTwo Image={Chickenpie} ProductName="Chicken Pie" Price="9,500" Description="Tasty chicken pie"/>
            <PropsTwo Image={ChinChin} ProductName="ChinChin" Price="6,000" Description="Jar of crunchy ChinChin"/>
            <PropsTwo Image={Cakeparfait} ProductName="Cake Parfait" Price="7,300" Description="Moist and fluffy cake parfait"/>
        </div>
    </div> );
}
 
export default Product;