import github from "../../assets/github.png";

function Footer() {
  return (
    <div className="footer">
      <small>
        © 2025 — Built by Alexandra Domareski & Arthur Jorge |
        <a href="https://github.com/ArthurSJz/Wizarding-Shop" target="_blank">
          <img src={github} className="github-logo" alt="github logo" />
        </a>
      </small>
    </div>
  );
}
export default Footer;
