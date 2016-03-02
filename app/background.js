chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
     'frame': 'none',
    'outerBounds': {
      'width': 400,
      'height': 500
    }
  });
});



/*
SELECT        '{"word":"' || word  || '", "translation":"'|| translation || '"},'
from           Dictionary
*/