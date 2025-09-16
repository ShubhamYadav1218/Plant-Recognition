const fetch = require('node-fetch');
require('dotenv').config();

async function listModels() {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = 'https://generativelanguage.googleapis.com/v1beta/models';

  try {
    const response = await fetch(url + '?key=' + apiKey);
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    const data = await response.json();
    console.log('Available models:', data);
  } catch (error) {
    console.error('Error fetching models:', error);
  }
}

listModels();
