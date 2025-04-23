# Wheels Wedding

A wedding car booking service application built with Node.js, Express, and React.

## Features

- Car booking system for weddings
- Contact form
- User authentication
- Responsive design

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL (via Neon)

## Deployment Instructions

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (or Neon database service)

### Local Development

1. Clone the repository
   ```
   git clone <repository-url>
   cd WheelsWedding
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=your_database_connection_string
   PORT=3000
   NODE_ENV=development
   SESSION_SECRET=your_session_secret
   ```

4. Run the development server
   ```
   npm run dev
   ```

### Deploying to Vercel

1. Push your code to GitHub
2. Sign up for a Vercel account at https://vercel.com
3. Import your GitHub repository
4. Configure environment variables:
   - DATABASE_URL
   - SESSION_SECRET
5. Deploy the application

## License

MIT