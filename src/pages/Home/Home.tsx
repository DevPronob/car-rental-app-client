
import HeroSection from './HeroSection'

import FeaturedSection from './FeaturedSection';
import WhyChooseUsSection from './WhyChooseUsSection';

import TestomonialSection from './TestomonialSection';

function Home() {
    // const { data, error, isLoading } = useGetAllCarsQuery(undefined);
    // console.log(data, "data")

    return (
        <div>
            <HeroSection />
            <FeaturedSection />
            <WhyChooseUsSection />
            <TestomonialSection />
        </div>
    )
}

export default Home