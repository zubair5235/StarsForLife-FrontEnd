import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../CSS/FacultySuggestion.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function FacultySuggestion() {
  const Navigate = useNavigate();

  const suggestionFormContainer = useRef(null);

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  function handleOpenNewSuggestion() {
    suggestionFormContainer.current.classList.add("show");
  }

  const count = 2;

  function handleAddSuggestion() {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `<td>${
      count + 1
    }</td><td></td><td></td><td></td><td></td>`;

    document.querySelector(".faculty-suggestion-table").appendChild(newRow);
  }

  function handleCloseNewSuggestion() {
    suggestionFormContainer.current.classList.remove("show");
  }

  return (
    <>
      <div className="faculty-suggestion-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>

          <button
            className="add-suggestion-btn"
            onClick={handleOpenNewSuggestion}
          >
            Add Suggestion
          </button>
        </div>

        <div className="filters">
          <div className="leftSide">
            <div className="filters-searchBar">
              <img src={Search} alt="search-icon" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          <div className="rightSide">
            <div className="subjectCode filter">
              <input
                type="text"
                list="subjectCode"
                placeholder="Subject Code"
              />

              <datalist id="subjectCode">
                <select>
                  <option value="BCSE305P">BCSE305P</option>
                </select>
              </datalist>
            </div>

            <div className="subjectName filter">
              <input
                type="text"
                list="subjectName"
                placeholder="Subject Name"
              />

              <datalist id="subjectName">
                <select>
                  <option value="DataBase Systems">DataBase Systems</option>
                </select>
              </datalist>
            </div>

            <div className="ratings filter">
              <input type="text" list="ratings" placeholder="Ratings" />

              <datalist id="ratings">
                <select>
                  <option value="5">5</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        <div className="faculty-suggestion-table">
          <table>
            <thead>
              <tr id="top">
                <th>S.No</th>
                <th>Subject Code</th>
                <th>subject Name</th>
                <th>Faculty Name</th>
                <th>Interests</th>
                <th>Ratings</th>
              </tr>
            </thead>
            <tbody>
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

        <div className="table-filters">
          <button className="top-btn">
            <a href="#top">Go to Top</a>
          </button>
        </div>
      </div>

      <div className="suggestion-form-container" ref={suggestionFormContainer}>
        <div className="form">
          <div className="form-header">
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
          <form>
            <div className="row1">
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
                  <option value="DataBase Systems">DataBase Systems</option>
                </select>
              </datalist>
            </div>
            <div className="row2">
              <input type="text" placeholder="Faculty Name" />

              <div className="starRating-input">
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
                <Icon icon="ph:star" color="black" width="32" height="32" />
              </div>
            </div>
            <div className="row3">
              <input type="text" placeholder="Ratings" />

              <button className="extra-addings-btn">Add Suggestion</button>
            </div>
            <div className="row4">
              <button
                className="confirm-btn"
                onClick={(e) => {
                  handleAddSuggestion(e);
                }}
              >
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FacultySuggestion;
