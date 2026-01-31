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
    experienceref: false,
    exp1: false,
    exp2: false,
    exp3: false,
  });
  
  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const techref = useRef(null);
  const frontendref = useRef(null);
  const backendref = useRef(null);
  const devopsref = useRef(null);
  const otherref = useRef(null);
  const experienceref = useRef(null);
  const exp1Ref = useRef(null);
  const exp2Ref = useRef(null);
  const exp3Ref = useRef(null);

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
      { ref: experienceref, id: 'experienceref' },
      { ref: exp1Ref, id: 'exp1' },
      { ref: exp2Ref, id: 'exp2' },
      { ref: exp3Ref, id: 'exp3' },
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
        <section className="py-10 relative min-h-screen overflow-hidden bg-[#0c0c0c] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="hero-content mt-[-100px] w-full max-w-4xl flex flex-col gap-4 items-center justify-center animate-fade-up">
            <span className="bg-[rgb(28,27,31)] font-inter text-[#838384] border border-gray-700 rounded-2xl text-xs sm:text-sm p-[8px] px-3 sm:px-4">Available for new oppurtunities</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center">Hamza Amir</h1>
            <p className="text-[rgb(161,161,161)] text-2xl sm:text-3xl md:text-4xl text-center">Full Stack / Next.js Developer</p>
            <p className="text-[rgb(153,153,156)] text-base sm:text-lg md:text-xl font-semibold text-center px-4">Turning Complex problems into elegant solutions. I build performant and scalable web applications that users love.</p>
            <div className="gap-3 sm:gap-5 flex flex-col sm:flex-row mt-8 sm:mt-12">
              <button className="rounded-xl text-sm sm:text-[16px] px-6 sm:px-8 border-0 text-black p-4 sm:p-[20px] bg-white hover:bg-gray-100 transition-colors">View Projects</button>
              <button className="font-extrabold text-sm sm:text-[16px] bg-[#1E1B22] text-white rounded-xl px-6 sm:px-8 border-0 p-4 sm:p-[20px] hover:bg-[#2a272f] transition-colors">Get in Touch</button>
            </div>
          </div>
        </section>

        <section className="projects bg-black min-h-screen">
          <div ref={headerRef} className={`content ${visibleElements.header ? 'animate-slideInUp' : 'opacity-0'}`}>
            <span className="flex flex-col gap-4 px-4 sm:px-8 md:px-16 lg:px-36">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mt-12 sm:mt-16 md:mt-20">
                Featured Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-400">Building products that scale and delight</p>
            </span>
          </div>
          <div className="projects-container flex flex-wrap justify-center items-start gap-6 sm:gap-8 px-4 sm:px-8 md:px-16 lg:px-36 py-12 sm:py-16 md:py-20">

            {/* Enterprise SaaS Platform Card */}
            <div ref={card1Ref} className={`project-card group ${visibleElements.card1 ? 'animate-project-card-slideInUp' : 'opacity-0'} bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-1rem)] max-w-[600px]`}>
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
            <div ref={card2Ref} className={`project-card group ${visibleElements.card2 ? 'animate-project-card-slideInUp' : 'opacity-0'} bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col w-full md:w-[calc(50%-1rem)] max-w-[600px]`}>
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
          <div ref={techref} className={`flex ${visibleElements.techref ? 'animate-slideInUp' : 'opacity-0'} flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 px-4 sm:px-8 md:px-16 lg:px-32`}>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-normal'>Tech Stack</h1>
            <p className='text-neutral-400 mt-2 text-sm sm:text-base md:text-lg'>Tools I use to build modern web applications</p>
          </div>
          <div className='space-y-6'>

            <div className='Frontend'>
              <div className='flex items-center gap-2 py-4 px-4 sm:px-8 md:px-16 lg:px-32'>
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Image src='/frontend.svg'
                    alt='Frontend logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold text-sm sm:text-base'>Frontend</p>
              </div>

              {/* Pill tag list */}
              <div className={`pill px-4 sm:px-8 md:px-16 lg:px-32 pb-12 sm:pb-16 md:pb-20`}>
                <div className={`pill flex flex-wrap gap-2 sm:gap-3 items-center`}>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill1-slideInUp' : 'opacity-0'} items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    React.js
                  </span>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill2-slideInUp' : 'opacity-0'} items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    JavaScript
                  </span>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill3-slideInUp' : 'opacity-0'} items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Tailwind CSS
                  </span>
                  <span ref={frontendref} className={`inline-flex ${visibleElements.frontendref ? 'animate-pill4-slideInUp' : 'opacity-0'} items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    CSS
                  </span>
                </div>
              </div>
            </div>

            <div className='Backend'>
              <div className='flex items-center mt-[-40px] gap-2 py-4 px-4 sm:px-8 md:px-16 lg:px-32'>
                <div className="p-2 bg-violet-500/10 rounded-lg">
                  <Image src='/backend.svg'
                    alt='Backend logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold text-sm sm:text-base'>Backend</p>
              </div>

              {/* Pill tag list */}
              <div className='pill px-4 sm:px-8 md:px-16 lg:px-32 pb-12 sm:pb-16 md:pb-20'>
                <div className='flex flex-wrap gap-2 sm:gap-3 items-center'>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill1-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Node.js
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill2-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Next.js
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill3-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Django
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill4-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    MySQL
                  </span>
                  <span ref={backendref} className={`inline-flex items-center ${visibleElements.backendref ? 'animate-pill5-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Prisma
                  </span>
                </div>
              </div>
            </div>

            <div className='DevOps'>
              <div className='flex items-center mt-[-40px] gap-2 py-4 px-4 sm:px-8 md:px-16 lg:px-32'>
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Image src='/devOps.svg'
                    alt='DevOps logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold text-sm sm:text-base'>DevOps & Tools</p>
              </div>

              {/* Pill tag list */}
              <div className='pill px-4 sm:px-8 md:px-16 lg:px-32 pb-12 sm:pb-16 md:pb-20'>
                <div className='flex flex-wrap gap-2 sm:gap-3 items-center'>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill1-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Vercel
                  </span>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill2-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Git & Github
                  </span>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill3-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    VS Code
                  </span>
                  <span ref={devopsref} className={`inline-flex items-center ${visibleElements.devopsref ? 'animate-pill4-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Cursor AI
                  </span>
                </div>
              </div>
            </div>

            <div className='Other'>
              <div className='flex items-center mt-[-40px] gap-2 py-4 px-4 sm:px-8 md:px-16 lg:px-32'>
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Image src='/otherTech.svg'
                    alt='Other Technology logo'
                    width={24}
                    height={24}
                  >
                  </Image></div>
                <p className='font-bold text-sm sm:text-base'>Other Skills & Technologies</p>
              </div>

              {/* Pill tag list */}
              <div className='pill px-4 sm:px-8 md:px-16 lg:px-32 pb-12 sm:pb-16 md:pb-20'>
                <div className='flex flex-wrap gap-2 sm:gap-3 items-center'>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill1-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Python
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill2-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Numpy
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill3-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Pandas
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill4-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    MatplotLib
                  </span>
                  <span ref={otherref} className={`inline-flex items-center ${visibleElements.otherref ? 'animate-pill5-slideInUp' : 'opacity-0'} gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[rgb(28,27,31)] text-xs sm:text-sm text-[#d1d1d1] border border-gray-700 shadow-sm hover:scale-105 transition-transform duration-200`}>
                    Autonomous Bots
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className='Experience min-h-[70vh] w-full bg-[rgb(10,10,10)] py-12 sm:py-16 md:py-24 px-4 sm:px-6'>
          <div className='max-w-4xl mx-auto'>
            <div ref={experienceref} className={`mb-12 sm:mb-16 ${visibleElements.experienceref ? 'animate-slideInUp' : 'opacity-0'}`}>
              <h1 className='text-3xl sm:text-4xl md:text-5xl mb-4 tracking-tight'>Experience</h1>
              <p className='text-base sm:text-lg text-neutral-400'>Building impactful solutions accross industries</p>
            </div>

            <div ref={exp1Ref} className={`flex ${visibleElements.exp1 ? 'animate-experience-item' : 'opacity-0'}`}>
              <div className='line'></div>
              <div className='flex flex-col space-y-1 pb-8 sm:pb-12 pl-4 sm:pl-8 gap-0'>
                <p className='text-neutral-400 text-sm sm:text-base md:text-lg'>December 2025 - Present</p>
                <p className='text-base sm:text-lg font-semibold'>Serfelitap</p>
                <p className='text-neutral-400 text-sm sm:text-base'>Senior Full-Stack Developer</p>
                <p className='text-sm sm:text-base text-neutral-300 mt-2'>Serfelitap is a smart assistant that scans all stores in Azerbaijan to find you the cheapest products.</p>
              </div>
            </div>

            <div ref={exp2Ref} className={`flex ${visibleElements.exp2 ? 'animate-experience-item-delay-1' : 'opacity-0'}`}>
              <div className='line'></div>
              <div className='flex flex-col space-y-1 pb-8 sm:pb-12 pl-4 sm:pl-8 gap-0'>
                <p className='text-neutral-400 text-sm sm:text-base md:text-lg'>Sept 2025 - November 2025</p>
                <p className='text-base sm:text-lg font-semibold'>Inbox Pilot - Cold Email Personalisation SaaS</p>
                <p className='text-neutral-400 text-sm sm:text-base'>Founder and Developer</p>
                <p className='text-sm sm:text-base text-neutral-300 mt-2'>Developed Inbox Pilot using Next.js and power of GPT to generate cold personalized Emails</p>
              </div>
            </div>

            <div ref={exp3Ref} className={`flex ${visibleElements.exp3 ? 'animate-experience-item-delay-2' : 'opacity-0'}`}>
              <div className='line'></div>
              <div className='flex flex-col space-y-1 pl-4 sm:pl-8 pb-8 sm:pb-12 gap-1'>
                <p className='text-neutral-400 text-sm sm:text-base md:text-lg'>Aug 2025-present</p>
                <p className='text-base sm:text-lg font-semibold'>Senior full Stack Developer and Automation Engineer</p>
                <p className='text-neutral-400 text-sm sm:text-base'>Virtual Trading LTD</p>
                <p className='text-neutral-300 text-sm sm:text-base mt-3'>Automated product research for their Amazon Store via autonomous bots</p>
              </div>
            </div>
          </div>
        </section>

        <section className='CTA min-h-[35vh] w-full py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-[rgb(16,16,16)]'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='pb-8 sm:pb-12'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl pb-3 sm:pb-5'>
                Let&apos;s Build Something
              </h1>
              <p className='text-sm sm:text-base md:text-[18px] text-neutral-400 px-4'>I&apos;m always interested in hearing about new projects and oppurtunities</p>
            </div>
            <div className='bg-white flex gap-2 justify-center items-center px-6 sm:px-8 py-4 sm:py-5 w-auto sm:w-32 mx-auto rounded-2xl p-3 hover:bg-gray-100 transition-colors cursor-pointer'>
              <Image src='email.svg'
                height={24}
                width={24}
                alt='Email Svg'
              ></Image>
              <p className='text-black text-sm sm:text-base'>Send Email</p>
            </div>

            <div className='flex gap-4 sm:gap-6 justify-center mt-6'>

              <div className="p-2 bg-[rgb(38,38,38)] px-3 flex justify-center items-center rounded-lg hover:bg-[rgb(48,48,48)] transition-colors">
                <Link href="https://github.com/Hamzah-Amir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Image src='github.svg'
                    alt='Github Logo'
                    height={24}
                    width={24}
                  ></Image>
                </Link>
              </div>

              <div className="p-2 bg-[rgb(38,38,38)] px-3 flex justify-center items-center rounded-lg hover:bg-[rgb(48,48,48)] transition-colors">
                <Link href="https://www.linkedin.com/in/hamza-amir-024502320/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Image src='linkedIn.svg'
                    alt='LinkedIn Logo'
                    height={24}
                    width={24}
                  ></Image>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <footer className='min-h-14 text-xs sm:text-sm text-neutral-400 flex justify-center items-center px-4 py-6 text-center'>
        &copy; 2025 Hamza Amir. Built with Next.js & Tailwind CSS
      </footer>
    </>
  );
}
