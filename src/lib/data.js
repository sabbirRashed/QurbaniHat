
export const getAllanimals = async() =>{
    const res = await fetch("http://localhost:5000/aninals");
    return await res.json()
}

export const getAnimalDetails = async(id)=>{
    const res = await fetch(`http://localhost:5000/aninals/${id}`);
    return await res.json();
}