import Head from 'next/head'
import { useState } from 'react'
import products from '../data/products.json'

export default function Home() {
  const [openProduct, setOpenProduct] = useState(null)

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden'>
      <Head>
        <title>Nerestore ⚡ Digital Store</title>
        <meta
          name='description'
          content='Nerestore: Jual produk digital seperti Canva Pro, CapCut Pro, Netflix, dan lainnya.'
        />
      </Head>

      {/* === RGB LINE TOP === */}
      <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 animate-rgbFlow'></div>

      {/* === HEADER === */}
      <header className='backdrop-blur-md bg-black/40 text-white sticky top-0 z-50 shadow-lg border-b border-gray-800'>
        <div className='container mx-auto flex items-center justify-between p-5'>
          <h1 className='text-4xl font-extrabold tracking-wider relative'>
            <span className='glitch-text' data-text='NERESTORE'>
              NERESTORE
            </span>
          </h1>
          <nav className='space-x-6 text-sm font-medium'>
            <a href='#produk' className='hover:text-cyan-400 transition'>
              Produk
            </a>
            <a href='#promo' className='hover:text-pink-400 transition'>
              Promo
            </a>
            <a href='#tentang' className='hover:text-purple-400 transition'>
              Tentang
            </a>
          </nav>
        </div>
      </header>

      {/* === MAIN === */}
      <main className='container mx-auto px-5 py-12 relative z-10'>
        {/* PRODUK */}
        <section id='produk'>
          <h2 className='text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2'>
            ⚡ Produk Kami
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((p) => (
              <div
                key={p.id}
                className='rounded-2xl border border-gray-800 bg-black/60 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(255,0,255,0.3)] hover:-translate-y-1 transition-all duration-300 p-5'
              >
                <button
                  onClick={() => setOpenProduct(openProduct === p.id ? null : p.id)}
                  className='w-full text-left text-lg font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent flex justify-between items-center'
                >
                  {p.name}
                  <span className='text-gray-400'>
                    {openProduct === p.id ? '▲' : '▼'}
                  </span>
                </button>

                {openProduct === p.id && (
                  <div className='mt-4 border-t border-gray-700 pt-3 space-y-3 animate-fadeIn'>
                    {p.options.map((opt, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center border border-gray-800 rounded-lg p-3 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 transition-all duration-300'
                      >
                        <div>
                          <p className='font-medium text-gray-100'>{opt.name}</p>
                          <p className='text-sm text-gray-400'>{opt.desc}</p>
                        </div>
                        <a
                          href={`https://wa.me/6289601570287?text=Halo!%20Saya%20ingin%20pesan%20${p.name}%20(${opt.name})`}
                          target='_blank'
                          className='bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm px-4 py-1.5 rounded-lg hover:opacity-90 shadow-md transition'
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

        {/* PROMO */}
        <section id='promo' className='mt-16'>
          <h2 className='text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent'>
            🔥 Promo Spesial
          </h2>
          <div className='p-5 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white font-semibold text-center shadow-lg animate-glow'>
            💥 Harga mulai <span className='text-yellow-300'>Rp4.000</span>! Buruan sebelum kehabisan!
          </div>
        </section>

        {/* TENTANG */}
        <section id='tentang' className='mt-16 text-center'>
          <h2 className='text-2xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent'>
            Tentang Nerestore
          </h2>
          <p className='text-gray-300 leading-relaxed max-w-2xl mx-auto'>
            <b>Nerestore</b> menjual produk digital seperti Canva, CapCut, Netflix, dan lainnya.
            Semua produk bergaransi dan disertai panduan lengkap agar pembeli nyaman & aman.
          </p>

          {/* === TOMBOL AKSES FREE === */}
          <div className='mt-8'>
            <a
              href='https://sfl.gl/3ZfK'
              target='_blank'
              rel='noreferrer'
              className='relative inline-block px-8 py-3 rounded-full font-semibold text-white text-lg
                         bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500
                         hover:scale-105 transition-transform duration-300
                         before:absolute before:inset-0 before:rounded-full before:blur-md before:bg-gradient-to-r before:from-cyan-500 before:via-fuchsia-500 before:to-purple-500 before:opacity-70 hover:before:opacity-100 before:-z-10'
            >
              🚀 Akses Gratis / Free Tools
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className='bg-black/70 text-gray-400 text-center py-6 mt-16 border-t border-gray-800'>
        <p>
          © {new Date().getFullYear()} <b className='text-pink-400'>Nerestore</b> — Hubungi admin via WhatsApp.
        </p>
      </footer>

      {/* === STYLE === */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }

        @keyframes rgbFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-rgbFlow {
          background-size: 300%;
          animation: rgbFlow 6s linear infinite;
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(255, 0, 255, 0.3); }
          50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.4); }
        }
        .animate-glow { animation: glowPulse 3s ease-in-out infinite; }

        .glitch-text {
          background: linear-gradient(90deg, cyan, magenta, purple, blue, cyan);
          background-size: 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: rgbFlow 4s linear infinite;
          text-shadow:
            0 0 10px rgba(255,255,255,0.3),
            0 0 20px rgba(255,0,255,0.3),
            0 0 30px rgba(0,255,255,0.2);
        }
      `}</style>
    </div>
  )
}
