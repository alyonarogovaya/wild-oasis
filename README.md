# 🌲 Wild Oasis – Hotel CMS Dashboard

Welcome to **Wild Oasis**, a modern and responsive hotel CMS dashboard built
with **React** and **React Query**. This app is designed to help hotel staff
manage bookings, cabins, users, and settings – all from an intuitive interface.

🔗 **Live Demo**:
[https://wild-oasis-gamma-eight.vercel.app](https://wild-oasis-gamma-eight.vercel.app)

---

## 🔐 Login Credentials

To explore the app, use the following credentials:

- **Email**: `testuser@gmail.com`
- **Password**: `root1234`

---

## 🚀 Features

### 📊 Dashboard

- View hotel statistics for the past **7, 30, and 90 days**
- Overview of **actions for today** including arrivals and departures

### 📅 Bookings

- See a list of all current and past bookings
- View detailed booking information
- Update and manage individual bookings

### 🛏️ Cabins Management

- View all available cabins with details
- Edit cabin information: **price**, **max guests**, and other settings

### 👥 Users Management

- **Add new internal users only** (no public sign-up available)

### ⚙️ Settings Page

- **General Settings**: Configure key preferences for the hotel

---

## 🧪 Built With

- **React** – Fast and modern frontend framework
- **React Query** – Efficient data fetching, caching, and synchronization
- **React Router** – Routing and navigation
- **Styled Components** – Styling and responsive design
- **Vercel** – Hosting platform for modern web apps

---

## 📂 Project Structure (Simplified)

```
src/
├── context/            # React context providers 
├── data/               # Static data
├── features/           # Feature modules
│   ├── authentication/ # Login and auth logic
│   ├── bookings/       # Booking listing, details, and actions
│   ├── cabins/         # Cabins management 
│   ├── check-in-out/   # Check-in and check-out operations
│   ├── dashboard/      # Hotel stats and today's actions
│   └── settings/       # General settings and preferences
├── hooks/              # Custom React hooks 
├── pages/              # Top-level routed pages 
├── services/           # API interaction logic 
├── styles/             # Global and component-specific styling
├── ui/                 # Reusable UI components 
├── utils/              # Utility/helper functions 
├── App.jsx             # Root component and route configuration
└── main.jsx            # Entry point to bootstrap React app
```

---

## 🙌 Acknowledgments

Built with ❤️ using React and React Query. Inspired by modern hospitality needs
and elegant admin UIs.
