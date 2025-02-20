/**
 * Fonts Component
 * 
 * Imports and configures custom fonts using the 
 * next/font/google package. Exports font variables 
 * for use throughout the application.
 * 
 * Props: None
 * Returns: None (exports font variables).
 * 
 * Key Features:
 * - Supports multiple font styles: Michroma, and Play.
 * - Configures font variables for CSS usage.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */
import { Michroma, Tsukimi_Rounded, Play } from 'next/font/google';


export const michroma = Michroma({
  weight: ['400'],
  subsets: ['latin'],
});

export const play = Play({
  weight: ['400'],
  subsets: ['latin'],
});