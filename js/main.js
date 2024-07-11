//moqup reference: 
//https://demo.templatemonster.com/demo/122125.html?_gl=1*1vkskkd*_ga*MTI5NDcyNDAyMS4xNzE4MTk3OTYx*_ga_FTPYEGT5LY*MTcxODE5Nzk2MC4xLjAuMTcxODE5Nzk4OC4zOC4wLjA.

var browserData = JSON.parse(localStorage.getItem("devehoper"));
var devehoper = {
    "ln": "pt",
    "projects": [],
    "services": {
        "id": "1"
    },
    "search_tags": {
        "sobre": "about",
        "software": "link to software"
    }
};


var request =  (config) => {
    if(typeof(config.url) !== "undefined") {
        $.ajax({
            method: typeof(config.method) == "undefined" || config.method.toUpperCase() == "GET" ? "GET" : "POST",
            url: config.url,
            beforeSend: ( xhr ) => {
                typeof(config.beforeSend) == "function" ? config.beforeSend(xhr) : '';
            },
            success: (data) => {
                typeof(method.success) == "function" ? method.success(data) : '';
            },
            error: () => {
                typeof(method.error) == "function" ? method.error() : '';
            }
        })
        .done(function( data ) {
            typeof(method.done) == "function" ? method.done(data) : '';
        });
    }
}

var translate = () => {
    for(let key in TRANSLATIONS.pt) {
        devehoper.ln === "pt" ? $("." + key).text(TRANSLATIONS.pt[key]) : $("." + key).text(TRANSLATIONS.en[key]);
    }
}

var headerScroll = () => {
    $(window).scroll(function() {
        if(window.scrollY < 100) {
            $("#header").css({"top":"100px"});
        } else {
            $("#header").css({"top":"0px"});
        }
    });
}

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


var init = () => {
    if(browserData == null) {
        devehoper.ln = navigator.language == "pt-PT" ? "pt" : "en";
    } else {
        devehoper.ln = browserData.ln;
    }

    translate();
    headerScroll();
    window.scrollY > 100 ? $("#header").css({"top":"0px"}) : null;
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
}

(() => {
    $( document ).ready(function() {
        init();
    });
})();