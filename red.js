(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"red_atlas_1", frames: [[982,918,767,328],[0,982,544,247],[0,1231,469,265],[982,502,736,414],[1720,502,102,102],[546,982,360,360],[1720,606,102,102],[0,0,980,980],[982,0,820,500]]}
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



(lib.CachedBmp_33 = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.love = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pink = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.sky = function() {
	this.initialize(ss["red_atlas_1"]);
	this.gotoAndStop(8);
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
(lib.red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {pink:535,blue:525,red:514};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [514,525,535];
	// timeline functions:
	this.frame_514 = function() {
		this.btnNextBlue.addEventListener("click", () => {
		  this.gotoAndStop("blue");
		});
		this.stop();
		
		if (this.btnBackColours) {
		  this.btnBackColours.on("click", () => {
		    window.open("menuColours.html", "_self");
		  });
		} else {
		  console.log("btnBackColours belum ditemukan.");
		}
		this.stop();
	}
	this.frame_525 = function() {
		this.stop();
		this.btnNextPink.addEventListener("click", () => {
		  this.gotoAndStop("pink");
		});
		this.btnBackRed.addEventListener("click", () => {
		  this.gotoAndStop("red");
		});
	}
	this.frame_535 = function() {
		this.stop();
		this.stop();
		
		if (this.btnNextGreen) {
		  this.btnNextGreen.on("click", () => {
		    window.open("green.html", "_self");
		  });
		} else {
		  console.log("btnNextGreen belum ditemukan.");
		}
		this.btnBackBlue.addEventListener("click", () => {
		  this.gotoAndStop("blue");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(514).call(this.frame_514).wait(11).call(this.frame_525).wait(10).call(this.frame_535).wait(11));

	// next
	this.btnNextGreen = new lib.Symbol18();
	this.btnNextGreen.name = "btnNextGreen";
	this.btnNextGreen.setTransform(1082.6,602.75);
	this.btnNextGreen._off = true;
	new cjs.ButtonHelper(this.btnNextGreen, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextGreen).wait(535).to({_off:false},0).to({_off:true},10).wait(1));

	// back
	this.btnBackBlue = new lib.balik();
	this.btnBackBlue.name = "btnBackBlue";
	this.btnBackBlue.setTransform(86.95,602.75);
	this.btnBackBlue._off = true;
	new cjs.ButtonHelper(this.btnBackBlue, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackBlue).wait(535).to({_off:false},0).to({_off:true},10).wait(1));

	// pink
	this.instance = new lib.pink();
	this.instance.setTransform(667,57,0.5592,0.5103);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(535).to({_off:false},0).to({_off:true},10).wait(1));

	// bak
	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(206,79.1,0.5,0.5);

	this.instance_2 = new lib.abjadd();
	this.instance_2.setTransform(3,2,1.7335,1.865);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},535).to({state:[]},10).wait(1));

	// blue
	this.instance_3 = new lib.sky();
	this.instance_3.setTransform(665,51,0.6746,0.752);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(525).to({_off:false},0).to({_off:true},10).wait(11));

	// next
	this.btnNextPink = new lib.Symbol18();
	this.btnNextPink.name = "btnNextPink";
	this.btnNextPink.setTransform(1098.6,606.75);
	this.btnNextPink._off = true;
	new cjs.ButtonHelper(this.btnNextPink, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextPink).wait(525).to({_off:false},0).to({_off:true},10).wait(11));

	// back
	this.btnBackRed = new lib.balikk();
	this.btnBackRed.name = "btnBackRed";
	this.btnBackRed.setTransform(59.05,606.75);
	this.btnBackRed._off = true;
	new cjs.ButtonHelper(this.btnBackRed, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackRed).wait(525).to({_off:false},0).to({_off:true},10).wait(11));

	// bak
	this.instance_4 = new lib.CachedBmp_32();
	this.instance_4.setTransform(176.35,97.4,0.5,0.5);

	this.instance_5 = new lib.abjadd();
	this.instance_5.setTransform(-8,-6,1.7605,1.8693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},525).to({state:[]},10).to({state:[]},1).wait(10));

	// merah
	this.instance_6 = new lib.love();
	this.instance_6.setTransform(683,54,1.4442,1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(514).to({_off:false},0).to({_off:true},11).wait(21));

	// next
	this.btnNextBlue = new lib.Symbol18();
	this.btnNextBlue.name = "btnNextBlue";
	this.btnNextBlue.setTransform(1106.6,600.8);
	this.btnNextBlue._off = true;
	new cjs.ButtonHelper(this.btnNextBlue, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextBlue).wait(514).to({_off:false},0).to({_off:true},11).wait(21));

	// back
	this.btnBackmenuColours = new lib.balikk();
	this.btnBackmenuColours.name = "btnBackmenuColours";
	this.btnBackmenuColours.setTransform(79,600.8);
	this.btnBackmenuColours._off = true;
	new cjs.ButtonHelper(this.btnBackmenuColours, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackmenuColours).wait(514).to({_off:false},0).to({_off:true},11).wait(21));

	// bak
	this.instance_7 = new lib.CachedBmp_33();
	this.instance_7.setTransform(120.15,54.05,0.5,0.5);

	this.instance_8 = new lib.abjadd();
	this.instance_8.setTransform(-1,-1,1.7497,1.8549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},514).to({state:[]},11).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1287.7,774.1);
// library properties:
lib.properties = {
	id: '03FAFE534ECDA44DA4927B62119FC9AC',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/red_atlas_1.png", id:"red_atlas_1"},
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
an.compositions['03FAFE534ECDA44DA4927B62119FC9AC'] = {
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