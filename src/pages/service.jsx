import React, { useEffect } from 'react';
import ServiceHero from './SERVICE/ServiceHero';
import SolutionsSection from './SERVICE/SolutionsSection';
import AppShowcaseSection from './SERVICE/AppShowcaseSection';
import GeneralContractsSection from './SERVICE/GeneralContractsSection';
import SecuritySection from './SERVICE/SecuritySection';
import EnergySection from './SERVICE/EnergySection';
import VehiclesSection from './SERVICE/VehiclesSection';
import WideImageSlider from './SERVICE/WideImageSlider';

export default function Service() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <ServiceHero />
            <WideImageSlider />
            <SolutionsSection />
            <AppShowcaseSection />
            <GeneralContractsSection />
            <SecuritySection />
            <EnergySection />
            <VehiclesSection />
        </main>
    );
}
