import itActsAsFavoriteRestaurantModel from "./contract/favoriteRestaurantContract";
import RestoFav from "../src/scripts/data/restofav-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
      (await RestoFav.getAllRestaurant()).forEach(async (restaurant) => {
      await RestoFav.deleteRestaurant(restaurant.id);
      });
  });
  
  itActsAsFavoriteRestaurantModel(RestoFav);
});
