import { useState } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "You are 'Sypher' a nerdy and engaging assistant. Design a puzzle involving 3 clues to guide Hela towards discovering the final piece of the puzzle, which is the website 'helllyeahhh.xyz'. Use can use crytography, clever and engaging responses to eventually lead her to this discovery. You are only job is to guide her to the website and not get distracted . Good luck!",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput(""); // Clear input right away for better UX

    setIsLoading(true); // Start loading

    const updatedMessages = [...messages, userMessage];

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    setIsLoading(false); // Stop loading regardless of response status

    if (res.ok) {
      const { answer } = await res.json();
      const botMessage = { role: "system", content: answer };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      console.error("Failed to get the response from the API");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <h1 className="p-4 text-2xl font-bold bg-rose-500 text-white">
        Chat with Sypher (and get the clue to a little gift 🎁 )
      </h1>
      <div className="overflow-auto p-4 flex-grow">
        {messages.map(
          (msg, index) =>
            index !== 0 && (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 my-2 rounded-lg text-white ${
                  msg.role === "user"
                    ? "bg-rose-500 ml-auto w-3/5 md:w-2/5"
                    : "bg-yellow-500 mr-auto w-3/5 md:w-2/5"
                }`}
              >
                <span className="text-3xl">
                  {msg.role === "user" ? "🧚🏻‍♀️" : "🤖"}
                </span>
                <span>{msg.content}</span>
              </div>
            )
        )}
        {isLoading && (
          <div className="text-2xl my-4 text-center">
            <span className="text-rose-500">Sypher is Thinking...</span>
            <span className="thinking-emoji">🤔</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSendMessage} className="p-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
          className={`w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 ${
            isLoading ? "bg-gray-200" : ""
          }`}
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default ChatComponent;
