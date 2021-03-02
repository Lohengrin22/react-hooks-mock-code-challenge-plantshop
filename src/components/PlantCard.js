import React, {useState} from "react";

function PlantCard({plant, onSubmitPrice, removePlant}) {
  // const {image, name, price } = plant
  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function handleSubmit(e){
    e.preventDefault()
    
    fetch(`http://localhost:6001/plants/${plant.id}`, {
    method: 'PATCH', 
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({price}),
    })
    .then(response => response.json())
    .then(onSubmitPrice)
  }

  function handleTrash(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'DELETE', 
      headers: {
      'Content-Type': 'application/json',
      },
      })
      .then(()=>removePlant(plant))
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
     <form onSubmit={handleSubmit}> 
     <input onChange={(e) => setPrice(parseFloat(e.target.value))} value={price} type="number" name="price" step="0.01" placeholder={price} /> 
     <button type="submit">🌵🌵Change Price🌿🌿</button>
      </form>
      {inStock ? (
        <button onClick={()=>setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={handleTrash}>🗑</button>
    </li>
  );
}

export default PlantCard;


