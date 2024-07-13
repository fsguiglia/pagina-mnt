import Link from "next/link";
import { promises as fs } from 'fs';
import Slider from "./components/Carousel";
import Tutoriales from "./components/Tutoriales";
import VideoPortada from "./components/VideoPortada";

export default async function Home() {
  return (
    <main className="pl-12 pt-20">
      <div className="md:hidden pr-8 mb-10">
        <h1 className="mb-4 2xl:mb-8 font-extrabold leading-none tracking-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl text-center">
          El mapa no es el territorio
        </h1>
      </div>

      <div className="grid grid-cols-1 md:mr-8 mr-12 md:grid-cols-2 md:min-h-[calc(100vh-100px)] content-start scroll-mt-40 mb-20 md:mb-0" id="portada">
        <div className="w-full aspect-video md:pl-5 md:order-2 pb-10">
          <VideoPortada />
        </div>
        <div className="md:pr-5 content-stretch">
          <div>
            <h1 className="mb-4 2xl:mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl 2xl:text-8xl pb-4 hidden md:block">
              El mapa no es el territorio
            </h1>
          </div>
          <div>
            <p className="md:text-2xl 2xl:text-4xl md:text-left text-center">
              MNT es una aplicación de código abierto. Ofrece herramientas para controlar sonidos e imágenes a través de movimientos. Genera mapas interactivos que pueden conectarse con otras aplicaciones o sintetizadores de hardware.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:mr-8 mr-12 md:grid-cols-2 md:min-h-[calc(100vh-100px)] mb-20 md:mb-0">
        <div className="md:pr-20 -z-10 mb-20 md:mb-0">
          <Slider />  
        </div>
        <div className="md:pr-5 content-stretch">
          <div>
            <p className="md:text-2xl 2xl:text-4xl md:text-left text-center mb-8">
              MNT construye sets conectando módulos. Recibe mensajes de controladores, celulares, joysticks o sensores. Soporta MIDI y OSC, conectándose fácilmente con DAWs o software para VJs.
            </p>
            <p className="md:text-2xl 2xl:text-4xl md:text-left text-center">
              Articula seis estrategias distintas para generar mapas, implementando tecnologías como interpolación gráfica e inteligencia artificial.
            </p>
          </div>
        </div>
      </div>

      <div className="md:min-h-[calc(100vh-100px)] md:mr-8 mr-12 scroll-mt-40 mb-20 md:mb-0" id="descargas">
      <div>
            <h1 className="mb-4 2xl:mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Descargas
            </h1>
          </div>
          <div className="md:text-2xl 2xl:text-4xl">
            <p className="pb-5">
              <Link href="https://downloads.mnt.com.ar/MNT2.zip" className="bg-sky-100">
                Ejecutable (Windows x64)
              </Link>. 
              Requiere <Link href="https://aka.ms/vs/16/release/vc_redist.x64.exe" target="_blank" className="bg-sky-100">Microsoft Visual C++ Redistributable for VS 2017</Link>
            </p>
            <p className="pb-5">
              <Link href="https://downloads.mnt.com.ar/Guia_MNT.pdf" target="_blank" className="bg-sky-100">Guía de Inicio Rápido</Link>
            </p>
            <p className="pb-5">
              <Link href="https://github.com/fsguiglia/Concatenate" target="_blank" className="bg-sky-100">Concatenate para Max for Live</Link>
            </p>
            <p className="pb-5">
              <Link href="https://github.com/fsguiglia/MNT2" target="_blank" className="bg-sky-100">Código fuente</Link>
            </p>
          </div>
      </div>

      <div className="grid grid-cols-1 md:mr-8 mr-12 md:grid-cols-2 md:min-h-[calc(100vh-100px)] content-start scroll-mt-40 mb-20 md:mb-0" id="tutoriales">
        <div>
          <h1 className="mb-4 2xl:mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-4">
            Tutoriales
          </h1>
          <p className="pb-5 md:text-2xl 2xl:text-4xl">
            <Link href="https://youtube.com/playlist?list=PLEMVlXTcC5rn0nzcSsK7CfwKhJ1gFrZIB&si=QrlbriWbq-XBzJvM" target="_blank" className="bg-sky-100">Ver en YouTube</Link>
          </p>
        </div>
        <div className="w-full aspect-video md:pl-5 pb-10 hidden md:block">
          <Tutoriales />
        </div>
      </div>
      
      <div className="md:min-h-[calc(100vh-100px)] md:mr-8 mr-12 scroll-mt-40 mb-20 md:mb-0" id="publicaciones">
        <div>
          <h1 className="mb-4 2xl:mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-4">
            Publicaciones
          </h1>
        </div>
        <div className="md:text-lg 2xl:text-3xl">
          <p className="pb-5 2xl:pb-10">
              Sguiglia, F. (2024).
              MNT2. Una caja de herramientas para el diseño de instrumentos y entornos interactivos.
              En&nbsp;
              <Link href="https://en.cmmas.com/sonicideas" target="_blank" className="bg-sky-100">
                Ideas Sónicas
              </Link>
              &nbsp;(en prensa).
          </p>
          <p className="pb-5 2xl:pb-10">
              Sguiglia, F. (2024).
              Sistemas de interpolación gráfica aplicados al control de parámetros de síntesis.
              En Juego Primitivo. Escritos sobre arte, música y tecnología desde la praxis (en prensa). 
          </p>
          <p className="pb-5 2xl:pb-10">
              Sguiglia, F. (2023).
              Síntesis concatenativa basada en corpus.
              En <Link href="https://wolkowiczeditores.mitiendanube.com/productos/investigaciones-sobre-audio-espacial-y-estetica-del-arte-sonoro-libro-digital-incluye-archivos-de-audio/" target="_blank" className="bg-sky-100">Investigaciones sobre audio espacial y estética del arte sonoro</Link>. 
          </p>
          <p>
            Sguiglia, F., Coton, P. y Toth, F. (2019).
            <Link href="https://www.nime.org/proceedings/2019/nime2019_paper029.pdf" target="_blank" className="bg-sky-100">
              El Mapa no es el Territorio: sensor mapping for audiovisual performances
            </Link>
            . En&nbsp;
            <Link href="https://www.nime.org/archives/" target="_blank" className="bg-sky-100">
            Proceedings of the international conference on New Interfaces for Musical Expression
            </Link>
            &nbsp;({`NIME '19`}).
          </p>
        </div>
      </div>

      <div className="md:min-h-[calc(100vh-140px)] md:mr-8 mr-12 scroll-mt-40 mb-20 md:mb-0" id="contacto">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl pb-4">
            Contacto
          </h1>
        </div>
        <div className="md:text-2xl 2xl:text-4xl">
          <p className="pb-5">
            MNT es un proyecto de Fabián Sguiglia.
          </p>
          <p>
            <Link href="http://www.sguiglia.com.ar" target="_blank" className="bg-sky-100">www.sguiglia.com.ar</Link>
          </p>
        </div>
      </div>
    </main>
  );
}