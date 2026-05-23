import AnimalCard from '@/components/shared/AnimalCard';
import { getAllanimals } from '@/lib/data';
import { Button } from '@heroui/react';
import React from 'react';

const AllAnimalsPage = async () => {
    const animals = await getAllanimals();

    return (
        <div className='min-h-[80vh]'>
            <div className="w-11/12 max-w-350 mx-auto mt-20 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">All Animals</h2>
                <div className="flex justify-between items-center gap-10">
                    <p className="text-sm sm:text-base text-gray-600 ">Find healthy and well-cared Qurbani animals at affordable prices.</p>
                    <Button className="bg-[var(--color-action)] hover:bg-[var(--color-primary)] transition-colors duration-200 px-6 ">Sort By</Button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                    {
                        animals.map(animal => <AnimalCard
                            key={animal.id}
                            animal={animal}></AnimalCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAnimalsPage;