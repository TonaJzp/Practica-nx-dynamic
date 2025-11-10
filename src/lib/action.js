'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'



// BASE DE DATOS - productos


export async function nuevoProductoDB(formData) {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = formData.get('precio')

    const sql = 'insert into `productos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?)'
    const values = [nombre, descripcion, precio];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/productos-db')
}


export async function editarProductoDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = formData.get('precio')

    const sql = 'update productos set nombre=?, descripcion=?, precio=? where id=?'
    const values = [nombre, descripcion, precio, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/productos-db')
}




export async function eliminarProductoDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from productos where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/productos-db')
}





// API - Productos
export async function nuevoProductoAPI(formData) {
    const [nombre, descripcion, precio] = formData.values()

    const response = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        body: JSON.stringify({ nombre, descripcion, precio: +precio, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/productos-api')
}


export async function editarProductoAPI(formData) {
    const [id, nombre, descripcion, precio] = formData.values()

    const response = await fetch('http://localhost:3001/productos/' + id, {
        method: 'PUT',
        body: JSON.stringify({ nombre, descripcion, precio: +precio, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/productos-api')
}


export async function eliminarProductoAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/productos/' + id, { method: 'DELETE' })

    revalidatePath('/productos-api')
}



// BASE DE DATOS - clientes

export async function nuevoClienteDB(formData) {
  const nombre = formData.get('nombre');
  const edad = formData.get('edad');

  const sql = 'INSERT INTO `clientes` (`nombre`, `edad`) VALUES (?, ?)';
  const values = [nombre, +edad];
  await db.query(sql, values);
  revalidatePath('/clientes-db');
}

export async function editarClienteDB(formData) {
  const id = formData.get('id');
  const nombre = formData.get('nombre');
  const edad = formData.get('edad');

  const sql = 'UPDATE clientes SET nombre=?, edad=? WHERE id=?';
  const values = [nombre, +edad, id];
  await db.query(sql, values);
  revalidatePath('/clientes-db');
}

export async function eliminarClienteDB(formData) {
  const id = formData.get('id');
  await db.query('DELETE FROM clientes WHERE id = ?', [id]);
  revalidatePath('/clientes-db');
}


//  API - Clientes

export async function nuevoClienteAPI(formData) {
  const [nombre, edad] = formData.values();

  const response = await fetch('http://localhost:3001/clientes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, edad: +edad })
  });
  await response.json();
  revalidatePath('/clientes-api');
}

export async function editarClienteAPI(formData) {
  const [id, nombre, edad] = formData.values();

  const response = await fetch('http://localhost:3001/clientes/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, edad: +edad })
  });
  await response.json();
  revalidatePath('/clientes-api');
}

export async function eliminarClienteAPI(formData) {
  const id = formData.get('id');
  await fetch('http://localhost:3001/clientes/' + id, { method: 'DELETE' });
  revalidatePath('/clientes-api');
}
