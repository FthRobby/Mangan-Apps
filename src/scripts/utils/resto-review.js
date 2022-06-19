import RestaurantDbSource from '../data/restaurantdb-source';

const RestoReview = (url, name, review) => {
  const inputReview = {
    id: url.id,
    name,
    review,
  };
  RestaurantDbSource.postRestaurant(inputReview);

  const reviewContainer = document.querySelector('.restaurant__review');
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', options);
  const newReview = `
    <div class="detail-review-item" tabindex=0>
        <div class="review-header">
            <p class="review-name">${name}</p>
            <p class="review-date">${date}</p>
        </div>
        <hr>
        <div class="review-body">
            <p>${review}</p>
        </div>
    </div>
    `;
  reviewContainer.innerHTML += newReview;
};

export default RestoReview;
