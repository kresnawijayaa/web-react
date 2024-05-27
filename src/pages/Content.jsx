import React, { useEffect } from 'react';
import KeenSlider from 'keen-slider';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';


function Content() {
  useEffect(() => {
    const keenSlider = new KeenSlider('#keen-slider', {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById('keen-slider-previous');
    const keenSliderNext = document.getElementById('keen-slider-next');

    const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
    const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

    keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
    keenSliderNext.addEventListener('click', () => keenSlider.next());

    keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
    keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <>
        <link
        href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
        rel="stylesheet"
      />

        <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Happy Birthday, Chika!
                </h2>

                <p className="mt-4 text-gray-700">
                As you celebrate another year of life's journey,<br/> I wish for you to discover...
                </p>

                <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rtl:rotate-180"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                    </svg>
                </button>

                <button
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                    <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                    />
                    </svg>
                </button>
                </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
                <div id="keen-slider" className="keen-slider">
                <div className="keen-slider__slide">
                    <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                    <div>
                        <img
                        alt=""
                        src={img5}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    </blockquote>
                </div>

                <div className="keen-slider__slide">
                    <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                    <div>
                        <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">A Lifetime of Happiness and Joy</p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        Wishing you a lifetime of happiness and joy, where every day is filled with laughter, love, and cherished moments. May your heart dance with delight, your spirit soar with freedom, and your life be a tapestry woven with threads of joy and contentment.
                        </p>
                        </div>
                    </div>

                    
                    </blockquote>
                </div>

                <div className="keen-slider__slide">
                    <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                    <div>
                        <img
                        alt=""
                        src={img6}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    </blockquote>
                </div>

                <div className="keen-slider__slide">
                    <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                    <div>
                        <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Strength and Resilience: Your Guiding Lights</p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        May you find strength in the face of challenges, resilience in the midst of storms, and unwavering courage as you pursue your dreams. May these qualities be your guiding lights, illuminating your path and empowering you to overcome any obstacle that comes your way.
                        </p>
                        </div>
                    </div>

                    
                    </blockquote>
                </div>

                <div className="keen-slider__slide">
                <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                    <div>
                        <img
                        alt=""
                        src={img7}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                    </blockquote>
                </div>

                <div className="keen-slider__slide">
                    <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                    >
                    <div>
                        <div className="mt-4">
                        <p className="text-2xl font-bold text-rose-600 sm:text-3xl">Dreams Fulfilled, Aspirations Soaring</p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        May this year be a symphony of fulfilled dreams, where your aspirations take flight and your heart overflows with gratitude for all that life has to offer. May you reach for the stars, embrace every opportunity, and celebrate each milestone with a smile that lights up the world.
                        </p>
                        </div>
                    </div>

                    
                    </blockquote>
                </div>

                </div>
            </div>
            </div>

            <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
                <svg
                className="size-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </button>

            <button
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
                <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
            </button>
            </div>
        </div>
        </section>
    </>
  )
}

export default Content;
