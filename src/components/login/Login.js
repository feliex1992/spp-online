import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="card login_form">
          <div className="text">Login Form</div>
          <form>
            <div className="field">
              <span>
                <FontAwesomeIcon 
                  icon={faUserAlt}
                  size="1x"
                />
              </span>
              <input type="text" placeholder="Email or User ID" required/>
            </div>
            <div className="field">
              <span>
                <FontAwesomeIcon 
                  icon={faLock}
                  size="1x"
                />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            <div className="forgot-pass">
              <a href="#">Lupa Password?</a>
            </div>
            <button className="button_primary">Masuk</button>
            <div className="signup">
              Belum daftar?
              <a href="#">Daftar</a>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default Login;