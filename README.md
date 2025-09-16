# Plant-Recognition
🌿 Plant Recognition & Business Insight Tool

A web-based tool that takes a text description of a plant and returns its name, uses, and potential business opportunities — designed with ethical AI principles in mind.

📌 Features

✅ Text-Based Plant Analysis – Enter a plant description and get instant insights.
✅ Ethical AI Design – Outputs are clearly marked as simulated or AI-generated.
✅ Fallback Mechanism – Uses a verified backend when AI is unavailable.
✅ Scalable Design – Ready to integrate Google Gemini API for real-time analysis.
✅ Clean UI – Built with Tailwind CSS for a modern, responsive interface.

🛠️ Tech Stack

Frontend: HTML, Tailwind CSS, Vanilla JavaScript
Backend: Node.js, Express.js
AI/Logic: Google Gemini API (planned integration) + Static JSON-based simulation
Hosting (Optional): Can be deployed on Netlify (frontend) & Render/Heroku (backend)

🔄 Functional Flow

User enters plant description in textarea.

Frontend sends POST request to backend.

Backend either:

Returns a simulated response (from local dataset), OR

Calls Gemini API and returns AI-generated response.

Frontend displays result clearly with confidence/alerts.

⚙️ Setup & Installation
# Clone the repository
git clone https://github.com/your-username/plant-recognition.git

# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file and add your Gemini API key
echo "GEMINI_API_KEY=your_api_key_here" > .env

# Run the server
node server.js


Then open index.html in the frontend folder (or use Live Server).

🧪 Sample Test Descriptions

"This plant has thick, fleshy green leaves with gel inside. It helps soothe burns."

"A small aromatic plant with green leaves, considered sacred in India, used in herbal teas."

"Tall thin grass with a lemon-like fragrance, used in tea and natural mosquito repellents."

🌱 Future Enhancements

✅ Image-based recognition (multimodal input)

✅ Confidence scores & source tagging for AI responses

✅ Expand plant database with verified entries

✅ Multilingual support for wider reach

📜 Ethical AI Commitment

Transparent labeling of AI outputs

Fallback to verified dataset when AI is uncertain

Reliability checks before showing results to users

🤝 Contributing

Pull requests are welcome! If you'd like to add more plant data or improve prompts, open an issue first to discuss what you’d like to change.

📄 License

This project is licensed under the MIT License – feel free to use and improve it.
