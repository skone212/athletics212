import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    if (!error) {
      setSubmitted(true);
    } else {
      alert("Fehler beim Senden des Login-Links: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-sm">
        {submitted ? (
          <p className="text-green-600 text-center">
            Ein Login-Link wurde dir per E-Mail gesendet.
          </p>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-center">Login</h1>
            <input
              type="email"
              placeholder="Deine E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded hover:bg-gray-800"
            >
              Login-Link senden
            </button>
          </form>
        )}
      </div>
    </div>
  );
}