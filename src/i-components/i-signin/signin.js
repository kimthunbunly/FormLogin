import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import { Link } from 'react-router-dom';

class Signin extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-2">
            <h3>Personanl Information </h3>
              <input type="text" name="f-name" id="f-name" placeholder="Firstname" required autoFocus/>
              <input type="text" name="l-name" id="l-name" placeholder="Lastname" required autoFocus/>
              <input type="text" name="email" id="email" placeholder="Email"/>
              <input type="date" name="dob" id="dob" placeholder="Date of Birth" required autoFocus/>
              <input type="password" name="password" id="password" placeholder="Password" required autoFocus/>
              <input type="password" name="re-password" id="re-password" placeholder="Re-Password" required autoFocus/>
            </div>
          <div className="col-2">
                <h2>Address Information </h2>
                <input type="text" name="st-number" id="st-number" placeholder="Street Number" required autoFocus/>
                <input type="text" name="st-name" id="st-name" placeholder="Street Name" required autoFocus/>
                <input type="text" name="country" id="country" placeholder="Country" required autoFocus/>
                <input type="text" name="city" id="city" placeholder="  City" required autoFocus/>
                <input type="text" name="religion" id="religion" placeholder="Religion"required autoFocus/>
                <input type="number" name="postcode" id="postcode" placeholder="Post Code"required autoFocus/>
            </div>
            <div className="btn">
              <div className="btn-login">
                <button type="submit">Register Now</button>
              </div>
              <div className="sign-in">
                <Link to ='/u-login'> Already Have Account Login? </Link>
              </div>
            </div>
      </div>
    );
  }
}

export default Signin;
