import React, { useContext }  from "react";
import ProfileMenu from "./ProfileMenu";
import { AuthContext } from "../../SharedComponents/Context/AppContext";
const UserLinks = () => {
  const { user, userData, signOutUser } = useContext(AuthContext);
    
  return (
    <div className="flex items-center cursor-pointer">
      <div className="mx-4 flex items-center 0" >
                <ProfileMenu/> 
                 </div>
        <p className="ml-4 font-roboto text-sm text-black font-medium no-underline" onClick={signOutUser}>
          {user?.displayName === null && userData?.name !== undefined
            ? userData?.name?.charAt(0)?.toUpperCase() +
              userData?.name?.slice(1)
            : user?.displayName?.split(" ")[0]}
        </p>   
    </div>
  );
};

export default UserLinks;