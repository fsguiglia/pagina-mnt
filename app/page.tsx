import { EmblaCarousel } from "./components/Carousel";
import Link from "next/link";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main className="min-h-screen p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-20px)] content-start scroll-mt-40" id="portada">
        <div className="md:pl-5 md:order-2 pb-10">
          <iframe 
            className="w-full aspect-video"
            src="https://player.vimeo.com/video/641119199?h=bcfbc3dbd3"  
          />
        </div>
        <div className="md:pr-5 content-stretch">
          <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
              {data.portada.titulo1}
            </h1>
          </div>
          <div>
            <p className="md:text-2xl text-2xl">
              {data.portada.bajada}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-20px)]">
        <div>
          <EmblaCarousel />
        </div>
        <div className="md:pr-5 content-stretch">
          <div>
            <p className="md:text-2xl text-2xl">
              {data.portada.cuerpo}
            </p>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-20px)] scroll-mt-40" id="descargas">
      <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
              Descargas
            </h1>
          </div>
          <div className="md:text-2xl text-2xl">
            <p className="pb-5">
              <Link href="https://d17ccq4m3xjsbi.cloudfront.net/mnt/MNT2.zip">Ejecutable (Windows x64)</Link>. 
              Requiere <Link href="https://aka.ms/vs/16/release/vc_redist.x64.exe" target="_blank">Microsoft Visual C++ Redistributable for VS 2017</Link>
            </p>
            <p className="pb-5">
              <Link href="http://www.sguiglia.com.ar/mnt/descargas/MNT_guia.pdf" target="_blank">Guía de Inicio Rápido</Link>
            </p>
            <p className="pb-5">
              <Link href="https://github.com/fsguiglia/Concatenate" target="_blank">Concatenate para Max for Live</Link>
            </p>
            <p className="pb-5">
              <Link href="https://github.com/fsguiglia/MNT2" target="_blank">Código fuente</Link>
            </p>
          </div>
      </div>

      <div className="h-[calc(100vh-20px)] scroll-mt-40" id="tutoriales">
      <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
              Tutoriales
            </h1>
          </div>
          <div className="md:text-2xl text-2xl">
            <p className="pb-5">
              <Link href="http://www.sguiglia.com.ar/mnt/descargas/MNT_guia.pdf" target="_blank">Guía de Inicio Rápido</Link>
            </p>
            <p className="pb-5">
              <Link href="http://www.youtube.com" target="_blank">Videos en youtube</Link>
            </p>
          </div>
      </div>

      <div className="h-[calc(100vh-20px)] scroll-mt-40" id="contacto">
      <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
              Contacto
            </h1>
          </div>
          <div className="md:text-2xl text-2xl">
            <p className="pb-5">
              MNT es un proyecto de Fabián Sguiglia.
            </p>
            <p>
              <Link href="http://www.sguiglia.com.ar/mnt/descargas/MNT_guia.pdf" target="_blank">www.sguiglia.com.ar</Link>
            </p>
          </div>
      </div>
      
      
      <div className="h-[calc(100vh-20px)] scroll-mt-40" id="publicaciones">
      <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
              Publicaciones
            </h1>
          </div>
          <div>
            <p className="pb-5">
                Sguiglia, F. (2024).
                MNT2. Una caja de herramientas para el diseño de instrumentos y entornos interactivos.
                En <Link href="https://en.cmmas.com/sonicideas">Ideas Sónicas</Link>. 
            </p>
            <p className="pb-5">
                Sguiglia, F. (2024).
                Sistemas de interpolación gráfica aplicados al control de parámetros de síntesis
                En Juego Primitivo. Escritos sobre arte, música y tecnología desde la praxis (en prensa). 
            </p>
            <p className="pb-5">
                Sguiglia, F. (2023).
                Síntesis concatenativa basada en corpus.
                En <Link href="https://wolkowiczeditores.mitiendanube.com/productos/investigaciones-sobre-audio-espacial-y-estetica-del-arte-sonoro-libro-digital-incluye-archivos-de-audio/">Investigaciones sobre audio espacial y estética del arte sonoro</Link>. 
            </p>
            <p className="pb-5">
              Sguiglia, F., Coton, P. y Toth, F. (2019).
              <Link href="https://www.nime.org/proceedings/2019/nime2019_paper029.pdf">
                El Mapa no es el Territorio: sensor mapping for audiovisual performances. 
              </Link>
              . En Proceedings of the international conference on New Interfaces for Musical Expression ({`NIME '19`}).
            </p>
          </div>
      </div>

    </main>
  );
}
