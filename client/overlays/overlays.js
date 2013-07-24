
Template.overlays.events({

  'click .overlays-custom': function(e) {

    Crater.drawOverlay('colorChooser', null, function(error, data) {
      if(!data) return;
      $('.overlays-presentation').css('backgroundColor', data);
    });
    
  },


});