import React from 'react';
import Typical from 'react-typical';
//import UserContext from '../../context/user/user.context'


const Typing = ({user}) => {
 //const {user} = props;
//const user = useContext(UserContext);
  
    return (
        <Typical
          steps={[`Dear! ${user}`,2000, 'Will You Marry Me?',2000]}
          loop={Infinity}
          wrapper="p"
        />
      )
}

export default Typing;