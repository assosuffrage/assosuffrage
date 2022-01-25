import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { page } from "./components/Layout";
const Inscriptions = () => {
    return (
        <>
            <Head><title>{page = "Inscriptions" }</title></Head>
            <div className="bg-gradient-to-tl from-blue-700 via-blue-500 to-red-500
            text-white w-screen h-screen flex flex-col  ">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='flex justify-center  sm:w-96 my-20 text-2xl font-bold text-center '>Es-tu inscrit sur les listes électorales ?</h1>
                    <p className=' mb-20 w-5/6 sm:w-7/12 md:w-4/12 lg:w-3/12 xl:w-2/12 text-xl bg-gradient-to-b from-blue-700 via-blue-800 to-red-500 rounded-3xl p-2 '>
                        <FontAwesomeIcon icon={faInfoCircle} size="2x" className="text-white mr-2  transition duration-300 ease-in hover:text-black   " />
                        Le savais-tu, dès ton recensement tu es automatiquement inscrit sur les listes électorales !</p>
                </div> 
                <div className='flex flex-row justify-around mb-3'>
                    <button className='rounded-2xl bg-green-400 w-24 font-bold p-2 text-xl transition-transform delay-150 duration-200 hover:scale-110' >
                        <Link href="/oui">
                            OUI
                        </Link>
                    </button>
                    <button className='rounded-2xl bg-red-400 w-24 font-bold p-2 text-xl transition-transform delay-150 duration-200 hover:scale-110' >
                        <Link href="/non">
                            NON
                        </Link>
                    </button>
                    <button className='rounded-2xl bg-gray-400 w-24 font-bold p-2 text-xl transition-transform delay-150 duration-200 hover:scale-110' >
                        <Link href="/jsp">
                            JSP
                        </Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Inscriptions;