import Head from 'next/head'
import { useState } from 'react'
import products from '../data/products.json'

export default function Home() {
  const [openProduct, setOpenProduct] = useState(null)

  return (
    <div>
      <Head>
        <title>Nerestore — Digital Store</title>
        <meta
          name='description'
          content='Nerestore: Jual produk digital seperti Canva Pro, CapCut Pro, Netflix, dan lainnya.'
        />
      </Head>

      {/* ===== HEADER ===== */}
      <header className='bg-sky-600 text-white p-6 relative overflow-hidden'>
        <div className='container mx-auto flex items-center justify-between'>
          <h1 className='glitch-text text-2xl font-bold' data-text='Nerestore'>
            Nerestore
          </h1>
          <nav className='space-x-4 text-sm'>
            <a href='#produk'>Produk</a>
            <a href='#promo'>Promo</a>
            <a href='#tentang'>Tentang</a>
          </nav>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className='container mx-auto p-6'>
        {/* ==== PRODUK ==== */}
        <section id='produk'>
          <h2 className='text-xl font-semibold mb-4'>🛍️ Produk Kami</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((p) => (
              <div
                key={p.id}
                className='border rounded-lg bg-white shadow hover:shadow-md transition p-4'
              >
                <button
                  onClick={() => setOpenProduct(openProduct === p.id ? null : p.id)}
                  className='w-full text-left text-lg font-semibold text-sky-700 flex justify-between items-center'
                >
                  {p.name}
                  <span>{openProduct === p.id ? '▲' : '▼'}</span>
                </button>

                {openProduct === p.id && (
                  <div className='mt-3 border-t pt-3 space-y-2 animate-fadeIn'>
                    {p.options.map((opt, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center border rounded-md p-2 hover:bg-sky-50 transition'
                      >
                        <div>
                          <p className='font-medium text-gray-800'>{opt.name}</p>
                          <p className='text-sm text-gray-500'>{opt.desc}</p>
                        </div>
                        <a
                          href={`https://wa.me/6289601570287?text=Halo!%20Saya%20ingin%20pesan%20${p.name}%20(${opt.name})`}
                          target='_blank'
                          className='bg-sky-600 text-white text-sm px-3 py-1 rounded hover:bg-sky-700'
                        >
                          Beli
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ==== PROMO ==== */}
        <section id='promo' className='mt-10'>
          <h2 className='text-xl font-semibold'>🔥 Promo Spesial</h2>
          <div className='mt-3 p-4 border rounded bg-sky-50 text-sky-700 font-medium'>
            Harga mulai Rp4.000! Buruan sebelum kehabisan!
          </div>
        </section>

        {/* ==== TENTANG ==== */}
        <section id='tentang' className='mt-10'>
          <h2 className='text-xl font-semibold'>Tentang Nerestore</h2>
          <p className='mt-2 text-gray-700'>
            Nerestore menjual produk digital seperti Canva, CapCut, Netflix, dan banyak lagi.
            Semua produk bergaransi dan disertai panduan lengkap.
          </p>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className='bg-gray-100 p-6 mt-10 text-center text-sm text-gray-600'>
        <p>© {new Date().getFullYear()} Nerestore — Hubungi admin via WhatsApp untuk pemesanan.</p>
        <p className='mt-2'>
          🔗{' '}
          <a
            href='https://linkbio.co/nerestore'
            target='_blank'
            rel='noreferrer'
            className='text-sky-600 hover:underline font-medium'
          >
            Akses Gratis / Free Tools di sini
          </a>
        </p>
      </footer>
    </div>
  )
}
