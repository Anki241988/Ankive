import {useState,useEffect} from 'react';
import { supabase } from '../lib/supabase';


function MyRegistrations() {

const[registrations,setRegistrations]=useState([])

const [editingRegistration, setEditingRegistration] = useState(null);

const [searchTerm, setSearchTerm] = useState("");


async function fetchRegistrations() {


  const { data: authData, error: authError } =
    await supabase.auth.getUser();

  console.log("Logged-in user ID:", authData.user?.id);
  console.log("Authentication error:", authError);


  const { data, error } = await supabase
    .from("business_registration_requests")
    .select("*");

  
  if (error) {
    console.error("Fetch error:", error.message);
    return;
  }

  
  setRegistrations(data);

  console.log("Data:", data);
}

  useEffect(()=>{

    fetchRegistrations()
  },[])


  async function handleDelete(id){

     const isConfirmed = window.confirm(
    "Are you sure you want to delete this request?"
  );

  if (!isConfirmed) {
    return;
  }

 const { data, error } = await supabase
  .from("business_registration_requests")
  .delete()
  .eq("id", id)
  .select();


  if (error) {
  console.error("Delete failed:", error.message);
  return;
}

if (data.length === 0) {
  console.log("No registration was deleted.");
  return;
}

console.log("Deleted successfully:", data);


setRegistrations((previous) =>
  previous.filter((registration) => registration.id !== id)
);
  }


   function handleUpdate(registration){
setEditingRegistration(registration);

  }

 async function handleSave() {
  if (!editingRegistration) return;

  const { data, error } = await supabase
    .from("business_registration_requests")
    .update({
      business_name: editingRegistration.business_name,
      category: editingRegistration.category,
      city: editingRegistration.city
    })
    .eq("id", editingRegistration.id)
    .eq("status", "pending")
    .select();

  if (error) {
    console.error("Update failed:", error.message);
    alert("Failed to save changes.");
    return;
  }

  if (!data || data.length === 0) {
    alert("No registration was updated.");
    return;
  }

  setRegistrations((previous) =>
    previous.map((registration) =>
      registration.id === editingRegistration.id
        ? data[0]
        : registration
    )
  );

  setEditingRegistration(null);

  alert("Registration updated successfully!");
}


const filteredRegistrations = registrations.filter((registration) =>
  registration.business_name
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);

return (
  <div className="max-w-4xl mx-auto px-6 py-10">

    <h2 className="text-3xl font-bold text-ankive-navy mb-2">MyRegistrations</h2>

    <div className="mb-6">
  <input
    type="text"
    placeholder="Search by business name..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:border-ankive-purple"
  />
</div>

    {filteredRegistrations.map((registration) => (
      <div key={registration.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

        <h3 className="text-xl font-bold text-ankive-navy capitalize">{registration.business_name} </h3>
        <p className="text-xl font-bold text-ankive-navy capitalize">{registration.city} </p>
        <p className="inline-block w-fit bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold capitalize">{registration.status} </p>

        <div>
          <button onClick={()=>handleUpdate(registration)}
            type="button"
            className="bg-ankive-purple text-white px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
          >
            Edit
          </button>

          <button onClick={()=>handleDelete(registration.id)}
            type="button"
            className="border border-red-400 text-red-500 px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
          >
            Delete
          </button>
        </div>

      </div>
    ))}
{editingRegistration && (
  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-5">

    <h3 className="text-xl font-bold text-ankive-navy mb-4">
       Business Name
    </h3>

    <input
      type="text"
      value={editingRegistration.business_name}
      onChange={(e) =>
        setEditingRegistration({
          ...editingRegistration,
          business_name: e.target.value
        })
      }
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
    />

    <label>Business Category</label>
<input
  type="text"
  value={editingRegistration.category ?? ""}
  onChange={(e) =>
    setEditingRegistration({
      ...editingRegistration,
      category: e.target.value
    })
  }
    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
/>
<label>City</label>
<input
  type="text"
  value={editingRegistration.city ?? ""}
  onChange={(e) =>
    setEditingRegistration({
      ...editingRegistration,
      city: e.target.value
    })
  }
    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
/>

    <button

  onClick={handleSave}
      type="button"
      className="bg-ankive-purple text-white px-5 py-2 rounded-lg"
    >
      Save Changes
    </button>

  </div>
)}


  </div>
);
}

export default MyRegistrations;