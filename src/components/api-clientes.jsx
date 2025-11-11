import Link from 'next/link'
import Buscar from '@/components/buscar'
import { obtenerClientesAPI } from '@/lib/data'
import { eliminarClienteAPI } from '@/lib/actions'
import ClienteEditarAPI from './api-cliente-editar'

async function Clientes({ query }) {
  const clientes = await obtenerClientesAPI(query);

  return (
    <>
      <h1 className='text-2xl text-slate-600 py-2 mb-2 border-b-2 border-b-slate-600'>
        Lista de clientes (API)
      </h1>

      <Buscar />

      <div className='flex flex-col'>
        {clientes
          .sort((a, b) => b.id - a.id) // descendente por id
          .map((c) => (
            <div key={c.id} className='p-2 odd:bg-slate-100 flex justify-between'>
              <Link href={`/clientes-api/${c.id}`}>{c.nombre} — {c.edad} años</Link>
              <div className='flex gap-6'>
                <ClienteEditarAPI cliente={c} />
                <form>
                  <input type="hidden" name='id' value={c.id} />
                  <button formAction={eliminarClienteAPI} title='ELIMINAR' className='text-xl'>🗑️</button>
                </form>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
export default Clientes;
