export interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  source: 'Google' | 'BBB' | 'Other'
}

// Real Google Business reviews
export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Jackie Dellwo',
    rating: 5,
    text: 'Advanced Roofing & Siding has been amazing to work with. They were so responsive and helpful anytime I had a question. We had alot of issues with our insurance company fighting the claim and they really went to bat for us to push the claim through.',
    date: '2 months ago',
    source: 'Google',
  },
  {
    id: '2',
    author: 'abe ambriz',
    rating: 5,
    text: 'It was excellent working with this contractor. They had open communication and answered all my questions about the claim process. They helped me when insurance was denying the damage, they fought until it was approved for the roof and siding replacement.',
    date: '9 months ago',
    source: 'Google',
  },
  {
    id: '3',
    author: 'Vicki Heller',
    rating: 5,
    text: 'If anyone is looking for a dependable honest Company to work with this would be Advanced Roofing and Siding ink. We just had our roofs replaced by Advanced Roofing. The owner Stacy and his crew come highly recommended by both Craig and I.',
    date: 'a year ago',
    source: 'Google',
  },
]

// Calculate average rating
export const AVERAGE_RATING = REVIEWS.reduce((sum, review) => sum + review.rating, 0) / REVIEWS.length

// Total review count from Google Business Profile
export const TOTAL_REVIEWS = 160

