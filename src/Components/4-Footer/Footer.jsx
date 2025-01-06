import "./footer.css";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "./Tiktok";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
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
  { href: "#", className: "facebook", icon: FacebookIcon },
  { href: "#", className: "instagram", icon: InstagramIcon },
  { href: "#", className: "tiktok", icon: TikTokIcon },
];
const importantLinks = [
  { href: "#terms", title: "الشروط والاحكام", navigatePage: "terms" },
  { href: "#shipping", title: "الشحن والتوصيل", navigatePage: "shipping" },
  { href: "#privacy", title: "سياسة الخصوصية", navigatePage: "privacy" },
  { href: "#return", title: "سياسة الاسترجاع", navigatePage: "return" },
];
const lineDetails = [
  {
    icon: LocationOnIcon,
    details: (
      <a
        href="https://www.google.com/maps?q=28+%D8%A3+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D9%85+%D8%A7%D9%84%D8%BA%D8%B2%D8%A7%D9%84%D9%8A+-+%D8%A7%D9%84%D9%83%D9%88%D9%85+%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1+-+%D8%A7%D9%84%D9%87%D8%B1%D9%85&zoom=15"
        target="_blank">
        ٢٨ أ شارع الإمام الغزالي - الكوم الأخضر - الهرم
      </a>
    ),
  },
  {
    icon: AccessTimeOutlinedIcon,
    details: "Business Hours: From 10:00 To 18:00",
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
                  <a href={item.href} className={item.className}>
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
                  <KeyboardDoubleArrowRightIcon
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
          Developed by <a href="#"> ibrahim eltbakh </a>
        </p>
        <p> شركة الشريف لتصدير جميع المحاصيل الزراعيه &copy; </p>
      </div>
    </div>
  );
}
