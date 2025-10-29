import Link from 'next/link'

export default function ProductCard({p}) {
  const wa = encodeURIComponent(`Halo, saya mau beli ${p.title} (${p.id}) — apakah masih ada?`)
  return (
    <div className='border rounded-lg p-4 shadow-sm bg-white'>
      <h3 className='font-semibold text-lg'>{p.title}</h3>
      <p className='text-sm text-gray-600'>{p.short}</p>
      <div className='mt-3 flex items-center justify-between'>
        <div>
          <div className='text-xl font-bold'>{p.price}</div>
          <div className='text-xs text-gray-500'>{p.category}</div>
        </div>
        <div className='flex gap-2'>
          <a href={`https://wa.me/${p.wa.replace(/^\+/, '')}?text=${wa}`} target='_blank' rel='noreferrer' className='px-3 py-1 rounded-md border border-sky-600 text-sky-600 hover:bg-sky-50'>Chat WA</a>
        </div>
      </div>
    </div>
  )
}