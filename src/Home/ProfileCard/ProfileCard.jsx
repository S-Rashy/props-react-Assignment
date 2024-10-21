import PropsOne from "../../Props/Props1/PropsOne"
import Rash from "../../assets/Rash.jpg"
import Jide from "../../assets/jide.jpg"
import Lanre from "../../assets/lanre.jpg"
import Hamzah from "../../assets/hamzah.jpg"
import Farouq from "../../assets/farouq.jpg"

import "./ProfileCard.css"

const ProfileCard = () => {
    return (<div className="profContainer">
         <div className="profCard">
            <PropsOne image={Rash} Name="Rashidah" Age="20" />
            <PropsOne image={Jide} Name="Jide" Age="20" />
            <PropsOne image={Lanre} Name="Lanre" Age="20" />
            <PropsOne image={Hamzah} Name="Hamzah" Age="20" />
            <PropsOne image={Farouq} Name="Farouq" Age="20" />
        </div>
    </div> );
}
 
export default ProfileCard;