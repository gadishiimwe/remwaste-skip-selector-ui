# Skip Selector UI – README

## Overview

This project is a responsive and accessible React application designed to allow users to select a suitable skip size for waste removal. The skip options are dynamically fetched from an external API, ensuring real-time data integration.

## Features

* **Live Data**: Fetched from `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
* **Responsive Design**: Tailwind CSS is used to create a clean, mobile-friendly UI
* **Dynamic Rendering**: Each skip card displays relevant information such as yard size, hire period, price, and conditional road-use warnings
* **Reusable Components**: The app follows a component-based architecture for maintainability

## File Structure

```
/src
  /components
    SkipCard.jsx         // Individual skip card UI
    SkipSelector.jsx     // Grid layout for multiple cards
  /hooks
    useFetchSkips.js     // Custom hook to fetch data from API
  App.jsx                // Main app component
  main.jsx               // Entry point
```

## Approach

1. **Data Fetching**: Created a custom hook `useFetchSkips` to fetch the list of skips from the API endpoint. This hook returns both the skip data and a loading state.

2. **Component Design**:

   * `SkipSelector.jsx` maps over the fetched data and renders each `SkipCard`.
   * `SkipCard.jsx` displays a styled card with image selection logic, dynamic yard size assignment, pricing, and warnings for larger skips (10+ yards).

3. **Images**: Three different local images (`image1.jpg`, `image2.jpg`, `image3.jpg`) are used for visual diversity. Cards at specific indexes use these images strategically.

4. **Conditional UI**:

   * Cards display different yard sizes based on index.
   * If a skip is 10 yards or more, a visual warning appears indicating it can't go on the road.
   * Price and hire information are shown clearly with fallback logic (`N/A`) if missing.

5. **Styling**: Tailwind CSS is used throughout the app to maintain a modern and clean look, with hover effects and responsive layouts.

## Future Enhancements

* Allow users to select a skip and view a running total price
* Add animations or transitions for enhanced UX
* Improve accessibility (e.g., keyboard navigation, ARIA roles)
* Unit testing with Jest and component testing with React Testing Library

## Installation & Running Locally

```bash
git clone <repo-url>
cd skip-selector-ui
npm install
npm run dev
```

## Conclusion

This project provides a clean, efficient UI for selecting skip sizes with real-time data. It's built with scalability and user experience in mind using modern React practices and Tailwind CSS.
