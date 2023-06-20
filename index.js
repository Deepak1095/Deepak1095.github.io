
    GitHubCalendar(".calendar", "Deepak1095");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Deepak1095", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "Deepak1095", {
       proxy (Deepak1095) {
         return fetch(`https://your-proxy.com/github?user=${Deepak1095}`)
       }
    }).then(res => console.log(res)).catch(err=>console.log(err))
