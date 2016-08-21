$('document').ready(function() {

  var $userAvatar = $('#userAvatar').attr('src');
  var $userName = $('#userName').text();
  var $tweetControls = $('div#tweet-controls');
  var $tweetComposeInput = $('#tweet-content > .tweet-compose');
  var $newTweet;
  var tweetLength = $tweetComposeInput.val().length;
  var maxTweet = 140;
  var $charCount = $('#char-count');
  var $tweetBtn = $('#tweet-submit');
  var $stream = $('#stream');
  var $tweetFormat;
  var $postedTweet = $('.tweet');
  var $tweetActions = $('.tweet > .tweet-actions');
  var $tweetStats = $('.stats');

  /*---FUNCTIONS---*/
  function toggleTweetControls() {
    $tweetControls.toggleClass('hide');
  }

  /*Tweet Compose Input*/
  function toggleTCI() {
    $tweetComposeInput.toggleClass('isExpanded');
    if( $tweetComposeInput.hasClass('isExpanded') ) {
      $tweetComposeInput.css('height', '5em');
    } else {
      $tweetComposeInput.css('height', '2.5em');
    }
  }

  function toggleTweetStats() {
    $tweetStats.toggleClass('hide');
  }

  /*---EVENT HANDLERS---*/
  /*Handle clicking on tweet input area*/
  $tweetComposeInput.on('click', function() {
    if( $tweetComposeInput.val() === '' && $tweetControls.hasClass('hide') ) {
      toggleTCI();
    }
    if( $tweetControls.hasClass('hide') ) {
      toggleTweetControls();
    }
  });

  /*Handle leaving focus on tweet input area*/
  $tweetComposeInput.blur(function() {
    if( $tweetComposeInput.val() === '' ) {
      toggleTweetControls();
      toggleTCI();
    }
  });

  /*Handle tweet characters on keyup*/
  $tweetComposeInput.on('keyup', function() {
    tweetLength = $tweetComposeInput.val().length;
    if( tweetLength >= 130 ) {
      $charCount.css('color', 'red');
    } else if( tweetLength < 130 ) {
      $charCount.css('color', '#999');
    }

    if( tweetLength > 140 ) {
      tweetLength = 140;
      $tweetBtn.prop('disabled', true);
    } else if( tweetLength <= 140 ) {
      $tweetBtn.prop('disabled', false);
      if( tweetLength === 0 ) {
        $tweetBtn.prop('disabled', true);
      }
    }

    $charCount.html('<p>' + (maxTweet - tweetLength) + '</p>');
  });

  /*Add a tweet*/
  $tweetBtn.on('click', function() {
    // $stream.prepend("<div class='tweet'><div class='content'><img class='avatar' src='"+$userAvatar+"' /><strong class='fullname'>"+$userName+"</strong><span class='username'>  @jameslemire</span><p class='tweet-text'>"+$tweetComposeInput.val()+"</div></div>");
    $tweetFormat = $('#one-tweet').clone();
    $newTweet = $tweetComposeInput.val();

    $tweetFormat.find('img').attr('src', $userAvatar);
    $tweetFormat.find('.fullname').text($userName);
    $tweetFormat.find('.username').text('@jameslemire');
    $tweetFormat.find('.tweet-text').text($newTweet);

    $stream.prepend($tweetFormat);
  });

  $postedTweet.hover(function() {
      $(this).find('.tweet-actions').addClass('hide');
  });

  $tweetBtn.prop('disabled', true);
  toggleTweetControls();
  toggleTweetStats();
});
