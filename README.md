# Communion Web App

## Overview
Communion is a web application built with Next.js that connects people of all faiths through events and community engagement. It allows users to explore, filter, and add events dynamically.

## Features
- **Home Page:** Introduces the platform with a navigation bar, hero section, and call-to-action button.
- **Events Page:** Displays a list of events with filtering and dynamic event addition.
- **Responsive UI:** Designed with Tailwind CSS for seamless viewing across devices.
- **Next.js Features:** Utilizes server-side rendering, API routes, and routing.

## Tech Stack
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** JSON/Local State (Can be extended to use a database like Firebase or PostgreSQL)
- **Hosting:** Vercel

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/communion-web-app.git
   ```
2. Navigate to the project folder:
   ```sh
   cd communion-web-app
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

## Deployment
The app is deployed on Vercel. To deploy your own version:
1. Push your project to GitHub.
2. Connect the repository to Vercel.
3. Deploy with default settings.

## Challenges & Solutions
- **Dynamic Filtering:** Implemented `useState` to handle event filtering without page reloads.
- **Form Handling:** Used React Hook Form for controlled inputs and validation.
- **Responsive Design:** Leveraged Tailwind CSS grid and flex utilities.

## Live Demo
🌍 **Live App:** [Deployed on Vercel](https://communion-app-theta.vercel.app/) 

## Author
Developed by **Ashok Kumar Reddy**.

## License
This project is licensed under the MIT License.

