// import { Request, Response, NextFunction } from 'express';
// import { verifyToken } from '../utils/jwt';

// interface CustomRequest extends Request {
//   user?: any;
// }

// export function authenticate(req: CustomRequest, res: Response, next: NextFunction) {
//   const token = req.header('Authorization')?.replace('Bearer ', '') ?? '';

//   if (!token) {
//     res.status(401).json({ message: 'Access denied. No token provided.' });
//   }

//   const decoded = verifyToken(token);

//   if (decoded) {
//     req.user = decoded; // Attach user info to request object
//     next();
//   }
//   else {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// }
