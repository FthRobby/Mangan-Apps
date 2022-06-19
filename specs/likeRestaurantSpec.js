import RestoFav from "../src/scripts/data/restofav-idb";
import createLikeButtonPresenterWithRestaurant from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = `<div id="likeButtonContainer"></div>`;
};

describe("Liking a Restaurant", () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it("should be able to like the restaurant", async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await RestoFav.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    RestoFav.deleteRestaurant(1);
  });

  it("should not add a restaurant again when its already liked", async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });
    await RestoFav.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await RestoFav.getAllRestaurant()).toEqual([{ id: 1 }]);

    RestoFav.deleteRestaurant(1);
  });

  it("should not add a restaurant when it has no id", async () => {
    await createLikeButtonPresenterWithRestaurant({});
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await RestoFav.getAllRestaurant()).toEqual([]);
  });
});
