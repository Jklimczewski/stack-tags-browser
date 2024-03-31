import { GoHome } from "react-icons/go";

function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <a className="btn btn-ghost rounded-box text-3xl" href="/">
        <GoHome />
      </a>
    </div>
  );
}

export { Navbar };
