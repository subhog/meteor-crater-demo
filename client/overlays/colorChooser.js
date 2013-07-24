

Template.colorChooser.events({

  'click .colorer': function(e) {
    Crater.dismissOverlay(e.target, null, $(e.target).css('background-color'));
  },

});
