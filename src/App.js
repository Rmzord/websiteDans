
import './App.css';
import adinaImage from './Picture/Adina.jpeg';
import facebookLikeImage from './Picture/facebook like.webp';
import coverImage from './Picture/fusion_dance.jpg';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#gallery">Galerie</a>
        <a href="#about">Despre</a>
        
        <a href="#contact">Contact</a>
      </nav>
      <section
        id="home"
        className="section home"
        style={{ backgroundImage: `url(${coverImage})` }}
      />
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
      <section id="gallery" className="section gallery">
       
        <div className="gallery-images">
          <img className="gallery-image" src={adinaImage} alt="Adina" />
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
        </div>
      </section>
    </div>
  );
}

export default App;
