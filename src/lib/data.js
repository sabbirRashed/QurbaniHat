
export const getAllanimals = async() =>{
    const res = await fetch("http://localhost:5000/aninals");
    return await res.json()
}