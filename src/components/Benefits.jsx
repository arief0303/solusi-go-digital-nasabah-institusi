import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';


const Benefits = () => {
    useEffect(() => {
        AOS.init({
            once: true, // adding this line will cause animations to only run once
        });
    }, []);

    const listItems = [
        { text: 'Dengan solusi GoDigital yang dimiliki, bisa sebagai tools untuk Akuisisi Nasabah', imgSrc: '/svg/bullet-1.svg' },
        { text: 'Membantu mempertahankan Loyalitas Nasabah karena Nasabah merasa terbantu oleh solusi Teknologi dari perbankan.', imgSrc: '/svg/bullet-2.svg' },
        { text: 'Mendapatkan Fee Based dari transaksi yang dilakukan, seperti fee VA dan fee API transaksi bank.', imgSrc: '/svg/bullet-3.svg' },
        { text: 'Dana Pihak Ketiga atau DPK, pooling dana perputaran uang dan operasional.', imgSrc: '/svg/bullet-4.svg' },
        { text: 'Dengan konsep B2B2C, bisa dioptimalkan cross selling kepada nasabah individu di dalam ekosistem.', imgSrc: '/svg/bullet-5.svg' },
    ];

    return (
        <div className='h-full bg-white pt-5 sm:pt-96 py-10 px-0 sm:px-20'>
            <div className='flex flex-col justify-center items-center w-full py-10'>
                <h3 className='text-primary text-4xl pb-8' data-aos="zoom-in">Benefit</h3>
                <h1 className="text-4xl font-extrabold pb-5 mx-7 text-black">{`Keuntungan Kolaborasi Bank & TKI`.split(' ').map((word, index) => (
                    <span key={index} data-aos="fade-up" data-aos-delay={`${index * 500}`}>{word} </span>
                ))}
                </h1>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='w-fit sm:w-full pb-10'>
                    {listItems.map((item, index) => (
                        <div key={index} className='flex items-center py-2' data-aos="zoom-in-right" data-aos-delay={`${index * 300}`}>
                            <div className='flex-none p-1 rounded-lg bg-slate-400 m-2 w-10 h-10'>
                                <img className="h-8" src={item.imgSrc} alt="digital card" />
                            </div>
                            <p className='text-black w-80 sm:w-full'>{item.text}</p>
                        </div>
                    ))}
                </div>
                <img src='/images/teamwork.webp' alt='teamwork' className='w-full object-cover rounded-xl' data-aos="fade" />
            </div>
        </div>
    )
}

export default Benefits;