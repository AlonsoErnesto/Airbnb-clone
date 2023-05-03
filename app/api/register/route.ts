import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST (
   requests : Request
) {
   const body = await requests.json();
   const {
      email,
      name,
      password,
   } = body;

   const hashedPassword  = await bcrypt.hash(password,12);
   const user = await prisma.user.create({
      data : {
         email, 
         name,
         hashedPassword,
      }
   });

   return NextResponse.json(user);

}