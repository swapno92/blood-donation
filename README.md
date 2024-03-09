# Drop Sync
### Welcome to the Blood Donation System Website! This web application is built using Next.js, a React framework for building server-side rendered and statically generated web applications.

## Live link: [https://blood-donation-server-binary-avanger.vercel.app](https://blood-donation-binary-avengers.vercel.app/)

## Goal:

#### DropSync's main objective is to provide an effective and user-friendly blood donation website that connects blood donors and those in need of blood. By streamlining the blood donation procedure, the platform hopes to facilitate communication and coordination between blood donors and recipients or those in need of blood.


## Features:
- User Authentication: Users can sign up, log in, and log out securely to access the blood donation system functionalities.
- Blood Donation Requests: Users can request blood donations by specifying their blood type and the quantity needed.
- Donor Registration: Donors can register themselves by providing their details including blood type, contact information, and availability.
- Search Donors: Users can search for donors based on their blood type, location, and availability.
- Dashboard: Users and donors have their personalized dashboards where they can manage their requests, donations, and profile information.


## How to run our website locally 
- Clone the repository: git clone ``` https://github.com/swapno92/blood-donation.git ```
- Navigate into the project directory: ``` cd blood-donation-system ```
- Install dependencies: ``` npm install / npm i / yarn add ```
- Set up environment variables: Create a ``` .env.local ```file in the root directory and add the necessary environment variables.
  Replace the code in  ``` .env.local ``` file 
  ```ruby
  MONGODB_URI=Your Key
  NEXT_PUBLIC_apiKey=Your Key
  NEXT_PUBLIC_authDomain=Your Key
  NEXT_PUBLIC_projectId=Your Key
  NEXT_PUBLIC_storageBucket=Your Key
  NEXT_PUBLIC_messagingSenderId=Your Key
  NEXT_PUBLIC_appId=Your Key
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=Your Key
  NEXT_PUBLIC_STRIPE_SECRET_KEY=Your Key
  ```
- Start the development server: ``` npm run dev ```
- Open your browser and visit ``` http://localhost:3000 ``` to view the application.

## Technology Used 
- Next.js: Frontend framework for building React applications with server-side rendering and static site generation.
- React: JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment for executing JavaScript code server-side.
- Express.js: Web application framework for Node.js used for building the backend API.
- MongoDB: NoSQL database used for storing user information, blood donation requests, and donor details.