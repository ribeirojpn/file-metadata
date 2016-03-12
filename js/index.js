'use strict';
var main = function () {
  var files;
  console.log('ready');

  $('#file').on('change',function (event) {
    files = event.target.files;
  });

  $('form').on('submit',function (event) {
    event.stopPropagation();
    event.preventDefault();

    var formData = new FormData();
    formData.append('data',files[0]);

    $.ajax({
      url: window.location.origin + '/filedata',
      type: 'POST',
			data: formData,
			cache: false,
			processData: false,
			contentType: false,
      success: function (data) {
        alert('file size: ' + data.size);
      },
      error: function (jqXHR, textStatus, errorThrown) {
				alert('ERRORS: ' + textStatus);
			}
    });
  });
}

$(document).ready(main);
