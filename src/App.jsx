import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Careers from './pages/Careers';

import Homepage from './pages/HomePage';
import SuccessStories from './pages/SuccessStories';

// Use Case Detail Pages
import Upmail from './pages/SuccessStories/Upmail';
import Fitforever from './pages/SuccessStories/Fitforever';
import XPO from './pages/SuccessStories/XPO';
import NowMassage from './pages/SuccessStories/NowMassage';
import Aggero from './pages/SuccessStories/Aggero';
import Forio from './pages/SuccessStories/Forio';

import SuccessSection from './components/commonSection/SuccessSection';
import TransformSection from './components/commonSection/TransformSection';
import useSectionVisibility from './components/hooks/useSectionVisibility';

// Industry 
import AllIndustries from './pages/Industries/AllIndustries';
import CommerceRetail from './pages/Industries/CommerceRetail';
import HealthTech from './pages/Industries/HealthTech';
import EdTech from './pages/Industries/EdTech';
import LegalTech from './pages/Industries/LegalTech';
import FinanceInsurance from './pages/Industries/FinanceInsurance';
// import RealEstate from './pages/Industries/RealEstate';
import HospitalityTravel from './pages/Industries/HospitalityTravel';
// import EventManagement from './pages/Industries/EventManagement';
// import EntertainmentMedia from './pages/Industries/EntertainmentMedia';
// import LogisticsSupplyChain from './pages/Industries/LogisticsSupplyChain';
// import Manufacturing from './pages/Industries/Manufacturing';
// import Telecommunications from './pages/Industries/Telecommunications';
import Saas from './pages/Industries/Saas';
import HRMS from './pages/Industries/HRMS';

// Insight Pages
import AllInsights from './pages/Insights/AllInsights';
import TransformationBlueprint from './pages/Insights/TransformationBlueprint';
import SystemAudit from './pages/Insights/SystemAudit';
import EngineeringStandards from './pages/Insights/EngineeringStandards';
import TechRadar from './pages/Insights/TechRadar';
import AIAssistedDevelopment from './pages/Insights/AIAssistedDevelopment';

// Service Pages
import AllServices from './pages/Services/AllServices';
import CloudInfrastructure from './pages/Services/CloudInfrastructure';
import SecurityCompliance from './pages/Services/SecurityCompliance';
import StaffAugmentation from './pages/Services/StaffAugmentation';
import ApplicationDevelopment from './pages/Services/ApplicationDevelopment';
import AIDevelopment from './pages/Services/AIDevelopment';

function App() {
  const { showSuccess, showTransform, successData, transformData } = useSectionVisibility();

  return (
    <div className="min-h-screen bg-background-main font-sans text-text-primary">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/success-stories" element={<SuccessStories />} /> */}
          <Route path="/use-cases" element={<SuccessStories />} />

          {/* Use Case Details */}
          <Route path="/use-cases/upmail" element={<Upmail />} />
          <Route path="/use-cases/fitforever" element={<Fitforever />} />
          <Route path="/use-cases/xpo" element={<XPO />} />
          <Route path="/use-cases/now-massage" element={<NowMassage />} />
          <Route path="/use-cases/aggero" element={<Aggero />} />
          <Route path="/use-cases/forio" element={<Forio />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />

          {/* Industry */}
          <Route path="/industries" element={<AllIndustries />} />
          <Route path="/industries/retail" element={<CommerceRetail />} />
          <Route path="/industries/healthcare" element={<HealthTech />} />
          <Route path="/industries/education" element={<EdTech />} />
          <Route path="/industries/legal" element={<LegalTech />} />
          <Route path="/industries/finance" element={<FinanceInsurance />} />
          {/* <Route path="/industries/real-estate" element={<RealEstate />} /> */}
          <Route path="/industries/hospitality" element={<HospitalityTravel />} />
          {/* <Route path="/industries/events" element={<EventManagement />} /> */}
          {/* <Route path="/industries/media" element={<EntertainmentMedia />} /> */}
          {/* <Route path="/industries/logistics" element={<LogisticsSupplyChain />} /> */}
          {/* <Route path="/industries/manufacturing" element={<Manufacturing />} /> */}
          {/* <Route path="/industries/telecom" element={<Telecommunications />} /> */}
          <Route path="/industries/saas" element={<Saas />} />
          <Route path="/industries/hrms" element={<HRMS />} />

          {/* Insight */}
          <Route path="/insights" element={<AllInsights />} />
          <Route path="/insights/roadmap" element={<TransformationBlueprint />} />
          <Route path="/insights/assessment" element={<SystemAudit />} />
          <Route path="/insights/best-practices" element={<EngineeringStandards />} />
          <Route path="/insights/technologies" element={<TechRadar />} />
          <Route path="/insights/ai-assist" element={<AIAssistedDevelopment />} />

          {/* Service */}
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/cloud" element={<CloudInfrastructure />} />
          <Route path="/services/compliance" element={<SecurityCompliance />} />
          <Route path="/services/talent" element={<StaffAugmentation />} />
          <Route path="/services/app-dev" element={<ApplicationDevelopment />} />
          <Route path="/services/ai" element={<AIDevelopment />} />

        </Routes>

        {/* Centralized Sections */}
        {showSuccess && successData && (
          <SuccessSection
            title={successData.title}
            description={successData.description}
            ctaText={successData.ctaText}
            ctaTo={successData.ctaTo}
          />
        )}
        {showTransform && transformData && (
          <TransformSection
            title={transformData.title}
            description={transformData.description}
            primaryCTA={transformData.primaryCTA}
            secondaryCTA={transformData.secondaryCTA}
          />
        )}

      </main>
      <Footer />
    </div>
  );
}

export default App;
