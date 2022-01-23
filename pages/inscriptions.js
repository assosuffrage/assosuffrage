import React from 'react';

const Inscriptions = () => {
    return (
        <div className="bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500
        text-white w-screen h-full flex flex-col  ">
            <div className='flex flex-col justify-center items-center'>
                <h1 className='flex justify-center w-5/6 sm:w-96 my-20 text-3xl text-center '>Es-tu inscrit sur les listes électorales ?</h1>
                <p className=' mb-20  sm:w-80 text-center text-3xl '>Le savais-tu, dès ton recensement tu es automatiquement inscrit sur les listes électorales !</p>
            </div> 
            <div className='flex flex-row justify-around mb-3'>
                <button className='rounded-2xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 p-2 text-xl' >OUI</button>
                <button className='rounded-2xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 p-2 text-xl' >NON</button>
                <button className='rounded-2xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 p-2 text-xl' >JSP</button>
            </div>
        </div>
    );
};

export default Inscriptions;