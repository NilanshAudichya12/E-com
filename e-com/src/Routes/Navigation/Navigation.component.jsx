import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom"
const Navigation = ()=>{
    return(
    <Fragment>
      <div className="navigation">
        <div>Logo</div>
        <div className="nav-links-container">
            <Link className="nav-links" to='/shop'>
                Shop
            </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )};
  export default Navigation;