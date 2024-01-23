function SiteFooter() {
    return (
        <footer className="footer">
        <span className="footer-blur-circle footer-blur-circle--yellow" />
        <span className="footer-blur-circle footer-blur-circle--purple" />
        <div className="box-container">
          <div className="footer-block">
            <div className="footer-block__content">
              <div className="logo-and-sub">
                <img
                  src=" /assets/footer-logo.svg"
                  alt=""
                  className="footer-logo"
                />
                <p className="logo-and-sub__desc">
                  Codesinc is a platform where you can get help with xoding from
                  engineers all around the globe
                </p>
                <form action="" className="sub-form">
                  <input
                    type="email"
                    name="sub"
                    placeholder="Enter your email"
                    id=""
                    className="sub-form__input"
                  />
                  <button className="sub-form__submit-btn">Subscribe</button>
                </form>
              </div>
              <div className="services-block f-block">
                <h6 className="f-block__title">Services</h6>
                <ul className="f-block-list">
                  <li className="f-block-list__item">Incident Responder</li>
                  <li className="f-block-list__item">Secure Managed IT</li>
                  <li className="f-block-list__item">Check website Url</li>
                  <li className="f-block-list__item">Locker Security</li>
                </ul>
              </div>
              <div className="userfull-links f-block">
                <h6 className="f-block__title">Usefull Links</h6>
                <ul className="f-block-list">
                  <li className="f-block-list__item">Payment Plans</li>
                  <li className="f-block-list__item">Make saving More</li>
                  <li className="f-block-list__item">Tax Calculator</li>
                  <li className="f-block-list__item">Talk To Us</li>
                </ul>
              </div>
              <div className="contact-info">
                <h6 className="f-block__title">Contact Info</h6>
                <p className="contact-info__address">
                  455 West Orchard Street Kings Mountain, NC 280867
                </p>
                <ul className="contact-details-list">
                  <li className="contact-details-list__item">
                    <img
                      src=" /assets/call-icon.svg"
                      alt=""
                      className="contact-details-list__icon"
                    />
                    <span className="contact-details-list__text">
                      +088 (246) 642-27-10
                    </span>
                  </li>
                  <li className="contact-details-list__item">
                    <img
                      src="/assets/msg-icon.svg"
                      alt=""
                      className="contact-details-list__icon"
                    />
                    <span className="contact-details-list__text">
                      example@mail.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <span className="footer-block__copyright">
              © 2024 Codersinc All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    )
}

export default SiteFooter
