import { Link } from 'react-router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white md:bg-[url('/images/footerLinksbackground.jpeg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[url('/images/footerLinksbackground.jpeg')] bg-no-repeat bg-cover bg-fixed md:bg-none">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-600">Mentions légales</h1>
          <p className="mt-2 text-sm text-gray-500">Entrée en vigueur : 24 août 2026</p>

          <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
            <article>
              <h2 className="text-xl font-bold text-gray-900">1. Éditeur de la Plateforme</h2>
              <div className="mt-3 space-y-3">
                <p>
                  Le site internet et l&apos;application mobile GOHAPPYGO (ci-après la «
                  Plateforme ») sont édités par la société GOHAPPYGO, dont le siège social est
                  situé [ADRESSE], immatriculée au Registre du Commerce et des Sociétés de
                  [VILLE] sous le numéro [SIREN/RCS], au capital social de [MONTANT] euros.
                </p>
                <dl className="mt-3 space-y-2">
                  <div>
                    <dt className="font-semibold text-gray-900 inline">Numéro de TVA intracommunautaire : </dt>
                    <dd className="inline">[NUMÉRO TVA]</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900 inline">Directeur de la publication : </dt>
                    <dd className="inline">[NOM DU DIRECTEUR DE PUBLICATION]</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900 inline">Contact : </dt>
                    <dd className="inline">contact@gohappygo.fr</dd>
                  </div>
                </dl>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">2. Hébergement</h2>
              <div className="mt-3 space-y-3">
                <p>
                  La Plateforme est hébergée par la société Contabo GmbH, dont le siège social est
                  situé Aschauer Straße 32a, 81549 Munich, Allemagne.
                </p>
                <p>
                  Pour toute question relative à l&apos;hébergement technique de la Plateforme,
                  GOHAPPYGO reste le premier interlocuteur aux coordonnées indiquées à l&apos;article
                  1 ci-dessus.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">
                3. Prestataires techniques et partenaires de service
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  Pour assurer le fonctionnement, la sécurité et la conformité de ses Services,
                  GOHAPPYGO fait appel aux prestataires techniques suivants, agissant chacun en
                  qualité de sous-traitant ou de responsable de traitement distinct selon les
                  opérations concernées :
                </p>
                <dl className="mt-3 space-y-3">
                  <div>
                    <dt className="font-semibold text-gray-900">Traitement des paiements</dt>
                    <dd className="mt-1">
                      Les paiements, versements et remboursements effectués sur la Plateforme sont
                      traités par Stripe (Stripe Payments Europe, Ltd.), prestataire de services de
                      paiement agréé. GOHAPPYGO ne collecte ni ne conserve les données bancaires des
                      Utilisateurs, celles-ci étant directement traitées par Stripe.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Vérification d&apos;identité</dt>
                    <dd className="mt-1">
                      La vérification de l&apos;identité des Utilisateurs (KYC) est réalisée par
                      Didit, prestataire spécialisé dans la vérification d&apos;identité en ligne.
                      Les documents transmis dans ce cadre sont traités par Didit conformément à sa
                      propre politique de confidentialité et aux instructions contractuelles
                      convenues avec GOHAPPYGO.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900">Autres prestataires</dt>
                    <dd className="mt-1">
                      GOHAPPYGO peut également recourir à d&apos;autres prestataires techniques
                      (messagerie électronique, notifications push, analyse d&apos;audience,
                      assistance client, etc.). La liste à jour des destinataires et sous-traitants
                      intervenant sur les données à caractère personnel figure dans la{' '}
                      <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline">
                        Politique de confidentialité
                      </Link>
                      , section « Destinataires et sous-traitants ».
                    </dd>
                  </div>
                </dl>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">4. Propriété intellectuelle</h2>
              <div className="mt-3 space-y-3">
                <p>
                  L&apos;ensemble des éléments composant la Plateforme (structure, textes, logos,
                  marques, graphismes, images, icônes et logiciels) est la propriété exclusive de
                  GOHAPPYGO ou de ses partenaires, et est protégé par le droit de la propriété
                  intellectuelle. Toute reproduction, représentation, modification ou exploitation,
                  totale ou partielle, sans autorisation préalable écrite de GOHAPPYGO est interdite.
                </p>
              </div>
            </article>

            <article>
              <h2 className="text-xl font-bold text-gray-900">5. Réclamations et médiation</h2>
              <div className="mt-3 space-y-3">
                <p>
                  Toute réclamation relative à l&apos;utilisation de la Plateforme peut être adressée
                  à GOHAPPYGO aux coordonnées indiquées à l&apos;article 1. Conformément aux
                  dispositions du Code de la consommation, tout consommateur dispose également du
                  droit de recourir gratuitement à un médiateur de la consommation en vue de la
                  résolution amiable du litige qui l&apos;oppose à GOHAPPYGO. Les coordonnées du
                  médiateur compétent seront communiquées sur demande ou publiées ultérieurement sur
                  la Plateforme.
                </p>
              </div>
            </article>

            <p className="text-sm text-gray-500">
              Pour toute information complémentaire, se référer aux{' '}
              <Link to="/terms-of-use" className="text-blue-600 font-bold hover:underline">
                Conditions Générales d&apos;Utilisation et de Vente
              </Link>{' '}
              et à la{' '}
              <Link to="/privacy-policy" className="text-blue-600 font-bold hover:underline">
                Politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
