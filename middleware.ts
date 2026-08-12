import {NextResponse} from "next/server"; import type {NextRequest} from "next/server";
export function middleware(req:NextRequest){
 const protectedPath=req.nextUrl.pathname.startsWith("/admin")||req.nextUrl.pathname.startsWith("/api/admin");
 const session=req.cookies.get("admin_session")?.value;
 if(protectedPath&&!session)return req.nextUrl.pathname.startsWith("/api/")?NextResponse.json({message:"Unauthorized"},{status:401}):NextResponse.redirect(new URL("/admin/login",req.url));
 return NextResponse.next();
}
export const config={matcher:["/admin/:path*","/api/admin/:path*"]};
