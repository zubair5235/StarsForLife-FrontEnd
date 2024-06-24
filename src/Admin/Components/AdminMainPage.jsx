import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../CSS/AdminMainPage.css";

function AdminMainPage() {
  const navigate = useNavigate();
  const [isLightMode, setIsLightMode] = useState(false);
  const [showAchievementForm, setShowAchievementForm] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showUsers, setshowUsers] = useState(false);
  const contentContainerRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const contentContainer = contentContainerRef.current;
    if (contentContainer) {
      contentContainer.style.backgroundColor = isLightMode
        ? "white"
        : "rgb(62, 69, 76)";
    }
  }, [isLightMode]);

  function changeTheme(e) {
    const toggle = e.target;
    toggle.classList.toggle("right");
    setIsLightMode((prevMode) => !prevMode);
  }

  function handleUploadAchievements() {
    setShowAchievementForm(true);
    setShowUploadForm(false);
    setshowUsers(false);
  }

  function handleUploadMaterials() {
    setShowUploadForm(true);
    setShowAchievementForm(false);
    setshowUsers(false);
  }

  function handleManageUsers() {
    setshowUsers(true);
    setShowUploadForm(false);
    setShowAchievementForm(false);
  }

  function handleAdminSpace() {
    setShowUploadForm(false);
    setshowUsers(false);
    setShowAchievementForm(false);
  }

  function handleAbort() {
    setShowAchievementForm(false);
    setShowUploadForm(false);
  }

  function handlePost(e) {
    e.preventDefault();
    // Add scheduling logic here
  }

  function handleUpload(e) {
    e.preventDefault();
    // Add sending logic here
  }

  function handleLogout() {
    navigate("/");
  }

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="content-container" ref={contentContainerRef}>
      <div className="top-contents">
        <button
          className="uploadAchievements-btn btn"
          onClick={handleUploadAchievements}
        >
          Upload Achievements
        </button>
        <button className="manageUsers-btn btn" onClick={handleManageUsers}>
          Manage Users
        </button>
        <button className="adminSpace-btn btn" onClick={handleAdminSpace}>
          Admin Space
        </button>
        <button
          className="uploadMaterials-btn btn"
          onClick={handleUploadMaterials}
        >
          Upload Materials
        </button>
      </div>
      <div className="sectionContainer">
        {!showAchievementForm &&
        !showUploadForm &&
        !showUsers ? (
          <p className="textContent" id="textContent">
            Welcome to the Admin Dashboard. Please select an option from <br />{" "}
            above to get started.
          </p>
        ) : showAchievementForm ? (
          <div
            className="achievementForm-container"
            id="achievementForm-container"
          >
            <div className="topContents">
              <p>Achievement Form</p>
            </div>
            <form className="achievement-form" onSubmit={handlePost}>
              <div className="row1">
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg, video/mp4"
                />
              </div>
              <div className="row2">
                <button
                  type="button"
                  className="abort-btn"
                  onClick={handleAbort}
                >
                  Abort
                </button>
                <button type="submit" className="post-btn">
                  Post
                </button>
              </div>
            </form>
          </div>
        ) : showUploadForm ? (
          <div className="uploadForm-container">
            <div className="topContents">
              <p>Upload Form</p>
            </div>
            <form action="" className="upload-form-one" onSubmit={handleUpload}>
              <div className="row1">
                <input type="text" placeholder="Link" />
                <input
                  type="file"
                  accept="application/pdf"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                />
                <button
                  type="button"
                  className="file-button"
                  onClick={handleFileInputClick}
                >
                  Choose your file
                </button>
              </div>
              <div className="row2">
                <input type="text" placeholder="Name" />
                <input type="text" list="type" placeholder="Type" />
                <datalist id="type">
                  <option value="weblink">weblink</option>
                  <option value="material">material</option>
                </datalist>
              </div>
              <div className="row3">
                <button
                  type="button"
                  className="abort-btn btn"
                  onClick={handleAbort}
                >
                  Abort
                </button>
                <button type="submit" className="upload-btn btn">
                  Upload
                </button>
              </div>
            </form>
          </div>
        ) : showUsers ? (
          <div className="userContents">
            <div className="buttonContainer">
            <button className="export-btn">Export</button>
            </div>
            <div className="tableContainer">
              <div className="users-table">
                <table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Year</th>
                      <th>Department</th>
                      <th>District</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Oncampus</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mohamed Zubair</td>
                      <td>2021</td>
                      <td>CSE-IOT</td>
                      <td>Mayiladuthurai</td>
                      <td>9084643132</td>
                      <td>moha...@gmail.com</td>
                      <td>No</td>
                      <td>
                        <button className="remove-btn">Remove</button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Madasamy</td>
                      <td>2021</td>
                      <td>CSE-IOT</td>
                      <td>Thirunelveli</td>
                      <td>9684651382</td>
                      <td>mada...@gmail.com</td>
                      <td>No</td>
                      <td>
                        <button className="remove-btn">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div>What to be placed ? yet to be decided...</div>
        )}
      </div>
      <div className="bottomContents">
        <div className="toggle-btn">
          <div className="round" onClick={changeTheme}></div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminMainPage;
