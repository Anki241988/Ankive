
import { supabase } from "../lib/supabase";


function Login() {


    async function handleGoogleLogin() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: window.location.origin + "/RegisterBuisness",
    },
  });

  if (error) {
    console.error(error.message);
  }
}
  return (

    <>

<div className="flex items-center justify-center mt-20">
 <div className="w-full max-w-md rounded-xl bg-white p-8 text-center align-center shadow-lg">
 <h1 className="mb-6 text-2xl font-bold text-ankive-purple">Welcome to Ankive</h1>

 <button onClick={handleGoogleLogin} className="rounded-lg bg-ankive-purple px-6 py-3 text-white hover:bg-purple-700 cursor-pointer">Continue with Google</button>
</div>
</div>
 </>
  )
}
export default Login