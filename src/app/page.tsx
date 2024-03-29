import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  ArrowDownToLine,
  CheckCircle,
  Leaf,
} from 'lucide-react'
import Link from 'next/link'
import LandingCourses from './(landing)/landing/_components/landing-courses'
import LandingTestimonials from './(landing)/landing/_components/landing-testimonials'
import { LandingCarousel } from './(landing)/_components/landing-carousel'

const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

export default function Home() {

  const tokens = 6;

  return (
    <>
      <MaxWidthWrapper>
        <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl mx-auto  dark:bg-gray-900 shadow-2xl" aria-hidden="true">
    
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          />
          </div>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Let&apos;s create something great with{' '}
            <span className='bg-gradient-to-tr from-teal-600 to-[#9089fc] text-transparent bg-clip-text'>
              Brandforge
            </span>
            !
          </h1>
          <p className='my-6 text-lg max-w-prose text-muted-foreground'>
            Start by describing what your new brand/company does
          </p>
          <Input type="text" placeholder="Tell us about your brand..." />
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            
            <Link href="/start" className={buttonVariants()}>
              Forge
            </Link>
            <Button variant="ghost">
              <Link href="/products">
                or Browse Products
              </Link>
            </Button>
            {/* <Button variant='ghost'>
              Our quality promise &rarr;
            </Button> */}
          </div>
        </div>

        <LandingCourses/>

      
        
      </MaxWidthWrapper>

      <section className='flex-col flex items-center mx-auto max-w-xl'>
        <LandingCarousel/>
      </section>

      <section>
        <div className='w-full mx-10'>
            <ProductReel
              query={{ sort: 'desc', limit: 4 }}
              href='/products?sort=recent'
              title='Brand new'
            />
          </div>
      </section>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <LandingTestimonials/>
      </section>

    </>
  )
}
