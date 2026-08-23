import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-white md:bg-[url('/images/footerLinksbackground.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[url('/images/footerLinksbackground.jpeg')] bg-no-repeat bg-cover bg-fixed md:bg-none">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600">
            Conditions Générales d&apos;Utilisation et de Vente
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Entrée en vigueur : 22 août 2026
          </p>

          <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900">Préambule</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation et de Vente (ci-après les «
              Conditions ») régissent l&apos;accès et l&apos;utilisation du Site et de
              l&apos;Application GOHAPPYGO ainsi que les Transactions réalisées par leur
              intermédiaire.
            </p>
            <p>
              GOHAPPYGO exploite une plateforme collaborative de mise en relation entre voyageurs
              effectuant le même vol vers la même destination. Elle permet à un voyageur disposant
              d&apos;une capacité inutilisée dans sa franchise bagage de proposer le partage
              d&apos;une partie de cette capacité à un autre voyageur souhaitant voyager avec un
              volume ou un poids de bagages supplémentaire.
            </p>
            <p>
              GOHAPPYGO intervient en qualité d&apos;opérateur de plateforme et de facilitateur de
              la mise en relation, de la réservation, du paiement et des outils de sécurisation
              associés. GOHAPPYGO n&apos;est ni transporteur aérien, ni transporteur de bagages, ne
              prend pas possession du Bagage et n&apos;assure pas elle-même son acheminement.
            </p>
            <p>
              Les présentes Conditions sont conclues entre la société GOHAPPYGO, dont le siège
              social est situé [ADRESSE], immatriculée au RCS de [VILLE] sous le numéro
              [SIREN/RCS], ci-après « GOHAPPYGO », et toute personne physique majeure utilisant la
              Plateforme, ci-après l&apos;« Utilisateur ». Lorsque deux Utilisateurs réalisent une
              Transaction, ils sont désignés ensemble les « Parties ».
            </p>
            <p>
              Les coordonnées complètes de GOHAPPYGO figurent dans les Mentions légales accessibles
              depuis la Plateforme. Les stipulations protectrices du Code de la consommation
              s&apos;appliquent aux personnes ayant la qualité de consommateur ou de
              non-professionnel dans les conditions prévues par la réglementation.
            </p>
          </div>

          <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
            <article>
              <h2 className="text-xl font-bold text-gray-900">Article 1 — Définitions</h2>
              <dl className="mt-3 space-y-2">
                <div>
                  <dt className="font-semibold text-gray-900 inline">Application : </dt>
                  <dd className="inline">
                    application mobile GOHAPPYGO permettant d&apos;accéder à tout ou partie des
                    Services.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Bagage : </dt>
                  <dd className="inline">
                    bagage ou effet personnel appartenant au Voyageur Réservataire et remis
                    temporairement au Voyageur Partageur dans le cadre d&apos;un Partage de
                    franchise bagage, sous réserve des règles de la compagnie aérienne et de la
                    réglementation applicable.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Frais de service : </dt>
                  <dd className="inline">
                    frais facturés par GOHAPPYGO au Voyageur Réservataire en contrepartie des
                    Services fournis par la Plateforme, dont le montant est présenté avant la
                    confirmation de la Réservation.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">
                    Partage de franchise bagage :{' '}
                  </dt>
                  <dd className="inline">
                    mise à disposition occasionnelle, par un Voyageur Partageur, d&apos;une partie
                    de la capacité disponible dans sa franchise bagage au bénéfice d&apos;un
                    Voyageur Réservataire effectuant le même vol vers la même destination.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Plateforme : </dt>
                  <dd className="inline">
                    ensemble constitué du Site, de l&apos;Application et des fonctionnalités,
                    interfaces et services associés exploités par GOHAPPYGO.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Réservation : </dt>
                  <dd className="inline">
                    opération par laquelle un Voyageur Réservataire confirme sur la Plateforme son
                    souhait de bénéficier d&apos;un Partage de franchise bagage.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Services : </dt>
                  <dd className="inline">
                    fonctionnalités proposées par GOHAPPYGO, notamment la création de compte, la
                    publication et la recherche d&apos;annonces, la mise en relation, la
                    messagerie, la réservation, le paiement, les confirmations de rencontre et de
                    restitution, l&apos;assistance et, lorsqu&apos;ils sont effectivement
                    proposés, les dispositifs de protection ou d&apos;assurance.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Site : </dt>
                  <dd className="inline">
                    site internet GOHAPPYGO accessible notamment à l&apos;adresse
                    www.gohappygo.fr.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Transaction : </dt>
                  <dd className="inline">
                    ensemble des opérations réalisées sur la Plateforme dans le cadre d&apos;une
                    Réservation.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Voyageur Partageur : </dt>
                  <dd className="inline">
                    personne physique majeure, agissant à titre non professionnel, qui à
                    l&apos;occasion de son propre déplacement aérien dispose d&apos;une capacité
                    disponible dans sa franchise bagage et propose d&apos;en partager une partie.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-gray-900 inline">Voyageur Réservataire : </dt>
                  <dd className="inline">
                    personne physique majeure, agissant à titre non professionnel, qui souhaite
                    bénéficier d&apos;un Partage de franchise bagage proposé par un Voyageur
                    Partageur effectuant le même vol vers la même destination.
                  </dd>
                </div>
              </dl>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 2 — Objet, rôle et périmètre du service
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">2.1. Objet du Service. </span>
                  La Plateforme organise la mise en relation entre un Voyageur Partageur et un
                  Voyageur Réservataire effectuant le même vol vers la même destination. Le
                  Voyageur Partageur indique la capacité bagage disponible et la participation
                  financière souhaitée. Le Voyageur Réservataire recherche une capacité
                  correspondant à ses besoins et peut effectuer une Réservation.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">2.2. Rôle de GOHAPPYGO. </span>
                  GOHAPPYGO fournit les outils nécessaires au déroulement de la Transaction. Elle
                  n&apos;est pas partie aux contrats de transport aérien conclus par les
                  Utilisateurs avec leur compagnie aérienne, ne prend pas possession du Bagage et
                  ne décide pas de son acheminement.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    2.3. Caractère occasionnel du partage.{' '}
                  </span>
                  Le Partage de franchise bagage est accessoire au déplacement personnel du
                  Voyageur Partageur et ne doit pas constituer une activité habituelle ou
                  professionnelle de transport de bagages.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    2.4. Disponibilité géographique.{' '}
                  </span>
                  GOHAPPYGO peut limiter certaines fonctionnalités, notamment la possibilité de
                  proposer un Partage de franchise bagage ou de recevoir un paiement, selon le pays
                  de résidence, le pays du compte bancaire, l&apos;éligibilité du moyen de paiement
                  et les contraintes réglementaires, techniques ou contractuelles de ses
                  prestataires. Les conditions d&apos;éligibilité applicables sont affichées sur la
                  Plateforme.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 3 — Inscription, compte et vérification
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">3.1. Conditions d&apos;accès. </span>
                  Les fonctionnalités transactionnelles sont réservées aux personnes physiques
                  âgées d&apos;au moins dix-huit (18) ans, disposant de la capacité juridique
                  nécessaire et agissant à titre non professionnel.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">3.2. Création du compte. </span>
                  L&apos;Utilisateur fournit des informations exactes, complètes et à jour,
                  notamment ses nom, prénom, adresse électronique et numéro de téléphone.
                  L&apos;utilisation d&apos;une fausse identité est interdite. Le compte est
                  personnel et ne peut être cédé, loué, partagé ou transféré à un tiers.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    3.3. Vérification d&apos;identité.{' '}
                  </span>
                  GOHAPPYGO, directement ou par l&apos;intermédiaire d&apos;un prestataire
                  habilité, peut demander les justificatifs nécessaires et proportionnés à la
                  vérification de l&apos;identité, de l&apos;âge ou de l&apos;éligibilité de
                  l&apos;Utilisateur. L&apos;accès à certaines fonctionnalités peut être
                  subordonné à cette vérification.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">3.4. Sécurité du compte. </span>
                  L&apos;Utilisateur est responsable de la confidentialité de ses identifiants et
                  doit signaler sans délai toute utilisation non autorisée ou suspicion
                  d&apos;accès frauduleux à GOHAPPYGO à l&apos;adresse contact@gohappygo.fr.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">3.5. Double qualité. </span>
                  Un même Utilisateur peut, selon les Transactions, agir comme Voyageur
                  Réservataire ou Voyageur Partageur.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    3.6. Acceptation des Conditions.{' '}
                  </span>
                  La confirmation d&apos;une première Transaction suppose l&apos;acceptation
                  expresse des présentes Conditions au moyen du dispositif prévu sur la Plateforme.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 4 — Publication et consultation des annonces
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">
                    4.1. Annonce du Voyageur Partageur.{' '}
                  </span>
                  Le Voyageur Partageur peut publier une annonce indiquant notamment la date et le
                  numéro du vol, les aéroports de départ et d&apos;arrivée, la capacité bagage
                  proposée et la participation financière demandée. Il peut, lorsque la Plateforme
                  le permet, répartir sa capacité disponible entre plusieurs Voyageurs
                  Réservataires.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    4.2. Demande du Voyageur Réservataire.{' '}
                  </span>
                  Le Voyageur Réservataire peut rechercher une annonce correspondant à son vol et
                  à ses besoins. Il fournit les informations nécessaires à la Transaction,
                  notamment le poids, la nature et les caractéristiques pertinentes du Bagage
                  ainsi que, lorsque la fonctionnalité l&apos;exige, les photographies demandées.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    4.3. Exactitude des informations.{' '}
                  </span>
                  Chaque Utilisateur garantit l&apos;exactitude des informations qu&apos;il
                  publie. Il lui appartient de vérifier les règles de la compagnie aérienne, les
                  franchises autorisées, les limites de poids et les restrictions applicables.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    4.4. Contenus et photographies.{' '}
                  </span>
                  Les descriptions et photographies publiées facilitent la compréhension de
                  l&apos;offre et du Bagage. Elles doivent être sincères et aussi fidèles que
                  possible, sans se substituer aux déclarations de l&apos;Utilisateur ni aux
                  règles applicables au transport aérien.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 5 — Réservation et formation de la Transaction
              </h2>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">5.1. Processus de réservation</p>
                  <ol className="mt-2 list-decimal list-inside space-y-1.5">
                    <li>
                      Le Voyageur Réservataire sélectionne une annonce et vérifie les informations
                      essentielles de la Réservation ainsi que le montant total à payer.
                    </li>
                    <li>Il accepte les présentes Conditions et confirme sa Réservation.</li>
                    <li>
                      Lorsque l&apos;annonce prévoit une validation préalable, le Voyageur
                      Partageur accepte ou refuse la demande dans le délai indiqué. Lorsque la
                      réservation est instantanée, elle est confirmée sans validation
                      supplémentaire.
                    </li>
                    <li>
                      Le moyen de paiement du Voyageur Réservataire est débité ou autorisé selon le
                      processus indiqué par le prestataire de paiement.
                    </li>
                    <li>
                      Après confirmation, les Parties peuvent utiliser la messagerie de la
                      Plateforme pour organiser leur rencontre.
                    </li>
                  </ol>
                </div>
                <p>
                  <span className="font-semibold text-gray-900">5.2. Confirmation électronique. </span>
                  Une confirmation récapitulative est adressée aux Parties. Elle mentionne les
                  informations essentielles de la Transaction, la participation financière
                  revenant au Voyageur Partageur, le montant total acquitté par le Voyageur
                  Réservataire et les éventuelles modalités particulières applicables.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">5.3. Transactions hors Plateforme. </span>
                  Les Parties s&apos;interdisent de contourner la Plateforme pour conclure ou
                  régler hors Plateforme une Transaction initiée par son intermédiaire. Une
                  opération réalisée hors du processus GOHAPPYGO ne bénéficie pas des
                  fonctionnalités de paiement, de preuve, d&apos;assistance ou de protection
                  attachées à la Transaction sur la Plateforme.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 6 — Rencontre, remise, voyage et restitution du Bagage
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">6.1. Rencontre avant le départ. </span>
                  Les Parties conviennent d&apos;un lieu et d&apos;une heure de rencontre dans
                  l&apos;aéroport de départ, suffisamment en amont de la clôture de
                  l&apos;enregistrement pour permettre les formalités, contrôles et imprévus.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    6.2. Confirmation de la rencontre.{' '}
                  </span>
                  Lorsque cette fonctionnalité est activée pour la Transaction, les Parties
                  réalisent via l&apos;Application un selfie de confirmation. Cette photographie,
                  associée et le cas échéant horodatée à la Transaction, est utilisée à des fins de
                  sécurité, de preuve et, lorsque le contrat applicable le prévoit, de protection
                  ou d&apos;assurance.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    6.3. Remise et vérification du Bagage.{' '}
                  </span>
                  Le Voyageur Réservataire remet le Bagage au Voyageur Partageur. Celui-ci peut
                  vérifier son état extérieur apparent et son poids. Toute anomalie doit être
                  signalée immédiatement dans la Plateforme. Si le poids ou les caractéristiques
                  du Bagage diffèrent substantiellement de ceux déclarés, le Voyageur Partageur
                  peut refuser la remise. Les conséquences d&apos;un surpoids imputable à une
                  déclaration inexacte peuvent être supportées par l&apos;Utilisateur à
                  l&apos;origine de cette inexactitude, sur présentation des justificatifs utiles.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">6.4. Enregistrement et contrôles. </span>
                  Lorsque cela est nécessaire, les Parties effectuent les formalités
                  d&apos;enregistrement de manière coordonnée et se soumettent aux contrôles de la
                  compagnie aérienne et des autorités compétentes.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">6.5. Conservation pendant le voyage. </span>
                  Le Voyageur Partageur assure la garde temporaire du Bagage. Il s&apos;engage à
                  ne pas l&apos;ouvrir, à ne pas en retirer le contenu et à ne pas le remettre à un
                  tiers, sauf obligation légale, demande d&apos;une autorité compétente ou
                  intervention de la compagnie aérienne.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">6.6. Restitution. </span>
                  À destination, le Bagage est restitué au Voyageur Réservataire dans
                  l&apos;aéroport d&apos;arrivée, de préférence dès sa récupération sur le tapis
                  de livraison et avant la sortie de la zone aéroportuaire lorsque les conditions
                  le permettent.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    6.7. Confirmation de la restitution.{' '}
                  </span>
                  Lorsque la fonctionnalité est prévue, les Parties confirment la restitution via
                  l&apos;Application ou le Site. Le Voyageur Réservataire dispose de sept (7)
                  jours francs pour signaler une non-restitution ou contester la réception. À
                  défaut de signalement dans ce délai, la réception peut être considérée comme
                  validée pour les besoins du déblocage du paiement, sous réserve des droits
                  légaux et de tout litige déjà déclaré.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">6.8. Retards et imprévus. </span>
                  Chaque Partie informe l&apos;autre, dès qu&apos;elle en a connaissance, de tout
                  retard, modification ou annulation de vol ou de tout événement susceptible
                  d&apos;empêcher la rencontre, la remise ou la restitution.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 7 — Bagage, contenu et réglementation
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">7.1. Responsabilité du contenu. </span>
                  Le Voyageur Réservataire demeure responsable du contenu de son Bagage, de son
                  caractère licite et de sa conformité aux règles de la compagnie aérienne, de
                  sûreté, de sécurité et douanières applicables. Il ne doit remettre aucun Bagage
                  susceptible d&apos;exposer le Voyageur Partageur à une interdiction, une saisie,
                  une confiscation ou une sanction.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    7.2. Objets interdits ou réglementés.{' '}
                  </span>
                  Selon les pays, compagnies et circonstances, des restrictions ou interdictions
                  peuvent notamment concerner les armes et munitions, explosifs, substances
                  dangereuses ou inflammables, contrefaçons, certains médicaments, alcools et
                  tabacs, animaux, végétaux, produits alimentaires, biologiques ou périssables et,
                  plus généralement, tout objet soumis à des règles douanières ou de sûreté
                  particulières. Cette liste n&apos;est pas exhaustive.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">7.3. Vérifications préalables. </span>
                  Chaque Utilisateur doit consulter avant le voyage les règles de sa compagnie
                  aérienne et les informations des autorités aéroportuaires et douanières
                  compétentes. Les informations ou outils proposés par GOHAPPYGO, notamment une
                  éventuelle carte interactive, en ligne sur{' '}
                  <a
                    href="https://gohappygo.fr/articles-interdits"
                    className="text-blue-600 underline"
                  >
                    gohappygo.fr/articles-interdits
                  </a>
                  , sont fournis à titre indicatif et ne se substituent pas aux sources
                  officielles.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    7.4. Contrôles et conséquences d&apos;une non-conformité.{' '}
                  </span>
                  Le Bagage peut être contrôlé par la compagnie aérienne ou les autorités
                  compétentes. GOHAPPYGO ne peut ni empêcher ces contrôles ni en garantir
                  l&apos;issue. L&apos;Utilisateur responsable d&apos;une déclaration inexacte ou
                  d&apos;un contenu non conforme supporte les conséquences qui lui sont légalement
                  imputables et peut être tenu d&apos;indemniser l&apos;autre Partie du préjudice
                  directement subi et justifié.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 8 — Prix, frais de service et paiement
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">8.1. Participation financière. </span>
                  Le Voyageur Partageur indique la participation financière qu&apos;il souhaite
                  recevoir pour le Partage de franchise bagage, notamment en fonction de la
                  capacité proposée. Son montant est affiché au Voyageur Réservataire avant la
                  confirmation.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">8.2. Frais de service. </span>
                  GOHAPPYGO peut facturer au Voyageur Réservataire des Frais de service. Leur
                  montant ou leur méthode de calcul est présenté de manière distincte avant la
                  confirmation de la Réservation et accepté avec le montant total.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">8.3. Montant total. </span>
                  Le montant total payé par le Voyageur Réservataire comprend la participation
                  financière revenant au Voyageur Partageur, les Frais de service GOHAPPYGO et, le
                  cas échéant, tout autre montant clairement présenté avant validation.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">8.4. Prestataire de paiement. </span>
                  Les paiements sont traités par un prestataire de services de paiement choisi par
                  GOHAPPYGO. Les données complètes de carte bancaire sont traitées dans
                  l&apos;environnement sécurisé du prestataire lorsque celui-ci en assure
                  directement la collecte.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    8.5. Versement au Voyageur Partageur.{' '}
                  </span>
                  Le versement de la participation financière intervient après validation de la
                  Transaction, selon les délais et modalités affichés sur la Plateforme, sous
                  réserve de l&apos;éligibilité du Voyageur Partageur, des contrôles requis par le
                  prestataire et de l&apos;absence de litige justifiant une suspension.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    8.6. Éligibilité géographique et bancaire.{' '}
                  </span>
                  Le Voyageur Partageur doit fournir les coordonnées bancaires compatibles avec le
                  prestataire de paiement. Lorsque le versement n&apos;est pas disponible dans un
                  pays ou pour un compte bancaire donné, GOHAPPYGO peut limiter la fonctionnalité
                  ou appliquer une procédure spécifique annoncée avant la Transaction.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">8.7. Litige et suspension. </span>
                  En cas de litige signalé avant le versement, GOHAPPYGO peut suspendre
                  temporairement le paiement dans la mesure permise par son rôle d&apos;intermédiaire
                  et par les règles du prestataire, le temps de procéder aux vérifications
                  nécessaires.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">8.8. Fiscalité. </span>
                  Chaque Utilisateur demeure responsable des obligations fiscales, sociales et
                  déclaratives qui lui sont personnellement applicables au titre des sommes
                  perçues.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 9 — Annulation, modification, absence et non-restitution
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">
                    9.1. Annulation par le Voyageur Partageur.{' '}
                  </span>
                  L&apos;annulation par le Voyageur Partageur avant le voyage entraîne
                  l&apos;annulation de la Réservation. Les sommes dues au Voyageur Réservataire
                  sont remboursées selon les modalités présentées lors de la Réservation et sous
                  réserve des règles impératives applicables.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    9.2. Annulation par le Voyageur Réservataire.{' '}
                  </span>
                  Les conditions de remboursement applicables à l&apos;annulation par le Voyageur
                  Réservataire sont présentées avant la confirmation de la Réservation. Elles
                  précisent notamment le traitement de la participation financière et des Frais de
                  service selon le moment de l&apos;annulation et l&apos;état d&apos;avancement de
                  la Transaction.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    9.3. Absence, retard ou modification de vol.{' '}
                  </span>
                  Lorsque l&apos;absence, le retard ou la modification du vol d&apos;une Partie
                  empêche la remise du Bagage, la Transaction peut être annulée selon les
                  conditions affichées sur la Plateforme. Les Parties doivent prendre les mesures
                  raisonnables pour limiter les conséquences de l&apos;incident.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">9.4. Non-restitution. </span>
                  Toute non-restitution du Bagage doit être signalée sans délai dans
                  l&apos;Application et au service client. GOHAPPYGO peut suspendre le versement
                  non encore exécuté, recueillir les éléments de preuve disponibles et orienter les
                  Parties vers les procédures de réclamation ou de protection applicables.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">9.5. Droit de rétractation. </span>
                  Le régime du droit de rétractation applicable est déterminé au regard de la
                  qualification juridique du Service et de la réglementation en vigueur. Lorsque
                  la loi prévoit une exception ou exige une renonciation expresse pour
                  l&apos;exécution du Service avant l&apos;expiration du délai légal,
                  l&apos;information correspondante et, le cas échéant, le consentement requis
                  sont recueillis avant la conclusion de la Transaction.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 10 — Propriété et conservation du Bagage
              </h2>
              <p className="mt-3">
                Le Voyageur Réservataire demeure propriétaire de son Bagage et de son contenu
                pendant toute la Transaction. La remise au Voyageur Partageur n&apos;emporte aucun
                transfert de propriété. Le Voyageur Partageur n&apos;en assure qu&apos;une garde
                temporaire et doit le restituer, sous réserve des interventions imposées par la
                compagnie aérienne ou les autorités compétentes.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">Article 11 — Preuve et traçabilité</h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">11.1. Écrit électronique. </span>
                  L&apos;acceptation des présentes Conditions et les enregistrements électroniques
                  liés à la Transaction peuvent constituer des éléments de preuve dans les
                  conditions prévues par les articles 1365 et suivants du Code civil et par la
                  réglementation applicable.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">11.2. Données de traçabilité. </span>
                  La Plateforme peut enregistrer les informations relatives au compte, aux
                  annonces, Réservations, échanges, paiements, validations, photos ou selfies de
                  confirmation et notifications. Ces données peuvent être utilisées comme éléments
                  de preuve sous réserve des règles relatives à leur intégrité, leur conservation
                  et la protection des données personnelles.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    11.3. Photographies complémentaires.{' '}
                  </span>
                  En cas d&apos;incident, les Parties peuvent conserver des photographies
                  complémentaires du Bagage et de son état afin de documenter la situation. Leur
                  valeur probatoire est appréciée selon les circonstances et la réglementation
                  applicable.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 12 — Obligations et responsabilités des Utilisateurs
              </h2>
              <div className="mt-3 space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">12.1. Obligations communes</p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5">
                    <li>fournir des informations exactes et à jour ;</li>
                    <li>
                      respecter les présentes Conditions, les règles de la Plateforme, les lois,
                      règlements, règles douanières, de sûreté et de la compagnie aérienne ;
                    </li>
                    <li>ne pas utiliser la Plateforme à des fins frauduleuses ou illicites ;</li>
                    <li>
                      ne pas contourner les mécanismes de mise en relation et de paiement
                      sécurisés ;
                    </li>
                    <li>adopter un comportement respectueux et loyal.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    12.2. Obligations du Voyageur Partageur
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5">
                    <li>effectuer effectivement le voyage annoncé ;</li>
                    <li>
                      disposer d&apos;une franchise bagage suffisante au regard du partage
                      proposé ;
                    </li>
                    <li>
                      prendre les précautions raisonnables pour conserver le Bagage dans
                      l&apos;état dans lequel il lui a été remis ;
                    </li>
                    <li>
                      ne pas ouvrir le Bagage ni le remettre à un tiers, sauf dans les cas prévus
                      aux présentes ;
                    </li>
                    <li>
                      signaler tout incident, contrôle ou difficulté affectant le Bagage et
                      coopérer avec les autorités compétentes.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    12.3. Obligations du Voyageur Réservataire
                  </p>
                  <ul className="mt-2 list-disc list-inside space-y-1.5">
                    <li>
                      déclarer sincèrement le poids, la nature et les caractéristiques du Bagage ;
                    </li>
                    <li>ne placer dans le Bagage aucun objet interdit ou incompatible avec le voyage ;</li>
                    <li>respecter les formalités douanières et les règles de la compagnie aérienne ;</li>
                    <li>remettre un Bagage correctement fermé et adapté au voyage ;</li>
                    <li>
                      participer aux étapes de confirmation et de preuve prévues pour la
                      Transaction.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 13 — Responsabilité de GOHAPPYGO
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">13.1. Principe. </span>
                  GOHAPPYGO répond de la fourniture de ses propres Services dans les limites
                  prévues par la loi. En sa qualité d&apos;intermédiaire, elle ne répond pas de la
                  conduite personnelle des Utilisateurs, de leurs déclarations inexactes, du
                  contenu des Bagages, des décisions des compagnies aériennes ou des autorités, ni
                  des événements affectant le vol qui ne lui sont pas imputables.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    13.2. Absence de garantie de mise en relation.{' '}
                  </span>
                  GOHAPPYGO ne garantit ni qu&apos;un Utilisateur trouvera un partenaire, ni
                  qu&apos;une annonce sera acceptée, ni que le vol sera maintenu ou que la
                  rencontre pourra effectivement avoir lieu.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    13.3. Disponibilité technique et force majeure.{' '}
                  </span>
                  La Plateforme peut être temporairement interrompue pour maintenance, sécurité,
                  mise à jour ou nécessité technique. GOHAPPYGO informe les Utilisateurs lorsque
                  cela est raisonnablement possible. Sa responsabilité ne peut être engagée pour un
                  événement de force majeure ou extérieur à son contrôle raisonnable, sous réserve
                  des dispositions impératives applicables.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">13.4. Limites légales. </span>
                  Aucune stipulation des présentes Conditions ne saurait exclure ou limiter une
                  responsabilité que la loi interdit d&apos;exclure ou de limiter.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">Article 14 — Assurance et protection</h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">14.1. Principe. </span>
                  Lorsqu&apos;une assurance ou un dispositif de protection est effectivement
                  proposé ou inclus dans une Transaction, il s&apos;applique uniquement dans les
                  limites, conditions et exclusions prévues par les documents contractuels
                  correspondants.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">14.2. Garanties et exclusions. </span>
                  Les garanties, plafonds, franchises, exclusions, obligations des assurés,
                  périodes de couverture et procédures de déclaration sont exclusivement
                  déterminés par le contrat d&apos;assurance ou de protection applicable. Les
                  présentes Conditions ne peuvent étendre ces garanties.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">14.3. Documents d&apos;information. </span>
                  Le Document d&apos;Information sur le Produit d&apos;Assurance (DIPA) ainsi que
                  les conditions générales et particulières applicables sont mis à disposition
                  avant la souscription lorsque la réglementation l&apos;exige.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">14.4. Sinistres. </span>
                  En cas de sinistre, l&apos;Utilisateur suit la procédure indiquée sur la
                  Plateforme et dans les documents d&apos;assurance, respecte les délais
                  applicables et transmet les justificatifs demandés. L&apos;indemnisation relève
                  de l&apos;assureur et demeure soumise à l&apos;acceptation du dossier au regard
                  du contrat.
                </p>
                <p className="italic text-gray-500">
                  14.5. Les coordonnées de l&apos;assureur, le numéro du contrat, les garanties,
                  plafonds, franchises, exclusions, délais de déclaration et liens vers le DIPA
                  seront insérés et vérifiés à partir des documents contractuels définitifs avant
                  publication des présentes Conditions.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 15 — Avis, notation et signalements
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">15.1. Évaluation. </span>
                  Après une Transaction, les Parties peuvent être invitées à évaluer leur
                  expérience au moyen d&apos;une note pouvant aller jusqu&apos;à cinq étoiles et,
                  le cas échéant, d&apos;un commentaire.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">15.2. Publication et moyenne. </span>
                  Les notes et commentaires peuvent être affichés sur les profils selon les
                  modalités de la Plateforme. La note globale correspond à la moyenne des
                  évaluations effectivement reçues. Aucune note automatique n&apos;est attribuée
                  en l&apos;absence d&apos;évaluation.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">15.3. Modération. </span>
                  Les avis doivent être sincères, pertinents et respectueux. GOHAPPYGO ne les
                  modifie pas artificiellement, mais peut retirer ou masquer un contenu
                  manifestement illicite, frauduleux, injurieux, discriminatoire ou contraire aux
                  présentes Conditions, selon la procédure applicable.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 16 — Comportements interdits et suspension du compte
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">16.1. Comportements interdits. </span>
                  Sont notamment interdits l&apos;usurpation d&apos;identité, la fraude au
                  paiement, la publication volontaire d&apos;informations fausses, la remise
                  d&apos;objets interdits, le contournement de la Plateforme, les comportements
                  menaçants ou harcelants et toute utilisation détournant le Service de sa
                  finalité.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">16.2. Mesures de protection. </span>
                  En cas de risque pour la sécurité, de fraude présumée ou de manquement grave,
                  GOHAPPYGO peut suspendre temporairement un compte ou une Transaction dans la
                  mesure nécessaire. Lorsque cela est possible et compatible avec les impératifs de
                  sécurité ou de prévention de la fraude, l&apos;Utilisateur est informé du motif
                  et peut présenter ses observations.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 17 — Données personnelles, photos et cookies
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">17.1. Données personnelles. </span>
                  GOHAPPYGO traite les données à caractère personnel conformément à sa{' '}
                  <a href="/privacy-policy" className="text-blue-600 underline">
                    Politique de confidentialité
                  </a>{' '}
                  accessible depuis la Plateforme.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    17.2. Photos et selfies de confirmation.{' '}
                  </span>
                  Certaines fonctionnalités peuvent nécessiter l&apos;accès à la caméra et la
                  prise de photographies ou selfies utilisés pour la sécurité, la preuve et le
                  suivi de la Transaction. Ces éléments ne sont pas destinés à être rendus publics.
                  Leur durée de conservation, leurs destinataires et les droits des personnes
                  concernées sont précisés dans la Politique de confidentialité.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">17.3. Cookies. </span>
                  Sous réserve du consentement requis, GOHAPPYGO peut utiliser des cookies ou
                  technologies similaires afin d&apos;assurer, mesurer, améliorer ou personnaliser
                  le Service. L&apos;Utilisateur peut gérer ses choix selon les modalités
                  précisées dans la politique relative aux cookies et les paramètres de son
                  terminal ou navigateur.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">Article 18 — Propriété intellectuelle</h2>
              <p className="mt-3">
                La Plateforme, ses logiciels, marques, noms, logos, interfaces, textes, éléments
                graphiques et bases de données sont protégés par les droits de propriété
                intellectuelle applicables. Toute reproduction, extraction, adaptation ou
                exploitation non autorisée est interdite. L&apos;Utilisateur conserve ses droits
                sur les contenus qu&apos;il publie et accorde à GOHAPPYGO les droits non exclusifs
                strictement nécessaires à leur hébergement, affichage et utilisation pour le
                fonctionnement du Service.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 19 — Réclamations et service client
              </h2>
              <p className="mt-3">
                Toute réclamation peut être adressée à GOHAPPYGO via [ADRESSE E-MAIL SERVICE
                CLIENT] ou le formulaire disponible sur la Plateforme. L&apos;Utilisateur fournit,
                dans la mesure du possible, le numéro de Transaction et les éléments utiles à
                l&apos;instruction de sa demande. GOHAPPYGO traite les réclamations dans un délai
                raisonnable, sans priver l&apos;Utilisateur de ses droits légaux.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 20 — Médiation de la consommation
              </h2>
              <div className="mt-3 space-y-2">
                <p>
                  Après réclamation préalable écrite auprès de GOHAPPYGO demeurée infructueuse, le
                  consommateur peut recourir gratuitement au médiateur de la consommation dont
                  relève GOHAPPYGO, conformément aux dispositions applicables du Code de la
                  consommation.
                </p>
                <p>Médiateur : Vivons mieux ensemble</p>
                <p>Adresse : 465 avenue de la Libération, 54000 Nancy</p>
                <p>
                  Site internet / saisine en ligne :{' '}
                  <a
                    href="https://www.mediation-vivons-mieux-ensemble.fr/pour-les-consommateurs-saisir-le-mediateur/"
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mediation-vivons-mieux-ensemble.fr
                  </a>
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 21 — Modification des Conditions
              </h2>
              <p className="mt-3">
                GOHAPPYGO peut modifier les présentes Conditions pour tenir compte notamment de
                l&apos;évolution de la réglementation, des Services, des contraintes techniques,
                contractuelles ou des besoins de sécurité. Les Conditions applicables à une
                Transaction sont celles acceptées au moment de sa conclusion, sauf disposition
                impérative contraire. Toute modification substantielle affectant les droits ou
                obligations des Utilisateurs est portée à leur connaissance par un moyen approprié.
              </p>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">Article 22 — Dispositions générales</h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">22.1. Intégralité. </span>
                  Les présentes Conditions, complétées par les informations et confirmations
                  contractuelles propres à la Transaction, expriment les engagements applicables
                  entre GOHAPPYGO et les Utilisateurs pour l&apos;utilisation du Service.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">22.2. Tolérance ou renonciation. </span>
                  Le fait de ne pas se prévaloir ponctuellement d&apos;une stipulation des
                  présentes Conditions ne saurait valoir renonciation définitive à s&apos;en
                  prévaloir.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">22.3. Nullité partielle. </span>
                  Si une stipulation est déclarée nulle, illégale ou inapplicable, les autres
                  demeurent en vigueur, sauf si la stipulation concernée constitue un élément
                  essentiel et indivisible du contrat.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">22.4. Cession. </span>
                  L&apos;Utilisateur ne peut céder les droits et obligations résultant des
                  présentes Conditions sans l&apos;accord préalable de GOHAPPYGO, sous réserve des
                  droits impératifs qui lui sont reconnus par la loi.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                Article 23 — Droit applicable et règlement des litiges
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <span className="font-semibold text-gray-900">23.1. Droit applicable. </span>
                  Les présentes Conditions sont régies par le droit français, sous réserve des
                  dispositions impératives protectrices dont peut bénéficier un consommateur
                  résidant dans un autre État.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">
                    23.2. Recherche d&apos;une solution amiable.{' '}
                  </span>
                  En cas de différend, l&apos;Utilisateur est invité à adresser préalablement une
                  réclamation à GOHAPPYGO afin de rechercher une solution amiable. Cette démarche
                  ne porte pas atteinte à son droit de recourir à la médiation ou de saisir la
                  juridiction compétente.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">23.3. Juridiction compétente. </span>
                  Tout litige qui n&apos;a pu être résolu amiablement peut être porté devant la
                  juridiction compétente selon les règles légales applicables. Aucune stipulation
                  des présentes Conditions ne prive un consommateur de la compétence
                  juridictionnelle que la loi lui reconnaît.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">Article 24 — Entrée en vigueur</h2>
              <p className="mt-3">
                Les présentes Conditions entrent en vigueur à compter du 22 août 2026. Elles sont
                accessibles à tout moment depuis la Plateforme.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
