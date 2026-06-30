
import "../Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <aside>
        <img src= "../public/image.png" alt="Logo" />
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
}

export default Footer;