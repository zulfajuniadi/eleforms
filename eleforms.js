;(function($){
  var ls = window.localStorage;
  var href = window.location.href;
  var skipThese = ['_token'];
  var data = ls.getItem(href + '__form');
  data = (data ? JSON.parse(data) : {});
  $('input,select,textarea').each(function(index, input){ 
    var $input = $(input);
    var name = $input.attr('name');
    if(name && (skipThese.indexOf(name) === -1)) {
      if(data[name]) {
        if($input.is('[type=radio]')) {
          $('[name=' + name + '][value=' + data[name] + ']').prop('checked', true);
        } else {
          $input.val(data[name]);
        }
      }
      $input.on('change', function(){
        if($input.is('[type=radio]') && $input.prop('checked')) {
          data[name] = $input.val();
        } else {
          data[name] = $input.val();
        }
        ls.setItem(href + '__form', JSON.stringify(data));
      });
    }
  });
  $('form').on('reset', function(){
    $('input,select,textarea').each(function(index, input){ 
      var $input = $(input);
      var name = $input.attr('name');
      if(name && (skipThese.indexOf(name) === -1)) {
        if($input.is('[type=radio]')) {
          $('[name=' + name + '][value=' + data[name] + ']').prop('checked', false);
        } else {
          $input.val('');
        }
      }
    });
    ls.removeItem(href + '__form')
  });
})(jQuery);