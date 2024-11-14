import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ success: false, message: 'Username and password are required' }, { status: 400 });
  }

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Set a cookie to indicate that the user is logged in
    const response = NextResponse.json({ success: true }, { status: 200 });

    // Set the cookie to indicate the user is logged in
    response.cookies.set('isLoggedIn', 'true', {
        httpOnly: true, // Makes cookie accessible only by the server
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 60 * 60 * 24, // 1 day expiry
        path: '/', // Make cookie accessible to the whole site
        sameSite: 'strict', // Use lowercase 'strict'
      });
      
    return response;
  } else {
    return NextResponse.json({ success: false, message: 'Incorrect username or password' }, { status: 401 });
  }
}
