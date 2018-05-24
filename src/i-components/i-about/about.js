import React, {Component} from 'react';
import '../../i-assests/i-css/Style.css';
// import '../../i-assests/i-css/animate.css';

class About extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-cus"><br/></div>
          <div className="col-cus2">
                <h1> About US </h1>
                <p>Instead of following the classic<b> "About Us"</b> script and writing a few paragraphs about the company is mission and origins,
                  try something different -- there are plenty of ways to make your brand more compelling to someone who does not know about you.
                  Take Moz, for example. A lot has happened since it was founded in 2004, so the company chose to share those milestones using a
                  fun and clean design that incorporates clear headers, concise blurbs, and little graphics to break up the text.
                  We especially love the humble references to how Moz received funding, how it switched its brand positioning -- and most importantly,
                  how it switched back to its original model. This speaks volumes to the value honesty and humbleness can play to your customers. Do not
                  be afraid to talk about your ups and downs; your customers will trust what you say that much more.</p>
                  <div className="border-line">
                    <p>Copyright © 2018 by Developer Banly</p>
                  </div>
          </div>
          <div className="col-cus"><br/></div>
      </div>
    );
  }
}

export default About ;
