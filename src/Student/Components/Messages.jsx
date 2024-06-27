import { useNavigate } from "react-router-dom";
import "../CSS/Messages.css";

import Home from "../Assets/Home Icon.jpg";
import Search from "../Assets/Filter-SearchIcon.png";

function Messages() {
  const Navigate = useNavigate();

  function handleHomeNavigation() {
    Navigate("/studentMainpage");
  }

  return (
    <>
      <div className="messages-container">
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
            <div className="time filter">
              <input type="text" list="time" placeholder="From When" />
              <datalist id="time">
                <select>
                  <option value="Recent">Recent</option>
                  <option value="Oldest">Oldest</option>
                </select>
              </datalist>
            </div>
          </div>
        </div>

        <div className="meetings-table">
          <table>
            <thead>
              <tr id="top">
                <th>S.No</th>
                <th>Meeting ID</th>
                <th>By</th>
                <th>Message</th>
                <th>Response</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>12538</td>
                <td>Stars Coordinator</td>
                <td>Some Great News</td>
                <td>
                  <button className="response-btn">Respond</button>
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
    </>
  );
}

export default Messages;
