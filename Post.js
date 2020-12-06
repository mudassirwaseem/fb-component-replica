import React from 'react'


function Hi(props) {
    console.log(props)
    return <div style={{ marginTop: "60px" }}>
        <div className="container" >
            <div className="row" style={{ alignItems: "center", backgroundColor: "red", fontSize: "30px" }} >

            </div>
            {/* <div style={{ backgroundColor: " #0f3d0f", height: "70px", color: "white", padding: "10px" }}>
                <h1  >Whatsapp</h1>
            </div> */}

            <div style={{ marginTop: "1px", border: "1px solid",padding: "20px" }} className="row">

                <div className="col-1">
                    <img style={{ width: "80px", height: "70px", borderRadius: "40px" }} src={props.img} />
                </div>
                <div className="col-8">
                    <h1 style={{ marginLeft: "20px" }}> {props.name}</h1>
                    
                </div>  <div className="col-2">
                    <h3> {props.time}</h3>
                </div>
            </div>
        </div>

    </div>
}



export default Hi;





