import {NextResponse} from "next/server"; import {loginSchema} from "@/lib/validation"; import {authenticate} from "@/lib/auth";
export async function POST(req:Request){
 const parsed=loginSchema.safeParse(await req.json()); if(!parsed.success)return NextResponse.json({success:false,message:"Invalid credentials"},{status:400});
 const user=await authenticate(parsed.data.email,parsed.data.password); if(!user)return NextResponse.json({success:false,message:"Invalid credentials"},{status:401});
 const res=NextResponse.json({success:true});
 res.cookies.set("admin_session",user.id,{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:60*60*8});
 return res;
}
