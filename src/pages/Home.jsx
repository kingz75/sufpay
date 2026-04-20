import React from 'react'
import HeroSection from './HOME/heroSection'
import PaymentOptionsSection from './HOME/PaymentOptionsSection'
import BusinessFeaturesSection from './HOME/BusinessFeaturesSection'
import FeatureProgressSection from './HOME/FeatureProgressSection'
import AnywherePaymentsSection from './HOME/AnywherePaymentsSection'
import WhyChooseUsSection from './HOME/WhyChooseUsSection'

export default function Home() {
    return (
        <div className='font-poppins md:-mt-[90px]'>

            <HeroSection />
            <PaymentOptionsSection />
            <BusinessFeaturesSection />
            <FeatureProgressSection />
            <AnywherePaymentsSection />
            <WhyChooseUsSection />
        </div>
    )
}
