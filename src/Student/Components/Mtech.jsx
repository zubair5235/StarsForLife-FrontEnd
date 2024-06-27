import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import "../CSS/Mtech.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function Mtech() {
  const Navigate = useNavigate();
  const contributionFormContainer = useRef(null);

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  function handleOpenNewContribution() {
    contributionFormContainer.current.classList.add("show");
  }

  function handleCloseNewContribution() {
    contributionFormContainer.current.classList.remove("show");
  }

  return (
    <>
      <div className="mtech-container">
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

        <div className="materials-table">
          <table>
            <thead>
              <tr id="top">
                <th>S.No</th>
                <th>Subject Code</th>
                <th>subject Name</th>
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
                  <Icon
                    icon="streamline:download-circle-solid"
                    color="black"
                    width="24"
                    height="24"
                  />
                </td>
                <td>
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

        <div className="table-filters">
          <button className="top-btn">
            <a href="#top">Go to Top</a>
          </button>
        </div>
      </div>

      <div
        className="contribution-form-container"
        ref={contributionFormContainer}
      >
        <div className="cf-form">
          <div className="cf-form-header">
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
                  <option value="DataBase Systems">DataBase Systems</option>
                </select>
              </datalist>
            </div>

            <div className="cf-row2">
              <input type="text" placeholder="Materials Name" />
              <button className="fileInput-btn">
                <input type="file" />
              </button>
            </div>

            <div className="cf-row3">
              <button className="confirm-btn">Contribute</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mtech;
