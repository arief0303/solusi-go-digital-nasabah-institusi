import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

const Documentation = () => {
    useEffect(() => {
        AOS.init({
            once: true, // adding this line will cause animations to only run once
        });
    }, []);
    const [activeButton, setActiveButton] = useState('Form');
    const buttons = ['Form', 'Sales'];
    const listItemsForm = [
        {
            text: 'Penawaran',
            description: '',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://docs.google.com/document/d/19QapvWhm21Vm7vY200WbEBfOqrFYGHez6N1dh0QlmP0/edit', text: 'Lihat Detail' },
            ],
        },
        {
            text: 'PKS',
            description: '',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://docs.google.com/document/d/1Tbo1OTFrmpNHq0vI0ZJnSBl9VF-bH5K0hAyDDeTduFs/edit', text: 'Lihat Detail' },
            ],
        },
        {
            text: 'Tabel Kesepakatan Harga',
            description: '',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://docs.google.com/document/d/1EqcAVAEt1mQ2FL2At7_jA_SHUnZMb7APX6MD3_J_hAc/edit', text: 'Lihat Detail' },
            ],
        },
        {
            text: 'Form Estimasi Implementasi',
            description: '',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://docs.google.com/document/d/1-7rRpUfh_HceVFLYADXacvvHwowc0QhVydKnPdKFh64/edit', text: 'Lihat Detail' },
            ],
        },
    ];
    const listItemsSales = [
        {
            text: 'Area Barat ( Jabar, Jabodetabek, Sumatra)  Area Barat ( Jabar, Jabodetabek, Sumatra)  ',
            description: 'Galih Beryl.',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://wa.me/6288227337622', text: 'Hubungi Sales' },

            ],
        },
        {
            text: 'Area Tengah ( Jateng, DIY, Kalimantan)',
            description: 'Kastoni.',
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://wa.me/62895346018233', text: 'Hubungi Sales' },

            ],
        },
        {
            text: 'Area Barat ( Jabar, Jabodetabek, Sumatra)  Area Barat ( Jabar, Jabodetabek, Sumatra)  ',
            description: "Irwan Sa'ban.",
            imgSrc: '/svg/check.svg',
            links: [
                { url: 'https://wa.me/681313905192', text: 'Hubungi Sales' },

            ],
        },
    ];
    const listItemsMap = {
        Form: listItemsForm,
        Sales: listItemsSales,
    };
    return (
        <div className='h-full bg-white py-32 sm:py-60 px-0 sm:px-20'>
            <div className='flex flex-column lg:flex-row'>
                <div className='flex flex-col lg:flex-row w-full'>
                    <h3 className='text-primary text-4xl mx-7 pb-8' data-aos="zoom-in">Documentation</h3>
                    <h1 className="text-4xl font-extrabold pb-5 mx-7 text-black">{`Kelengkapan dokumen serta tim kami`.split(' ').map((word, index) => (
                        <span key={index} data-aos="fade-up" data-aos-delay={`${index * 500}`}>{word} </span>
                    ))}
                    </h1>
                    <div className='flex flex-row h-1/2 w-full justify-center px-24 mt-9 pb-10'>
                        {buttons.map((button, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`${activeButton === button ? 'w-auto h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' : 'w-auto h-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'}`}
                                onClick={() => setActiveButton(button)}
                            >
                                {button}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-fit sm:w-full pb-10'>
                    {listItemsMap[activeButton].map((item, index) => (
                        <div key={index} className='flex items-center py-4' data-aos="zoom-in-right" data-aos-delay={`${index * 300}`}>
                            <div className='flex-none p-1 rounded-lg bg-white m-2 w-10 h-10'>
                                <img className="h-8" src={item.imgSrc} alt="digital card" />
                            </div>
                            <div className='w-full sm:w-f'>
                                <h2 className='text-neutral-950 text-xl'>{item.text}</h2>
                                {item.description && <p className=' text-neutral-500 w-72'>{item.description}</p>}
                                {item.links && item.links.map((link, index) => (
                                    <a href='https://holistic-overlay-429385.framer.app/' className=" text-blue-700">{link.text}</a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <img src='/images/teamwork.webp' alt='teamwork' className='w-full object-cover rounded-xl' data-aos="fade" />
            </div>
        </div>
    )
}

export default Documentation