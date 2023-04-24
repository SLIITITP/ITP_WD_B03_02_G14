import StorageIcon from '@mui/icons-material/Storage';
import React from "react";
function NaveBar(){
    return(
<div >







<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{marginTop:'100px'}} ><StorageIcon/></button>

<div class="offcanvas offcanvas-start" style={{backgroundColor:'#3A1078',width:'200px', marginTop:'60px',color:'white'}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">HR Management</h5>

    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
  <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-home" aria-selected="true"style={{color:'white'}}>Dash board</a>
{/*  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/add student" role="tab" aria-controls="v-pills-profile" aria-selected="false">Student</a>*/}
  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/Employee" role="tab" aria-controls="v-pills-messages" aria-selected="false"style={{color:'white'}}>Employee</a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/driver" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}}>Driver</a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/Hotel" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}}>Hotel</a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/vehical" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}}>Vehical</a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/user" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}}>User</a>
</div>
<div className="tab-content" id="v-pills-tabContent">
  <div className="tab-pane fade" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
</div>

</div>
    

</div>
        
    );
}
export default NaveBar;