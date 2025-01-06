import Hero from "../../Components/2-Hero/Hero";
export default function Privacy() {
  return (
    <>
      <Hero href={"#privacy"} />
      <div id="privacy" className="privacy sectionPadding">
        <div className="container">
          <h2 className="main-title">سياسة الخصوصية</h2>
          <div className="rules">
            <div className="rule">
              <h3>سياسة الخصوصية:</h3>
              <p>
                نحن نحترم خصوصيتك، ونود أن نؤكد أن موقعنا لا يقوم بجمع أي
                معلومات شخصية من الزوار أو المستخدمين.
              </p>
            </div>
            <div className="rule">
              <h3>طبيعة استخدام الموقع:</h3>
              <p>الموقع مخصص فقط لعرض المنتجات.</p>
              <p>
                يتم التواصل معنا مباشرة عبر البريد الإلكتروني، الواتساب، أو
                أرقام الهواتف المتوفرة.
              </p>
            </div>
            <div className="rule">
              <h3>ضمان الخصوصية:</h3>
              <p>لن يتم تخزين أي بيانات عن العملاء عبر الموقع.</p>
              <p>
                جميع المحادثات والمراسلات تتم من خلال قنوات التواصل المعلنة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
