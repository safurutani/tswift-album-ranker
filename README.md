# Taylor Swift Album Ranker

This project is a Taylor Swift album ranker built using React and Firebase. It allows users to rate each song on a scale of 1-10 for each album. Then it will calculate the average rating per album and order the albums based on the ranking.

## Technologies used

- React
- JavaScript
- CSS
- Firebase Authentication
- Firestore Database

## Features

1. User authentication with email verification.
2. Buttons that switch which album you are viewing at a given time.
3. Color themes that correspond to each album as you switch between them.
4. Saved states for each album so that the scores are saved as you switch between them.
5. Reset an album's rating of all songs to the default of 5.
6. Save ratings to Firestore database for authenticated users.

## Usage

1. Register or log in to your account.
2. Verify your email if you are a new user.
3. Input your rating of a song on a scale of 1-10 either by typing or using the arrows in the input field.
4. Click through all the album tabs and do the same.
5. Click "Get Final Ranking" to display all the albums in the order of the highest to lowest ranked.
6. Your ratings will be saved to the Firestore database if you are logged in.

## Installation

1. Clone the repository: `git clone https://github.com/safurutani/tswift-album-ranker.git`
2. Navigate to the project directory: `cd tswift-album-ranker`
3. Install dependencies: `npm install`
4. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication and Google authentication in the Authentication section.
   - Create a Firestore database in the Firestore section.
   - Add your Firebase configuration to a `.env.local` file in the root of your project:
     ```env
     REACT_APP_API_KEY=your-api-key
     REACT_APP_AUTH_DOMAIN=your-auth-domain
     REACT_APP_PROJECT_ID=your-project-id
     REACT_APP_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_APP_ID=your-app-id
     ```
5. Start the development server: `npm start`

## Live Demo

A live demo of the project is available [here](https://tswift-album-ranker.vercel.app/).