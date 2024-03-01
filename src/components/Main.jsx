import React from 'react'

export const Main = () => {

    const url_foto = "https://static.wixstatic.com/media/c837a6_a5f904abc9224779abfc65cb53fa6ba7~mv2.jpg/v1/crop/x_158,y_151,w_1117,h_1117/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1284121212-2048x2048_edited_.jpg"

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="flex">
                <div className="w-1/2 bg-transparent-200 p-1 rounded-full">
                    <img src={url_foto} alt="Mi Foto" className='rounded-full' />
                </div>
                <div className="w-1/2 p-4 text-left grid items-center"> {/* Columna 2 */}
                    <h1 className='text-8xl text-black font-bold'>Hola</h1>
                    <h2 className='text-4xl text-black font-bold'>Un poco de mí</h2>
                    <p className='text 2xl text-black'>
                        +1 año experiencia en Desarrollo Web. <br />
                    </p>
                    <p>
                        Soy Adderly Mendoza Nina, desarrollador web
                        y esta página es para ti.
                    </p>
                    <div className='flex items-center'>
                        <div class="rounded-full h-36 w-36 bg-yellow-500 flex items-center justify-center">
                            Curriculum
                        </div>
                        <div class="rounded-full h-36 w-36 bg-red-500 flex items-center justify-center">
                            Proyectos
                        </div>
                        <div class="rounded-full h-36 w-36 bg-blue-200 flex items-center justify-center">
                            Contactos
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
