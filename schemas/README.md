# Shared Validation Schemas

This directory contains shared Zod validation schemas that can be used across both frontend and backend applications.

## Available Schemas

### Authentication
- `loginSchema`: Validates login form data
- `registerSchema`: Validates user registration data

### User
- `userProfileSchema`: Validates user profile data

### Base Schemas
- `emailSchema`: Validates email addresses
- `passwordSchema`: Validates password requirements

## Usage Example

### Frontend (React)
```typescript
import { loginSchema } from '../../schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });
  
  const onSubmit = (data) => {
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
      
      <button type="submit">Login</button>
    </form>
  );
};
```

### Backend (Node.js/Express)
```typescript
import { loginSchema } from '../schemas';
import { Request, Response, NextFunction } from 'express';

export const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await loginSchema.parseAsync(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        status: 'error',
        errors: error.errors
      });
    }
    next(error);
  }
};
```

## Adding New Schemas

1. Create a new schema in `index.ts`
2. Export the schema and its type
3. Update this README with the new schema's documentation

## Validation Messages

Common validation messages are available in the `validationMessages` object for consistent error messages across the application.
