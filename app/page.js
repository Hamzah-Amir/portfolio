'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [visibleElements, setVisibleElements] = useState({
    header: false,
    card1: false,
    card2: false,
    techref: false,
    frontendref: false,
    backendref: false,
    devopsref: false,
    otherref: false,
  });
  
  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const techref = useRef(null);
  const frontendref = useRef(null);
  const backendref = useRef(null);
  const devopsref = useRef(null);
  const otherref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id');
            if (elementId) {
              setVisibleElements((prev) => ({
                ...prev,
                [elementId]: true,
              }));
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before fully visible
      }
    );

    const refs = [
      { ref: headerRef, id: 'header' },
      { ref: card1Ref, id: 'card1' },
      { ref: card2Ref, id: 'card2' },
      { ref: techref, id: 'techref' },
      { ref: frontendref, id: 'frontendref' },
      { ref: backendref, id: 'backendref' },
      { ref: devopsref, id: 'devopsref' },
      { ref: otherref, id: 'otherref' },
    ];

    refs.forEach(({ ref, id }) => {
      const currentRef = ref.current;
      if (currentRef) {
        currentRef.setAttribute('data-animate-id', id);
        observer.observe(currentRef);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        const currentRef = ref.current;
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      });
    };
  }, []);

  return (
    <>
      <main>
        <section className="py-10 relative min-h-screen overflow-hidden bg-[#0c0c0c] flex animate-fade-up items-center justify-center ">
          <div className="hero-content mt-[-100px] w-[42vw] flex flex-col gap-4 items-center justify-center animate-slideInUp">
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
          <div ref={headerRef} className={`content ${visibleElements.header ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="flex flex-col gap-4">
              <h1 className="text-5xl mx-36 mt-20">
                Featured Projects
              </h1>
              <p className="mx-36 text-xl text-gray-400">Building products that scale and delight</p>
            </span>
          </div>
          <div className="projects-container flex flex-wrap justify-center items-start gap-8 px-8 md:px-16 lg:px-36 py-20">

            {/* Enterprise SaaS Platform Card */}
            <div ref={card1Ref} className={`project-card group ${visibleElements.card1 ? 'animate-project-card-slideInUp' : 'opacity-0'} bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col md:w-[calc(50%-1rem)] min-w-[500px]`}>
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/inboxpilot.png"
                  alt="InboxPilot SaaS Platform"
                  fill
                  className="object-fill"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4 relative">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link target='_blank' href='https://www.inboxpilot.pro' >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
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
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    LLMs
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Prisma
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile-First E-Commerce Card */}
            <div ref={card2Ref} className={`project-card group ${visibleElements.card2 ? 'animate-slideInUp' : 'opacity-0'} bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col md:w-[calc(50%-1rem)] min-w-[500px]`}>
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/shopScribe.png"
                  alt="AI-Powered product description gen"
                  fill
                  className="object-fill  "
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col gap-4 relative">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link target='_blank' href='http://shop-scribe-xi.vercel.app/'>
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
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    MySQL
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    Prisma
                  </span>
                  <span className="px-3 py-1 bg-[#252525] text-gray-300 rounded-lg text-sm border border-gray-700">
                    LLMs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className='tech-stack min-h-screen space-y-[-40px] bg-[rgb(16,16,16)]'>
          <div ref={techref} className={`flex ${visibleElements.techref ? 'animate-slideInUp' : 'opacity-0'} flex-col justify-center p-20 px-32`}>
            <h1 className='text-5xl font-normal'>Tech Stack</h1>
            <p className='text-neutral-400 mt-2'>Tools I use to build modern web applications</p>
          </div>
          <div className='space-y-6'>

            <div className='Frontend'>
              <div className='flex items-center gap-2 py-4 px-32'>
                <div className="p-2 bg-blue-500/10 rounded-lg" bis_skin_checked="1">
                  <Image src='/frontend.svg'
                    alt='Frontend logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold'>Frontend</p>
              </div>

              {/* Pill tag list */}
              <div className={`pill px-32 pb-20 `}>
                <div  className={`pill   flex flex-wrap gap-3 items-center`}>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill1-slideInUp' : 'opacity-0'} items-center gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    React.js
                  </span>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill2-slideInUp' : 'opacity-0'} items-center gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    JavaScript
                  </span>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill3-slideInUp' : 'opacity-0'} items-center gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Tailwind CSS
                  </span>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill4-slideInUp' : 'opacity-0'} items-center gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    CSS
                  </span>
                </div>
              </div>
            </div>

            <div className='Backend'>
              <div className='flex items-center mt-[-40px] gap-2 py-4 px-32'>
                <div className="p-2 bg-violet-500/10 rounded-lg" bis_skin_checked="1">
                  <Image src='/backend.svg'
                    alt='Backend logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold'>Backend</p>
              </div>

              {/* Pill tag list */}
              <div className='pill px-32 pb-20'>
                <div className='flex flex-wrap gap-3 items-center'>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill1-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Node.js
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill2-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Next.js
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill3-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Django
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill4-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    MySQL
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill5-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Prisma
                  </span>
                </div>
              </div>
            </div>

            <div className='DevOps'>
              <div className='flex items-center mt-[-40px] gap-2 py-4 px-32'>
                <div className="p-2 bg-purple-500/10 rounded-lg" bis_skin_checked="1">
                  <Image src='/devOps.svg'
                    alt='DevOps logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold'>DevOps & Tools</p>
              </div>

              {/* Pill tag list */}
              <div className='pill px-32 pb-20'>
                <div className='flex flex-wrap gap-3 items-center'>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill1-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Vercel
                  </span>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill2-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Git & Github
                  </span>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill3-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    VS Code
                  </span>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill4-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Cursor AI
                  </span>
                </div>
              </div>
            </div>

            <div className='Other'>
              <div className='flex items-center mt-[-40px] gap-2 py-4 px-32'>
                <div className="p-2 bg-purple-500/10 rounded-lg" bis_skin_checked="1">
                  <Image src='/otherTech.svg'
                    alt='Other Technology logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold'>Other Skills & Technologies</p>
              </div>

              {/* Pill tag list */}
              <div className='pill px-32 pb-20'>
                <div className='flex flex-wrap gap-3 items-center'>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill1-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Python
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill2-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Numpy
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill3-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Pandas
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill4-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    MatplotLib
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill5-slideInUp' : 'opacity-0'} gap-2 px-4 py-2 rounded-full bg-[rgb(28,27,31)] text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Autonomous Bots
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className='Experience min-h-[70vh] min-w-screen bg-[rgb(10,10,10)] py-24 px-6'>
          <div className='max-w-4xl mx-auto'>
            <div className='mb-16'>
              <h1 className='text-4xl mb-4 md:text-5xl tracking-tight'>Experience</h1>
              <p className='text-lg text-neutral-400'>Building impactful solutions accross industries</p>
            </div>

            <div className='flex'>
              <div className='line'></div>
              <div className='flex flex-col space-y-1 pb-12 pl-8 gap-0'>
                <p className='text-neutral-400 text-lg'>December 2025 - Present</p>
                <p>Serfelitap</p>
                <p className='text-neutral-400'>Senior Full-Stack Developer</p>
                <p>Serfelitap is a smart assistant that scans all stores in Azerbaijan to find you the cheapest products.</p>
              </div>
            </div>

            <div className='flex'>
              <div className='line'></div>
              <div className='flex flex-col space-y-1 pb-12 pl-8 gap-0'>
                <p className='text-neutral-400 text-lg'>Sept 2025 - November 2025</p>
                <p>Inbox Pilot - Cold Email Personalisation SaaS</p>
                <p className='text-neutral-400'>Founder and Developer</p>
                <p>Developed Inbox Pilot using Next.js and power of GPT to generate cold personalized Emails</p>
              </div>
            </div>

            <div className='flex'>
              <div className='line'></div>
              <div className='flex flex-col space-y-1 pl-8 pb-12 gap-1'>
                <p className='text-neutral-400 text-lg'>Aug 2025-present</p>
                <p>Senior full Stack Developer and Automation Engineer</p>
                <p className='text-neutral-400'>Virtual Trading LTD</p>
                <p className='text-neutral-400 mt-3'>Automated product research for their Amazon Store via autonomous bots</p>
              </div>
            </div>
          </div>
        </section>

        <section className='CTA min-h-[35vh] min-w-screen py-32 px-24 bg-[rgb(16,16,16)]'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='pb-12'>
              <h1 className='text-5xl pb-5'>
                Let&apos;s Build Something
              </h1>
              <p className='text-[18px] text-neutral-400'>I&apos;m always interested in hearing about new projects and oppurtunities</p>
            </div>
            <div className='bg-white flex gap-2 justify-center items-center px-8 py-5 w-32 mx-[22vw] rounded-2xl p-3'>
              <Image src='email.svg'
                height={24}
                width={24}
                alt='Email Svg'
              ></Image>
              <p className='text-black'>Send Email</p>
            </div>

            <div className='flex gap-6 min-w-5xl justify-center '>

              <div className="p-2 bg-[rgb(38,38,38)] px-3 mt-6 flex justify-center items-center rounded-lg">
                <Link href="https://github.com/Hamzah-Amir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Image src='github.svg'
                    alt='Github Logo'
                    height={24}
                    width={24}
                  ></Image>
                </Link>
              </div>

              <div className="p-2 bg-[rgb(38,38,38)] px-3 mt-6 flex justify-center items-center rounded-lg">
                <Link href="https://www.linkedin.com/in/hamza-amir-024502320/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Image src='linkedIn.svg'
                    alt='Github Logo'
                    height={24}
                    width={24}
                  ></Image>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <footer className='min-h-14 text-[14px] text-neutral-400 flex justify-center items-center'>
        &copy; 2025 Hamza Amir. Built with Next.js & Tailwind CSS
      </footer>
    </>
  );
}
