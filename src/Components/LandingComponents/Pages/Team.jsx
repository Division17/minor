import React from"react"
import CardMain from "./CardMain";
import Sapna from "../../../assets/images/SapnaProfile.jpeg";
import Dhirendre from "../../../assets/images/Dprofile.jpg";
import Kajal from "../../../assets/images/kajal.jpg";
import shivang from "../../../assets/images/shivang.jpg"
const Team = () =>{
    return(
        <> 
          <div className="flex justify-center items-center ">   
              <CardMain data="Sapna Singh" pro="B.tech (2021-2025)" imgsrc={Sapna}/>
             <CardMain data="Dhirendre Pratap Singh" pro="B.tech (2021-2025)" imgsrc={Dhirendre}/>
                     <CardMain data="Kajal" pro="B.tech (2021-2025)" imgsrc={Kajal}/>
                     <CardMain data="Shivang Raman" pro="B.tech (2021-2025)" imgsrc={shivang}/>
 
            </div> 
        </>
    )

}
export default Team;