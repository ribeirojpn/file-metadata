var main = function () {
  var file;
  console.log('ready');

  $('#file').on('change',function (event) {
    file = event.target.files;
    console.log(file);
  });
  $('form').on('submit',function (event) {
    event.preventDefault();

    var data = new FormData();

    $.each(file, function (key, value) {
      data.append(key,value);
    });
    console.log(data);

    $.ajax({
      url: 'http://localhost:3000' + '/filedata',
      type: 'POST',
      data: data,
      contentType: false,
      processData: false,
      success: function (data) {
        alert('file size: ' + data.fileSize);
      },
      error: function(jqXHR, textStatus, errorThrown) {
				alert('ERRORS: ' + textStatus);
			}
    })
  })
}

$(document).ready(main);
