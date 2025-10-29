import Head from 'next/head'
import { useState } from 'react'
import products from '../data/products.json'

export default function Home() {
  const [openProduct, setOpenProduct] = useState(null)

  return (
    <div className='min-h-screen bg-gradient-to-br from-sky-50 to-white text-gray-800'>
      <Head>
        <title>Nerestore — Digital Store</title>
        <meta
          name='description'
          content='Nerestore: Jual produk digital seperti Canva Pro, CapCut Pro, Netflix, dan lainnya.'
        />
      </Head>

      {/* ===== HEADER ===== */}
      <header className='backdrop-blur-md bg-sky-600/90 text-white sticky top-0 z-50 shadow-md'>
        <div className='container mx-auto flex items-center justify-between p-5'>
          <h1 className='text-3xl font-extrabold tracking-wide'>
            <span className='bg-gradient-to-r from-white to-sky-200 text-transparent bg-clip-text glitch-text'>
              NERESTORE
            </span>
          </h1>
          <nav className='space-x-6 text-sm font-medium'>
            <a href='#produk' className='hover:text-sky-200 transition'>
              Produk
            </a>
            <a href='#promo' className='hover:text-sky-200 transition'>
              Promo
            </a>
            <a href='#tentang' className='hover:text-sky-200 transition'>
              Tentang
            </a>
          </nav>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className='container mx-auto px-5 py-10'>
        {/* ==== PRODUK ==== */}
        <section id='produk'>
          <h2 className='text-2xl font-bold mb-6 text-sky-700 flex items-center gap-2'>
            🛍️ Produk Kami
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((p) => (
              <div
                key={p.id}
                className='rounded-2xl border border-sky-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5'
              >
                <button
                  onClick={() => setOpenProduct(openProduct === p.id ? null : p.id)}
                  className='w-full text-left text-lg font-semibold text-sky-700 flex justify-between items-center'
                >
                  {p.name}
                  <span className='text-sky-500'>
                    {openProduct === p.id ? '▲' : '▼'}
                  </span>
                </button>

                {openProduct === p.id && (
                  <div className='mt-4 border-t pt-3 space-y-3 animate-fadeIn'>
                    {p.options.map((opt, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center border border-sky-100 rounded-lg p-3 hover:bg-sky-50 transition-all'
                      >
                        <div>
                          <p className='font-medium text-gray-800'>{opt.name}</p>
                          <p className='text-sm text-gray-500'>{opt.desc}</p>
                        </div>
                        <a
                          href={`https://wa.me/6289601570287?text=Halo!%20Saya%20ingin%20pesan%20${p.name}%20(${opt.name})`}
                          target='_blank'
                          className='bg-sky-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-sky-700 shadow-sm'
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
        <section id='promo' className='mt-16'>
          <h2 className='text-2xl font-bold text-sky-700 mb-3'>🔥 Promo Spesial</h2>
          <div className='p-5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold text-center shadow'>
            💥 Harga mulai <span className='text-yellow-300'>Rp4.000</span>!  
            Buruan sebelum kehabisan!
          </div>
        </section>

        {/* ==== TENTANG ==== */}
        <section id='tentang' className='mt-16'>
          <h2 className='text-2xl font-bold text-sky-700 mb-3'>Tentang Nerestore</h2>
          <p className='text-gray-700 leading-relaxed'>
            <b>Nerestore</b> menjual produk digital seperti Canva, CapCut, Netflix, dan lainnya.
            Semua produk bergaransi dan disertai panduan lengkap agar pembeli nyaman & aman.
          </p>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className='bg-sky-600/90 text-white text-center py-6 mt-16'>
        <p>
          © {new Date().getFullYear()} <b>Nerestore</b> — Hubungi admin via WhatsApp untuk pemesanan.
        </p>
        <p className='mt-3'>
          🔗{' '}
          <a
            href='https://linktr.ee/nerestore.com'
            target='_blank'
            rel='noreferrer'
            className='text-yellow-200 hover:text-white font-medium underline'
          >
            Akses Gratis / Free Tools di sini
          </a>
        </p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          text-shadow: -2px 0 red;
          top: 0;
          color: white;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: glitch 2s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          text-shadow: 2px 0 blue;
        }
        @keyframes glitch {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
          }
          20% {
            clip: rect(12px, 9999px, 16px, 0);
          }
          40% {
            clip: rect(85px, 9999px, 90px, 0);
          }
          60% {
            clip: rect(24px, 9999px, 28px, 0);
          }
          80% {
            clip: rect(64px, 9999px, 68px, 0);
          }
          100% {
            clip: rect(12px, 9999px, 16px, 0);
          }
        }
      `}</style>
    </div>
  )
}
