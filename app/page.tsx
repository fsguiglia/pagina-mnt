import Link from "next/link";
import { promises as fs } from 'fs';
import Slider from "./components/Carousel";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main className="pl-12 pt-20">
      <div className="h-screen md:snap-y md:snap-mandatory overflow-scroll">

        <div className="md:hidden pr-8 mb-10">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            {data.portada.titulo1}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:mr-8 mr-12 md:grid-cols-2 md:min-h-[calc(100vh-20px)] content-start scroll-mt-40 mb-10 md:snap-always md:snap-end" id="portada">
          <div className="md:pl-5 md:order-2 pb-10">
            <iframe 
              className="w-full aspect-video"
              src="https://player.vimeo.com/video/641119199?h=bcfbc3dbd3&background=1"  
            />
          </div>
          <div className="md:pr-5 content-stretch">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4 hidden md:block">
                {data.portada.titulo1}
              </h1>
            </div>
            <div>
              <p className="md:text-2xl md:text-left text-center">
                {data.portada.bajada}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:mr-8 mr-12 md:grid-cols-2 md:min-h-[calc(100vh-20px)] mb-20 md:snap-always md:snap-end">
          <div className="md:pr-20 -z-10">
            <Slider />  
          </div>
          <div className="md:pr-5 content-stretch">
            <div>
              <p className="md:text-2xl md:text-left text-center">
                {data.portada.cuerpo}
              </p>
            </div>
          </div>
        </div>

        <div className="md:min-h-[calc(100vh-20px)] md:mr-8 mr-12 scroll-mt-40 mb-20 md:snap-always md:snap-end" id="descargas">
        <div>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Descargas
              </h1>
            </div>
            <div className="md:text-2xl relative">
              <p className="pb-5">
                <Link href="https://d17ccq4m3xjsbi.cloudfront.net/mnt/MNT2.zip" className="bg-sky-100 dark:bg-transparent">
                  Ejecutable (Windows x64)
                </Link>. 
                Requiere <Link href="https://aka.ms/vs/16/release/vc_redist.x64.exe" target="_blank" className="bg-sky-100 dark:bg-transparent">Microsoft Visual C++ Redistributable for VS 2017</Link>
              </p>
              <p className="pb-5">
                <Link href="http://www.sguiglia.com.ar/mnt/descargas/MNT_guia.pdf" target="_blank" className="bg-sky-100 dark:bg-transparent">Guía de Inicio Rápido</Link>
              </p>
              <p className="pb-5">
                <Link href="https://github.com/fsguiglia/Concatenate" target="_blank" className="bg-sky-100 dark:bg-transparent">Concatenate para Max for Live</Link>
              </p>
              <p className="pb-5">
                <Link href="https://github.com/fsguiglia/MNT2" target="_blank" className="bg-sky-100 dark:bg-transparent">Código fuente</Link>
              </p>
            </div>
        </div>

        <div className="md:min-h-[calc(100vh-20px)] md:mr-8 mr-12 scroll-mt-40 mb-20 md:snap-always md:snap-end" id="tutoriales">
        <div>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
                Tutoriales
              </h1>
            </div>
            <div className="md:text-2xl">
              <p className="pb-5">
                <Link href="http://www.sguiglia.com.ar/mnt/descargas/MNT_guia.pdf" target="_blank" className="bg-sky-100 dark:bg-transparent">Guía de Inicio Rápido</Link>
              </p>
              <p className="pb-5">
                <Link href="https://www.youtube.com/playlist?list=PLEMVlXTcC5rn0nzcSsK7CfwKhJ1gFrZIB" target="_blank" className="bg-sky-100 dark:bg-transparent">Videos en youtube</Link>
              </p>
            </div>
        </div>

        <div className="md:min-h-[calc(100vh-20px)] md:mr-8 mr-12 scroll-mt-40 mb-20 md:snap-always md:snap-end" id="contacto">
        <div>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
                Contacto
              </h1>
            </div>
            <div className="md:text-2xl">
              <p className="pb-5">
                MNT es un proyecto de Fabián Sguiglia.
              </p>
              <p>
                <Link href="http://www.sguiglia.com.ar/mnt/descargas/MNT_guia.pdf" target="_blank" className="bg-sky-100 dark:bg-transparent">www.sguiglia.com.ar</Link>
              </p>
            </div>
        </div>
        
        <div className="md:min-h-[calc(100vh-20px)] md:mr-8 mr-12 scroll-mt-40 mb-80 md:snap-always md:snap-end" id="publicaciones">
        <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
                Publicaciones
              </h1>
            </div>
            <div>
              <p className="pb-5">
                  Sguiglia, F. (2024).
                  MNT2. Una caja de herramientas para el diseño de instrumentos y entornos interactivos.
                  En Ideas Sónicas (en prensa). 
              </p>
              <p className="pb-5">
                  Sguiglia, F. (2024).
                  Sistemas de interpolación gráfica aplicados al control de parámetros de síntesis
                  En Juego Primitivo. Escritos sobre arte, música y tecnología desde la praxis (en prensa). 
              </p>
              <p className="pb-5">
                  Sguiglia, F. (2023).
                  Síntesis concatenativa basada en corpus.
                  En <Link href="https://wolkowiczeditores.mitiendanube.com/productos/investigaciones-sobre-audio-espacial-y-estetica-del-arte-sonoro-libro-digital-incluye-archivos-de-audio/" target="_blank" className="bg-sky-100 dark:bg-transparent">Investigaciones sobre audio espacial y estética del arte sonoro</Link>. 
              </p>
              <p>
                Sguiglia, F., Coton, P. y Toth, F. (2019).
                <Link href="https://www.nime.org/proceedings/2019/nime2019_paper029.pdf" target="_blank" className="bg-sky-100 dark:bg-transparent">
                  El Mapa no es el Territorio: sensor mapping for audiovisual performances. 
                </Link>
                . En Proceedings of the international conference on New Interfaces for Musical Expression ({`NIME '19`}).
              </p>
            </div>
        </div>
      </div>
    </main>
  );
}