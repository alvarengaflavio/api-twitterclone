import jwt from 'jsonwebtoken';
import { findByIdUserService } from '../users/user.service.js';

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw new Error('No token provided');

    const parts = authHeader.split(' '); // parts[0] = Bearer, parts[1] = token
    if (!parts.length === 2) throw new Error('Token format error');

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) throw new Error('Token format error');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findByIdUserService(decoded.Id);
    if (!user || !user.id) throw new Error('Invalid token');

    req.userId = user.id;
    next();
  } catch (err) {
    return res.status(401).send({
      message: 'Invalid token',
    });
  }
};
