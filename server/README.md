# MERN SaaS Template - Backend

## Technologies Used

### Core
- **Node.js** - JavaScript runtime
- **TypeScript** - Type-safe JavaScript
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Authentication & Security
- **JSON Web Tokens (JWT)** - Secure user authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Parse HTTP request cookies

### Development Tools
- **ts-node** - TypeScript execution and REPL
- **ts-node-dev** - Development server with live reload
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Lint code

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```env
NODE_ENV=development
PORT=8080
MONGODB_URI=mongodb://localhost:27017/mern-saas
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
CLIENT_URL=http://localhost:5173
```
