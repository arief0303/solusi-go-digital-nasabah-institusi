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
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Platform Sekolah Pintar',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: 'https://example.com/link3', text: 'Link 3' },
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
        // Add the items for 'Company' here
    ];

    const listItemsKoperasi = [
        // Add the items for 'Koperasi' here
    ];

    const listItemsGeneral = [
        // Add the items for 'General' here
    ];

    const listItemsMap = {
        Sekolah: listItemsSekolah,
        Universitas: listItemsUniversitas,
        Company: listItemsCompany,
        Koperasi: listItemsKoperasi,
        General: listItemsGeneral,
    };

    return (
        <div className='h-full bg-white py-10'>
            <div className='flex flex-col justify-center items-center w-full py-10'>
                <h3 className='text-primary text-4xl pb-8' data-aos="zoom-in">Product & Solution</h3>
                <h1 className="text-4xl font-extrabold pb-5 mx-7 text-black">{`Produk Kolaborasi`.split(' ').map((word, index) => (
                    <span key={index} data-aos="fade-up" data-aos-delay={`${index * 500}`}>{word} </span>
                ))}
                </h1>
            </div>

            <div className='flex justify-center'>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${activeButton === button ? 'textz-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' : 'text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'}`}
                        onClick={() => setActiveButton(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>

            <div className='flex flex-col sm:flex-row justify-center'>
                {(() => {
                    switch (activeButton) {
                        case 'Universitas':
                            return <img src="/images/universitas.webp" className="w-full h-full" alt="" />;
                        case 'Sekolah':
                            return (
                                <>
                                    <div className="relative mx-auto sm:mx-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                            <img src="/images/pspmobile.webp" className="w-[272px] h-[572px]" alt="" />
                                        </div>
                                    </div>
                                </>
                            );
                        case 'Company':
                            return <img src="/images/company.webp" className="w-full h-full" alt="" />;
                        case 'Koperasi':
                            return <img src="/images/koperasi.webp" className="w-full h-full" alt="" />;
                        case 'General':
                            return (
                                <>
                                    <div className="relative mx-auto sm:mx-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                            <img src="/images/pspmobile.webp" className="w-[272px] h-[572px]" alt="" />
                                        </div>
                                    </div>
                                </>
                            );
                        default:
                            return (
                                <>
                                    <div className="relative mx-auto sm:mx-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                        <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                        <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                            <img src="/images/pspmobile.webp" className="w-[272px] h-[572px]" alt="" />
                                        </div>
                                    </div>
                                </>
                            );
                    }
                })()}

                <div className='w-fit pb-10 pl-10'>
                    {listItemsMap[activeButton].map((item, index) => (
                        <div key={index} className='flex items-center py-2' data-aos="zoom-in-right" data-aos-delay={`${index * 300}`}>
                            <div className='flex-none p-1 rounded-lg bg-white m-2 w-10 h-10'>
                                <img className="h-8" src={item.imgSrc} alt="digital card" />
                            </div>
                            <div className='text-black w-80 sm:w-full'>
                                <p>{item.text}</p>
                                {item.description && <p>{item.description}</p>}
                                {item.links && item.links.map((link, index) => (
                                    <a key={index} href={link.url} className='btn-class'>{link.text}</a>
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