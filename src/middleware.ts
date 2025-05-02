// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  console.log(request.url);
  return NextResponse.next();
}
