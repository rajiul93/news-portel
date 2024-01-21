import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email, id) {
  const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
  const payload = { email: email, id: id };
  let token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
    .sign(secretKey);

  return token;
}


export async function VerifyToken(token){
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET);
    const decoded = await jwtVerify(token,secretKey)
    return decoded['payload']

}

