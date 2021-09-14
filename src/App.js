import "./App.css";
import Jobs from "./Components/Jobs/Jobs";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Companies from "./Components/Companies/Companies";
import Login from "./Components/Login/Login";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {
  Link,
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  SiGithub,
  SiLinkedin,
  SiReact,
  SiTwitter,
  SiGoogle,
} from "react-icons/si";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      passwordValue: "",
      content: [],
      valueAuth: "login",
      dataBsTarget: "#exampleModal",
      valueState:false
    };

    let id = "";
    let pass = "";
    let tokenValue = null;
    let homePagee;
  }

  emailHandler = (e) => {
    this.setState({
      emailValue: e.target.value,
    });
    this.id = this.state.email;
  };

  passwordHandler = (e) => {
    this.setState({ passwordValue: e.target.value });
    this.pass = this.state.password;
  };

  onLogout = () => {
    
    let authToken = localStorage.getItem('token');
    console.log(authToken);
    if(authToken.length>0){
      localStorage.removeItem('token');
      this.setState({
        valueState:false
      }) 
    }
  }

  onHomePage = () => {
    let authtoken = localStorage.getItem('token');
    // console.log(authtoken.length);

    if(authtoken.length>0){
      this.setState({
        valueAuth:"logout",
        dataBsTarget:"",
        valueState:1
      })
    }

    if(authtoken.length>0){
      alert("Successfully login");
    }
  }


  loginHandler = (e) => {
    e.preventDefault();

    console.log(this.state.emailValue);
    console.log(this.state.passwordValue);
    console.log(typeof(this.state.content));

    fetch("https://jobs-api.squareboat.info/api/v1/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.emailValue,
        password: this.state.passwordValue,
      }),
    }).then((resp) => {
      resp.json().then((result) => {
        this.setState({ content: result.data });
        // console.log(Object.keys(this.state.content).length);
        if(this.state.content === undefined){
          alert("Try Again");
        }else if(Object.keys(this.state.content).length>0){
          localStorage.setItem('token',this.state.content.token);
          localStorage.setItem('userRole',this.state.content.userRole);
        }
      });
    });

    this.onHomePage();

  };


  render() {
    let {valueState} = this.state;
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand mx-3 text-light" to="#" id="title">
                <img
                  src="https://static.naukri.com/s/4/100/i/naukriLogoIcon200.png"
                  alt=""
                  width="35"
                  height="30"
                  className="d-inline-block align-text-top"
                />
                Naukri
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item mx-3">
                    <Link
                      className="nav-link active"
                      id="nv"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link className="nav-link active" id="nv" to="/companies">
                      Companies
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link className="nav-link active" id="nv" to="/jobs">
                      Jobs
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    <Link className="nav-link active" id="nv" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item mx-3">
                    {
                      (valueState) ? 
                      <a
                      className="nav-link active"
                      href="#"
                      id="nv"
                      data-bs-toggle="modal"
                      onClick={this.onLogout}
                      // data-bs-target={this.onLogout()}
                    >
                      Logout
                    </a> 
                      :
                       <a
                      className="nav-link active"
                      href="#"
                      id="nv"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Login
                    </a> 
                      

                    }
                    
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <form onSubmit={this.loginHandler}>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content align-content-center ">
                  <div className="d-flex justify-content-between">
                    <h5
                      className="modal-title mx-5 mt-2"
                      id="exampleModalLabel"
                    >
                      Sign in
                    </h5>
                    <button
                      type="button"
                      className="btn-close mx-5 mt-2 btn-close-white"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="d-flex mt-3">
                    <div className="form-check">
                      <input
                        className="form-check-input mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Recruiter
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        className="form-check-input mx-4"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Job Seeker
                      </label>
                    </div>
                  </div>
                  <div className="d-flex mt-5 mx-5">
                    <FaUser color={"#3282B8"} size={30} />
                    <input
                      type="email"
                      className="form-control mx-3"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={this.state.emailValue}
                      placeholder="Enter the email"
                      onChange={this.emailHandler}
                    />
                  </div>
                  <div className="d-flex mt-4 mx-5">
                    <FaLock color={"#3282B8"} size={30} />
                    <input
                      type="password"
                      className="form-control mx-3"
                      id="exampleInputPassword1"
                      value={this.state.passwordValue}
                      placeholder="Enter the password"
                      onChange={this.passwordHandler}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary mt-5">
                    Login
                  </button>
                  <p className="or">Or</p>
                  <a className="create" href="#">
                    Create the account
                  </a>
                </div>
              </div>
            </div>
          </form>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/companies">
              <Companies />
            </Route>
            <Route exact path="/jobs">
              <Jobs />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
          <footer className="text-center mb-0">
            <div className="d-flex flex-row mb-3 justify-content-center">
              <a href="https://twitter.com/?lang=en" className="mx-3">
                <SiTwitter size={24} />
              </a>
              <a href="https://reactjs.org/" className="mx-3">
                <SiReact size={24} />
              </a>
              <a href="https://www.google.co.in/" className="mx-3">
                <SiGoogle size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-handa-418932145/"
                className="mx-3"
              >
                <SiLinkedin size={24} />
              </a>
              <a href="https://github.com/Shubham-handa" className="mx-3">
                <SiGithub size={24} />
              </a>
            </div>
            <div className="footend text-center text-light">
              © 2021 Copyright: NaukriDemo.com
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
