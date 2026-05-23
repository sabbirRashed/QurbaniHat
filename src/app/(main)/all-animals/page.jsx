import SortedAnimals from '@/components/SortedAnimals';
import { getAllanimals } from '@/lib/data';
import React from 'react';

const AllAnimalsPage = async () => {
    const animals = await getAllanimals();

    return (
        <div className='min-h-[80vh]'>
            <SortedAnimals animals={animals}></SortedAnimals>
        </div>
    );
};

export default AllAnimalsPage;