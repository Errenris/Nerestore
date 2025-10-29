import Head from 'next/head'
import ProductCard from '../components/ProductCard'
import products from '../data/products.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nerestore — Digital Store</title>
        <meta
          name='description'
          content='Nerestore: Jual produk digital seperti Canva Pro, CapCut Pro, Netflix, dan lainnya.'
        />
      </Head>

      <header className='bg-sky-600 text-white p-6 relative overflow-hidden'>
        <div className='container mx-auto flex items-center justify-between'>
          {/* ======= GLITCH TEXT ======= */}
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

      <main className='container mx-auto p-6'>
        <section id='produk' className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </section>

        <section id='promo' className='mt-10'>
          <h2 className='text-xl font-semibold'>🔥 Promo Spesial</h2>
          <div className='mt-3 p-4 border rounded bg-sky-50 text-sky-700 font-medium'>
            Harga mulai Rp4.000! Buruan sebelum kehabisan!
          </div>
        </section>

        <section id='tentang' className='mt-10'>
          <h2 className='text-xl font-semibold'>Tentang Nerestore</h2>
          <p className='mt-2 text-gray-700'>
            Nerestore menjual produk digital seperti Canva, CapCut, Netflix, dan banyak lagi.
            Semua produk bergaransi dan disertai panduan lengkap.
          </p>
        </section>
      </main>

      <footer className='bg-gray-100 p-6 mt-10 text-center text-sm text-gray-600'>
        © {new Date().getFullYear()} Nerestore — Hubungi admin via WhatsApp untuk pemesanan.
      </footer>
    </div>
  )
}
