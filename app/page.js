'use client'

export default function Home() {

  return (
    <>
      <main>
        <section className="hero flex bg-[rgb(12,12,12)] bg-gradient-to-t from-[rgb(119,30,122)] via-[rgb(175,101,207)] to-[rgb(162,7,252)] min-h-screen flex-col items-center justify-center h-screen ">
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
      </main>
    </>
  );
}
