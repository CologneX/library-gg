'use server';

import { redirect } from 'next/navigation';
import { hashPassword } from '../password';
import { setSessionCookie } from '../cookie';
import { generateRandomSessionToken, createSession } from '../session';
import prisma from '@/lib/prisma';

const signUp = async (formData: FormData) => {
    const formDataRaw = {
        username: formData.get('username') as string,
        password: formData.get('password') as string,
        confirmPassword: formData.get('confirmPassword') as string,
    };

    if (formDataRaw.password !== formDataRaw.confirmPassword) {
        throw new Error('Passwords do not match');
    }

    // TODO: validate formData before proceeding
    // https://www.robinwieruch.de/next-forms/

    try {
        const passwordHash = await hashPassword(formDataRaw.password);

        const member = await prisma.member.create({
            data: {
                username: formDataRaw.username,
                isAdmin: false,
                passwordHash: passwordHash,
            },
        });

        const sessionToken = generateRandomSessionToken();
        const session = await createSession(sessionToken, member.id);

        await setSessionCookie(sessionToken, session.expiresAt);
    } catch (error) {
        // TODO: add error feedback yourself
        // https://www.robinwieruch.de/next-forms/

        // TODO: add error handling if user email is already taken
        // see "The Road to Next"
    }

    redirect('/');
};

export { signUp };