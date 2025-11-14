import LegalLayout from './LegalLayout';

const Impressum = () => {
  return (
    <LegalLayout title="Impressum" intro="Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.">
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Anbieter</h2>
        <p>
          Hein &amp; Kollegen GmbH<br />
          Friedrichstraße 68<br />
          10117 Berlin<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Kontakt</h2>
        <p>
          Telefon: +49 (0)30 123 456 700<br />
          E-Mail:{' '}
          <a
            href="mailto:hello@leasepage.de"
            className="text-blue hover:underline"
          >
            hello@leasepage.de
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Vertretungsberechtigte Personen</h2>
        <p>Geschäftsführer: Jana Hein, Malik Özdemir</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Registereintrag</h2>
        <p>
          Registergericht: Amtsgericht Berlin-Charlottenburg<br />
          Registernummer: HRB 123456
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 123 456 789</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Aufsichtsbehörde</h2>
        <p>
          Medienanstalt Berlin-Brandenburg (mabb)<br />
          Postfach 850675<br />
          12531 Berlin
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
          nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
          Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
          der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Impressum;
