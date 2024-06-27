import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Dudes.css";

import Home from "../Assets/Home Icon.jpg";

function Dudes() {
  const Navigate = useNavigate();

  const toggleButton = useRef();

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  const [inDepartment, setInDepartment] = useState(true);

  function handleToggle() {
    if (inDepartment) {
      toggleButton.current.style.justifyContent = "flex-end";
      setInDepartment(false);
    } else {
      toggleButton.current.style.justifyContent = "flex-start";
      setInDepartment(true);
    }
  }

  return (
    <>
      <div className="dudes-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="home-icon" />
            Home
          </button>
        </div>

        <div className="filters">
          <div className="leftSide"></div>
          <div className="rightSide">
            <div className="toggle">
              <p>Department Dudes</p>
              <div
                className="toggle-btn"
                ref={toggleButton}
                onClick={handleToggle}
              >
                <div className="btn"></div>
              </div>
              <p>District Dudes</p>
            </div>
          </div>
        </div>

        <div className="student-details-table">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Year</th>
                <th>District</th>
                <th>Department</th>
                <th>Phone Number</th>
                <th>OnCampus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Karuppusamy S</td>
                <td>2021</td>
                <td>Erode</td>
                <td>ECE-BML</td>
                <td>9865329632</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-filters">
          <button className="top-btn">
            <a href="#top">Go to Top</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Dudes;
