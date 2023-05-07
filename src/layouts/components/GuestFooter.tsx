import React from 'react';

export default function GuestFooter() {
  return (
    <footer className="mt-20 bg-neutral-100 text-center text-neutral-800  lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6  lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with me or view other project on github:</span>
        </div>
        <div className="flex justify-center">
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/damian-bigos-99497b213/"
            className="mr-6 text-neutral-800 dark:text-neutral-800"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          {/* GITHUB */}
          <a
            href="https://github.com/DamianBigos1500"
            className="text-neutral-800 dark:text-neutral-800"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-4 w-4"
              >
                <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
              Laravel - Nextjs ecommerce project
            </h6>
            <p>
              THIS IS NOT A REAL WEBSITE. YOU DON'T BUY HERE REAL PRODUCTS. I
              CREATE THIS WEBSITE TO IMPROVE MY WEB-DEV SKILLS
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Ecommerce
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-neutral-800 dark:text-neutral-800">
                React
              </a>
            </p>

            <p className="mb-4">
              <a href="#!" className="text-neutral-800 dark:text-neutral-800">
                Next js
              </a>
            </p>

            <p>
              <a href="#!" className="text-neutral-800 dark:text-neutral-800">
                Laravel
              </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>

            <p className="mb-4 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-5 w-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              damianbigos1500@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-400">
        <span>© 2023 Copyright:</span>
        <span className="font-semibold text-neutral-800 dark:text-neutral-800">
          {' '}
          Damian Bigos
        </span>
      </div>
    </footer>
  );
}
