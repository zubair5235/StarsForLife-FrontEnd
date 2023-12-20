// Importing necessary React hooks and styles
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Dudes.css";

// Importing the home icon image
import Home from "../Assets/Home Icon.jpg";

// React functional component for the 'Dudes' page
function Dudes() {
  // Creating a navigate function using useNavigate hook
  const Navigate = useNavigate();

  // Ref for the toggle button
  const toggleButton = useRef();

  // Function to handle navigation to the home page
  function handleHomeNavigation() {
    Navigate("/mainpage");
  }

  // State to manage the toggle between Department Dudes and District Dudes
  const [inDepartment, setInDepartment] = useState(true);

  // Function to handle the toggle button click and update the state
  function handleToggle() {
    if (inDepartment) {
      toggleButton.current.style.justifyContent = "flex-end";
      setInDepartment(false);
    } else {
      toggleButton.current.style.justifyContent = "flex-start";
      setInDepartment(true);
    }
  }

  // JSX structure for the 'Dudes' component
  return (
    <>
      <div className="dudes-container">
        {/* Top bar section with home button */}
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="home-icon" />
            Home
          </button>
        </div>

        {/* Filters section with toggle button */}
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

        {/* Table displaying student details */}
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

        {/* Filters and navigation buttons for the table */}
        <div className="table-filters">
          <div className="leftSide">
            <div className="content-filter">
              <p>Showing</p>
              <input type="text" defaultValue={10} list="range-list" />
              <datalist id="range-list">
                <select>
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </datalist>
              <p>
                of <span className="rowCount">100</span> Entries
              </p>
            </div>
          </div>
          <div className="rightSide">
            <button className="previous-btn">&lt;</button>
            <button className="next-btn">&gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}

// Exporting the 'Dudes' component
export default Dudes;
