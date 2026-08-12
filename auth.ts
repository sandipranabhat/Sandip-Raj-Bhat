import {cookies} from "next/headers"; import {db} from "./db"; import bcrypt from "bcryptjs";
export async function authenticate(email:string,password:string){
 const user=await db.user.findUnique({where:{email}});
 if(!user?.passwordHash || !(await bcrypt.compare(password,user.passwordHash))) return null;
 return user;
}
export async function requireAdmin(){
 const c=await cookies(); const id=c.get("admin_session")?.value;
 if(!id) return null;
 return db.user.findUnique({where:{id}});
}
