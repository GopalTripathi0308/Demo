// import ConveyancingDescription from "@/modules/conveyancing/components/description/conveyancingDescription";
import ConveyancingDescription from "@/shared/components/description/conveyancingDescription";
import { Header } from "@/shared/components/header/header";
import ConveyancingBanner from "@/shared/components/hero-section/banner";
import Layout from "@/shared/components/layout/layout";
import CustomerReviewSection from "@/shared/components/review-section/customerReviewSection";

export default function Home() {
  return (
    <Layout>
      <ConveyancingBanner />
      <ConveyancingDescription />
      <CustomerReviewSection />
    </Layout>
  );
}
