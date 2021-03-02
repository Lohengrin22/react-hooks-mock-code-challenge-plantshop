import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() =>{
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(setPlants);

  }, [])
  
  function addPlant(newPlant){
    setPlants([
      ...plants,newPlant
    ])
  }
  
  const searchedPlants = plants.filter((plant) => {
    return(plant.name.toUpperCase().includes(search.toUpperCase()))
  })

  function addPrice(updatedPlant){
    const updatedPrice = plants.map((plant)=>{
      
        if (plant.id === updatedPlant.id){
          return(updatedPlant)
        }
      else{
        return(plant)
      }
    })
    setPlants(updatedPrice)
  }
  
  function handleRemovePlant(removedPlant){

    const updatedSomethingElse = plants.filter((plant)=>{
      return (plant.id !== removedPlant.id) 
       
    })
    console.log(updatedSomethingElse)
      setPlants(updatedSomethingElse)
  }

  return (
    <main>
      <NewPlantForm onSubmit={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList removePlant={handleRemovePlant} onSubmitPrice={addPrice} plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
