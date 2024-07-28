import Hero from './_component/hero'
import ProductsSection from './_component/productsSection'

export default function Home() {
  return (
    <main className='px-2 ss:px-4 sm:px-4 md:px-7 lg:px-12'>
      <Hero />
      <ProductsSection />
    </main>
  );
}
