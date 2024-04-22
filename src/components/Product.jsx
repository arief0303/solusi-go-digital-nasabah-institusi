import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';

const Solution = () => {

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
            imgSrc: '/svg/bullet-9.svg',
            links: [
                { url: 'https://psp.info.teknologikartu.com/', text: 'Flyer Platform Sekolah Pintar' },
            ],
        },
        {
            text: 'Materi Platform Sekolah Pintar',
            description: '',
            imgSrc: '/svg/bullet-10.svg',
            links: [
                { url: 'https://www.canva.com/design/DAF6Gx0mMfo/aUoIsjAgYjtdgSkcouWoJw/view?utm_content=DAF6Gx0mMfo&utm_campaign=designshare&utm_medium=link&utm_source=viewer', text: 'Flyer Platform Sekolah Pintar' },
                { url: 'https://www.canva.com/design/DAF9OUsD3po/w5X6zrSPAz5bPJPpwklf2A/view', text: 'Flyer Platform Sekolah Pintar Negeri' },
            ],
        },
        {
            text: 'Video Pembelajaran',
            description: '',
            imgSrc: '/svg/bullet-11.svg',
            links: [
                { url: 'https://www.youtube.com/watch?v=N9WKBr5couA&t=33s', text: 'Digitalisasi Sekolah' },
            ],
        },
    ];

    const listItemsUniversitas = [
        {
            text: 'Universitas',
            description: 'Universitas Menggunakan Closepay : IPB, ITS, Untirta, UNS',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Universitas',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: '', text: 'Flyer Universitas (On Progress)' },
            ],
        },
        {
            text: 'Materi Universitas',
            description: '',
            imgSrc: '/svg/bullet-10.svg',
            links: [
                { url: 'https://www.canva.com/design/DAF8XHnY7HE/arsNcAvPbDYiY-bk6qJs8Q/view', text: 'Materi Universitas' },
            ],
        },
    ];

    const listItemsCompany = [
        {
            text: 'Perusahaan / Company',
            description: 'Perusahaan Besar & BUMN Sudah Menggunakan Closepay.',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Perusahaan / Company',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: '', text: 'Flyer Perusahaan / Company (On Progress)' },
            ],
        },
        {
            text: 'Materi Perusahaan / Company',
            description: '',
            imgSrc: '/svg/bullet-10.svg',
            links: [
                { url: 'https://www.canva.com/design/DAF8jYqoL48/ZXDvnbUh18i437fQkQfglw/view', text: 'Materi Perusahaan' },
            ],
        },
        {
            text: 'Video Pembelajaran',
            description: '',
            imgSrc: '/svg/bullet-11.svg',
            links: [
                { url: 'https://www.youtube.com/watch?v=FRDp832GChs&t=1s', text: 'Digitalisasi Perusahaan' },
            ],
        },
    ];

    const listItemsKoperasi = [
        {
            text: 'Lembaga Keuangan / Koperasi',
            description: 'Beberapa Koperasi Telah Menggunakan Closepay.',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer Lembaga Keuangan / Koperasi',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: '', text: 'Flyer Lembaga Keuangan / Koperasi (On Progress)' },
            ],
        },
        {
            text: 'Materi Lembaga Keuangan / Koperasi',
            description: '',
            imgSrc: '/svg/bullet-10.svg',
            links: [
                { url: 'https://www.canva.com/design/DAF8jexqomo/FsrGxtE4FG_AiIX95mEOvg/view?utm_content=DAF8jexqomo&utm_campaign=designshare&utm_medium=link&utm_source=editor', text: 'Materi Koperasi' },
            ],
        },
        {
            text: 'Video Koperasi',
            description: '',
            imgSrc: '/svg/bullet-11.svg',
            links: [
                { url: '', text: 'Digitalisasi Koperasi (ON PROGRESS)' },
            ],
        },
    ];

    const listItemsGeneral = [
        {
            text: 'General',
            description: 'Beberapa Komunitas Telah Menggunakan Closepay.',
            imgSrc: '/svg/bullet-6.svg',
            links: [
            ],
        },
        {
            text: 'Flyer General',
            description: '',
            imgSrc: '/svg/bullet-7.svg',
            links: [
                { url: 'https://psp.info.teknologikartu.com/', text: 'Flyer General' },
            ],
        },
        {
            text: 'Materi Lembaga Keuangan / Koperasi',
            description: '',
            imgSrc: '/svg/bullet-10.svg',
            links: [
                { url: 'https://www.canva.com/design/DAF8jbeOO8U/T1gppchBJY9Q5EqtrkcSdg/view', text: 'Parkir' },
                { url: 'https://www.canva.com/design/DAF8jTANB28/BoBk12zFmua3iekZ7x7YAg/view', text: 'Wisata' },
                { url: '', text: 'Membership Khusus(On Progress)' },
            ],
        },
        {
            text: 'Video Pembelajaran',
            description: '',
            imgSrc: '/svg/bullet-11.svg',
            links: [
                { url: 'https://www.instagram.com/reel/C3mbIYfrZ2h/?igsh=azJ2b3ZiNXFscHI4', text: 'Digitalisasi Membership ' },
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

    const [listItems, setListItems] = useState(listItemsMap[activeButton]);

    useEffect(() => {
        setListItems([]);
        AOS.refresh();

        setTimeout(() => {
            setListItems(listItemsMap[activeButton]);
            AOS.refresh();
        }, 0);
    }, [activeButton]);

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
                                <div className="flex flex-col mr-10 sm:mr-0">
                                    {item.links && item.links.map((link, index) => (
                                        <a href={link.url || '#'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-4">
                                            {link.text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solution;