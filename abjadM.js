(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"abjadM_atlas_1", frames: [[1282,1169,563,265],[1282,818,477,349],[448,1282,426,208],[0,1282,446,333],[1282,0,736,414],[1761,818,102,102],[1282,416,600,400],[0,0,1280,1280],[1761,922,102,102]]}
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



(lib.CachedBmp_72 = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.monkey = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.nest = function() {
	this.initialize(ss["abjadM_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["abjadM_atlas_1"]);
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


// stage content:
(lib.abjadM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {abjadN:385,abjadM:375};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [375,385];
	// timeline functions:
	this.frame_375 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.btnBackL.on("click", () => {
		  window.open("abjadL.html", "_self");
		});
		this.stop();
		
		if (this.btnBackL) {
		  this.btnBackL.on("click", () => {
		    window.open("abjadL.html", "_self");
		  });
		} else {
		  console.log("btnBackL belum ditemukan.");
		}
		this.btnNextN.addEventListener("click", () => {
		  this.gotoAndStop("abjadN");
		});
		playSound("M");
	}
	this.frame_385 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.stop();
		
		if (this.btnNextO) {
		  this.btnNextO.on("click", () => {
		    window.open("abjadO.html", "_self");
		  });
		} else {
		  console.log("btnNextO belum ditemukan.");
		}
		this.btnBackM.addEventListener("click", () => {
		  this.gotoAndStop("abjadM");
		});
		playSound("N");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(375).call(this.frame_375).wait(10).call(this.frame_385).wait(11));

	// n
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(202,52.4,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(385).to({_off:false},0).to({_off:true},10).wait(1));

	// burungjalak
	this.instance_1 = new lib.nest();
	this.instance_1.setTransform(666,55,0.4315,0.3502);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(385).to({_off:false},0).to({_off:true},10).wait(1));

	// next
	this.btnNextO = new lib.Symbol18();
	this.btnNextO.name = "btnNextO";
	this.btnNextO.setTransform(1092.6,598.75);
	this.btnNextO._off = true;
	new cjs.ButtonHelper(this.btnNextO, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextO).wait(385).to({_off:false},0).to({_off:true},10).wait(1));

	// back
	this.btnBackM = new lib.balikk();
	this.btnBackM.name = "btnBackM";
	this.btnBackM.setTransform(85,602.75);
	this.btnBackM._off = true;
	new cjs.ButtonHelper(this.btnBackM, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackM).wait(385).to({_off:false},0).to({_off:true},10).wait(1));

	// bak
	this.instance_2 = new lib.CachedBmp_70();
	this.instance_2.setTransform(202,225.1,0.5,0.5);

	this.instance_3 = new lib.abjadd();
	this.instance_3.setTransform(2,1,1.7389,1.8693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},385).to({state:[]},10).wait(1));

	// back
	this.btnBackL = new lib.balikk();
	this.btnBackL.name = "btnBackL";
	this.btnBackL.setTransform(87,596.75);
	this.btnBackL._off = true;
	new cjs.ButtonHelper(this.btnBackL, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackL).wait(375).to({_off:false},0).to({_off:true},10).wait(11));

	// next
	this.btnNextN = new lib.Symbol18();
	this.btnNextN.name = "btnNextN";
	this.btnNextN.setTransform(1086.6,592.75);
	this.btnNextN._off = true;
	new cjs.ButtonHelper(this.btnNextN, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextN).wait(375).to({_off:false},0).to({_off:true},10).wait(11));

	// manggo
	this.instance_4 = new lib.monkey();
	this.instance_4.setTransform(664,46,0.9199,1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(375).to({_off:false},0).to({_off:true},10).wait(11));

	// m
	this.instance_5 = new lib.CachedBmp_71();
	this.instance_5.setTransform(230,68.45,0.5,0.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(375).to({_off:false},0).to({_off:true},10).wait(11));

	// bak
	this.instance_6 = new lib.CachedBmp_72();
	this.instance_6.setTransform(197.95,233.1,0.5,0.5);

	this.instance_7 = new lib.abjadd();
	this.instance_7.setTransform(-1,-6,1.7443,1.8691);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},375).to({state:[]},10).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1282.8,774.9);
// library properties:
lib.properties = {
	id: '509D7EAAE6E7DE4B8E00A620AB644C12',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/abjadM_atlas_1.png", id:"abjadM_atlas_1"},
		{src:"sounds/klikonlineaudioconvertercomwav.mp3", id:"klikonlineaudioconvertercomwav"},
		{src:"sounds/M.mp3", id:"M"},
		{src:"sounds/N.mp3", id:"N"}
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
an.compositions['509D7EAAE6E7DE4B8E00A620AB644C12'] = {
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