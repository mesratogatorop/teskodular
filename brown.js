(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"brown_atlas_1", frames: [[0,699,642,384],[0,1085,320,76],[1464,0,569,240],[644,907,20,40],[644,1058,518,208],[822,642,736,414],[644,699,102,102],[0,0,820,697],[644,803,102,102],[1464,242,360,360],[822,0,640,640]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_41 = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.banana = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.purple = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tanah = function() {
	this.initialize(ss["brown_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("klikonlineaudioconvertercomwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.nextt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.balikk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		playSound("klikonlineaudioconvertercomwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// Layer_1
	this.instance = new lib.backk();
	this.instance.setTransform(0,0,1,0.9608);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.4902,scaleY:0.5689,x:26,y:20},0).wait(1).to({scaleX:0.9607,scaleY:0.9614,x:2,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,98.1);


// stage content:
(lib.brown = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {yellow:595,purple:585,brown:575};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [575,585,595];
	// timeline functions:
	this.frame_575 = function() {
		this.btnNextPurple.addEventListener("click", () => {
		  this.gotoAndStop("purple");
		});
		this.stop();
		
		if (this.btnBackOrange) {
		  this.btnBackOrange.on("click", () => {
		    window.open("orange.html", "_self");
		  });
		} else {
		  console.log("btnBackOrange belum ditemukan.");
		}
	}
	this.frame_585 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnBackBrown.addEventListener("click", () => {
		  this.gotoAndStop("brown");
		});
		
		this.btnNextYellow.addEventListener("click", () => {
		  this.gotoAndStop("yellow");
		});
	}
	this.frame_595 = function() {
		this.stop();
		
		if (this.btnNextGrey) {
		  this.btnNextGrey.on("click", () => {
		    window.open("grey.html", "_self");
		  });
		} else {
		  console.log("btnNextGrey belum ditemukan.");
		}
		
		
		this.btnBackPurple.addEventListener("click", () => {
		  this.gotoAndStop("purple");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(575).call(this.frame_575).wait(10).call(this.frame_585).wait(10).call(this.frame_595).wait(11));

	// next
	this.btnNextGrey = new lib.Symbol18();
	this.btnNextGrey.name = "btnNextGrey";
	this.btnNextGrey.setTransform(1094.6,591.75);
	this.btnNextGrey._off = true;
	new cjs.ButtonHelper(this.btnNextGrey, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextGrey).wait(595).to({_off:false},0).to({_off:true},10).wait(1));

	// back
	this.btnBackPurple = new lib.balikk();
	this.btnBackPurple.name = "btnBackPurple";
	this.btnBackPurple.setTransform(82.95,598.75);
	this.btnBackPurple._off = true;
	new cjs.ButtonHelper(this.btnBackPurple, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackPurple).wait(595).to({_off:false},0).to({_off:true},10).wait(1));

	// yellow
	this.instance = new lib.banana();
	this.instance.setTransform(672,57,0.6488,0.6585);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(595).to({_off:false},0).to({_off:true},10).wait(1));

	// bak
	this.instance_1 = new lib.CachedBmp_38();
	this.instance_1.setTransform(503.85,117.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_37();
	this.instance_2.setTransform(230,71.15,0.5,0.5);

	this.instance_3 = new lib.abjadd();
	this.instance_3.setTransform(3,-3,1.7333,1.8597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},595).to({state:[]},10).wait(1));

	// next
	this.btnNextYellow = new lib.Symbol18();
	this.btnNextYellow.name = "btnNextYellow";
	this.btnNextYellow.setTransform(1100.6,605.25);
	this.btnNextYellow._off = true;
	new cjs.ButtonHelper(this.btnNextYellow, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextYellow).wait(585).to({_off:false},0).to({_off:true},10).wait(11));

	// back
	this.btnBackBrown = new lib.balikk();
	this.btnBackBrown.name = "btnBackBrown";
	this.btnBackBrown.setTransform(85,609.25);
	this.btnBackBrown._off = true;
	new cjs.ButtonHelper(this.btnBackBrown, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackBrown).wait(585).to({_off:false},0).to({_off:true},10).wait(11));

	// purple
	this.instance_4 = new lib.purple();
	this.instance_4.setTransform(676,56,1.4772,1.2219);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(585).to({_off:false},0).to({_off:true},10).wait(11));

	// bak
	this.instance_5 = new lib.CachedBmp_39();
	this.instance_5.setTransform(162,61.15,0.5,0.5);

	this.instance_6 = new lib.abjadd();
	this.instance_6.setTransform(-3,-1,1.7527,1.8693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},585).to({state:[]},10).to({state:[]},1).wait(10));

	// next
	this.btnNextPurple = new lib.Symbol18();
	this.btnNextPurple.name = "btnNextPurple";
	this.btnNextPurple.setTransform(1084.6,600.75);
	this.btnNextPurple._off = true;
	new cjs.ButtonHelper(this.btnNextPurple, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextPurple).wait(575).to({_off:false},0).to({_off:true},10).wait(21));

	// brown
	this.instance_7 = new lib.CachedBmp_40();
	this.instance_7.setTransform(867.7,504.95,0.5,0.5);

	this.instance_8 = new lib.tanah();
	this.instance_8.setTransform(672,50,0.85,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},575).to({state:[]},10).to({state:[]},1).wait(20));

	// back
	this.btnBackOrange = new lib.balikk();
	this.btnBackOrange.name = "btnBackOrange";
	this.btnBackOrange.setTransform(89,604.75);
	this.btnBackOrange._off = true;
	new cjs.ButtonHelper(this.btnBackOrange, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackOrange).wait(575).to({_off:false},0).to({_off:true},10).wait(21));

	// bak
	this.instance_9 = new lib.CachedBmp_41();
	this.instance_9.setTransform(156.25,105.25,0.5,0.5);

	this.instance_10 = new lib.abjadd();
	this.instance_10.setTransform(3,-2,1.7334,1.884);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},575).to({state:[]},10).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1287,778);
// library properties:
lib.properties = {
	id: '1A6E0C60B000ED47B9C62FCE904635C3',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/brown_atlas_1.png", id:"brown_atlas_1"},
		{src:"sounds/klikonlineaudioconvertercomwav.mp3", id:"klikonlineaudioconvertercomwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1A6E0C60B000ED47B9C62FCE904635C3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;