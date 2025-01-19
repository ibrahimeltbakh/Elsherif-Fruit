import { Helmet } from "react-helmet";
import Hero from "../../Components/2-Hero/Hero";
import Main from "../../Components/3-main/Main";

export default function Home() {
  return (
    <>
    <Helmet>
        <title>الرئيسية - موقع شركة الشريف</title>
        <meta
          name="description"
          content="اكتشف منتجاتنا الزراعية الطازجة واطلع على المزيد عن شركتنا الرائدة في التصدير."
        />
        <meta
          name="keywords"
          content="موقع الشريف, تصدير, منتجات زراعية, فواكه, خضروات, تصدير منتجات"
        />
      </Helmet>
      <Hero href={"#products"} />
      <Main />
    </>
  );
}
