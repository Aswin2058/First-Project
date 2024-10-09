// Your YouTube API key
const API_KEY = 'AIzaSyDTqaDjXFJaFuYBaY-06rcTLYVHouttTBk'; // Replace with your actual YouTube API key

// Function to fetch YouTube videos based on search query
function fetchYouTubeVideos(query) {
  const outputDiv = document.getElementById('output');

  // Show loading spinner
  outputDiv.innerHTML = `
    <div id="spinner" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;

  // YouTube Data API URL for search
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(query)}&key=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Remove loading spinner
      const spinner = document.getElementById('spinner');
      if (spinner) {
        spinner.remove();
      }

      // Check for errors
      if (data.error) {
        console.error('Error fetching data:', data.error.message);
        outputDiv.innerHTML = `<p style="color: red;">Error: ${data.error.message}</p>`;
        return;
      }

      // Display the video results
      const videos = data.items;
      outputDiv.innerHTML = videos.map(video => `
        <div class="video">
          <h3>${video.snippet.title}</h3>
          <p>${video.snippet.description}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error('Error:', error);
      outputDiv.innerHTML = `<p style="color: red;">An error occurred. Please try again later.</p>`;
    });
}

// Add an event listener to the button to fetch YouTube videos
document.getElementById('fetchDataBtn').addEventListener('click', () => {
  const query = document.getElementById('searchQuery').value;
  if (query) {
    fetchYouTubeVideos(query);
  } else {
    document.getElementById('output').innerHTML = '<p style="color: red;">Please enter a search query.</p>';
  }
});