
import React, { useState } from 'react';
import './App.css';
import adinaImage from './Picture/Adina.jpeg';
import facebookLikeImage from './Picture/facebook like.webp';
import coverImage from './Picture/fusion_dance.jpg';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">Despre</a>
        <a href="#gallery">Galerie</a>
        <a href="#contact">Contact</a>
      </nav>
      <section
        id="home"
        className="section home"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
      <section id="gallery" className="section gallery">
       
        <div className="gallery-images">
          <img className="gallery-image" src={adinaImage} alt="Adina" />
        </div>
      </section>
      <section id="about" className="section about">
        <div className="about-copy">
          <p>✨ Let&apos;s Dance! ✨</p>
          <p>Vă așteptăm cu mare drag la cursurile noastre de dans pentru copii!</p>
          <p>Copiii vor învăța pași de dans, ritm, coordonare și vor participa la coregrafii pline de energie și distracție.</p>
          <p>💃 Dansul dezvoltă creativitatea</p>
          <p>⭐ Crește încrederea în sine</p>
          <p>🎶 Și transformă fiecare copil într-o mică vedetă pe scenă!</p>
          <p>Be the next dancing star! ⭐</p>
        </div>
      </section>
      
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <div className="contact-card">
          <p className="contact-intro">Pentru înscrieri și detalii despre cursuri, ne poți contacta direct.</p>
          <div className="contact-details">
            <p><span>Telefon</span><a href="tel:0720796626">0720 796 626</a></p>
            <p><span>Locație</span>Timis, Mosnita</p>
            <p><span>Facebook</span><a className="facebook-like-button" href="https://www.facebook.com/profile.php?id=61582753884151" target="_blank" rel="noreferrer"><img className="facebook-like-image" src={facebookLikeImage} alt="Like pe Facebook" /></a></p>
          </div>
          <button onClick={toggleModal} className="contact-us-btn contact-btn-large">Contact Us</button>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Contactează-ne</h3>
            <form action="https://formsubmit.co/udrea.adina93@gmail.com" method="POST" onSubmit={() => { setTimeout(() => toggleModal(), 1000); }}>
              {/* Opțiuni FormSubmit */}
              <input type="hidden" name="_subject" value="Nouă cerere de contact - Fusion Dance" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="form-item">
                <label>Vârsta copilului (3-18 ani):</label>
                <input type="number" name="Varsta Copil" required min="3" max="18" placeholder="Ex: 7" />
              </div>
              <div className="form-item">
                <label>Număr de telefon:</label>
                <input type="tel" name="Telefon" required placeholder="Ex: 0720 xxx xxx" />
              </div>
              <div className="form-item">
                <label>Interval orar de contact:</label>
                <select name="Interval Orar" required defaultValue="">
                  <option value="" disabled>Alege intervalul</option>
                  <option value="dimineata">Dimineața (09:00 - 12:00)</option>
                  <option value="pranz">Prânz (12:00 - 15:00)</option>
                  <option value="dupa-amiaza">După-amiază (15:00 - 18:00)</option>
                  <option value="seara">Seara (18:00 - 20:00)</option>
                </select>
              </div>
              <div className="form-item">
                <label>Mesaj (opțional):</label>
                <textarea name="Mesaj" placeholder="Scrie-ne ceva..."></textarea>
              </div>
              <div className="modal-actions">
                <button type="submit" className="modal-submit-btn">Trimite</button>
                <button type="button" onClick={toggleModal} className="modal-close-btn">Închide</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
