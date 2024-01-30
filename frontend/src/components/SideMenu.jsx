import("../styles/sidemenu.scss");
/* import calendar from ("../assets/sidemenu/calendar.png")
import disconnect from ("../assets/sidemenu/disconnect.png")
import friends from ("../assets/sidemenu/friends.png")
import hand from ("../assets/sidemenu/hand.png")
import map from ("../assets/sidemenu/map.png")
import params from ("../assets/sidemenu/params.png") */
import surf from ("../assets/sidemenu/surf.png")

function SideMenu() {
  return (
    <div className="sideMenu">
      <h2>WAVES</h2>
      <div className="topMenu">
        <div className="sideMenuSurf">
            <img src={surf} alt="surf" />
            <h3>SURF</h3>
        </div>
            <div className="surfList">
                <ul>
                    <li>MAP</li>
                    <li>SESSION</li>
                </ul>
            </div>

      </div>
      <div className="social">
        <h3>SOCIAL</h3>
        <p>FRIENDS</p>
      </div>
      <div className="account">
        <h3>ACCOUNT</h3>
        <ul>
          <li>PROFILE</li>
          <li>DISCONNECT</li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
