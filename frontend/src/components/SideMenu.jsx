import("../styles/sidemenu.scss");
import surf from "../assets/sidemenu/surf.png";
import calendar from "../assets/sidemenu/calendar.png";
import disconnect from "../assets/sidemenu/disconnect.png";
import friends from "../assets/sidemenu/friends.png";
import hand from "../assets/sidemenu/hand.png";
import params from "../assets/sidemenu/params.png";
import profile from "../assets/sidemenu/profile.png";
import cross from "../assets/sidemenu/cross.png";

function SideMenu({ onClose }) {
  return (
    <div className="flex w-full">
      <div className="sideMenu absolute w-3/4 h-full z-20 bg-second">
        <div className="flex justify-between">
          <button type="button" onClick={onClose}>
            <h2>WAVES</h2>
          </button>
          <button type="button" className="w-6 h-full m-3" onClick={onClose}>
            <img src={cross} alt="cross" />
          </button>
        </div>
        <div className="bg-first h-px mb-4" />
        <div className="topMenu ml-4 flex flex-col gap-3">
          <div className="sideMenuSurf flex gap-1">
            <img src={surf} alt="surf" className="w-6" />
            <h3 className="font-extrabold text-lg">SURF</h3>
          </div>
          <div className="surfList ml-4 flex gap-1">
            <img src={calendar} alt="calendar" className="w-5" />
            <p className="text-sm">SESSION</p>
          </div>
        </div>
        <div className="bg-first h-px my-4" />
        <div className="social flex flex-col gap-3 ml-4">
          <div className="flex gap-1">
            <img src={friends} alt="surf" className="w-6" />
            <h3 className="font-extrabold text-lg">SOCIAL</h3>
          </div>
          <div className="flex gap-1 ml-4">
            <img src={hand} alt="friends" className="w-5" />
            <p className="text-sm">FRIENDS</p>
          </div>
        </div>
        <div className="bg-first h-px my-4" />
        <div className="account flex flex-col gap-3 ml-4">
          <div className="flex gap-1">
            <img src={params} alt="account" className="w-6 h-full" />
            <h3 className="font-extrabold text-lg">ACCOUNT</h3>
          </div>
          <div className="flex  flex-col gap-1 ml-4">
            <div className="flex gap-1">
              <img src={profile} alt="profile" className="w-6" />
              <p className="text-sm">PROFILE</p>
            </div>
            <div className="flex gap-1">
              <img src={disconnect} alt="disconnect" className="w-6" />
              <p className="text-sm">DISCONNECT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 w-1/4 h-full z-10 bg-gray-400/50" />
    </div>
  );
}

export default SideMenu;
