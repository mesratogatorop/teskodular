(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"menu_utama_atlas_1", frames: [[0,594,1580,366],[0,962,943,224],[1548,416,357,158],[1058,416,488,146],[945,962,341,138],[1058,0,736,414],[0,0,1056,592],[1796,104,82,82],[1796,188,82,82],[945,1102,338,87],[1796,0,102,102]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.loading = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.menumateri3 = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.soundsoff = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.soundson = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tombol = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.tunjuk = function() {
	this.initialize(ss["menu_utama_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tombol();
	this.instance.setTransform(0,0,1.1027,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.024,x:13},0).wait(1).to({scaleX:1.1107,x:-2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,375.4,87);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tombol();
	this.instance.setTransform(0,0,1.1027,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.0475,x:9},0).wait(1).to({scaleX:1.1104,x:-2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,375.3,87);


(lib.soundon = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.soundson();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.6585,x:14},0).wait(1).to({scaleX:1.0978,x:-4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,0,90,82);


(lib.soundoff = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.soundsoff();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,82);


(lib.petunjuk = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tunjuk();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.698,y:15},0).wait(1).to({scaleY:0.9697,y:1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.off = function(mode,startPosition,loop,reversed) {
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
	this.btnSoundOff = new lib.soundoff();
	this.btnSoundOff.name = "btnSoundOff";
	this.btnSoundOff.setTransform(41,41,1,1,0,0,0,41,41);
	new cjs.ButtonHelper(this.btnSoundOff, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnSoundOff).wait(1).to({regY:41.1,scaleY:0.55,y:41.05},0).wait(1).to({scaleY:0.9992,y:41},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82,82);


// stage content:
(lib.menu_utama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {materi:30,petunjuk:30,menu_utama:30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [29,30,90,120,159,164];
	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndStop("menu_utama");
	}
	this.frame_30 = function() {
		this.stop();
		
		if (this.btnKeluar) {
		  this.btnKeluar.on("click", () => {
		    window.open("menuKeluar.html", "_self");
		  });
		} else {
		  console.log("btnKeluar belum ditemukan.");
		}
		this.stop();
		
		if (this.btnEvaluasi) {
		  this.btnEvaluasi.on("click", () => {
		    window.open("menu_evaluasi.html", "_self");
		  });
		} else {
		  console.log("btnEvaluasi belum ditemukan.");
		}
		this.stop();
		
		if (this.btnMateri) {
		  this.btnMateri.on("click", () => {
		    window.open("menu_materi.html", "_self");
		  });
		} else {
		  console.log("btnMateri belum ditemukan.");
		}
		this.stop();
		
		if (this.btnPetunjuk) {
		  this.btnPetunjuk.on("click", () => {
		    window.open("datadiri.html", "_self");
		  });
		} else {
		  console.log("btnPetunjuk belum ditemukan.");
		}
		this.stop();
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.registerSound("musikcartoon.mp3", "bgMusic");
		
		let isPlaying = false;
		let bgSound;
		
		this.btnOn.visible = true;
		this.btnOff.visible = false;
		
		this.btnOn.on("click", () => {
		  if (!isPlaying) {
		    bgSound = createjs.Sound.play("bgMusic", {loop: -1});
		    if (bgSound) {
		      isPlaying = true;
		      this.btnOn.visible = false;
		      this.btnOff.visible = true;
		    }
		  }
		});
		
		this.btnOff.on("click", () => {
		  if (isPlaying && bgSound) {
		    bgSound.stop();
		    isPlaying = false;
		    this.btnOn.visible = true;
		    this.btnOff.visible = false;
		  }
		});
	}
	this.frame_90 = function() {
		this.stop();
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_120 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_159 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}
	this.frame_164 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1).call(this.frame_30).wait(60).call(this.frame_90).wait(30).call(this.frame_120).wait(39).call(this.frame_159).wait(5).call(this.frame_164).wait(91));

	// soundonn
	this.btnOn = new lib.soundon();
	this.btnOn.name = "btnOn";
	this.btnOn.setTransform(196.7,338.25);
	this.btnOn._off = true;
	new cjs.ButtonHelper(this.btnOn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnOn).wait(30).to({_off:false},0).to({_off:true},60).wait(165));

	// soundsoff
	this.btnOff = new lib.off();
	this.btnOff.name = "btnOff";
	this.btnOff.setTransform(237.7,477.2,1,1,0,0,0,41,41);
	this.btnOff._off = true;
	new cjs.ButtonHelper(this.btnOff, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnOff).wait(30).to({_off:false},0).to({_off:true},60).wait(165));

	// keluarr
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(515.4,535.4,0.5,0.5);

	this.btnKeluar = new lib.Symbol3();
	this.btnKeluar.name = "btnKeluar";
	this.btnKeluar.setTransform(609.3,573.5,1,1,0,0,0,186.3,43.5);
	new cjs.ButtonHelper(this.btnKeluar, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnKeluar},{t:this.instance}]},30).to({state:[]},60).to({state:[]},1).wait(164));

	// evaluasi
	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(488.9,412.45,0.5,0.5);

	this.btnEvaluasi = new lib.Symbol3();
	this.btnEvaluasi.name = "btnEvaluasi";
	this.btnEvaluasi.setTransform(609.3,452.5,1,1,0,0,0,186.3,43.5);
	new cjs.ButtonHelper(this.btnEvaluasi, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnEvaluasi},{t:this.instance_1}]},30).to({state:[]},60).to({state:[]},1).wait(164));

	// materi
	this.instance_2 = new lib.CachedBmp_7();
	this.instance_2.setTransform(507.6,274.5,0.5,0.5);

	this.btnMateri = new lib.Symbol4();
	this.btnMateri.name = "btnMateri";
	this.btnMateri.setTransform(609.3,319.5,1,1,0,0,0,186.3,43.5);
	new cjs.ButtonHelper(this.btnMateri, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnMateri},{t:this.instance_2}]},30).to({state:[]},60).to({state:[]},1).wait(164));

	// petunjuk
	this.btnPetunjuk = new lib.petunjuk();
	this.btnPetunjuk.name = "btnPetunjuk";
	this.btnPetunjuk.setTransform(1092.25,172.9,0.7127,0.7127,0,0,0,51,51);
	this.btnPetunjuk._off = true;
	new cjs.ButtonHelper(this.btnPetunjuk, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPetunjuk).wait(30).to({_off:false},0).to({_off:true},60).wait(165));

	// belajar
	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(397.85,97.25,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({_off:true},60).wait(165));

	// menu_utama
	this.instance_4 = new lib.tombol();
	this.instance_4.setTransform(423,409,1.1027,1);

	this.instance_5 = new lib.menumateri3();
	this.instance_5.setTransform(0,2,1.2135,1.2917);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},30).to({state:[]},60).to({state:[]},1).wait(164));

	// text
	this.instance_6 = new lib.CachedBmp_9();
	this.instance_6.setTransform(248.05,71.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},30).wait(225));

	// loading2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuE/IAAp9IFdAAIAAJ9g");
	this.shape.setTransform(201.575,499.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak+E/IAAp9IJ9AAIAAJ9g");
	this.shape_1.setTransform(215.975,499.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnOE/IAAp9IOdAAIAAJ9g");
	this.shape_2.setTransform(230.35,499.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApeE/IAAp9IS9AAIAAJ9g");
	this.shape_3.setTransform(244.75,499.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AruE/IAAp9IXdAAIAAJ9g");
	this.shape_4.setTransform(259.125,499.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("At+E/IAAp9Ib9AAIAAJ9g");
	this.shape_5.setTransform(273.525,499.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AwNE/IAAp9MAgcAAAIAAJ9g");
	this.shape_6.setTransform(287.9,499.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AydE/IAAp9MAk8AAAIAAJ9g");
	this.shape_7.setTransform(302.3,499.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A0tE/IAAp9MApbAAAIAAJ9g");
	this.shape_8.setTransform(316.675,499.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A29E/IAAp9MAt7AAAIAAJ9g");
	this.shape_9.setTransform(331.075,499.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A5NE/IAAp9MAybAAAIAAJ9g");
	this.shape_10.setTransform(345.45,499.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A7dE/IAAp9MA27AAAIAAJ9g");
	this.shape_11.setTransform(359.85,499.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A9tE/IAAp9MA7bAAAIAAJ9g");
	this.shape_12.setTransform(374.225,499.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A/9E/IAAp9MA/7AAAIAAJ9g");
	this.shape_13.setTransform(388.625,499.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgiMAE/IAAp9MBEaAAAIAAJ9g");
	this.shape_14.setTransform(403,499.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgkcAE/IAAp9MBI6AAAIAAJ9g");
	this.shape_15.setTransform(417.4,499.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgmsAE/IAAp9MBNZAAAIAAJ9g");
	this.shape_16.setTransform(431.775,499.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ego8AE/IAAp9MBR5AAAIAAJ9g");
	this.shape_17.setTransform(446.175,499.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgrMAE/IAAp9MBWZAAAIAAJ9g");
	this.shape_18.setTransform(460.55,499.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgtcAE/IAAp9MBa5AAAIAAJ9g");
	this.shape_19.setTransform(474.95,499.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EgvsAE/IAAp9MBfZAAAIAAJ9g");
	this.shape_20.setTransform(489.325,499.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Egx8AE/IAAp9MBj5AAAIAAJ9g");
	this.shape_21.setTransform(503.725,499.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Eg0LAE/IAAp9MBoXAAAIAAJ9g");
	this.shape_22.setTransform(518.1,499.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Eg2bAE/IAAp9MBs3AAAIAAJ9g");
	this.shape_23.setTransform(532.5,499.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Eg4rAE/IAAp9MBxXAAAIAAJ9g");
	this.shape_24.setTransform(546.875,499.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Eg67AE/IAAp9MB13AAAIAAJ9g");
	this.shape_25.setTransform(561.275,499.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Eg9LAE/IAAp9MB6XAAAIAAJ9g");
	this.shape_26.setTransform(575.65,499.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Eg/bAE/IAAp9MB+3AAAIAAJ9g");
	this.shape_27.setTransform(590.05,499.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("EhBrAE/IAAp9MCDXAAAIAAJ9g");
	this.shape_28.setTransform(604.425,499.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EhD7AE/IAAp9MCH3AAAIAAJ9g");
	this.shape_29.setTransform(618.825,499.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[]},1).wait(224));

	// loading1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0033").s().p("EhGHAHMIAAuXMCMPAAAIAAOXg");
	this.shape_30.setTransform(618.775,499.875);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).to({_off:true},30).wait(225));

	// background
	this.instance_7 = new lib.loading();
	this.instance_7.setTransform(-8,-1,1.7497,1.8019);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},30).wait(225));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1281.5,766.7);
// library properties:
lib.properties = {
	id: 'B9903446EADC764081BDF5427FCAC286',
	width: 1280,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/menu_utama_atlas_1.png?1749234156265", id:"menu_utama_atlas_1"},
		{src:"sounds/klikonlineaudioconvertercomwav.mp3?1749234156407", id:"klikonlineaudioconvertercomwav"}
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
an.compositions['B9903446EADC764081BDF5427FCAC286'] = {
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