Clay:: object --> 
__e3_:[object Object];
gm_accessors_:[object Object];
types:(cities);
gm_bindings_:[object Object];
componentRestrictions:[object Object];
constructor:function (a,b){try{_.dd(window.HTMLInputElement,"HTMLInputElement")(a)}catch(c){if(_.Yc(c),!a)return}_.F("places_impl",(0,_.p)(function(c){b=b||{};this.setValues(b);c.b(this,a);_.Ke(a)},this))};
setTypes:function (c){try{this.set(a,b(c))}catch(d){_.Yc(_.Xc("set"+_.Bb(a),d))}};
setComponentRestrictions:function (c){try{this.set(a,b(c))}catch(d){_.Yc(_.Xc("set"+_.Bb(a),d))}};
getPlace:function (){return this.get(a)};
getBounds:function (){return this.get(a)};
setBounds:function (c){try{this.set(a,b(c))}catch(d){_.Yc(_.Xc("set"+_.Bb(a),d))}};
get:function (a){var b=Cb(this);a+="";b=jb(b,a);if(_.m(b)){if(b){a=b.Ya;var b=b.Bc,c="get"+_.Bb(a);return b[c]?b[c]():b.get(a)}return this[a]}};
set:function (a,b){var c=Cb(this);a+="";var d=jb(c,a);if(d)if(a=d.Ya,d=d.Bc,c="set"+_.Bb(a),d[c])d[c](b);else d.set(a,b);else this[a]=b,c[a]=null,zb(this,a)};
notify:function (a){var b=Cb(this);a+="";(b=jb(b,a))?b.Bc.notify(b.Ya):zb(this,a)};
setValues:function (a){for(var b in a){var c=a[b],d="set"+_.Bb(b);if(this[d])this[d](c);else this.set(b,c)}};
setOptions:function (a){for(var b in a){var c=a[b],d="set"+_.Bb(b);if(this[d])this[d](c);else this.set(b,c)}};
changed:function (){};
bindTo:function (a,b,c,d){a+="";c=(c||a)+"";this.unbind(a);var e={Bc:this,Ya:a},f={Bc:b,Ya:c,lg:e};Cb(this)[a]=f;yb(b,c)[_.Sa(e)]=e;d||zb(this,a)};
unbind:function (a){var b=Cb(this),c=b[a];c&&(c.lg&&delete yb(c.Bc,c.Ya)[_.Sa(c.lg)],this[a]=this.get(a),b[a]=null)};
unbindAll:function (){var a=(0,_.p)(this.unbind,this),b=Cb(this),c;for(c in b)a(c)};
addListener:function (a,b){return _.x.addListener(this,a,b)};

getPlace: 
Clay:: object --> 
address_components:[object Object],[object Object],[object Object],[object Object];
adr_address:<span class="locality">Seattle</span>, <span class="region">WA</span>, <span class="country-name">USA</span>;
formatted_address:Seattle, WA, USA;
geometry:[object Object];
icon:https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png;
id:67cf2359c5a32054c37a05f8173fa95710f0af09;
name:Seattle;
photos:[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object];
place_id:ChIJVTPokywQkFQRmtVEaUZlJRA;
reference:CmRbAAAAPh4ORgqkOcz_veWxGXbGUmYwxsPIy1KEqsZlR88ou1ACE8pYitd4NX_7JYtkLJNzuHrKN0UeQBVVEzgjj-vB-Mz2FkIjU4JfPU9rREQE7SeVOShnHUrwhwRTUx07qQ6tEhAfz4j3ISwkmfxQ-x64oJT2GhTv7V86Qmnb8VsodCulzlZAJOtAQA;
scope:GOOGLE;
types:locality,political;
url:https://maps.google.com/?q=Seattle,+WA,+USA&ftid=0x5490102c93e83355:0x102565466944d59a;
utc_offset:-480;
vicinity:Seattle;
html_attributions:;