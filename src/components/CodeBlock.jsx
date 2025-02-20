/**
 * Code Block Component
 * 
 * Renders a syntax-highlighted code block using the 
 * react-syntax-highlighter library. Displays a reusable 
 * Star Rating component as an example.
 * 
 * Props: None
 * Returns: JSX element for the code block.
 * 
 * Key Features:
 * - Syntax highlighting for JavaScript code.
 * - Custom styling for the code block.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock() {

    const codeString = `// Reusable Star Rating Component
    import { useState } from 'react';
    import { StarIcon } from '@heroicons/react/24/solid';
    
    export default function StarRating() {
      const [hoveredRating, setHoveredRating] = useState(0);
      const [selectedRating, setSelectedRating] = useState(0);
    
      const handleClick = (rating) => {
        if (selectedRating === rating) {
          setSelectedRating(0);
        } else {
          setSelectedRating(rating);
        }
      }
    
      return (
        <div className='flex justify-center'>
          <div 
            className='flex space-x-1' 
            onMouseLeave={() => setHoveredRating(0)}
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <StarIcon
                key={rating}
                className={\`h-6 w-6 cursor-pointer 
                  transition-colors duration-300 \${
                  rating <= (hoveredRating || selectedRating)
                    ? 'text-yellow-400' 
                    : 'text-gray-200'
                  } \${
                  rating <= selectedRating 
                    ? 'scale-110' 
                    : ''
                  }\`}
                onMouseEnter={() => setHoveredRating(rating)}
                onClick={() => handleClick(rating)}
              />
            ))}
          </div>
          {selectedRating > 0 && (
            <div className='ml-2 text-sm text-gray-600'>
              {selectedRating} {selectedRating === 1 
                ? 'star' 
                : 'stars'}
            </div>
          )}
        </div>
      )
    }`;

    const customStyle = {
        ...tomorrowNightEighties,
        'code[class*="language-"]': {
            color: '#ffffff', // Set text color to white
        },
        'pre[class*="language-"]': {
            backgroundColor: '#8a8a8a', // Optional: Set a background color
        },
    };

    return (
        <SyntaxHighlighter language='javascript' style={customStyle}>
            {codeString}
        </SyntaxHighlighter>
    );
};

