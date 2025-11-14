import LegalLayout from './LegalLayout';

const Privacy = () => {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Wir freuen uns über Ihr Interesse an LeasePage. Der Schutz Ihrer Privatsphäre ist uns wichtig, deshalb informieren wir Sie nachfolgend über den Umgang mit personenbezogenen Daten innerhalb dieses Onlineangebots."
    >
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">1. Verantwortliche Stelle</h2>
        <p>
          Hein &amp; Kollegen GmbH, Friedrichstraße 68, 10117 Berlin, Deutschland. Bei Fragen zum
          Datenschutz wenden Sie sich bitte an{' '}
          <a href="mailto:privacy@leasepage.de" className="text-blue hover:underline">
            privacy@leasepage.de
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>
        <p>
          Wir verarbeiten personenbezogene Daten, wenn Sie unsere Website besuchen, ein Formular ausfüllen
          oder mit uns kommunizieren. Dies umfasst insbesondere IP-Adressen, Kontaktdaten, Vertragsdaten
          sowie freiwillige Angaben innerhalb von Formularen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">3. Zweck der Verarbeitung</h2>
        <p>
          Die Verarbeitung erfolgt zur Bereitstellung des Onlineangebots, zur Beantwortung von Anfragen, zur
          Vorbereitung und Durchführung von Vertragsverhältnissen sowie zur Verbesserung unserer Inhalte und
          Services. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a, b und f DSGVO.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">4. Server-Logfiles</h2>
        <p>
          Bei jedem Aufruf der Website werden automatisiert Informationen erfasst, die Ihr Browser
          übermittelt. Dazu gehören Browsertyp, Betriebssystem, Referrer URL und Uhrzeit der Serveranfrage.
          Diese Daten sind nicht bestimmten Personen zuordenbar und dienen ausschließlich der Gewährleistung
          eines störungsfreien Betriebs.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">5. Drittanbieter &amp; Tracking</h2>
        <p>
          Wir setzen Analysedienste ein, um die Nutzung der Website zu verstehen und zu optimieren. Eine
          Weitergabe Ihrer personenbezogenen Daten erfolgt ausschließlich auf Basis eines Vertrages zur
          Auftragsverarbeitung und, soweit erforderlich, mit Ihrer ausdrücklichen Einwilligung.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">6. Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich
          ist oder gesetzliche Aufbewahrungspflichten bestehen. Anschließend werden die Daten gelöscht oder
          anonymisiert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung. Darüber hinaus haben Sie das Recht,
          sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-white mb-2">8. Aktualität und Änderung</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald Änderungen an unseren Verarbeitungsprozessen oder
          rechtlichen Vorgaben dies erforderlich machen. Die jeweils aktuelle Fassung finden Sie jederzeit auf
          dieser Seite.
        </p>
      </section>
    </LegalLayout>
  );
};

export default Privacy;
