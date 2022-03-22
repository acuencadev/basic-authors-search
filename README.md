# Basic Authors Search

## Requirements
We would like for you to build a basic app that allows users to search for an author and view details about various works. To drive the app, please use the free APIs provided by OpenLibrary: https://openlibrary.org/developers/api. The app should have the following features:

- Include a search bar that allows me to search for authors (https://openlibrary.org/dev/docs/api/authors)
- Render a list of authors returned from the search, noting the search term somewhere in the UI
- Clicking on an author's name should fetch that author's works (https://openlibrary.org/dev/docs/api/authors)
- Render a list of books written by the given author, noting the author's name somewhere in the UI
- Clicking on a book's name should fetch that book's details (https://openlibrary.org/dev/docs/api/books)
- Render a book details page with as much info about the book as possible
- On this page we should see title, first published date, a book cover, list of subjects, first sentence, summary / description
- When a field is missing, then render some kind of "not available" state for the given field (eg. "Summary not available...")
- Some fields may require further data fetching, such as the various book covers (the "works" API returns a list of "covers" which are IDs and can be used with the "covers" API here: https://openlibrary.org/dev/docs/api/covers, eg. https://covers.openlibrary.org/b/id/484851-L.jpg)
- Include a README.md with steps on how to run your app and any other relevant information

## Caveats / other thoughts
- Search bar should always be there, so that I can start another search at any time
- Searching again will clear out any existing search results, eg. if I am looking at Book Y's details, then searching for Author Z will eliminate the book details and render the new search results
- The app should be responsive, such that the information is clearly visible on all screen sizes
- There is no official "design" so use your imagination - it definitely doesn't have to visually stunning, but it should be readable and usable
- The app should be fully accessible as per WCAG 2.1 AA guidelines

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.