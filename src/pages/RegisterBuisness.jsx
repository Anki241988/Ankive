import { House } from "lucide-react";
import { useState } from "react";
import {supabase} from "../lib/supabase.js"
function RegisterBuisness() {
const[buisnessName,setBuisnessName]=useState('')
const[buisnessCategory,setBuisnessCategory]=useState('')
const[city,setCity]=useState('')


async function handleRegister(e) {
  e.preventDefault();

  const { data, error } = await supabase.rpc(
    "submit_business_registration",
    {
      p_name: buisnessName,
      p_category: buisnessCategory,
      p_city: city
    }
  );

  if (error) {
    console.error("Registration failed:", error.message);
    alert("Registration failed: " + error.message);
    return;
  }

  console.log("Registration request ID:", data);

  alert("Business registration submitted! Waiting for Ankive approval.");

  setBuisnessName("");
  setBuisnessCategory("");
  setCity("");
}

  return (
    <>
    <div className='max-w-lg flex flex-col  justify-center p-8 mx-auto mt-18'>
   <h2 className='text-3xl font-extrabold text-ankive-navy'>Register Your Business</h2>
   <p>Start growing your buisness with Ankive</p>

<form onSubmit={handleRegister} className='flex flex-col gap-5 mt-8'>

<label className='text-sm font-semibold text-ankive-navy'> Buisness Name</label>
<input className='w-full rounded-xl border border-gray-300 px-4 py-3' placeholder='buisness_Name' value={buisnessName} onChange={(e)=>setBuisnessName(e.target.value)}></input>

<label className='text-sm font-semibold text-ankive-navy'>Buisness Category</label>
<input className='w-full rounded-xl border border-gray-300 px-4 py-3' placeholder='buisness_Category' value={buisnessCategory} onChange={(e)=>setBuisnessCategory(e.target.value)}></input>

<label className='text-sm font-semibold text-ankive-navy'>City</label>
<input className='w-full rounded-xl border border-gray-300 px-4 py-3' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} ></input>

<button type='submit' className='rounded-xl bg-ankive-purple px-6 py-3 font-bold text-white hover:opacity-90'>Register Buisness</button>

</form>
</div>
</>


  )
}
export default RegisterBuisness