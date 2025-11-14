import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LegalLayout = ({ title, intro, children }) => {
  return (
    <main className="bg-black min-h-screen text-gray">
      <section className="screen-max-width sm:px-10 px-5 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-sm text-gray-200 hover:text-white transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300/40">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M15 19l-7-7 7-7" />
              <path d="M8 12h12" />
            </svg>
          </span>
          <span>Zurueck zur Startseite</span>
        </Link>

        <p className="uppercase tracking-[0.2em] text-xs text-gray-200 mt-10">LeasePage</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mt-6">{title}</h1>
        {intro && (
          <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
            {intro}
          </p>
        )}

        <div className="mt-12 flex flex-col gap-8 text-sm sm:text-base leading-relaxed text-gray-200">
          {children}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default LegalLayout;
