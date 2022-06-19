import CONFIG from "../../globals/configs";

const createRestaurantItemTemplate = (restaurant) => `
    <article tabindex="0" class="post-item">
            <img class="lazyload post-item__thumbnail" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="post-item__header">
            <div class="post-item__header__rating">
                <p>⭐️<span class="post-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="post-item__content">
            <h2 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
            <div class="post-item__place">${restaurant.city}</div>
            <p class="post-item__description">${restaurant.description}</p><br>
           
        <div>
    </article>
`;

const createDetailRestaurantTemplate = (restaurant) => `
    <div class="restaurant__detail-thumbnail">
        <h2>${restaurant.name}</h2>
        <img class="lazyload restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="restaurant__info">
    <h3>Informasi</h3>
        <div class="restaurant__basic-info" tabindex=0>
            <h4>Alamat</h4>
            <p><i class="fa fa-location-arrow"></i> ${restaurant.address}, ${restaurant.city}.</p>
            <h4>Rating</h4>
            <p><i class="fa fa-star"></i> ${restaurant.rating}</p>
            <h4>Kategori</h4>
            <p><i class="fas fa-clipboard-list"></i> ${restaurant.categories
                .map(
                    (category) => `
                    <span class="category">${category.name}</span>
                    `,
                )
                .join(', ')
            }</p>
        </div>
        <div class="restaurant__menus" tabindex=0>
            <h4>Menu Tersedia</h4>
            <div class="foods">
            <h5 style="font-weight:bolder"><i class="fas fa-hamburger"></i> Makanan :</h5>
            <ul>${restaurant.menus.foods
                .map(
                    (food) => `
                    <li><i class="fas fa-check-square"></i> ${food.name}</li>
                    `,
                )
                .join('')
            }</ul>
            </div>
            <br>
            <div class="drinks">
            <h5 style="font-weight:bolder"><i class="fas fa-beer"></i> Minuman :</h5>
            <ul>${restaurant.menus.drinks
                .map(
                    (drink) => `
                    <li><i class="fas fa-check-square"></i> ${drink.name}</li>
                    `,
                )
                .join('')
            }</ul>
            </div>
            <br>
        </div>
    </div>
    <div class="restaurant__description" tabindex=0>
        <h3>Deskripsi Restoran</h3>
        <p>&ensp; &ensp;${restaurant.description}</p>
    </div>
    <h3 class="cs-review">Review Customer</h3>
    <div class="restaurant__review">
        ${restaurant.customerReviews
        .map(
            (review) => `
            <div class="detail-review-item" tabindex=0>
                <div class="review-header">
                    <p class="review-name">${review.name}</p>
                    <p class="review-date">${review.date}</p>
                </div>
                <hr>
                <div class="review-body">
                    <p>${review.review}</p>
                </div>
            </div>
            `,
        )
        .join('')}
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createDetailRestaurantTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
