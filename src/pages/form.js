import { useState } from "react";
export default function PageWithJSbasedForm() {
  const [aiResponse, setAiResponse] = useState();
  // Handles the submit event on form submit.
  let chatResponse;
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      description: event.target.description.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/chat";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    const chatResponse = await response.json();
    setAiResponse(chatResponse);
  };

  const InputPrompt = () => {
    return (
      <>
        <h1>Submit your job description</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">Job description</label>
          <input type="text" id="description" name="description" required />

          <button type="submit">Submit</button>
        </form>
      </>
    );
  };

  const Recommendation = ({ aiResponse }) => {
    return (
      <div>
        <h1>Our AI Recommendation</h1>
        <p>{aiResponse}</p>
      </div>
    );
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <>
      {aiResponse ? (
        <Recommendation aiResponse={aiResponse} />
      ) : (
        <InputPrompt />
      )}
    </>
  );
}
