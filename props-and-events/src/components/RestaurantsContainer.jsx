import { restaurants } from "../data/data.js";

import Restaurant from "./Restaurant";

//Containers are for behind the scenes logic
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {/* iterates through each element of restaurant and renders through to app */}
      {restaurants.map(restaurant => <Restaurant restaurant={restaurant} />)}
    </div>
  );
}

//Export info out to be used
export default RestaurantsContainer;

