const Contact = () => {
  return (
    <section id="contact" className="common-padding bg-zinc border-t border-gray-300/20">
      <div className="screen-max-width grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-gray">Kontakt</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            Lass uns herausfinden, wie LeasePage dein Unternehmen nach vorne bringt.
          </h2>
          <p className="text-gray text-lg">
            Wir melden uns innerhalb eines Werktags mit einem konkreten Vorschlag für die nächsten Schritte.
            Telefonisch, per Videocall oder ganz unkompliziert per Mail.
          </p>

          <ul className="space-y-3 text-gray text-base">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue" aria-hidden="true"></span>
              Individuelle Strategie-Session
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue" aria-hidden="true"></span>
              Transparente Kosten pro Monat oder Projekt
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue" aria-hidden="true"></span>
              Persönlicher Ansprechpartner
            </li>
          </ul>

          <div>
            <p className="text-xl font-semibold text-white">Direktkontakt</p>
            <p className="text-gray">
              +49 (0)30 123 456 700<br />
              hello@leasepage.de
            </p>
          </div>
        </div>

        <form className="bg-black/40 border border-gray-300/20 rounded-3xl p-8 backdrop-blur self-center w-full">
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-semibold text-white">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder="Max Mustermann"
                className="rounded-xl bg-transparent border border-gray-300/40 px-4 py-3 text-gray focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm font-semibold text-white">
                E-Mail
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="dein.name@unternehmen.de"
                className="rounded-xl bg-transparent border border-gray-300/40 px-4 py-3 text-gray focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-semibold text-white">
                Projektidee
              </label>
              <textarea
                id="contact-message"
                rows="4"
                placeholder="Erzähl uns kurz, was du vorhast."
                className="rounded-2xl bg-transparent border border-gray-300/40 px-4 py-3 text-gray focus:outline-none focus:ring-2 focus:ring-blue resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue text-white font-semibold tracking-wide hover:bg-blue-200 transition-colors duration-200"
            >
              Nachricht senden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
