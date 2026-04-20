import React, { useEffect } from 'react';
import ProjectHero from './PROJECT/ProjectHero';
import GovernmentProjects from './PROJECT/GovernmentProjects';
import OilGasSection from './PROJECT/OilGasSection';
import MobileAppShowcase from './PROJECT/MobileAppShowcase';
import PaymentGatewaySection from './PROJECT/PaymentGatewaySection';
import TollGateSection from './PROJECT/TollGateSection';

export default function Projects() {
    // Ensure we start at the top of the page on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen  ">
            <ProjectHero />
            <GovernmentProjects />
            <OilGasSection />
            <MobileAppShowcase />
            <PaymentGatewaySection />
            <TollGateSection />
        </main>
    );
}
