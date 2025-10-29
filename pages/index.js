import Head from 'next/head'
import { useState } from 'react'
import products from '../data/products.json'

export default function Home() {
  const [openProduct, setOpenProduct] = useState(null)

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-gray-100 relative overflow-hidden'>
      <Head>
        <title>Nerestore ⚡ Digital Store</title>
        <meta
          name='description'
          content='Nerestore: Jual produk digital seperti Canva Pro, CapCut Pro, Netflix, dan lainnya.'
        />
      </Head>

      {/* ===== PETIR BACKGROUND ===== */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='lightning'></div>
        <div className='lightning delay-1'></div>
        <div className='lightning delay-2'></div>
      </div>

      {/* ===== HEADER ===== */}
      <header className='backdrop-blur-md bg-black/40 text-white sticky top-0 z-50 shadow-lg border-b border-red-800'>
        <div className='container mx-auto flex items-center justify-between p-5'>
          <h1 className='text-4xl font-extrabold tracking-wide relative'>
            <span
              className='glitch-text text-red-500'
              data-text='NERESTORE'
            >
              NERESTORE
            </span>
          </h1>
          <nav className='space-x-6 text-sm font-medium'>
            <a href='#produk' className='hover:text-red-400 transition'>
              Produk
            </a>
            <a href='#promo' className='hover:text-red-400 transition'>
              Promo
            </a>
            <a href='#tentang' className='hover:text-red-400 transition'>
              Tentang
            </a>
          </nav>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className='container mx-auto px-5 py-10 relative z-10'>
        {/* ==== PRODUK ==== */}
        <section id='produk'>
          <h2 className='text-2xl font-bold mb-6 text-red-400 flex items-center gap-2'>
            ⚡ Produk Kami
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {products.map((p) => (
              <div
                key={p.id}
                className='rounded-2xl border border-red-800 bg-black/60 shadow-lg hover:shadow-red-700/50 hover:-translate-y-1 transition-all duration-300 p-5'
              >
                <button
                  onClick={() => setOpenProduct(openProduct === p.id ? null : p.id)}
                  className='w-full text-left text-lg font-semibold text-red-400 flex justify-between items-center'
                >
                  {p.name}
                  <span className='text-gray-300'>
                    {openProduct === p.id ? '▲' : '▼'}
                  </span>
                </button>

                {openProduct === p.id && (
                  <div className='mt-4 border-t border-red-700 pt-3 space-y-3 animate-fadeIn'>
                    {p.options.map((opt, i) => (
                      <div
                        key={i}
                        className='flex justify-between items-center border border-red-900 rounded-lg p-3 hover:bg-red-900/20 transition-all'
                      >
                        <div>
                          <p className='font-medium text-gray-100'>{opt.name}</p>
                          <p className='text-sm text-gray-400'>{opt.desc}</p>
                        </div>
                        <a
                          href={`https://wa.me/6289601570287?text=Halo!%20Saya%20ingin%20pesan%20${p.name}%20(${opt.name})`}
                          target='_blank'
                          className='bg-red-600 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-red-700 shadow'
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
          <h2 className='text-2xl font-bold text-red-400 mb-3'>🔥 Promo Spesial</h2>
          <div className='p-5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold text-center shadow-lg'>
            💥 Harga mulai <span className='text-yellow-300'>Rp4.000</span>!  
            Buruan sebelum kehabisan!
          </div>
        </section>

        {/* ==== TENTANG ==== */}
        <section id='tentang' className='mt-16'>
          <h2 className='text-2xl font-bold text-red-400 mb-3'>Tentang Nerestore</h2>
          <p className='text-gray-300 leading-relaxed'>
            <b>Nerestore</b> menjual produk digital seperti Canva, CapCut, Netflix, dan lainnya.
            Semua produk bergaransi dan disertai panduan lengkap agar pembeli nyaman & aman.
          </p>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className='bg-black/70 text-gray-400 text-center py-6 mt-16 border-t border-red-800'>
        <p>
          © {new Date().getFullYear()} <b className='text-red-500'>Nerestore</b> — Hubungi admin via WhatsApp untuk pemesanan.
        </p>
        <p className='mt-3'>
          ⚡{' '}
          <a
            href='https://linktr.ee/nerestore.com'
            target='_blank'
            rel='noreferrer'
            className='text-red-400 hover:text-white font-medium underline'
          >
            Akses Gratis / Free Tools di sini
          </a>
        </p>
      </footer>

      <style jsx global>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn { animation: fadeIn 0.3s ease-in-out; }

  /* === Efek GLITCH + ANIMASI untuk logo === */
  .glitch-text {
    position: relative;
    display: inline-block;
    color: #ff1b1b;
    text-shadow:
      0 0 10px #ff1b1b,
      0 0 20px #ff3b3b,
      0 0 40px #ff5c5c,
      0 0 80px #ff8080;
    animation:
      flicker 2s infinite ease-in-out,
      shake 1.5s infinite ease-in-out;
  }

  .glitch-text::before,
  .glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  .glitch-text::before {
    color: cyan;
    z-index: -1;
    animation: glitchBefore 1s infinite linear alternate-reverse;
  }

  .glitch-text::after {
    color: #ff0000;
    z-index: -1;
    animation: glitchAfter 1s infinite linear alternate-reverse;
  }

  @keyframes glitchBefore {
    0% { transform: translate(0, 0); opacity: 0.4; }
    20% { transform: translate(-2px, -2px); opacity: 1; }
    40% { transform: translate(-1px, 2px); opacity: 0.8; }
    60% { transform: translate(-3px, 1px); opacity: 0.6; }
    80% { transform: translate(-2px, -1px); opacity: 0.9; }
    100% { transform: translate(0, 0); opacity: 0.5; }
  }

  @keyframes glitchAfter {
    0% { transform: translate(0, 0); opacity: 0.4; }
    20% { transform: translate(2px, 2px); opacity: 1; }
    40% { transform: translate(1px, -2px); opacity: 0.8; }
    60% { transform: translate(3px, -1px); opacity: 0.6; }
    80% { transform: translate(2px, 1px); opacity: 0.9; }
    100% { transform: translate(0, 0); opacity: 0.5; }
  }

  @keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
    20%, 24%, 55% { opacity: 0.5; }
  }

  @keyframes shake {
    0% { transform: translate(0px, 0px); }
    25% { transform: translate(1px, -1px); }
    50% { transform: translate(-1px, 1px); }
    75% { transform: translate(1px, 1px); }
    100% { transform: translate(0px, 0px); }
  }

  /* Efek PETIR */
  .lightning {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    opacity: 0;
    animation: flash 6s infinite;
  }
  .delay-1 { animation-delay: 2s; }
  .delay-2 { animation-delay: 4s; }

  @keyframes flash {
    0%, 95%, 100% { opacity: 0; }
    96% { opacity: 1; }
    97% { opacity: 0.6; }
    98% { opacity: 0; }
    99% { opacity: 0.8; }
  }
`}</style>

    </div>
  )
}
