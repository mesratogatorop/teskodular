(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"abjadY_atlas_1", frames: [[0,1049,684,193],[738,656,644,297],[1384,656,499,341],[738,955,518,325],[1560,0,300,123],[0,633,736,414],[1862,0,102,102],[1258,955,102,102],[1560,125,338,87],[0,0,820,631],[822,0,736,654]]}
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



(lib.CachedBmp_98 = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tombol = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.yak = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.zebra = function() {
	this.initialize(ss["abjadY_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_98();
	this.instance.setTransform(-170.95,-48.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.9,-48.1,342,96.5);


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


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tombol();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,338,87);


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


(lib.balik = function(mode,startPosition,loop,reversed) {
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.5686,scaleY:0.5304,x:22,y:24},0).wait(1).to({scaleX:1.1568,scaleY:1.001,x:-8,y:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,0,118,102.1);


// stage content:
(lib.abjadY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {abjadZ:504,abjadY:495};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [495,504];
	// timeline functions:
	this.frame_495 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnNextZ.addEventListener("click", () => {
		  this.gotoAndStop("abjadZ");
		});
		this.stop();
		
		if (this.btnBackX) {
		  this.btnBackX.on("click", () => {
		    window.open("abjadX.html", "_self");
		  });
		} else {
		  console.log("btnBackX belum ditemukan.");
		}
		playSound("Y");
	}
	this.frame_504 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.stop();
		
		if (this.btnBackHomeZ) {
		  this.btnBackHomeZ.on("click", () => {
		    window.open("menu_utama.html", "_self");
		  });
		} else {
		  console.log("btnBackHomeZ belum ditemukan.");
		}
		this.btnBackY.on("click", () => {
		  window.open("abjadY.html", "_self");
		});
		playSound("Z");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(495).call(this.frame_495).wait(9).call(this.frame_504).wait(271));

	// mat
	this.instance = new lib.CachedBmp_94();
	this.instance.setTransform(834.65,626.6,0.5,0.5);

	this.btnBackHomeZ = new lib.Symbol11();
	this.btnBackHomeZ.name = "btnBackHomeZ";
	this.btnBackHomeZ.setTransform(740.7,613.75);
	new cjs.ButtonHelper(this.btnBackHomeZ, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnBackHomeZ},{t:this.instance}]},504).to({state:[]},10).wait(261));

	// Z
	this.instance_1 = new lib.CachedBmp_95();
	this.instance_1.setTransform(178,54.4,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(504).to({_off:false},0).to({_off:true},10).wait(261));

	// back
	this.btnBackY = new lib.balik();
	this.btnBackY.name = "btnBackY";
	this.btnBackY.setTransform(87.05,598.75);
	this.btnBackY._off = true;
	new cjs.ButtonHelper(this.btnBackY, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackY).wait(504).to({_off:false},0).to({_off:true},10).wait(261));

	// Layer_3
	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.setTransform(315.05,264.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(504).to({_off:false},0).to({_off:true},10).wait(261));

	// zebra
	this.instance_3 = new lib.zebra();
	this.instance_3.setTransform(662,55,0.7448,0.7127);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(504).to({_off:false},0).to({_off:true},10).wait(261));

	// bac
	this.instance_4 = new lib.abjadd();
	this.instance_4.setTransform(3,-1,1.7334,1.8792);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(504).to({_off:false},0).to({_off:true},10).wait(261));

	// next
	this.btnNextZ = new lib.Symbol18();
	this.btnNextZ.name = "btnNextZ";
	this.btnNextZ.setTransform(1090.6,606.8);
	this.btnNextZ._off = true;
	new cjs.ButtonHelper(this.btnNextZ, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextZ).wait(495).to({_off:false},0).to({_off:true},9).wait(271));

	// back
	this.btnBackX = new lib.balikk();
	this.btnBackX.name = "btnBackX";
	this.btnBackX.setTransform(77,610.8);
	this.btnBackX._off = true;
	new cjs.ButtonHelper(this.btnBackX, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackX).wait(495).to({_off:false},0).to({_off:true},9).wait(271));

	// yacht
	this.instance_5 = new lib.yak();
	this.instance_5.setTransform(673,49,0.6589,0.7023);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(495).to({_off:false},0).to({_off:true},9).wait(271));

	// y_idn
	this.instance_6 = new lib.CachedBmp_96();
	this.instance_6.setTransform(240.1,64.4,0.5,0.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(495).to({_off:false},0).to({_off:true},9).wait(271));

	// bak
	this.instance_7 = new lib.CachedBmp_97();
	this.instance_7.setTransform(201.9,251.1,0.5,0.5);

	this.instance_8 = new lib.abjadd();
	this.instance_8.setTransform(-2,-7,1.7497,1.9034);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},495).to({state:[]},9).to({state:[]},1).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1285.8,781);
// library properties:
lib.properties = {
	id: '24738CA33C81E2499551758EBFFFC4CD',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/abjadY_atlas_1.png", id:"abjadY_atlas_1"},
		{src:"sounds/klikonlineaudioconvertercomwav.mp3", id:"klikonlineaudioconvertercomwav"},
		{src:"sounds/Y.mp3", id:"Y"},
		{src:"sounds/Z.mp3", id:"Z"}
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
an.compositions['24738CA33C81E2499551758EBFFFC4CD'] = {
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