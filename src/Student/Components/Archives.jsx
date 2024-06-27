import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "../CSS/Archives.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function Archives() {
  const Navigate = useNavigate();

  const uploadForm = useRef(null);

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  function handleOpenUploadForm() {
    uploadForm.current.classList.add("show");
  }

  function handleCloseUploadForm() {
    uploadForm.current.classList.remove("show");
  }

  return (
    <>
      <div className="archives-container">
        <div className="topBar">
          <button className="home-btn" onClick={handleHomeNavigation}>
            <img src={Home} alt="" />
            Home
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
            <div className="year filter">
              <input type="text" list="year" placeholder="Year" />
              <datalist id="year">
                <select>
                  <option value="2019">2019</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        <div className="images-container"></div>

        <div className="filtersandbuttons">
          <button className="upload-btn" onClick={handleOpenUploadForm}>
            Upload
          </button>
        </div>
      </div>

      <div className="upload-form" ref={uploadForm}>
        <form action="">
          <div className="input-container">
            <input
              type="file"
              accept="image/png, image/jpg, image/jpeg, video/mp4"
            />
          </div>

          <div className="bottom-buttons">
            <button className="cancel-btn" onClick={handleCloseUploadForm}>
              Cancel
            </button>
            <button className="upload-btn" type="submit">
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Archives;
