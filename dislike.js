function remove_liked_tweets() {
  document.querySelectorAll('div.tweet-context').forEach(function (el) {
    if (el.innerText.endsWith('others liked')) {
      var tweet = el.parentNode.parentNode;
      var button = tweet.querySelector('button[data-feedback-type="DontLike"]');
      button.click();
      var permalink = tweet.getAttribute('data-permalink-path');
      console.log('Removed liked tweet ' + permalink);
    }
  });
}

setInterval(remove_liked_tweets, 5000);
