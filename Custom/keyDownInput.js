document.addEventListener("keydown", (function () {
    let inputBuffer = ""; // Accumulates key presses
    const patternList = document.getElementById("items-list");
    const patternPrefix = "P"; // Prefix to look for
    const commandTerminator = "E"; // Command terminator
    const maxDelayBetweenKeys = 100000; // Maximum allowed delay between key presses in milliseconds

    let lastKeyTime = Date.now();

    return function (event) {
        console.log("Key pressed:", event.key); // Log every key press
        const currentTime = Date.now();
        if (currentTime - lastKeyTime > maxDelayBetweenKeys) {
            inputBuffer = ""; // Reset buffer if too much time has passed
        }
        lastKeyTime = currentTime;

        // Add valid characters (P, digits, and ;) to inputBuffer
        if (event.key.toUpperCase() === patternPrefix || !isNaN(event.key) || event.key.toUpperCase() === commandTerminator) {
            inputBuffer += event.key.toUpperCase();
            // Check if the buffer matches the command pattern, e.g., "P38N"
            const match = inputBuffer.match(/^P(\d+)E$/);
            if (match) {
                const index = parseInt(match[1], 10) - 1; // Convert to 0-based index
                if (index >= 0 && index < patternList.children.length) {
                    patternList.children[index].click(); // Trigger the click event
                    $('#patternDisplay').trigger('change'); // Assuming jQuery is loaded
                }
                inputBuffer = ""; // Reset buffer after processing
            }
        } else {
            inputBuffer = ""; // Reset buffer if an invalid key is pressed
        }
    };
})());
