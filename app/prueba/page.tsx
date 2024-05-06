import { promises as fs } from 'fs';

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div className="md:pr-5 content-stretch min-h-screen p-12">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pb-4">
            {data.prueba.titulo1}
          </h1>
        </div>
        <div>
          <p className="md:text-2xl text-2xl">
            {data.prueba.bajada}
          </p>
        </div>
      </div>
    );
}