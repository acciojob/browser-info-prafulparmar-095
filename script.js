document.addEventListener('DOMContentLoaded', () => {
    // Get the div element where the browser information will be displayed
    const browserInfoDiv = document.getElementById('browser-info');

    // Get browser information using the navigator object
    const userAgent = navigator.userAgent;
    const appName = navigator.appName;
    const appVersion = navigator.appVersion;

    let browserName = "Unknown Browser";
    let browserVersion = "Unknown Version";

    // Logic to determine browser name and version based on userAgent
    // This logic aims to cover common browsers and extract versions accurately.

    if (userAgent.includes("Opera") || userAgent.includes("OPR")) {
        browserName = "Opera";
        const matches = userAgent.match(/(Opera|OPR)\/([0-9.]+)/);
        if (matches && matches[2]) {
            browserVersion = matches[2];
        }
    } else if (userAgent.includes("Edg")) {
        // Microsoft Edge (Chromium)
        browserName = "Microsoft Edge";
        const matches = userAgent.match(/Edg\/([0-9.]+)/);
        if (matches && matches[1]) {
            browserVersion = matches[1];
        }
    } else if (userAgent.includes("Chrome")) {
        browserName = "Chrome";
        const matches = userAgent.match(/Chrome\/([0-9.]+)/);
        if (matches && matches[1]) {
            browserVersion = matches[1];
        }
    } else if (userAgent.includes("Firefox")) {
        browserName = "Firefox";
        const matches = userAgent.match(/Firefox\/([0-9.]+)/);
        if (matches && matches[1]) {
            browserVersion = matches[1];
        }
    } else if (userAgent.includes("Safari")) {
        browserName = "Safari";
        const matches = userAgent.match(/Version\/([0-9.]+).*Safari/);
        if (matches && matches[1]) {
            browserVersion = matches[1];
        }
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
        // Internet Explorer
        browserName = "Internet Explorer";
        // For IE 11, userAgent contains "rv:XX.0"
        // For older IE, userAgent contains "MSIE XX.0"
        const matches = userAgent.match(/(MSIE |rv:)([0-9.]+)/);
        if (matches && matches[2]) {
            browserVersion = matches[2];
        }
    } else if (appName === "Netscape") {
        // This case is primarily for older browsers or specific compatibility modes.
        // Modern browsers often report "Netscape" for appName.
        browserName = "Netscape";
        browserVersion = appVersion; // Fallback to appVersion for Netscape
    }
    // Add more specific browser detections as needed for other less common browsers.

    // Display the information in the specified format
    browserInfoDiv.textContent = `You are using ${browserName} version ${browserVersion}.`;
});
