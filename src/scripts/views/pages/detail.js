import RestaurantDbSource from "../../data/restaurantdb-source";
import UrlParser from "../../routes/url-parser";
import { createDetailRestaurantTemplate } from "../templates/template-creator";
import heroElementTemplate from "../templates/hero-element";
import LikeButtonInitiator from "../../utils/like-button-presenter";
import RestoReview from "../../utils/resto-review";

const DetailResto = {
    async render() {
      return `
        ${heroElementTemplate}
        <div class="latest">
            <h1 class="latest__label" id="maincontent">Detail Restaurant</h1>
            <div class="restaurant-detail" id="detail-resto"></div>
            <div id="likeButtonContainer" class="like"></div>
            <div class="form-review">
              <form>
                <div class="input-area">
                  <label for="inputName" class="form-label">Nama</label>
                  <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Masukan nama anda">
                </div>
                <div class="input-area">
                  <label for="inputReview" class="form-label">Review</label>
                  <textarea cols="40" rows="5" name="inputReview" type="text" class="form-control" id="inputReview" placeholder="Masukan review anda"></textarea>
                  </div>
                <button id="submit-review" type="submit" class="inputBtn">Submit</button>
              </form>
            </div>
        </div>
      `;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#detail-resto');
      restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          "id": restaurant.id,
          "name": restaurant.name,
          "description": restaurant.description,
          "city": restaurant.city,
          "address": restaurant.address,
          "pictureId": restaurant.pictureId,
          "rating": restaurant.rating,
          "categories": restaurant.categories,
          "menus": restaurant.menus,
          "customerReviews": restaurant.customerReviews,
        },
      });

      const btnSubmit = document.querySelector('#submit-review');
      const nameInput = document.querySelector('#inputName');
      const reviewInput = document.querySelector('#inputReview');

      btnSubmit.addEventListener('click', (data) => {
        data.preventDefault();
        if (nameInput.value === '' || reviewInput.value === '') {
          alert('Inputan tidak boleh ada yang kosong');
          nameInput.value = '';
          reviewInput.value = '';
        } else {
          RestoReview(url.id, nameInput.value, reviewInput.value);
          nameInput.value = '';
          reviewInput.value = '';
        }
      });
    },
  };
   
export default DetailResto;
