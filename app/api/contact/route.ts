import {NextResponse} from "next/server"; import {contactSchema} from "@/lib/validation"; import {verifyRecaptcha} from "@/lib/recaptcha"; import {db} from "@/lib/db";
export async function POST(req:Request){
 try{
  const data=await req.json(); const parsed=contactSchema.safeParse(data);
  if(!parsed.success)return NextResponse.json({success:false,message:"Invalid form data"},{status:400});
  if(parsed.data.website) return NextResponse.json({success:true});
  if(!(await verifyRecaptcha(parsed.data.recaptchaToken)))return NextResponse.json({success:false,message:"reCAPTCHA verification failed"},{status:403});
  await db.contactInquiry.create({data:{name:parsed.data.name,email:parsed.data.email,organization:parsed.data.organization||null,subject:parsed.data.subject,message:parsed.data.message}});
  return NextResponse.json({success:true});
 }catch{return NextResponse.json({success:false,message:"Invalid request"},{status:400})}
}
