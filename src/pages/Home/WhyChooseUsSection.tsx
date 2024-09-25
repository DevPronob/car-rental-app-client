import { FaCarSide, FaRegSmile } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import ContainerLayout from "../../components/Layout/ContainerLayout";

function WhyChooseUsSection() {
    return (
        <div className="bg-blue-700 text-white py-12 my-8">
            <ContainerLayout>
                <div className="text-center py-10">
                    <h1 className="text-3xl font-bold mb-3">Why Choose Us</h1>
                    <p className="text-base font-light">Explore our first class limousine & car rental services</p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center py-8">
                    <div className="text-center flex flex-col items-center justify-center">
                        <p className="text-[3.2rem] my-4"><FaCarSide /></p>
                        <h3 className="mb-2 text-xl font-bold">Variety of Car Brands</h3>
                        <p className="mb-3 font-normal">Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center">
                        <p className="text-[3.2rem] my-4"><FaRegSmile /></p>
                        <h3 className="mb-2 text-xl font-bold">Best Rate Guarantee</h3>
                        <p className="mb-3 font-normal">Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                    <div className="text-center flex flex-col items-center justify-center">
                        <p className="text-[3.2rem] my-4"><GiSelfLove /></p>
                        <h3 className="mb-2 text-xl font-bold">Awesome Customer Support</h3>
                        <p className="mb-3 font-normal">Lorem ipsum dolor sit amet, consectadipiscing elit. Aenean commodo ligula eget dolor.</p>
                    </div>
                </div>
            </ContainerLayout>
        </div>
    )
}

export default WhyChooseUsSection;
