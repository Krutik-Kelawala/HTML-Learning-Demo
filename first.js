// CLick to hide

$("table").click(function(){
    $(this).hide();
});

// Hover to hide/show
$("p").hover(function(){
    $(this).hide();
},
function(){
    $(this).show();
}
);