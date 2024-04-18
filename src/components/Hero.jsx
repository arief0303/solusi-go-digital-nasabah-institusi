import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='h-full bg-white'>
            <div className='pt-10 px-10 sm:px-20 h-screen sm:h-[34rem] bg-gradient-to-b from-violet-600 via-violet-600 to-indigo-600'>
                <div>
                    <img className="h-8 mb-7" src="/svg/tki.svg" alt="TKI logo" data-aos="fade-right" />
                    <h1 className="text-4xl font-extrabold pb-5 text-white">{`Temukan era baru pendidikan dengan aplikasi yang memudahkan dan menginspirasi.`.split(' ').map((word, index) => (
                        <span key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>{word} </span>
                    ))}
                    </h1>
                </div>
                <div className="flex items-center justify-center flex-col md:flex-row">
                    <div className="pb-10 w-full text-white font-semibold leading-normal text-xl" data-aos="fade-in" data-aos-delay="600">
                        Layanan Perbankan saat ini bukan hanya Funding - Lending saja, akan tetapi perlu layanan solusi teknologi yang terintegrasi dengan Open Banking Technology
                    </div>
                    <div className='w-full'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero