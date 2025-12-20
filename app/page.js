'use client'

export default function Home() {

  return (
  <>
      <main>
        <section className="hero flex  bg-[rgb(12,12,12)] min-h-screen flex-col items-center justify-center h-screen">
          <div className="hero-bg ">
            <div className="hero-content flex flex-col items-center justify-center">
              <span className="bg-[rgb(28,27,31)] font-inter text-[#838384] border border-gray-700 rounded-xl p-2">Available for new oppurtunities</span>
              <h1 className="text-7xl font-bold text-white">Hamza Amir</h1>
              <p className="text-white">Full Stack/Next.js Developer</p>
              <p className="text-white">Turning Complex problems into elegant solutions. I build performant and scalable web applications that users love.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
