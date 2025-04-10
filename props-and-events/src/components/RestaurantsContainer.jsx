import { restaurants } from "../data/data.js";
import Restaurant from "./Restaurant";

//Containers are for behind the scenes logic
//High-Order Components
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {/* Iterates through each element of restaurant and renders it */}
      {restaurants.map((restaurant) => (
        <Restaurant 
          key={restaurant.id}  //make sure each restaurant has a unique key
          restaurant={restaurant} 
        />
      ))}
    </div>
  );
}

//Export info out to be used
export default RestaurantsContainer;