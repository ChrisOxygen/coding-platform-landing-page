/* eslint-disable no-unused-vars */
import { DataProvider, useData} from "./DataProvider";
import FaqBlock from "./components/FaqBlock";
import FeatureBox from "./components/FeatureBox";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WorkflowFeature from "./components/WorkflowFeature";








function App() {
  const {socialLogos, features} = useData()
  
  
  return (
    <DataProvider>
      
      <main className="page-container">
        <div className="header-section">
          <div className="box-container">
            <SiteHeader/>
            <div className="hero-block">
              <div className="title-block">
                <h1 className="title-block__title">
                  Get Help With Coding From Certified <span>Engineers.</span>
                </h1>
                <p className="title-block__desc">
                  Learn how to code efficiently and create apps and games that work.
                  Consult with top experts to apply skills in action.  
                </p>
                <button className="title-block__cta-btn">Get started</button>
                <div className="hero-block-img">
                  <span className="circle1" />
                  <span className="circle2" />
                  <span className="circle3" />
                  <img
                    src=" /assets/Code-Playground-1.png"
                    alt=""
                    className="hero-block-img__image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-prof-section">
          <div className="box-container">
            <div className="social-prof-block">
              <span className="social-prof-block__desc">
                Trusted by nearly 500+Engineers  
              </span>
              
              <div className="social-prof-block__logos-container">
              {socialLogos.map((logo, index)=> <img key={index}
                  src={`/assets/${logo}.svg`}
                  alt={`${logo}`}
                  className="sp-logo"
                />)}
              </div>
            </div>
          </div>
        </div>
        <div className="features-section">
          <div className="box-container">
            <div className="features-block">
              <div className="features-block__title">
                Specially made to help you where stucked
              </div>
              <span className="features-block__desc">
                We have covered everything that you may have need while stuck at
                developing softwares to get rid from this  
              </span>
              <div className="feature-boxes-container">
                {features.map((feature, index)=> <FeatureBox key={index} icon={feature.icon} title={feature.title} desc={feature.desc} />)}
              </div>
            </div>
          </div>
        </div>
        <div className="workflow-and-comm-section">
          <div className="workflow-and-comm-box-container">
            <div className="workflow-block">
              <img
                src=" /assets/workflow-img.svg"
                alt=""
                className="workflow-block__image"
              />
              <div className="workflow-block__features-section">
                <h2 className="features-section-title">
                  Create complex workflows instantly
                </h2>
                <WorkflowFeature/>
                <button className="meet-chatbot">
                  <span className="meet-chatbot__text">Meet Our Chatbot</span>
                  <img
                    src=" /assets/Icon-arrow-right.svg"
                    alt=""
                    className="meet-chatbot__icon"
                  />
                </button>
              </div>
            </div>
            <div className="comm-block">
              <div className="comm-block-text-column">
                <h2 className="comm-block-text-column__title">
                  Communication via automatic actions
                </h2>
                <p className="comm-block-text-column__desc">
                  Task automation refers to the use of software to complete work
                  activities. Task automation improves the accuracy &amp;
                  consistency and powers more efficient processes.
                </p>
                <button className="comm-block-text-column__cta-btn">
                  Explore Now
                </button>
              </div>
              <img
                src=" /assets/communication-img.svg"
                alt=""
                className="comm-block__image"
              />
            </div>
          </div>
        </div>
        <div className="faq-section">
          <div className="box-container">
            <div className="faq-block">
              <span className="blur-circle blur-circle--yellow" />
              <span className="blur-circle blur-circle--purple" />
              <h2 className="faq-block__title">
                Codersing helps you solve coding problems
              </h2>
              <FaqBlock/>
            </div>
          </div>
        </div>
        <div className="pricing-section">
          <div className="box-container">
            <div className="pricing-block">
              <div className="pricing-block__title-area">
                <span>Simple Pricing</span>
                <h2 className="pricing-block__title">
                  Simple and affordable pricing plans for everyone
                </h2>
              </div>
              <div className="pricing-block__pricing-plans">
                <div className="pricing-plan">
                  <h5 className="pricing-plan__title">Starter</h5>
                  <span className="pricing-plan__desc">
                    All you need to get started
                  </span>
                  <h4 className="pricing-plan__price">$44</h4>
                  <ul className="detail-list">
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">2 seats</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">5GB storage</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Template library</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Free hosting</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Email support</span>
                    </li>
                  </ul>
                  <button className="pricing-plan__cta-btn">Get started</button>
                </div>
                <div className="pricing-plan pricing-plan--featured">
                  <h5 className="pricing-plan__title">Professional</h5>
                  <span className="pricing-plan__desc">
                    All you need to get started
                  </span>
                  <h4 className="pricing-plan__price">$88</h4>
                  <ul className="detail-list">
                    <li className="detail-list__item">
                      <img
                        src=" /assets/white-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">10 seats</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/white-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">25GB storage</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/white-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Template library</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/white-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Free hosting</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/white-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Priority support</span>
                    </li>
                  </ul>
                  <button className="pricing-plan__cta-btn">Get started</button>
                </div>
                <div className="pricing-plan">
                  <h5 className="pricing-plan__title">Advance</h5>
                  <span className="pricing-plan__desc">
                    All you need to get started
                  </span>
                  <h4 className="pricing-plan__price">$120</h4>
                  <ul className="detail-list">
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">30 seats</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">500GB storage</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Template library</span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">
                        Free hosting &amp; domain
                      </span>
                    </li>
                    <li className="detail-list__item">
                      <img
                        src=" /assets/green-mark.svg"
                        alt=""
                        className="mark"
                      />
                      <span className="detail-list__text">Priority support</span>
                    </li>
                  </ul>
                  <button className="pricing-plan__cta-btn">Get started</button>
                </div>
              </div>
              <div className="pricing-block__footer-area">
                <img
                  src=" /assets/payment-icons.svg"
                  alt=""
                  className="payment-icons"
                />
                <span className="policy-text">
                  Excepteur sint occaecat cupidat non proident sunt in culpam qui
                  the officia deserunt mollit the anim id est ex ea comm.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="integrations-section">
          <div className="box-container">
            <img
              src=" /assets/trello-icon.svg"
              alt=""
              className="floating-icon floating-icon--trello"
            />
            <img
              src=" /assets/shopify-icon.svg"
              alt=""
              className="floating-icon floating-icon--shopify"
            />
            <img
              src=" /assets/slack-icon.svg"
              alt=""
              className="floating-icon floating-icon--slack"
            />
            <img
              src=" /assets/digital-ocean-icon.svg"
              alt=""
              className="floating-icon floating-icon--digitalocean"
            />
            <img
              src=" /assets/google-analitics-icon.svg"
              alt=""
              className="floating-icon floating-icon--ganalitics"
            />
            <img
              src=" /assets/g-drive-icon.png"
              alt=""
              className="floating-icon floating-icon--gdrive"
            />
            <img
              src=" /assets/dropbox-icon.svg"
              alt=""
              className="floating-icon floating-icon--dropbox"
            />
            <img
              src=" /assets/s-dot-icon.svg"
              alt=""
              className="floating-icon floating-icon--sdot"
            />
            <img
              src=" /assets/github-icon.svg"
              alt=""
              className="floating-icon floating-icon--github"
            />
            <img
              src=" /assets/notion-icon.svg"
              alt=""
              className="floating-icon floating-icon--notion"
            />
            <img
              src=" /assets/asana-icon.svg"
              alt=""
              className="floating-icon floating-icon--asana"
            />
            <div className="integrations-block">
              <span className="integrations-block__desc">INTEGRATION</span>
              <h2 className="integrations-block__title">
                Integrations with 40+ Most using software
              </h2>
              <button className="integrations-block__cta-btn">
                <span className="integrations-block__cta-btn__text">
                  Browse all Software
                </span>
                <img
                  src=" /assets/Icon-arrow-right.svg"
                  alt=""
                  className="integrations-block__cta-btn__icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <div className="box-container">
            <div className="cta-block">
              <h2 className="cta-block__text">
                Take your customer service to the next level
              </h2>
              <div className="cta-block__cta-btn">Get 14 Days Free Trial</div>
              <span className="cta-block__desc">No credit card required</span>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter/>


    </DataProvider>
  );
}

export default App;
