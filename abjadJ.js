(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"abjadJ_atlas_1", frames: [[634,1202,463,377],[0,1202,632,349],[428,1581,383,200],[1558,1538,408,349],[0,1553,426,297],[1099,1538,457,333],[1202,1122,736,414],[1816,0,102,102],[1202,0,612,591],[0,0,1200,1200],[1202,593,612,527],[1920,0,102,102]]}
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



(lib.CachedBmp_68 = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.jiuce = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.kite = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.lion = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["abjadJ_atlas_1"]);
	this.gotoAndStop(11);
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
(lib.abjadJ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {abjadL:365,abjadK:355,abjadJ:345};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [345,355,365];
	// timeline functions:
	this.frame_345 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnNextK.addEventListener("click", () => {
		  this.gotoAndStop("abjadK");
		});
		this.stop();
		
		if (this.btnBackI) {
		  this.btnBackI.on("click", () => {
		    window.open("abjadI.html", "_self");
		  });
		} else {
		  console.log("btnBackI belum ditemukan.");
		}
		playSound("J");
	}
	this.frame_355 = function() {
		this.btnBackJ.addEventListener("click", () => {
		  this.gotoAndStop("abjadJ");
		});
		this.btnNextL.addEventListener("click", () => {
		  this.gotoAndStop("abjadL");
		});
		playSound("K");
	}
	this.frame_365 = function() {
		this.btnNextM.on("click", () => {
		  window.open("abjadM.html", "_self");
		});
		this.btnBackK.addEventListener("click", () => {
		  this.gotoAndStop("abjadK");
		});
		playSound("L");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(345).call(this.frame_345).wait(10).call(this.frame_355).wait(10).call(this.frame_365).wait(11));

	// next
	this.btnNextM = new lib.Symbol18();
	this.btnNextM.name = "btnNextM";
	this.btnNextM.setTransform(1084.6,604.8);
	this.btnNextM._off = true;
	new cjs.ButtonHelper(this.btnNextM, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextM).wait(365).to({_off:false},0).to({_off:true},10).wait(1));

	// back
	this.btnBackK = new lib.balikk();
	this.btnBackK.name = "btnBackK";
	this.btnBackK.setTransform(77,608.8);
	this.btnBackK._off = true;
	new cjs.ButtonHelper(this.btnBackK, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackK).wait(365).to({_off:false},0).to({_off:true},10).wait(1));

	// l
	this.instance = new lib.CachedBmp_63();
	this.instance.setTransform(178.95,56.4,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(365).to({_off:false},0).to({_off:true},10).wait(1));

	// lion
	this.instance_1 = new lib.lion();
	this.instance_1.setTransform(665,46,0.8889,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(365).to({_off:false},0).to({_off:true},10).wait(1));

	// bak
	this.instance_2 = new lib.CachedBmp_64();
	this.instance_2.setTransform(194.55,201.1,0.5,0.5);

	this.instance_3 = new lib.abjadd();
	this.instance_3.setTransform(-4,0,1.744,1.8839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},365).to({state:[]},10).wait(1));

	// back
	this.btnBackJ = new lib.balikk();
	this.btnBackJ.name = "btnBackJ";
	this.btnBackJ.setTransform(79,602.75);
	this.btnBackJ._off = true;
	new cjs.ButtonHelper(this.btnBackJ, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackJ).wait(355).to({_off:false},0).to({_off:true},10).wait(11));

	// next
	this.btnNextL = new lib.Symbol18();
	this.btnNextL.name = "btnNextL";
	this.btnNextL.setTransform(1080.6,598.75);
	this.btnNextL._off = true;
	new cjs.ButtonHelper(this.btnNextL, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextL).wait(355).to({_off:false},0).to({_off:true},10).wait(11));

	// kangoro
	this.instance_4 = new lib.kite();
	this.instance_4.setTransform(666,50,0.4536,0.3569);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(355).to({_off:false},0).to({_off:true},10).wait(11));

	// k
	this.instance_5 = new lib.CachedBmp_65();
	this.instance_5.setTransform(225.95,52.45,0.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(355).to({_off:false},0).to({_off:true},10).wait(11));

	// bak
	this.instance_6 = new lib.CachedBmp_66();
	this.instance_6.setTransform(238.6,213.1,0.5,0.5);

	this.instance_7 = new lib.abjadd();
	this.instance_7.setTransform(-1,-4,1.7392,1.8689);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},355).to({state:[]},10).to({state:[]},1).wait(10));

	// next
	this.btnNextK = new lib.Symbol18();
	this.btnNextK.name = "btnNextK";
	this.btnNextK.setTransform(1092.6,596.75);
	this.btnNextK._off = true;
	new cjs.ButtonHelper(this.btnNextK, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextK).wait(345).to({_off:false},0).to({_off:true},10).wait(21));

	// back
	this.btnBackI = new lib.balikk();
	this.btnBackI.name = "btnBackI";
	this.btnBackI.setTransform(98.95,596.75);
	this.btnBackI._off = true;
	new cjs.ButtonHelper(this.btnBackI, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackI).wait(345).to({_off:false},0).to({_off:true},10).wait(21));

	// jaguar
	this.instance_8 = new lib.jiuce();
	this.instance_8.setTransform(671,46,0.8889,0.8647);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(345).to({_off:false},0).to({_off:true},10).wait(21));

	// j
	this.instance_9 = new lib.CachedBmp_67();
	this.instance_9.setTransform(146.1,36.45,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(345).to({_off:false},0).to({_off:true},10).wait(21));

	// bac
	this.instance_10 = new lib.CachedBmp_68();
	this.instance_10.setTransform(191.95,210.75,0.5,0.5);

	this.instance_11 = new lib.abjadd();
	this.instance_11.setTransform(2,-9,1.7442,1.8885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},345).to({state:[]},10).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1285.8,780);
// library properties:
lib.properties = {
	id: '4835F323F6D4F44E8742FFC893F9559D',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/abjadJ_atlas_1.png", id:"abjadJ_atlas_1"},
		{src:"sounds/J.mp3", id:"J"},
		{src:"sounds/K.mp3", id:"K"},
		{src:"sounds/klikonlineaudioconvertercomwav.mp3", id:"klikonlineaudioconvertercomwav"},
		{src:"sounds/L.mp3", id:"L"}
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
an.compositions['4835F323F6D4F44E8742FFC893F9559D'] = {
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