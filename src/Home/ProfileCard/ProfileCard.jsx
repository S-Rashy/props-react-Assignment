import PropsOne from "../../Props/Props1/PropsOne"
import Rash from "../../assets/Rash.jpg"
import Jide from "../../assets/jide.jpg"
import Lanre from "../../assets/lanre.jpg"
import Hamzah from "../../assets/sail-hamzah.jpg"
import Farouq from "../../assets/farouq.jpg"
import Taiwo from "../../assets/sail-mit.jpg"

import "./ProfileCard.css"

const ProfileCard = () => {
    return (<div className="profContainer">
         <div className="profCard">
            <PropsOne image={Rash} Name="Rashidah" Age="20" Location="London" />
            <PropsOne image={Jide} Name="Jide" Age="20" Location="Ontario"  />
            <PropsOne image={Lanre} Name="Lanre" Age="20" Location="Bristol" />
            <PropsOne image={Hamzah} Name="Hamzah" Age="20" Location="Florida"  />
            <PropsOne image={Farouq} Name="Farouq" Age="20" Location="Edinburgh" />
            <PropsOne image={Taiwo} Name="Taiwo" Age="20" Location="Chicago" />
        </div>
    </div> );
}
 
export default ProfileCard;