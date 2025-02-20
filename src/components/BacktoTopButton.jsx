/**
 * Back to Top Button Component
 * 
 * Renders a button that appears after scrolling down the page. 
 * Clicking the button scrolls the user back to the top smoothly.
 * 
 * Props: None
 * Returns: JSX element for the button.
 * 
 * Key Features:
 * - Toggles visibility based on scroll position.
 * - Smooth scroll to top functionality.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */
'use client'
import React, { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-4 right-4'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none shadow-lg transition duration-300'
          aria-label='Back to top'
        >
          ↑
        </button>
      )}
    </div>
  );
};

