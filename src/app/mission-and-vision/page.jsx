/**
 * Mission and Vision Component
 * 
 * This component renders the "Mission and Vision" page, highlighting 
 * the core principles and features of the service or product offered. 
 * It includes sections for Modern UI/UX, API Integration, Performance 
 * Optimization, and Component Architecture, each with detailed descriptions.
 * 
 * Props:
 * - None
 * 
 * Returns:
 * - A JSX element representing the Mission and Vision content.
 * 
 * Key Features:
 * - Responsive layout using Tailwind CSS.
 * - Displays various sections with headings, lists, and interactive components.
 * - Integrates the StarRating component for user interaction.
 * 
 * Usage:
 * ```jsx
 * <MissionAndVision />
 * ```
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */

import StarRating from '@/components/StarRating'
import CodeBlock from '@/components/CodeBlock';

export default function MissionAndVision() {
  

  return (
    <div className='py-2 md:py-10'>
        <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'data-animate='fade' >
          <h2 className='text-center text-2xl font-semibold text-text-teal ' >Beyond Static Websites</h2>
          <p className='mx-auto my-4 lg:my-2 text-center text-2xl lg:text-4xl font-semibold tracking-tight text-balance'>
            Engineering Digital Experiences
          </p>
          
          <div className='text-xl mt-2 grid gap-4 sm:mt-5 lg:grid-cols-3 lg:grid-rows-2 h-full lg:h-[80vh]'>
            <div className='relative lg:row-span-2'>
              <div className='absolute inset-px rounded-lg shadow-custom  lg:rounded-l-[2rem]'></div>
              <div className='relative flex h-full flex-col justify-stretch overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]'>
                <div className='flex flex-col  py-4 px-8 lg:pt-8'>
                  <p className='text-2xl text-text-teal font-extrabold tracking-tight '>Modern UI/UX</p>
                  <ul className=' list-disc mt-4 leading-loose '>
                    <li>GSAP & Framer Motion </li>
                    <li>Tailwind CSS Styling</li>
                    <li>Responsive Layouts</li>
                    <li>Interactive Components</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-4 items-center px-8 py-4 lg:py-0'>
                  <StarRating />
                  <span>Try the component!</span>
                </div>
              </div>
              <div className='pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]'></div>
            </div>

            <div className='relative max-lg:row-start-1'>
              <div className='absolute inset-px rounded-lg shadow-custom  max-lg:rounded-t-[2rem]'></div>
              <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]'>
                <div className='py-4 px-8 lg:pt-8'>
                  <p className='text-2xl text-text-teal font-extrabold tracking-tight '>API Integration</p>
                  <ul className='list-disc mt-4 space-y-2max-lg:text-center leading-loose'>
                    <li> RESTful APIs</li>
                    <li> GraphQL Integration</li>
                    <li> Real-time Updates</li>
                    <li> Error Handling</li>
                  </ul>
                </div>
              </div>
              <div className='pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]'></div>
            </div>

            <div className='relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2'>
              <div className='absolute inset-px rounded-lg shadow-custom '></div>
              <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]'>
                <div className='py-4 pl-8 lg:px-8'>
                  <p className='text-2xl text-text-teal font-extrabold tracking-tight'>Performance Optimization</p>
                  <ul className='list-disc mt-4 space-y-2 leading-loose'>
                    <li> Code Splitting & Lazy Loading</li>
                    <li> Asset Optimization</li>
                    <li> Caching Strategies</li>
                    <li> Bundle Size Management</li>
                  </ul>
                </div>
              </div>
              <div className='pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5'></div>
            </div>

            <div className='relative lg:row-span-2'>
              <div className='absolute inset-px rounded-lg shadow-custom  max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
              <div className='relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]'>
                <div className='px-4 py-4 lg:px-8 lg:py-8'>
                  <p className='text-2xl text-text-teal font-extrabold tracking-tight '>Component Architecture</p>
                  <p className='mt-4 leading-loose'>
                    Building scalable applications with reusable components, custom hooks, and modern architectural patterns. Focus on modularity and maintainability.
                  </p>
                </div>
                <div className='relative min-h-[30rem] w-full grow'>
                  <div className='absolute top-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-bg-gray shadow-2xl'>
                    <div className='flex bg-gray-800/40 ring-1 ring-white/5'>
                      <div className='-mb-px flex text-sm/6 font-medium text-gray-400'>
                        <div className='border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white'>
                          StarRating.jsx
                        </div>
                      </div>
                    </div>
                    <div className='px-6 pt-6 pb-14 text-sm '>
                      <CodeBlock />
                    </div>
                  </div>
                </div>
              </div>
              <div className='pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]'></div>
            </div>
          </div>
        </div>
      
    </div>
  )
}