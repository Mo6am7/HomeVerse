import { MdCall } from "react-icons/md";
import { Bs0CircleFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="c-wapper">
      <div className="paddings innerWidth flexCenter c-container gap ">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy To Contact Us</span>
          <span className="secondaryText">
            wWe always Ready To Help By Providijng The Best Services For You .{" "}
            <br /> We belelvoe a Good Bloce To Live Con Make Your Like Better{" "}
          </span>
          <div className="flexColStart contactModes">
            <section className="Row">
              <main className="flexColCenter mode">
                <div className="flexStart detail gap">
                  <main className="flexCenter icon">
                    <MdCall size={25} />
                  </main>
                  <div className="flexColStart Cal">
                    <span className="">Call</span>
                    <span>021 123 14</span>
                  </div>
                </div>
                <button className=" Coll">
                  <span>Coll New</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </main>
              <main className="flexColCenter mode">
                <div className="flexStart detail gap">
                  <main className="flexCenter icon">
                    <MdCall size={25} />
                  </main>
                  <div className="flexColStart Cal">
                    <span className="">Call</span>
                    <span>021 123 14</span>
                  </div>
                </div>
                <button className=" Coll">
                  <span>Coll New</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </main>
              <main className="flexColCenter mode">
                <div className="flexStart detail gap">
                  <main className="flexCenter icon">
                    <MdCall size={25} />
                  </main>
                  <div className="flexColStart Cal">
                    <span className="">Call</span>
                    <span>021 123 14</span>
                  </div>
                </div>
                <button className=" Coll">
                  <span>Coll New</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </main>
              <main className="flexColCenter mode">
                <div className="flexStart detail gap">
                  <main className="flexCenter icon">
                    <MdCall size={25} />
                  </main>
                  <div className="flexColStart Cal">
                    <span className="">Call</span>
                    <span>021 123 14</span>
                  </div>
                </div>
                <button className=" Coll">
                  <span>Coll New</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </main>
            </section>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
