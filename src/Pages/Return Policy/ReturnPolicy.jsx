import Hero from "../../Components/2-Hero/Hero";
export default function ReturnPolicy() {
  return (
    <>
      <Hero href={"#return"} />
      <div id="return" className="return sectionPadding">
        <div className="container">
          <h2 className="main-title">سياسة الاسترجاع</h2>
          <div className="rules">
            <div className="rule">
              <h3>سياسة الاسترجاع:</h3>
              <p>
                إذا كنت غير راضٍ عن المنتج الذي استلمته، يمكنك التواصل معنا عبر
                الواتساب أو البريد الإلكتروني لطلب الاسترجاع.
              </p>
            </div>
            <div className="rule">
              <h3>شروط الاسترجاع:</h3>
              <p>
                يجب تقديم طلب الاسترجاع خلال <strong>7 أيام</strong> من استلام
                المنتج.
              </p>
              <p>المنتج يجب أن يكون في حالته الأصلية وغير مستخدم.</p>
            </div>
            <div className="rule">
              <h3>خطوات الاسترجاع:</h3>
              <p>
                1. تواصل معنا عبر الواتساب أو البريد الإلكتروني لتقديم الطلب.
              </p>
              <p>2. قم بإعادة المنتج إلى عنوان الشركة بعد التأكيد.</p>
              <p>
                3. سيتم فحص المنتج واسترداد المبلغ خلال{" "}
                <strong>14 يوم عمل</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
