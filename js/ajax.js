function makeAjaxRequest(url, successCallback) {
    $.ajax({
        url: url,
        method: 'GET',
        success: successCallback,
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(`Error making AJAX request: ${textStatus}`, errorThrown);
            alert('An error occurred while processing your request. Please try again later.');
        }
    });
}

export { makeAjaxRequest };