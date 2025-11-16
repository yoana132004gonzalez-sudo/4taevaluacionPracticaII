import "../styles/components/pages/ContactoPage.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function ContactoPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente");
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <p>Si tenés alguna consulta o querés más información, completá el formulario:</p>

      <form onSubmit={handleSubmit} className="form-contacto">
        <label>Nombre:</label>
        <input type="text" name="nombre" required />

        <label>Email:</label>
        <input type="email" name="email" required />

        <label>Teléfono:</label>
        <input type="tel" name="telefono" />

        <label>Mensaje:</label>
        <textarea name="mensaje" rows="4" required></textarea>

        <button type="submit" className="btn-enviar">Enviar</button>
      </form>

      <div className="info-contacto">
        <h3>Información de contacto</h3>
        <p><strong>Teléfono:</strong> +54 9 3772 12-3456</p>
        <p><strong>Email:</strong> corazonespeludos@gmail.com</p>
        <p><strong>Redes sociales:</strong></p>
        
        <div className="social-icons">
          <a href="https://facebook.com/corazonespeludos" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={40} color="#1877F2" />
          </a>

          <a href="https://instagram.com/corazonespeludos" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={40} color="#E4405F" />
          </a>
  
          <a href="https://wa.me/543791234567" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={40} color="#25D366" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactoPage;
