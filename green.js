(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"green_atlas_1", frames: [[1202,416,622,305],[1202,723,602,232],[1202,957,507,265],[1202,0,736,414],[1826,416,102,102],[0,0,1200,1200],[1930,416,102,102],[1806,723,218,231]]}
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



(lib.CachedBmp_36 = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.black = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.orange = function() {
	this.initialize(img.orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3520,2260);


(lib.treee = function() {
	this.initialize(ss["green_atlas_1"]);
	this.gotoAndStop(7);
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
(lib.green = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {orange:565,black:555,green:545};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [545,555,565];
	// timeline functions:
	this.frame_545 = function() {
		this.stop();
		
		
		this.btnNextBlack.addEventListener("click", () => {
		  this.gotoAndStop("black");
		});
		this.stop();
		
		if (this.btnBackPink) {
		  this.btnBackPink.on("click", () => {
		    window.open("pink.html", "_self");
		  });
		} else {
		  console.log("btnBackPink belum ditemukan.");
		}
	}
	this.frame_555 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnBackGreen.addEventListener("click", () => {
		  this.gotoAndStop("green");
		});
		
		this.btnNextOrange.addEventListener("click", () => {
		  this.gotoAndStop("orange");
		});
	}
	this.frame_565 = function() {
		this.stop();
		this.btnBackBlack.addEventListener("click", () => {
		  this.gotoAndStop("black");
		});
		
		this.stop();
		
		if (this.btnNextBrown) {
		  this.btnNextBrown.on("click", () => {
		    window.open("brown.html", "_self");
		  });
		} else {
		  console.log("btnNextBrown belum ditemukan.");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(545).call(this.frame_545).wait(10).call(this.frame_555).wait(10).call(this.frame_565).wait(11));

	// next
	this.btnNextBrown = new lib.Symbol18();
	this.btnNextBrown.name = "btnNextBrown";
	this.btnNextBrown.setTransform(1088.6,597.25);
	this.btnNextBrown._off = true;
	new cjs.ButtonHelper(this.btnNextBrown, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextBrown).wait(565).to({_off:false},0).to({_off:true},10).wait(1));

	// back
	this.btnBackBlack = new lib.balikk();
	this.btnBackBlack.name = "btnBackBlack";
	this.btnBackBlack.setTransform(89,601.25);
	this.btnBackBlack._off = true;
	new cjs.ButtonHelper(this.btnBackBlack, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackBlack).wait(565).to({_off:false},0).to({_off:true},10).wait(1));

	// orange
	this.instance = new lib.orange();
	this.instance.setTransform(669,59,0.1514,0.2233);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(565).to({_off:false},0).to({_off:true},10).wait(1));

	// bak
	this.instance_1 = new lib.CachedBmp_34();
	this.instance_1.setTransform(191,91.1,0.5,0.5);

	this.instance_2 = new lib.abjadd();
	this.instance_2.setTransform(3,3,1.7334,1.8501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},565).to({state:[]},10).wait(1));

	// next
	this.btnNextOrange = new lib.Symbol18();
	this.btnNextOrange.name = "btnNextOrange";
	this.btnNextOrange.setTransform(1088.6,598.75);
	this.btnNextOrange._off = true;
	new cjs.ButtonHelper(this.btnNextOrange, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextOrange).wait(555).to({_off:false},0).to({_off:true},10).wait(11));

	// back
	this.btnBackGreen = new lib.balikk();
	this.btnBackGreen.name = "btnBackGreen";
	this.btnBackGreen.setTransform(86.95,598.75);
	this.btnBackGreen._off = true;
	new cjs.ButtonHelper(this.btnBackGreen, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackGreen).wait(555).to({_off:false},0).to({_off:true},10).wait(11));

	// black
	this.instance_3 = new lib.black();
	this.instance_3.setTransform(662,55,0.4569,0.2947);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(555).to({_off:false},0).to({_off:true},10).wait(11));

	// bak
	this.instance_4 = new lib.CachedBmp_35();
	this.instance_4.setTransform(138,55.15,0.5,0.5);

	this.instance_5 = new lib.abjadd();
	this.instance_5.setTransform(-1,-1,1.7389,1.8551);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},555).to({state:[]},10).to({state:[]},1).wait(10));

	// next
	this.btnNextBlack = new lib.Symbol18();
	this.btnNextBlack.name = "btnNextBlack";
	this.btnNextBlack.setTransform(1088.65,583.8);
	this.btnNextBlack._off = true;
	new cjs.ButtonHelper(this.btnNextBlack, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextBlack).wait(545).to({_off:false},0).to({_off:true},10).wait(21));

	// back
	this.btnBackPink = new lib.balik();
	this.btnBackPink.name = "btnBackPink";
	this.btnBackPink.setTransform(89,583.8);
	this.btnBackPink._off = true;
	new cjs.ButtonHelper(this.btnBackPink, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackPink).wait(545).to({_off:false},0).to({_off:true},10).wait(21));

	// greean
	this.instance_6 = new lib.treee();
	this.instance_6.setTransform(668,48,2.504,1.9691);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(545).to({_off:false},0).to({_off:true},10).wait(21));

	// bak
	this.instance_7 = new lib.CachedBmp_36();
	this.instance_7.setTransform(163.95,87.1,0.5,0.5);

	this.instance_8 = new lib.abjadd();
	this.instance_8.setTransform(2,-3,1.739,1.8594);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},545).to({state:[]},10).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1281.9,769);
// library properties:
lib.properties = {
	id: '63525936D31674449F791E1D8EA8D9F3',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/orange.jpg", id:"orange"},
		{src:"images/green_atlas_1.png", id:"green_atlas_1"},
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
an.compositions['63525936D31674449F791E1D8EA8D9F3'] = {
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