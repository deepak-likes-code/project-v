// pages/api/chat.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { messages } = req.body;
    console.log({ messages });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: messages, // Directly use the messages array from the request
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.choices && data.choices.length > 0) {
      res.status(200).json({ answer: data.choices[0].message.content.trim() });
    } else {
      res.status(500).json({ message: "Failed to fetch response from OpenAI" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
