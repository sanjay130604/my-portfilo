import { useState } from "react";

export default function ContactForm(){
  const [form, setForm] = useState({name:"", email:"", phone:"", message:""});
  const [status,setStatus] = useState({type:"", message:""});
  const [loading,setLoading] = useState(false);

  function handleChange(e){ setForm(s=>({...s,[e.target.name]: e.target.value})); }

  function validate(){
    if(!form.name.trim() || !form.email.trim() || !form.message.trim()){
      setStatus({type:"error", message:"Please fill name, email and message."});
      return false;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRe.test(form.email)){ setStatus({type:"error", message:"Please enter a valid email."}); return false; }
    return true;
  }

  function handleSubmit(e){
    e.preventDefault();
    setStatus({type:"", message:""});
    if(!validate()) return;
    setLoading(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    const mailto = `mailto:sanjaysaravanan130604@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setTimeout(()=>{
      setLoading(false);
      setStatus({type:"success", message:"Email composer opened — send from your mail client."});
      setForm({name:"", email:"", phone:"", message:""});
    }, 700);
  }

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-xxl p-10 shadow-card -mt-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Let's Discuss your Project</h2>
            <p className="text-gray-600 mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-md bg-purple-50 flex items-center justify-center">📍</div>
                <div>
                  <div className="text-sm text-gray-500">Address :</div>
                  <div className="font-semibold">Kumbakonam ,thanjavur</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-md bg-purple-50 flex items-center justify-center">✉️</div>
                <div>
                  <div className="text-sm text-gray-500">My Email :</div>
                  <div className="font-semibold">sanjaysaravanan130604@mail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-md bg-purple-50 flex items-center justify-center">📞</div>
                <div>
                  <div className="text-sm text-gray-500">Call me :</div>
                  <div className="font-semibold">8220355394</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name*" className="border-b pb-2 outline-none" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email*" className="border-b pb-2 outline-none" />
              <input name="location" placeholder="Location" className="border-b pb-2 outline-none" />
              <input name="budget" placeholder="Budget" className="border-b pb-2 outline-none" />
            </div>

            <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Message*" className="w-full border-b pb-2 outline-none" />

            <div className="flex items-center justify-between">
              <div>
                {status.message && <div className={`px-3 py-2 rounded ${status.type==="error" ? "bg-red-100 text-red-600":"bg-green-100 text-green-700"}`}>{status.message}</div>}
              </div>

              <button type="submit" disabled={loading} className="nav-pill px-6 py-2 rounded-md">
                {loading ? "Opening..." : "Submit →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
