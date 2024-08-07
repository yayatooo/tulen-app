import HeroPage  from "./module/hero/page";
import { Navbar } from "./ui/Navbar";
import  PartnerPage  from "./module/partner/page";
import  ServicePage  from "./module/service/page";
import  FeaturePage  from "./module/feature/page";
import  TeamPage  from "./module/team/page";
import  TestimonialsPage  from "./module/testimonials/page";
import  ProjectsPage  from "./module/projects/page";
import  PriceListPage  from "./module/pricelist/page";
import { Footer } from "./ui/Footer";
import ContactPage from "./module/contact/page";
import CustomerPage from "./module/customer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <PartnerPage />
      <ServicePage />
      <FeaturePage />
      <CustomerPage />
      <TeamPage />
      <TestimonialsPage />
      <ProjectsPage />
      <PriceListPage />
      <ContactPage />
      <Footer />
    </>
  );
}
