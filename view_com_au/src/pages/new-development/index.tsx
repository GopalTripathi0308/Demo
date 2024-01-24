import DevelopmentLocation from "@/modules/new-development/components/DevelopmentLocation";
import NewDevelopmentBanner from "@/modules/new-development/components/NewDevelopmentBanner";
import NewDevelopmentDetail from "@/modules/new-development/components/NewDevelopmentDetail";
import PlansAndFeatures from "@/modules/new-development/components/PlansAndFeatures";
import AboutProperty from "@/modules/new-development/components/aboutProperty";
import Aside from "@/modules/new-development/components/aside";
import BreadCrumb from "@/modules/new-development/components/breadCrumb";
import ForSaleProperties from "@/modules/new-development/components/forSaleProperties";
import PropertyInsights from "@/modules/new-development/components/propertyInsights";
import Layout from "@/shared/components/layout/layout";
import PageContainer from "@/shared/components/page-container/page-container";

const HomePage = ({ pageProps }: any) => {
  console.log(pageProps.data.developmentDetail);
  const developmentDetail = pageProps.data.developmentDetail.description;
  const properties = pageProps.data.developmentDetail.properties;

  return (
    <Layout>
      <PageContainer>
        <BreadCrumb breadcrumbRecord={pageProps.data.breadCrumbs} />
        <NewDevelopmentBanner {...pageProps} />
        <div className="w-full lg:w-3/5">
          <AboutProperty data={pageProps.data} />
          <NewDevelopmentDetail description={developmentDetail} />
          <PlansAndFeatures />
          <ForSaleProperties property={properties} />
          <DevelopmentLocation />
          <PropertyInsights />
        </div>
      </PageContainer>
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
