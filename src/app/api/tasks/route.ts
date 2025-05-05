import { connectDB } from '@/db/mongoose';
import { Task } from '@/models/Task';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const newTask = await Task.create(data);
  return NextResponse.json(newTask, { status: 201 });
}
