export default function includeReview(reviews: any, userId: number) {
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].user_id === userId) {
      return true;
    }
  }

  return false;
}
