// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  return NextResponse.next();
}
