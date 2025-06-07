(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"abjadO_atlas_1", frames: [[1440,1598,521,240],[1282,399,470,365],[1002,1271,494,281],[1498,1271,416,325],[1002,1554,436,289],[1282,0,528,397],[1002,855,736,414],[1740,766,102,102],[1754,399,102,102],[0,0,1280,853],[0,855,1000,1080]]}
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



(lib.CachedBmp_78 = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.orange = function() {
	this.initialize(img.orange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3520,2260);


(lib.pepaya = function() {
	this.initialize(ss["abjadO_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.queenjpgcopy = function() {
	this.initialize(ss["abjadO_atlas_1"]);
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
(lib.abjadO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {abjadQ:415,abjadP:405,abjadO:395};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [395,405,415];
	// timeline functions:
	this.frame_395 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.stop();
		
		if (this.btnBackN) {
		  this.btnBackN.on("click", () => {
		    window.open("abjadN.html", "_self");
		  });
		} else {
		  console.log("btnBackN belum ditemukan.");
		}
		this.btnNextP.addEventListener("click", () => {
		  this.gotoAndStop("abjadP");
		});
		playSound("O");
	}
	this.frame_405 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnNextQ.addEventListener("click", () => {
		  this.gotoAndStop("abjadQ");
		});
		this.btnBackO.addEventListener("click", () => {
		  this.gotoAndStop("abjadO");
		});
		playSound("P");
	}
	this.frame_415 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnBackP.addEventListener("click", () => {
		  this.gotoAndStop("abjadP");
		});
		this.stop();
		
		if (this.btnNextR) {
		  this.btnNextR.on("click", () => {
		    window.open("abjadR.html", "_self");
		  });
		} else {
		  console.log("btnNextR belum ditemukan.");
		}
		playSound("Q");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(395).call(this.frame_395).wait(10).call(this.frame_405).wait(10).call(this.frame_415).wait(360));

	// back
	this.btnBackP = new lib.balikk();
	this.btnBackP.name = "btnBackP";
	this.btnBackP.setTransform(82,590.8);
	this.btnBackP._off = true;
	new cjs.ButtonHelper(this.btnBackP, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackP).wait(415).to({_off:false},0).to({_off:true},10).wait(350));

	// next
	this.btnNextR = new lib.Symbol18();
	this.btnNextR.name = "btnNextR";
	this.btnNextR.setTransform(1082.6,590.8);
	this.btnNextR._off = true;
	new cjs.ButtonHelper(this.btnNextR, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextR).wait(415).to({_off:false},0).to({_off:true},10).wait(350));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egq1ACsIAAlXMBVrAAAIAAFXg");
	this.shape.setTransform(937.95,523.025);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(415).to({_off:false},0).to({_off:true},10).wait(350));

	// quail
	this.instance = new lib.queenjpgcopy();
	this.instance.setTransform(664,56,0.5482,0.4483);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(415).to({_off:false},0).to({_off:true},10).wait(350));

	// Q
	this.instance_1 = new lib.CachedBmp_73();
	this.instance_1.setTransform(184,40.4,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(415).to({_off:false},0).to({_off:true},10).wait(350));

	// bak
	this.instance_2 = new lib.CachedBmp_74();
	this.instance_2.setTransform(206,238.7,0.5,0.5);

	this.instance_3 = new lib.abjadd();
	this.instance_3.setTransform(-3,-1,1.7443,1.8549);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},415).to({state:[]},10).to({state:[]},1).wait(349));

	// next
	this.btnNextQ = new lib.Symbol18();
	this.btnNextQ.name = "btnNextQ";
	this.btnNextQ.setTransform(1092.6,588.8);
	this.btnNextQ._off = true;
	new cjs.ButtonHelper(this.btnNextQ, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextQ).wait(405).to({_off:false},0).to({_off:true},10).wait(360));

	// back
	this.btnBackO = new lib.balikk();
	this.btnBackO.name = "btnBackO";
	this.btnBackO.setTransform(91.05,592.8);
	this.btnBackO._off = true;
	new cjs.ButtonHelper(this.btnBackO, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackO).wait(405).to({_off:false},0).to({_off:true},10).wait(360));

	// p
	this.instance_4 = new lib.CachedBmp_75();
	this.instance_4.setTransform(236,52.4,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(405).to({_off:false},0).to({_off:true},10).wait(360));

	// pinguin
	this.instance_5 = new lib.pepaya();
	this.instance_5.setTransform(673,59,0.4283,0.5313);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(405).to({_off:false},0).to({_off:true},10).wait(360));

	// bak
	this.instance_6 = new lib.CachedBmp_76();
	this.instance_6.setTransform(197.35,214.9,0.5,0.5);

	this.instance_7 = new lib.abjadd();
	this.instance_7.setTransform(3,4,1.7497,1.8401);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},405).to({state:[]},10).to({state:[]},1).wait(359));

	// o
	this.instance_8 = new lib.CachedBmp_77();
	this.instance_8.setTransform(191,42.45,0.5,0.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(395).to({_off:false},0).to({_off:true},10).wait(370));

	// back
	this.btnBackN = new lib.balikk();
	this.btnBackN.name = "btnBackN";
	this.btnBackN.setTransform(89,596.75);
	this.btnBackN._off = true;
	new cjs.ButtonHelper(this.btnBackN, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackN).wait(395).to({_off:false},0).to({_off:true},10).wait(370));

	// next
	this.btnNextP = new lib.Symbol18();
	this.btnNextP.name = "btnNextP";
	this.btnNextP.setTransform(1080.6,596.75);
	this.btnNextP._off = true;
	new cjs.ButtonHelper(this.btnNextP, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextP).wait(395).to({_off:false},0).to({_off:true},10).wait(370));

	// orange
	this.instance_9 = new lib.orange();
	this.instance_9.setTransform(664,58,0.156,0.202);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(395).to({_off:false},0).to({_off:true},10).wait(370));

	// bak
	this.instance_10 = new lib.CachedBmp_78();
	this.instance_10.setTransform(190.95,213.1,0.5,0.5);

	this.instance_11 = new lib.abjadd();
	this.instance_11.setTransform(3,3,1.7334,1.8593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},395).to({state:[]},10).to({state:[]},1).wait(369));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1290.8,772.8);
// library properties:
lib.properties = {
	id: '043774AFEB7710448D72D8022778DA97',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/orange.jpg", id:"orange"},
		{src:"images/abjadO_atlas_1.png", id:"abjadO_atlas_1"},
		{src:"sounds/klikonlineaudioconvertercomwav.mp3", id:"klikonlineaudioconvertercomwav"},
		{src:"sounds/O.mp3", id:"O"},
		{src:"sounds/P.mp3", id:"P"},
		{src:"sounds/Q.mp3", id:"Q"}
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
an.compositions['043774AFEB7710448D72D8022778DA97'] = {
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