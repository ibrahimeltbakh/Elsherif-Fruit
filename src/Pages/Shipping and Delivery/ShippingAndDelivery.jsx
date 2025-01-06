import Hero from "../../Components/2-Hero/Hero";
export default function ShippingAndDelivery() {
  return (
    <>
      <Hero href={"#shipping"} />
      <div id="shipping" className="shipping sectionPadding">
        <div className="container">
          <h2 className="main-title">الشحن والتوصيل</h2>
          <div className="rules">
            <div className="rule">
              <h3>الشحن والتوصيل:</h3>
              <p>
                نحن ملتزمون بتوفير خدمات شحن آمنة وسريعة لضمان وصول المنتجات
                بجودة عالية.
              </p>
            </div>
            <div className="rule">
              <h3>خيارات الشحن:</h3>
              <p>
                الشحن المحلي: التوصيل خلال <strong>2-5 أيام عمل</strong>.
              </p>
              <p>
                الشحن الدولي: التوصيل خلال <strong>7-15 يوم عمل</strong> (حسب
                الوجهة).
              </p>
            </div>
            <div className="rule">
              <h3>ملاحظات:</h3>
              <p>التواصل معنا لتأكيد تفاصيل الشحن بعد الطلب.</p>
              <p>
                في حالة وجود أي تأخير أو مشاكل في الشحن، يمكنك التواصل معنا
                مباشرة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
