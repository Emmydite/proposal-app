import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeartbeat} from '@fortawesome/free-solid-svg-icons';
//import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Flowers from '../animations/flowers.component';
import Typing from '../animations/typy.component';
// import {getUser} from  '../auth/userauth';
 import UserContext from '../../context/user/user.context';
import './proposal.styles.scss';


const Proposal = () =>  {

    const user = useContext(UserContext);

    const handleAccept = (event) => {
        event.preventDefault();
      document.getElementById("flowerbox").style.visibility="visible";
      document.getElementById('titl').textContent='YES !!! AM SO SO HAPPY';

    }
    
    const handleReject = () => {
         alert('No No No.. We Die Here !!!');
    }
 
     return (
        <div className='proposalblokCont'>
        <div className='proposalblok'>
            
          <h5 className='title' id='titl'>       
               <Typing user={user}/> 
            </h5>
          
            
            <div className='ringbox'>
            <div id='flowerbox'> <Flowers /> </div>
              {/* <img src="../../assets/engageringbox.jpeg" alt="engagement ring"/> */}
            </div> 
   
            <div className='buttons'>
             <CustomButton onClick={handleAccept} isAcceptBtn>
               I will
             </CustomButton>

             <CustomButton onClick={handleReject} isRejectBtn>
               Mad oh
             </CustomButton>
             </div>

      </div>
      <div className='icon'>
       <p>Made with <FontAwesomeIcon icon={faHeartbeat}/> by EmmySteve</p> 
      </div>
      </div>
     )

};

export default Proposal;