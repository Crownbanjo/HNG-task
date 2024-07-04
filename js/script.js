// document.addEventListener('DOMContentLoaded', function() {
//     function updateTime() {
//         const now = new Date();
//         const timeString = now.toUTCString().split(' ')[4];
//         const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });

//         document.getElementById('time').textContent = timeString;
//         document.getElementById('day').textContent = dayString;
//     }

//     updateTime();
//     setInterval(updateTime, 1000); // Update time every minute
// });
window.onload = function () {
    function updateTime() {
      const now = new Date();
      document.getElementById("time").innerText = now.toUTCString();
      document.getElementById("day").innerText = now.toLocaleDateString("en-US", {
        weekday: "long",
      });
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  };