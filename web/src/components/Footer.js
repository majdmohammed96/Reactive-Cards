import logo2 from "../images/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer-small">Re-activate &copy;2021</small>
      <a title="Reactive" href="" target="_blank">
        <img className="footer-logo" src={logo2} alt="Reactive" />
      </a>
    </footer>
  );
}

export default Footer;
