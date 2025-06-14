  document.querySelector('#searchqueryform').addEventListener('submit', function(event) {
      // This function is called when the form is submitted
        // Listens for the submit event on the search form
      console.log('Search button clicked'); // Log when the search is submitted for debugging
      event.preventDefault(); // Prevent the form from submitting
      // Get the value of the input field
      const input = document.querySelector('#searchquery').value; // Get the value
      console.log(`Searching for, ${input}!`); // Log the input value
            document.getElementById('searchconfirmation').textContent = `Searching for: ${input}`; // Display the search confirmation before redirecting
             console.log(`Search confirmed: ${input}`); // Log the search confirmation for debugging
            // Simulate a delay before redirecting of 2 seconds
            setTimeout(() => {
                console.log(`Redirecting to DuckDuckGo with query: ${input}`);
                // Redirect to Bing with the search query
            window.location.href = `https://bing.com/search?q=${encodeURIComponent(input)}`;
            }, 2000);
    });