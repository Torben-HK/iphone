import LegalLayout from './LegalLayout';

const Accessibility = () => {
  return (
    <LegalLayout
      title="Barrierefreiheit"
      intro="LeasePage ist bestrebt, ein digitales Angebot zu schaffen, das für möglichst viele Menschen ohne Hindernisse nutzbar ist. Dieses Statement beschreibt den aktuellen Stand unserer Maßnahmen."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Umgesetzte Maßnahmen</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Responsive Layouts und skalierbare Typografie für unterschiedliche Bildschirmgrößen.</li>
          <li>Kontraste, die die Anforderungen der WCAG 2.1 AA erfüllen.</li>
          <li>Tastaturbedienbarkeit aller interaktiven Elemente.</li>
          <li>Beschreibende Links und Alternativtexte für aussagekräftige Medien.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Geplante Verbesserungen</h2>
        <p>
          Wir arbeiten kontinuierlich daran, zusätzliche Untertitel, deutsche Gebärdensprache und vereinfachte
          Sprache anzubieten. Größere Inhaltsbereiche werden schrittweise auditierbar gemacht.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Kompatibilität</h2>
        <p>
          Das Angebot wurde auf aktuellen Versionen von Chrome, Safari und Firefox geprüft und unterstützt die
          gängigen Betriebssysteme Android, iOS, macOS und Windows. Ältere Browserversionen könnten
          Einschränkungen aufweisen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Feedback &amp; Kontakt</h2>
        <p>
          Haben Sie Barrieren entdeckt? Bitte schreiben Sie uns an{' '}
          <a href="mailto:accessibility@leasepage.de" className="text-blue hover:underline">
            accessibility@leasepage.de
          </a>{' '}
          oder telefonisch an +49 (0)30 123 456 701. Wir melden uns in der Regel innerhalb von zwei
          Werktagen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Schlichtungsstelle</h2>
        <p>
          Sollten Sie nach Rückmeldung von uns weiterhin impedimente feststellen, können Sie sich an die
          Schlichtungsstelle des Bundesbeauftragten für die Belange von Menschen mit Behinderungen wenden.
          Weitere Informationen finden Sie unter{' '}
          <a href="https://www.behindertenbeauftragter.de" className="text-blue hover:underline" target="_blank" rel="noreferrer">
            www.behindertenbeauftragter.de
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
};

export default Accessibility;
