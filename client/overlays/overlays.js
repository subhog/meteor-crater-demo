
Template.overlays.events({

  'click .overlays-alert': function(e) {
    Crater.alert('Adding exclamation mark!', function() {
      $('.overlays-presentation').append('!');
    });
  },


  'click .overlays-confirm': function(e) {
    Crater.confirm({
      message: 'Reset text to default?',
      ok: 'Reset',
    }, function(error, data) {
      if(!data) return;
      $('.overlays-presentation').html('Crater is cool!');
    });
  },

  'click .overlays-custom': function(e) {

    Crater.drawOverlay('colorChooser', null, function(error, data) {
      if(!data) return;
      $('.overlays-presentation').css('backgroundColor', data);
    });
    
  },


});