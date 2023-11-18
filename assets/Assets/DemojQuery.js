// CLick to hide

$(".jqueryTapHide").click(function(){
    $(this).hide();
});

// Hover to hide/show

$("#jqueryDemo").hover(function(){
    $(this).hide();
},
function(){
    $(this).show();
}
);