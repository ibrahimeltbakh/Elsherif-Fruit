import Hero from "../../Components/2-Hero/Hero";
export default function AboutUs() {
  return (
    <>
      <Hero href={"#aboutus"} />
      <div id="aboutus" className="aboutus sectionPadding">
        <div className="container">
          <h2 className="main-title">عنا</h2>
          <div className="rules">
            <div className="rule">
              <h3>معلومات عن الشركة:</h3>
              <p>
                نحن شركة الشريف، متخصصة في تصدير جميع المنتجات الزراعية. نلتزم
                بتوفير أفضل جودة من المنتجات الزراعية لعملائنا مع خدمة متميزة في
                جميع الأسواق المحلية والدولية.
              </p>
            </div>

            <div className="rule">
              <h3>السجل التجاري:</h3>
              <p>سجل تجاري رقم : 11070080041988</p>
              <p>مسجلة لدى الهيئة العامة للصادرات والواردات.</p>
            </div>

            <div className="rule">
              <h3>عنوان النشاط:</h3>
              <p>28 شارع الإمام الغزالي - الكوم الأخضر - الهرم.</p>
            </div>

            <div className="rule">
              <h3>الأنشطة التجارية:</h3>
              <p>
                الشركة تقوم بتصدير مجموعة متنوعة من المنتجات الزراعية الطازجة،
                بما في ذلك الفواكه والخضروات، إلى العديد من الأسواق حول العالم.
              </p>
            </div>

            <div className="rule">
              <h3>رؤيتنا:</h3>
              <p>
                نسعى لتقديم أعلى مستوى من الجودة والابتكار في منتجاتنا الزراعية،
                مع تحقيق رضا عملائنا حول العالم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
