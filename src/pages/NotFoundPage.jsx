import { Link } from "react-router-dom";
import dobby from "../assets/boddy-gif.gif";

const footstepGif =
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2ExcGViajdnY2JheWtyMTd1MjgxZDJwZWhhaXhmZmZ3YnJ6bmJtdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q/slPSVv0rNDe5GSLTlN/giphy.gif";

function NotFoundPage() {
  return (
    <div className="not-found">
      <img src={dobby} alt="Magic spell gone wrong" className="notfound-gif" />

      <h1>404 — A Spell Went Wrong</h1>
      <h2>Dobby only meant to help.</h2>
      <p>The page vanished in a flash of magic.</p>

      <div className="footsteps">
        <img src={footstepGif} alt="Footsteps walking" className="footstep" />
      </div>

      <div className="go-back">
        <Link to="/">Back to Shop</Link>
      </div>
    </div>
  );
}
export default NotFoundPage;
