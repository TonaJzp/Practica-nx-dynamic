'use client'
import { editarClienteDB } from "@/lib/actions";
import { useState } from "react";

function ClienteEditarDB({ cliente }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible &&
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>
          <input type="hidden" name='id' defaultValue={cliente.id} />

          <label htmlFor='nombre'>Nombre</label>
          <input required id='nombre' name='nombre' defaultValue={cliente.nombre}
                 className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

          <label htmlFor='edad'>Edad</label>
          <input required id='edad' name='edad' type='number' min='0'
                 defaultValue={cliente.edad}
                 className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

          <div className='col-span-2 grid gap-2'>
            <button formAction={editarClienteDB} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
              Actualizar cliente
            </button>
          </div>
        </form>
      }
      <span onClick={() => setVisible(!visible)}>
        {visible ? "✖" : "📝"}
      </span>
    </>
  );
}
export default ClienteEditarDB;
