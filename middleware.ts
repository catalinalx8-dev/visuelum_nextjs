import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Maintenance-mode middleware.
 *
 * When NEXT_PUBLIC_MAINTENANCE_MODE is set to "1", every
 * incoming request (except the paths listed below) is redirected to
 * /mentenanta so visitors see the maintenance page.
 *
 * Paths that are always allowed through:
 *   /mentenanta  — the maintenance page itself
 *   /api/*       — internal API routes (email, etc.)
 *
 * To activate:   set NEXT_PUBLIC_MAINTENANCE_MODE=1 in your .env.local.
 * To deactivate: set NEXT_PUBLIC_MAINTENANCE_MODE=0 (or remove the variable).
 */
export function middleware(request: NextRequest) {
  const maintenanceMode =
    process.env.NEXT_PUBLIC_MAINTENANCE_MODE === '1' ||
    process.env.MAINTENANCE_MODE === '1'

  if (!maintenanceMode) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // Avoid redirect loops for the maintenance page itself.
  if (pathname === '/mentenanta') {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/mentenanta', request.url))
}

export const config = {
  /*
   * Match every route except Next.js internals and static assets so we don't
   * interfere with image optimisation, fonts, or public files.
   */
  matcher: [
    '/((?!api|_next/static|_next/image|_next/data|favicon\\.ico|.*\\..*).*)',
  ],
}
