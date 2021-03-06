import React, { useState } from "react";
import "./Welcome.css";
import video from "../../../assets/mp4/bg.mp4";
import { Collapse } from "reactstrap";

function WelcomePage({ onRoutChange, subscriptionHandler }) {
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const [incValue, setIncValue] = useState("");
  const changeCollapse = (collapse) => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter((prop) => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  function handleChange(e) {
    if (e.target.value.length >= 10) {
      setIncValue(e.target.value);
    }
  }
  const toMessageApp = () => {
    // let incomming = document.getElementById("inputPhone");
    let version = IOSversion();
    console.log(version);
    if (IOSversion() !== false && version[0] > 7) {
      window.open("sms:7672 &body=ok");
    } else window.open("sms:7672 ?body=ok");
  };

  const stopSub = () => {
    let version = IOSversion();
    if (IOSversion() !== false && version[0] > 7) {
      window.open("sms:7672 &body=Stop");
    } else window.open("sms:7672 ?body=Stop");
  };

  const IOSversion = () => {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    } else return false;
  };
  // const coutSubscribers = useSelector(state => state.subCounterReducer);
  // const dispatch = useDispatch();
  return (
    <div className="welcomeContainer">
      <div class="overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div class="masthead">
        <div class="masthead-bg"></div>
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-12 my-auto">
              <a href="/login" className="homeAdminBtn">
                Admin
              </a>
              {/* {<Link to="/login" className="homeAdminBtn">Admin</Link> } */}
              <div class="masthead-content text-white py-5 py-md-0">
                <h1 class="mb-5">Shega Infotainment</h1>
                <p class="mb-3">First 3 Days Free, Then 2 Birrs Per day</p>
                <p>የመጀመሪያ 3 ቀን በነፃ፤ ቀጥሎ በቀን 2 ብር</p>
                <form class="form-inline" style={{ paddingLeft: "20px" }}>
                  <div class=" px-2 mb-2">
                    <input
                      className="form-control"
                      type="tel"
                      id="inputPhone"
                      placeholder="ስልኮውን ያስገቡ: 251911 --"
                      maxLength="13"
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary mb-2"
                    id="subscribe"
                    href="/loginPanel"
                    onClick={() => toMessageApp()}
                    disabled={!incValue}
                  >
                    SUBSCRIBE
                  </button>
                </form>
                <p>
                  To{" "}
                  <a
                    href="/#"
                    onClick={() => stopSub()}
                    style={{ color: "red" }}
                  >
                    Unsubscribe
                  </a>
                  , Send 'STOP' to 7672
                </p>
                <p>
                  {" "}
                  ከዚህ በፊት ተመዝገበዋል ?{" "}
                  <a href="/loginPanel" style={{ color: "dark-green" }}>
                    Login
                  </a>{" "}
                </p>
                {/* <h4 className="mt-5 text-center">
                  {" "}
                  Language & Driving License
                </h4> */}
              </div>
              <div className="termsAndConditionsDesk">
                <a
                  aria-expanded={collapses.includes(2)}
                  data-parent="#accordion"
                  data-toggle="collapse"
                  href="terms"
                  onClick={(e) => {
                    e.preventDefault();
                    changeCollapse(2);
                  }}
                >
                  Terms and Conditions{" "}
                  <i className="fa fa-caret-down rotate-if-collapsed"></i>
                </a>
                <Collapse isOpen={collapses.includes(2)}>
                  <div
                    className="termsAndConditionsContaint"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    <h3>SHEGA.ET</h3>
                    <h3>
                      SHEGA ENGLISH LANGUAGE LEARNING, DRIVING LICENSE LEARNING
                      AND JOKES SERVICE
                    </h3>
                    <h4>TERMS AND CONDITIONS</h4>
                    <p>
                      Please read these Terms and Conditions ("Terms", "Terms
                      and Conditions") carefully before using the
                      http://shega.et website and the Shega English Language
                      Learning, Driving License Learning & Jokes Service (the
                      "Service") operated by Elpida Trading PLC (the “Service
                      Provider”, “us", "we", or "our"). Your access to and use
                      of the Service is conditioned on your acceptance of and
                      compliance with these Terms. These Terms apply to all
                      visitors, users and others who access or use the Service.
                    </p>
                    <h6>
                      By accessing or using the Service you agree to be bound by
                      these Terms. If you disagree with any part of the terms
                      then you should not access the Service.
                    </h6>
                    <br></br>
                    <br></br>
                    <h6>1. Service Description </h6>
                    <p>
                      “Shega English Language Learning, Driving License Learning
                      & Jokes Service” is a simple but broad English Language
                      Learning, Driving License Learning & Jokes Service where
                      subscribers can choose different fluency levels and take
                      lessons that are supported by examples and quizzes for the
                      English Language Learning and also Subscribers get driving
                      lesson by accessing legal driving manuals and research
                      based situational awareness driver training. Moreover,
                      Subscribers can get entertaining Amharic jokes by using
                      the same portal. The service is provided to users who
                      subscribe to “Shega English Language Learning, Driving
                      License Learning & Jokes Service.” You can only use the
                      services once if you only agree with the Terms and
                      conditions. By continuing using the service, you are
                      agreeing with the Terms and Conditions of "Shega English
                      Language Learning, Driving License Learning & Jokes."{" "}
                    </p>
                    <p>
                      We disclaim all liability and responsibility arising from
                      any reliance placed on information and materials on the
                      website by any visitor to the Site, or by any person who
                      may be informed of any of its content.{" "}
                    </p>
                    <p>
                      "Shega English Language Learning, Driving License Learning
                      & Jokes" Services will be given after successful
                      subscription for the service on Shega.et website.{" "}
                    </p>
                    <h6>2. Subscription </h6>
                    <p>
                      The service is provided to mobile users who subscribe by
                      clicking and passing through the “Subscribe” and
                      “Confirmation” steps of the website. Up on completing this
                      two steps, the mobile customer is regarded as a subscriber
                      and will receive a confirmation SMS from our short code.{" "}
                    </p>
                    <h6>3. Charging </h6>
                    <p>
                      As stated clearly on the landing page of the website, the
                      first 3 days after subscription will be free of charge.
                      Afterwards, 2 Birrs will be deducted from the subscriber’s
                      mobile credit every day till the customer unsubscribed
                      from the service.{" "}
                    </p>
                    <h6>4. Subscriber Management </h6>
                    <p>
                      The subscriber will receive a Reminder SMS every 5 days
                      stating subscription details and charging information. -
                      To unsubscribe from the service, a customer can send
                      “STOP” to the dedicated service short code line or can
                      click the “Unsubscribe” button inside the website.
                      Afterwards, the user will no longer can access the
                      contents of the website and won’t be charged onwards.{" "}
                    </p>
                    <h6>5. Eligibility </h6>
                    <p>
                      This service is for ETHIO Telecom mobile customers who
                      reside in Ethiopia and is above the age of 18.{" "}
                    </p>
                    <h6>6. Service Provider’s Responsibility </h6>
                    <p>
                      The service provider must send confirmation and reminder
                      SMS to the subscriber and properly execute received “STOP”
                      messages or unsubscribe requests.{" "}
                    </p>
                    <h6>7. Website availability </h6>
                    <p>
                      We take all reasonable steps to ensure that the website is
                      available 24 hours every day, 365 days per year. However,
                      websites do sometimes encounter downtime due to technical
                      and hosting infrastructure issues. Therefore we will not
                      be liable if this website is unavailable at any time. The
                      website may be temporarily unavailable due to issues such
                      as system failure, maintenance or repair or for reasons
                      beyond our control. Where possible we will try to give our
                      visitors advance warning of maintenance issues but shall
                      not be obliged to do so.
                    </p>
                    <h6>8. Links To Other Web Sites </h6>
                    <p>
                      Shega.et website can be linked to other web and mobile
                      platforms including app and websites advertisements. We do
                      not review each 3rd party website/application and have no
                      responsibility for such third party websites/applications
                      or their content. We do not endorse the 3rd party
                      websites/applications or make representations about them
                      or any material contained in them.{" "}
                    </p>
                    <h6>9. Changes </h6>
                    <p>
                      The SERVICE PROVIDER can make changes and amendments on
                      any of the Terms and Conditions and implement it on the
                      service as they see fit without any prior notice.
                      Subscribers shall read the Terms and Conditions whenever
                      they use the site and shall update themselves if there are
                      amendments on the Terms and Conditions of the service. If
                      you don't agree with the amendments, you shall stop using
                      the service.{" "}
                    </p>
                    <h6>10. Support </h6>
                    <p>
                      In accordance with this Terms and Conditions, The SERVICE
                      PROVIDER is ready to give any support related to Service
                      Content, Website Access or other aspects of the service.
                      To contact customer support service, you can call
                      0944336661 or send an email to elpidatradingplc@gmail.com.
                      The support team will give a solution as fast as possible.{" "}
                    </p>
                    <h6>11. Governing jurisdiction </h6>
                    <p>
                      This Legal Notice shall be governed by and construed in
                      accordance with Ethiopian law. Any dispute(s) arising in
                      connection with this Legal Notice are subject to the
                      exclusive jurisdiction of Ethiopia.{" "}
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="social-icons">
        <ul class="list-unstyled text-center mb-0">
          <li class="list-unstyled-item">
            <a href="sms:0944336661" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-sms"></i>
            </a>
          </li>
          <li class="list-unstyled-item">
            <a
              href="https://www.facebook.com/Shega-Intertainment-625447708085322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="list-unstyled-item">
            <a
              href="https://t.me/Abera_Mechal1990"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-telegram"></i>
            </a>
          </li>
        </ul>
        <div className="termsAndConditionsMob">
          <p>
            {" "}
            © Copyright <b>Shega.et.</b> All Rights Reserved
          </p>
          <a
            aria-expanded={collapses.includes(3)}
            data-parent="#accordion"
            data-toggle="collapse"
            href="terms"
            onClick={(e) => {
              e.preventDefault();
              changeCollapse(3);
            }}
          >
            Terms and Conditions{" "}
            <i className="fa fa-caret-down rotate-if-collapsed"></i>
          </a>
          <Collapse isOpen={collapses.includes(3)}>
            <div
              className="termsAndConditionsContaint"
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
              }}
            >
              <h3>SHEGA.ET</h3>
              <h3>
                SHEGA ENGLISH LANGUAGE LEARNING, DRIVING LICENSE LEARNING AND
                JOKES SERVICE
              </h3>
              <h4>TERMS AND CONDITIONS</h4>
              <p>
                Please read these Terms and Conditions ("Terms", "Terms and
                Conditions") carefully before using the http://shega.et website
                and the Shega English Language Learning, Driving License
                Learning & Jokes Service (the "Service") operated by Elpida
                Trading PLC (the “Service Provider”, “us", "we", or "our"). Your
                access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms. These Terms apply
                to all visitors, users and others who access or use the Service.
              </p>
              <h6>
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you
                should not access the Service.
              </h6>
              <br></br>
              <br></br>
              <h6>1. Service Description </h6>
              <p>
                “Shega English Language Learning, Driving License Learning &
                Jokes Service” is a simple but broad English Language Learning,
                Driving License Learning & Jokes Service where subscribers can
                choose different fluency levels and take lessons that are
                supported by examples and quizzes for the English Language
                Learning and also Subscribers get driving lesson by accessing
                legal driving manuals and research based situational awareness
                driver training. Moreover, Subscribers can get entertaining
                Amharic jokes by using the same portal. The service is provided
                to users who subscribe to “Shega English Language Learning,
                Driving License Learning & Jokes Service.” You can only use the
                services once if you only agree with the Terms and conditions.
                By continuing using the service, you are agreeing with the Terms
                and Conditions of "Shega English Language Learning, Driving
                License Learning & Jokes."{" "}
              </p>
              <p>
                We disclaim all liability and responsibility arising from any
                reliance placed on information and materials on the website by
                any visitor to the Site, or by any person who may be informed of
                any of its content.{" "}
              </p>
              <p>
                "Shega English Language Learning, Driving License Learning &
                Jokes" Services will be given after successful subscription for
                the service on Shega.et website.{" "}
              </p>
              <h6>2. Subscription </h6>
              <p>
                The service is provided to mobile users who subscribe by
                clicking and passing through the “Subscribe” and “Confirmation”
                steps of the website. Up on completing this two steps, the
                mobile customer is regarded as a subscriber and will receive a
                confirmation SMS from our short code.{" "}
              </p>
              <h6>3. Charging </h6>
              <p>
                As stated clearly on the landing page of the website, the first
                3 days after subscription will be free of charge. Afterwards, 2
                Birrs will be deducted from the subscriber’s mobile credit every
                day till the customer unsubscribed from the service.{" "}
              </p>
              <h6>4. Subscriber Management </h6>
              <p>
                The subscriber will receive a Reminder SMS every 5 days stating
                subscription details and charging information. - To unsubscribe
                from the service, a customer can send “STOP” to the dedicated
                service short code line or can click the “Unsubscribe” button
                inside the website. Afterwards, the user will no longer can
                access the contents of the website and won’t be charged onwards.{" "}
              </p>
              <h6>5. Eligibility </h6>
              <p>
                This service is for ETHIO Telecom mobile customers who reside in
                Ethiopia and is above the age of 18.{" "}
              </p>
              <h6>6. Service Provider’s Responsibility </h6>
              <p>
                The service provider must send confirmation and reminder SMS to
                the subscriber and properly execute received “STOP” messages or
                unsubscribe requests.{" "}
              </p>
              <h6>7. Website availability </h6>
              <p>
                We take all reasonable steps to ensure that the website is
                available 24 hours every day, 365 days per year. However,
                websites do sometimes encounter downtime due to technical and
                hosting infrastructure issues. Therefore we will not be liable
                if this website is unavailable at any time. The website may be
                temporarily unavailable due to issues such as system failure,
                maintenance or repair or for reasons beyond our control. Where
                possible we will try to give our visitors advance warning of
                maintenance issues but shall not be obliged to do so.
              </p>
              <h6>8. Links To Other Web Sites </h6>
              <p>
                Shega.et website can be linked to other web and mobile platforms
                including app and websites advertisements. We do not review each
                3rd party website/application and have no responsibility for
                such third party websites/applications or their content. We do
                not endorse the 3rd party websites/applications or make
                representations about them or any material contained in them.{" "}
              </p>
              <h6>9. Changes </h6>
              <p>
                The SERVICE PROVIDER can make changes and amendments on any of
                the Terms and Conditions and implement it on the service as they
                see fit without any prior notice. Subscribers shall read the
                Terms and Conditions whenever they use the site and shall update
                themselves if there are amendments on the Terms and Conditions
                of the service. If you don't agree with the amendments, you
                shall stop using the service.{" "}
              </p>
              <h6>10. Support </h6>
              <p>
                In accordance with this Terms and Conditions, The SERVICE
                PROVIDER is ready to give any support related to Service
                Content, Website Access or other aspects of the service. To
                contact customer support service, you can call 0944336661 or
                send an email to elpidatradingplc@gmail.com. The support team
                will give a solution as fast as possible.{" "}
              </p>
              <h6>11. Governing jurisdiction </h6>
              <p>
                This Legal Notice shall be governed by and construed in
                accordance with Ethiopian law. Any dispute(s) arising in
                connection with this Legal Notice are subject to the exclusive
                jurisdiction of Ethiopia.{" "}
              </p>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
