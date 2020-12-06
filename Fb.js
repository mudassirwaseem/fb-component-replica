import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faComment ,faShare} from '@fortawesome/free-solid-svg-icons'
import AddIcon from '@material-ui/icons/Add';
function Facebook(props) {
    return (
        <div >
            
            <div style={{ alignItems: " center", marginLeft: "200px",marginTop:"60px" }}>
           
                <div className="card promoting-card">
                    <div className="card-body d-flex flex-row">
                        <img src={props.profile} className="rounded-circle mr-3" height="80px" width="80px" alt="avatar" />
                        <div>
                            <h4 className="card-title font-weight-bold mb-2">{props.name}</h4>

                            <p className="card-text"><i className="far fa-clock pr-2" />07/24/2018</p>
                        </div>
                    </div>

                    <div className="view overlay">
                        <img style={{ width: '800px', height: '400px' }} className="card-img-top rounded-0" src={props.image} alt="Card image cap" />
                       
                    </div>
                   <div style={{margin : "2px" ,alignItems:'center', margin: '10px'}}>
                 <span> <button  style={{marginRight : "90px" ,width: '200px' ,height:'50px',fontWeight:'bold',backgroundColor:'transparent' ,border:'none'}}> <FontAwesomeIcon  icon={faThumbsUp} color="blue"/>Like</button></span>
                 <span> <button  style={{marginRight : "60px" ,width: '220px' ,height:'50px',fontWeight:'bold',backgroundColor:'transparent' ,border:'none'}}><FontAwesomeIcon icon={faComment}/>Comments</button></span>
                 <span> <button  style={{marginRight : "60px" ,width: '220px' ,height:'50px',fontWeight:'bold',backgroundColor:'transparent' ,border:'none'}}><FontAwesomeIcon icon={faShare}/>Share</button></span>
                  {/* <button style={{margin : "2px" ,width: '330px' ,height:'50px' ,fontWeight:'bold',backgroundColor:'transparent' ,border:'none'}}>Comments</button> */}
                  {/* <button style={{margin : "2px" ,width: '220px' ,height:'50px' ,fontWeight:'bold',backgroundColor:'transparent',border:'none'}}>Share</button> */}


                   </div>
                   
                </div>

            </div>

        </div>
    )
}
export default Facebook;