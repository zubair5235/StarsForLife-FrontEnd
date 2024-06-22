// Importing necessary modules and assets
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import "../CSS/Btech.css"; // Importing styles for the component

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

// Btech React component
function Btech() {
  // Initializing the navigate function from React Router
  const Navigate = useNavigate();

  // Creating a ref to manage the contribution form container
  const contributionFormContainer = useRef(null);

  // Function to navigate to the home page
  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  // Function to open the contribution form
  function handleOpenNewContribution() {
    contributionFormContainer.current.classList.add("show");
  }

  // Function to close the contribution form
  function handleCloseNewContribution() {
    contributionFormContainer.current.classList.remove("show");
  }

  // JSX structure of the Btech component
  return (
    <>
      {/* Main container for the Btech component */}
      <div className="btech-container">
        {/* Top bar with home button and contribute button */}
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
          <button
            className="contribution-btn"
            onClick={handleOpenNewContribution}
          >
            Contribute
          </button>
        </div>

        {/* Filters section with search bar and department filter */}
        <div className="filters">
          <div className="leftSide">
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>
          <div className="rightSide">
            <div className="department filter">
              <input type="text" list="department" placeholder="Department" />
              <datalist id="department">
                <select>
                  <option value="CSE-IOT">CSE-IOT</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        {/* Materials table with details and actions */}
        <div className="materials-table">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Material Name</th>
                <th>Contributor</th>
                <th>Download</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BCSE305P</td>
                <td>Database Systems</td>
                <td>Module 1</td>
                <td>Admin</td>
                <td>
                  {/* Download icon */}
                  <Icon
                    icon="streamline:download-circle-solid"
                    color="black"
                    width="24"
                    height="24"
                  />
                </td>
                <td>
                  {/* Preview icon */}
                  <Icon
                    icon="icon-park-solid:preview-open"
                    color="black"
                    width="24"
                    height="24"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table filters section */}
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
            {/* Navigation buttons */}
            <button className="previous-btn">&lt;</button>
            <button className="next-btn">&gt;</button>
          </div>
        </div>
      </div>

      {/* Contribution form container */}
      <div
        className="contribution-form-container"
        ref={contributionFormContainer}
      >
        {/* Contribution form structure */}
        <div className="cf-form">
          <div className="cf-form-header">
            {/* Title and close button */}
            <p>Contribution Form</p>
            <Icon
              icon="ic:round-close"
              color="black"
              width="32"
              height="32"
              onClick={handleCloseNewContribution}
            />
          </div>
          <form>
            {/* Contribution form rows */}
            <div className="cf-row1">
              <input
                type="text"
                list="subjectCode-list"
                placeholder="Subject Code"
              />
              <datalist id="subjectCode-list">
                <select>
                  <option value="BCSE305P">BCSE305P</option>
                </select>
              </datalist>
              <input
                type="text"
                list="subjectName-list"
                placeholder="Subject Name"
              />
              <datalist id="subjectName-list">
                <select>
                  <option value="Database Systems">Database Systems</option>
                </select>
              </datalist>
            </div>
            <div className="cf-row2">
              {/* Input for Materials Name */}
              <input type="text" placeholder="Materials Name" />
            </div>
            <div className="cf-row3">
              {/* Contribute button */}
              <button className="confirm-btn">Contribute</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Exporting the Btech component
export default Btech;