import React from 'react'

const CaraKamiBekerja = () => {

  return (
    <section className='pb-12'>
        <div className="container relative mt-[40px] mx-auto px-4 lg:mx-[100px] lg:px-[100px] z-10 mb-[40px]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start w-full">
                {/* Left Side - Description */}
                <div className="w-full lg:w-1/3 space-y-3 lg:space-y-4">
                  <h1 className="text-[20px] lg:text-[32px] font-extrabold text-black leading-tight">
                      Cara Kami Bekerja               
                  </h1>
                  <div className="flex flex-col gap-[15px] lg:gap-[20px]">
                      <p className='text-[12px] lg:text-[18px] text-black font-semibold leading-relaxed'>
                        Bagi Corvidian, Think Fast, Fly High bukan sekadar jargon, melainkan landasan cara kami berpikir, mengambil keputusan, dan memberikan solusi.
                      </p>
                  </div>
                </div>

                {/* Right Side - Value Tags */}
                <div className="flex-1 flex flex-col gap-2 items-center lg:pt-2 w-full lg:w-1/2">
                    {/* Row 1 */}
                    <div className="flex flex-row gap-2 w-full justify-center">
                        <div className="px-4 lg:px-6 py-1 rounded-lg shadow-xl bg-white">
                            <span className="text-[18px] lg:text-[30px] font-extrabold" style={{ color: '#1578CB' }}>
                                Clarity
                            </span>
                        </div>

                        <div className="px-4 lg:px-6 py-1 rounded-lg shadow-xl h-fit bg-white">
                            <span className="text-[14px] lg:text-[20px] font-extrabold" style={{ color: '#1578CB' }}>
                                Human-Friendly
                            </span>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-row gap-2 w-full justify-center">
                        <div className="px-4 lg:px-6 py-1 rounded-lg shadow-xl bg-white">
                            <span className="text-[24px] lg:text-[40px] font-extrabold" style={{ color: '#1578CB' }}>
                                Agile
                            </span>
                        </div>

                        <div className="px-4 lg:px-6 py-1 rounded-lg shadow-xl h-fit bg-white">
                            <span className="text-[16px] lg:text-[25px] font-extrabold" style={{ color: '#1578CB' }}>
                                Collaboration
                            </span>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-row gap-2 w-full justify-center">
                        <div className="px-4 lg:px-6 py-1 rounded-lg shadow-xl h-fit bg-white">
                            <span className="text-[14px] lg:text-[20px] font-extrabold" style={{ color: '#1578CB' }}>
                                Human-Friendly
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CaraKamiBekerja