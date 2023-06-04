import style from "./Layout.module.css";
import Header from "./NavBar";
import Card from "../ui/Card";
function Layout(props) {
  return (
    <div>
      <Header />
      <main className={style.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
