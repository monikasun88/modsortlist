$(function() {
    $("#sortable").sortable({
      placeholder: 'ui-state-highlight'
    });
    $("#sortable").disableSelection();
});

var $sortableList = $("#sortable");

var sortEventHandler = function(event, ui){
  var idsInOrder = $("#sortable").sortable("toArray");
  $("#ourForm > input[name=orderItems]").val(idsInOrder);
    console.log("New sort order!");
};

$sortableList.sortable({
    stop: sortEventHandler
});
