// Import : Npm
import React from 'react';


// Import : local
import './contact.scss';

const Contact = () => (
  <div className="contact_background">
    <div className="contact_container">
      <div className="contact_column left">
        <div className="contact_title">
          <span>Nous</span>
          <span>Contacter</span>
        </div>
        <div className="contact_info">Nous ferons de notre mieux pour vous répondre rapidement</div>
      </div>
      <div className="contact_column right">
        <div className="contact_form">
          <div className="contact_form_group">
            <input className="contact_form_control" placeholder="Votre nom" />
          </div>
          <div className="contact_form_group">
            <input className="contact_form_control" placeholder="Votre e-mail" />
          </div>
          <div className="contact_form_group">
            <input className="contact_form_control" placeholder="Sujet de votre demande" />
          </div>
          <div className="contact_form_group message">
            <textarea className="contact_form_control textinput" placeholder="Votre message" />
          </div>
          <div className="contact_form_group buttons">
            <button type="button" className="contact_form_button">Annuler</button>
            <button type="button" className="contact_form_button">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);


// Export
export default Contact;
