import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importamos un archivo de CSS para los nuevos estilos

const Home = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = () => {
      // Información de las mascotas con más detalles (edad y descripción)
      const petData = [
        { 
          id: 1, 
          name: 'Firulais', 
          breed: 'Labrador', 
          age: 3, 
          description: 'Firulais es muy amigable y juguetón, perfecto para familias con niños.', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrLbVt5ppEMPssNbC6qQVQEYPgpXCglBDzA&s' 
        },
        { 
          id: 2, 
          name: 'Michi', 
          breed: 'Persa', 
          age: 2, 
          description: 'Michi es un gato tranquilo y cariñoso, ideal para espacios pequeños.', 
          image: 'https://i.pinimg.com/736x/3e/39/f3/3e39f31abf06051b0722fcef0b33c51f.jpg' 
        },
        { 
          id: 3, 
          name: 'Lorax', 
          breed: 'Sphynx', 
          age: 4, 
          description: 'Lorax tiene una personalidad única y es muy curioso.', 
          image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Sphynx.2.jpg?itok=neUCymNR' 
        },
        { 
          id: 4, 
          name: 'Bobby', 
          breed: 'Golden Retriever', 
          age: 5, 
          description: 'Bobby es leal y energético, le encanta jugar al aire libre.', 
          image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09golden20retriever.jpg?itok=48StbVfe' 
        },
        { 
          id: 5, 
          name: 'Nina y Dan', 
          breed: 'Chihuahua', 
          age: 1, 
          description: 'Nina y Dan son inseparables, pequeños pero con mucha energía.', 
          image: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-07Chihuahua2028Smooth20Coat291.jpg?itok=PqXNS2SJ' 
        },
        { 
          id: 6, 
          name: 'Tito', 
          breed: 'Bulldog', 
          age: 4, 
          description: 'Tito es un perro de compañía, cariñoso y protector.', 
          image: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_58776564-768x491.jpg' 
        }
      ];
      setPets(petData);
    };

    fetchPets();
  }, []);

  const handleCardClick = (pet) => {
    navigate(`/about`, { state: { pet } }); // Pasamos los datos de la mascota a la página About
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <span className="material-symbols-outlined">pets</span>
        <h1>Adopta una Mascota</h1>
        <span className="material-symbols-outlined">pets</span>
      </header>
      
      <div className="pets-container">
        {pets.map((pet) => (
          <div
            key={pet.id}
            onClick={() => handleCardClick(pet)}
            className="pet-card"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="pet-image"
            />
            <h3>{pet.name}</h3>
            <p>{pet.breed}</p>
            <p>Edad: {pet.age} años</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
