import { connectDB } from '@/db/mongoose';
import { Task } from '@/models/Task';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const task = await Task.findById(params.id);
  return NextResponse.json(task);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  await connectDB();
  const data = await req.json();
  const updatedTask = await Task.findByIdAndUpdate(params.id, data, { new: true });
  return NextResponse.json(updatedTask);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await connectDB();
  await Task.findByIdAndDelete(params.id);
  return NextResponse.json({ message: 'Task deleted' });
}
