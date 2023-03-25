import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import "../components/Home.css"
function Home(){
    return(
        <div className="layout">
            <Profile />
            <Navbar />
        </div>
    );
}
export default Home