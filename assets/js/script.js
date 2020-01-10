$(document).ready(function() {
  var macy = Macy({
    container: '.home .masonry',
    columns: 3,
    margin: 40,
    breakAt: {
      960: 2,
      640: 1,
    }
  });
});
