((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
iR(d,e){return new A.bU(d.h("@<0>").u(e).h("bU<1,2>"))},
hv(d,e){var x=d[e]
return x===d?null:x},
fG(d,e,f){if(f==null)d[e]=d
else d[e]=f},
fF(){var x=Object.create(null)
A.fG(x,"<non-identifier-key>",x)
delete x["<non-identifier-key>"]
return x},
iS(d,e,f){var x=A.iR(e,f)
d.B(0,new A.dM(x,e,f))
return x},
bU:function bU(d){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
bV:function bV(d,e){this.a=d
this.$ti=e},
bW:function bW(d,e,f){var _=this
_.a=d
_.b=e
_.c=0
_.d=null
_.$ti=f},
dM:function dM(d,e,f){this.a=d
this.b=e
this.c=f},
eb:function eb(){},
bQ:function bQ(d){this.a=d},
dp:function dp(){},
d4:function d4(d){this.a=d},
hg(d){return C.h.ce(d)===d?C.m.i(C.h.cd(d)):C.h.i(d)},
b4:function b4(){},
da:function da(d,e){this.a=d
this.b=e},
dg:function dg(d,e){this.a=d
this.b=e},
jV(d,e){var x=y.N
return d.c7(0,new A.eF(e),x,x)},
cY:function cY(){},
cZ:function cZ(){},
dl:function dl(d,e,f,g){var _=this
_.z=d
_.ry=e
_.x2=f
_.c0=g},
eF:function eF(d){this.a=d},
dm:function dm(){},
bf:function bf(){},
S:function S(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.f=e
_.r=f
_.w=g
_.x=h
_.y=i
_.b=j
_.c=k
_.a=l},
ct:function ct(d,e,f,g,h,i){var _=this
_.xr=null
_.d$=d
_.e$=e
_.dx=null
_.dy=f
_.b=_.a=null
_.c=g
_.d=null
_.e=h
_.r=_.f=null
_.w=i
_.z=_.y=_.x=null
_.Q=!1
_.as=!0
_.at=!1
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.db=!1},
x:function x(d,e){this.b=d
this.a=e},
d0:function d0(d,e,f,g,h){var _=this
_.d$=d
_.e$=e
_.b=_.a=null
_.c=f
_.d=null
_.e=g
_.r=_.f=null
_.w=h
_.z=_.y=_.x=null
_.Q=!1
_.as=!0
_.at=!1
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.db=!1},
bu:function bu(){},
bv:function bv(){},
a_:function a_(){},
cV:function cV(d,e,f,g){var _=this
_.dx=_.y1=null
_.dy=d
_.b=_.a=null
_.c=e
_.d=null
_.e=f
_.r=_.f=null
_.w=g
_.z=_.y=_.x=null
_.Q=!1
_.as=!0
_.at=!1
_.cy=_.cx=_.CW=_.ch=_.ay=null
_.db=!1},
ic(d,e){var x=null
return new A.S("section",x,e,x,x,x,x,d,x)},
m(d,e,f){var x=null
return new A.S("div",x,f,x,e,x,x,d,x)},
fi(d,e,f){var x=null
return new A.S("p",x,f,x,e,x,x,d,x)}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[5],A)
D=c[6]
A.bU.prototype={
gn(d){return this.a},
gP(){return new A.bV(this,B.k(this).h("bV<1>"))},
aF(d){var x=this.bu(d)
return x},
bu(d){var x=this.d
if(x==null)return!1
return this.C(this.aX(x,d),d)>=0},
m(d,e){var x,w,v
if(typeof e=="string"&&e!=="__proto__"){x=this.b
w=x==null?null:A.hv(x,e)
return w}else if(typeof e=="number"&&(e&1073741823)===e){v=this.c
w=v==null?null:A.hv(v,e)
return w}else return this.by(e)},
by(d){var x,w,v=this.d
if(v==null)return null
x=this.aX(v,d)
w=this.C(x,d)
return w<0?null:x[w+1]},
k(d,e,f){var x,w,v=this,u=B.k(v)
u.c.a(e)
u.y[1].a(f)
if(typeof e=="string"&&e!=="__proto__"){x=v.b
v.aS(x==null?v.b=A.fF():x,e,f)}else if(typeof e=="number"&&(e&1073741823)===e){w=v.c
v.aS(w==null?v.c=A.fF():w,e,f)}else v.bD(e,f)},
bD(d,e){var x,w,v,u,t=this,s=B.k(t)
s.c.a(d)
s.y[1].a(e)
x=t.d
if(x==null)x=t.d=A.fF()
w=t.F(d)
v=x[w]
if(v==null){A.fG(x,w,[d,e]);++t.a
t.e=null}else{u=t.C(v,d)
if(u>=0)v[u+1]=e
else{v.push(d,e);++t.a
t.e=null}}},
I(d,e){var x=this.V(e)
return x},
V(d){var x,w,v,u,t=this,s=t.d
if(s==null)return null
x=t.F(d)
w=s[x]
v=t.C(w,d)
if(v<0)return null;--t.a
t.e=null
u=w.splice(v,2)[1]
if(0===w.length)delete s[x]
return u},
B(d,e){var x,w,v,u,t,s,r=this,q=B.k(r)
q.h("~(1,2)").a(e)
x=r.aT()
for(w=x.length,v=q.c,q=q.y[1],u=0;u<w;++u){t=x[u]
v.a(t)
s=r.m(0,t)
e.$2(t,s==null?q.a(s):s)
if(x!==r.e)throw B.e(B.a4(r))}},
aT(){var x,w,v,u,t,s,r,q,p,o,n=this,m=n.e
if(m!=null)return m
m=B.aV(n.a,null,!1,y.z)
x=n.b
w=0
if(x!=null){v=Object.getOwnPropertyNames(x)
u=v.length
for(t=0;t<u;++t){m[w]=v[t];++w}}s=n.c
if(s!=null){v=Object.getOwnPropertyNames(s)
u=v.length
for(t=0;t<u;++t){m[w]=+v[t];++w}}r=n.d
if(r!=null){v=Object.getOwnPropertyNames(r)
u=v.length
for(t=0;t<u;++t){q=r[v[t]]
p=q.length
for(o=0;o<p;o+=2){m[w]=q[o];++w}}}return n.e=m},
aS(d,e,f){var x=B.k(this)
x.c.a(e)
x.y[1].a(f)
if(d[e]==null){++this.a
this.e=null}A.fG(d,e,f)},
F(d){return J.R(d)&1073741823},
aX(d,e){return d[this.F(e)]},
C(d,e){var x,w
if(d==null)return-1
x=d.length
for(w=0;w<x;w+=2)if(J.H(d[w],e))return w
return-1}}
A.bV.prototype={
gn(d){return this.a.a},
gt(d){var x=this.a
return new A.bW(x,x.aT(),this.$ti.h("bW<1>"))}}
A.bW.prototype={
gl(){var x=this.d
return x==null?this.$ti.c.a(x):x},
j(){var x=this,w=x.b,v=x.c,u=x.a
if(w!==u.e)throw B.e(B.a4(u))
else if(v>=w.length){x.d=null
return!1}else{x.d=w[v]
x.c=v+1
return!0}},
$iC:1}
A.eb.prototype={}
A.bQ.prototype={
i(d){return"Color("+this.a+")"},
$iiL:1}
A.dp.prototype={}
A.d4.prototype={$ijc:1}
A.b4.prototype={
K(d,e){var x,w,v,u=this
if(e==null)return!1
x=!0
if(u!==e){w=u.b
if(w===0)v=e instanceof A.b4&&e.b===0
else v=!1
if(!v)x=e instanceof A.b4&&B.al(u)===B.al(e)&&u.a===e.a&&w===e.b}return x},
gA(d){var x=this.b
return x===0?0:B.fx(this.a,x,C.d,C.d)},
$ifD:1}
A.da.prototype={}
A.dg.prototype={}
A.cY.prototype={}
A.cZ.prototype={}
A.dl.prototype={
gca(){var x=this,w=y.N,v=B.a6(w,w),u=x.z.a
w=A.jV(B.a9(["",A.hg(u.b)+u.a],w,w),"padding")
v.O(0,w)
v.k(0,"color",x.ry.a)
w=x.x2
v.k(0,"font-size",A.hg(w.b)+w.a)
v.k(0,"background-color",x.c0.a)
return v}}
A.dm.prototype={}
A.bf.prototype={
a1(d,e){this.a7(d,e)},
E(){this.ai()
this.am()},
a5(d){return!0},
a2(){var x,w,v,u,t,s,r=this,q=null,p=null
try{v=y.q.a(B.f.prototype.gq.call(r)).D(r)
u=B.by(v,v.$ti.h("d.E"))
p=u}catch(t){x=B.Q(t)
w=B.P(t)
p=B.b([new A.S("div",q,q,new A.dl(new A.d4(new A.da("em",2)),D.S,new A.dg("rem",1),D.R),q,q,new A.x("Error on building component: "+B.p(x),q),q,q)],y.i)
r.f.cc(r,x,w)}finally{r.as=!1}v=r.dx
if(v==null)v=B.b([],y.k)
s=r.dy
r.dx=r.ba(v,p,s)
s.L(0)},
M(d){var x,w,v,u
y.I.a(d)
x=this.dx
x=J.aP(x==null?[]:x)
w=this.dy
v=y.h
for(;x.j();){u=x.gl()
if(!w.Z(0,u))d.$1(v.a(u))}}}
A.S.prototype={
a_(){var x=B.bn(y.h),w=($.a5+1)%16777215
$.a5=w
return new A.ct(null,!1,x,w,this,C.c)}}
A.ct.prototype={
gq(){return y.J.a(B.f.prototype.gq.call(this))},
aC(){var x,w=this
w.bi()
x=w.y
if(x!=null&&x.aF(D.o)){x=w.y
x.toString
w.y=A.iS(x,y.n,y.r)}x=w.y
w.xr=x==null?null:x.I(0,D.o)},
aM(d){var x=this,w=y.J
w.a(d)
if(w.a(B.f.prototype.gq.call(x)).e===d.e){w.a(B.f.prototype.gq.call(x))
w=w.a(B.f.prototype.gq.call(x)).r!=d.r||w.a(B.f.prototype.gq.call(x)).w!=d.w||w.a(B.f.prototype.gq.call(x)).x!=d.x||w.a(B.f.prototype.gq.call(x)).y!=d.y}else w=!0
return w},
aK(){var x,w,v,u,t,s=this,r=s.d$
r.toString
x=y.J
w=x.a(B.f.prototype.gq.call(s))
v=x.a(B.f.prototype.gq.call(s))
u=x.a(B.f.prototype.gq.call(s))
t=x.a(B.f.prototype.gq.call(s)).w
t=t==null?null:t.gca()
r.cm(w.e,v.f,u.r,t,x.a(B.f.prototype.gq.call(s)).x,x.a(B.f.prototype.gq.call(s)).y)}}
A.x.prototype={
a_(){var x=($.a5+1)%16777215
$.a5=x
return new A.d0(null,!1,x,this,C.c)}}
A.d0.prototype={}
A.bu.prototype={
a1(d,e){this.a7(d,e)},
E(){this.ai()
this.am()},
a5(d){return!1},
a2(){this.as=!1},
M(d){y.I.a(d)}}
A.bv.prototype={
E(){var x,w,v=this
if(v.d$==null){x=v.ay.d$
x.toString
w=new B.ae(B.b([],y.O))
w.d=x
v.d$=w
x=v.e
x.toString
w.bc(y.x.a(x).b)}v.bj()},
aj(d){var x,w=y.x
w.a(d)
x=this.e
x.toString
if(w.a(x).b!==d.b)this.e$=!0
this.aP(d)},
ah(d){var x,w,v=this
if(v.e$){v.e$=!1
x=v.d$
x.toString
w=v.e
w.toString
x.bc(y.x.a(w).b)}v.aO(d)},
ac(){this.aN()
this.af()}}
A.a_.prototype={
a_(){var x=B.bn(y.h),w=($.a5+1)%16777215
$.a5=w
return new A.cV(x,w,this,C.c)}}
A.cV.prototype={
gq(){return y.q.a(B.f.prototype.gq.call(this))},
E(){if(this.r.c)this.f.toString
this.be()},
a5(d){y.q.a(B.f.prototype.gq.call(this))
return!0},
a2(){this.r.toString
this.bf()}}
var z=a.updateTypes([])
A.dM.prototype={
$2(d,e){this.a.k(0,this.b.a(d),this.c.a(e))},
$S:32}
A.eF.prototype={
$2(d,e){var x
B.G(d)
B.G(e)
x=d.length!==0?"-"+d:""
return new B.L(this.a+x,e,y.K)},
$S:33};(function aliases(){var x=A.bf.prototype
x.be=x.E
x.bf=x.a2
x=A.bu.prototype
x.bj=x.E})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(A.bU,B.D)
v(A.bV,B.h)
u(B.l,[A.bW,A.eb,A.dp,A.d4,A.b4,A.dm,A.cZ])
u(B.bh,[A.dM,A.eF])
v(A.bQ,A.dp)
u(A.b4,[A.da,A.dg])
v(A.cY,A.dm)
v(A.dl,A.cY)
u(B.f,[A.bf,A.bu])
v(A.S,B.af)
v(A.ct,B.aZ)
u(B.i,[A.x,A.a_])
v(A.bv,A.bu)
v(A.d0,A.bv)
v(A.cV,A.bf)
x(A.dp,A.eb)
x(A.dm,A.cZ)
w(A.bv,B.aa)})()
B.ew(b.typeUniverse,JSON.parse('{"bU":{"D":["1","2"],"v":["1","2"],"D.K":"1","D.V":"2"},"bV":{"h":["1"],"d":["1"],"d.E":"1"},"bW":{"C":["1"]},"bQ":{"iL":[]},"d4":{"jc":[]},"b4":{"fD":[]},"da":{"fD":[]},"dg":{"fD":[]},"dl":{"cY":[]},"jD":{"S":[],"af":[],"i":[]},"bf":{"f":[],"a3":[]},"S":{"af":[],"i":[]},"ct":{"aa":[],"f":[],"a3":[]},"x":{"i":[]},"d0":{"aa":[],"f":[],"a3":[]},"bu":{"f":[],"a3":[]},"bv":{"aa":[],"f":[],"a3":[]},"a_":{"i":[]},"cV":{"f":[],"a3":[]}}'))
B.hG(b.typeUniverse,JSON.parse('{"cZ":1}'))
var y=(function rtii(){var x=B.O
return{J:x("S"),h:x("f"),r:x("iT"),i:x("q<i>"),k:x("q<f>"),O:x("q<o>"),K:x("L<a,a>"),q:x("a_"),N:x("a"),x:x("x"),n:x("ho"),z:x("@"),I:x("~(f)")}})();(function constants(){D.o=B.a2("jD")
D.R=new A.bQ("red")
D.S=new A.bQ("yellow")})()};
(a=>{a["VZyVWriyZZ9tn6daoMhLVc0VmXA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.clients.dart.js_2.part.js.map
