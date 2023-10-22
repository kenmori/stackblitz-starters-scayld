import { NextResponse } from 'next/server';

export async function GET() {
  console.log('>>> Called /api/source !!!');
  return NextResponse.json({ data: Math.random() });
}
