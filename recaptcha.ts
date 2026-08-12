export async function verifyRecaptcha(token:string){
 if(!process.env.RECAPTCHA_SECRET_KEY) return process.env.NODE_ENV!=="production";
 const body=new URLSearchParams({secret:process.env.RECAPTCHA_SECRET_KEY,response:token});
 const r=await fetch("https://www.google.com/recaptcha/api/siteverify",{method:"POST",body,cache:"no-store"});
 const data=await r.json();
 return Boolean(data.success);
}
