/**
 * Star Rating Component
 * 
 * Renders a star rating system for selecting a rating 
 * from 1 to 5 stars with hover and click interactions.
 * 
 * Props: None
 * Returns: JSX element for the rating.
 * 
 * Key Features:
 * - Interactive star icons with hover effects.
 * - Displays the selected rating.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */


'use client'
import { useState } from 'react'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'

export default function StarRating() {
  const [hoveredRating, setHoveredRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(0)

  const handleClick = (rating) => {
    if (selectedRating === rating) {
      // If clicking the same star twice, reset the rating
      setSelectedRating(0)
    } else {
      setSelectedRating(rating)
    }
  }

  return (
    <div className='flex justify-center'>
      <div 
        className='flex space-x-1' 
        onMouseLeave={() => setHoveredRating(0)}
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <StarIconSolid
            key={rating}
            className={`h-10 w-10 cursor-pointer transition-colors duration-300 ${
              rating <= (hoveredRating || selectedRating) 
                ? 'text-yellow-400' 
                : 'text-gray-200'
            } ${
              rating <= selectedRating 
                ? 'scale-110' 
                : ''
            }`}
            onMouseEnter={() => setHoveredRating(rating)}
            onClick={() => handleClick(rating)}
          />
        ))}
      </div>
      {selectedRating > 0 && (
        <div className='ml-2 text-sm text-gray-600'>
          {selectedRating} {selectedRating === 1 ? 'star' : 'stars'}
        </div>
      )}
    </div>
  )
} 