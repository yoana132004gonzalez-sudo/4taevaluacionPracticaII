import "../styles/components/pages/FormularioAdopcionPage.css";

function FormularioAdopcionPage () {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente");
    };
    
    return (
        <div className="formulario">
            <h2>Formulario de Adopción</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre completo:</label>
                <input type="text" name="nombre" required />

                <label>Email:</label>
                <input type="email" name="email" required />

                <label>Teléfono:</label>
                <input type="tel" name="telefono" required />

                <label>¿Por qué querés adoptar?</label>
                <textarea name="motivo" rows="4" required></textarea>

                <button type="submit" className="btn-enviar">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioAdopcionPage;
