import React from "react";

const FooterCopyright = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <div className="ps-footer__copyright">
        <p>&copy; {currentYear} VEKART. All Rights Reserved</p>
        {/* <p>
            <span>We Using Safe Payment For:</span>
            <a href="#">
                <img src="/static/img/payment-method/1.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/2.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/3.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/4.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/5.jpg" alt="Martfury" />
            </a>
        </p> */}
      </div>
    </>
  );
};

export default FooterCopyright;
