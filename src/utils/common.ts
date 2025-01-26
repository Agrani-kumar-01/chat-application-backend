import { Request } from 'express';
import { Languages } from '@dto';

export const getLanguage = (req: Request) => (req.headers['accept-language'] ?? 'en') as Languages;

export const getPlatform = (req: Request) => req.headers['x-platform'];

// export const getUserObj = (userDoc: IUserDoc) => {
//     const keysToBeRemoved = [
//         'password',
//         'authTokenIssuedAt',
//         'failedLoginAttempts',
//         'preventLoginTill',
//         'isFake',
//         '__v',
//     ];

//     const user = userDoc.toJSON();
//     keysToBeRemoved.forEach(key => delete user[key]);
//     return user;
// };
