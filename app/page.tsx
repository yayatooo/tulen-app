import { HeroPage } from "./module/hero/page";
import { Navbar } from "./ui/Navbar";
import { PartnerPage } from "./module/partner/page";
import { ServicePage } from "./module/service/page";
import { FeaturePage } from "./module/feature/page";
import { CustomerPage } from "./module/customer/page";
import { TeamPage } from "./module/team/page";
import { TestimonialsPage } from "./module/testimonials/page";
import { ProjectsPage } from "./module/projects/page";

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
    </>
  );
}
