import React from 'react'
import "./Contact.css";



const Contact = () => {
  
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2960b705-43f3-46ea-b279-55f8c69ab9cf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Mensaje Envíado Exsitosamente!");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  
  
  
  
  
    return (
    <div className='contact'>
<div className="contact-col">
    <h3 >Envíanos un Mensaje</h3>
    
    <p> Puede comunicarse en las siguientes lineas de contacto. La atención telefonica es en el horario de 7-14.</p>
        
        <ul>
        <li> <i className="bi bi-envelope"></i> escuela73@edusity.com.ar</li>
        
        <li> <i className="bi bi-phone"></i> Telefono +54 9 342 4353535</li>
        <li> <i className="bi bi-pin-map"></i> Calle San Martín 1540<br /> Santa Fe de la Vera Cruz, Santa Fe</li>
        </ul>

</div>
<div className='contact-col'>
    <form onSubmit={onSubmit}>
        <label>Tu Nombre</label>
        <input type='text' name='name' placeholder='Escribe tu nombre' required />
        <label> Teléfono</label>
        <input type ='tel' name='telefono' placeholder='Ingresa tu número de teléfono' required />
        <label> Escribe un mensaje</label>
        <textarea name='mensaje' rows='6'  placeholder='Escribe un mensaje' required/>

        <button type='submit' className='btn dark-btn' > Enviar 
        <i class="bi bi-arrow-bar-right"></i>
        </button>
    </form>
    <span>{result}</span>
</div>
    </div>
  )
}

export default Contact