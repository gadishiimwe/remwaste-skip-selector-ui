# Skip Selector UI – README

## Overview

This project is a responsive and accessible React application that allows users to select a suitable skip size for waste removal. Skip options are dynamically fetched from an external API, ensuring real-time data integration. The UI features modern design, interactive selection, a comparison mode, and a sticky bottom bar for user feedback and next steps.

## Features

* **Live Data**: Fetched from `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
* **Responsive Design**: Tailwind CSS is used to create a clean, mobile-friendly UI
* **Dynamic Rendering**: Each skip card displays relevant information such as yard size, hire period, price, and conditional road-use warnings
* **Reusable Components**: The app follows a component-based architecture for maintainability
* **Sticky Bottom Bar**: When a skip is selected, a full-width sticky bar appears at the bottom of the screen with skip details and navigation actions (Back, Continue)
* **Modern Animations**: Smooth transitions and feedback for selections

## File Structure

```
/src
  /components
    Header.jsx              // Page header
    SkipCard.jsx            // Individual skip card UI
    SkipSelector.jsx        // Grid layout for multiple cards and sticky bottom bar
    ProgressBar.jsx         // Top stepper navigation
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
   * `SkipSelector.jsx` maps over the fetched data and renders each `SkipCard`, manages selection logic, and displays a sticky bottom bar with skip details and navigation actions.
   * `SkipCard.jsx` displays a styled card with image selection logic, dynamic yard size assignment, pricing, and warnings for larger skips (10+ yards).
   * `ProgressBar.jsx` shows a stepper navigation at the top of the page.

3. **Images**: Three different local images (`image1.jpg`, `image2.jpg`, `image3.jpg`) are used for visual diversity. Cards at specific indexes use these images strategically.

4. **Conditional UI**:
   * Cards display different yard sizes based on the skip data.
   * If a skip is 10 yards or more, a visual warning appears indicating it can't go on the road.
   * Price and hire information are shown clearly with fallback logic (`N/A`) if missing.
   * Sticky bottom bar appears when a skip is selected, showing skip details and Back/Continue actions.

5. **Styling**: Tailwind CSS is used throughout the app to maintain a modern and clean look, with hover effects, responsive layouts, and custom animations.

## Future Enhancements

* Allow users to view a running total price and checkout flow
* Add more advanced animations or transitions for enhanced UX
* Improve accessibility (e.g., keyboard navigation, ARIA roles)
* Unit testing with Jest and component testing with React Testing Library
* Add user authentication and persistent selection

## Installation & Running Locally

# Clone the repository
git clone https://github.com/gadishiimwe/remwaste-skip-selector-ui.git

# Navigate into the project folder
cd remwaste-skip-selector-ui

# Install dependencies
npm install

# Run the development server
npm run dev

## Conclusion

This project provides a clean, efficient UI for selecting skip sizes with real-time data, a sticky bottom bar for actions, and interactive feedback. It's built with scalability and user experience in mind using modern React practices and Tailwind CSS.
