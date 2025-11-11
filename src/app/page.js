import Link from "next/link";

async function Home() {
  return (
    <section className="min-h-screen max-w-[1024px] mx-auto px-10">
      <h1 className='py-10 text-4xl text-blue-500 text-center border-b-4 border-b-blue-500'>
        NextJS: contenido dinámico
      </h1>

      <div className="h-[400px] flex flex-col gap-10 justify-center content-center">
        {/* PRODUCTOS - DB */}
        <div className="flex flex-col items-center">
          <Link href="/productos-db" className="block text-2xl text-blue-400 font-bold">
            BASE DE DATOS (Productos)
          </Link>
          <p>Requisitos previos: <span className="font-bold">Servidor MySQL para la DB local.</span></p>
        </div>

        {/* PRODUCTOS - API */}
        <div className="flex flex-col items-center">
          <Link href="/productos-api" className="block text-2xl text-blue-400 font-bold">
            API REST (Productos)
          </Link>
          <p>Requisitos previos: <span className="font-bold">Servidor JSON para la API local.</span></p>
        </div>

        {/* CLIENTES - DB */}
        <div className="flex flex-col items-center">
          <Link href="/clientes-db" className="block text-2xl text-blue-400 font-bold">
            BASE DE DATOS (Clientes)
          </Link>
          <p>Requisitos previos: <span className="font-bold">Servidor MySQL para la DB local.</span></p>
        </div>

        {/* CLIENTES - API */}
        <div className="flex flex-col items-center">
          <Link href="/clientes-api" className="block text-2xl text-blue-400 font-bold">
            API REST (Clientes)
          </Link>
          <p>Requisitos previos: <span className="font-bold">Servidor JSON para la API local.</span></p>
        </div>
      </div>
    </section>
  )
}

export default Home;
