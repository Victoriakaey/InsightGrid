# Insight Grid README

## Overview

Insight Grid is a modern, responsive, and interactive data visualization platform built with Next.js. It provides users with a comprehensive dashboard to visualize and manage data related to charging stations, fleet sizing, and more.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or later)
- npm, yarn, or pnpm (package managers)
- A Firebase project for authentication

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Replace the placeholders with your actual Firebase project configuration values.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/insight-grid.git
   cd insight-grid
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

## Features Implemented

- User authentication using Firebase
- Dynamic dashboard with various data visualizations
- Responsive design for mobile and desktop views
- Interactive components for managing and editing variables
- Real-time updates and state management using Redux
- Customizable charts using ECharts

## Technical Decisions and Trade-offs

- **Framework Choice**: Next.js was chosen for its server-side rendering capabilities, which improve performance and SEO.
- **State Management**: Redux was implemented for global state management, allowing for a predictable state container and easier debugging.
- **Firebase Authentication**: Firebase was selected for user authentication due to its ease of integration and robust security features.
- **Styling**: Tailwind CSS was used for styling, providing a utility-first approach that allows for rapid UI development.

## Known Limitations

- The application currently does not support multi-language features.
- Some components may not be fully optimized for accessibility.
- The dashboard's performance may degrade with a large dataset due to the current implementation of state management.

## Time Spent

Approximately 80 hours were spent on the development of this project, including planning, coding, testing, and debugging.

## Local Development Instructions

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

3. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Conclusion

Insight Grid is designed to provide a seamless experience for users looking to visualize and manage their data effectively. We welcome contributions and feedback to improve the platform further.
