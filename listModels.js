const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function testModel() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    // Test with a known valid model name from Google AI docs
    const model = genAI.getGenerativeModel({ model: "text-bison-001" });
    console.log('Model instance created:', model ? 'Success' : 'Failed');
  } catch (error) {
    console.error('Error testing model:', error);
  }
}

testModel();
