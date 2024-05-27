// src/pages/Home.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import img1 from '../assets/img1.jpeg';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error === false) {
          setError(true);
        } else {
          navigate('/content');
        }
      };

  return (
    <>
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative h-80 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
            alt=""
            src={img1}
            className="absolute inset-0 h-full w-full object-cover"
            />
        </div>

        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Uhh... Hello, who's there?</h1>

            <p className="mt-4 text-gray-500">
            To ensure that you are the rightful recipient of this little gift, please enter the affectionate nickname I usually use for you!
            </p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
                <label htmlFor="email" className="sr-only">Email</label>

                <div className="relative">
                <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="your nickname"
                />
                {error && (
                    <>
                  <p className="mt-2 ml-2 text-sm text-red-600">Actually, any answer is fine, but try smiling first! :)
                  <br/>Then, click the "continue" button again.</p>
                    </>
                )}
                </div>
            </div>

            <div className="text-center">
                <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-12 py-3 mt-4 text-sm font-medium text-white"
                >
                Continue
                </button>
            </div>
            </form>
        </div>

        
    </section>
    </>
  );
}

export default Home;
