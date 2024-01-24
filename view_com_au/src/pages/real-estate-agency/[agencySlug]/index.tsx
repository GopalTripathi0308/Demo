import AgencyBanner from "@/modules/real-estate-agency/agencyBanner";
import Layout from "@/shared/components/layout/layout";
import PageContainer from "@/shared/components/page-container/page-container";
import { useRouter } from "next/router";

const Home = () => {
  const data = useRouter();

  console.log(data);

  return (
    <Layout>
      <PageContainer>
        <AgencyBanner />
      </PageContainer>
    </Layout>
  );
};

export default Home;
