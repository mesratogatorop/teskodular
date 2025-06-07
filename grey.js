(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"grey_atlas_1", frames: [[1396,250,478,224],[1396,0,493,248],[893,1030,322,185],[893,614,736,414],[1217,1030,102,102],[0,0,891,1700],[893,0,501,612],[1217,1134,102,102],[1396,476,338,87]]}
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



(lib.CachedBmp_101 = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.abjadd = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.backk = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.greyy = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lilac = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.nextt = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tombol = function() {
	this.initialize(ss["grey_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
(lib.grey = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {lilac:614,grey:605};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [605,614];
	// timeline functions:
	this.frame_605 = function() {
		this.btnNextLilac.addEventListener("click", () => {
		  this.gotoAndStop("lilac");
		});
		this.stop();
		
		if (this.btnBackYellow) {
		  this.btnBackYellow.on("click", () => {
		    window.open("yellow.html", "_self");
		  });
		} else {
		  console.log("btnBackYellow belum ditemukan.");
		}
	}
	this.frame_614 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.stop();
		
		if (this.btnBackHomeLilac) {
		  this.btnBackHomeLilac.on("click", () => {
		    window.open("menu_utama", "_self");
		  });
		} else {
		  console.log("btnBackHomeLilac belum ditemukan.");
		}
		
		this.btnBackGrey.addEventListener("click", () => {
		  this.gotoAndStop("grey");
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(605).call(this.frame_605).wait(9).call(this.frame_614).wait(161));

	// home
	this.instance = new lib.CachedBmp_99();
	this.instance.setTransform(553.8,604.75,0.5,0.5);

	this.btnBackHomeLilac = new lib.Symbol23();
	this.btnBackHomeLilac.name = "btnBackHomeLilac";
	this.btnBackHomeLilac.setTransform(470.75,609.75);
	new cjs.ButtonHelper(this.btnBackHomeLilac, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnBackHomeLilac},{t:this.instance}]},614).to({state:[]},10).to({state:[]},1).wait(150));

	// back
	this.btnBackGrey = new lib.balikk();
	this.btnBackGrey.name = "btnBackGrey";
	this.btnBackGrey.setTransform(81.95,598.75);
	this.btnBackGrey._off = true;
	new cjs.ButtonHelper(this.btnBackGrey, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackGrey).wait(614).to({_off:false},0).to({_off:true},10).wait(151));

	// lilac
	this.instance_1 = new lib.lilac();
	this.instance_1.setTransform(670,55,1.0718,0.8301);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(614).to({_off:false},0).to({_off:true},10).wait(151));

	// bak
	this.instance_2 = new lib.CachedBmp_100();
	this.instance_2.setTransform(191.95,71.15,0.5,0.5);

	this.instance_3 = new lib.abjadd();
	this.instance_3.setTransform(-3,-1,1.7446,1.8597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},614).to({state:[]},10).to({state:[]},1).wait(150));

	// back
	this.btnBackYellow = new lib.balikk();
	this.btnBackYellow.name = "btnBackYellow";
	this.btnBackYellow.setTransform(76.95,610.8);
	this.btnBackYellow._off = true;
	new cjs.ButtonHelper(this.btnBackYellow, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnBackYellow).wait(605).to({_off:false},0).to({_off:true},9).wait(161));

	// next
	this.btnNextLilac = new lib.Symbol18();
	this.btnNextLilac.name = "btnNextLilac";
	this.btnNextLilac.setTransform(1080.6,597.8);
	this.btnNextLilac._off = true;
	new cjs.ButtonHelper(this.btnNextLilac, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNextLilac).wait(605).to({_off:false},0).to({_off:true},9).wait(161));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egq1ACPIAAkeMBVrAAAIAAEeg");
	this.shape.setTransform(939.175,514.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(605).to({_off:false},0).to({_off:true},9).wait(161));

	// grey
	this.instance_4 = new lib.greyy();
	this.instance_4.setTransform(669,56,0.6051,0.2779);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(605).to({_off:false},0).to({_off:true},9).wait(161));

	// bak
	this.instance_5 = new lib.CachedBmp_101();
	this.instance_5.setTransform(229.7,79.15,0.5,0.5);

	this.instance_6 = new lib.abjadd();
	this.instance_6.setTransform(3,-1,1.7333,1.8646);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},605).to({state:[]},9).to({state:[]},1).wait(160));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1281,771);
// library properties:
lib.properties = {
	id: '7486181BAC6A324FBAD03D9C94BC1006',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/grey_atlas_1.png", id:"grey_atlas_1"},
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
an.compositions['7486181BAC6A324FBAD03D9C94BC1006'] = {
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