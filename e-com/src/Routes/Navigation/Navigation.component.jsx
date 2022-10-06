import { Outlet } from "react-router-dom"
const Navigation = ()=>{
    return(
    <div>
      <div>
        <h1>This is a Navbar</h1>
      </div>
      <Outlet/>
    </div>
  )};
  export default Navigation;