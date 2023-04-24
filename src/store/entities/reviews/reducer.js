import { normalizedReviews } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review
    return acc;
  }, {}),
  ids: normalizedReviews.map(review => review.id)
}

export const reviewsReducer = (state = initialState, action) => state;