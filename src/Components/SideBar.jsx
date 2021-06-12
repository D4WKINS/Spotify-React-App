import Logo from '../Img/Spotifylogo.png'
import {Form, FormControl} from 'react-bootstrap'
import {Component} from 'react'


 

 const SideBar = (props) => {

  const handleSearchInput = (search) =>{
    props.getQuery(search)
  }

    return (
      <div className="wrapperSideBar d-none d-sm-block d-md-block d-lg-block">
      <nav id="sidebar">
        <div className="sidebarHeadings">
          <div className="sidebar-header">
            <img 
              src={Logo}
              class="sidebarLogo"
              alt="Spotify Logo White Trasparent"
            />
          </div>
          <ul className="list-unstyled components">
            <li className="active">
              <a href="index.html" className=""
                ><i className="fas fa-home"></i>Home</a
              >
            </li>
            <li>
              {/* <a href="#"><i class="fas fa-search"></i>Search</a> */}
              <Form className="d-flex px-3 py-3">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange ={(e) => handleSearchInput(e.target.value)}
                />
              </Form>
            </li>
            <li>
              <a className="" data-toggle="collapse" href="#collapsePages" role="button" aria-expanded="false" aria-controls="collapseExample">
                <i className="fas fa-bars"></i>Pages
              </a>
            </li>
            <div className="collapse" id="collapsePages">
              <li>
                <a href="artist.html"><i className="fas fa-music"></i>Artist Page</a>
              </li>
              <li>
                <a href="album.html"><i className="fas fa-compact-disc"></i>Albums Page</a>
              </li>
            </div>
          </ul>
        </div>


        <div id="loggedInBottomMenu" className="sidebarBottomInfo d-none text-left">
          <p className="sidebarBottomInfoInstalltheApp">
            <i className="far fa-arrow-alt-circle-down"></i>Install the app
          </p>
          <div className="sidebarUserImageContainer dropup">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="Img/Userimage.jpeg" className="sidebarUserImage" alt="" />
              <span className="sidebarUserText">Diego Banovaz</span>
            </button>
            <div
              className="dropdown-menu dropdownSettings"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item textDropUp" href="#">Settings</a>
              <a className="dropdown-item textDropUp" href="#" id="logOutButton"
                >Logout</a
              >
            </div>
          </div>
        </div>

        <div id="loggedOutBottomMenu" className="">
          <div className="sidebarBottomInfo d-flex flex-column">
            <button
              type="button"
              className="btn sidebarBottomInfoSignUp"
              data-toggle="modal"
              data-target="#signUpModal"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="btn sidebarBottomInfoLogin"
              data-toggle="modal"
              data-target="#logInModal"
            >
              Login
            </button>
            <div>
              <ul>
                <li className="sidebarBottomInfoliFirst">Cookie</li>
                <li className="sidebarBottomInfoliMiddle">Privacy</li>
                <li className="sidebarBottomInfoliEnd">Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
      );
}
export default SideBar
 
