const assert = require("assert");

Feature("Liking Restaurant");

Before((I) => {
  I.amOnPage("/#/like");
});

Scenario("showing empty liked restaurants", (I) => {
  I.seeElement(".restaurant-item__not__found");
  I.see("You dont like any Restaurant yet.", ".restaurant-item__not__found");
});

Scenario("liking one restaurant", async (I) => {
  I.see("You dont like any Restaurant yet.", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".post-item__title a");
  const firstPost = locate(".post-item__title a").first();
  const firstPostTitle = await I.grabTextFrom(firstPost);
  I.click(firstPost);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".post-item__title a");
  const likedPostTitle = await I.grabTextFrom(".post-item__title a");

  assert.strictEqual(firstPostTitle, likedPostTitle);
});

Scenario("unliking one restaurant", async (I) => {
  I.see("You dont like any Restaurant yet.", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".post-item__title a");
  const firstPost = locate(".post-item__title a").first();
  const firstPostTitle = await I.grabTextFrom(firstPost);
  I.click(firstPost);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".post-item__title a");
  const likedPostTitle = await I.grabTextFrom(".post-item__title a");
  assert.strictEqual(firstPostTitle, likedPostTitle);
  I.click(likedPostTitle);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.seeElement(".restaurant-item__not__found");
  const dontHaveFavoriteRestaurant = await I.grabTextFrom(
    ".restaurant-item__not__found"
  );

  assert.strictEqual(
    dontHaveFavoriteRestaurant,
    "You dont like any Restaurant yet."
  );
});

Scenario("Customer making a review", async (I) => {
  I.see("You dont like any Restaurant yet.", ".restaurant-item__not__found");

  I.amOnPage("/");

  I.seeElement(".post-item__title a");
  const firstPost = locate(".post-item__title a").first();
  I.click(firstPost);
  I.seeElement(".form-review form");

  const reviewerName = "Reviewer Name";
  const review = "Review Testing Content";
  I.fillField("inputName", reviewerName);
  I.fillField("inputReview", review);
  I.click("#submit-review");

  const lastReview = locate(".review-body").last();
  const contentLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(review, contentLastReview);
});
