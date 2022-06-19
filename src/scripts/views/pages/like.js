import RestoFav from '../../data/restofav-idb'; 
import { createRestaurantItemTemplate } from '../templates/template-creator';
import heroElementTemplate from '../templates/hero-element';

const Like = {
  async render() {
    return `
        ${heroElementTemplate}
        <div class="latest" id="maincontent" tabindex="0">
            <h1 class="latest__label">Restaurant Favorite anda : </h1>
            <div class="restaurant-item__not__found"></div>
            <div class="posts posts-wrapper" id="restaurant-list"></div>
        </div>
    `;
  },
 
  async afterRender() {
    const restaurants = await RestoFav.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    const restaurantNotFound = document.querySelector('.restaurant-item__not__found');
    if (restaurants.length === 0) {
      restaurantNotFound.innerHTML = `
      <p>You dont like any Restaurant yet.</p>
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Like;
