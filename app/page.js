'use client'

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {


  return (
    <>
      <main>
        <section className="relative min-h-screen overflow-hidden bg-[#0c0c0c] flex items-center justify-center">
          <div className="hero-content mt-[-100px] w-[42vw] flex flex-col gap-4 items-center justify-center">
            <span className="bg-[rgb(28,27,31)] font-inter text-[#838384] border border-gray-700 rounded-2xl text-sm p-[8px] px-4">Available for new oppurtunities</span>
            <h1 className="text-8xl font-bold text-white">Hamza Amir</h1>
            <p className="text-[rgb(161,161,161)] text-4xl">Full Stack / Next.js Developer</p>
            <p className="text-[rgb(153,153,156)] text-xl font-semibold text-center">Turning Complex problems into elegant solutions. I build performant and scalable web applications that users love.</p>
            <div className="gap-5 flex mt-12">
              <button className="rounded-xl text-[16px] px-8 w-50 border-0 text-black p-[20px]">View Projects</button>
              <button className="font-extrabold text-[16px] w-50 bg-[#1E1B22] text-white rounded-xl px-8 border-0 p-[20px]">Get in Touch</button>
            </div>
          </div>
        </section>
        <section className="projects bg-black min-h-screen">
          <div className="content">
            <span className="flex flex-col gap-4">
              <h1 className="text-5xl mx-36 mt-20">
                Featured Projects
              </h1>
              <p className="mx-36 text-xl text-gray-400">Building products that scale and delight</p>
            </span>
          </div>
          <div className="projects-container flex flex-wrap justify-center items-start gap-8 px-8 md:px-16 lg:px-36 py-20">
            {/* Enterprise SaaS Platform Card */}
            <div className="project-card group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-1rem)] max-w-[500px]">
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/inboxpilot.png" 
                  alt="Enterprise SaaS Platform" 
                  fill
                  className="object-fill"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4 relative">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white">Enterprise SaaS Platform</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Built a multi-tenant SaaS application serving 10k+ users with real-time collaboration features.
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    PostgreSQL
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Redis
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile-First E-Commerce Card */}
            <div className="project-card group bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-1rem)] max-w-[500px]">
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="/sample.png" 
                  alt="Mobile-First E-Commerce" 
                  fill
                  className="object-fill"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4 relative">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Link target='_blank' href='https://www.youtube.com'>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                 </Link>
                </div>
                <h3 className="text-2xl font-bold text-white">Mobile-First E-Commerce</h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Developed a headless commerce platform with 40% faster load times and 99.9% uptime.
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Stripe
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Vercel
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Prisma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}