# Haven Tutors - Backend API

This is the backend server for Haven Tutors website, handling email notifications for contact forms, student demo bookings, and tutor applications.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Edit the `.env` file and add your GoDaddy email password:
   ```
   MAIL_USER=info@haventutor.com
   MAIL_PASS=your_actual_password_here
   PORT=5000
   ```

## Running the Server

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### 1. Contact Form
**POST** `/api/contact`

Handles general contact form submissions.

**Request Body (FormData):**
- `name` - Contact person's name
- `email` - Contact person's email
- `subject` - Subject of the message
- `message` - Message content

### 2. Student Demo Booking
**POST** `/api/student-demo`

Handles student demo booking requests.

**Request Body (FormData):**
- `parentName` - Parent's name
- `email` - Parent's email
- `phone` - Contact phone number
- `studentName` - Student's name
- `grade` - Student's grade
- `subjects` - Subjects interested in
- `preferredTime` - Preferred demo time
- `message` - Additional message

### 3. Tutor Application
**POST** `/api/tutor-application`

Handles tutor job applications with resume upload.

**Request Body (FormData):**
- `name` - Tutor's name
- `email` - Tutor's email
- `phone` - Contact phone number
- `education` - Educational background
- `experience` - Teaching experience
- `subjects` - Subjects can teach
- `availability` - Availability schedule
- `message` - Additional message
- `resume` - Resume file (PDF/DOC/DOCX, max 5MB)

## Email Configuration

The server uses GoDaddy SMTP for sending emails:
- **Host:** smtpout.secureserver.net
- **Port:** 465
- **Secure:** Yes (SSL)
- **From Email:** info@haventutor.com

All emails are sent to `info@haventutor.com` with appropriate subjects and formatting.

## Security

- CORS is enabled for frontend communication
- File uploads are validated (type and size)
- Environment variables are used for sensitive data
- The `.env` file is gitignored

## Deployment

When deploying to production:

1. Update the frontend API URLs from `http://localhost:5000` to your production backend URL
2. Set environment variables on your hosting platform
3. Ensure your GoDaddy email credentials are correct
4. Use a process manager like PM2 for production

## Troubleshooting

- **Port already in use:** Change the PORT in `.env`
- **Email not sending:** Verify MAIL_USER and MAIL_PASS in `.env`
- **CORS errors:** Check that frontend URL is allowed in CORS configuration
- **File upload fails:** Check file size (max 5MB) and type (PDF/DOC/DOCX only)

## Railway deployment notes (non-Docker)

If you deploy to Railway without Docker, follow these settings to ensure the Node runtime and npm are available during build:

- Project root / Working Directory: `Backend`
- Build command: `npm install`
- Start command: `npm start` (or `./start.sh` if Railpack expects a `start.sh` script)
- Environment variables: add `MAIL_USER`, `MAIL_PASS`, and any other keys from `.env` in Railway's Environment / Secrets

Files included to help buildpacks detect Node and run install/start:

- `.nvmrc` — requests Node 18 for runtime/build detection
- `start.sh` — a small wrapper that installs production deps and runs `npm start` (Railpack sometimes looks for this file)

If you still see `sh: 1: npm: not found` in Railway build logs after setting the working directory to `Backend`, ensure the service is configured to use the Node.js runtime or select the Node buildpack in Railway's UI. That error means the build image doesn't have Node/npm installed.

If you'd like, I can remove the `Dockerfile` from the repo (I added it earlier) and help you re-trigger a Railway deploy with the above settings.

