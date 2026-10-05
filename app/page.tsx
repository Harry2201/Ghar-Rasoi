import OrganizationSchema from "../components/OrganizationSchema";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyGharRasoi from "../components/WhyGharRasoi";
import QualityPurity from "../components/QualityPurity";
import StoryAbout from "../components/StoryAbout";
import WholesaleBulkOrder from "../components/WholesaleBulkOrder";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <OrganizationSchema />
      <Hero />
      <TrustStrip />
      <FeaturedProducts />
      <WhyGharRasoi />
      <QualityPurity />
      <StoryAbout />
      <WholesaleBulkOrder />
      <FinalCTA />
    </main>
  );
}
