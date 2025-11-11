'use server'

import { db } from '@/lib/db'

// =====================
// BASE DE DATOS (PRODUCTOS)
// =====================
export async function obtenerProductosDB(query) {
  const sql = 'select * from `productos` where nombre like ?';
  const values = [`%${query}%`];
  const [productos] = await db.query(sql, values);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return productos;
}

export async function obtenerProductoDB(id) {
  const sql = 'select * from productos where id = ?';
  const values = [id];
  const [rows] = await db.query(sql, values);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return rows[0];
}

// =====================
// BASE DE DATOS (CLIENTES)
// =====================
export async function obtenerClientesDB(query) {
  const sql = 'select * from `clientes` where nombre like ?';
  const values = [`%${query}%`];
  const [clientes] = await db.query(sql, values);
  return clientes;
}

export async function obtenerClienteDB(id) {
  const sql = 'select * from clientes where id = ?';
  const values = [id];
  const [rows] = await db.query(sql, values);
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return rows[0] || null;
}

// =====================
// API (PRODUCTOS)
// =====================
export async function obtenerProductosAPI(query) {
  const response = await fetch('http://localhost:3001/productos');
  const productos = await response.json();
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return productos.filter(a => a.nombre.toLowerCase().includes(query));
}

export async function obtenerProductoAPI(id) {
  const response = await fetch('http://localhost:3001/productos/' + id);
  if (!response.ok) return null;
  const producto = await response.json();
  // await new Promise(resolve => setTimeout(resolve, 2000))
  return producto;
}

// =====================
// API (CLIENTES) — solo si también usas /clientes-api
// =====================
export async function obtenerClientesAPI(query) {
  const res = await fetch('http://localhost:3001/clientes');
  const clientes = await res.json();
  return clientes.filter(c => c.nombre.toLowerCase().includes(query));
}

export async function obtenerClienteAPI(id) {
  const res = await fetch('http://localhost:3001/clientes/' + id);
  if (!res.ok) return null;
  const cliente = await res.json();
  return cliente;
}
