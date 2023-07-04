import { Navbar } from "../components/Navbar"
import { Main } from "../components/Main"
import "../App.css";

export const App =() =>{
    return (
        <>
         <div className="container">
            <Navbar />
            <Main />
        </div>
        
        </>
    );
}