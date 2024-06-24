// Importing necessary assets and dependencies
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../CSS/FacultySuggestion.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function FacultySuggestion() {
  // Access the navigation functionality
  const Navigate = useNavigate();

  // Reference to the suggestion form container for showing/hiding
  const suggestionFormContainer = useRef(null);

  // Handle navigation to the home page
  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  // Open the new suggestion form
  function handleOpenNewSuggestion() {
    suggestionFormContainer.current.classList.add("show");
  }

  const count = 2;

  function handleAddSuggestion(){
    const newRow = document.createElement('tr');

    newRow.innerHTML = `<td>${count+1}</td><td></td><td></td><td></td><td></td>`;

  document.querySelector(".faculty-suggestion-table").appendChild(newRow);
  }

  // Close the new suggestion form
  function handleCloseNewSuggestion() {
    suggestionFormContainer.current.classList.remove("show");
  }

  // JSX structure for the Faculty Suggestion component
  return (
    <>
      {/* Faculty Suggestion Container */}
      <div className="faculty-suggestion-container">
        {/* Top Bar */}
        <div className="topBar">
          {/* Home Button */}
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
          {/* Add Suggestion Button */}
          <button
            className="add-suggestion-btn"
            onClick={handleOpenNewSuggestion}
          >
            Add Suggestion
          </button>
        </div>

        {/* Filters Section */}
        <div className="filters">
          <div className="leftSide">
            {/* Search Bar */}
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          <div className="rightSide">
            {/* Filter Inputs */}
            <div className="subjectCode filter">
              {/* Subject Code Input */}
              <input
                type="text"
                list="subjectCode"
                placeholder="Subject Code"
              />
              {/* Datalist for Subject Code */}
              <datalist id="subjectCode">
                <select>
                  <option value="BCSE305P">BCSE305P</option>
                </select>
              </datalist>
            </div>

            <div className="subjectName filter">
              {/* Subject Name Input */}
              <input
                type="text"
                list="subjectName"
                placeholder="Subject Name"
              />
              {/* Datalist for Subject Name */}
              <datalist id="subjectName">
                <select>
                  <option value="DataBase Systems">DataBase Systems</option>
                </select>
              </datalist>
            </div>

            <div className="ratings filter">
              {/* Ratings Input */}
              <input type="text" list="ratings" placeholder="Ratings" />
              {/* Datalist for Ratings */}
              <datalist id="ratings">
                <select>
                  <option value="5">5</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        {/* Faculty Suggestion Table */}
        <div className="faculty-suggestion-table">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Subject Code</th>
                <th>subject Name</th>
                <th>Faculty Name</th>
                <th>Interests</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Data Rows */}
              <tr>
                <td>1</td>
                <td>BCSE305P</td>
                <td>Database Systems</td>
                <td>Gayathri P</td>
                <td>54</td>
                <td>4.4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BCSE305P</td>
                <td>Database Systems</td>
                <td>Gayathri P</td>
                <td>54</td>
                <td>4.4</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Filters */}
        <div className="table-filters">
          <div className="leftSide">
            <div className="content-filter">
              {/* Show Entries Input */}
              <p>Showing</p>
              <input type="text" defaultValue={10} list="range-list" />
              {/* Datalist for Show Entries */}
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
            {/* Previous and Next Buttons */}
            <button className="previous-btn">&lt;</button>
            <button className="next-btn">&gt;</button>
          </div>
        </div>
      </div>

      {/* Suggestion Form Container */}
      <div className="suggestion-form-container" ref={suggestionFormContainer}>
        <div className="form">
          <div className="form-header">
            {/* Suggestion Form Header */}
            <p>Suggestion Form</p>
            {/* Close Icon */}
            <Icon
              icon="ic:round-close"
              color="black"
              width="32"
              height="32"
              onClick={handleCloseNewSuggestion}
            />
          </div>
          {/* Suggestion Form */}
          <form>
            <div className="row1">
              {/* Subject Code Input */}
              <input
                type="text"
                list="subjectCode-list"
                placeholder="Subject Code"
              />
              {/* Datalist for Subject Code */}
              <datalist id="subjectCode-list">
                <select>
                  <option value="BCSE305P">BCSE305P</option>
                </select>
              </datalist>
              {/* Subject Name Input */}
              <input
                type="text"
                list="subjectName-list"
                placeholder="Subject Name"
              />
              {/* Datalist for Subject Name */}
              <datalist id="subjectName-list">
                <select>
                  <option value="DataBase Systems">DataBase Systems</option>
                </select>
              </datalist>
            </div>
            <div className="row2">
              {/* Faculty Name Input */}
              <input type="text" placeholder="Faculty Name" />
              {/* Star Rating Input */}
              <div className="starRating-input">
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
              </div>
            </div>
            <div className="row3">
              {/* Ratings Input */}
              <input type="text" placeholder="Ratings" />
              {/* Add Suggestion Button */}
              <button className="extra-addings-btn">Add Suggestion</button>
            </div>
            <div className="row4">
              {/* Finish Button */}
              <button className="confirm-btn" onClick={(e) => {handleAddSuggestion(e)}}>Finish</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FacultySuggestion;
