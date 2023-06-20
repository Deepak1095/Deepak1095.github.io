
    GitHubCalendar(".calendar", "Deepak1095");

    GitHubCalendar(".calendar", "Deepak1095", { responsive: true });

    GitHubCalendar(".calendar", "Deepak1095", {
       proxy (Deepak1095) {
         return fetch(`https://your-proxy.com/github?user=${Deepak1095}`)
       }
    })


    let resume1 = document.getElementById("resume-button-1").addEventListener("click", NewTab)
    let resume2 = document.getElementById("resume-button-2").addEventListener("click", NewTab)

    function NewTab() {
      window.open(
        "https://drive.google.com/file/d/1arPllevTAd65ylIDQccpJrwS0GY3n6mc/view?usp=share_link",
        "_blank"
      );
    }