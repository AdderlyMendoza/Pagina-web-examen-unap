import React from 'react'

export const Main = () => {

    const url_foto = "https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"

    const url_foto_h = "https://i.pinimg.com/736x/c6/cc/83/c6cc83e01a447b5c81a7ba726bf374ff.jpg"

    return (
        <div className="min-h-screen flex items-center justify-center container mx-auto animate-fade animate-duration-[2.5s] ">

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 p-4 invertir-img">
                    <img src={url_foto_h} alt="Mi Foto" className='rounded-full' />
                </div>

                <div className="w-full md:w-1/2 md:flex md:flex-col md:items-left md:justify-center px-10">
                    <h1 className='text-8xl text-black font-bold mb-10'>
                        Hola
                    </h1>
                    <h1 className='text-4xl text-black font-bold mb-2'>
                        Un poco de mí
                    </h1>
                    <p className='text-2xl text-black'>
                        Soy <strong>Adderly Mendoza Nina</strong>, Bachiller en Ingeniería de Sistemas y esta página web es para ti.
                    </p>
                    <p className='text-2xl text-black mb-10'>
                        De un estudiante a otro. ¡Espero disfrute y aprenda mucho!
                    </p>
                    <div className='flex flex-wrap text-2xl'>
                        <a href="http://localhost:3000/" className='rounded-full bg-red-400 hover:bg-red-600 md:w-1/3 p-4 text-center'>
                            Currículum
                        </a>
                        <a href="http://localhost:3000/" className='rounded-full bg-yellow-300 hover:bg-yellow-500 md:w-1/3 p-4 text-center'>
                            Proyectos
                        </a>
                        <a href="http://localhost:3000/" className='rounded-full bg-blue-300 hover:bg-blue-500 md:w-1/3 p-4 text-center'>
                            Contacto
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

