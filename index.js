const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Allow all origins for testing
app.use(express.json()); // Parse JSON bodies

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/analyze', async (req, res) => {
  try {
    const description = req.body.description;

    if (!description) {
      return res.status(400).json({ error: 'No description provided' });
    }

const plantData = {
  "thick leaves and heals burns": `Plant Name: Aloe Vera
Traditional Uses: Healing burns, skin treatment, moisturizing
Modern Uses: Cosmetics, health supplements, natural remedies
Business Opportunities: Skincare products, herbal medicines, wellness products`,
  "purple flowers and a calming fragrance": `Plant Name: Neem
Traditional Uses: Antibacterial, antifungal, insect repellent
Modern Uses: Skincare, oral care, natural pesticides
Business Opportunities: Herbal medicines, organic farming, cosmetics`,
  // Add more descriptions and corresponding plant data here as needed
};

const normalizeText = (text) => text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();

const descriptionNormalized = normalizeText(description);

const matchedKey = Object.keys(plantData).find(key => {
  const keyNormalized = normalizeText(key);
  return descriptionNormalized.includes(keyNormalized);
});

const mockAnalysis = matchedKey ? plantData[matchedKey] : `Plant Name: Unknown
Traditional Uses: N/A
Modern Uses: N/A
Business Opportunities: N/A`;

res.json({ analysis: mockAnalysis });
  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'Something went wrong during analysis.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

