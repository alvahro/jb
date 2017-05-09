$('a[href=#about]').click(function (event)
{
event.stopPropagation();
var Position = jQuery('[id="about"]').offset().top;
jQuery('html, body').animate({ scrollTop: Position }, 1100);
return false;
});
