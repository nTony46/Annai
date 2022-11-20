import { Layout, Link, Logo } from "../../components";
import "./root.styles.css";

function onSubmit() {}

export default function Root() {
  return (
    <Layout hidden>
      <div className="logo-container">
        <Logo lg />
      </div>
      <div className="nav-container">
        <Link to="/upload" block text="Log In" />
        <Link to="/upload" block invert text="Sign Up" />
      </div>
    </Layout>
  );
}
