# Skip Selector UI – README

## Overview

This project is a responsive and accessible React application that allows users to select a suitable skip size for waste removal. Skip options are dynamically fetched from an external API, ensuring real-time data integration. The UI features modern design, interactive selection, a comparison mode, and a bottom prompt for user feedback.

## Features

* **Live Data**: Fetched from `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
* **Responsive Design**: Tailwind CSS is used to create a clean, mobile-friendly UI
* **Dynamic Rendering**: Each skip card displays relevant information such as yard size, hire period, price, and conditional road-use warnings
* **Reusable Components**: The app follows a component-based architecture for maintainability
* **Comparison Mode**: Users can compare two skips side by side
* **Bottom Prompt (Snackbar)**: User actions trigger a prompt at the bottom of the screen for feedback and next steps
* **Modern Animations**: Smooth transitions and feedback for selections

## File Structure

```
/src
  /components
    BottomPrompt.jsx        // Snackbar/prompt at the bottom of the screen
    Header.jsx              // Page header
    SkipCard.jsx            // Individual skip card UI
    SkipSelector.jsx        // Grid layout for multiple cards and comparison
  /hooks
    useFetchSkips.js        // Custom hook to fetch data from API
  /assets
    image1.jpg, image2.jpg, image3.jpg // Skip images
  App.jsx                   // Main app component
  main.jsx                  // Entry point
  index.css                 // Global styles and custom animations
```

## Approach

1. **Data Fetching**: A custom hook `useFetchSkips` fetches the list of skips from the API endpoint. This hook returns both the skip data and a loading state.

2. **Component Design**:
   * `Header.jsx` displays the main page header.
   * `SkipSelector.jsx` maps over the fetched data and renders each `SkipCard`, and manages selection and comparison logic.
   * `SkipCard.jsx` displays a styled card with image selection logic, dynamic yard size assignment, pricing, and warnings for larger skips (10+ yards).
   * `BottomPrompt.jsx` shows a fixed prompt/snackbar at the bottom for user feedback and actions.

3. **Images**: Three different local images (`image1.jpg`, `image2.jpg`, `image3.jpg`) are used for visual diversity. Cards at specific indexes use these images strategically.

4. **Conditional UI**:
   * Cards display different yard sizes based on index.
   * If a skip is 10 yards or more, a visual warning appears indicating it can't go on the road.
   * Price and hire information are shown clearly with fallback logic (`N/A`) if missing.
   * Bottom prompt appears when a skip is selected or when continuing.
   * Comparison mode allows users to select two skips and view their details side by side.

5. **Styling**: Tailwind CSS is used throughout the app to maintain a modern and clean look, with hover effects, responsive layouts, and custom animations.

## Future Enhancements

* Allow users to view a running total price and checkout flow
* Add more advanced animations or transitions for enhanced UX
* Improve accessibility (e.g., keyboard navigation, ARIA roles)
* Unit testing with Jest and component testing with React Testing Library
* Add user authentication and persistent selection

## Installation & Running Locally

```bash
git clone <repo-url>
cd skip-selector-ui
npm install
npm run dev
```

## Conclusion

This project provides a clean, efficient UI for selecting skip sizes with real-time data, comparison, and interactive feedback. It's built with scalability and user experience in mind using modern React practices and Tailwind CSS.
