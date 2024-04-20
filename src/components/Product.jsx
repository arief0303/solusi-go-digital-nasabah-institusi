import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

const Solution = () => {
    useEffect(() => {
        AOS.init({
            once: true, // adding this line will cause animations to only run once
        });
    }, []);

    const [activeButton, setActiveButton] = useState('Sekolah');

    const buttons = ['Sekolah', 'Universitas', 'Company', 'Koperasi', 'General'];

    const listItemsSekolah = [
        {
            text: 'Platform Sekolah Pintar',
            description: 'Telah Digunakan Lebih Dari 1200 Sekolah.',
            imgSrc: '/svg/check.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Platform Sekolah Pintar',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: 'https://holistic-overlay-429385.framer.app/', text: 'Flyer B-School' },
            ],
        },
    ];

    const listItemsUniversitas = [
        {
            text: 'Universitas',
            description: 'Telah Digunakan Lebih Dari 1200 Sekolah.',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Universitas',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: 'https://example.com/link3', text: 'Link 3' },
            ],
        },
    ];

    const listItemsCompany = [
        {
            text: 'Universitas',
            description: 'Telah Digunakan Lebih Dari 1200 Sekolah.',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Universitas',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: 'https://example.com/link3', text: 'Link 3' },
            ],
        },
    ];

    const listItemsKoperasi = [
        {
            text: 'Universitas',
            description: 'Telah Digunakan Lebih Dari 1200 Sekolah.',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Universitas',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: 'https://example.com/link3', text: 'Link 3' },
            ],
        },
    ];

    const listItemsGeneral = [
        {
            text: 'General',
            description: 'Beberapa Komunitas Telah Menggunakan Closepay',
            imgSrc: '/svg/check.svg',
            links: [
            ],
        },
        {
            text: 'Flyer General',
            description: '',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://example.com/link3', text: 'Flyer General' },
            ],
        },
    ];

    const listItemsMap = {
        Sekolah: listItemsSekolah,
        Universitas: listItemsUniversitas,
        Company: listItemsCompany,
        Koperasi: listItemsKoperasi,
        General: listItemsGeneral,
    };

    return (
        <div className='h-full bg-white py-32 sm:py-60 px-0 sm:px-20'>
            <div className='flex flex-column lg:flex-row'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <h3 className='text-primary text-4xl mx-7 pb-8' data-aos="zoom-in">Product & Solution</h3>
                    <h1 className="text-4xl font-extrabold pb-5 mx-7 text-black">{`Produk Kolaborasi`.split(' ').map((word, index) => (
                        <span key={index} data-aos="fade-up" data-aos-delay={`${index * 500}`}>{word} </span>
                    ))}
                    </h1>
                    <div className='flex flex-row h-1/2 w-full justify-center px-24 mt-9 pb-10'>
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`${activeButton === button ? 'w-auto h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-2 py-0 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' : 'w-auto h-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-xs px-2 py-0.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'}`}
                                onClick={() => setActiveButton(button)}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-center'>
                {(() => {
                    switch (activeButton) {
                        case 'Universitas':
                            return (
                                <img src='/images/universitas.webp' alt='universitas' className='relative h-[400px] w-auto sm:w-2/4 mx-4 object-cover rounded-2xl overflow-hidden' />
                            )
                        case 'Sekolah':
                            return (
                                <div className='relative h-[400px] w-auto sm:w-2/4 mx-4 pt-10 object-cover rounded-2xl overflow-hidden bg-slate-200'>
                                    <div className="relative mx-15 sm:mx-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] left-1/2 transform -translate-x-1/2 shadow-offset">
                                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                            <img src="/images/pspmobile.webp" className="w-[272px] h-[572px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            );
                        case 'Company':
                            return <img src='/images/company.webp' alt='company' className='relative h-[400px] w-auto sm:w-2/4 mx-4 object-cover rounded-2xl overflow-hidden' />;
                        case 'Koperasi':
                            return <img src='/images/koperasi.webp' alt='koperasi' className='relative h-[400px] w-auto sm:w-2/4 mx-4 object-cover rounded-2xl overflow-hidden' />
                                ;
                        case 'General':
                            return (
                                <div className='relative h-[400px] w-auto sm:w-2/4 mx-4 pt-10 object-cover rounded-2xl overflow-hidden bg-slate-200'>
                                    <div className="relative mx-15 sm:mx-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] left-1/2 transform -translate-x-1/2 shadow-offset">
                                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                            <img src="/images/general.webp" className="w-[272px] h-[572px]" alt="" />
                                        </div>
                                    </div>
                                </div>
                            );
                        default:
                            return (
                                <>
                                    <div className='relative h-[400px] w-screen object-cover rounded-2xl overflow-hidden bg-slate-200 px-0 sm:px-10 sha'>
                                        <div className="relative mx-15 sm:mx-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] left-1/2 transform -translate-x-1/2 shadow-offset">
                                            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                                <img src="/images/pspmobile.webp" className="w-[272px] h-[572px]" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                    }
                })()}

                <div className='w-fit'>
                    {listItemsMap[activeButton].map((item, index) => (
                        <div key={index} className='flex items-center mb-5' data-aos="zoom-in-right" data-aos-delay={`${index * 300}`}>
                            <div className='flex-none p-1 rounded-lg bg-white m-2 w-10 h-10'>
                                <img className="h-8" src={item.imgSrc} alt="digital card" />
                            </div>
                            <div className='w-80 sm:w-full'>
                                <h2 className='text-neutral-950 text-xl mb-1'>{item.text}</h2>
                                {item.description && <p className=' text-neutral-500'>{item.description}</p>}
                                {item.links && item.links.map((link, index) => (
                                    <a href='https://holistic-overlay-429385.framer.app/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-4">
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solution;