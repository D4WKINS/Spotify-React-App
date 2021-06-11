import Logo from '../Img/Spotifylogo.png'
import {Form, FormControl} from 'react-bootstrap'
const  SideBar = () => {
    return ( 
        <div class="wrapperSideBar d-none d-sm-block d-md-block d-lg-block">
          <nav id="sidebar">
            <div class="sidebarHeadings">
              <div class="sidebar-header">
                <img 
                  src={Logo}
                  class="sidebarLogo"
                  alt="Spotify Logo White Trasparent"
                />
              </div>
              <ul class="list-unstyled components">
                <li class="active">
                  <a href="index.html" class=""
                    ><i class="fas fa-home"></i>Home</a
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
                    />
                  </Form>
                </li>
                <li>
                  <a class="" data-toggle="collapse" href="#collapsePages" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i class="fas fa-bars"></i>Pages
                  </a>
                </li>
                <div class="collapse" id="collapsePages">
                  <li>
                    <a href="artist.html"><i class="fas fa-music"></i>Artist Page</a>
                  </li>
                  <li>
                    <a href="album.html"><i class="fas fa-compact-disc"></i>Albums Page</a>
                  </li>
                </div>
              </ul>
            </div>
    

            <div id="loggedInBottomMenu" class="sidebarBottomInfo d-none text-left">
              <p class="sidebarBottomInfoInstalltheApp">
                <i class="far fa-arrow-alt-circle-down"></i>Install the app
              </p>
              <div class="sidebarUserImageContainer dropup">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="Img/Userimage.jpeg" class="sidebarUserImage" alt="" />
                  <span class="sidebarUserText">Diego Banovaz</span>
                </button>
                <div
                  class="dropdown-menu dropdownSettings"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item textDropUp" href="#">Settings</a>
                  <a class="dropdown-item textDropUp" href="#" id="logOutButton"
                    >Logout</a
                  >
                </div>
              </div>
            </div>

            <div id="loggedOutBottomMenu" class="">
              <div class="sidebarBottomInfo d-flex flex-column">
                <button
                  type="button"
                  class="btn sidebarBottomInfoSignUp"
                  data-toggle="modal"
                  data-target="#signUpModal"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  class="btn sidebarBottomInfoLogin"
                  data-toggle="modal"
                  data-target="#logInModal"
                >
                  Login
                </button>
                <div>
                  <ul>
                    <li class="sidebarBottomInfoliFirst">Cookie</li>
                    <li class="sidebarBottomInfoliMiddle">Privacy</li>
                    <li class="sidebarBottomInfoliEnd">Policy</li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
     );
}
 
export default SideBar ;