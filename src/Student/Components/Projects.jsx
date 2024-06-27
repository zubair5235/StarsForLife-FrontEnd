import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../CSS/Project.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function Projects() {
  const contributionFormContainer = useRef();
  const detailsContainer = useRef();

  const Navigate = useNavigate();

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  function handleOpenNewSuggestion() {
    contributionFormContainer.current.classList.add("show");
  }

  function handleCloseNewContribution() {
    contributionFormContainer.current.classList.remove("show");
  }

  function handleOpenDetails() {
    detailsContainer.current.classList.add("show");
  }

  function handleCloseDetails() {
    detailsContainer.current.classList.remove("show");
  }

  return (
    <>
      <div className="projects-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
          <button
            className="contribution-btn"
            onClick={handleOpenNewSuggestion}
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
            <div className="department filter">
              <input
                type="text"
                list="departmentName"
                placeholder="Department"
              />
              <datalist id="departmentName">
                <select>
                  <option value="CSE-IOT">CSE-IOT</option>
                </select>
              </datalist>
            </div>
            <div className="program filter">
              <input type="text" list="program" placeholder="Program" />
              <datalist id="program">
                <select>
                  <option value="B.Tech">B.Tech</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        <div className="projects-table">
          <table>
            <thead>
              <tr id="top">
                <th>S.No</th>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Project Name</th>
                <th>Details</th>
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
                <td>PayRoll Management System</td>
                <td onClick={handleOpenDetails}>Details</td>
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
        <div className="pcf-form">
          <div className="pcf-form-header">
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
            <div className="pcf-row1">
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
            <div className="pcf-row2">
              <input type="text" placeholder="Project Name" />
              <button className="fileInput-btn">
                <input type="file" />
              </button>
            </div>
            <div className="pcf-row3">
              <textarea cols="30" rows="10" placeholder="Details..."></textarea>
            </div>
            <div className="pcf-row4">
              <button className="confirm-btn">Contribute</button>
            </div>
          </form>
        </div>
      </div>

      <div className="details-container" ref={detailsContainer}>
        <div className="details-box">
          <div className="top-contents">
            <Icon
              icon="ic:round-close"
              color="black"
              width="32"
              height="32"
              onClick={handleCloseDetails}
            />
          </div>
          <p>
            Our project is a comprehensive online platform for college students,
            offering features like faculty reviews, model timetables, faculty
            recommendations, study material sharing, coordinator communication,
            STARS DAY registration and archives, GPA/CGPA calculators,
            department and district connections, student chat, and access to
            college placement records. It aims to empower students by providing
            essential resources and fostering a sense of community, enhancing
            their college experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
