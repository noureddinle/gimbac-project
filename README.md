Gimbac - E-Learning Platform for Moroccan High School Students

Overview
Gimbac is an e-learning platform tailored for Moroccan high school students, providing access to video courses, PDF resources, interactive quizzes, and live sessions with teachers. Students can subscribe monthly or purchase points to access specific content, while parents can monitor their child's progress through dedicated accounts. The platform is designed to support the Moroccan high school curriculum and foster a collaborative learning environment.
Features

Video Courses: High-quality video content covering the Moroccan high school curriculum.
PDF Resources: Downloadable study materials and notes in PDF format.
Quizzes: Interactive quizzes to test student knowledge and track performance.
Live Teacher Sessions: Scheduled sessions with teachers for personalized guidance.
Progress Tracking: Dashboard for students and parents to monitor learning progress and performance metrics.
Flexible Payment System: Monthly subscriptions or point-based purchases for accessing courses, PDFs, and quizzes via Stripe.
Parent Access: Dedicated accounts for parents to follow their child's academic progress.
User Authentication: Secure login for students, parents, and teachers.

Technologies Used

Frontend: Next.js (React framework for server-side rendering and static site generation)
Backend: Node.js (with Express for API development)
Database: Supabase (PostgreSQL-based backend-as-a-service for storing user data, courses, quizzes, and transactions)
Payment Processing: Stripe API for secure subscriptions and point-based payments
Authentication: JSON Web Tokens (JWT) or Supabase Authentication for secure user management
File Storage: Supabase Storage (for hosting PDF files and video content)
Styling: Tailwind CSS for responsive and modern UI design
Deployment: Vercel (for Next.js hosting, if applicable)

Installation
To run Gimbac locally, follow these steps:

Clone the repository:git clone https://github.com/noureddinle/gimbac-project.git


Navigate to the project directory:cd gimbac


Install dependencies:npm install


Set up environment variables:
Create a .env.local file in the root directory.
JWT_SECRET=youcandoit
STRIPE_SECRET_KEY=sk_test_51Rl9qhFtougrNRzTki7KVUaDCV8dP750sQwNMZkuOcPZD92l9JYW2kJWq94yHaqGvMyqdqEeH4KouzpMv7wdXcYr004CPNXl1n
PUBLIC_STRIPE_KEY=pk_test_51Rl9qhFtougrNRzTm7pQIPFzrYhHGwV6Vvqx9ICFmfNjf8upvTqvvViWyUU1GtZEdOF1n3NfI1Iq2Tkxc4vJJlT500KfPGFKRJ
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
NEXT_PUBLIC_SUPABASE_URL=https://tplkhqcdxrnhhouziuvf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbGtocWNkeHJuaGhvdXppdXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNDc3ODYsImV4cCI6MjA3MDkyMzc4Nn0.WK_1IoabqFLskJw347Y_ySfa-s8jJ7Kn6PffEMGWx3g
NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbGtocWNkeHJuaGhvdXppdXZmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTM0Nzc4NiwiZXhwIjoyMDcwOTIzNzg2fQ.3gk3rYHk0b7jv8HjvUu0n2x1uYHk3rYHk0b7jv8HjvUu0n2x1uY


Obtain SUPABASE_URL, SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY from your Supabase project dashboard.
Replace other placeholders with your Stripe keys and optional JWT secret.


Run theagrave development server:npm run dev


Access the application:
Open your browser and navigate to http://localhost:3000.



Usage

Visit http://localhost:3000 to access the platform.
Sign up as a student, parent, or teacher using Supabase Authentication or custom login.
Browse video courses, PDFs, or quizzes, and purchase content using points or a subscription.
Schedule live sessions with teachers (for students) or monitor progress (for parents) via the dashboard.
Take quizzes to test knowledge and view results in the progress tracker.

Live Demo: [Link to deployed site, if applicable]Screenshots:
Project Structure
gimbac/
├── components/        # Reusable React components
├── pages/             # Next.js pages (routes)
├── api/               # API routes for backend logic
├── lib/               # Supabase client initialization and utility functions
├── public/            # Static assets (images, etc.)
├── styles/            # Tailwind CSS or other styles
├── .env.local         # Environment variables (not tracked)
├── package.json       # Project dependencies and scripts
└── README.md          # This file

License
This project is licensed under the MIT License.

Contact
For questions or feedback, reach out to nordnlexe@gmail.com or visit my portfolio.
