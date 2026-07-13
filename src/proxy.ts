import { NextResponse, type NextRequest } from "next/server";
import { adminToken, ADMIN_COOKIE } from "@/lib/auth-token";

export default function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // 1) Language handling via ?lang=
  const langParam = searchParams.get("lang");
  let res: NextResponse | null = null;
  if (langParam === "fr" || langParam === "en") {
    res = NextResponse.next();
    res.cookies.set("ett_lang", langParam, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "lax",
    });
  }

  // 2) Protect /admin (except /admin/login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    const token = req.cookies.get(ADMIN_COOKIE)?.value;
    if (token !== adminToken()) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  return res ?? NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
