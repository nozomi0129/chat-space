$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="a-items">
          <div class="a-items__box">
            <div class="a-items__user-name">
              ${message.user_name}
            </div>
            <div class="a-items__user-name__time">
              ${message.created_at}
            </div>
          </div>
          <div class="a-items__user-text">
            <p class="a-items__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="a-items">
        <div class="a-items__box">
          <div class="a-items__user-name">
            ${message.user_name}
          </div>
          <div class="a-items__user-name__time">
            ${message.created_at}
          </div>
        </div>
        <div class="a-items__user-text">
          <p class="a-items__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit',function(e){
    e.preventDefault();
    let formdata = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type:'POST',
      data:formdata,
      dataType:'json',
      processData: false,
      contentType: false,
    })
    
  
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function() {
      $('.d-items__send__botn').prop('disabled', false);
      $('form')[0].reset();
    })

  });
});

