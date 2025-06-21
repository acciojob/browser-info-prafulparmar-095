 function getBrowserInfo() {
            const userAgent = navigator.userAgent;
            let browserName = navigator.appName;
            let version = navigator.appVersion;

            if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
                browserName = "Chrome";
                version = userAgent.match(/Chrome\\/([0-9.]+)/)[1];
            } else if (userAgent.includes("Firefox")) {
                browserName = "Firefox";
                version = userAgent.match(/Firefox\\/([0-9.]+)/)[1];
            } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
                browserName = "Safari";
                version = userAgent.match(/Version\\/([0-9.]+)/)[1];
            } else if (userAgent.includes("Edg")) {
                browserName = "Edge";
                version = userAgent.match(/Edg\\/([0-9.]+)/)[1];
            } else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
                browserName = "Opera";
                version = userAgent.match(/(OPR|Opera)\\/([0-9.]+)/)[2];
            }

            const message = `You are using ${browserName} version ${version}`;
            document.getElementById("browser-info").textContent = message;
        }

        getBrowserInfo();
