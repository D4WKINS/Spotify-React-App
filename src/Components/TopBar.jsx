const  TopBar = () => {
    return ( 
    <div class="contentSection pl-4 pr-1">
    <div class="container pb-4 mb-5">
      <nav class="Page-navigation">
        <ul class="pagination justify-content-center">
          <li class="active page-item text-center">
            <a class="page-link" href="#"
              >TRENDING
              <div class="link-borderBottom"></div
            ></a>
          </li>
          <li class="page-item text-center">
            <a class="page-link" href="#"
              ><div class="link-borderBottom"></div>
              PODCAST</a
            >
          </li>
          <li class="page-item text-center">
            <a class="page-link" href="#"
              ><div class="link-borderBottom"></div>
              MOODS AND GENRES</a
            >
          </li>
          <li class="page-item text-center">
            <a class="page-link" href="#"
              ><div class="link-borderBottom"></div>
              NEW RELEASES</a
            >
          </li>
          <li class="page-item text-center">
            <a class="page-link" href="#"
              ><div class="link-borderBottom"></div>
              DISCOVER</a
            >
          </li>
        </ul>
      </nav>
    </div> 
    </div>
    );
}
 
export default TopBar;