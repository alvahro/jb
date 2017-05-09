<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
</script>

$('a[href=#about]').click(function (event) {
  event.stopPropagation();
  var Position = jQuery('[id="about"]').offset().top;
  jQuery('html, body').animate({ scrollTop: Position }, 1100);
  return false;
});
