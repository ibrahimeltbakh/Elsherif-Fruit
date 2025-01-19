import Hero from "../../Components/2-Hero/Hero";
import { Helmet } from "react-helmet";
export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>الشروط والأحكام - موقع شركة الشريف</title>
        <meta
          name="description"
          content="اقرأ الشروط والأحكام الخاصة بموقع شركة الشريف لتعرف حقوقك وواجباتك أثناء استخدام الموقع."
        />
        <meta
          name="keywords"
          content="الشروط والأحكام, شروط الاستخدام, موقع شركة الشريف, حقوق وواجبات"
        />
      </Helmet>
      <Hero href={"#terms"} />
      <div id="terms" className="terms sectionPadding">
        <div className="container">
          <h2 className="main-title">الشروط والأحكام</h2>
          <div className="rules">
            <div className="rule">
              <h3>الشروط والأحكام:</h3>
              <p>باستخدامك لهذا الموقع، فإنك توافق على الشروط التالية:</p>
            </div>
            <div className="rule">
              <h3>استخدام الموقع:</h3>
              <p>الموقع مخصص فقط لاستعراض المنتجات والتواصل مع الشركة.</p>
              <p>جميع الصور والوصف الخاص بالمنتجات حقوق ملكية خاصة للشركة.</p>
            </div>
            <div className="rule">
              <h3>الطلبات والتواصل:</h3>
              <p>
                يتم تأكيد الطلبات عبر التواصل المباشر معنا من خلال البريد
                الإلكتروني أو الواتساب.
              </p>
            </div>
            <div className="rule">
              <h3>حدود المسؤولية:</h3>
              <p>الشركة غير مسؤولة عن أي استخدام خاطئ للمنتجات بعد الشراء.</p>
              <p>يتم تسليم المنتجات بحالتها الأصلية وبجودة عالية.</p>
            </div>
            <div className="rule">
              <h3>التعديلات:</h3>
              <p>
                تحتفظ الشركة بحقها في تعديل محتوى الموقع أو السياسات عند الحاجة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
