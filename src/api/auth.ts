export type Login = {
  accessToken:string;
  refreshToken:string;
  username:string;
  email:string;
};

export async function loginUser(username:string,password:string):Promise<Login> {
  const res=await fetch("https://dummyjson.com/auth/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      username,
      password,
      expiresInMins:120,
    }),
  });
  
  if (!res.ok) {
    throw new Error("Invalid username or password");
  }
  return res.json();
}

export function isAuthenticated() {
  return sessionStorage.getItem("accessToken");
}

export function login(token: string) {
  sessionStorage.setItem("accessToken", token);
}

export function logout() {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken")
}


