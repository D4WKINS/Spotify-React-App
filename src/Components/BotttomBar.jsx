const BottomBar = () => {
    return ( 
        <div class="bottomMenuWrapper d-none d-sm-flex d-md-flex d-lg-flex">
        <div class="bottomMenuWrapperLeft">
          <div class="d-flex">
            <div class="position-relative imageDimensionContainer">
              <img src="Img/Highway 61.PNG" class="bottomMenuWrapperLeftAlbumImage" alt=""/>
            </div>
            <div class="bottomMenuWrapperLeftAlbumText">
              <h3>Song For My Father</h3>
              <p>Horace Silver</p>
            </div>
            <div class="bottomMenuWrapperLeftIcons">
              <ul>
                <li><i class="far fa-heart"></i></li>
                <li><i class="fas fa-laptop"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="bottomMenuWrapperCenter">
          <div>
            <ul class="d-flex align-items-center justify-content-center">
              <li class="bottomMenuWrapperCenterSecondaryIcon">
                <i class="fas fa-random"></i>
              </li>
              <li class="bottomMenuWrapperCenterSecondaryIcon">
                <i class="fas fa-step-backward"></i>
              </li>
              <li class="bottomMenuWrapperCenterPlayIcon">
                <i class="far fa-play-circle"></i>
              </li>
              <li class="bottomMenuWrapperCenterSecondaryIcon">
                <i class="fas fa-step-forward"></i>
              </li>
              <li class="bottomMenuWrapperCenterSecondaryIcon">
                <i class="fas fa-redo"></i>
              </li>
            </ul>
          </div>
          <div class="progress progressSong">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="bottomMenuWrapperRight d-flex align-items-center">
          <div>
            <ul>
              <li><i class="fas fa-bars"></i></li>
              <li><i class="fas fa-laptop-code"></i></li>
              <li class="finalListLi">
                <div class="d-flex align-items-center">
                  <i class="fas fa-volume-up"></i>
              
                <input type="range" class="d-lg-block styled-slider slider-progress p-3"/>
                 <div class="progress progressVolume mb-0 ml-2">
                    <div
                      class="progress-bar mb-0"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
            <i class="fas fa-ellipsis-h bottomMenuWrapperRightBars"></i>
          </div>
        </div>
        </div>
     );
}
 
export default BottomBar;