import React from 'react'

function About() {
  return (
    <div>
        <h2>À propos</h2>
          <p>
            Mes services selon vos besoins:
          </p>
          <ul>
            <li>
              enseignement de base (idéal pour ne pas cabosser la voiture des parents)
            </li>
            <li>
              manœuvres
            </li>
            <li>
              parcours d'examens (les points de passages et alentours, les pièges... etc)
            </li>
            <li>
              accompagnement à l'examen.
            </li>
          </ul>
          <p>
            <span className='important'>Conditions :</span> avoir un permis privoisire M36 ou M12 en cours de validité
          </p>
          <p>
            <em>Attention</em> que cette filière n'est pas valable pour des heures obligatoires (6h après 2 échecs, 20h pour pouvoir rouler seul ou 30h pour présenter l'examen en accès direct).
          </p>
          <p>
            Les cours sont donnés par 2h (90€) mais possibilité de faire 1h (45€) ou 1h30 (65€) au départ du permis de conduire à Tihange ou dans un rayon proche.
          </p>
          <p>
            Un acompte de 45€ doit être versé au minimum 3 jours ouvrés avant la date du premier cours sur le compte
          </p>
          <p className='important'>
            Les leçons qui ne seront pas annulées trois jours avant la date du cours seront exigibles.
          </p>
    </div>
  )
}

export default About