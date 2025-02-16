import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const saltRounds = 10;

interface Encrypt {
    generatePassword: (password: string) => string;
    comparePassword: (plainPassword: string, hashPassword: string) => boolean;
}

const encrypt: Encrypt = {
    generatePassword: (password: string): string => {
        try {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));
        } catch (error) {
            throw error;
        }
    },
    comparePassword: (plainPassword: string, hashPassword: string): boolean => {
        try {
            return bcrypt.compareSync(plainPassword, hashPassword);
        } catch (error) {
            throw error;
        }
    },
};

const tokenVerify = (token: string): string | jwt.JwtPayload => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded;
    } catch (error) {
        console.error('JWT Token Verification Error:', error);
        throw new Error('Invalid Token');
    }
};

export { encrypt, tokenVerify };
