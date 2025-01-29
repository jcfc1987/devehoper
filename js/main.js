//moqup reference: 
//https://demo.templatemonster.com/demo/122125.html?_gl=1*1vkskkd*_ga*MTI5NDcyNDAyMS4xNzE4MTk3OTYx*_ga_FTPYEGT5LY*MTcxODE5Nzk2MC4xLjAuMTcxODE5Nzk4OC4zOC4wLjA.
import { makeAjaxRequest } from './ajax.js';
import { translate } from './translations.js';

var devehoper = {
    "ln": "pt", //browserData["devehoper"] == null || browserData["devehoper"]["ln"] == null ? navigator.language =="PT-pt" || navigator.language == "PT-br",
    "projects": [],
    "services": {
        "id": "1"
    },
    "search_tags": {
        "sobre": "about",
        "software": "link to software"
    }
};

var browserData = JSON.parse(localStorage.getItem("devehoper"));
browserData["devehoper"] == null ? browserData = devehoper: null;

const request =  (config) => {
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

const headerScroll = () => {
    $(window).scroll(function() {
        if(window.scrollY < 100) {
            $("#header").css({"top":"100px"});
        } else {
            $("#header").css({"top":"0px"});
        }
    });
}

const init = () => {
    // Initialize the website
    const language = 'en'; // Default language
    translate(language);

    // Example: Change language to Portuguese on button click
    $('#change-language').on('click', function () {
        const newLanguage = $(this).data('language');
        translate(newLanguage);
    });

    if(browserData == null) {
        devehoper.ln = navigator.language == "pt-PT" ? "pt" : "en";
        localStorage.setItem("devehoper", JSON.stringify({"ln": devehoper.ln}));
    } else {
        devehoper.ln = browserData.ln;
    }

    translate();
    headerScroll();
    window.scrollY > 100 ? $("#header").css({"top":"0px"}) : null;
}

const myPromise = (action, executeAfter) => {
    return new Promise((resolve, reject) => {
        action();
    }).then(finalResult => {
        resolve(executeAfter(finalResult));
    })
    .catch(error => {
        reject(error);
    });
}

const lazzyLoading = (pageName, containerSelector, callback) => {
    if($(containerSelector).html().length == 0) {
        $(containerSelector).load("pages/"+pageName + ".html", (response, status, xhr) => {
            xhr.done(callback());
        })
    }
};

document.addEventListener('DOMContentLoaded', function() {
    init();
});