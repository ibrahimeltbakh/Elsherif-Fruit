import "./footer.css";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TikTokIcon from "./Tiktok";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import img1 from "../../imgs/orange.jpg";
import img2 from "../../imgs/strawberry2.jpg";
import img3 from "../../imgs/lemon.jpg";
import img4 from "../../imgs/sOrange.jpg";
import img5 from "../../imgs/guava.jpg";
import img6 from "../../imgs/strawberry1.jpg";
const socialIcons = [
  {
    href: "https://www.facebook.com/share/1XcPLxs5LU/",
    className: "facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://www.tiktok.com/@elshreiffruits?_t=ZS-8tAzZuaYzNH&_r=1",
    className: "tiktok",
    icon: TikTokIcon,
  },
];
const importantLinks = [
  { href: "#terms", title: "الشروط والاحكام", navigatePage: "terms" },
  { href: "#shipping", title: "الشحن والتوصيل", navigatePage: "shipping" },
  { href: "#privacy", title: "سياسة الخصوصية", navigatePage: "privacy" },
];
const lineDetails = [
  {
    icon: LocationOnIcon,
    details: (
      <a href="https://maps.app.goo.gl/zNsHs15EBRi92w8Y9" target="_blank">
      مركز كفرالزيات - محافظة الغربية
      </a>
    ),
  },
  {
    icon: AccessTimeOutlinedIcon,
    details: "ساعات العمل: من 10:00 صباحًا إلى 6:00 مساءً",
  },
  {
    icon: LocalPhoneOutlinedIcon,
    details: (
      <div>
        <a href="tel:01025607238">01025607238</a>
        <br />
        <a href="tel:01273261939">01273261939</a>
        <br />
        <a href="tel:01033130343">01033130343</a>
      </div>
    ),
  },
];
const imgsData = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
];
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>الشريف للتصدير </h3>
          <ul className="social">
            {socialIcons.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} className={item.className} target="blank">
                    <item.icon fontSize="large" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="text">شركة الشريف الجوده عنوانا</p>
        </div>
        <div className="box">
          <ul className="links">
            {importantLinks.map((item, index) => {
              return (
                <li key={index}>
                  <KeyboardDoubleArrowLeftIcon
                    sx={{ mr: 1, color: "var(--main-color)" }}
                  />
                  <a
                    href={item.href}
                    onClick={() => navigate(item.navigatePage)}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="box">
          {lineDetails.map((item, index) => {
            return (
              <div className="line" key={index}>
                <item.icon className="icon" />
                <div className="info">{item.details}</div>
              </div>
            );
          })}
        </div>
        <div className="box footer-gallery">
          {imgsData.map((item, index) => {
            return (
              <img
                key={index}
                decoding="async"
                src={item.src}
                alt="gallary"
                style={{ width: "80px", height: "80px" }}
              />
            );
          })}
        </div>
      </div>
      <div className="copyright">
        <p>
          Developed by{" "}
          <a href="https://wa.me/+201024556364" target="_blank">
            {" "}
            ibrahim eltbakh{" "}
          </a>
        </p>
        <p> شركة الشريف لتصدير جميع المحاصيل الزراعيه &copy; </p>
      </div>
    </div>
  );
}
