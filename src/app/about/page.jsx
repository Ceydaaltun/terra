/**
 * About Component
 * 
 * This component renders the "About" page, showcasing the key features 
 * of the service or product offered. It includes a responsive layout 
 * that adapts to various screen sizes, ensuring a seamless user experience.
 * 
 * Props:
 * - None
 * 
 * Returns:
 * - A JSX element representing the About page.
 * 
 * Key Features:
 * - Displays a list of features with icons and descriptions.
 * - Utilizes Tailwind CSS for styling and responsive design.
 * - Includes an image that enhances visual appeal on larger screens.
 * 
 * Usage:
 * ```jsx
 * <About />
 * ```
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */

import { DevicePhoneMobileIcon, WrenchScrewdriverIcon, CodeBracketIcon, CommandLineIcon, BoltIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'



const features = [
  {
    name: 'Responsive Design',
    description:
      'Your website will look perfect on every device, from desktop to mobile. Fluid layouts and optimized images ensure a seamless experience for all users.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Custom Features',
    description:
      'From interactive forms to dynamic content, get exactly the functionality your business needs. Every feature is crafted with performance and user experience in mind.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Modern Technologies',
    description:
      'Built with the latest web technologies like React, Next.js, and Tailwind CSS. Enjoy fast loading times, smooth animations, and SEO-friendly structure.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Clean Code',
    description:
      'Maintainable, well-documented code that scales with your business. Easy to update and extend with new features as your needs grow.',
    icon: CommandLineIcon,
  },
  {
    name: 'Performance First',
    description:
      'Lightning-fast websites optimized for speed and efficiency. Quick load times, smooth scrolling, and responsive interactions keep your users engaged.',
    icon: BoltIcon,
  },

]

export default function About() {
  return (
      <div className='overflow-hidden bg-black py-8 md:py-32 grid grid-cols-6 grid-rows-[repeat(6,_minmax(150px,_150px))] md:grid-rows-[repeat(5,_minmax(125px,_125px))]'>
        <div className='hidden sm:flex col-start-4 col-end-7 row-start-1 row-end-7 ' data-animate='slide-right' >
          <Image
            src='/hero-desktop.png'
            width={1000}
            height={760}
            className='h-full w-full object-cover md:object-[-13%] lg:object-[-2%] xl:h-auto xl:w-auto xl:object-contain'
            alt='Screenshots of the dashboard project showing desktop version'
          />
        </div>
        <div className='flex flex-col lg:gap-4 items-center justify-evenly pl-3 pr-3 md:pr-0 md:pl-6 col-start-1 col-end-7 row-start-1 row-end-7 md:row-end-7 md:col-end-4' >
          <h2 className='text-[2rem] sm:text-4xl font-semibold' data-animate='slide-left'>Perfect on Every Device</h2>
          <p className='mt-2 text-pretty text-3xl font-semibold tracking-tight text-gray-500' data-animate='slide-left'>
            One design, every screen - seamlessly yours
          </p>
          <dl className='flex flex-col gap-8 sm:gap-0 mt-0 sm:mt-2 sm:mt-10 max-w-xl sm:space-y-8 sm:text-base/7 lg:max-w-none' data-animate='slide-left'>
            {features.map((feature) => (
              <div key={feature.name} className='relative pl-9 '>
                <dt className='inline font-semibold text-text-teal'>
                  <feature.icon aria-hidden='true' className='absolute left-1 top-1 size-5 text-text-teal' />
                  {feature.name}
                </dt>{' '}
                <dd className='inline'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
  )
}
