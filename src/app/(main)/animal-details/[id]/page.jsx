import { getAnimalDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalDetails = async ({ params }) => {
    const { id: animalId } = await params;

    const animalDetails = await getAnimalDetails(animalId);
    console.log(animalDetails);

    const { id, name, price, breed, category, image, location, weight, age, type, description } = animalDetails;

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8 mt-20 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                <div className="space-y-4">
                    <div className="relative h-80 md:h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
                        <Image
                            src={image}
                            alt={name}
                            width={400}
                            height={400}
                            className="w-full h-full object-fill border border-gray-100" ></Image>
                        <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase">
                            {type}
                        </span>
                    </div>
                </div>


                <div className="flex flex-col justify-between">
                    <div>

                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">{category}</span>
                        <h1 className="text-3xl font-black text-gray-800 mt-1 mb-2">{name}</h1>


                        <div className="bg-emerald-50 inline-block px-4 py-2 rounded-xl my-2">
                            <span className="text-xs text-emerald-700 block font-medium">Asking Price</span>
                            <span className="text-3xl font-black text-emerald-600">৳ {price}</span>
                        </div>


                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Seller Description</h4>
                            <p className="text-gray-600 mt-1 leading-relaxed">
                                {description}
                            </p>
                        </div>


                        <div className="mt-6 border-t border-b border-gray-100 py-4">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Specifications</h4>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
                                <div className="flex justify-between border-b border-gray-50 pb-1">
                                    <span className="text-gray-500">Breed</span>
                                    <span className="font-bold text-gray-800">{breed}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-50 pb-1">
                                    <span className="text-gray-500">Weight</span>
                                    <span className="font-bold text-gray-800">{weight} kg</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-50 pb-1">
                                    <span className="text-gray-500">Age</span>
                                    <span className="font-bold text-gray-800">{age} Years</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-50 pb-1">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-bold text-gray-800">{location}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <Link href={'/contact-us'}>
                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-xl transition duration-200 text-center">
                                Contact Seller
                            </button>
                        </Link>
                        <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl transition duration-200 text-center shadow-lg shadow-emerald-600/20">
                            Book Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AnimalDetails;