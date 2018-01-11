chrome.tabs.query( { active: true, currentWindow: true }, function( tabs ) {
  chrome.tabs.update( tabs[0].id, { url: "javascript:(function(){$('ul > li:nth-child(4) > [ng-click=\"doDeveloperAction(devLink.action)\"]').trigger('click')})()" } );
});
