"use client"
// import type {Selection} from "@heroui/react";
import { Button, Dropdown, Header, Label } from '@heroui/react';
import React, { useState } from 'react';
import AnimalCard from './shared/AnimalCard';

const SortedAnimals = ({ animals }) => {

    const [sortedType, setSortedType] = useState('Sort By')
    const [selected, setSelected] = useState(new Set([""]));
    const CustomCheckmarkIcon = (
        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
            <path
                className="text-accent"
                clipRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortedType === "Lowest Price") return a.price - b.price;
        if (sortedType === "Highest Price") return b.price - a.price;
        return 0;
    })


    return (
        <div>
            <div className="w-11/12 max-w-350 mx-auto mt-20 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">All Animals</h2>
                <div className="flex justify-between items-center gap-10">
                    <p className="text-sm sm:text-base text-gray-600 ">Find healthy and well-cared Qurbani animals at affordable prices.</p>
                    <Dropdown>
                        <Button aria-label="Menu" variant="secondary" className='text-primary'>
                            {sortedType}
                        </Button>
                        <Dropdown.Popover className="min-w-[256px]">
                            <Dropdown.Menu
                                selectedKeys={selected}
                                selectionMode="single"
                                onSelectionChange={setSelected}
                            >
                                <Dropdown.Section>
                                    <Header>Sort By Price</Header>
                                    <Dropdown.Item id="lowest" textValue="Lowest" onClick={() => { setSortedType("Lowest Price") }}>
                                        <Dropdown.ItemIndicator>
                                            {({ isSelected }) => (isSelected ? CustomCheckmarkIcon : null)}
                                        </Dropdown.ItemIndicator>
                                        <Label>Lowest Price</Label>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="highest" textValue="Highest" onClick={() => { setSortedType("Highest Price") }}>
                                        <Dropdown.ItemIndicator>
                                            {({ isSelected }) => (isSelected ? CustomCheckmarkIcon : null)}
                                        </Dropdown.ItemIndicator>
                                        <Label>Height Price</Label>
                                    </Dropdown.Item>

                                </Dropdown.Section>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                    {
                        sortedAnimals.map(animal => <AnimalCard
                            key={animal.id}
                            animal={animal}></AnimalCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default SortedAnimals;