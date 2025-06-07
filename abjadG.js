(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"abjadG_atlas_1", frames: [[1019,1030,590,249],[523,1030,494,325],[0,1357,594,192],[0,982,521,354],[1019,1281,548,242],[1611,1030,432,293],[982,614,736,414],[1514,402,102,102],[982,0,530,612],[0,0,980,980],[1514,0,512,400],[1618,402,102,102]]}
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



(lib.CachedBmp_62 = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.grapes = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.hen = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ice = function() {
	this.initialize(ss["abjadG_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["abjadG_atlas_1"]);
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
(lib.abjadG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {abjadI:335,abjadH:325,abjadG:315};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [315,325,335];
	// timeline functions:
	this.frame_315 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.stop();
		
		if (this.btnBackF) {
		  this.btnBackF.on("click", () => {
		    window.open("abjadF.html", "_self");
		  });
		} else {
		  console.log("btnBackF belum ditemukan.");
		}
		this.btnNextH.addEventListener("click", () => {
		  this.gotoAndStop("abjadH");
		});
		playSound("G");
	}
	this.frame_325 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnNextI.addEventListener("click", () => {
		  this.gotoAndStop("abjadI");
		});
		this.btnBackG.addEventListener("click", () => {
		  this.gotoAndStop("abjadG");
		});
		playSound("H");
	}
	this.frame_335 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.stop();
		
		if (this.btnNextJ) {
		  this.btnNextJ.on("click", () => {
		    window.open("abjadJ.html", "_self");
		  });
		} else {
		  console.log("btnNextJ belum ditemukan.");
		}
		this.btnBackH.addEventListener("click", () => {
		  this.gotoAndStop("abjadH");
		});
		playSound("I");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(315).call(this.frame_315).wait(10).call(this.frame_325).wait(10).call(this.frame_335).wait(11));

	// next
	this.btnNextJ = new lib.Symbol18();
	this.btnNextJ.name = "btnNextJ";
	this.btnNextJ.setTransform(1094.55,592.8);
	this.btnNextJ._off = true;
	new cjs.ButtonHelper(this.btnNextJ, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextJ).wait(335).to({_off:false},0).to({_off:true},10).wait(1));

	// back
	this.btnBackH = new lib.balikk();
	this.btnBackH.name = "btnBackH";
	this.btnBackH.setTransform(84.95,596.8);
	this.btnBackH._off = true;
	new cjs.ButtonHelper(this.btnBackH, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackH).wait(335).to({_off:false},0).to({_off:true},10).wait(1));

	// iguana
	this.instance = new lib.ice();
	this.instance.setTransform(670,52,1.0467,1.0997);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(335).to({_off:false},0).to({_off:true},10).wait(1));

	// i
	this.instance_1 = new lib.CachedBmp_57();
	this.instance_1.setTransform(195.5,56.4,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(335).to({_off:false},0).to({_off:true},10).wait(1));

	// bac
	this.instance_2 = new lib.CachedBmp_58();
	this.instance_2.setTransform(186.9,202.65,0.5,0.5);

	this.instance_3 = new lib.abjadd();
	this.instance_3.setTransform(3,-4,1.7335,1.8792);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},335).to({state:[]},10).wait(1));

	// next
	this.btnNextI = new lib.Symbol18();
	this.btnNextI.name = "btnNextI";
	this.btnNextI.setTransform(1094.6,602.75);
	this.btnNextI._off = true;
	new cjs.ButtonHelper(this.btnNextI, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextI).wait(325).to({_off:false},0).to({_off:true},10).wait(11));

	// bakc
	this.btnBackG = new lib.balikk();
	this.btnBackG.name = "btnBackG";
	this.btnBackG.setTransform(90.95,606.75);
	this.btnBackG._off = true;
	new cjs.ButtonHelper(this.btnBackG, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackG).wait(325).to({_off:false},0).to({_off:true},10).wait(11));

	// horse
	this.instance_4 = new lib.hen();
	this.instance_4.setTransform(665,56,0.5593,0.4899);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(325).to({_off:false},0).to({_off:true},10).wait(11));

	// h
	this.instance_5 = new lib.CachedBmp_59();
	this.instance_5.setTransform(192.95,88.6,0.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(325).to({_off:false},0).to({_off:true},10).wait(11));

	// bac
	this.instance_6 = new lib.CachedBmp_60();
	this.instance_6.setTransform(179.9,239.3,0.5,0.5);

	this.instance_7 = new lib.abjadd();
	this.instance_7.setTransform(0,3,1.7393,1.879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},325).to({state:[]},10).to({state:[]},1).wait(10));

	// next
	this.btnNextH = new lib.Symbol18();
	this.btnNextH.name = "btnNextH";
	this.btnNextH.setTransform(1082.6,594.75);
	this.btnNextH._off = true;
	new cjs.ButtonHelper(this.btnNextH, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextH).wait(315).to({_off:false},0).to({_off:true},10).wait(21));

	// girrafe
	this.instance_8 = new lib.grapes();
	this.instance_8.setTransform(669,52,1.0376,0.902);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(315).to({_off:false},0).to({_off:true},10).wait(21));

	// g
	this.instance_9 = new lib.CachedBmp_61();
	this.instance_9.setTransform(173.9,50.6,0.5,0.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(315).to({_off:false},0).to({_off:true},10).wait(21));

	// bac
	this.instance_10 = new lib.CachedBmp_62();
	this.instance_10.setTransform(150.05,199.15,0.5,0.5);

	this.instance_11 = new lib.abjadd();
	this.instance_11.setTransform(1,-3,1.7443,1.8597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},315).to({state:[]},10).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1284.8,780.9);
// library properties:
lib.properties = {
	id: '0ABC764083F5B7468F70B5D7FE839FA5',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/abjadG_atlas_1.png", id:"abjadG_atlas_1"},
		{src:"sounds/G.mp3", id:"G"},
		{src:"sounds/H.mp3", id:"H"},
		{src:"sounds/I.mp3", id:"I"},
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
an.compositions['0ABC764083F5B7468F70B5D7FE839FA5'] = {
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