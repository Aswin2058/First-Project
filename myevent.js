$(document).ready(function() {
    // Simulated event data (replace with actual data fetching logic)
    const eventsData = [
        {
            id: 1,
            title: "Event Title 1",
            date: "January 1, 2025",
            description: "Event Description 1... Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            title: "Event Title 2",
            date: "February 15, 2025",
            description: "Event Description 2... Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
        // Add more events as needed
    ];

    // Function to display events
    function displayEvents(events) {
        const eventList = $(".event-list");
        eventList.empty(); // Clear existing events

        events.forEach(function(event) {
            const eventItem = `
                <div class="event">
                    <div class="event-image">
                        <img src="event${event.id}.jpg" alt="${event.title}">
                    </div>
                    <div class="event-details">
                        <h3>${event.title}</h3>
                        <p class="event-date">Date: ${event.date}</p>
                        <p class="event-description">${event.description}</p>
                        <a href="#" class="event-details-btn">Event Details</a>
                    </div>
                </div>
            `;
            eventList.append(eventItem);
        });
    }

    // Initial load of events
    displayEvents(eventsData);

    // Load more button functionality (simulated for demonstration)
    let visibleEvents = 2; // Initial number of visible events
    $(".load-more-btn").click(function() {
        visibleEvents += 2; // Increase visible events count
        displayEvents(eventsData.slice(0, visibleEvents)); // Display more events
    });

    // Event details button click (simulated; replace with actual functionality)
    $(".event-list").on("click", ".event-details-btn", function(event) {
        event.preventDefault();
        // Example: Show detailed view or redirect to event details page
        alert("Event details clicked!");
    });

    // Search icon functionality (simulated for demonstration)
    $(".search-icon").click(function() {
        alert("Search icon clicked! Implement search functionality here.");
    });

    // Back button functionality (simulated for demonstration)
    $(".back-btn").click(function() {
        alert("Back button clicked! Implement back navigation logic here.");
    });
}); 

    $(document).ready(function() {
    $('.back-btn').click(function() {
        window.history.back();
    });
});

