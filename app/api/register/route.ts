import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, IDNumber, mobNumber, field, semester, email, skill, ExLevel } = await req.json();

    const newUser = await prisma.user.create({
      data: {
        name,
        IDNumber: parseInt(IDNumber),
        mobNumber: parseInt(mobNumber),
        field,
        semester,
        email,
        skill,
        ExLevel,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json({ error: 'ID Number or email already exists' }, { status: 400 });
    } else {
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }
}


export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error retrieving users' }, { status: 500 });
  }
}