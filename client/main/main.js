


Template.main.rendered = function() {

  Texture('body', {name: 'pattern', width: 320, height: 320}, {
    init: function(ctx, w, h) {
      for(var x = 0; x < w; x += 5)
        for(var y = 0; y < h; y += 5) {
          ctx.fillStyle = "rgba(0,0,0," + (0.08 * Math.random())+ ")";
          ctx.fillRect(x, y, 4, 4);
        }
    }
  });





  // Texture('body', {name: 'grid', width: 200, height: 200}, {
  //   pixel: function(ctx, data, x, y) {
  //     // var v = 0.0;
  //     // if(y%4 === 0) v = 0.08;
  //     // if(x%4 === 0) v = 0.12;
  //     // ctx.fillStyle = "rgba(0,0,0," + (v + v * Math.random())+ ")";
  //     // ctx.fillRect( x, y, 1, 1 );
  //          if(y%4 === 0 || x%4 === 0) {
  //       ctx.fillStyle = "rgba(0,0,0,0.1)";
  //       ctx.fillRect( x, y, 1, 1 );
  //     } 
  //   }
  // });

  // Texture('.content', {name: 'grid', width: 200, height: 200}, {
  //   pixel: function(ctx, data, x, y) {
  //     if(y%4 === 0 || x%4 === 0) {
  //       ctx.fillStyle = "rgba(0,0,0,0.1)";
  //       ctx.fillRect( x, y, 1, 1 );
  //     }
  //   }
  // });
};