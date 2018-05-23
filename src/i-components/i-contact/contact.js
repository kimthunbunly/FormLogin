import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
import Mail from '../../i-assests/i-image/send-mail.svg';

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3">
          <img src={Mail}/>
        </div>
        <div className="col-3">
          <div className="col-con">
            <h1>Contact Information</h1>
            <p>Phone Office:<br/><span> +855 10 200 201 / +855 12 345 678 </span></p>
            <p>Email Office:<br/> <span> easybuying@shop.org </span></p>
            <p>Address: <br/><span> #32, St Monivong Bvd , Snagkat Beong Trobek, Phnom Penh.</span></p>
          </div>
          <div className="col-con">
            <input type="text" id="username" placeholder="Your Name"/>
            <input type="email" id="useremail" placeholder="Your Email"/>
            <textarea name="comment" form="usrform" placeholder="Write something about this......."/>
            <button type="button">Submit</button>
            <h2>Thank you we will replied you soon!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
