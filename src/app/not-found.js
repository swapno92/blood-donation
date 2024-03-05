import Image from 'next/image';
import notFound404 from '../../public/images/404-page.jpg'
import Link from 'next/link';
const NotFoundPage = () => {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center'>
                <div>
                    <section className="bg-white ">
                        <div className="container flex items-center  px-6 md:py-12 mx-auto">
                            <div>
                                <p className="text-sm font-medium text-red-500 ">
                                    404 error
                                </p>
                                <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">
                                    We can’t find that page
                                </h1>
                                <p className="mt-4 text-gray-500 ">
                                    Sorry, the page you are looking for doesn't exist or has been moved.
                                </p>
                                <div className="flex items-center mt-6 gap-x-3">
                                    <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-5 h-5 rtl:rotate-180"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                            />
                                        </svg>
                                        <Link href={"/"}>
                                            <span>Go back</span>
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div>  
                        <Image
                            src={notFound404}
                            alt='blood donation Not Found Image'
                            width={450}
                            height={450}
                        />
                   </div>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;