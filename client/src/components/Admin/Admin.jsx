import "./style.css";

function Admin() {
  return (
    <div className="containerDiv">
      <form className="containerForm">
        <input type="login" placeholder="Login" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button>Log in as admin</button>
        <br />
      </form>
    </div>
  );
}

export default Admin;
