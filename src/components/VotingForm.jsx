import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const FORM_ENDPOINT = "https://formspree.io/f/xkgvnqyd"; 

const VotingForm = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && localStorage.getItem(`voted-${currentUser.uid}`)) {
        setHasVoted(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleVote = async (option) => {
    if (!user) { setMessage("Please log in to vote."); return;}
    if (hasVoted) { setMessage("You have already voted!"); return;}

    try {
      // submit to Formspree
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: user.email,
          vote: option,
        }),
      });

      if (res.ok) {
        setMessage(`Thanks for voting for "${option}"!`);
        setHasVoted(true);
        localStorage.setItem(`voted-${user.uid}`, "true");
      } 
      else { setMessage("Submission failed. Please try again.");}} 
      
      catch (err) {console.error(err); setMessage("Something went wrong. Please try again."); }
  };

  return (
    <div className="border p-4 rounded shadow-md max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600"> What competition do you want to have first? </h2>

      <div className="flex flex-col gap-2">
        {["Paper Airplanes", "Logic Puzzles", "Volleyball"].map((option) => (
          <button
            key={option}
            onClick={() => handleVote(option)}
            disabled={hasVoted}
            className={`p-2 rounded border !bg-none !bg-indigo-300 hover:!bg-gray-200  ${hasVoted ? "cursor-not-allowed" : ""}`}> {option} </button>
        ))}
      </div>

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default VotingForm;
