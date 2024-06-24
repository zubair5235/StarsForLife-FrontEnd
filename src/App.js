import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* Student */

import Start from "./Student/Components/Start";
import StudentLogin from "./Student/Components/StudentLogin";
import StudentMainPage from "./Student/Components/StudentMainPage";
import FacultyReview from "./Student/Components/FacultyReview";
import FacultySuggestion from "./Student/Components/FacultySuggestion";
import Btech from "./Student/Components/Btech";
import Mtech from "./Student/Components/Mtech";
import Arts from "./Student/Components/Arts";
import Projects from "./Student/Components/Projects";
import Meetings from "./Student/Components/Meetings";
import Messages from "./Student/Components/Messages";
import StarsDay from "./Student/Components/StarsDay";
import Archives from "./Student/Components/Archives";
import Calculators from "./Student/Components/Calculators";
import Dudes from "./Student/Components/Dudes";
import ProfileSettings from "./Student/Components/ProfileSettings";
import AccountSettings from "./Student/Components/AccountSettings";
import ErrorPage from "./Student/Components/ErrorPage";

/* Admin */

import AdminLogin from "./Admin/Components/AdminLogin";
import AdminMainPage from "./Admin/Components/AdminMainPage";

/* Stars Coordinator */

import CoordinatorLogin from "./StarsCoordinator/Components/CoordinatorLogin";
import CoordinatorMainPage from "./StarsCoordinator/Components/CoordinatorMainPage";

/* Alumni */

import AlumniLogin from "./Alumni/Components/AlumniLogin";
import AlumniMainPage from "./Alumni/Components/AlumniMainPage";

function App() {
  return (
    <>
      <div className="permanentComponents"></div>
      <Router>
        <div className="temporaryComponents">
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route exact path="/studentlogin" element={<StudentLogin />} />
            {/* <Route exact path="/ssignup" element={<StudentSignUp />} /> */}
            <Route
              exact
              path="/studentMainpage"
              element={<StudentMainPage />}
            />
            <Route
              exact
              path="/ffcs/facultyreview"
              element={<FacultyReview />}
            />
            <Route
              exact
              path="/ffcs/facultysuggestion"
              element={<FacultySuggestion />}
            />
            <Route exact path="/materials/btech" element={<Btech />} />
            <Route exact path="/materials/mtech" element={<Mtech />} />
            <Route exact path="/materials/arts" element={<Arts />} />
            <Route exact path="/materials/projects" element={<Projects />} />
            <Route exact path="/sc/meetings" element={<Meetings />} />
            <Route exact path="/sc/messages" element={<Messages />} />
            <Route exact path="/events/starsday" element={<StarsDay />} />
            <Route exact path="/events/archives" element={<Archives />} />
            <Route exact path="/others/calculators" element={<Calculators />} />
            <Route exact path="/others/dudes" element={<Dudes />} />
            <Route
              exact
              path="/profile/profilesettings"
              element={<ProfileSettings />}
            />
            <Route
              exact
              path="/profile/accountsettings"
              element={<AccountSettings />}
            ></Route>
            <Route path="*" element={<ErrorPage />}></Route>

            <Route exact path="/adminlogin" element={<AdminLogin />}></Route>
            <Route
              exact
              path="/adminmainpage"
              element={<AdminMainPage />}
            ></Route>

            <Route
              exact
              path="/coordinatorlogin"
              element={<CoordinatorLogin />}
            ></Route>
            <Route
              exact
              path="/coordinatormainpage"
              element={<CoordinatorMainPage />}
            ></Route>

            <Route exact path="/alumnilogin" element={<AlumniLogin />}></Route>
            <Route exact path="/alumnimainpage" element={<AlumniMainPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
