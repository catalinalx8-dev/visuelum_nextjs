import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Maintenance-mode middleware.
 *
 * When the environment variable MAINTENANCE_MODE is set to "1", every
 * incoming request (except the paths listed below) is redirected to
 * /mentenanta so visitors see the maintenance page.
 *
 * Paths that are always allowed through:
 *   /mentenanta  — the maintenance page itself
 *   /raport/*    — confidential client report pages (clients can still view)
 *   /api/*       — internal API routes (email, etc.)
 *
 * To activate:   set MAINTENANCE_MODE=1 in your .env.local or hosting env vars.
 * To deactivate: set MAINTENANCE_MODE=0 (or remove the variable entirely).
 */
export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === '1'

  if (maintenanceMode) {
    const { pathname } = request.nextUrl

    const isAllowed =
      pathname === '/mentenanta' ||
      pathname.startsWith('/raport/') ||
      pathname.startsWith('/api/')

    if (!isAllowed) {
      return NextResponse.redirect(new URL('/mentenanta', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  /*
   * Match every route except Next.js internals and static assets so we don't
   * interfere with image optimisation, fonts, or public files.
   */
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)',
  ],
}
