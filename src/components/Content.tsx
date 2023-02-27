import React from 'react'
import logo from '../resources/driving-school.png'

let Content = () => {
  return (
    <div id='content' className='container'>
      <div className='row'>
        <div className='col s12 m6 l3'>
            <img src={logo} alt="" />
          <h5>Plages Horaires</h5>
          <p>Je donne mes cours les vendredis et samedis par tranches de 2h.</p>
        </div>
        <div className='col s12 m6 l3'>
            <img src={logo} alt="" />
          <h5>Tarifs</h5>
          <p>Je demande 90€ par séances de 2h. À régler sur place ou par virement bancaire.</p>
        </div>
        <div className='col s12 m6 l3'>
            <img src={logo} alt="" />
          <h5>Point de rendez-vous</h5>
          <p>Le point de rendez-vous pour mes cours est <a href="https://goo.gl/maps/WviVnwxAva7pNQLG9" target={'_blank'}>Drive-Cool</a>.</p>
        </div>
        <div className='col s12 m6 l3'>
            <img src={logo} alt="" />
          <h5>Véhicules</h5>
          <p>
            Le véhicule utilisé pour les cours est équipé des doubles commandes.
            Possibilité d'utiliser votre véhicule pour la préparation à l'examen
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content
