var canvas;
var context;
var rects = [];
window.onload = function() {
    canvas = document.getElementById('canv_container');
    context = canvas.getContext('2d');
    var worker = new Worker('CanvWorker.js');
    worker.onmessage = function(event) {
        context.clearRect(0,0,1000,600);
        rects.forEach(function(rect,index){
            rect.draw(context);
            rect.move();
        });
    }
};
window.onmousedown = function(event) {
    rects.push({x:event.pageX,y:event.pageY,deg:0,rot:0,draw:function(ctx){ctx.save();ctx.translate(this.x,this.y);ctx.rotate(this.deg*Math.PI/180);ctx.fillRect(-50,-50,100,100);ctx.restore();},move:function(){this.deg+=10;}});
};
