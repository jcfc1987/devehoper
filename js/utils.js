//begin facebook

// var fetchPosts = () =>  {
//     FB.api(
//         '/me/feed',
//         'GET',
//         {"fields":"message,full_picture,created_time"},
//         function(response) {
//             if (response && !response.error) {
//                 displayPosts(response.data);
//             } else {
//                 console.log(response.error);
//             }
//         }
//     );
// }

// var displayPosts = (posts) => {
//     const container = document.getElementById('posts-container');
//     posts.forEach(post => {
//         const postElement = document.createElement('div');
//         postElement.className = 'post';
        
//         let postContent = `
//             <p>${post.message || 'No message'}</p>
//             <p>Posted on: ${new Date(post.created_time).toLocaleString()}</p>
//         `;
        
//         if (post.full_picture) {
//             postContent += `<img src="${post.full_picture}" alt="Post image">`;
//         }
        
//         postElement.innerHTML = postContent;
//         container.appendChild(postElement);
//     });
// }

//end facebook

// Initialize the Facebook SDK
// window.fbAsyncInit = function() {
//     FB.init({
//         appId      : 'YOUR_APP_ID',
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v12.0'
//     });
      
//     FB.AppEvents.logPageView();   
      
//     // Check login status
//     FB.getLoginStatus(function(response) {
//         if (response.status === 'connected') {
//             // User is logged in and has authorized your app
//             fetchPosts();
//         } else {
//             // User is not logged in or hasn't authorized your app
//             FB.login(function(response) {
//                 if (response.authResponse) {
//                     fetchPosts();
//                 } else {
//                     console.log('User cancelled login or did not fully authorize.');
//                 }
//             }, {scope: 'user_posts'});
//         }
//     });
// };
//End Facebook

// Example usage
// const lat1 = 32.6632065;
// const lon1 = -16.9022512;
// const lat2 = 32.6655351;
// const lon2 = -16.9226249;

// const distance = haversineDistance(lat1, lon1, lat2, lon2);
// console.log(`The distance between the two locations is ${distance.toFixed(2)} kilometers.`);


//end distance calculation


  
//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);
  

 // Loading services description pages
        // $("#btn_webdev").on('click', (event) => {
        //     event.preventDefault();
        //     lazzyLoading("service_description", "#webdev_container",
        //     () => {
        //         translate("#webdev_description", TRANSLATIONS[devehoper.ln]["ln_web_description"]);
        //         translate(".ln_web_description_layout", TRANSLATIONS[devehoper.ln]["ln_web_description_layout"]);
        //         translate(".ln_web_description_user_management", TRANSLATIONS[devehoper.ln]["ln_web_description_user_management"]);
        //         translate(".ln_web_description_translations", TRANSLATIONS[devehoper.ln]["ln_web_description_translations"]);
        //         translate(".ln_web_description_item_management", TRANSLATIONS[devehoper.ln]["ln_web_description_item_management"]);
        //         translate(".ln_web_description_newsletter", TRANSLATIONS[devehoper.ln]["ln_web_description_newsletter"]);
        //         translate(".ln_web_description_custom_functionalities", TRANSLATIONS[devehoper.ln]["ln_web_description_custom_functionalities"]);
        //         translate(".ln_web_description_logs", TRANSLATIONS[devehoper.ln]["ln_web_description_logs"]);
        //         translate(".ln_web_domain", TRANSLATIONS[devehoper.ln]["ln_web_domain"]);
        //         translate(".ln_web_static_server", TRANSLATIONS[devehoper.ln]["ln_web_static_server"]);
        //         translate(".ln_web_dynamic_server", TRANSLATIONS[devehoper.ln]["ln_web_dynamic_server"]);
        //         translate(".ln_web_maintenance", TRANSLATIONS[devehoper.ln]["ln_web_maintenance"]);

        //         const triggerTabList = document.querySelectorAll('#myTab button');
        //         triggerTabList.forEach(triggerEl => {
        //             const tabTrigger = new bootstrap.Tab(triggerEl);
        //             triggerEl.addEventListener('click', event => {
        //                 event.preventDefault();
        //                 tabTrigger.show();
        //             });
        //         });

        //     });
        // });

        // $("#btn_software_dev").on('click', (event) => {
        //     event.preventDefault();
        //     lazzyLoading("software_development_description", "#software_dev_container",
        //     () => {
        //         translate("#webdev_description", TRANSLATIONS[devehoper.ln]["ln_web_description"]);
        //         translate(".ln_software_description_layout", TRANSLATIONS[devehoper.ln]["ln_web_description_layout"]);
        //         translate(".ln_software_description_user_management", TRANSLATIONS[devehoper.ln]["ln_web_description_user_management"]);
        //         translate(".ln_software_description_translations", TRANSLATIONS[devehoper.ln]["ln_web_description_translations"]);
        //         translate(".ln_software_description_item_management", TRANSLATIONS[devehoper.ln]["ln_web_description_item_management"]);
        //         translate(".ln_software_description_newsletter", TRANSLATIONS[devehoper.ln]["ln_web_description_newsletter"]);
        //         translate(".ln_software_description_custom_functionalities", TRANSLATIONS[devehoper.ln]["ln_web_description_custom_functionalities"]);
        //         translate(".ln_software_description_logs", TRANSLATIONS[devehoper.ln]["ln_web_description_logs"]);
        //         translate(".ln_software_domain", TRANSLATIONS[devehoper.ln]["ln_web_domain"]);
        //         translate(".ln_software_static_server", TRANSLATIONS[devehoper.ln]["ln_web_static_server"]);
        //         translate(".ln_software_dynamic_server", TRANSLATIONS[devehoper.ln]["ln_web_dynamic_server"]);
        //         translate(".ln_software_maintenance", TRANSLATIONS[devehoper.ln]["ln_web_maintenance"]);

        //         const triggerTabList = document.querySelectorAll('#softwareTab button');
        //         triggerTabList.forEach(triggerEl => {
        //             const tabTrigger = new bootstrap.Tab(triggerEl);
        //             triggerEl.addEventListener('click', event => {
        //                 event.preventDefault();
        //                 tabTrigger.show();
        //             });
        //         });

        //     });
        // });

//begin distance calculation (meant for delivery service)
function haversineDistance(lat1, lon1, lat2, lon2) {
       // Convert degrees to radians
       function toRadians(degrees) {
           return degrees * (Math.PI / 180);
       }
   
       // Coordinates in radians
       const lat1Rad = toRadians(lat1);
       const lon1Rad = toRadians(lon1);
       const lat2Rad = toRadians(lat2);
       const lon2Rad = toRadians(lon2);
   
       // Differences
       const deltaLat = lat2Rad - lat1Rad;
       const deltaLon = lon2Rad - lon1Rad;
   
       // Haversine formula
       const a = Math.sin(deltaLat / 2) ** 2 + Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(deltaLon / 2) ** 2;
       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   
       // Earth's radius in kilometers
       const R = 6371;
   
       // Distance in kilometers
       const distance = R * c;
       
       return distance;
   }