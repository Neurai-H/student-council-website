import { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      {submitted ? (
        <div className="w-full max-w-md bg-white rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
          <p>Your suggestion has been submitted successfully.</p>
        </div>
      ) : (
        <form
          action="https://formspree.io/f/mnnbqayd"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white">

          <h2 className="text-2xl font-bold mb-4 text-center">Submit a Suggestion</h2>

          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border rounded" />

          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border rounded" />

          <label className="block mb-2 font-semibold">Suggestion</label>
          <textarea
            name="suggestion"
            placeholder="Your Suggestion"
            required
            rows="5"
            className="w-full mb-4 p-2 border rounded"></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            Submit </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
