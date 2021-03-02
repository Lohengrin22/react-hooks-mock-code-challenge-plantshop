import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,removePlant, onSubmitPrice}) {
  const plantsArray = plants.map((plant)=>{
    return(
      <PlantCard
      key={plant.id}
      plant={plant}
      onSubmitPrice={onSubmitPrice}
      removePlant={removePlant}
       />
    )
  })
  
  return (
    <ul className="cards">{plantsArray}</ul>
  );
}

export default PlantList;
