import style from "./Homepage.module.css";
import { Fragment } from "react";
import Card from "../ui/Card";
// import videoUvod from "../../public/testVideo.mp4";
function Homepage() {
  return (
    <Fragment>
      <video className={style.video} autoPlay muted loop>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card>
        <h1> Zlatnictví ArtModeee</h1>
      </Card>
    </Fragment>
  );
}

export default Homepage;
