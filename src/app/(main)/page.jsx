import Banner from "@/components/shared/banner";
import AnimalCard from "@/components/shared/AnimalCard";
import { getAllanimals } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";


const HomePage = async () => {
    const animals = await getAllanimals();

    return (
        <div className='min-h-[80vh]'>

            {/* banner */}
            <Banner></Banner>

            {/* featured animals */}
            <div className="w-11/12 max-w-350 mx-auto mt-20 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Featured Animals</h2>
                <div className="flex justify-between items-center gap-10">
                    <p className="text-sm sm:text-base text-gray-600 ">Find healthy and well-cared Qurbani animals at affordable prices.</p>
                    <Link href={"/all-animals"}>
                        <Button className="bg-[var(--color-action)] hover:bg-[var(--color-primary)] transition-colors duration-200 px-6 ">View All</Button>
                    </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                    {
                        animals.slice(0, 4).map(animal => <AnimalCard
                            key={animal.id}
                            animal={animal}></AnimalCard>)
                    }
                </div>
            </div>

            {/* tips */}

            <section className=" py-16 px-4 sm:px-6 lg:px-8 mt-4">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-action bg-[#2A7B76]/10 px-3 py-1 rounded-full">
                            Simple & Secure
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-primary mt-3">
                            How QurbaniHat Works
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
                            Buy your Qurbani animal directly from trusted farmers across Bangladesh in three simple steps.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                        <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#D2B591] transition-colors duration-200 shadow-sm">
                            <div className="w-14 h-14 bg-[#D2B591]/20 text-secondary font-black rounded-2xl flex items-center justify-center text-xl mx-auto mb-4 shadow-inner">
                                01
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-2">Browse & Filter</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Explore verified cows, goats, and sheep. Filter by breed, weight, budget, and location like Sirajganj or Kushtia.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl border-2 border-[#2A7B76] transition-colors duration-200 shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-[#2A7B76]/5 rounded-bl-full"></div>

                            <div className="w-14 h-14 bg-[#2A7B76] text-white font-black rounded-2xl flex items-center justify-center text-xl mx-auto mb-4 shadow-md shadow-[#2A7B76]/20">
                                02
                            </div>
                            <h3 className="text-lg font-bold text-[#1C2B4C] mb-2">Talk to the Farmer</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Check live video, verify health records, and directly message or call the seller to negotiate the final price.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#D2B591] transition-colors duration-200 shadow-sm">
                            <div className="w-14 h-14 bg-[#D2B591]/20 text-[#A07855] font-black rounded-2xl flex items-center justify-center text-xl mx-auto mb-4 shadow-inner">
                                03
                            </div>
                            <h3 className="text-lg font-bold text-[#1C2B4C] mb-2">Safe Delivery</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Confirm your booking online and get hassle-free, secure transport straight from the farm to your doorstep.
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};

export default HomePage;