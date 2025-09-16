// front.js
async function analyzePlant(event) {
  event.preventDefault();

  const description = document.getElementById('description').value;

  if (!description) {
    alert('Please enter a plant description');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    const data = await response.json();

    if (data.analysis) {
      document.getElementById('result').innerHTML = `Analysis: <br>${data.analysis.replace(/\n/g, '<br>')}`;
    } else if (data.error) {
      document.getElementById('result').innerHTML = `Error: ${data.error}`;
    } else {
      document.getElementById('result').innerHTML = 'Error analyzing the description.';
    }
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('result').innerHTML = 'Error analyzing the description.';
  }
}

document.getElementById('analyze-btn').addEventListener('click', analyzePlant);