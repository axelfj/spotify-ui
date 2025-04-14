# 🎧 Spotify UI

This is a simple **React + Next.js** frontend designed to interact with the [Spotify Track Metadata API](https://github.com/axelfj/spotify-api). It provides a user-friendly interface for creating and searching track metadata using ISRC codes, facilitating seamless testing of backend integrations.

---

## 🚀 Features

* **Create Track Metadata:** Input an ISRC to create new track metadata.
* **Search Track Metadata:** Retrieve and display metadata for an existing ISRC.
* **View Album Cover Art:** Display the album cover associated with the track.
* **Basic Authentication:** Securely communicates with the backend using Basic Auth.

---

## 🛠️ Tech Stack

* **Next.js:** React framework for server-side rendering and static site generation.
* **React:** JavaScript library for building user interfaces.
* **Zustand:** Simple and efficient state management.
* **Axios:** Promise-based HTTP client for making API requests.
* **Material UI:** React UI framework for consistent and responsive design.

---

## 📦 Getting Started

### 1. Clone the Repository
git clone [https://github.com/your-username/spotify-ui.git](https://github.com/your-username/spotify-ui.git)
cd spotify-ui

### 2. Install Dependencies
npm install

### 3. Start the Development Server
npm run dev

### ✅ Prerequisites
Ensure the Spotify Track Metadata API is running locally at http://localhost:8080.

#### The backend must have Basic Auth enabled with the following credentials:
Username: admin
Password: password
#### The backend should expose the following endpoints:

POST /track/metadata?isrc=<your_isrc>
GET /track/metadata?isrc=<your_isrc>
GET /track/cover?isrc=<your_isrc>

### 🧭 Navigation
The application features two primary screens accessible via the top navigation menu:

Create Track: Calls the POST /track/metadata?isrc=... endpoint.
Search Track: Calls the GET /track/metadata?isrc=... endpoint and displays the track's cover art.

### 👨‍💻 Author
Made with ❤️ by Axel Fernandez