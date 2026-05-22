import Image from 'next/image';


const AnimalCard = ({ animal }) => {
    console.log(animal);
    const { name, description, type, price, breed, category, image, location, weight, age } = animal

    return (
        <div className="w-full max-w-sm mx-auto   rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300  hover:scale-[1.02]">

            <div className="relative h-48 w-full bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover" ></Image>
                <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {category}
                </span>
            </div>


            <div class="p-5">

                <div class="mb-2">
                    <h3 className="text-xl font-bold text-primary line-clamp-1">{name}</h3>
                    <p className="text-sm font-medium text-secondary">Breed: {breed}</p>
                </div>


                <div class="grid grid-cols-2 gap-2 my-4 bg-[var(--color-bg)] p-3 rounded-xl text-sm text-gray-600">
                    <div class="flex items-center gap-1">
                        <span className="font-semibold text-primary">Weight:</span>
                        {weight} kg
                    </div>
                    <div class="flex items-center gap-1">
                        <span className="font-semibold text-primary">Age:</span>
                        {age} Years
                    </div>
                    <div class="flex items-center gap-1 col-span-2">
                        <span className="font-semibold text-primary">Location:</span>
                        {location}
                    </div>
                </div>


                <div class="flex items-center justify-between mt-4 pt-2 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-400 uppercase font-semibold">Price</p>
                        <p className="text-xl font-black text-action">
                            ৳ {price}
                        </p>
                    </div>
                    <button className="bg-[var(--color-secondary)] hover:bg-[var(--color-primary)] text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;