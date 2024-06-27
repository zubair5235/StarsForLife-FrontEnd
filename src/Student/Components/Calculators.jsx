import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "../CSS/Calculators.css";

import Home from "../Assets/Home Icon.jpg";

function Calculators() {
  const Navigate = useNavigate();

  const calculator = useRef();
  const content = useRef();
  const title = useRef();
  const addMoreButton = useRef();
  const calculateButton = useRef();
  const toggleButton = useRef();

  const [inCGPA, setInCGPA] = useState(true);

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  function handleAddMore() {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td contentEditable="true">${inCGPA ? "Semester" : "Subject"} ${
      document.querySelectorAll(".calculator-table tbody tr").length + 1
    }</td>
    <td><input type="text" /></td>
    <td><input type="number" /></td>
    <td>
      <!-- Delete row icon -->
      <span class="delete-row">
        <button class="dlt-btn">Delete</button>
      </span>
    </td>
  `;

    const deleteIcon = newRow.querySelector(".delete-row");
    deleteIcon.addEventListener("click", handleDeleteRow);

    document.querySelector(".calculator-table tbody").appendChild(newRow);
  }

  function handleDeleteRow(e) {
    const row = e.target.closest("tr");
    row.remove();
  }

  function handleToggle() {
    if (inCGPA) {
      toggleButton.current.style.justifyContent = "flex-end";
      calculator.current.innerText = "GPA calculator";
      content.current.innerText = "GPA";
      title.current.innerText = "Subject 1";
      addMoreButton.current.innerText = "Add More Subjects";
      calculateButton.current.innerText = `calculate GPA`;
      setInCGPA(false);
    } else {
      toggleButton.current.style.justifyContent = "flex-start";
      calculator.current.innerText = "CGPA calculator";
      content.current.innerText = "Grade";
      title.current.innerText = "Semester 1";
      addMoreButton.current.innerText = "Add More Semesters";
      calculateButton.current.innerText = `calculate CGPA`;
      setInCGPA(true);
    }
  }

  return (
    <>
      <div className="calculators-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
          </button>
        </div>

        <div className="filters">
          <div className="leftSide"></div>
          <div className="rightSide">
            <div className="toggle">
              <p>CGPA</p>
              <div
                className="toggle-btn"
                ref={toggleButton}
                onClick={handleToggle}
              >
                <div className="btn"></div>
              </div>
              <p>GPA</p>
            </div>
          </div>
        </div>

        <div className="calculator">
          <table className="calculator-table">
            <thead>
              <tr>
                <th ref={calculator}>CGPA Calculator</th>
                <th ref={content}>GPA</th>
                <th>Credits</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr id="row">
                <td ref={title}>Semester 1</td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="number" />
                </td>
                <td>
                  <span className="delete-row">
                    <button
                      className="dlt-btn"
                      onClick={(e) => {
                        handleDeleteRow(e);
                      }}
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <button
            className="add-more-btn"
            ref={addMoreButton}
            onClick={handleAddMore}
          >
            Add More Subjects
          </button>
          <button className="calculate-btn" ref={calculateButton}>
            Calculate {inCGPA ? "CGPA" : "GPA"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculators;
