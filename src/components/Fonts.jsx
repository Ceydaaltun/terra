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
 * - Supports multiple font styles: Geist, Geist Mono, Michroma, and Play.
 * - Configures font variables for CSS usage.
 * 
 * @component
 * @author Ceyda Aleyna Altun
 * @date 2023-10-04
 */
import { Geist, Geist_Mono } from 'next/font/google';
import { Michroma, Tsukimi_Rounded, Play } from 'next/font/google';


export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export const michroma = Michroma({
  weight: ['400'],
  subsets: ['latin'],
});

export const play = Play({
  weight: ['400'],
  subsets: ['latin'],
});