import HeroBanner from "@/shared/components/hero-section/heroSection";
import Layout from "@/shared/components/layout/layout";
import viewImage from "../../../public/images/view-image.svg";
import Image from "next/image";
import PageContainer from "@/shared/components/page-container/page-container";

import Main from "@/modules/conveyancing/components/main";

const renderViewImage = () => (
  <div className="relative w-16 h-12 md:w-32 md:h-32">
    <Image src={viewImage} layout="fill" alt="company-logo" />
  </div>
);

export default function Home() {
  return (
    <Layout>
      <PageContainer>
        <HeroBanner
          heading="Buying or selling?"
          description="Redeem your $220 conveyancing voucher and free contract review"
          className="flex flex-col-reverse md:flex-row border gap-4 mt-4"
        >
          {renderViewImage()}
        </HeroBanner>
        <Main />
      </PageContainer>
    </Layout>
  );
}
