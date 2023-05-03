import Navigation from "./components/Navigation";
import SideLinks from "./components/SideLinks";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Navigation />
        <div id={"content"} className={"flex flex-col w-[100vw] px-8 lg:p-0 overflow-x-hidden overflow-y-auto flex-1 justify-center items-center"}>
            <Outlet/>
        </div>
        <SideLinks />
        <Footer/>
    </>
  );
}

export default App;
