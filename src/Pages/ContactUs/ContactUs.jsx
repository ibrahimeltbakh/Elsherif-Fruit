import "./contactus.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../animations/done.json";
import Hero from "../../Components/2-Hero/Hero";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xkggkpeb");

  // Reset form fields after submission
  const resetForm = () => {
    const form = document.querySelector("form");
    if (form) {
      form.reset();
    }
  };

  return (
    <>
      <Hero href={"#contact"} />
      <div id="contact" className="contact">
        <div className="overlay"></div>
        <div className="container">
          <h2 className="main-title">رائيك يهمنا</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              resetForm();
            }}
            dir="rtl">
            <div className="left">
              <div>
                <input
                  type="text"
                  placeholder="الاسم"
                  required
                  id="name"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="رقم الهاتف"
                  required
                  id="phone"
                  name="phone"
                />
                <ValidationError
                  prefix="Number"
                  field="phone"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="البريد الالكترونى"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="right">
              <div>
                <textarea
                  required
                  id="message"
                  name="message"
                  placeholder="الرساله"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div>
                <input
                  type="submit"
                  disabled={state.submitting}
                  value={state.submitting ? "يتم الارسال..." : "ارسال"}
                />
              </div>
            </div>
          </form>
          {state.succeeded && (
            <h2
              style={{
                position: "relative",
                zIndex: "5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
                marginTop: "1.7rem",
                color: "var( --transparent-color)",
              }}>
              👌 شكرا لك‘ تم ارسال رسالتك
              <Lottie
                style={{
                  height: "45px",
                  marginRight: "5px",
                }}
                loop={false}
                animationData={done}
              />
            </h2>
          )}
        </div>
      </div>
    </>
  );
}
