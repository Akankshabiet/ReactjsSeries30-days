import footerContact from "../../api/footerApi.json";

import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPause } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPause: <TbMailPause />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
               Copyright &copy;2024,All Right Reserved
               <NavLink to="https://thapatechnical.shop/">
               ThapaTechnical

               </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  
                    <p>
                      <NavLink to="https://www.instagram.com/thapatechnical/?hl=en/"
                      target="_blank"
                      >
                        Social

                      </NavLink>
                    </p>
                    <li>
                      <NavLink to="/contact">Contact

                      </NavLink>
                    </li>
                  
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
