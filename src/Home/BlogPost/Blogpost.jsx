import Props3 from "../../Props/Props3/Props3";
import './Blogpost.css'


const BlogPost = () => {
    return ( <div className="blogpost">
    <Props3 Title="Wild Wanderings"  Time="5" Author="Rash" Content="Visit, explore, and marvel at the diversity of nature." Date="Jun 22, 2023" blogClass="blogOne"/>
    <Props3 Title="Adventure and Aspire" Time="7" Author="Larry" Content=" Challenge yourself physically, take in breathtaking views." Date="Oct 12, 2021" blogClass="blogTwo"/>
    <Props3 Title="Tales from the Trail" Time="5" Author="Nelly" Content="Explore trails, enjoy scenic views, connect with nature." Date="Jan 5, 2024 " blogClass="blogThree"/>
    <Props3 Title="Vagabond Voyages" Time="4" Author="FM" Content=" Paddle through calm waters, explore coastlines, and enjoy scenery." Date="Apr 30, 2023" blogClass="blogFour"/>

    </div> );
}
 
export default BlogPost;