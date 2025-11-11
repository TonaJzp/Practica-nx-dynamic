// app/clientes-db/page.jsx
import ClienteNuevoDB from '@/components/db-cliente-nuevo'
import Clientes from '@/components/db-clientes'

export default function Page({ searchParams }) {
  const query = (searchParams?.q || '').toLowerCase();
  return (
    <div className="p-6">
      <ClienteNuevoDB />
      {/* @ts-expect-error Server Component */}
      <Clientes query={query} />
    </div>
  )
}
