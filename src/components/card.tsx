import Footer from "./footer";

export default function Card() {
  return (
    <div className="bg-black  h-72 rounded-lg">
      <div className="flex p-2 gap-1">
        <div className="rounded-full">
          <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="rounded-full">
          <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="rounded-full">
          <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full" />
        </div>
      </div>
      <div className="card__content h-full">
        <section className="bg-black text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Kickstart about me
              </h2>

              <p className="mt-4 text-gray-300">
                Node.js developer specializing in messaging automation, JWT
                authentication, and payment integration. Experienced with AWS
                S3, Cloudinary, Mocha testing, and React for e-commerce
                interfaces.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-x-blue-950 hover:shadow-blue-950"
                href="https://www.rocketseat.com.br/"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-slate-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">Rockeseat</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Rocketseat graduate using JavaScript, React, React Native, and
                  Node.js. Working with APIs, and implementing clean, scalable
                  code practices.
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-x-blue-950 hover:shadow-blue-950"
                href="https://cdn-kultivi.s3.amazonaws.com/users/fc8a2166-3f48-4d6a-ba78-cb026eb57b5b/certificates/a4508c16-a79a-4de4-86bd-5ad8be6727c0.pdf"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-slate-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">Kultivi</h2>

                <p className="mt-1 text-sm text-gray-300">
                  I improved my English proficiency at Kultivi, focusing on
                  grammar, vocabulary, and communication skills. Using English
                  professionally
                </p>
              </a>
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-x-blue-950 hover:shadow-blue-950"
                href="https://github.com/Planton-land"
                target="blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-slate-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Planton land
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  React-based web application with routing implemented using
                  react-router-dom. Manages the user state and sets up the
                  routes for the application.
                </p>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

Card;
