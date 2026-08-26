import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white md:bg-[url('/images/footerLinksbackground.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[url('/images/footerLinksbackground.jpeg')] bg-no-repeat bg-cover bg-fixed md:bg-none">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600">Politique de confidentialité</h1>
          <p className="mt-2 text-sm text-gray-500">
            Entrée en vigueur : 22 août 2026 — Version harmonisée avec les CGU/CGV
          </p>

          <div className="mt-10 space-y-8 text-gray-700 leading-relaxed text-justify">
            <article>
              <h2 className="text-xl font-bold text-gray-900">
                1. Objet de la politique et responsable du traitement
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  La présente Politique de confidentialité décrit la manière dont GOHAPPYGO
                  collecte, utilise, conserve, protège et, lorsque cela est nécessaire, partage
                  les données à caractère personnel des personnes utilisant son site internet, son
                  application mobile et les services associés (ensemble, la « Plateforme »).
                </p>
                <p>
                  GOHAPPYGO agit en qualité de responsable du traitement pour les traitements
                  qu&apos;elle détermine dans le cadre de l&apos;exploitation de la Plateforme. La
                  société GOHAPPYGO est [DÉNOMINATION SOCIALE / FORME], immatriculée au RCS de
                  Lille Métropole sous le numéro [IMMATRICULATION], dont le siège social est situé
                  [ADRESSE].
                </p>
                <p>
                  La Plateforme met en relation des personnes physiques majeures effectuant le
                  même vol vers la même destination : le « Voyageur Partageur », qui dispose
                  d&apos;une capacité inutilisée dans sa franchise bagage, et le « Voyageur
                  Réservataire », qui souhaite bénéficier de cette capacité. GOHAPPYGO intervient
                  comme opérateur de plateforme et facilitateur de la mise en relation ; elle
                  n&apos;est pas transporteur de bagages et ne prend pas possession du Bagage.
                </p>
                <p>
                  La présente Politique doit être lue conjointement avec les{' '}
                  <a href="/terms-of-use" className="text-blue-600 underline">
                    Conditions Générales d&apos;Utilisation et de Vente
                  </a>{' '}
                  (« CGU/CGV »), la politique relative aux cookies et, le cas échéant, les
                  documents d&apos;information relatifs à l&apos;assurance ou aux dispositifs de
                  protection effectivement proposés.
                </p>
                <p>
                  L&apos;utilisation de la Plateforme n&apos;emporte pas, à elle seule,
                  consentement à tous les traitements de données. Lorsque le consentement
                  constitue la base légale requise, notamment pour certains cookies ou
                  communications commerciales, il est recueilli séparément.
                </p>
                <p className="font-semibold text-gray-900">
                  GOHAPPYGO ne vend pas les données personnelles de ses Utilisateurs.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">2. Catégories de données collectées</h2>
              <div className="mt-3 space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    2.1. Données fournies directement par l&apos;Utilisateur
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5">
                    <li>
                      Données d&apos;identification et de compte : nom, prénom, adresse
                      électronique, numéro de téléphone, photo de profil, identifiant, préférences
                      et paramètres du compte.
                    </li>
                    <li>
                      Données nécessaires à la vérification de l&apos;identité et de
                      l&apos;éligibilité : informations et justificatifs d&apos;identité demandés
                      par GOHAPPYGO ou par un prestataire habilité, notamment une pièce
                      d&apos;identité lorsque cette vérification est nécessaire.
                    </li>
                    <li>
                      Données relatives au paiement ou au versement : informations nécessaires au
                      traitement des paiements et, pour le Voyageur Partageur, coordonnées
                      bancaires requises pour recevoir les sommes dues. Les données complètes de
                      carte bancaire sont traitées par le prestataire de paiement lorsqu&apos;il en
                      assure directement la collecte.
                    </li>
                    <li>
                      Contenus publiés ou transmis : annonces, descriptions, photographies du
                      Bagage ou de son contenu lorsque la fonctionnalité l&apos;exige, notes,
                      avis, commentaires, messages et pièces communiquées au support.
                    </li>
                    <li>
                      Données communiquées dans le cadre d&apos;une réclamation, d&apos;un litige,
                      d&apos;un signalement ou d&apos;un sinistre : photographies, captures
                      d&apos;écran, vidéos, justificatifs, factures et échanges utiles à
                      l&apos;instruction du dossier.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    2.2. Données relatives aux voyages et aux Transactions
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5">
                    <li>
                      Informations sur le vol : aéroports ou villes de départ et d&apos;arrivée,
                      date et heure du voyage, numéro de vol et compagnie aérienne lorsque ces
                      informations sont nécessaires au Service.
                    </li>
                    <li>
                      Informations relatives au Partage de franchise bagage : capacité proposée ou
                      recherchée, poids déclaré, nature et caractéristiques pertinentes du Bagage,
                      prix ou participation financière et état de la Réservation.
                    </li>
                    <li>
                      Historique des Réservations et Transactions : confirmations, annulations,
                      remises, restitutions, contestations et informations nécessaires au suivi du
                      Service.
                    </li>
                    <li>
                      Statistiques dérivées de l&apos;utilisation de la Plateforme, par exemple le
                      nombre de Transactions réalisées ou le taux d&apos;annulation, lorsqu&apos;elles
                      sont nécessaires à la sécurité, à l&apos;amélioration du Service ou à
                      l&apos;information des Utilisateurs.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    2.3. Selfie de confirmation et photographies de sécurité
                  </p>
                  <p className="mt-2">
                    Lorsque cette fonctionnalité est activée pour une Transaction, les deux
                    voyageurs réalisent, au moment de leur rencontre à l&apos;aéroport, un selfie
                    de confirmation directement au moyen de l&apos;Application. Ce selfie est pris
                    et stocké par l&apos;Application pour les finalités de sécurité, de
                    traçabilité et de preuve liées à la Transaction et, lorsque les documents
                    contractuels applicables le prévoient, pour l&apos;instruction d&apos;une
                    réclamation, d&apos;un litige ou d&apos;un dossier d&apos;assurance. Le selfie
                    est conservé pendant une durée de quatre-vingt-dix (90) jours à compter de sa
                    collecte, puis automatiquement et définitivement supprimé. Toutefois, lorsqu&apos;une
                    réclamation, un litige ou un sinistre a été déclaré avant l&apos;expiration de
                    ce délai, les éléments strictement nécessaires à l&apos;instruction du dossier
                    peuvent être conservés au-delà des 90 jours, pendant la durée nécessaire à son
                    traitement et, le cas échéant, à la constatation, à l&apos;exercice ou à la
                    défense de droits en justice, conformément à la réglementation applicable.
                  </p>
                  <p className="mt-2">
                    Le selfie de confirmation n&apos;est pas destiné à être publié sur le profil
                    des Utilisateurs. GOHAPPYGO n&apos;utilise pas ce selfie à des fins
                    publicitaires.
                  </p>
                  <p className="mt-2 italic text-gray-500">
                    Point à confirmer avant publication : préciser si un traitement biométrique de
                    reconnaissance faciale est réalisé. Si aucun traitement de reconnaissance
                    faciale n&apos;est effectué, l&apos;indiquer expressément.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    2.4. Données collectées lors de l&apos;utilisation de la Plateforme
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5">
                    <li>
                      Données de connexion et de sécurité : adresse IP, dates et heures
                      d&apos;accès, journaux techniques, informations relatives à la connexion et
                      à l&apos;appareil ou au navigateur lorsque nécessaires au fonctionnement et
                      à la sécurité.
                    </li>
                    <li>Historique de recherche et interactions avec les fonctionnalités de la Plateforme.</li>
                    <li>
                      Données relatives au support : canal utilisé, contenu des échanges, date et
                      heure des communications.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">2.5. Données provenant de tiers</p>
                  <p className="mt-2">
                    GOHAPPYGO peut recevoir des données de ses prestataires lorsque cela est
                    nécessaire à la fourniture du Service, notamment de prestataires de paiement,
                    de vérification d&apos;identité ou, lorsqu&apos;un dispositif d&apos;assurance
                    ou de protection est effectivement applicable, de l&apos;assureur ou du
                    gestionnaire concerné. La nature exacte des données reçues dépend des services
                    effectivement utilisés.
                  </p>
                </div>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                3. Finalités et bases légales des traitements
              </h2>
              <p className="mt-3">
                GOHAPPYGO traite les données personnelles uniquement pour des finalités
                déterminées, explicites et légitimes. Selon le traitement concerné, la base légale
                peut être l&apos;exécution du contrat, le respect d&apos;une obligation légale,
                l&apos;intérêt légitime de GOHAPPYGO ou le consentement de l&apos;Utilisateur.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="p-3 font-semibold text-gray-900 border-b border-gray-200">
                        Traitement
                      </th>
                      <th className="p-3 font-semibold text-gray-900 border-b border-gray-200">
                        Finalité
                      </th>
                      <th className="p-3 font-semibold text-gray-900 border-b border-gray-200">
                        Base légale
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        'Création et gestion du compte',
                        "Créer le compte, authentifier l'Utilisateur, gérer son profil et lui permettre d'accéder aux Services.",
                        'Exécution du contrat / mesures précontractuelles',
                      ],
                      [
                        'Mise en relation et Transactions',
                        "Publier et rechercher des annonces, permettre la Réservation, organiser la mise en relation entre voyageurs effectuant le même vol vers la même destination, suivre la remise et la restitution du Bagage.",
                        'Exécution du contrat',
                      ],
                      [
                        "Vérification d'identité et éligibilité",
                        "Vérifier l'identité, l'âge ou l'éligibilité lorsque cette vérification est nécessaire au Service, à la sécurité ou imposée par un prestataire/réglementation.",
                        'Exécution du contrat et/ou obligation légale ; intérêt légitime selon le cas',
                      ],
                      [
                        'Paiements et versements',
                        'Traiter les paiements du Voyageur Réservataire et les versements au Voyageur Partageur, prévenir les incidents de paiement et assurer le suivi comptable.',
                        'Exécution du contrat et obligations légales',
                      ],
                      [
                        'Selfie de confirmation et traçabilité',
                        'Confirmer la rencontre, sécuriser la Transaction, constituer un élément de preuve et instruire les incidents ou litiges.',
                        'Exécution du contrat et intérêt légitime de GOHAPPYGO à sécuriser la Plateforme et prévenir la fraude',
                      ],
                      [
                        'Sécurité et prévention de la fraude',
                        'Sécuriser les comptes et la Plateforme, détecter et prévenir les activités frauduleuses, abusives ou illicites et faire respecter les CGU/CGV.',
                        'Intérêt légitime ; obligation légale lorsque applicable',
                      ],
                      [
                        'Support, réclamations et litiges',
                        "Répondre aux demandes, fournir l'assistance, instruire les réclamations, gérer les litiges et défendre les droits de GOHAPPYGO ou des Utilisateurs.",
                        'Exécution du contrat, intérêt légitime et/ou obligation légale selon le cas',
                      ],
                      [
                        'Assurance ou protection, si applicable',
                        "Transmettre et instruire les éléments nécessaires à un sinistre lorsque la Transaction bénéficie effectivement d'une assurance ou d'un dispositif de protection.",
                        'Exécution du dispositif concerné et/ou obligations légales',
                      ],
                      [
                        'Amélioration et statistiques',
                        "Mesurer l'usage, améliorer les fonctionnalités, la fiabilité et l'expérience utilisateur, établir des statistiques internes.",
                        'Intérêt légitime ; consentement lorsque des traceurs soumis à consentement sont utilisés',
                      ],
                      [
                        'Communications de service',
                        'Adresser les confirmations, alertes, notifications et informations nécessaires au compte ou aux Transactions.',
                        'Exécution du contrat',
                      ],
                      [
                        'Prospection commerciale électronique',
                        "Adresser des communications promotionnelles lorsque la réglementation l'autorise.",
                        'Consentement lorsque celui-ci est requis',
                      ],
                      [
                        'Obligations légales et autorités',
                        'Respecter les obligations comptables, fiscales, réglementaires et répondre aux demandes légalement fondées des autorités.',
                        'Obligation légale',
                      ],
                      [
                        'Exercice des droits RGPD',
                        "Recevoir, vérifier et traiter les demandes d'exercice de droits.",
                        'Obligation légale',
                      ],
                    ].map(([traitement, finalite, base]) => (
                      <tr key={traitement} className="align-top odd:bg-white even:bg-gray-50/50">
                        <td className="p-3 font-medium text-gray-900 border-b border-gray-100">
                          {traitement}
                        </td>
                        <td className="p-3 text-gray-700 border-b border-gray-100">{finalite}</td>
                        <td className="p-3 text-gray-700 border-b border-gray-100">{base}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                4. Caractère obligatoire ou facultatif des données
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  Les champs identifiés comme obligatoires sont nécessaires pour créer un compte,
                  conclure ou exécuter une Transaction, traiter un paiement, satisfaire une
                  exigence réglementaire ou assurer la sécurité du Service. À défaut de fournir ces
                  informations, GOHAPPYGO peut ne pas être en mesure de créer le compte ou de
                  fournir tout ou partie du Service concerné.
                </p>
                <p>
                  Les données collectées à des fins facultatives, notamment certaines préférences
                  ou communications commerciales, n&apos;empêchent pas l&apos;accès aux Services
                  essentiels lorsque leur traitement n&apos;est pas nécessaire à l&apos;exécution
                  du contrat.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">5. Durées de conservation</h2>
              <p className="mt-3">
                GOHAPPYGO conserve les données pendant une durée n&apos;excédant pas celle
                nécessaire aux finalités pour lesquelles elles sont traitées. À l&apos;issue de la
                durée de conservation en base active, certaines données peuvent être archivées de
                manière intermédiaire lorsque leur conservation est nécessaire au respect
                d&apos;une obligation légale ou à la constatation, à l&apos;exercice ou à la
                défense de droits en justice.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="p-3 font-semibold text-gray-900 border-b border-gray-200">
                        Catégorie
                      </th>
                      <th className="p-3 font-semibold text-gray-900 border-b border-gray-200">
                        Principe de conservation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Compte et données nécessaires à l'exécution des Transactions",
                        'Pendant la relation contractuelle, puis archivage des seules données nécessaires pendant les délais légaux ou de prescription applicables.',
                      ],
                      [
                        'Données de paiement et comptables',
                        "Selon les durées imposées par la réglementation comptable, fiscale, financière et par les obligations du prestataire de paiement. Les données complètes de carte ne sont pas conservées par GOHAPPYGO lorsqu'elles sont collectées directement par le prestataire.",
                      ],
                      [
                        "Données de vérification d'identité",
                        "Pendant la durée strictement nécessaire à la vérification et, lorsqu'une conservation ultérieure est requise ou justifiée, pendant la durée prévue par la réglementation ou les procédures de sécurité applicables.",
                      ],
                      [
                        'Selfies de confirmation',
                        '90 jours à compter de la collecte. À l’issue de ce délai, les selfies sont automatiquement et définitivement supprimés. Si une réclamation, un litige ou un sinistre a été déclaré avant l’expiration des 90 jours, les éléments strictement nécessaires peuvent être conservés au-delà de ce délai pendant la durée nécessaire au traitement du dossier et, le cas échéant, à la défense de droits en justice.',
                      ],
                      [
                        'Réclamations, litiges et sinistres',
                        'Pendant le traitement du dossier, puis pendant la durée nécessaire à la défense des droits et aux obligations légales applicables.',
                      ],
                      [
                        'Journaux de connexion et données de sécurité',
                        'Pendant une durée proportionnée aux besoins de sécurité et de prévention de la fraude.',
                      ],
                      [
                        'Prospection commerciale',
                        "Jusqu'au retrait du consentement ou, selon la situation, pendant la durée autorisée à compter de la fin de la relation commerciale ou du dernier contact.",
                      ],
                      [
                        "Demandes d'exercice de droits",
                        'Pendant la durée nécessaire au traitement de la demande et à la preuve de son traitement, conformément aux obligations applicables.',
                      ],
                      [
                        'Cookies et traceurs',
                        'Selon la finalité du traceur, la réglementation applicable et les durées indiquées dans la politique cookies / le gestionnaire de consentement.',
                      ],
                    ].map(([categorie, principe]) => (
                      <tr key={categorie} className="align-top odd:bg-white even:bg-gray-50/50">
                        <td className="p-3 font-medium text-gray-900 border-b border-gray-100">
                          {categorie}
                        </td>
                        <td className="p-3 text-gray-700 border-b border-gray-100">{principe}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">6. Destinataires et sous-traitants</h2>
              <div className="mt-3 space-y-3">
                <p>
                  L&apos;accès aux données est limité aux personnes qui en ont besoin pour
                  accomplir leurs missions et dans la limite de leurs habilitations. Peuvent
                  notamment être destinataires des données, selon le Service utilisé :
                </p>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>les personnels habilités de GOHAPPYGO ;</li>
                  <li>
                    les prestataires techniques intervenant dans l&apos;hébergement, la
                    maintenance, la messagerie, les notifications, l&apos;assistance et la
                    sécurité de la Plateforme ;
                  </li>
                  <li>
                    le prestataire de services de paiement pour les opérations de paiement, de
                    versement et les contrôles associés ;
                  </li>
                  <li>le prestataire de vérification d&apos;identité lorsque GOHAPPYGO recourt à un tel service ;</li>
                  <li>
                    l&apos;assureur, le courtier ou le gestionnaire de sinistre uniquement lorsqu&apos;une
                    assurance ou un dispositif de protection est effectivement applicable à la
                    Transaction ;
                  </li>
                  <li>les conseils, auditeurs ou prestataires nécessaires à la défense des droits de GOHAPPYGO ;</li>
                  <li>
                    les autorités administratives, judiciaires, douanières, fiscales ou de sécurité
                    lorsqu&apos;une disposition légale ou une demande juridiquement fondée
                    l&apos;impose.
                  </li>
                </ul>
                <p>
                  Les prestataires agissant pour le compte de GOHAPPYGO sont contractuellement
                  tenus de traiter les données conformément aux instructions qui leur sont données
                  et aux exigences applicables en matière de confidentialité et de sécurité.
                  Lorsque certains prestataires déterminent eux-mêmes les finalités et moyens de
                  leurs traitements, ils agissent comme responsables de traitement distincts pour
                  les opérations concernées.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                7. Transferts de données hors de l&apos;Espace économique européen
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  GOHAPPYGO privilégie, lorsque cela est possible, l&apos;hébergement et le
                  traitement des données au sein de l&apos;Espace économique européen. Certains
                  prestataires peuvent toutefois traiter ou rendre accessibles certaines données
                  depuis un pays situé hors de l&apos;Espace économique européen.
                </p>
                <p>
                  Dans ce cas, GOHAPPYGO veille à ce que le transfert repose sur un mécanisme
                  reconnu par la réglementation applicable, notamment une décision
                  d&apos;adéquation de la Commission européenne ou, lorsque nécessaire, des
                  clauses contractuelles types accompagnées des mesures complémentaires
                  appropriées. Des informations sur les garanties applicables peuvent être
                  demandées à GOHAPPYGO aux coordonnées indiquées à la section 13.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">8. Cookies et autres traceurs</h2>
              <div className="mt-3 space-y-3">
                <p>
                  La Plateforme peut utiliser des cookies et technologies similaires nécessaires à
                  son fonctionnement, à la sécurité, à la mémorisation de certains choix ou à la
                  mesure de son fonctionnement. Les traceurs strictement nécessaires peuvent être
                  utilisés dans les conditions prévues par la réglementation.
                </p>
                <p>
                  Les cookies ou traceurs de mesure d&apos;audience non exemptés, de
                  personnalisation ou de publicité ne sont déposés ou lus qu&apos;après recueil du
                  consentement lorsque celui-ci est requis. L&apos;Utilisateur peut accepter,
                  refuser ou retirer son consentement au moyen de l&apos;outil de gestion des
                  cookies mis à disposition sur la Plateforme. Le refus des cookies non nécessaires
                  n&apos;empêche pas l&apos;accès aux fonctionnalités essentielles du Service.
                </p>
                <p>
                  Les informations détaillées relatives aux catégories de traceurs, à leurs
                  fournisseurs, à leurs finalités et à leurs durées de vie doivent figurer dans une
                  Politique cookies ou dans le gestionnaire de consentement accessible depuis la
                  Plateforme.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                9. Communications et prospection commerciale
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  GOHAPPYGO peut adresser aux Utilisateurs les communications nécessaires au
                  fonctionnement du compte et à l&apos;exécution des Transactions, notamment les
                  confirmations, alertes de sécurité, messages relatifs au paiement, à la
                  rencontre, à la restitution du Bagage ou au support. Ces communications de
                  service ne constituent pas, en elles-mêmes, de la prospection commerciale.
                </p>
                <p>
                  Les communications commerciales par courrier électronique, SMS ou tout autre
                  canal soumis à consentement ne sont adressées qu&apos;après obtention du
                  consentement requis. L&apos;Utilisateur peut retirer ce consentement à tout
                  moment, notamment au moyen du lien de désinscription figurant dans les
                  communications concernées ou en contactant GOHAPPYGO.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">10. Sécurité et confidentialité</h2>
              <div className="mt-3 space-y-3">
                <p>
                  GOHAPPYGO met en œuvre des mesures techniques et organisationnelles appropriées
                  afin de protéger les données contre la destruction, la perte, l&apos;altération,
                  la divulgation ou l&apos;accès non autorisé. Ces mesures sont adaptées à la
                  nature des données, aux finalités des traitements et aux risques identifiés et
                  sont réévaluées lorsque cela est nécessaire.
                </p>
                <p>
                  Les Utilisateurs doivent également contribuer à la sécurité de leur compte en
                  conservant leurs identifiants confidentiels et en signalant sans délai toute
                  suspicion d&apos;accès frauduleux.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">11. Droits des Utilisateurs</h2>
              <div className="mt-3 space-y-3">
                <p>
                  Dans les conditions et limites prévues par le RGPD et la loi Informatique et
                  Libertés, l&apos;Utilisateur peut disposer des droits suivants :
                </p>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>droit d&apos;accès aux données le concernant ;</li>
                  <li>droit de rectification des données inexactes ou incomplètes ;</li>
                  <li>droit à l&apos;effacement lorsque les conditions légales sont réunies ;</li>
                  <li>droit à la limitation du traitement ;</li>
                  <li>
                    droit d&apos;opposition aux traitements fondés sur l&apos;intérêt légitime,
                    pour des raisons tenant à sa situation particulière, et droit d&apos;opposition
                    à tout moment à la prospection commerciale ;
                  </li>
                  <li>
                    droit à la portabilité pour les traitements concernés fondés sur le
                    consentement ou le contrat et effectués à l&apos;aide de procédés automatisés ;
                  </li>
                  <li>
                    droit de retirer son consentement à tout moment pour les traitements fondés
                    sur celui-ci, sans remettre en cause la licéité du traitement effectué avant le
                    retrait ;
                  </li>
                  <li>
                    le cas échéant, droits relatifs aux décisions individuelles automatisées dans
                    les conditions prévues par la réglementation.
                  </li>
                </ul>
                <p>
                  L&apos;Utilisateur peut exercer ses droits en écrivant à{' '}
                  <a href="mailto:serviceclients@gohappygo.fr" className="text-blue-600 underline">
                    serviceclients@gohappygo.fr
                  </a>{' '}
                  ou à [ADRESSE POSTALE / CONTACT DPO À COMPLÉTER]. GOHAPPYGO peut demander les
                  informations raisonnablement nécessaires pour vérifier l&apos;identité du
                  demandeur lorsque cela est nécessaire afin d&apos;éviter une divulgation de
                  données à un tiers non autorisé.
                </p>
                <p>
                  L&apos;Utilisateur peut également introduire une réclamation auprès de la
                  Commission nationale de l&apos;informatique et des libertés (CNIL).
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">12. Données des mineurs</h2>
              <p className="mt-3">
                Les fonctionnalités transactionnelles de GOHAPPYGO sont réservées aux personnes
                âgées d&apos;au moins dix-huit (18) ans. GOHAPPYGO ne permet pas à un mineur de
                conclure une Transaction en qualité de Voyageur Réservataire ou de Voyageur
                Partageur.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                13. Contact — Protection des données
              </h2>
              <div className="mt-3">
                <p>
                  Pour toute question relative à la présente Politique, aux traitements de données
                  personnelles ou à l&apos;exercice des droits, l&apos;Utilisateur peut contacter :
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1.5">
                  <li>
                    Courriel :{' '}
                    <a
                      href="mailto:serviceclients@gohappygo.fr"
                      className="text-blue-600 underline"
                    >
                      serviceclients@gohappygo.fr
                    </a>
                  </li>
                  <li>Adresse postale : [à compléter]</li>
                  <li>Délégué à la protection des données (DPO), si désigné : [à compléter]</li>
                </ul>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                14. Modification de la Politique de confidentialité
              </h2>
              <p className="mt-3">
                GOHAPPYGO peut modifier la présente Politique afin de tenir compte de
                l&apos;évolution de la Plateforme, des Services, des prestataires ou de la
                réglementation. La version en vigueur est accessible depuis la Plateforme. En cas
                de modification substantielle affectant la manière dont les données sont traitées,
                GOHAPPYGO en informe les Utilisateurs par un moyen approprié lorsque la
                réglementation l&apos;exige.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">15. Entrée en vigueur</h2>
              <p className="mt-3">Date d&apos;entrée en vigueur : 22 août 2026.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
