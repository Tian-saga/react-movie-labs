# react-movie-labs
# Movie Information App

## Project Overview
This project is a movie information application based on React, integrated with the TMDB API. Users can browse popular movies, search for movies, view movie details, and add movies to their favorites list.

## Project Motivation
The main goal of this project is to provide users with a convenient way to browse and filter popular movie information, while allowing developers to learn and master the use of modern technology stacks such as React, React Query, and MUI.

## Features
- **Pagination**: The homepage supports pagination, allowing users to browse the movie list page by page, making it easier to manage large amounts of movie data without loading all content at once, which enhances user experience.
- **Filtering, Searching, and Sorting**: Users can filter movies by genre, search for movies using keywords, and sort movies by rating and release date to easily find content that suits their preferences.
- **Favorites Management**: Users can add interesting movies to their favorites list for easy future reference. Favorites are stored locally to provide a personalized experience.
- **Responsive UI**: The UI is built with the MUI component library to provide a responsive layout that adapts to different screen sizes.

## Installation and Running

Follow these steps to clone and run the project:

1. Clone the project code:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project:
   ```bash
   npm start
   ```

## File Structure

```
├── src
│   ├── components        # Reusable UI components such as FilterMoviesCard, PageTemplate, etc.
│   ├── contexts          # Context providers for the application (e.g., MoviesContext)
│   ├── pages             # Page components (e.g., HomePage, MovieDetailsPage, etc.)
│   ├── api               # Modules for interacting with the TMDB API
```

## Tech Stack

- **React**: Used for building the user interface.
- **React Query**: Used for data fetching and caching to improve data request efficiency.
- **MUI**: Used for creating responsive and modern UI components.

## Usage Guide
- **Browse Movies**: View the paginated movie list on the homepage and use the filter and sort features to find movies of interest.
- **Search and Filter**: Search for movies by name or filter by specific genres.
- **Add to Favorites**: Add favorite movies to your favorites list for easy future reference.

## Screenshots

![Homepage Screenshot](link-to-homepage-screenshot)  
*Figure 1: Homepage with movie list and filters.*

![Movie Details Screenshot](link-to-movie-details-screenshot)  
*Figure 2: Movie details page showing movie information.*

## Future Improvements
- **User Reviews and Ratings**: Add functionality for users to leave reviews and rate movies.
- **More Movie Details**: Include more detailed information such as actor biographies and movie stills.
- **Backend Integration**: Use Firebase or another backend to support cross-device favorites synchronization.

## Contribution Guide

Contributions are welcome! If you have good ideas or find any issues, please follow these steps to contribute:

1. Fork this project to your GitHub account.
2. Create a new branch for a new feature or bug fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes and push them to your branch:
   ```bash
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
4. Create a Pull Request and describe your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Demo Video
Watch the demonstration of the key features of this project: [Demo Video](https://your-video-link.com)  
*The video includes a voiceover explaining the main features and how to use the application.*

