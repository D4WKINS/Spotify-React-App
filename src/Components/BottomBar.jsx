import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as Icon from "@fortawesome/free-regular-svg-icons"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import * as BrandIcon from "@fortawesome/free-brands-svg-icons"



const BottomBar = () => {
  const [spinHeart, setSpinHeart] = React.useState(false)

    return ( 
        <div className="bottomMenuWrapper d-none d-sm-flex d-md-flex d-lg-flex">
        <div className="bottomMenuWrapperLeft">
          <div className="d-flex">
            <div className="position-relative imageDimensionContainer">
              <img src="Img/Highway 61.PNG" className="bottomMenuWrapperLeftAlbumImage" alt=""/>
            </div>
            <div className="bottomMenuWrapperLeftAlbumText">
              <h3>Song For My Father</h3>
              <p>Horace Silver</p>
            </div>
            <div className="bottomMenuWrapperLeftIcons">
              <ul>
                <li><i className="far fa-heart"></i></li> {/**far = font awesome regular */} 
                <li><i className="fas fa-laptop"></i></li>

                <li className="text-white"><FontAwesomeIcon icon={spinHeart ? SolidIcon.faHeart : Icon.faHeart} spin={spinHeart} onClick={() => setSpinHeart(!spinHeart)} color={spinHeart ? "#F00" : "#FFF"} /></li>
                <li className="text-white"><FontAwesomeIcon icon={SolidIcon.faLaptop} /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomMenuWrapperCenter">
          <div>
            <ul className="d-flex align-items-center justify-content-center">
              <li className="bottomMenuWrapperCenterSecondaryIcon">
                <i className="fas fa-random"></i>
              </li>
              <li className="bottomMenuWrapperCenterSecondaryIcon">
                <i className="fas fa-step-backward"></i>
              </li>
              <li className="bottomMenuWrapperCenterPlayIcon">
                <i className="far fa-play-circle"></i>
              </li>
              <li className="bottomMenuWrapperCenterSecondaryIcon">
                <i className="fas fa-step-forward"></i>
              </li>
              <li className="bottomMenuWrapperCenterSecondaryIcon">
                <i className="fas fa-redo"></i>
              </li>
            </ul>
          </div>
          <div className="progress progressSong">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="bottomMenuWrapperRight d-flex align-items-center">
          <div>
            <ul>
              <li><i className="fas fa-bars"></i></li> // JAWOLL
              <li><i className="fas fa-laptop-code"></i></li>
              <li className="finalListLi">
                <div className="d-flex align-items-center">
                  <i className="fas fa-volume-up"></i>
              
                <input type="range" className="d-lg-block styled-slider slider-progress p-3"/>
                 <div className="progress progressVolume mb-0 ml-2">
                    <div
                      className="progress-bar mb-0"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
            <i className="fas fa-ellipsis-h bottomMenuWrapperRightBars"></i>
          </div>
        </div>
        </div>
     );
}
 
export default BottomBar;