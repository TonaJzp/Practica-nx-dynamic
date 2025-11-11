// app/clientes-api/page.jsx
import ClienteNuevoAPI from '@/components/api-cliente-nuevo'
import Clientes from '@/components/api-clientes'

export default function Page({ searchParams }) {
  const query = (searchParams?.q || '').toLowerCase();
  return (
    <div className="p-6">
      <ClienteNuevoAPI />
      {/* @ts-expect-error Server Component */}
      <Clientes query={query} />
    </div>
  )
}
