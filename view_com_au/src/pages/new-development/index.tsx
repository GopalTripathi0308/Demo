import AboutProperty from "@/modules/new-development/components/aboutProperty";
import Aside from "@/modules/new-development/components/aside";
import BreadCrumb from "@/modules/new-development/components/breadCrumb";
import ForSaleProperties from "@/modules/new-development/components/forSaleProperties";
import GrandReveBanner from "@/modules/new-development/components/grandReveBanner";
import GrandReveDescription from "@/modules/new-development/components/grandReveDescription";
import GrandReveFeatures from "@/modules/new-development/components/grandReveFeatures";
import GrandeReveLocation from "@/modules/new-development/components/grandeReveLocation";
import PropertyInsights from "@/modules/new-development/components/propertyInsights";
import Layout from "@/shared/components/layout/layout";

const HomePage = ({ pageProps }: any) => {
  console.log(pageProps.data.developmentDetail);

  const properties = pageProps.data.developmentDetail.properties;

  return (
    <Layout>
      <BreadCrumb breadcrumbRecord={pageProps.data.breadCrumbs} />
      <GrandReveBanner {...pageProps} />
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-8/12">
          <AboutProperty data={pageProps.data} />
          <GrandReveDescription />
          <GrandReveFeatures />
          <ForSaleProperties property={properties} />
          <GrandeReveLocation />
          <PropertyInsights />
        </div>
        <Aside />
      </div>
    </Layout>
  );
};
export default HomePage;

export const getStaticProps = async (context: any) => {
  const res = await fetch("http://localhost:8000/pageProps");
  const pageProps = await res.json();
  console.log(res);

  return { props: { pageProps } };
};
