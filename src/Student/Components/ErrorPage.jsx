import { useNavigate } from "react-router-dom";

import "../CSS/ErrorPage.css";

function ErrorPage(){
    const Navigate = useNavigate();
    function toHome(){
        Navigate("/");
    }
    return(
        <>
            <div className="errorContainer">
                <button className="home-btn" onClick={toHome}>Go Back</button>
            </div>
        </>
    );
}
export default ErrorPage;