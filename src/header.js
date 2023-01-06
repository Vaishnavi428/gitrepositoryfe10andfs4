s

import { Link } from "react-router-dom";

function Header() {
    return (
      <div>
       
       <div className="bg-light p-3">
        <div className="row px-5 font-weight-normal">
            <div className="col-10">   <Link to="/"><h3 className="text-dark">Home</h3></Link> </div>
           
            <div className="col"><Link to="profile"><h3 className="text-dark">Profile</h3></Link></div>
        </div>
    </div>
  
      </div>
      
    );
  }
  
  export default Header;
