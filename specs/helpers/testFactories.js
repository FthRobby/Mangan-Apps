import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import RestoFav from "../../src/scripts/data/restofav-idb";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestaurants: RestoFav,
    restaurant,
  });
};

export default createLikeButtonPresenterWithRestaurant;
