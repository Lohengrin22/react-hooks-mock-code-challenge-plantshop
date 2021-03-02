import React, {useState} from "react";

function NewPlantForm({onSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e){
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]:value, })
  }
  
  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: parseInt(formData.price)
    }
    fetch('http://localhost:6001/plants', {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPlant),
    })
    .then(response => response.json())
    .then(onSubmit)
    setFormData({
      name: "",
      image: "",
      price: ""
    })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={formData.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={formData.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
