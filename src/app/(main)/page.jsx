import Banner from "@/components/banner";
import AnimalCard from "@/components/shared/AnimalCard";
import { getAllanimals } from "@/lib/data";


const HomePage = async () => {
    const animals = await getAllanimals();

    return (
        <div className='min-h-[80vh] mt-15'>

            {/* banner */}
            <Banner></Banner>

            {/* featured animals */}
            <div className="w-11/12 max-w-350 mx-auto mt-20 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary lg:text-4xl">Featured Animals</h2>
                <p className="text-sm md:text-base text-secondary ">Find healthy and well-cared Qurbani animals at affordable prices.</p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                    {
                        animals.slice(0, 4).map(animal => <AnimalCard
                            key={animal.id}
                            animal={animal}></AnimalCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;