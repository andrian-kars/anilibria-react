//	Playerjs.com 16.2.1
//	20.12.2021 15:30:02
//	API - https://playerjs.com/docs/q=api

eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? '' : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!''.replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return '\\w+';
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
      }
    }
    return p;
  })(
    'if(!1V.6N){B 6N=[];B ip}if(1V[\'wN\']){1C(wN,1)};E A8(3r){B o={1z:I,iW:[],qb:[],iH:\'IA\',Iz:vG,Iu:vF,7U:\'16.2.1\',fi:[\'7G\',\'\'],iC:\'\',2a:I,7v:I,aZ:I,Im:I,cz:I,5x:I,8g:I,8f:I,u:\'#Ip#iT#IM#IQ#IJ#II#iT#HX#HP#HV#iT#HU#Ii#I7#I6#iT#I9#Ib#Jy#iT#JA#Jx#JF#JP==\',u2:\'\',u3:\'\',u4:\'\',u5:\'\',u6:\'\',u7:\'\',u8:\'\',u9:\'\',y:\'xx??x?=xx?xx?=\',p:\'{JL}\',JK:-1,vg:"wL",es:"//wL.9U",6H:[],dt:H,pr:H,ga:I,ab:I,g8:[],Jo:I,cE:\'//.92//\',2o:[],7z:[],8i:[],2Y:[],md:[],bi:[],mR:0,qa:I,6e:I,1A:I,uT:I,9f:I,ni:\'<wI>\',gR:\'</wI>\',gM:1V.c5.W<2x&&1V.c5.19<2x,qH:[],J9:[],5n:{\'1F\':1,\'xm\':1,\'xq\':1,\'dC\':1,\'lZ\':0},9a:[],rS:0,5c:I,7b:I,eu:I,lc:I,Ji:[],aw:I,b5:0,g5:I,pn:1T,hi:1T,pv:I,wW:E(x){B a;L a},Jk:0,pf:4L,4C:I,bS:I,rH:1R.rH,d:8T.sf,iG:8T.sf,9o:8T.9o,mj:8T.9o.K("mj")==0,Jn:{},v5:\'Jg-wK.9U/wK.js\',fd:["wW","wV"],4U:[],JU:[],GF:[],fo:1,j3:[],wV:E(x){B a;L a},Y:0,n4:0,4R:I,dk:-1,9t:3,GG:0,oj:0,a4:0,3m:{x:1,y:1,x0:1,y0:1},aS:["ek","eN","eX","fC","fF","fH","hu","b9","bj","lJ"],mL:["GI","GA","GB","GS"],bV:0,GT:0,pX:0,z6:0,dj:0,zM:[],aE:[\'7j\',\'d2\',\'jB\',\'6z\'],GU:[],jH:H,nL:[],nu:0,ws:"w"+"s",jc:I,mI:[I,I,I]};B fb={R:{w:20,h:20,1c:"-",GQ:"-",a:1,6A:-1,1t:"3I",1B:"",1F:1,gH:-1,a5:0,2p:1,1q:"",1D:"",46:"Gl",f1:12,gL:0,1h:"S",2L:"0 3 0 3",cP:"0 0 0 0",2r:1,fJ:"0 0 0 0",Gv:0,g1:1,bg:0,mb:0,DO:0,5O:1,7Q:-1,5H:"3B",9m:-1,dA:"0 0 0 0",tf:-1,te:"3I",a7:-1,j7:-1,5F:"1I",44:"uC",2p:0,iy:"3B",iJ:0.7,ro:0,rG:"3I",iD:"3 5 3 5",Gm:"0 0 0 0",Hv:1,rU:"kS-kP",rD:11,rn:0,2K:"",Ex:5,Ez:0,3j:0,Hw:2,GW:2,Dl:0.2,Dw:0,Dx:0.1,eT:0,Ht:"Hp",Hs:1,Hz:5,Dm:"3B",Di:"3I",Dv:"3I",Dp:1,Ew:1,td:1,7c:0,3l:0,ec:20,cS:"<2w W=\'20\' 19=\'20\'><g><df ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 5y=\'#eH\'/></g></2w>",t7:1,mi:-1,hV:0,lX:1,tq:-1,HA:0.1,er:0,2N:"",Cw:0,CH:"uC",2Q:"",Cp:wH,Cq:wH,DG:0,5e:0,5m:"3I",Dq:0,Dk:"3B",Dt:9,sM:"0 0 10 0",sJ:"0 0 0 0",Dr:0}};E Ek(){L H;o.El=H}E b6(s){if(s.K(\'.\')==-1){s=s.1n(1);s2=\'\';V(i=0;i<s.Q;i+=3){s2+=\'%u0\'+s.6q(i,i+3)}s=HJ(s2)}L s};E DT(){if(o.u!=\'\'){v=9n(v,4O.6x(bT(o.u)))}if(3r.K("#"+v.9g)==0){3q{3r=4O.6x(o[o.fd[0]](3r))}2U(e){}}F{if(3r.K("#"+v.9J)==0){3q{3r=4O.6x(o[o.fd[1]](3r))}2U(e){}}}}E 7n(x,y){}E jV(y,1a){}B qV=E(){B bP=1M("1Z");o.1J.1K(bP);O(bP,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':\'1i%\',\'19\':30,\'2u-1t\':v.xD,\'1v\':v.xM,\'2k\':\'1I\'});B x=1M("1Z");o.1J.1K(x);O(x,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':\'1i%\',\'1t\':v.xz,\'46-3w\':v.xI,\'2M\':(v.xt+\'px \'+v.xu+\'px\'),\'2k\':\'1I\'});G.92=E(1D,n){x.1P=1D;5V(x);O(bP,{\'19\':x.2R,\'2k\':\'4p\'});bP.C.59="HM";V(B i=0;i<x.c6(\'a\').Q;i++){x.c6(\'a\')[i].C.1t=\'#eH\'}if(n){1C(G.kw,2x*n)}x.C.59="HC"};G.kw=E(){2W(x);2W(bP)}};2m(E(w,i,s,e){B 8Q=0;B 8l=0;B fc=0;B cg=[];B cp=[];kv(H){if(8Q<5)cp.2H(w.6d(8Q));F if(8Q<w.Q)cg.2H(w.6d(8Q));8Q++;if(8l<5)cp.2H(i.6d(8l));F if(8l<i.Q)cg.2H(i.6d(8l));8l++;if(fc<5)cp.2H(s.6d(fc));F if(fc<s.Q)cg.2H(s.6d(fc));fc++;if(w.Q+i.Q+s.Q+e.Q==cg.Q+cp.Q+e.Q)1g}B wu=cg.lR(\'\');B wt=cp.lR(\'\');8l=0;B pA=[];V(8Q=0;8Q<cg.Q;8Q+=2){B py=-1;if(wt.9D(8l)%2)py=1;pA.2H(6T.sA(2E(wu.1n(8Q,2),36)-py));8l++;if(8l>=cp.Q)8l=0}L pA.lR(\'\')}(\'H6\',\'GX\',\'GZ\',\'H0\'));B v={1p:0,rB:0,kx:"#3B",2Z:0,Bf:1,7i:"#3B",5H:"#3I",7c:0,cm:1,mO:1,3k:0,A1:1,cO:0,1u:{H9:0,1t:"3B",a:"0.4",h:34,i3:1,1m:1,ha:1,cw:0,gb:3,8I:0,n6:3,5F:"1I",1h:"2J",2L:"0 0 0 0",7c:0,fK:0,9N:\'\'},1X:{on:1,f:1,r:1,m:1,4a:5,sh:"4a",8k:1,sg:"1N",mH:0,Ba:1,nI:1,d4:0.2},X:{5H:"3B",9m:"lk",5O:0.9,7Q:-1,1h:"Z",2L:"0 0 0 0",2M:"7 15 7 15",1t:"3I",46:"wE, wF, kS-kP",f1:12,5a:10,gL:0,5m:"wC",qv:1,7i:"Hj",a:1,6A:-1,Hc:0,Hb:1i,Hu:He,Hd:1,os:1,A9:"Hh",om:"3B",nU:-1,Hl:-1,Aw:0,6r:3,hE:16,ya:"H8",7c:0,iM:1,kj:1,km:"3I",rd:0,nR:"3B",yF:1,yT:0,y6:"lk",mA:0,iO:4L,eG:0,8P:0,Cf:0,Cd:0,eB:1,3A:0,hx:50,oc:0,lS:1,bR:Hy,le:0,pL:"lk",pT:"0 0 0 0",fV:30,7i:"xB"},1d:{5H:"3B",9m:"GN",5O:0.7,7Q:-1,46:"wE, wF, kS-kP",1h:"2J-2f",2L:"0 0 0 0",2M:"7 10 7 15",1t:"3I",f1:12,hE:16,5a:10,gL:0,O8:"3I",5m:"wC",a:1,1F:5,6A:-1,ux:1,6r:3,iM:1,kj:1,km:"3I",mA:0,iO:4L,7c:0,MG:1,MC:"4M",4Q:1,MD:"6I",MP:1,N0:"2c",N1:0,MX:"5W",MW:0,MR:"4G",fV:30,7i:"xB"},Gd:{1h:"2J-2f",2L:"0 10 50 0"},1N:0.8,q0:1,kH:1,as:0,5h:0,vO:1,4P:0,4f:0,EY:0,Fm:0,3J:0,r4:1,je:0,rv:0,rr:0,hg:\',\',fU:\';\',b7:\'//\',fL:\'5y\',jE:1,j8:-1,pk:0,Mh:\'20 0 0 20\',Mg:\'1f-Z\',Ma:1i,Mj:1i,Mw:-1,r8:0,zI:1,xD:"mg",xz:"3I",xt:5,xu:10,xM:1,xI:10,mR:0,vq:1,sC:1,fN:1,4S:\'Ml\',pB:0,gx:\'7h\',go:1,FQ:0,G8:0,F4:0,8v:1,bL:1,Fs:5,9w:0,zD:1,oY:0,oH:5,Mk:0,N4:0,NL:0,ll:1,xf:1,Fo:0,zc:0,NQ:0,oa:1,nj:0,2P:"zL",NP:D6,j4:\'1i%\',ga:0,wb:{7w:1,2b:0,lf:0,4F:0,1z:1,uB:0,vm:0,vc:0,NE:0,ND:0,NR:0},vI:{7w:1,2b:0,lf:0,4F:0,1z:1,uB:0,vm:0,vc:0},O2:1i,pD:1,dE:1,jD:14,ek:\'1i%\',vB:1,ju:20,vZ:1,fF:0.7,vQ:2,sV:3,b9:10,eN:"3I",eX:"zY",fC:"3B",fH:0,hu:hn,qA:1,bj:0,sI:1,8t:1,O4:1,O5:0.3,O7:3,O6:4,O1:5,O0:0,NV:NW,NX:Dh,Ag:0,As:1,nP:1,f8:1,B2:1,sY:0,hT:NY,tP:90,ty:0,EL:1,EG:"lk",EM:0,EF:1,9g:\'2\',9J:\'3\',NB:10,N7:1,N9:1,Na:-1,Nk:1,Nl:1,Nw:-1,Nv:0,Nx:1,Ny:0,NA:1,Nz:0,Nt:1,Nn:0,Nr:1,M1:0,KC:1,KE:0,KF:1,Ku:0,rb:1,Kt:0,Kv:0,KI:1,KV:0,KP:1,KJ:"#3I",KL:"#3B",KO:"#3B",KN:"#3I",K6:"#3B",K5:"#3I",K9:"#3B",K3:"#3I",JX:"#3B",JW:"#3I",JZ:"#3B",K0:"#3I",K2:1,Km:0,Ko:1,Kp:0.5,Kk:"#3I",Kj:"#3B",Kf:1,Kg:1,Ki:1,Kh:1,KX:1,LE:10,LH:-1,LC:1,Lx:1,LA:0,jf:0,LV:"or",LO:"or",LP:"or",LS:"or",LR:"50%",Lb:-1,Ld:0,L7:-1,L0:0,L2:0,AK:1,B6:0,ze:30,L3:2,w8:10,w7:0,Le:30,FR:1,Gi:1,5T:0,2j:{on:0,5H:"3B",2Z:0,dc:2,7i:"3B",1h:"Z",2L:"20 0 0 20",W:se,1m:0}};v.lE="ru";B 7u=E(is){B i;B C=[];B f=[];B bM=[];B Lf=[];B 5M=[];B 7B=[];B 1O=[];B f2=[];B hK=[];B Lq=[];B 4c=[];B 5r=[];B 5o=[];B d7=[];B dl=I;B 2q;B ep=-1;B 4J=H;B 18=is;B X;B 5h=[];B cI=[];B 3y=\'\';B eI=\'\';B 5J=-1;B hR=I;B Lh=I;B jn=I;B kF=I;B eJ=I;B iK=I;B j6;B pe;B n5;B gb;B uR;B iA=[];B 7r=[];B mK=0;B 9M=0;B 5P="2r";B a1=(o.1l.2l?"eV":"lM");B 9Y=(o.1l.2l?"eW":"lD");C=9n(C,v[is]);C=4H(v[is],\'2L\',\'2L\');if(C.le==0){C.pT="0 0 0 0"}C=4H(v[is],\'dA\',\'pT\');C=4H(v[is],\'2M\',\'2M\');C.mF=0;B iI="<2w C=\'2L-1f:cu\' W=\'"+C.6r*2+"\' 19=\'"+(C.6r*2>C.5a?(C.6r*2):C.5a)+"\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'><g><df ry=\'"+(C.6r)+"\' rx=\'"+C.6r+"\' cy=\'"+(C.6r*2>C.5a?(C.6r):(C.5a/2))+"\' cx=\'"+C.6r+"\' 5y=\'#"+C.5m+"\'/></g></2w>";B zh="<2w W=\'"+C.6r*2+"\' 19=\'"+C.5a+"\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\' ><g><df ry=\'"+(C.6r-1)+"\' rx=\'"+(C.6r-1)+"\' cy=\'"+(C.5a/2+2)+"\' cx=\'"+C.6r+"\' 4e=\'#"+C.5m+"\' 4e=\'1\' 5y-1v=\'0\'/></g></2w>";B xx=4;B yJ="<5I C=\'2k:bI-4p;\'><2w W=\'"+(xx+2)+"\' 19=\'"+(C.5a)+"\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'><g><2C x1=\'1\' y1=\'"+(C.5a/2-xx)+"\' x2=\'"+xx+"\' y2=\'"+(C.5a/2)+"\' 4e=\'#"+C.1t+"\' 4e-W=\'1\' 4e-eh=\'4g\'/><2C x1=\'"+xx+"\' y1=\'"+(C.5a/2)+"\' x2=\'1\' y2=\'"+(C.5a/2+xx)+"\' 4e=\'#"+C.1t+"\' 4e-W=\'1\' 4e-eh=\'4g\'/></g></2w></5I>";B hD="<5I C=\'2k:bI-4p;\'><2w W=\'"+(xx+10)+"\' 19=\'"+(C.5a+1)+"\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\' C=\'hW:Z\'><g><2C x1=\'1\' y1=\'"+(C.5a/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.5a/2-xx+2)+"\' 4e=\'#"+C.1t+"\' 4e-W=\'1\' 4e-eh=\'4g\' /><2C x1=\'1\' y1=\'"+(C.5a/2+2)+"\' x2=\'"+xx+"\' y2=\'"+(C.5a/2+xx+2)+"\' 4e=\'#"+C.1t+"\' 4e-W=\'1\' 4e-eh=\'4g\'/></g></2w></5I>";B 7i="4i("+(C.7i?f0(C.7i.22("#","")):\'\')+\',\'+3N(C.yZ,1)+")";B 1E=1M("1Z");o.1J.1K(1E);O(1E,{\'6R\':\'3j\',\'2k\':\'4p\',\'1v\':0,\'2Z-6v\':C.7c});B im={};V(B i in o.5n){if(o.5n.2n(i)){im[o.5n[i]]=-1}}if(is=="1d"){1E.C.59=1i}F{1E.C.59=99}B 17=1M("1Z");if(o.gM){C.xi>0?C.f1=C.xi:\'\';C.xo>0?C.bR=C.xo:\'\';C.xl>0?C.hx=C.xl:\'\'}O(17,{\'1h\':\'em\',\'1f\':0,\'Z\':0,\'2k\':\'4p\',\'W\':\'1i%\',\'2M-1f\':C.9z,\'2M-2f\':C.6E+20,\'2M-2J\':C.9j,\'2M-Z\':C.6B,\'1t\':C.1t,\'46-3w\':C.f1*3N(v.8e,1),\'46-iS\':ee(C.46),\'hH-et\':C.gL+\'px\'});if(o.1l.6y){O(17,{\'8G-W\':vH})}if(is!=="X"){O(17,{\'6R-y\':\'9e\'})}1E.1K(17);if(C.3A!=1){B 7s=1M("1Z");O(7s,{\'2k\':\'4p\',\'6R\':\'3j\',\'2Z-6v\':C.7c});if(C.3A!=1){if(o.1l.6y){O(7s,{\'8G-W\':vH})}}17.1K(7s)}3Z(17,{id:(v.id+"5S"+is)});if(is=="X"){if(C.3A==1){O(17,{\'W\':\'1i%\',\'2M-2f\':C.6E,\'2M-2J\':C.9j+20,\'6R-x\':\'9e\',\'ag-8k\':\'cr\'});O(1E,{\'W\':o.3f-C.4t-C.3P,\'19\':C.hx+C.9z+C.9j})}F{O(17,{\'6R-y\':\'9e\'});if(C.wy==1){mw()}}if(C.le==1){O(1E,{\'2u-1t\':C.pL})}if(v.X.3h==1){2W(1E)}}if(C.iM==1){B 5i=1M("1Z");B 9F=f0(C.le==1?C.pL:C.5H);if(C.3A==1){iR(5i,\'to 2f, 4i(\'+9F+\',\'+(C.5O*1+0.3)+\'), 4i(\'+9F+\',0)\',\'Z\',12,5,7,10,7,10,12,15);5i.1r(5P,yh)}F{iR(5i,\'to 2J, 4i(\'+9F+\',\'+(C.5O*1+0.3)+\'), 4i(\'+9F+\',0)\',\'1f\',5,12,10,7,10,7,15,12);5i.1r(5P,yr)}B 5q=1M("1Z");if(C.3A==1){iR(5q,\'to Z, 4i(\'+9F+\',\'+(C.5O*1+0.3)+\'), 4i(\'+9F+\',0)\',\'2f\',8,5,13,10,13,10,8,15);5q.1r(5P,yt)}F{iR(5q,\'to 2J, 4i(\'+9F+\',0), 4i(\'+9F+\',\'+(C.5O*1+0.3)+\')\',\'2J\',5,8,10,13,10,13,15,8);5q.1r(5P,ys)}5i.1r("lM",hJ);5i.1r("lD",hJ);5q.1r("lM",hJ);5q.1r("lD",hJ);17.1r("ou",wa);5i.1r("9l",a0);5q.1r("9l",a0);1E.1K(5i);1E.1K(5q);41(pe);pe=7q(xW,2x)}17.1r(a1,wd);17.1r(9Y,oP);if(is=="1d"){V(B i=1;i<11;i++){if(J(v["8U"+is][is+i])){v.1d[is+i]=v["8U"+is][is+i];if(J(v["8U"+is][is+i+"1L"])){v.1d[is+i+"1L"]=v["8U"+is][is+i+"1L"]}if(J(v["8U"+is][is+i+"1c"])){v.1d[is+i+"1c"]=v["8U"+is][is+i+"1c"]}}if(J(v.1d[is+i])){if(v.1d[is+i]==1){bA(\'f\',i);bt(f[i],bM[i],5M[i],7B[i]);if(!J(v.1d[is+i+"1c"])){v.1d[is+i+"1c"]="4G"}5M[i].1P=2D(v.1d[is+i+"1c"]);if(J(v.1d[is+i+"1L"])){if(v.1d[is+i+"1L"]!=\'\'){5M[i].1P=v.1d[is+i+"1L"]}}if(v.1d[is+i+"1c"]=="2V"){o.kt=H}1O[i]=v.1d[is+i+"1c"];7y(i);if(1O[i]in o.5n){im[1O[i]]=i}f[i].1r(a1,6i);f[i].1r(9Y,5z);f[i].1r(5P,aj);f[i].1r("9l",a0);if(v.1d[is+i+"1m"]==1){O(f[i],{"19":0})}}}}}E wa(x){if(is=="X"&&C.3A==1&&x){if(x.rf==0&&x.ew!=0){17.ac-=x.ew;x.8s()}}41(n5);n5=7q(oP,iN);ai()}E wd(){o.3u=H}E oP(){if(C.ea==1){3b(o.e9);o.e9=1C(E(){if(!o.3u){9L()}},(v.1d.eb>0?v.1d.eb*2x:(o.1l.tv?4b:2x)))}o.3u=I}E 6i(1a){if(o.2a){o.52?o.U.52(I):\'\'}B i=1a.44.6U(\'nl\');B x;if(i){x=\'f\'}F{if(1a.44.6U(\'ao\')){i=1a.44.6U(\'ao\');x=\'f2\'}}if(i){i=2E(i);B dO=I;if(J(2m(x)[i])){if(C.7Q>-1){O(2m(x+\'bg\')[i],{\'1v\':C.7Q})}if(C.6A>-1){O(2m(x+\'1L\')[i],{\'1v\':C.6A});O(2m(x+\'5e\')[i],{\'1v\':C.6A})}if(is=="X"){if(1O[i].K("X")==0){B id=1O[i].1n(8);if(3y==id||eI==id){O(2m(x+\'1L\')[i],{\'1t\':C.5m});O(2m(x+\'5e\')[i],{\'1t\':C.5m});dO=H}F{O(2m(x+\'1L\')[i],{\'1t\':C.1t})}}}if(C.q9==1&&J(C.j9)&&dO){}F{O(2m(x+\'bg\')[i],{\'6o\':C.9m})}}}};E 5z(1a){if(o.2a){o.52?o.U.52(H):\'\'}B i=1a.44.6U(\'nl\');B x;B dO=I;41(i7);ai();if(i){x=\'f\'}F{if(1a.44.6U(\'ao\')){i=1a.44.6U(\'ao\');x=\'f2\'}}if(i){if(J(2m(x)[i])){if(C.7Q>-1){O(2m(x+\'bg\')[i],{\'1v\':C.5O,"4W":"1v 0.1s 2T"})}if(C.6A>-1){O(2m(x+\'1L\')[i],{\'1v\':C.a,"4W":"1v 0.1s 2T"});O(2m(x+\'5e\')[i],{\'1v\':C.a,"4W":"1v 0.1s 2T"})}if(is=="X"){if(1O[i].K("X")==0){B id=1O[i].1n(8);if(3y==id||eI==id){O(2m(x+\'1L\')[i],{\'1t\':C.5m});O(2m(x+\'5e\')[i],{\'1t\':C.5m});dO=H}F{if(J(o.bi[id])){hC(i)}F{O(2m(x+\'1L\')[i],{\'1t\':C.1t})}}}}if(C.q9==1&&J(C.j9)&&dO){}F{O(2m(x+\'bg\')[i],{\'6o\':o.bi[id]?C.om:C.5H})}}}}E aj(1a){if(!eJ){B d=1y 6K();o.9u=d.9h();B i=1a.44.6U(\'nl\');if(i){if(J(f[i])){if(J(1O[i])){4D(i,0)}}}}}B oQ;B i7;E Ah(1a){if(!eJ){B i=1a.44.6U(\'ao\');if(i){if(J(5o[i])){if(2q in o.5n){oQ=i;i7=7q(w1,4L)}}}}}E w1(){nH(oQ)}E a0(1a){41(i7);1a.6j=H;ai()}E qQ(1a){41(i7);if(!eJ){B d=1y 6K();o.9u=d.9h();B i=1a.44.6U(\'ao\');if(i){if(i==0){if(5o[0]==\'1t\'){bB();4D(mK)}F{cT()}}F{if(J(5o[i])){nH(i)}}}}}E nD(1a){B x=1a.44.6U(\'zw\');if(x){qF(x)}}E yx(1a){ai();B i=1a.44.6U(\'ao\');if(J(5o[i])){if(6Y("=",i)>0){B x=5o[i].1n(0,6Y("=",i));B y=5o[i].1n(6Y("=",i)+1);B z=2q+\'At\';if(!v[z]){v[z]=[]}if(!J(v[z][x])){v[z][x]=v[x]+\'\'}qG(x,y)}}}E qG(x,y){v[x]=y;if(o.5j&&v.qA==1&&x!="bj"){3z.8O("jz"+x,y)}if(o.4R&&o.3R){o.3R.91()}o.U.lw();qF(x)}E yv(1a){B i=1a.44.6U(\'ao\');B x=5o[i];if(J(x)){if(x.K("=")>0){B z=x.1n(0,x.K("="));B y=x.1n(x.K("=")+1);v[z]=y;v8();7y(o[2q+\'qE\']);if(2q=="fO"){7n("xP")}}}}E 7y(i){if(J(1O[i])){B 9W=I;B 7K=I;B 5G=\'\';if(is=="1d"){if(1O[i]=="4M"){5G=o.P.pR()}if(1O[i]=="6I"){5G=o.P.pO()}if(1O[i]=="2V"){5G=\' \';7K=H}if(1O[i]=="bs"){if(o.7a){5G=o.md[o.Ll]}}if(1O[i]=="6I"||1O[i]=="bs"||1O[i]=="4M"){if(o[\'cH\'+1O[i]].Q==0){9W=H}F{if(o[\'cH\'+1O[i]].Q==1&&(C.xZ!=1||o[\'cH\'+1O[i]][0]==1)){9W=H}F{7K=H}}}if(1O[i]=="5x"){if(!o.5x){9W=H}F{7K=H}}if(1O[i]=="5W"){if(o.2i!=\'aM\'&&!v.5W){9W=H}F{7K=H}}if(1O[i]=="2c"){if(J(o.1S)){7K=H;if(o.7b||v.8t==1){if(o.4B){5G=o.2Y[!o.7b?o.4B.8L():o.3F]}}F{5G=\'\'}B hX=0;V(B s=0;s<o.1S.Q;s++){if(o.1S[s]!=\'\'){hX++}}if(hX==1&&o.i5==1){hX=0}if(v.mx==1&&v.ph==1){}F{if(hX==0){9W=H;7K=I}}}F{9W=H}}if(1O[i]=="4G"){5G=o.4U[o.9t];5G==1&&C.cB!=1?5G=2D(\'dh\'):\'\';7K=H;if(o.2i=="8Y"||(o.P.5E()&&C.Lj!=1)){9W=H;7K=I}}if(1O[i]in o.5n){5G=i6(1O[i]);7K=H}if(1O[i].K("7X")>0){B x=\' \';B y=[\'sZ\',\'sS\',\'sR\'];V(B z=0;z<y.Q;z++){if(J(v[1O[i]+y[z]])){if(v[1O[i]+y[z]]!=\' \'){x+=(x!=\' \'?\':\':\'\')+v[1O[i]+y[z]]}}}5G=x!=\' 0:0\'&&x.K(":")>-1?x:\' \';7K=H}}7B[i].1P=5G+(5G!=\'\'&&C.Li!=1?\' &hL;<2w W="hI" 19="DM" rh="-1 -1 5 8" 7U="1.1" 3Y="3v://3T.w3.3V/4b/2w" 3Y:3X="3v://3T.w3.3V/6Z/3X"><l6 4e="#\'+C.5m+\'" 4e-W="1" 5y="1I" 7T="0 0 3 3 0 6"></l6></2w>\':\'\');if(9W){1m(f[i]);if(is=="1d"){d7[i]?3b(d7[i]):\'\';if(o.S){o.S.hf(i,I,5G)}F{d7[i]=1C(E(){o.S.hf(i,I,5G)},4L)}}O(f[i],{\'1h\':\'2e\',\'2f\':0,\'1f\':-1i})}if(7K){if(C.3A==1){O(f[i],{\'2k\':\'bI-4p\'})}F{1o(f[i])}if(is=="1d"){d7[i]?3b(d7[i]):\'\';if(o.S){o.S.hf(i,H,5G)}F{d7[i]=1C(E(){o.S.hf(i,H,5G)},4d)}}O(f[i],{\'1h\':\'em\',\'2f\':0,\'1f\':0})}2z()}V(B j=1;j<f.Q;j++){if(f[j]){if(6b(f[j])){B 4u=I;4J?4u=H:\'\';4J=I;4u&&o.S?o.S.4u():\'\'}}}};E 4D(i,w6,fa){fa?1O[i]=fa:\'\';if(J(1O[i])){o.us=H;ai();B x=vb();if(2q!=1O[i]){2q=1O[i];if(2q==\'4M\'||2q==\'6I\'||2q==\'2c\'||2q==\'4G\'||2q==\'bs\'||2q in o.5n||2q.K("7X")>0||2q==\'2V\'||2q==\'1t\'){ep=i;B z=nq(o[\'cH\'+2q]);if(2q=="lj"){if(C.ol==1){z=7n("Lm")}F{z=7n("Ln")}}if(2q=="fO"){z=7n("Ls")}if(2q=="2V"&&o.2V){z=[];V(B j=1;j<=16;j++){if(J(v["2V"+j])){z.2H(2D(v["2V"+j]));iA[z.Q]=v["2V"+j]}}}if(2q=="1t"&&o.4C){z=[];mK=i;V(B j=0;j<o.mL.Q;j++){B co=o.mL[j].1n(4);z.2H(2D(co));7r[z.Q]=co}}B eS=o[\'Lt\'+2q];B zn=o[\'Lr\'+2q];V(B j=1;j<f.Q;j++){if(f[j]){f[j].C.2k="1I"}}f2=[];bA(\'f2\',0);bt(f2[0],hK[0],4c[0],5r[0]);O(f2[0],{"2Z-2J":"6f 7k "+(C.zZ==1?7i:"4i(1i,1i,1i,0.7)")});9M=w6;B nt=I;4c[0].1P=(x[0]<2||9M==1||C.q4==1?\'\':hD)+(v.1d[is+i+"1L"]&&v.1d[is+i+"1L"]!=\'\'?v.1d[is+i+"1L"]:2D(v.1d[is+i+"1c"]));if(2q==\'2c\'&&!o.lv&&!o.tT){B hZ=1M("1Z");hZ.1P=2D("3r");O(hZ,{\'1t\':C.1t,\'7g\':\'2t\',\'6t\':\'3S\'});5r[0].1K(hZ);hZ.1r(5P,xK);nt=H}if(2q==\'2c\'&&v.mx==1&&!o.1l.tv&&J(1V.zC)){B uf=1M("1Z");!o.4B?o.4B=1y fQ():\'\';uf.1P="<qy 1B=\'3i\' id=\'"+v.id+"vJ\' Lo=\'.sr,.rp,.iB\' C=\'2k:1I\'/>"+2D(\'xO\');O(uf,{\'1t\':C.1t,\'7g\':\'2t\',\'6t\':\'3S\',\'2L-Z\':(nt?\'cG\':0)});5r[0].1K(uf);o.dy=1R.8D(v.id+"vJ");o.dy.Lp=o.4B.tE;uf.1r(5P,o.4B.tE)}if(nt){if(hR){if(9M==2){z=[];2W(f2[0])}V(j=0;j<o.aS.Q;j++){if(v.mG==0&&o.aS[j]=="eX"){}F{z.2H("L4"+o.aS[j])}}}}O(4c[0],{\'46-3w\':C.hE*3N(v.8e,1)});5o[0]="L5";if(2q in o.5n){uJ(2q);if(mK>0&&o.mL.K(\'KZ\'+2q)>-1){4c[0].1P=hD+2D(2q);5o[0]="1t";5r[0].1P=i6(2q)}O(5r[0],{\'W\':C.5a*2.5,\'1D-7D\':\'2f\'})}if(9M!=1&&x[0]>1){f2[0].1r(a1,6i);f2[0].1r(9Y,5z);f2[0].1r(5P,qQ);f2[0].1r("9l",a0)}F{O(f2[0],{"6t":\'6X\'})}if(C.x6==1){2W(f2[0])}if(J(z)){B zz=\'\';V(j=0;j<z.Q;j++){B y=j+1;B cL=0;B 7Z=I;if(z[j]&&4q(z[j])!=\'\'){if(2q==\'4M\'){if(z[j]==2D("2t")){cL=1}if(o.2i=="1G"&&v.L1==1){B iz=4X(z[j]);if(iz&&iz<zz){cL=2}zz=4X(z[j])}}bA(\'f2\',y,cL);bt(f2[y],hK[y],4c[y],5r[y],1O[i]);if(2q==\'4G\'){z[j]==1&&C.cB!=1?z[j]=2D(\'dh\'):\'\'}if(1Q(z[j])==\'5p\'){if(z[j].K("<<<")==0){z[j]=z[j].22(\'<<<\',\'\');7Z=H}if(z[j].K(\'7X\')>0){o[2q+\'qE\']=i}if(z[j].K("oW")==0){B 1H=z[j];if(1H.K("7X")>0){4c[y].1P=2D(z[j].1n(1H.K("7X")+5))}F{4c[y].1P=2D(z[j].1n(7))}if(z[j]==\'L6\'){O(f2[y],{"2Z-1f":"6f 7k 4i(1i,1i,1i,0.7)"})}}F{4c[y].1P=z[j]}}F{4c[y].1P=z[j]}5o[y]=2q+j;if(eS==j||zn==j){5r[y].1P=eS==j?iI:zh;eS==j?O(4c[y],{\'1t\':C.5m}):\'\'}if(1Q(z[j])==\'5p\'){if(z[j].K("oW")==0){B t=z[j].1n(7);if(t.K("1t")>0){5r[y].1P="<1Z C=\'"+(v[t]=="3B"?\'2Z:6f 7k #iw;19:iQ;W:iQ;\':\'19:cG;W:cG;\')+";2u-1t:"+(v[t].K("#")==-1?\'#\':\'\')+v[t]+";2Z-6v:cG;\'></1Z>"}F{if(J(v[z[j].1n(7)])){5r[y].1P=v[z[j].1n(7)]}}}if(2q=="2V"){if(J(iA[y])&&o.2V){5r[y].1P=o.2V.1q(iA[y],0.7,bK(C.5m))}}if(2q=="1t"){if(J(7r[y])&&o.4C){5r[y].1P=i6(7r[y])}}if(2q==\'4M\'){if(z[j]==2D("2t")&&o.P.fW()){O(4c[y],{\'1t\':C.5m})}if(4I(v.aB)){B fq=v.aB.2v(",");V(B k=0;k<fq.Q;k++){if(z[j].K(fq[k])>-1){2W(f2[y])}}}}}B p3="";if(1Q(z[j])==\'5p\'){if(z[j].K("oW")==0){3Z(f2[y],{\'La\':i,\'zw\':z[j].1n(7)});p3="nD"}}if(!7Z){f2[y].1r(a1,6i);f2[y].1r(9Y,5z);if(p3=="nD"){f2[y].1r(5P,nD)}F{f2[y].1r(5P,qQ)}f2[y].1r("9l",a0);f2[y].1r("Cg",Ah)}F{O(f2[y],{"6t":"6X"})}}}}2z()}if(1O[i]==\'5W\'){o.U.m0()}if(1O[i].K(\'X\')>-1){B id=1O[i].1n(8);if(J(o.1w[id])){if(J(o.1w[id][\'3i\'])){o.2y=1T;cJ(i);qB(id);7n("yR");if(J(o.1w[id][\'7x\'])&&v.7x==1&&v.LQ==1){7x(o.1w[id][\'7x\'])}F{jx(id);o.U.d0(o.1w[id][\'3i\'],(v.X.gz==1?1:1T));v.X.8P==0&&v.X.eB==1?1C(9L,4L):\'\';jn=I;kF=I;jF(id)}}F{if(J(o.1w[id][\'4V\'])){5Z(id);if(jn){5J==-1?4D(0,0):\'\'}F if(kF){5J==-1?4D(2E(f.Q)-2,0):\'\'}}}}if(o.3h){o.3h.m9()}}if(1O[i]==\'5x\'){o.P.fs()}}}};G.Bw=E(x){7y(o[x+\'qE\'])};E qF(x){if(x=="lJ"){B z=2q+\'At\';if(v[z]){V(B y in v[z]){if(v[z].2n(y)){qG(y,v[z][y])}}hA()}L}ai();V(B i=0;i<f2.Q;i++){if(f2[i]){f2[i].C.2k="1I"}}f2=[];bA(\'f2\',0);bt(f2[0],hK[0],4c[0],5r[0]);O(f2[0],{"2Z-2J":"6f 7k "+(C.zZ==1?7i:"4i(1i,1i,1i,0.7)")});if(x.K("7X")>0){f2[0].1r(5P,v8);4c[0].1P=2D(x.1n(x.K("7X")+5))}F{f2[0].1r(5P,hA);4c[0].1P=(C.q4!=1?hD:\'\')+2D(x)}O(4c[0],{\'46-3w\':C.hE*3N(v.8e,1)});f2[0].1r(a1,6i);f2[0].1r(9Y,5z);f2[0].1r("9l",a0);B 4y=[];B qY=I;if(x.K("3w")>0){4y=[\'50%\',\'75%\',\'1i%\',\'LN%\',\'se%\',\'LT%\',\'4L%\',\'LU%\',\'do%\',\'hn%\']}if(x.K("5O")>0){4y=[\'0\',\'0.2\',\'0.3\',\'0.4\',\'0.5\',\'0.6\',\'0.7\',\'0.8\',\'0.9\',\'1\']}if(x.K("fw")>0){V(i=-5;i<5.5;i+=0.5){4y.2H(2A.4g(i*1i)/1i)}}if(x.K("gN")>0){4y=[4L,hn,dw]}if(x.K("2J")>0){V(i=0;i<21;i++){4y[i]=i*10}}if(x.K("sZ")>0){V(i=0;i<24;i++){4y[i]=i}}if(x.K("sS")>0||x.K("sR")>0){V(i=0;i<60;i++){4y[i]=i}}if(x.K("dc")>0){qY=H;4y=[0,1]}if(x.K("1t")>0){4y=[\'3I\',\'zY\',\'M0\',\'LY\',\'LX\',\'LW\',\'LM\',\'LL\',\'LB\',\'Lz\',\'Ly\',\'Lw\',\'LD\',\'LJ\',\'LK\',\'LI\',\'LF\',\'3B\'];B vx=v[x].22("#","");if(4y.K(vx)==-1){4y[8]=vx}}V(y=1;y<=4y.Q;y++){bA(\'f2\',y,0);bt(f2[y],hK[y],4c[y],5r[y]);O(5r[y],{\'2M-Z\':0});if(x.K("1t")>0||x.K("2J")>0||x.K("7X")>0||x.K("fw")>0){y%3!=0?O(f2[y],{\'hW\':\'Z\'}):\'\';O(f2[y],{\'W\':\'33.3%\'});if(x.K("1t")>0){4c[y].1P="<1Z C=\'"+(4y[y-1]=="3B"?\'2Z:6f 7k #iw;19:ym;W:ym;\':\'19:ff;W:ff;\')+";2u-1t:#"+4y[y-1]+";2Z-6v:ff;\'></1Z>";O(f2[y],{\'2C-19\':1})}F{4c[y].1P=4y[y-1]}}F{if(x.K("gN")>0){4c[y].1P=4y[y-1]}F{y%2!=0?O(f2[y],{\'hW\':\'Z\'}):\'\';O(f2[y],{\'W\':\'50%\'});if(qY){4c[y].1P=2D(4y[y-1]+\'6p\')}F{4c[y].1P=4y[y-1]}}}5o[y]=x+\'=\'+4y[y-1];if((4y[y-1]==v[x]&&6T(v[x])!=" ")||v[x]==\'#\'+4y[y-1]){5r[y].1P=iI;O(4c[y],{\'1t\':C.5m})}f2[y].1r(a1,6i);f2[y].1r(9Y,5z);if(x.K("7X")>0){f2[y].1r(5P,yv)}F{f2[y].1r(5P,yx)}f2[y].1r("9l",a0)}2z()}E jx(id){if(J(o.1w[id][\'2g\'])){v.2g=o.1w[id][\'2g\'];J(v.2g)?o.P.8Z(v.2g):\'\'}if(J(o.1w[id][\'1L\'])){o.dB=o.1w[id][\'1L\']}}E jF(id){if(J(o.1w[id][\'1L\'])){if(v.je==1){if(o.U.ly(o.1w[id])){}F{v.1L=(v.rr==1&&J(o.oR)?o.oR+(v.rv==1?\'<br>\':\' \'):\'\')+o.1w[id][\'1L\']}o.U.9H(\'1L\')}}if(v.eT==1){if(J(o.1w[id][\'7T\'])){v.7T=o.1w[id][\'7T\']}F{v.7T=[]}o.S.hw()}B xv=[\'6C\',\'k3\',\'5W\',\'1b\',\'yS\',\'yP\',\'jW\',\'jZ\',\'4F\',\'4l\',\'gw\',\'aU\',\'aP\'];V(B i=0;i<xv.Q;i++){if(J(o.1w[id][xv[i]])){v[xv[i]]=o.1w[id][xv[i]]}F{i<3?v[xv[i]]=1T:\'\'}}v.1A=0;qB(id);if(J(o.1w[id][\'3a\'])){o.1w[id][\'2c\']=o.1w[id][\'3a\']}if(J(o.1w[id][\'2c\'])){o.U.g6(o.1w[id][\'2c\'])}if(J(o.1w[id][\'bU\'])){6S(\'bU\',o.1w[id][\'bU\'])}}E qB(id){B x=o.1w[id][\'1A\'];if(J(x)){if(x=="3n"){if(o.P.Y()>0){v.1A=o.2y=o.P.Y()}}F{v.1A=o.2y=x}}}E cJ(x){if(5J==0&&!o.1A){O(5M[5J],{\'1t\':C.1t});O(bM[5J],{\'6o\':C.5H});7B[5J].1P=\'\'}F{o.qd=x;if(5J>-1){hC(5J)}if(3y!=\'\'){o.bi[3y]=H;5h=sy(5h,3y)}}if(1O[x]){B id=1O[x].1n(8);7B[x].1P=iI;O(5M[x],{\'1t\':C.5m,\'1D-tu\':\'1I\',\'1v\':C.a});if(C.q9==1&&J(C.j9)){O(bM[x],{\'6o\':C.j9})}5J=x;3y=id;o.3y=3y;v.4Y=3y;o.jI=5M[x].1P;o.qd=3y;eI=o.1w[id][\'gl\'];if(o.S){o.S.h8()}}}E 5Z(id){B x=id==0?o.X:o.1w[id];o.qd=id;V(B i=0;i<f.Q;i++){if(C.3A==1){17.3d(f[i])}F{7s.3d(f[i])}f[i]=1W}f=[];5J=-1;if(J(x[\'4V\'])){B y=4E.3U(x[\'4V\']).Q;bA(\'f\',y);1O[y]="Ao";bt(f[y],bM[y],5M[y],7B[y]);if(C.3A==1){O(f[y],{"W":(C.lS==1?C.bR:"2t"),"19":C.hx})}if(C.qv==1){B q3="6f 7k 4i("+f0(C.ya)+\',\'+3N(C.yZ,1)+")";if(C.3A==1){O(f[y],{"Kd":q3})}F{O(f[y],{"Ke":q3})}}B 1H=x.1L;if(C.q4!=1){1H=hD+1H}5M[y].1P=1H;O(5M[y],{\'46-3w\':C.hE*3N(v.8e,1)});B p=x[\'gl\'];f[y].1r(a1,6i);f[y].1r(9Y,5z);f[y].1r(5P,E(){yj(p)});x=x[\'4V\']}B y=4E.3U(x).Q;5h=[];cI=[];V(B i=0;i<y;i++){bA(\'f\',i);1O[i]="X"+x[i].id;if(!J(o.bi[x[i].id])&&!J(x[i].4V)){5h[x[i].id]=i;cI[x[i].id]=i}bt(f[i],bM[i],5M[i],7B[i]);if(C.3A==1){if(C.6r==0){O(5M[i],{\'W\':C.bR-C.oz-C.oh});2W(7B[i])}O(f[i],{"W":(C.lS==1?C.bR:"2t"),"19":C.hx})}if(C.qv==1&&i<y-1){B l0=1M("1Z");f[i].1K(l0);if(C.3A==1){O(l0,{"1h":"2e","1f":0,"2f":0,"W":1,"19":"1i%","2u":7i,"7g":"1I"})}F{O(l0,{"1h":"2e","2J":0,"Z":0,"W":"1i%","19":1,"2u":7i,"7g":"1I"})}}5M[i].1P=x[i].1L?x[i].1L:\'&hL;\';if(v.aG==1&&v.wi==1&&x[i].id){if(o.yU){if(o.yU.K(x[i].id)>-1){x[i].nb=1}}}if(J(x[i].nb)){if(x[i].nb==1){o.bi[x[i].id]=H;hC(i)}}if(J(x[i].4V)){7B[i].1P=yJ;O(7B[i],{"1t":C.1t})}f[i].1r(a1,6i);f[i].1r(9Y,5z);f[i].1r(5P,aj);f[i].1r("9l",a0);if(J(o.bi[x[i].id])){hC(i)}if(3y==x[i].id){cJ(i)}if(eI==x[i].id){O(5M[i],{\'1t\':C.5m});O(7B[i],{\'1t\':C.5m})}}2z();4J=I;o.S?o.S.4u():\'\'}E iR(x,y,z,x1,y1,x2,y2,x3,y3,x4,y4){B ww=(C.3A==1?\'yB\':\'1i%\');B hh=(C.3A==1?\'1i%\':\'yB\');O(x,{\'1h\':\'2e\',\'2k\':\'bI-4p\',\'W\':ww,\'19\':hh,\'1D-7D\':\'7P\'});if(C.yF==1){O(x,{\'2u\':\'-l3-2T-5k(\'+y+\')\',\'2u\':\'-3G-2T-5k(\'+y+\')\',\'2u\':\'-ms-2T-5k(\'+y+\')\',\'2u\':\'-o-2T-5k(\'+y+\')\',\'2u\':\'2T-5k(\'+y+\')\',})}if(C.3A==1||o.1l.2l){O(x,{\'6t\':\'3S\'})}F{O(x,{\'3S-2P\':\'1I\'})}if(C.mA==1){O(x,{\'5N-W\':C.iO+\'px!5D\'})}if(z=="1f"){O(x,{\'1f\':-1,\'Z\':0})}if(z=="2J"){O(x,{\'2J\':-1,\'Z\':0})}if(z=="Z"){O(x,{\'1f\':0,\'Z\':0})}if(z=="2f"){O(x,{\'1f\':0,\'2f\':0})}if(z=="2f"||z=="Z"){O(x,{\'1D-7D\':\'Z\',\'2M-1f\':1E.2R/2-10})}x.1P="<7P><1Z "+(C.yT==1?"K7=\'G.C.6o=\\"#"+C.y6+"\\"\' Kr=\'"+(C.rd==1?"G.C.6o=\\"#"+C.nR:"G.C.2u=\\"1I")+"\\"\'":"")+" C=\'3S-2P:2t;6t:3S;W:ff;19:ff;2Z-6v:ff;"+(C.rd==1?"2u-1t:#"+C.nR+";":"")+(z=="1f"?"2L-1f:cG;":"")+(z=="2J"?"2L-1f:cG;":"")+(z=="2f"?"2L-Z:tK;":"")+(z=="Z"?"2L-2f:tK;":"")+"\'><2w W=\'20\' 19=\'20\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'><g><2C x1=\'"+x1+"\' y1=\'"+y1+"\' x2=\'"+x2+"\' y2=\'"+y2+"\' 4e=\'#"+C.km+"\' 4e-W=\'"+C.kj+"\' 4e-eh=\'4g\'/><2C x1=\'"+x3+"\' y1=\'"+y3+"\' x2=\'"+x4+"\' y2=\'"+y4+"\' 4e=\'#"+C.km+"\' 4e-W=\'"+C.kj+"\' 4e-eh=\'4g\'/></g></2w></1Z></7P>"}G.9r=E(){if(C.iM==1){9r()}};E xW(){if(dl){9r()}}E 9r(e){if(C.iM==1&&!iK){if(C.3A==1){B h=17.KU;B m=1E.26+C.6B+C.6E;B t=17.ac}F{B h=17.yg;B m=1E.2R;B t=17.cU}if(h>m){if(t>0){if(!6b(5i)){1o(5i);B m1=1y 5t({"mc":5i,"1B":"7F","to":1,"Y":0.3,"me":"5i"})}}F{if(6b(5i)){B m2=1y 5t({"mc":5i,"1B":"7F","to":0,"Y":0.3,"me":"5i","1m":H})}if(e){e.ew<0?e.8s():\'\'}}if(t<h-m-10){if(!6b(5q)){1o(5q);B m3=1y 5t({"mc":5q,"1B":"7F","to":1,"Y":0.3,"me":"5q"})}}F{if(6b(5q)){B m4=1y 5t({"mc":5q,"1B":"7F","to":0,"Y":0.3,"me":"5q","1m":H})}if(e){e.ew>0?e.8s():\'\'}}}F{1m(5i);1m(5q)}}}E ys(){B x=17.cU+1E.2R-60;B m=1y 5t({"mc":17,"1B":"9e","to":x,"Y":0.3,"me":"Ai","7V":"aA"});1C(9r,2x)}E yr(){B x=17.cU-1E.2R+60;B m=1y 5t({"mc":17,"1B":"9e","to":x,"Y":0.3,"me":"KR","7V":"aA"});1C(9r,2x)}E hJ(1a){3b(o.e9);1a.ak()}E yt(){B x=17.ac+(1E.26+C.6B+C.6E)-60;B m=1y 5t({"mc":17,"1B":"ix","to":x,"Y":0.3,"me":"Kx","7V":"aA"});1C(9r,2x)}E yh(){B x=17.ac-(1E.26+C.6B+C.6E)+60;B m=1y 5t({"mc":17,"1B":"ix","to":x,"Y":0.3,"me":"Al","7V":"aA"});1C(9r,2x)}E yj(x){if(x==\'\'){5Z(0)}F{if(J(o.1w[x])){5Z(x)}}2q=\'\'}E hC(x){7B[x].1P=\'\';O(5M[x],{\'1t\':C.A9});if(C.Aw==1){O(5M[x],{\'1D-tu\':\'2C-Kz\'})}if(C.os>-1){O(5M[x],{\'1v\':C.os})}O(bM[x],{\'6o\':C.om});if(C.nU>-1){O(bM[x],{\'1v\':C.nU})}}E nH(i){if(J(5o[i])){ai();if(6Y("4M",i)==0){o.U.5B(5o[i].1n(7))}if(6Y("6I",i)==0){o.U.cv(5o[i].1n(10))}if(6Y("2c",i)==0){!o.4B?o.4B=1y fQ():\'\';o.4B.9c(5o[i].1n(8))}if(6Y("bs",i)==0&&v.7a==1){o.7a.zm(5o[i].1n(7))}if(6Y("2V",i)==0){o.2V?o.2V.2I(iA[i]):\'\';9L()}if(6Y("1t",i)==0){bB();4D(0,0,7r[i])}V(B p in o.5n){if(o.5n.2n(p)){if(6Y(p,i)==0){o.P.Fa(p,i)}}}if(6Y("7X",i)>0){if(4c[i].1P==2D(\'7Z\')){7n(2q+\'0\');7y(ep);if(2q=="fO"){7n("xP")}cT()}F{if(2q=="lj"&&C.ol==1){7n(\'ol\',i);7y(ep);cT()}}}if(6Y("4G",i)==0){o.U.8x(5o[i].1n(5));he();1C(9L,4L)}}};G.he=E(){he()};G.BB=E(x){V(B i=0;i<1O.Q;i++){if(1O[i]==x){L H}}L I};E he(){V(B i=0;i<1O.Q;i++){if(1O[i]=="4G"){7y(i);if(2q==\'4G\'){bB();4D(i,0)}}}}E bA(x,i,cL){if(J(2m(x))){2m(x)[i]=1M("1Z");if(i<2||x=="f"||2q!=\'4M\'||cL==1){if(C.3A==1){17.1K(2m(x)[i])}F{7s.1K(2m(x)[i])}}F{if(C.3A==1){17.sw(2m(x)[i],2m(x)[i-1])}F{7s.sw(2m(x)[i],2m(x)[cL==2?i-2:i-1])}}if(x==\'f\'){3Z(2m(x)[i],{\'nl\':i})}if(x==\'f2\'){3Z(2m(x)[i],{\'ao\':i})}2m(x+\'bg\')[i]=1M("1Z");2m(x)[i].1K(2m(x+\'bg\')[i]);2m(x+\'3Q\')[i]=1M("1Z");2m(x)[i].1K(2m(x+\'3Q\')[i]);O(2m(x+\'3Q\')[i],{\'1h\':\'2e\',\'2f\':0,\'1f\':0,\'W\':\'1i%\',\'19\':\'1i%\',\'7g\':\'1I\'});2m(x+\'1L\')[i]=1M("1Z");2m(x)[i].1K(2m(x+\'1L\')[i]);2m(x+\'5e\')[i]=1M("1Z");2m(x)[i].1K(2m(x+\'5e\')[i]);if(x=="f2"&&is=="1d"&&C.ux==0){2W(2m(x+\'5e\')[i])}}};E bt(x,bP,iF,uA,Ns){O(x,{\'1h\':\'em\',\'2f\':0,\'1f\':0,\'6t\':\'3S\',\'19\':\'2t\',\'W\':\'1i%\',\'6R\':\'3j\',\'2k\':\'4p\',\'2C-19\':\'1.Nq\'});if(C.oc&&C.3A==1){O(x,{\'Np\':C.oc})}if(C.3A==1){O(x,{\'2k\':\'bI-4p\',\'9G-7D\':\'1f\',\'ag-8k\':\'dh\'})}O(bP,{\'1h\':\'2e\',\'2f\':0,\'1f\':0,\'W\':\'1i%\',\'19\':\'1i%\',\'6o\':C.5H,\'1v\':C.5O,\'7g\':\'1I\',\'4W\':\'1v 0.2s 2T,2u .2s 2T\'});O(iF,{\'1h\':\'em\',\'2f\':0,\'1f\':0,\'hW\':(C.7D?C.7D:\'Z\'),\'1t\':C.1t,\'2M-1f\':C.hY,\'2M-2f\':C.oh,\'2M-2J\':C.Nm,\'2M-Z\':C.oz,\'7g\':\'1I\',\'1v\':C.a,\'4W\':\'1v 0.2s 2T,1t 0.2s 2T\',});O(uA,{\'1h\':\'em\',\'2f\':0,\'1f\':0,\'hW\':(C.vP?C.vP:\'2f\'),\'2M-1f\':C.hY,\'2M-2f\':C.oh,\'2M-Z\':C.oz,\'7g\':\'1I\',\'46-3w\':C.5a*3N(v.8e,1),\'1v\':C.a,\'1t\':C.5m,\'4W\':\'1v 0.2s 2T,1t 0.2s 2T\'});if(C.mA==1){O(x,{\'5N-W\':C.iO+\'px!5D\'});O(iF,{\'5N-W\':(C.iO-70)+\'px!5D\'})}F{if(C.3A==1){if(C.lS==1){O(x,{\'W\':C.bR});O(iF,{\'W\':C.bR-70})}}F{O(iF,{\'ag-8k\':\'cr\'});O(uA,{\'ag-8k\':\'cr\'})}}}E cT(){V(B i=1;i<f.Q;i++){if(J(f[i])){if(C.3A==1){f[i].C.2k="bI-4p"}F{f[i].C.2k="4p"}}}ai();bB();2z();2q=\'\';ep=-1};E bB(){V(B j=0;j<f2.Q;j++){if(f2[j]){if(C.3A==1){17.3d(f2[j])}F{7s.3d(f2[j])}f2[j]=1W}}f2=[];2q=\'\'}E yf(){L 17.26};G.g2=E(){mw()};E mw(){if(is=="X"){if(C.3A==1||C.wy==1){B x=o.3f-C.4t-C.3P;O(1E,{\'W\':x});O(17,{\'W\':x});7s?O(7s,{\'W\':x}):\'\'}}}E 2z(){if(!iK){if(is=="1d"){o.S?o.S.vo():\'\';B x=C.x6==1&&f.Q>1?f[1]:f[0]}if(is=="X"){mw();o.S?o.S.g2():\'\';B x=f[0];if(v.oK==1){nn()}}f.Q>1&&!x?(f[1]?x=f[1]:\'\'):\'\';f.Q>2&&!x?(f[2]?x=f[2]:\'\'):\'\';if(x){x.26==0&&f2.Q>0?x=f2[0]:\'\'}if(17.26-17.uv>0&&x&&C.3A!=1){if(J(5i)){O(5i,{"W":7s.26})}if(J(5q)){O(5q,{"W":7s.26})}C.mF=(17.26-x.26)-(17.uv-x.uv)}F{C.mF=0}}};E vb(){B x=0;B y=0;B z=\'\';V(B i=1;i<f.Q;i++){if(J(f[i])){if(f[i].C.5g=="3W"){x++;y=i;z=1O[i]}}}L[x,y,z]}G.vf=E(){hR=H;G.1o();9M=2;hA()};E xK(x){hR=!hR;hA(x)}E hA(){cT();V(B i=0;i<1O.Q;i++){if(1O[i]=="2c"){4D(i,9M)}}}E ai(){3b(uR);uR=1C(E(){o.us=I},4b)}E v8(){B x=2q;cT();V(B i=0;i<1O.Q;i++){if(1O[i]==x){4D(i,0)}}}E 9L(x){if((is==\'X\'&&v.X.Nc==1)||(is==\'1d\'&&v.1d.8P==1)){L}if(is==\'X\'&&v.X.3h==1&&v.X.Nd!=1){o.3h?o.3h.yp():\'\';dl=I}F{if((x!=1||(C.Ni==1&&C.8P==1))&&!o.1l.tv){B m=1y 5t({"mc":1E,"1B":"7F","to":0,"Y":0.1,"me":is,"7V":"wQ"});gb=1C(E(){O(1E,{"5g":"3j","1v":0,"1f":-4b});dl=I},4L)}F{O(1E,{"5g":"3j","1v":0,"1f":-4b});dl=I}}if(is==\'X\'){if(v.X.zQ==1&&o.S){o.S.o9("1c","X",H)}}41(n5)};G.c=E(){L 1E};G.co=E(){if(1E.Nh(17)){L 17}};G.s=E(18){L C[18]};G.ss=E(18){L C};G.1o=E(){cT();3b(gb);dl=H;if(is==\'X\'&&v.X.3h==1){o.3h?o.3h.jJ():\'\'}F{O(1E,{"5g":"3W","1v":1,"4W":"1v 0.2s 2T"});B x=vb();if(x[0]==1){if(x[2]=="4M"||x[2]=="6I"||x[2]=="2c"||x[2]=="4G"||x[2]in o.5n||x[2].K("7X")>0){4D(x[1],0)}}}if(o.S){is==\'1d\'?o.S.vo():\'\';if(is==\'X\'){o.S.g2();if(v.X.zQ==1){o.S.o9("1c","X",I)}}}if(o.1l.6y){O(17,{\'8G-W\':\'2t\'});if(C.3A!=1){O(7s,{\'8G-W\':\'2t\'})}}eJ=H;41(j6);j6=7q(zB,1i)};E zB(){41(j6);eJ=I}G.7S=E(i){4D(i,1)};G.1m=E(x){9L(x)};G.5B=E(){V(B i=0;i<1O.Q;i++){if(1O[i]=="4M"){7y(i);if(o.2o.Q>1){1o(f[i])}if(2q==\'4M\'){bB();4D(i,9M)}}}};G.fs=E(){V(B i=0;i<1O.Q;i++){if(1O[i]=="5x"){7y(i)}}};G.ho=E(x){V(B i=0;i<1O.Q;i++){if(1O[i]==x){7y(i);if(o[\'cH\'+x]){if(o[\'cH\'+x].Q>1){1o(f[i])}}if(2q==x){bB();4D(i,9M)}}}};G.9c=E(){V(B i=0;i<1O.Q;i++){if(1O[i]=="2c"){7y(i);if(o.2Y){if(o.2Y.Q>0){B x=I;if(o.1S){V(B y=0;y<o.1S.Q;y++){if(o.1S[y]!=\'\'){x=H;1g}}}F{x=H}x?1o(f[i]):\'\'}}if(2q==\'2c\'){bB();4D(i,0)}}}};G.uE=E(x){o.X=x;5Z(0);if(J(v.4Y)){if(v.4Y.K("x-")!=0){V(B y in o.1w){if(o.1w.2n(y)){if(o.1w[y].ca==v.4Y){v.4Y=y}}}}if(J(o.1w[v.4Y])){e5(o.1w[v.4Y]);B y=o.1w[v.4Y][\'bq\'];cJ(y);if(v.X.rs==1&&C.3h!=1){5Z(0);1C(E(){2z()},4d)}F{1C(E(){cD(y);2z()},4d)}v.4Y=1T}F{cJ(0)}}F{cJ(0)}if(C.3h==1){if(!J(o.3h)){o.3h=1y NC()}}};G.h5=E(x){if(J(o.1w[x])){e5(o.1w[x]);4D(o.1w[x][\'bq\'],0);cD(o.1w[x][\'bq\'])}};G.k7=E(x){if(J(o.1w[x])){e5(o.1w[x]);if(o.1w[x]["3i"]){cJ(o.1w[x][\'bq\']);jx(x);o.U.d0(o.1w[x]["3i"],1);jF(x);cD(o.1w[x][\'bq\']);if(o.3h){o.3h.m9()}}F if(o.1w[x]["4V"]){5Z(x)}}};E zX(x){if(J(o.1w[x])){eI=\'\';5Z(0);e5(o.1w[x]);jx(x);4D(o.1w[x][\'bq\'],0);jF(x)}};G.aL=E(){jn=H;x=2E(5J)+1;if(3y!=\'\'){o.bi[3y]=H;5h=sy(5h,3y)}if(v.5h==1){x=uS(5h);if(x==1W){if(v.O3==1||v.X.eG==1){cI.BL(E(a,b){L 2A.5d()-0.5});V(B x in cI){if(cI.2n(x)){5h[x]=cI[x]}}x=uS(5h)}F{o.U.An()}}}F{if((1O[x]=="Ao"||5J==-1)&&3y!=\'\'){B y=4E.3U(o.1w).K(3y);if(y<4E.3U(o.1w).Q){B z=o.1w[4E.3U(o.1w)[y+1]];if(z){if(J(z.4V)){z=o.1w[4E.3U(o.1w)[y+2]]}G.k7(z.id);x=-1;o.U.2F()}}}}if(x>-1){4D(x,0);cD(x)}};E cD(x){if(f[x]&&!iK){if(C.3A==1){B to=f[x].eK-20;B m=1y 5t({"mc":17,"1B":"ix","to":to,"Y":0.3,"me":"Al","7V":"aA"})}F{B to=f[x].NG-1E.2R/2+20;B m=1y 5t({"mc":17,"1B":"9e","to":to,"Y":0.3,"me":"Ai","7V":"aA"})}1C(9r,2x)}}E uS(42){B 3U=4E.3U(42);B x;V(B i=0;i<3U.Q;i++){x=42[3U[3U.Q*2A.5d()<<0]];if(x){1g}}L x};G.5n=E(x){uJ(x)};E uJ(x){im[x]>-1?7y(im[x]):\'\';if(5r[0]){if(2q==\'1F\'){5r[0].1P=2A.4g(o.3m.x*1i)+\'%\'}F{5r[0].1P=i6(2q)}}};E i6(x){if(x=="1F"){L 2A.4g(o.3m.x*1i)+\'%\'}F{L 2A.4g(3N(o.9a[x],o.5n[x])*1i)+\'%\'}}G.cY=E(){if(v.5h==1){L 4E.3U(5h).Q>0}B x=I;if(o.1w){x=4E.3U(o.1w).K(3y)<4E.3U(o.1w).Q-1}L x};G.kb=E(){if(J(o.gq)){zX(o.gq)}};G.ei=E(){B x=5J>0;if(o.1w){B y=4E.3U(o.1w);B z=y.K(3y);x=z>0;if(z==1){if(J(o.1w[y[0]].4V)){x=I}}}L x};G.ke=E(){L J(o.1w)};G.ch=E(){kF=H;if(G.ei()){B x=2E(5J)-1;if(x<0){B y=4E.3U(o.1w).K(3y);if(y>0){B z=o.1w[4E.3U(o.1w)[y-1]];if(z){if(J(z.4V)){z=o.1w[4E.3U(o.1w)[y-2]]}if(z){G.k7(z.id);o.U.2F()}}}}F{4D(x,0);cD(x)}}};G.kc=E(){if(5J>0){cD(5J)}};E 6Y(x,i){L 5o[i].K(x)};E e5(x){if(x[\'qD\']!=-1){e5(o.1w[x[\'gl\']]);5Z(x[\'gl\'])}F{5Z(0)}};G.g=E(x){9X(x){1j"W":L yf();1g;1j"19":L 1E.2R;1g;1j"1f":L C.7W;1g;1j"C4":L 17.yg;1g;1j"BW":L C.d5;1g;1j"x":L 4X(1E.C.Z);1g;1j"y":L 4X(1E.C.1f);1g;1j"1v":L 1E.C.1v;1g;1j"1o":L dl;1g;1j"7S":L ep;1g;1j"18":L 18;1g;1j"9Z":L 18+9Z;1g;1j"4J":L 4J;1g;1j"X":L is=="X";1g;1j"ux":L iI;1g;1j"b8":L o.1w[o.b8]?o.1w[o.b8].1L:\'\';1j"aP":L v.aP?v.aP:\'\'}};G.Bz=E(){3y=\'\';v.4Y=\'\'};G.4J=E(){if(is=="1d"){B x=0;V(B i=1;i<11;i++){if(1O[i]=="4M"){B y=o.2o.Q;if(J(v.aB)){B z=v.aB.2v(",");V(B j=0;j<z.Q;j++){if(o.2o.K(z[j])>-1){y--}}}if(y>0){if(y>1||(y==1&&o.2o!=1&&C.xZ==1)){x++}}}if(1O[i]=="5x"){if(o.5x){x++}}if(1O[i]=="5W"){if(o.2i==\'aM\'||v.5W){x++}}if(1O[i]=="6I"){if(o.7z.Q>0){x++}}if(1O[i]=="bs"&&v.7a==1){if(o.md.Q>0){x++}}if(1O[i]=="2c"){if(J(o.1S)){V(B s=0;s<o.1S.Q;s++){if(o.1S[s]!=\'\'){x++;1g}}}if(x==1&&o.i5==1){x=0}if(v.mx==1&&v.ph==1){x++}}if(1O[i]=="4G"){if(o.2i!="8Y"){x++}}if(1O[i]in o.5n||1O[i]=="2V"||1O[i]=="1t"){x++}if(1O[i]){if(1O[i].K("7X")>0){x++}}if(v.1d[is+i+\'1m\']==1){x--}}L x==0}F if(is=="X"){L f.Q==0}F{L 4J}};G.43=E(){if(1E.5u==o.1J){1E.3d(17);o.1J.3d(1E);o.3h?o.3h.43():\'\';1E=1W;17=1W;iK=H}}};B pw=E(1b,i9){B 6l=I;if(1b.K(\'6l\')==0){6l=H;1b=1b.1n(5)}B kW=lY(1b);B 2b;B 3k;B hF=I;B 3C=I;B ny=I;B jK=I;B 2t=H;B sk=[];B aT=1;B ir=I;B rZ;B c4=0;B kr=0;B ku=I;B kn=\'Bd\'+v.id+(6l?\'6l\':\'\');B 1E=1M(\'1Z\');1E.6h(\'id\',kn);i9.1K(1E);o.5x=I;!6l?o.U.h7():\'\';if(o.1l.2l){v.4f=1}if(v.zd!=1){B 7M=1M(\'1Z\');i9.1K(7M);O(7M,{1h:"2e",1f:0,Z:0,"2u-1t":"#mg",19:"1i%",W:"1i%","1v":0});7M.1r("CF",E(1a){1a.6j=H});if(o.1l.2l){7M.1r("eV",E(1a){1a.6j=H});7M.1r("2r",E(1a){1a.6j=H});7M.1r("eW",E(1a){1a.6j=H;fv(1a);if(v.cm==1){1C(yb,1i);1C(jQ,2x)}})}F{7M.1r("qr",E(1a){B x=H;if(v.1U==1){if(J(v.7j)&&!ny){x=I}if(J(v.jl)&&ay()=="7I"&&Y()>0){x=I}}if(x&&v.cm==1&&v.y8!=1){2W(G);1C(jQ,4b)}})}v.cm==1&&v.Mr!=1?2W(7M):\'\'}E jQ(){5V(7M)}E yb(){if(v.y8!=1){2W(7M)}}if(v.4f==1&&v.3J==0){8H()}if(!1V[\'6V\']){1V.Mv=E(){kL();V(B i=0;i<6N.Q;i++){if(6N[i].2I("id")!=v.id){if(6N[i].2I(\'zU\')){6N[i].2I(\'zV\')}}}};B vp=vd("4h.9U/y5","4h.9U/y5","Mu");if(vp){vp.p9=E(e){o.U.cs();if(v.yH!=1){2b=\'wk Mt e6\';o.P.6a()}}}}F{kL()}E kL(){if(v.4f==1||6l){!hF?9d():\'\'}F{o.U.cs()}}E 9d(){if("6V"in 1V){if(J(6V.kd)&&!hF){1p("yK 9d");B va=0;if(v.zd==1){va=1}o.2y>0?c4=2E(o.2y):\'\';3k=1y 6V.kd(kn,{19:o.9I,W:o.af,M8:kW,M9:{M7:1,M6:kn,M4:1,M5:1,eB:1,mt:((v.pD==0||(v.Mb!=1&&o.1l.7J))&&o.1l.2l?0:1),Mf:3,S:va,Me:0,Mc:1,yn:0,3J:6l?1:0,as:0},2P:{\'Md\':vl,\'My\':yL,\'6a\':6a,\'Mz\':yG}});if(o.2y>0){o.2y=1T}2z();hF=H}F{1C(9d,4d)}}F{1C(9d,4d)}}B iP;E vl(){if(o.P){1p("yK hM");3C=H;3b(rZ);o.U.6G();if(6l){if(o.1l.sO){o.U.53()}3k.kK();o.1U.MV()}F{if(v.3J==1&&o.1l.sO&&!o.jc){o.U.53();if(o.1l.2l){41(iP);iP=7q(yO,do)}}if(v.4f==0){3k.kK()}F{o.U.cs()}o.P.9C();if(aT!=1){8x(aT)}b4();2z()}}}E yO(){B x=3k.zb();if(x==2||x==-1){o.S.2X();o.S.6G();41(iP)}if(x==1){41(iP)}}E yL(1a){if(v.MS==1){1p(\'6V\',1a.29)}if(6l){if(1a.29==6V.bZ.yN){o.1U.MQ()}if(1a.29==6V.bZ.yM){}}F{if(1a.29==6V.bZ.yM){if(kr==1){kr=0;vl()}if(!o.1z){o.U.2F()}if(c4>0){3k.z5(c4,H);c4=0;o.2y=1T}jQ();ny=H;3C=H;if(jK){3k.s7()}F{o.P.9p();o.P.az()}z9();if(J(v.4r)){V(B i=0;i<o.2o.Q;i++){if(v.4r==o.2o[i]){5B(i)}}v.4r=1W}F{if(J(o.4r)){V(B i=0;i<o.2o.Q;i++){if(o.4r==o.2o[i]){5B(i)}}o.4r=1W}}ir=I}if(1a.29==-1&&ir&&o.1z){o.U.6G();ir=I;di()}if(1a.29==6V.bZ.JV){}if(1a.29==6V.bZ.yN){8u()}if(1a.29==6V.bZ.N3){if(!o.1z){}if(o.1z){ir=H;8H()}}if(1a.29==6V.bZ.MY){}}}E 6a(1a){if(6l){o.1U.MZ()}F{if(1a.29==2){2b="FA 4h id"}if(1a.29==5){2b="pb 4J"}if(1a.29==y7||1a.29==se||1a.29==1i){2b="G mW is MO"}if(v.ME==1){J(v.yQ)?2b=v.yQ:\'\'}if(v.yH!=1){o.P.6a()}F{1m(o.2g)}}}E 8u(){v.1A>0?c4=v.1A:\'\';o.P.8u();o.P.9C()}E di(){if(!o.Fw&&o.1z){o.U.2X()}}E az(){o.P.az()}E b4(){o.P.b4();o.U.qM()}E 9C(){o.P.9C()}E cW(){o.P.cW()}E 8H(){if(o.P){o.P.8H()}F{rZ=1C(8H,1i)}}E yG(1a){s5(1a.29)}E z9(){if(!ku){B x=3k.MA()+\'\';if(x!=\'\'&&x!=1T){o.2o=x.2v(\',\');o.2o=o.2o.z4();if(v.sC==0){B y=o.2o.K(\'2t\');if(y>-1){o.2o.qo(y,1)}}V(B i=0;i<o.2o.Q;i++){o.2o[i]=hm(o.2o[i])}ku=H;s5(3k.MB())}}}E s5(x){o.3e=o.2o.K(hm(x+\'\'));o.S.vn(o.3e)}G.3w=E(){L{"W":0,"19":0}};G.2Q=E(x){kW=lY(x);if(o.2y>0){c4=2E(o.2y)}h5(kW)};E ay(){B 6L=-1;if(3C){6L=3k.zb()}B x=\'\';if(6L==-1){x="7I"}if(6L==1||6L==3){x="7t"}if(6L==2){x="7I";if(o.1z){o.S.2X();o.U.6G()}}if(6L==5){x="7I"}if(6L==0){x="96"}L x}E 2z(){3k?3k.MN(o.3f,o.4N):\'\'}E hm(x){B y=x;if(x=="ML"){y="lP"}if(x=="gM"){y="gp"}if(x=="MK"){y="gg"}if(x=="MI"){y="gj"}if(x=="MJ"){y="lb"}if(x=="J8"){y="la"}if(v.zc==1){y=2D(y)}if(x=="2t"){y=2D("2t")}sk[y]=x;L y}E Y(){L 3C?3k.GH():0};E 8x(x){3k?3k.GD(x):\'\';aT=x};G.lO=E(){kL()};G.2F=E(){if(3C){3k.kK()}F{if(!hF){9d()}F{}}};G.2X=E(){if(3C){3k.s7()}};G.cq=E(){if(3C){ay()==\'7t\'?3k.s7():3k.kK()}};G.3L=E(x){3C?3k.z5(x,H):\'\'};G.9v=E(){L I};G.53=E(){3C?3k.4P():\'\'};G.6P=E(){3C?3k.GK():\'\'};G.3M=E(x){3C?3k.zy(x*1i):\'\'};G.kD=E(){L ay()==\'7t\'};G.5E=E(){L I};G.qs=E(x){5B(x)};E 5B(x){if(3C){if(J(o.2o[x])){B y=sk[o.2o[x]];2t=y==\'2t\';B z=Y();3k.GR(y)}}}G.fl=E(x){8x(x)};G.3C=E(){L 3C};G.6m=E(){L ay()};G.Y=E(){L Y()};G.1k=E(){B x=3C?3k.yV():0;if(J(v.4F)){x=v.4F}L x};G.8X=E(){B x=0;if(3C){x=3k.GP()*3k.yV()}L x};G.4T=E(){2z()};G.k1=E(){L 2b};G.2t=E(){L v.sC==1?2t:I};G.wc=E(x){h5(x)};E h5(x){1b=x;if(3k){kr=1;3k.Gy(x,0)}}G.jd=E(){if(o.1l.2l&&o.1l.9K){G.2F();jK=H}F{if(ay()=="7t"){G.2X()}}};G.dx=E(){jK=I};G.qe=E(){L H};G.43=E(){3C?3k.9q():\'\';3C=I;ku=I;3q{if(1E){i9.3d(1E)}i9.3d(7M)}2U(e){}}};B fQ=E(){B 3a=[];B 9O=[];B 4J=H;B 8L;B 8o=-1;G.1A=E(x){cZ(x)};E cZ(x){!x?x=\'\':\'\';if(x!=\'11\'){B 1A=0;B sF=H;B i0=\'\';o.1S=x.2v(",");o.2Y=[];o.3F=-1;if(o3()&&v.sI==1){if(3z.6c("tL")!=1W){i0=3z.6c("tL")}}F{if(o.tN){i0=o.tN}}V(B i=0;i<o.1S.Q;i++){if(o.1S[i].K("#0")==0){o.1S[i]=b6(o.1S[i])}if(o.1S[i].K("#"+v.9g)==0){o.1S[i]=o[o.fd[0]](o.1S[i])}if(o.1S[i].K("#"+v.9J)==0&&o.1S[i].K(v.b7)>0){o.1S[i]=o[o.fd[1]](o.1S[i])}if(o.1S[i].K("[")==0&&o.1S[i].K("]")>1){o.2Y[i]=o.1S[i].1n(o.1S[i].K("[")+1,o.1S[i].K("]")-1);o.1S[i]=o.1S[i].1n(o.1S[i].K("]")+1);sF=I}F{o.2Y[i]=o.1S[i].1n(o.1S[i].tG("/")+1);o.2Y[i]=o.2Y[i].1n(0,o.2Y[i].tG("."))}if(o.1S[i].K("#0")==0){o.1S[i]=b6(o.1S[i])}if(o.1S[i].K("#"+v.9g)==0){o.1S[i]=o[o.fd[0]](o.1S[i])}if(o.1S[i].K("#"+v.9J)==0&&o.1S[i].K(v.b7)>0){o.1S[i]=o[o.fd[1]](o.1S[i])}}if(o.2Y.Q>1&&v.mG==1){o.2Y.2H(kI(\'Gx\',2D(\'sK\')));o.1S.2H("9y")}if(o.2Y.Q>0&&v.8t==1){if(v.zF==1){8L=0;1A++;o.2Y.il(kI(\'y9\',2D(\'7Z\')));o.1S.il("")}F{o.2Y.2H(kI(\'y9\',2D(\'7Z\')));o.1S.2H("");8L=o.2Y.Q-1}}V(B i=0;i<o.1S.Q;i++){if(J(v.yc)){if(v.yc==o.2Y[i]){1A=i;o.3F=i;v.dE=1}}if(i0!=\'\'){if(i0==o.2Y[i]){1A=i;o.3F=i}}}if(v.8t==1&&v.dE==0){o.3F=8L}J(o.S)?o.S.aQ():\'\';if(v.dE==1){o.3F=1A;if(v.mG==1&&o.1S[1A]=="9y"){tz(o.3F)}F{hQ(o.3F)}}F{if(sF&&o.1S.Q<3){hQ(8L==0?1:0)}v.8t!=1?o.3F=-1:\'\'}}F{43()}}E hQ(x){if(J(o.1S[x])){if(o.1S[x].K(".")>-1){o.kE=o.1S[x].2v(" or ");o.f3=0;l4(x)}F{if(o.1S[x].K(\'9O\')==0){if(9O[o.1S[x].1n(4)]){so(o.2Y[x],9O[o.1S[x].1n(4)])}}}}}E tz(x){3a[x]=4E();3a[x][0]=8R();3a[x][1]=8R();V(B i=0;i<o.1S.Q;i++){1C(hQ,i*4d,i)}}E l4(x){B 1b=4q(o.kE[o.f3]);B 4k=eD(1b);8o=x;o.i5=1;4k.bN=E(){o.i5=0;if(G.eL==4&&G.6m==4L){o.7b=H;so(1b,G.c0,x)}F{if(o.f3+1<o.kE.Q){o.f3++;l4(8o)}F{jw("cN")}}};4k.p9=E(e){o.i5=0;if(o.f3+1<o.kE.Q){o.f3++;l4(8o)}F{jw("cN")}};4k.bb()};E jw(x){1p("2c eO k8 or zT zS");if(o.2Y[o.3F]){if(o.2Y[o.3F].K(2D("cN"))==-1){o.2Y[o.3F]=o.2Y[o.3F]+\' (\'+2D(x)+\')\'}}if(v.H3==1&&8o>-1){o.1S[8o]=\'\';o.2Y[8o]=\'\'}o.3F=-1;o.7b=I;if(o.H2){o.S.aQ();o.S.4u()}F{1C(E(){if(o.S){o.S.aQ();o.S.4u()}},1i)}if(J(o.2c)){o.1J.3d(o.2c);o.2c=1W}}E so(1b,x,y){if(x.K("#"+v.9g)==0){x=o[o.fd[0]](x)}if(x.K("#"+v.9J)==0&&x.K(v.b7)>0){x=o[o.fd[1]](x)}if(1b.K(\'.iB\')>-1||1b.K(\'.rp\')>-1||1b.K(\'.jh\')>-1||1b.K(\'.sr\')>-1){B l=o.3F;if(J(3a[l])&&o.1S[l]=="9y"){}F{3a[l]=4E();3a[l][0]=8R();3a[l][1]=8R()}B 3K=8R();3K=x.2v(/\\r|\\n/);B st=1;B t1=0;B t2=0;B dQ=(J(v.xX)?v.xX:0);if(1b.K(\'fw=\')>0){dQ=1b.1n(1b.K(\'fw=\')+6)*1}V(i=0;i<3K.Q;i++){if(1b.K(\'.iB\')>-1||1b.K(\'.sr\')>-1){if(3K[i].K(\'-->\')>-1&&3K[i].K(\':\')>-1){t1=iE(3K[i].1n(0,3K[i].K(\'-->\')))*1+dQ;t1==0?t1=1:\'\';t2=iE(3K[i].1n(3K[i].K(\'-->\')+4,12))*1+dQ;J(3a[l][0][t1])?\'\':3a[l][0][t1]=\'\';V(B j=t1;j<t2;j++){3a[l][1][j]=t1}st++}F{3K[i]=4q(3K[i]);if(3K[i]!=\'\'&&3K[i].Q>0&&3K[i]!=st&&3K[i]!=\'Hg\'){3a[l][0][t1]=(3a[l][0][t1]&&3a[l][0][t1]!=\'\'?3a[l][0][t1]+\'<br>\':\'\')+(o.1S[l]=="9y"&&y>0?\'[dG]\':\'\')+3K[i]+(o.1S[l]=="9y"&&y>0?\'[/dG]\':\'\')}}}if(1b.K(\'.rp\')>-1||1b.K(\'.jh\')>-1){if(3K[i].K(\'Hf:\')>-1){t1=iE(3K[i].1n((1b.K(\'.jh\')>-1?3K[i].K(\'=0\')+3:12),12))*1+dQ;t2=iE(3K[i].1n((1b.K(\'.jh\')>-1?3K[i].K(\'=0\')+14:23),10))*1+dQ;B p=\'\';if(3K[i].K(\'0,,\')>0){p=3K[i].1n(3K[i].K(\'0,,\')+3)}F{if(3K[i].K(\'A3,\')>0){p=3K[i].1n(3K[i].K(\'A3,\')+6)}}if(3a[l][0][t1]!=1T){3a[l][0][t1]+=\'\\n\'+(o.1S[l]=="9y"&&y>0?\'[dG]\':\'\')+p+(o.1S[l]=="9y"&&y>0?\'[/dG]\':\'\')}F{3a[l][0][t1]=p}3a[l][0][t1]=3a[l][0][t1].22(/{.*?}/,\'\');3a[l][0][t1]=3a[l][0][t1].22(/\\\\\\\\N/,\'<br>\');3a[l][0][t1]=3a[l][0][t1].22(/\\\\N/,\'<br>\');V(B j=t1;j<t2;j++){3a[l][1][j]=t1}}}}o.S.aQ();o.U.lw();o.S.4u()}F{if(x!=\'\'){if(x.K(\'[\')==0){cZ(x)}F{jw("2b")}}F{43();o.S.4u()}}}E iE(iB){B 1H=iB.2v(\':\');B 5Y=0;1H.Q==2?1H.il("aH"):\'\';1H[0]!=\'aH\'?5Y+=1H[0]*rV:\'\';1H[1]!=\'aH\'?5Y+=1H[1]*60:\'\';5Y+=1H[2].1n(0,2)*1;5Y=5Y*10+1H[2].1n(3,1)*1;L 5Y};E 9c(x){if(J(o.3F)){if(o.3F!=x){if(x==-1||(v.8t==1&&x==8L)){ue()}F{v.bj=0;o.3F=x;o.7b=H;v.dE=1;tX(x);js("2c",o.2Y[x]);o.S.aQ()}}F{if(v.8t!=1){ue()}}}}E tX(x){if(J(o.1S[x])){1p("g6",x);o.3F=x;if(J(o.2Y[x])){if(o.5j&&v.sI==1){3z.8O("tL",o.2Y[x])}F{o.tN=o.2Y[x]}}if(o.2i=="1G"&&o.lv==H){o.P.gt(x,"1G")}F{if(o.2i=="3t"&&o.tT==H){o.P.gt(x,"3t")}F{if(o.1S[x]=="9y"){tz(o.3F)}F{hQ(o.3F)}}}}};G.tE=E(){if(o.dy){B x=o.dy.3H;if(x[0]){B y=1y zC();y.bN=E(e){B z=e.44.hs;9O.2H(z);o.3F=-1;B z=x[0].6Q;if(z.Q>40){z=x[0].6Q.1n(0,15)+\'...\'+x[0].6Q.1n(-15)}if(v.8t==1&&v.zF==1){o.1S.2H(\'9O\'+(9O.Q-1));o.2Y.2H(z+\'\');9c(o.1S.Q-1)}F{o.1S.il(\'9O\'+(9O.Q-1));o.2Y.il(z+\'\');v.8t==1?8L++:\'\';9c(0)}o.dy.5e=""};y.GY(x[0])}F{o.dy.2r()}}};G.9c=E(x){9c(x)};G.8L=E(){L 8L};G.1o=E(x){jJ(x)};G.C=E(){sT()};G.6C=E(){43()};E ue(){js("2c","7Z");o.3F=v.8t==1?8L:-1;v.dE=0;o.7b=I;o.S.aQ();o.lv||o.tT?tX(o.3F):\'\';J(o.2c)?o.1J.3d(o.2c):\'\';o.2c=1W}E jJ(Y){if(v.bj){Y=Y-v.bj*1}if(o.7b&&J(o.1S)){if(3a){B x=o.3F;if(v.ur==1&&!o.1z){L}if(J(3a[x])){if(J(3a[x][1])){B t=2E(Y*10);if(J(3a[x][1][t])){B y=\'\';y=3a[x][0][3a[x][1][t]];if(!J(o.2c)){o.2c=1M(\'1Z\');o.1J.1K(o.2c);sT()}if(4J){5V(o.2c)}vL();if(v.HL==1){y=HK(y)}if(v.mG==1){y=y.22(/\\[dG\\]/gm,\'<7L C="1t:\'+bK(v.eX)+\'">\');y=y.22(/\\[\\/dG\\]/gm,\'</7L>\')}o.2c.1P=\'<7L C="\'+(v.vZ==1?\'2u-1t:\'+xJ(v.fC,v.fF)+\';\':\'\')+\'-3G-5Q-tu-1g: Hq;1t:\'+bK(v.eN)+\';2M:\'+v.sV+\'px \'+v.sV*2+\'px;2Z-6v:\'+v.vQ+\'px;2L:0 0;2C-19:\'+(v.vw?v.vw:1.8)+\';46-gN:\'+v.hu+\'">\'+4q(y)+\'</7L>\';if(v.vB==1){if(o.2a){O(o.2c,{"46-3w":((v.ju+((2E(v.ek)-1i)*v.ju/1i))+"px")})}F{O(o.2c,{"46-3w":((v.jD+((2E(v.ek)-1i)*v.jD/1i))+"px")})}}4J=I}F{if(!4J&&J(o.2c)){o.2c.1P=\'\';4J=H;2W(o.2c)}}}}}}}E sT(){if(o.2c){O(o.2c,{"1h":"2e","W":"1i%","2M-Z":"10%","2M-2f":"10%","Z":0,"1t":v.eN,"1D-7D":"7P","5Q-ic":"2Z-5Q"});if(v.HN==1&&J(v.sW)){v.sW!=\'\'?O(o.2c,{"46-iS":v.sW}):\'\'}if(v.fH==1){O(o.2c,{"1D-dc":"6f 6f GL Gk"})}F{O(o.2c,{"1D-dc":"1I"})}if(v.Gn==1){pg(o.2c,\'o.mD\')}F{O(o.2c,{"3S-2P":"1I"})}}}E vL(){if(!o.mD){if(o.S.j0()||v.b9>v.1u.h){O(o.2c,{"1h":"2e","1f":"2t","Z":0,"2J":(v.b9*1)})}F{O(o.2c,{"1h":"2e","1f":"2t","Z":0,"2J":(v.b9*1+v.1u.h*1)})}}}E 43(){o.3F=-1;o.7b=I;o.lc=I;v.2c=1W;v.k3=1W;o.3a=1W;o.1S=1W;if(J(o.S)){o.S.aQ()}o.2Y=1W;if(J(o.2c)){o.1J.3d(o.2c);o.2c=1W}o.3F=1W;o.7b=I}};o.Gp={"2t":"Авто","1z":"Пуск","4o":"Пауза","2B":"Стоп","2a":"Во весь экран","o0":"Выйти из полноэкранного режима","1d":"Настройки","3r":"Параметры","1N":"Громкость","4P":"Выключить звук","94":"Включить звук","5c":"В ЭФИРЕ","X":"Плейлист","4M":"Качество","5W":"Скачать","2c":"Субтитры","4G":"Скорость","dh":"Обычная","2b":"ошибка","Gr":"Включите звук","6I":"Аудио","cN":"ошибка загрузки","lP":"Очень низкое","gp":"Низкое","gg":"Среднее","gj":"Высокое","pK":"Высокое","7h":"Следующий","cX":"Предыдущий","2V":"Поделиться","vD":"Скопировано в буфер обмена","vW":"Реклама","kN":"Пропустить","Gu":"Пропустить через ","we":"Перейти на сайт рекламодателя","ek":"Размер текста","bj":"Сдвиг по времени","eN":"Цвет текста","eX":"Цвет текста 2","fC":"Цвет фона","fF":"Прозрачность фона","fH":"Тень","hu":"Толщина текста","b9":"Отступ снизу","lJ":"Сбросить","xO":"Загрузить","lj":"Сон","fO":"Пропуск","sZ":"Час","sS":"Минута","sR":"Секунда","x7":"Да","xc":"Нет","of":"из","7e":"Пароль","xs":"Ошибка воспроизведения на устройстве","xG":"Играет на устройстве","bs":"Канал","1F":"Масштаб","on":"Вкл.","7Z":"Выкл.","sK":"Все сразу","dD":"кбит/с","jZ":"Код","1b":"Ссылка","1t":"Цвет","xm":"Контраст","xq":"Яркость","dC":"Насышенность","lZ":"Сепия"};B 5t=E(x){B ex;B Gj;B 2S;B 4x;B 4j;B m5;B dX=0;B aT;B tj=I;B ta;if(x.me!=1T&&x.mc!=1T&&x.1B!=1T&&x.to!=1T){if(x.Y==1W){if(x.1B.K("gD")>-1){x.to==0?x.Y=0.5:x.Y=0.2}F{x.Y=0.15}}ex=wO(x.7V);if(x.1B.K("1F")==-1){if(J(o.6H[x.me])){o.6H[x.me].sQ()}o.6H[x.me]=G}if(x.1o==1){x.mc.1Y("2k",H)}2S=x.1B.2v(\'|\');4j=6T(x.to).2v(\'|\');4x=1y 8R();V(B i=0;i<2S.Q;i++){if(!4j[i]){4j[i]=4j[0]}if(2S[i]=="gD"){4x[i]=x.mc.g("1v")}if(2S[i]=="7F"){4x[i]=x.mc.C.1v}if(2S[i]=="y"){4x[i]=x.mc.g("y")}if(2S[i]=="x"){4x[i]=x.mc.g("x")}if(2S[i]=="Z"){4x[i]=2E(x.mc.C.Z)}if(2S[i]=="1F"){4x[i]=x.mc.g("3c")}if(2S[i]=="9e"){4x[i]=x.mc.cU}if(2S[i]=="ix"){4x[i]=x.mc.ac}if(2S[i]=="3g"){4x[i]=x.mc.g("3g")}if(2S[i]=="3c"){4x[i]=x.mc.g("3c")}if(2S[i]=="W"){4x[i]=x.mc.g("W")}if(2S[i]=="wA"){4x[i]=x.mc.26;4j[i]=2A.7Y(4j[i]);x.me=="GO"?1p("W",x.me,4x[i],4j[i],x.mc.26):\'\'}if(2S[i]=="19"){4x[i]=x.mc.g("19")}if(2S[i]=="wz"){4x[i]=x.mc.2R}4j[i]=xg(4j[i]);4x[i]=xg(4x[i])}aT=x.Y*2x/ex.Q;m5=ex.Q;if(2S.Q==1&&4x[0]==4j[0]){9i()}F{1C(m6,2A.4g(aT))}}E m6(){V(B i=0;i<2S.Q;i++){B 1H=4x[i]+(4j[i]-4x[i])*(ex[dX]?ex[dX]:0);t9(2S[i],1H);if(2S[i]=="y"){x.mc.1Y("1f",1H)}if(2S[i]=="x"){x.mc.1Y("Z",1H)}if(2S[i]=="Z"){x.mc.C.Z=1H+"px"}if(2S[i]=="1F"){x.mc.1Y("1F",1H)}if(2S[i]=="3g"){x.mc.1Y("3g",1H)}if(2S[i]=="3c"){x.mc.1Y("3c",1H)}if(2S[i]=="9e"){x.mc.cU=1H}if(2S[i]=="ix"){x.mc.ac=1H}if(2S[i]=="W"){x.mc.1Y("W",1H)}if(2S[i]=="wA"){O(x.mc,{"W":1H})}if(2S[i]=="19"){x.mc.1Y("19",1H)}if(2S[i]=="wz"){O(x.mc,{"19":1H})}}dX++;if(!tj){if(dX==m5){9i()}F{ta=1C(m6,2A.4g(aT))}}}E 9i(){tj=H;if(x.1m){if(2S[0]=="7F"||2S[0]=="Z"){1m(x.mc)}F{x.mc.1Y("2k",I)}}if(x.1B.K("1F")==-1){o.6H[x.me]=1W;4l o.6H[x.me]}V(B i=0;i<2S.Q;i++){t9(2S[i],4j[i])}3b(ta)};E t9(y,z){if(y=="gD"){x.mc.1Y("1v",z)}if(y=="7F"){x.mc.C.1v=z}}G.sQ=E(){9i()};G.vR=E(){dX=m5-1;m6();9i()};G.BT=E(x0,x1,y0,y1){B e=I;V(B i=0;i<2S.Q;i++){if(2S[i]==\'x\'&&x0!=x1){e=H}if(2S[i]==\'y\'&&y0!=y1){e=H}}e?9i():\'\'};E wO(xr){9X(xr){1j"wQ":L[0,0.Je,0.Jf,1.Jd,1.Jc,1.Ja,1.yA,0.Jb,0.Jh,0.87,0.Jm,0.Jl,1.wm,1.Jj,1.HO,1.IY,0.IZ,0.IX,0.IW,0.IT,1.IU,1.wr,1.wD,1.wr,1.wB,0.iw,0.lT,0.lT,0.lT,0.lT,1];1g;1j"aA":L[0,0.IV,0.J0,0.J1,0.J6,0.J7,0.J5,0.J4,0.J2,0.J3,0.Jp,0.JJ,0.JI,0.JG,0.wq,0.JH,0.JM,0.JN,0.JS,0.95,0.JT,0.JR,0.JQ,0.JO,0.99,0.JE,0.wo,0.iw,1];1g;1j"o7":L[0,0.Ju,0.28,0.Jv,0.Jt,0.Js,0.Jq,0.78,0.wq,0.Jr,0.Jw,0.wo,1.wm,1.JC,1.wv,1.JD,1.JB,1.wn,1.wn,1.IS,1.IR,1.Ia,1.wv,1.Ic,1.Id,1.Ij,1.Ih,1.Ig,1.wD,1.wB];1g;6X:L[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];1g}}};B B1=E(){B N=eC.Ie,ua=eC.If,tl;B M=ua.mq(/(mk|fy|6y|tm|xC)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);B M=ua.mq(/(mk|fy|6y|tm|xC|I4|l8)\\/?\\s*(\\.?\\d+(\\.\\d+)*)/i);if(M&&(tl=ua.mq(/7U\\/([\\.\\d]+)/i))!=1W)M[2]=tl[1];B mp=eC.xA;G.aF=M?M[1]:N;G.7U=M?M[2]:eC.HS;G.fe=eC.xA>1;G.mk=G.aF=="HQ";G.qm=G.aF=="xy 9.0";G.ie=G.aF=="xy"||G.aF=="HR"||G.aF=="HW";G.l8=ua.aR(/(l8)\\/?\\s*/i)>-1;G.tm=G.aF=="I2";G.6y=G.aF=="I3";G.fy=1V.fy;G.gc=ua.aR("I1 NT")>-1;G.4Z=(ua.aR(/(7J|hS|I0)\\/?\\s*/i)>-1)||(eC.HY===\'HZ\'&&mp>1);G.tv=v.xL!=1&&ua.aR(/(TV|Ik|Il|IH|IG|IF|ID|IE)\\/?\\s*/i)>-1;G.lg=v.xL!=1&&ua.aR(/(LG)\\/?\\s*/i)>-1;G.7J=ua.aR(/(7J)\\/?\\s*/i)>-1;G.hS=G.4Z&&!G.7J;G.3G=\'IK\'in 1R.lL.C;if(ua.aR(/(9K)\\/?\\s*/i)>-1){mp>0?G.9K=H:G.tv=H;if(IP(\'(3S:IO)\').IN){G.tv=H}}G.2l=(G.4Z||G.9K||(ua.aR(/(IC|IB|mk nf)\\/?\\s*/i)>-1))&&!G.tv;G.sO=G.6y||G.fy;G.2a=I;if(G.4Z){G.Ir=4A(ua.1n(ua.K(\'OS \')+3,4).22(\'5S\',\'.\'));if(G.hS&&(!\'E0\'in 1V||mp<2)){G.2l=G.4Z=I;G.tv=H}}G.kg=!G.2l;G.AY=G.2l||G.tv;if(o.1J.uw||o.1J.uD||o.1J.un||o.1J.uW||o.1J.uL){G.2a=H}};E 9n(42,6F){V(B s in 6F){if(1Q(6F[s])==\'3x\'){if(s=="2P"||s=="3i"){42[s]=6F[s]}F{V(B s2 in 6F[s]){if(1Q(42[s])!=\'3x\'){42[s]={}}if(1Q(6F[s][s2])==\'3x\'){V(B s3 in 6F[s][s2]){if(1Q(42[s][s2])!=\'3x\'){42[s][s2]={}}if(1Q(6F[s][s2][s3])==\'3x\'){V(B s4 in 6F[s][s2][s3]){if(1Q(42[s][s2][s3])!=\'3x\'){42[s][s2][s3]={}}42[s][s2][s3][s4]=6F[s][s2][s3][s4];if(s3==\'2M\'||s3==\'2L\'){42[s][s2][s3][s4]=2E(42[s][s2][s3][s4])}}}F{42[s][s2][s3]=6F[s][s2][s3];if(s2==\'2M\'||s2==\'2L\'){42[s][s2][s3]=2E(42[s][s2][s3])}}}}F{42[s][s2]=6F[s][s2];if(s==\'2M\'||s==\'2L\'){42[s][s2]=2E(42[s][s2])}}}}}F{if(s.K("Iq")>0&&4q(6F[s])===""){}F{42[s]=tM(s,6F[s])}}}L 42};B tM=E(18,5e){if(1Q(5e)==\'5p\'){5e=4q(5e);if(18.K("1t")>-1&&5e!=-1){5e=bK(5e)}}L 5e};E xJ(bc,1v){L\'4i(\'+(bc=bc.22(\'#\',\'\')).mq(1y Iy(\'(.{\'+bc.Q/3+\'})\',\'g\')).Ix(E(l){L 2E(bc.Q%2?l+l:l,16)}).8C(1v||1).lR(\',\')+\')\'}E o3(){3q{B 5j=1V[\'3z\'],x=\'Iw\';5j.8O(x,x);5j.o5(x);L H}2U(e){L I}};E uo(9Z){if(9Z){if(J(o.6H[9Z])){o.6H[9Z].sQ()}}};B 2D=E(x){B y=x;if(y){y=x.6d(0).Qs()+x.6q(1);if(y.K("5S")>-1){y=y.22(/5S/ig," ")}}B en={"of":"of","dD":"dD","xG":"xd on xe","xs":"xd 2b on xe","sK":"Va at V8","7e":"ji","xc":"No","lj":"V9","fO":"Vl","x7":"V5","b9":"UL 2L","hu":"UW gN","fH":"UX","fF":"a9 1v","fC":"a9 1t","ek":"t0 3w","eN":"t0 1t","eX":"t0 1t 2","bj":"4z fw","lJ":"VR","cX":"VV","vD":"VQ to VB","lP":"VC","gp":"Vv","gg":"O9","gj":"vS","pK":"vS","lb":"HD","la":"Vx HD","VD":"VE HD","pG":"VL HD","pM":"VM HD 4K","vW":"Ad","we":"Go to Tv Tw\'s TL","6I":"TM","5c":"TN","2a":"TF 2a","o0":"xU 2a"};if(J(en[x])){y=en[x]}if(J(o[\'tW\'+v.lE])){if(J(o[\'tW\'+v.lE][x])){y=o[\'tW\'+v.lE][x]}}if(v.tS){if(v.tS[x]){y=v.tS[x]}}L y};B 9B=E(x,y,z){if(!J(o.g8[y])&&v.pN!=1){B t=o.dB?o.dB:(v.1L?v.1L:\'\');J(v.aU)?t=v.aU:\'\';if(v.vI[x]==1&&v.zj==1&&J(v.gW)){if(x=="7w"){7q(zJ,TH)}if(J(1V["nA"+v.gW])){1V["nA"+v.gW].zE(\'u1\'+x,{1L:t});1p("vX",\'u1\'+x)}F{1p("vX Ts 2b")}}if(v.wb[x]==1){if(v.ga==1){B bo;if(v.Bm==1){if(1V.vY){bo={\'aU\':t};if(v.gV){if(1Q(v.gV)=="3x"){V(B g in v.gV){if(v.gV.2n(g)){bo[g]=v.gV[g]}}}}vY(\'1a\',\'u1\'+x,bo)}}F{if(1V.ga){bo={CJ:\'kd\',Bj:y};if(t!=\'\'){bo.Bk=t}if(v.T9==1&&!o.9u){bo.T5=1}ga(\'um.bb\',\'1a\',bo)}}}}}z?o.g8[y]=H:\'\'};E zJ(){if(J(1V["nA"+v.gW])){1V["nA"+v.gW].zE(\'T6\')}};B lY=E(1b){B x=\'\';1b=1b.22("v=","{=");if(1b.K(\'my.be/\')>-1){x=1b.1n(1b.K(".be/")+4);x.22("/","")}F{x=1b.2v(/(my.be\\/|v\\/|jZ\\/|T7\\?|4h.T8\\/um\\/[^#]*#([^\\/]*?\\/)*)\\??{?=?([^#\\&\\?]*)/)[3]}if(x!=\'\'){if(x.K("?t=")>0){v.1A=x.1n(x.K("?t=")+3);B h=0;B m=0;B s=0;if(v.1A.K("h")>0){h=v.1A.1n(0,v.1A.K("h"));v.1A=v.1A.1n(v.1A.K("h")+1)}if(v.1A.K("m")>0){m=v.1A.1n(0,v.1A.K("m"));v.1A=v.1A.1n(v.1A.K("m")+1)}if(v.1A.K("s")>0){s=v.1A.1n(0,v.1A.K("s"));v.1A=v.1A.1n(v.1A.K("s")+1)}if(h>0||m>0||s>0){v.1A=h*rV+m*60+s*1}x=x.1n(0,x.K("?t="))}}L x};B js=E(x,y,li,ev){if(x=="7w"){o.7w=H}if(ev==1){V(B yi in y){if(y.2n(yi)){if(1Q(y[yi])=="3x"){y[yi]=\'\'}}}}if(v.nj==1&&o.7w){if(v.Tf==1||li==1){nF(x,y)}F{if(y!=1T){if(1Q(y)==\'3x\'){3q{y=4O.sa(y)}2U(e){}}}if(1Q(v.2P)==\'5p\'){if(v.2P.K("{")==0){3q{v.2P=v.2P.22(/\\\'/ig,\'"\');v.2P=4O.6x(v.2P)}2U(e){cK.1p(e)}}}if(1Q(v.2P)==\'3x\'){if(J(v.2P[x])||J(v.2P[\'tB\'])){B z=x;if(!J(v.2P[x])&&J(v.2P[\'tB\'])){z=\'tB\'}if(x.K("5R")==0){if(J(v.2P[\'1U\'])){z=\'1U\'}}3q{if(y!==1T){2m(v.2P[z]+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2m(v.2P[z]+"(\'"+x+"\',\'"+v.id+"\')")}}2U(e){1p("2P",e,x)}}}F{if(v.2P==\'\'){v.2P="zL"}3q{if(y!==1T){2m(v.2P+"(\'"+x+"\',\'"+v.id+"\',\'"+y+"\')")}F{2m(v.2P+"(\'"+x+"\',\'"+v.id+"\')")}}2U(e){1p("2P",e,x,y)}}}}if(o.7w&&v.wT==1){if(o.zP){3q{o.zP.hv.kQ({1a:x,8V:y},"*")}2U(e){}}}if(v.E5==1&&li!==1){B zv={1a:x,Y:o.P?(x=="4a"?o.zx:o.P.Y()):0};if(y!=1T){zv["29"]=y}if(x=="1k"||x=="Y"){zv["1k"]=o.P.1k()}if(x=="1N"||x=="94"){zv["1N"]=v.1N}if(x=="1y"){zv["id"]=6S("A2")}1V.a3.kQ(zv,\'*\');B z=x;x=="7w"||x=="1A"||x=="4F"?z=x+"ed":\'\';x=="1z"?z="Tm":\'\';x=="4o"?z="7I":\'\';x=="4P"?z="3D":\'\';x=="94"?z="Tl":\'\';x=="4a"?z="Th":\'\';x=="Ti"?z="Tk":\'\';zv["1a"]=z;if(z!=\'\'&&z!=x){zv=4O.6x(4O.sa(zv));1V.a3.kQ(zv,\'*\')}}};B nF=E(x,y){B ev=1R.Uo(\'7C\');if(y!==1T){ev.8V=y}ev.Up(x,H,H);o.1E.Uq(ev)};G.1a=E(x,y){o.2P[x]=y};B 2I=E(x,y,R){L 6S(x,y,R)};G.2I=E(x,y,R){L 6S(x,y,R)};E 6S(x,y,R){if(J(o.U)&&1Q(x)==\'5p\'){if(o.ri==1){L}if(R){if(1Q(R)==\'5p\'){if(R.K("id:")==0){R=o.S.uq(R.1n(3),"4s");if(R){if(x=="n0"&&y=="Um"){R.CO()}}}}}if(x=="1z"||x=="3i"){if(J(y)){B aw=I;if(1Q(y)==\'5p\'){y=y.22(/(\\r\\n|\\n|\\r)/gm,"");B 2y=-1;if(y.K("[4a:")>-1&&y.tG("]")==y.Q-1){2y=y.1n(y.K("[4a:")+6,y.Q-1);2y=2E(2y.1n(0,2y.Q-1));y=y.1n(0,y.K("[4a:"));if(y==\'\'){o.U.3L(2y);o.U.2F();L}F{o.2y=2y}}if(y.K("[zN]")>-1){aw=H;y=y.22(\'[zN]\',\'\')}if(y.K("#"+v.9g)==0){y=o[o.fd[0]](y)}if(y.K("#"+v.9J)==0&&y.K(v.b7)>0){y=o[o.fd[1]](y)}if(y.K("#0")==0){y=b6(y)}if(v.bE==1){y=bE(y)}if(y.K(".92")==y.Q-4){B 4k=eD(y);4k.bN=E(){if(G.eL==4&&G.6m==4L){3q{6S(\'1z\',4O.6x(G.c0))}2U(e){}}};4k.bb();L}if(y.K("id:")==0&&J(o.1w)){B z=A5(y);if(J(o.1w[z])){o.S.Bx(z);2y>-1?o.2y=2y:\'\';L H}F{L I}}if(y.K("Ul:")==0){B z=y.1n(10);if(o.2i=="4h"){o.P.wg(z);L H}F{y=\'//my.be/\'+z}}}if(x=="1z"){o.S.BA();o.U.d0(y,1T,1T,(aw?1:0))}if(x=="3i"){o.mU=H;o.U.d0(y,1,1T,(aw?1:0));o.S.47(0,0);o.1A=I}}F{if(x=="1z"){o.U.2F()}if(x=="3i"){1Q zO==\'E\'?zO():\'\'}}}if(x=="4f"){if(J(y)){o.mU=H;o.U.d0(y,1,1)}F{o.P.pq()}}if(x=="4o"){if(o.1z){o.U.2X();o.U.lw()}}if(x=="bs"&&J(y)){o.1A&&o.7a?o.7a.zm(y):\'\'}if(x.K("Uj")==0){if(o.1U){o.1U.Uk(x.1n(6),y)}}if(x=="av"){o.av.kw();o.av=1y qV();if(v.Ay==1){o.av.92(v.vK)}F{o.av.92("UC 8S")}if(v.vt==1&&J(v.vu)){o.cA=1y vv()}}if(x=="9b"){o.S.8F();o.S.Bu("rQ")}if(x=="fI"){o.1z?o.U.2X():o.U.2F()}if(x=="2B"){v.4f=0;v.3J=0;o.P.lV();o.U.9V()}if(x=="9w"){o.Y=o.P.Y();o.U.e7()}if(x=="5W"){if(v.cR){if(v.cR.on==1&&v.cR.Uy==1){o.U.m0()}}}if(x=="nQ"&&J(y)){if(o.5L){o.5L.2I(y)}}if(x=="2V"){o.S.CC()}if(x=="TZ"&&J(y)){if(v.1U==1){if(y.K(\'js:\')==0){v.6z=y;v.gn=H;o.U.op("6z")}F{if(o.p!=\'\'){B sv=4O.6x(bT(o.p));V(B l in sv){if(sv.2n(l)){if(J(sv[l].id)){if(y==sv[l].id){v.6z=\'U0\'+(J(sv[l][\'tI\'])?\'tI\'+sv[l][\'tI\']:\'\')+y+\'5S\'+sv[l].7j;v.gn=H;o.U.op("6z")}}}}}}}}if(x=="TX"){1Q zo=="E"?zo():\'\'}if(x=="zp"&&y){v.zp=y;o.3n?o.3n.TS():\'\'}if(x=="4P"){o.U.53()}if(x=="4G"){if(J(y)){o.U.8x(y)}F{L o.4U[o.9t]}}if(x=="nb"){if(v.cR&&o.ap){if(v.cR.ap==1){L 2A.4g((o.ap.n1(TT).Q-1)/2A.4g(o.P.1k())*1i)}}}if(x=="fZ"){L o.4U}if(x=="94"){o.U.6P()}if(x=="k3"){if(J(y)){v[x]=y;o.U.h9()}}if(x=="b0"){L o.2o}if(x=="zf"){L o.ab?H:I}if(x=="5c"){L o.P?o.P.5E():I}if(x=="BY"){L v.8t==1?o.2Y.6q(0,-1):o.2Y}if(x=="aq"){L o.7z}if(x=="1N"||x=="zy"){if(J(y)){if(y>=0&&y<=1){o.U.3M(y)}}L o.3D?0:v.1N}if(x=="3D"){L J(o.3D)?o.3D:I}if(x=="U4"){o.S?o.S.Bo(y):\'\'}if(x=="bU"){y<2?y=\'\':\'\';if(o[\'u\'+y]!=\'\'){B x2=4O.6x(bT(o[\'u\'+y]));B v2=[];V(B l in v){if(v.2n(l)){if(l.K("8U")==0){v[l]=1W}}}if(1Q x2=="3x"){V(B k in x2){if(x2.2n(k)){if(k.K("8U")==0){v[k]=x2[k]}if(k=="1u"){v2[k]=x2[k]}}}}v=9n(v,v2);B rJ=I;if(o.S.aY()){o.S.7u();rJ=H}B rK=I;if(o.S.da()){o.S.aC();rK=H}o.S.43();o.S=1W;o.S=1y q5();if(o.P.6m()=="7t"){o.S.2F()}o.S.3M(v.1N);if(J(v.1L)){9H(v.1L)}if(rJ){o.S.7u()}if(rK){o.S.aC()}if(o.2a){o.S.8b()}if(18!=\'CV\'){o.S.47(o.P.Y(),o.P.1k())}ij()}}if(x=="jW"){L v.jW}if(x=="4T"){o.S.4T(H)}if(x=="4a"){if(J(y)){if(1Q y=="5p"){if(y.K("%")>-1){y=2E(y.1n(0,y.K("%")));y=o.P.1k()*y/1i}F{B mP=o.P.Y();if(o.3n&&!o.1A){if(!o.3n.kB){B f=o.3n.9P();if(f.t&&f.d){mP=f.t;o.3n.kB=H}}}if(y.K("+")==0){y=mP+2E(y.1n(1))}F{if(y.K("-")==0){y=mP-2E(y.1n(1))}}}}y=y*1;y<0?y=0:\'\';if(o.P.1k()>0){y>o.P.1k()?y=0:\'\'}if(!J(o.1U)&&!J(o.5w)&&o.P.1k()>0){o.2y=1T;o.U.3L(y,H);o.U.pC()}F{o.2y=y}}}if(x=="2a"){!o.2a?o.U.8b():\'\'}if(x=="oq"){o.2a?o.U.7R():\'\'}if(x=="U8"){L o.2a}if(x=="3w"){L o.3f+\'/\'+o.4N}if(x=="TB"){if(J(o.eg)){o.eg.Do()}}if(x=="B0"||x=="U2"){if(J(o.eg)){o.eg.Un()}}if(x=="Y"){B ne=o.P?o.P.Y():0;if(o.3n&&v.aG==1&&!o.1A&&ne==0){B f=o.3n.9P();if(f.t){ne=f.t}}L ne}if(x=="Td"){if(o.b8){6S("1z","id:"+o.b8)}if(o.zr){6S("4a",o.zr);6S("1z")}}if(x=="1k"){L o.P?o.P.1k():0}if(x=="7A"){L o.P?o.P.8X():0}if(x=="7T"){if(y){v.7T=y;o.S.hw()}}if(x=="4M"){if(J(y)){if(R){v.hd=9S(v.hd,y,R);if(o.2o.Q==2){o.U.5B(v.hd)}}F{o.U.5B(y)}}F{L o.P?o.P.pR():0}}if(x=="6I"){if(J(y)){if(R){v.rI=9S(v.rI,y,R);if(o.7z.Q==2){o.U.cv(v.rI)}}F{o.U.cv(y)}}F{L o.P?o.P.pO():0}}if(x=="zU"){L o.2i=="4h"}if(x=="tQ"){if(o.7l>0){o.lA=o.7l}o.U.d0(o.3H[o.k9])}if(x=="7t"){L o.1z}if(x=="ny"){L o.1A}if(x=="1l"){L o.1l[y]}if(x=="zV"){o.ri!=1?o.P.pd():\'\'}if(x=="id"){L v.id}if(x=="1p"){v.1p=y}if(x=="nj"){v.nj=y}if(x=="2j"){o.P.FS()}if(x=="TK"){o.P.FX();if(R){o.rS=9S(o.rS,y,R)}}if(x=="5x"){o.P.fs()}if(x=="8g"){o.P.c7()}if(x=="3r"&&v.pN!=1){cK.1p(3r)}if(x=="TE"&&o.3R){o.3R.7w()}if(x=="2c"){v.2c=y;if(J(y)){if(y.6w().Q<3&&o.4B){o.4B.9c(y*1)}F{o.U.g6(y)}}}if(x=="bp"){if(J(o.bp)){if(J(y)){o.bp.2I(y)}F{L o.bp.TD()}}}if(x=="qj"){if(o.Aj){L o.Aj}F{L I}}if(x=="5Q"){B 5Q=1M("1Z");5Q.id=y;5Q.C.59=G3;o.1J.1K(5Q)}if(x=="Cu"){if(o.4C){B 51=1M("51");B 3w=o.P.3w();51.W=3w.W>0?3w.W:o.a2;51.19=3w.19>0?3w.19:o.bJ;O(51,{"1h":"2e","1f":-51.19,"Z":-51.W,"2k":"1I"});1R.9Q.1K(51);B 9x=51.Ax(\'2d\');9x.rg(o.P.9v(),0,0,51.W,51.19);B 4M=2;B gJ=1R.1M("51");gJ.W=51.W*4M;gJ.19=51.19*4M;B gG=gJ.Ax("2d");gG.rg(o.P.9v(),0,0,51.W*4M,51.19*4M);if(v.VH==1&&J(v.rk)){!J(v.gF)?v.gF=20:\'\';!J(v.rC)?v.rC="3I":\'\';gG.46=v.gF+"px VG, VI";gG.UI=bK(v.rC);gG.Vp((v.rk=="iG"?o.iG:v.rk),v.gF,51.19*4M-v.gF-5)}9x.rg(gJ,0,0,51.W,51.19);B 3Q;3q{3Q=51.V7("9N/Tg")}2U(e){cK.1p(e.8S);L I}L 3Q}F{L I}}if(x=="3t"){L o.2i==x?o.P.jS():1T}if(x=="1G"){L o.2i==x?o.P.jP():1T}if(x=="2g"){if(!o.1z){o.P.8Z(y);L H}F{L I}}if(x=="G0"){if(J(y)){y==\'1/0\'?y=1-3N(v.k5,0):\'\';v.k5=y;o.P.mB()}F{L 3N(v.k5,0)}}if(x=="1F"){if(y){o.P.1F(y)}F{L[o.3m.x,o.3m.y,o.3o.C.Z,o.3o.C.1f]}}if(x=="1L"){if(J(y)){J(y)?v.1L=y:\'\';o.U.9H(\'1L\');L H}F{L v.1L}}if(x=="Vc"){o.U.yW()}if(x=="2H"){if(y){!o.h4?o.h4=[]:\'\';if(1Q(y)==\'3x\'){y=o.h4.8C(y);x="X"}}}if(x=="X"){if(y){if(1Q(y)==\'3x\'){3q{o.U.5Z(y);L H}2U(e){L I}}F{if(y.K(".92")==y.Q-4||y.K(".92?")>0){B 4k=eD(y);4k.bN=E(){if(G.eL==4&&G.6m==4L){3q{6S(\'X\',4O.6x(G.c0))}2U(e){}}};4k.bb();L H}}}}if(x=="7h"){o.S?o.S.aL():\'\'}if(x=="cX"){o.S?o.S.ch():\'\'}if(x=="5U"){o.S?o.S.ib(y):\'\'}if(x=="e8"){o.P?o.P.e8():\'\'}if(x=="k6"){if(J(y)&&J(o.1w)){!o.1z?v.3J=0:\'\';V(B j in o.1w){if(o.1w.2n(j)){if(o.1w[j].ca==y){y=j}}}if(J(o.1w[y])){o.S.By(y);L H}F{L I}}}if(x=="Vg"){B 1H=[];if(J(o.1w)){V(B j in o.1w){if(o.1w[j].4V&&o.1w[j].qD==-1){1H.2H({1L:o.1w[j].1L,id:o.1w[j].id})}}}L 1H}if(x=="A2"){if(o.3y){L o.1w[o.3y].ca?o.1w[o.3y].ca:o.3y}}if(x=="Vq"){if(o.1w){L 4E.3U(o.1w).Q}F{L-1}}if(x=="jI"){if(J(o.jI)){L o.jI}}if(x=="Vi"){o.S.kf()}if(x=="1u"){o.S.hk()}if(x=="Vj"){if(o.1U){L H}F{L I}}if(x=="Vk"){if(o.1U){L Ab()}F{L I}}if(x=="V4"){if(o.1U){L o.1U.4o()}F{L I}}if(x=="UO"){if(o.1U){L o.1U.Aa()}F{L I}}if(x=="UP"){if(o.1U){o.1U.UQ()}F{L I}}if(x=="UN"){if(o.1U){o.1U.4P()}F{L I}}if(x=="5T"){v.5T=9S(v.5T,y,R);o.P.5T()}if(x=="as"){if(J(R)){v.as=9S(v.as,y,R)}F{if(J(y)){y==\'0/1\'?y=1-v.as:\'\';v.as=y}F{L v.as}}}if(x=="5h"){if(J(R)){v.5h=9S(v.5h,y,R)}F{if(J(y)){v.5h=y}F{L v.5h}}}if(x=="nN"||x=="jq"){B z="eG";x=="jq"?z="jA":"";if(J(R)){v.X[z]=9S(v.X[z],y,R)}F{if(J(y)){y==\'0/1\'?y=1-v.X[z]:\'\';v.X[z]=y}}L v.X[z]}if(x=="hd"){if(o.2o.Q==2){v.hd=o.2o[o.3e];v.hd=9S(v.hd,y,R);if(o.2o[0]==v.hd){o.U.5B(0)}F{o.U.5B(1)}}}if(x=="v"&&y){if(y.K(\'3i\')==0||y.K(\'bk\')==0){L}L v[y]}if(x.K("e2:")==0){B xx=x.1n(7);if(1Q(y)==\'3x\'&&1Q(v[xx])==\'3x\'){V(B yy in y){if(y.2n(yy)){v[xx][yy]=y[yy]}}}F{if(x.K(\'DV\')==-1){v[xx]=y}}L H}if(x.K("1D:")==0){o.S.Ct(x.1n(5),y)}if(x=="UH"){L o.P?o.P.bu():\'\'}if(x=="UJ"){L o.7U+\' \'+o.iH}if(x=="iH"){L o.iH}if(x=="oJ"){L o.oJ}if(x=="zW"){L o.zW}if(x=="5g"){L o.5g}if(x=="Vt"){L o.1U?o.A6:1T}if(x=="9q"){o.U.oe();o.ri=1;v.1X.on=0;o.1E.1P=\'\'}}F{L I}};E 9S(x,y,R){B z=4q(y)+\'\';if(y.K("/")>0){B y2=y.2v("/");if(y2.Q==2){if(x==4q(y2[0])){z=4q(y2[1]);if(R){R.bw(1)}}F{z=4q(y2[0]);if(R){R.bw(0)}}}}L z}E eD(x){B 4k=1y xR();4k.7S(\'xS\',x,H);L 4k}E A5(y){B z=y.1n(3);if(o.1w){V(B j in o.1w){if(o.1w.2n(j)){if(o.1w[j].ca==z){z=j}}}}L z}E Ab(){B x;if(o.1U){if(o.1U.uX()){x=o.1U}}if(!x&&o.5w){x=o.5w}if(x){B y={is:o.3E,1l:x.8V("VP"),7U:x.8V("7U"),VW:x.8V("Am"),1b:o.zg+(x.8V("Ac")?x.8V("VZ")+x.8V("Ac"):\'\'),1B:x.8V("VK"),3i:x.8V("3i"),Y:(o.P?o.P.Y():\'\'),1N:x.UV(),id:o.A6};if(o.3E=="6z"){y.Tu=o.TO}L y}}B 1M=E(x){B y=x;x==\'1Z\'||x==\'vk\'?y=\'5I\':\'\';B z=1R.1M(y);if(x==\'vk\'){O(z,{"6t":"3S","2k":"4p"})}L z};B 1p=E(a,b,c,d,e,f,g){if(v.1p==1||v.rB==1){B x=a+(b!=1T?" "+b:"")+(c!=1T?" "+c:"")+(d!=1T?" "+d:"")+(e!=1T?" "+e:"")+(f!=1T?" "+f:"")+(g!=1T?" "+g:"");cK.1p("A8"+(v.s9==1?"2":"")+": "+x);if(v.rB==1&&J(1R.8D("yl"))){1R.8D("yl").1P+=x+\'<br/>\'}}};B Ee=E(){if(v.sD==1&&J(v.rt)&&v.rt!=\'\'){B x=1R.1M(\'er\');x.yn=\'TI\';x.9o=\'mj://sD.Tc.9U/O?iS=\'+v.rt.22(/,/ig,"|").22(/ /ig,"+");1R.Tn.1K(x)}};B Dz=E(1Z,7r){B x=["tk","dS","l6","fG","df","To"];V(B y=0;y<x.Q;y++){B z=1Z.tn("2w "+x[y]);if(z.Q>0){V(B y2=0;y2<z.Q;y2++){z[y2].C.5y=7r}}}};B 4z=E(Y){Y<0?Y=0:\'\';B yu=o.P.1k>=dw?H:I;B yw=o.P.1k>=rV?H:I;B 6g=2A.7Y(Y/60);B 7d=2A.7Y(Y-6g*60);B 7H=2A.7Y(6g/60);B gK=2A.7Y(7H/24);6g=6g-7H*60;if(gK>0){7H=7H-gK*24}if(v.kA==1&&o.P.5E()){B d=1y 6K();L 6T(1y 6K(d.9h()+Y*2x).yq())}F{L 6T((gK>0?gK+\':\':\'\')+(7H>0||yw?7H+\':\':\'\')+((7H>0||yu)&&6g<10?\'0\':\'\')+6g+\':\'+(7d<10?\'0\':\'\')+7d)}};B hB=E(x){B 7d=2A.7Y(x);B 6g=2A.7Y(7d/60);B 7H=2A.7Y(6g/60);6g=2A.7Y(6g%60);7d=2A.7Y(7d%60);7H>0&&6g<10?6g="0"+6g:"";7d=7d>=0?((7d>=10)?7d:"0"+7d):"aH";B 5Y=(7H>0?7H+":":"")+(6g>=0?6g:"0")+":"+7d;if(v.kA==1&&o.P.5E()){B d=1y 6K();L 6T(1y 6K(d.9h()+x*2x).yq())}F{L 5Y}};B Us=E(){L Ub((1V.8T!=1V.a3.8T)?1R.sd:1R.8T.9o)};B vd=E(x,y,z){B t;if(!ye(x)&&y){t=1R.1M(\'l9\');y=="Uc"?y=x:\'\';t.2Q=y.K(\'//\')==-1?\'//\'+y:y;t.Ue=1;if(z){t.6Q=z}B s=1R.c6(\'l9\')[0];s.5u.sw(t,s)}L t};B ye=E(y){B x=I;B nw=1R.c6(\'l9\');V(B i=0;i<nw.Q;i++){if(nw[i].2Q.K(y)>-1){x=H}}L x};B nB=E(x,y){x=x.22(\'#\',\'\');B r=2E(x.Q==3?x.6q(0,1).ey(2):x.6q(0,2),16);B g=2E(x.Q==3?x.6q(1,2).ey(2):x.6q(2,4),16);B b=2E(x.Q==3?x.6q(2,3).ey(2):x.6q(4,6),16);if(y){L\'4i(\'+r+\', \'+g+\', \'+b+\', \'+y+\')\'}F{L\'U7(\'+r+\', \'+g+\', \'+b+\')\'}};B O=E(e,o){if(J(e)){V(B 18 in o){if(o.2n(18)){if(o[18]!=\'U5\'&&o[18]!=1T){if(1Q o[18]==\'Ua\'&&18!=\'1v\'&&18!=\'59\'){o[18]+=\'px\'}if((18.K("1t")>-1||18.K("Dy")>-1)&&o[18].K("#")==-1&&o[18].K("4i")==-1){o[18]=\'#\'+o[18]}if(18=="2O"){e.C[\'-ms-\'+18]=o[18];e.C[\'-l3-\'+18]=o[18];e.C[\'-3G-\'+18]=o[18];e.C[\'-o-\'+18]=o[18]}if(18=="uu"){if(o[18].K(" ")>-1){o[18]=\'"\'+o[18]+\'"\'}}if(18=="5Q-ic"){e.C.Ud(18,o[18],\'5D\')}F{e.C[18]=o[18]}}}}}};B D7=E(x,7r,b1,b2){B y=3N(b1,1)*1;B z=3N(b2,1)*1;O(x,{"2u":"U3-2T-5k(-TR,"+7r+","+7r+" "+y+"px,4i(0,0,0,0),"+y+"px,4i(0,0,0,0) "+(y+z)+"px)"})};B bK=E(c){L c.1n(0,1)!=\'#\'?c="#"+c:c};B E4=E(x,1t,y){!1t?1t=\'#eH\':\'\';1t=bK(1t);B r=5d(jG,TY);x=x.22(/\\(xH\\)/g,r);x=x.22(/\\(1t\\)/g,1t);B xV=x.1n(0,x.K(\'|||\'));B sn=x.1n(x.K(\'|||\')+3);B ar=\'\';if(o.1l.3G){ar=sn.22(/5F:/g,"-3G-5F:");ar=ar.22(/5F-/g,"-3G-5F-");ar=ar.22(/@yd/g,"@-3G-yd");ar=ar.22(/2O/g,"-3G-2O")}y.1P=xV;uP(ar+sn)};B Ug=E(x,y){B z;V(B i=0;i<x.Q;i++){if(x[i]){if(x[i].K(y)>-1){z=H}}}L z};B uP=E(x){if(o.O){if(o.O.xT){o.O.xT.Ux=x}F{o.O.1K(1R.EU(x))}}};B pc=E(x){O(x,{"1h":"2e","1f":0,"Z":0,"W":"1i%","19":"1i%"})};B rE=E(x){O(x,{"7g":"1I"})};B 4k=E(y,z){B x=1y xR();x.7S(\'xS\',y,H);x.bN=z;x.bb()};B Uv=E(x){if(x){V(B i=0;i<5;i++){if(x.Uu=="Uz"){1g}F{if(x.xY){x=x.xY}}}}L x};B 8r=E(z){B 8r=1R.1M("3Q");if(o.j3.K(z)>-1){o.j3.2H(z);if(z.K("?")>0){z=z+\'&\'+2A.5d()}F{z=z+\'?\'+2A.5d()}}F{o.j3.2H(z)}8r.6h(\'2Q\',z);8r.6h(\'19\',\'6f\');8r.6h(\'W\',\'6f\')};B 3Z=E(e,o){V(B 18 in o){if(o.2n(18)){e.6h(18,o[18])}}};B 9q=E(e){if(e){3q{e.5u.3d(e);e=1W}2U(e){}}};B 5d=E(8G,5N){L 2A.7Y(UD.Q>1?(5N-8G+1)*2A.5d()+8G:(8G+1)*2A.5d())};B jy=E(){L 2A.5d().6w(36).UB(2,12)};B sy=E(x,y){x=4E.3U(x).Ut(E(42,18){if(18!=y){42[18]=x[18]}L 42},{});L x};B 4q=E(x){if(1Q x=="5p"){L x.22(/^\\s+|\\s+$/gm,\'\')}F{L x}};B 5U=E(x,y,z){B r=I;if(x){if(x.K(y)>-1){B r=x.1n(x.K(y)+y.Q);if(z){if(r.K(z)>-1){r=r.1n(0,r.K(z))}}}}L r};B TQ=E(x,n){if(n==0){L"#0"+aN.e(x)}if(n==-1){L aN.e(x)}if(n==1){L"#1"+sl(aN.e(x),1)}};B qU=E(x){if(v[x]!=""){if(1Q v[x]!="5p"){o[x+\'o\']=v[x]}F{if(v[x].K("[{")==0){3q{v[x]=v[x].22(/ba\'qt/ig,\'"\');o[x+\'o\']=2m(v[x])}2U(e){}}}}};B 5C=E(x){L 6T.sA(x)};B bT=E(x){if(x.1n(0,2)=="#1"){L aN.d(sl(x.1n(2),-1))}F if(x.1n(0,2)=="#0"){L aN.d(x.1n(2))}F{L x}};B pF=E(x){if(x){if(x.K(\'3v\')==-1&&x.K(\'.\')==-1&&x.Q>1i&&x.K(\'29:\')==-1){x=\'29:9N/sG;i1,\'+x}}L x};B 1m=E(x){x?x.C.5g="3j":\'\'};B 1o=E(x){x?x.C.5g="3W":\'\'};B 2W=E(x){x?x.C.2k="1I":\'\'};B 5V=E(x){x?x.C.2k="4p":\'\'};B 6b=E(x){L x?x.C.5g!="3j"&&x.C.2k!="1I":I};B 4X=E(s){if(1Q s=="5p"){if(s.K("px")>0){s=s.1n(0,s.K("px"))}}L 2E(s)};B 3j=E(x){L x.C.2k=="1I"};B f0=E(bc){if(bc){B kG=2E(bc,16);B r=(kG>>16)&sE;B g=(kG>>8)&sE;B b=kG&sE;L r+","+g+","+b}};B 4H=E(o,x,y){o[x+\'1f\']=0;o[x+\'2f\']=0;o[x+\'2J\']=0;o[x+\'Z\']=0;if(J(o[y])){B z=o[y].2v(" ");if(z.Q==4){o[x+\'1f\']=z[0]?4A(z[0]):0;o[x+\'2f\']=z[1]?4A(z[1]):0;o[x+\'2J\']=z[2]?4A(z[2]):0;o[x+\'Z\']=z[3]?4A(z[3]):0}}L o};B Tp=E(x){if(x){x=x.22(/ /ig,\'px \')}L x+\'px\'};B kI=E(x,y){L v[x]&&v[x]!=\'\'?v[x]:y};B fp=6T.sA(65,66,67,68,69,70,71,72,73,74,75,76,77,97,98,99,1i,y7,yA,Tx,Ty,TC,UG,TA,Tz,UF,78,79,80,81,82,83,84,85,86,87,88,89,90,Vu,VO,Vz,VA,VN,VS,W0,W2,W3,W4,qW,VX,VY);B aN={aa:fp+"Vy+/=",e:E(e){B t="";B n,r,i,s,o,u,a;B f=0;e=aN.z2(e);kv(f<e.Q){n=e.9D(f++);r=e.9D(f++);i=e.9D(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(r7(r)){u=a=64}F if(r7(i)){a=64}t=t+G.aa.6d(s)+G.aa.6d(o)+G.aa.6d(u)+G.aa.6d(a)}L t},d:E(e){B t="";B n,r,i;B s,o,u,a;B f=0;e=e.22(/[^A-yX-z0-9\\+\\/\\=]/g,"");kv(f<e.Q){s=G.aa.K(e.6d(f++));o=G.aa.K(e.6d(f++));u=G.aa.K(e.6d(f++));a=G.aa.K(e.6d(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+5C(n);if(u!=64){t=t+5C(r)}if(a!=64){t=t+5C(i)}}t=aN.z3(t);L t},z2:E(e){e=e.22(/\\r\\n/g,"\\n");B t="";V(B n=0;n<e.Q;n++){B r=e.9D(n);if(r<h3){t+=5C(r)}F if(r>V2&&r<V1){t+=5C(r>>6|UT);t+=5C(r&63|h3)}F{t+=5C(r>>12|yY);t+=5C(r>>6&63|h3);t+=5C(r&63|h3)}}L t},z3:E(e){B t="";B n=0;B r=0;B c1=0;B c2=0;kv(n<e.Q){r=e.9D(n);if(r<h3){t+=5C(r);n++}F if(r>US&&r<yY){c2=e.9D(n+1);t+=5C((r&31)<<6|c2&63);n+=2}F{c2=e.9D(n+1);c3=e.9D(n+2);t+=5C((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}L t}};B sl=E(s,n){s=s.22(/\\+/g,"#");s=s.22(/#/g,"+");B a=z8(o.y)*n;if(n<0)a+=fp.Q/2;B r=fp.1n(a*2)+fp.1n(0,a*2);L s.22(/[A-yX-z]/g,E(c){L r.6d(fp.K(c))})};B z8=E(x){x=x.2v(5C(61));B hs=\'\';B c1=5C(qW);B rX;V(B i in x){if(x.2n(i)){B s0=\'\';V(B j in x[i]){if(x[i].2n(j)){s0+=(x[i][j]==c1)?5C(49):5C(48)}}rX=2E(s0,2);hs+=5C(rX.6w(10))}}L hs.1n(0,hs.Q-1)};B J=E(x){L x!=1W&&1Q(x)!=\'1T\'&&x!=\'1T\'};B 3N=E(x,y){L J(x)?x:y};B 4I=E(x){L J(x)&&x!=-1&&x!=\'\'};B nq=E(x){if(1Q x=="3x"){x=4O.6x(4O.sa(x))}L x};B eo=E(el){L el.yD().Z+(1V.yE?1V.yE:1V.Vd)};B ee=E(x){v.T2==1&&4I(v.yC)?x=v.yC:\'\';L x};B iu=E(el){PP fG=el.yD();L fG.1f+1V.PQ};B 7x=E(x){if(x!=\'\'){if(v.PR==1){1V.7S(x)}F{1V.8T.9o=x}x=\'\'}};B uy=E(){if(v.4n==1){o.4n?o.1J.3d(o.4n):\'\';o.4n=1W}};B AR=E(){B mC=I;if(o.1l.tv){1p("tv")}G.9H=E(x){o.S?o.S.1L(x):\'\'};G.6n=E(x){if(x){if(1Q(x)==\'5p\'){x=x.22(/(\\r\\n|\\n|\\r)/gm,"");if(x.K("[{")==0){3q{x=x.22(/ba\'qt/ig,\'"\');x=4O.6x(x)}2U(e){x="zk 4O"}}}if(1Q(x)==\'3x\'){o.1w=[];o.h4=nq(x);o.X=qJ(x);if(v.X.PO==1&&!v.4Y){B 3U=4E.3U(o.1w);B sj=3U.6q(-1)[0];sj?v.4Y=sj:\'\'}B y=Aq();if(y){x=y.3i;o.dB=y.1L;o.S?o.S.CE(y.1L):\'\';if(J(y.2g)){if(o.P){o.P.8Z(y.2g)}F{v.2g=y.2g}}if(J(y.3a)){y.2c=y.3a}if(J(y.1A)){v.1A=o.2y=y.1A}7n("yR");if(J(y.id)){o.3y=y.id}B sx=["2c","jW","jZ","1b","yS","yP","gw","k3","aU","5W","7T","6C","4F","4l","aP"];if(J(v.b3)){if(v.b3.PK==1&&v.b3.je==1){sx.2H("1L");sx.2H("t1");sx.2H("t2");sx.2H("t3");sx.2H("t4");sx.2H("t5")}}V(B i=0;i<sx.Q;i++){if(J(y[sx[i]])){v[sx[i]]=y[sx[i]]}}if(sx.K(\'1L\')>0){if(v.b3.CA==1){o.kz=v.b3.Cv;o.U.ly(y)}o.U.9H(\'1L\')}if(o.S){o.S.5Z(o.X)}if(o.3h){o.3h.m9()}}F{}}if(1Q(x)==\'5p\'){x=p1(x);if(x.K("#"+v.9g)==0){x=o[o.fd[0]](x)}if(x.K("#"+v.9J)==0&&x.K(v.b7)>0){x=o[o.fd[1]](x)}if(x.K("#0")==0){x=b6(x)}x=p1(x);if(v.bE==1){x=bE(x)}if(x==\'\'){1p("4J 3i");o.9R=H;js("2b","4J")}o.2o=[];o.8i=[];o.7z=[];o.k9=0;o.3e=0;o.7l=0;v.hg==\'\'?v.hg=\',\':\'\';if((x.K("]")>-1&&x.K("[")>-1)||J(v.b0)){o.3H=x.2v(v.hg)}F{o.3H=[x]}o.aq=[];if(J(v.b0)){B b0=v.b0.2v(v.hg)}if(o.3H.Q>0){B q=-1;V(B i=0;i<o.3H.Q;i++){o.3H[i]=4q(o.3H[i]);if(o.3H[i]!=\'\'){if(o.3H[i].K("[")==0&&o.3H[i].K("]")>1){o.2o[i]=o.3H[i].1n(o.3H[i].K("[")+1,o.3H[i].K("]")-1);o.3H[i]=o.3H[i].1n(o.3H[i].K("]")+1)}F{if(J(v.b0)){o.2o[i]=J(b0[i])?b0[i]:\'\'}F{o.2o[i]=i+1}}B is=0;if(J(v.4r)&&q==-1){if(6T(v.4r).K("jT:")==0){if(v.4r.1n(4)*1==i){is=1}}if(v.4r==o.2o[i]){is=1}if(v.4r=="5N"&&i==o.3H.Q-1){is=1}}if(J(o.4r)){if(o.4r==o.2o[i]){is=1;q=i}}if(is==1){o.k9=i;o.3e=i}o.3H[i]=vr(o.3H[i])}}}F{o.3H[0]=vr(o.3H[0])}L o.3H[o.k9]}}F{L x}};E vr(x){if(J(v.ml)&&x.K("//")==-1){x=v.ml+x}L x};G.yW=E(){if(o.X){B x=o.X.z4();V(B i=0;i<x.Q;i++){x[i].bq=i}o.X=x;o.S.5Z(o.X)}};G.5Z=E(x){if(1Q(x)==\'3x\'){o.1w=[];o.h4=nq(x);o.X=qJ(x);if(o.S){o.S.5Z(o.X)}}};G.d0=E(x,y,z,no){!J(y)?v.3J=1:\'\';!J(z)?v.4f=0:\'\';v.1k=1T;v.4F=1T;v.4l=1T;o.9R!=2?o.9R=I:\'\';o.9f=I;o.8g=I;o.a4=0;o.g8=[];o.oM=I;o.qf=I;o.Ga=I;o.mI=[I,I,I];o.PS=jy();o.AU=0;o.ap?o.ap=[]:\'\';o.2i!=\'ba\'&&o.4B?o.4B.6C():\'\';if(o.cA){o.cA.6C()}if(o.P.6m()=="7t"){G.9V()}if(o.5U&&o.9A){o.S.ib()}if(J(o.2V)){o.2V.43()}if(J(o.bC)){3b(o.bC)}js("1y");if(v.1U==1&&no!=1){o.U.eR();o.U.eR(\'6z\')}x=G.6n(x);if(y==1){o.2i=\'\'}o.P.6n(x);if((o.1l.2l||o.1l.6y)&&!J(y)){o.U.2F()}if(J(o.ik)){o.3m={x:1,y:1,x0:1,y0:1};o.P.mB()}9B("1z","2F");o.P.hj();o.S.h6();o.S.v6();o.S.4u();o.dH?o.dH.C0():\'\'};G.ly=E(x){B y=I;if(x&&o.kz){v.1L=o.kz;V(B i=1;i<6;i++){if(J(x[\'t\'+i])){v.1L=v.1L.22("{"+i+"}",x[\'t\'+i]);y=H}}}L y};G.cs=E(){if(v.3J==1){if(v.lm==1){1C(E(){o.U.2F()},4d)}F{G.2F()}v.PT=1}h9()};G.h9=E(){h9()};E h9(){if(v.sY==1){if(1Q xQ!=="1T"){o.th=1y xQ()}}}G.hj=E(){B x=I;if(o.1l.2l){x=H;if(v.B5==1&&o.1l.7J){x=I}if(v.B4==1&&o.1l.hS){x=I}if(v.B3==1&&o.1l.4Z){x=I}if(v.PZ==1&&o.1l.9K){x=I}}if(v.Q0==1&&o.1l.tv){x=H}L x};G.oT=E(){o.P.3M(v.1N);if(o.3D){o.P.53()}o.9f=H;o.S?o.S.4u():\'\';if(!o.1z&&!o.1A){v.5L==1?o.5L.2I("4o"):\'\'}if(o.4R&&o.4C){o.3R.xU();o.3R.Go()}if(v.1U==1){if(v.zG!=1&&v.gn==1){!J(o.1U)?mS("6z","9f"):\'\'}}};G.w0=E(){!o.hq?9p(H):\'\'};E 9p(x){o.hq=H;if(o.S){if(o.S.aY()){o.S.7u()}}if(o.3h){o.3h.fj()}!x?o.P.2F():\'\';if(!o.oM){1C(E(){o.P.hj()},4d)}!o.1z?o.S.2F():\'\';v.5L==1?o.5L.2I("1z"):\'\';v.1U==1?o.U.eR(\'d2\'):\'\';if(o.1l.2l){o.S.eQ()}if(J(o.2V)){o.2V.PX()?o.2V.yp():\'\'}if(v.PU==1&&J(v.gw)&&o.dt){if(v.gw!=\'\'&&!J(o.fS)){o.fS=7q(p2,v.ze*2x);p2()}}}G.2F=E(aw){if(!o.1z&&o.P){o.mM=H;B 2B=I;if(o.2i=="4h"){if(!o.P.lO()&&v.3J!=1&&v.4f==1){2B=H;if(1V[\'6V\']){v.3J=1;o.P.pd()}}}if(v.7e==1&&v.xa==0){o.U.ji();2B=H}if(o.9R||2B){if(o.9R){8h("7j")?jm(2):\'\'}}F{o.mU=I;A0(!o.1A);o.av.kw();if(!o.1A){js("1A");o.1A=H;if(v.1u.v3==1){1C(E(){o.S.nM()},1i)}if(v.1u.8I>0&&v.3J==1){o.eu=H;1C(uU,v.1u.8I*2x)}if(v.PJ==1&&v.PI){Pw()}V(B i=0;i<o.aE.Q;i++){if(v[\'AX\'+o.aE[i]]==1){3z.8O("BD"+o.aE[i],6K.iU())}}if(v.Px==1&&v.Py){Pv("1A")}js("1y");o.S.4u();9B("1z","2F");o.ab?9B("zf","Pr",1):\'\'}F{9B("Aa","Pt")}if(v.Ag==1&&!o.2a){B dd=1y 6K();B tt=dd.9h();if(tt-o.9u<do){if(v.As==1){o.1l.2l?G.8b():\'\'}F{G.8b()}}}if(o.7b){if(v.ur==1){5V(o.2c)}}if(o.cA){o.cA.6C()}if(aw!=1&&8h("7j")||8h("6l")){jm(2)}F{if(v.7x==1&&J(v.Au)&&!J(3r.7x)){7x(v.Au);2B=H}if(!2B){1p("2F");if(o.2i!=\'PA\'){o.P.1k()>0?o.S.47(o.P.Y(),o.P.1k()):\'\'}if(!o.uT){o.uT=H;if(v.1u.8I>0&&v.3J==1){o.eu=H;1C(uU,v.1u.8I*2x)}}B jl=I;if(o.P.Y()>1&&v.jf==1&&aw!=1&&!8B()&&!J(o.1U)&&!J(o.5w)){jl=8h("d2")}if(jl){8B()?9p(I):\'\'}F{9p(I)}}}}}F{o.P?o.P.2F():\'\'}};E uU(){o.eu=I;o.S.4u()}G.2X=E(){if(o.1z){o.mM=I;1p("2X");o.P.2X();o.S.2X();js("4o");v.r8?7E():\'\';v.pQ==1?jo():\'\';v.5L==1?o.5L.2I("4o"):\'\';if(o.7b){if(v.ur==1){2W(o.2c)}}if(!J(o.1U)&&!J(o.5w)&&v.jf==0){8h("d2")}o.hq=I}};G.53=E(){o.P.53();o.S.53();o.3D=H;js("4P")};G.6P=E(){o.P.6P();o.3D=I;o.S.6P();o.P.3M(v.1N);js("94")};G.3M=E(x,y){x<0.PG?x=0:\'\';x>1?x=1:\'\';if(x<=0){G.53();v.1N=0;x=0}F{if(o.3D){G.6P()}v.1N=x}js("1N",x);o.S.3M(x,y);o.P.3M(x)};G.8F=E(){o.S.8F()};G.6G=E(){o.S?o.S.6G():\'\'};G.PH=E(){G.6G()};G.oS=E(){o.U.6D();G.6G()};G.47=E(Y,1k){if(o.3n&&!o.1A){B f=o.3n.9P();if(f.t&&f.d){Y=f.t}}o.S?o.S.47(Y,1k):\'\'};G.qM=E(Y,1k){if(J(o.2y)&&o.2i!="4h"&&!o.P.5E()){o.U.3L(o.2y,I);o.2y=1T}};G.fv=E(){B d=1y 6K();o.9u=d.9h();B x=I;if(o.S.aY()&&v.1d.8P!=1){o.S.7u();x=H}if(o.3h){if(o.3h.PF()){o.3h.fj();x=H}}if(v.X.8P==0){if(o.S.da()&&v.X.eB==1){o.S.aC();x=H}}if(v.7x==1&&J(v.zu)&&!J(3r.7x)){7x(v.zu);x=H}if(!x){if(v.1X.on==1&&v.1X.2G==1&&v.1X.ob==1){6W(\'1z\',(o.1z?0:1))}G.cq()}};G.BF=E(){if(o.S.aY()){o.S.7u()}};G.cq=E(){if(o.P.6m()=="7t"){G.2X()}F{G.2F()}91()};G.3L=E(bx,g1){if(bx<o.P.1k()){if(v.eq.PE==1){if(bx>o.P.Y()){L}}if(v.4l>0){bx<v.4l?bx=v.4l:\'\'}o.zx=bx;o.P.3L(bx);if(g1){o.S.3L(bx,o.P.1k())}o.ge=H;o.gO=o.P.Y();91(o.gO)}};G.PB=E(1b,44,zi){if(o.P.6m()=="7t"&&o.gv!=\'F3\'){2X();if(o.2a&&zi){o.U.7R()}}1V.7S(1b,44)};G.m0=E(){B x=o.P.bu();if(J(v.5W)){x=v.5W}if(x!=\'\'){js("5W");B gc=1V.7S(x,(v.PD==1?\'Q1\':\'uC\'));gc.6e()}};G.6D=E(){B Y=o.P.Y();B 1k=o.P.1k();o.S.hO(Y,1k)};G.pC=E(){B Y=o.P.Y();B 1k=o.P.1k();B aK=1k>0?Y/1k:0;if(!o.ge){o.S?o.S.hO((o.2y>0?o.2y:Y),1k):\'\'}F{Y!=o.gO?o.ge=I:\'\'}if((v.ga==1||v.zj==1)&&1k>0){nk("uB","2F 25%",aK,0.25);nk("vm","2F 50%",aK,0.50);nk("vc","2F 75%",aK,0.75)}V(B i=0;i<3;i++){if(!o.mI[i]){if(aK>=i*0.25+0.25){vA(i)}}}v.vj==1?1p(1,Y,1k):\'\';if(v.9w==1){if(o.1z){B z=I;B n2=I;if(v.zD==1){if(!o.P.5E()){z=H}}if(Y>0){if(Y==o.Y&&!z){n2=H}F{o.a4=0}o.Y=Y}F{if(v.Qp==1){B ld=o.P.8X();v.vj==1?1p(2,ld,o.n4):\'\';if(!z){if(ld==o.n4){n2=H}F{o.a4=0}}o.n4=ld}}if(n2){o.a4++;v.vj==1?1p(3,o.a4):\'\';if(o.a4==v.oH*(2x/o.pf)){o.U.e7()}}}}if(v.cR){if(v.cR.ap==1&&1k>0){!o.ap?o.ap=[]:\'\';o.ap[2A.4g(Y)]=1}}if(v.1U==1){if(v.zG!=1&&v.gn==1){!J(o.1U)?mS("6z",Y,1k):\'\'}if(v.QA!=1&&v.nL==1){!J(o.1U)?mS("dK",Y,1k):\'\'}}if(v.vz==1&&v.vh>0){if(Y>=v.vh){if(!J(o.1U)){if(8h("6l")){o.P.2X();o.S.2X()}v.vh=0}}}7n("1z");if(v.7e==1&&v.xa>-1){Qz(Y,1k)}if(o.7b){91(Y)}if(o.5j&&v.aG==1){if(o.3n){o.3n.nY(Y,1k)}}if(o.9A){o.5U?o.5U.1z(Y):\'\'}if(J(v.4F)){if(v.4F>0&&Y>v.4F){if(o.2i=="4h"){o.P.2X();o.P.3L(v.1A>0?v.1A:0)}F{o.P.lV();o.U.9V()}v.1A>0?o.2y=v.1A:\'\';o.U.np()}}if(J(v.6C)){B r1=v.6C.2v(",");V(B i=0;i<r1.Q;i++){B r2=r1[i].2v("-");if(r2.Q==2){if(Y>r2[0]&&Y<r2[1]){o.P.3L(r2[1])}}}}};E vA(x){o.mI[x]=H;if(v.aG==1&&v.wi==1&&v.w7==x){if(o.5j&&o.3y){o.3n?o.3n.Ql(o.3y):\'\'}}}E nk(x,y,t,p){if(!J(o.g8[y])){if(t>p){9B(x,y,1)}}};G.e7=E(){o.a4=0;J(o.bC)?3b(o.bC):\'\';if(v.Q9==1){js("9w")}F{o.2y>0||o.P.5E()?\'\':o.2y=o.P.Y()+(v.Qa>0?1:0);B vU=o.S.da();js("9w");o.P.9w();vU&&v.X.eB==1?o.S.kf():\'\'}};G.wj=E(){o.S.hO(0,0);o.S.uZ(0,0);o.U.47(0,0);o.S.6G()};G.v4=E(){if(o.P){B Y=o.P.8X();if(v.Q7==1){js("8X",Y)}B 1k=o.P.1k()}o.S?o.S.uZ(Y,1k):\'\'};G.np=E(){js("Q6");if(v.as==1){if(o.2i=="4h"){G.9V()}v.1U==1?o.U.eR(\'7j\'):\'\';if(v.1A>0){o.U.3L(v.1A)}G.2F()}F{if(o.P.5E()||o.2i=="4h"){G.9V()}F{if(v.vO==1){o.U.3L((v.1A>0?v.1A:0),H);if(o.1l.ie){o.P.2X()}}}o.S.8u();v.vz==1?v.Q5=1:\'\';if(8h("jB")||8h("qZ")){}F{9i()}}};G.8b=E(){B 2B=I;B 2b=I;o.xj=I;o.aJ=H;1C(E(){o.aJ=I},iN);V(B x in o.6H){if(o.6H.2n(x)){if(J(o.6H[x])){3q{o.6H[x].vR()}2U(e){}}}}3q{o.cz=H;if(((o.1l.4Z&&v.f8==1)||(o.1l.9K&&v.BJ==1))&&o.4C&&!o.aZ){B x=o.P.9v();if(x){if(x.Qb){uQ();2B=H}}}if(!2B){B lz;B y=o.1J;if((o.2i=="dm"||o.2i=="8Y")&&o.1l.7J&&v.f8==1){o.P.pP();L}if(y.uD){o.7v=H;lz=y.uD({lN:"1m"});if(lz!==1T){lz.bF(E(){}).2U(E(2b){})}}F if(y.uw){y.uw({lN:"1m"});o.7v=H}F if(o.1J.un){y.un({lN:"1m"});o.7v=H}F if(y.uW){y.uW({lN:"1m"});o.7v=H}F if(y.uL){y.uL();o.7v=H}}}2U(e){2b=H;1p(e)}if(!o.7v&&!2B){if(o.1l.3G&&o.jL){uQ()}F{G.pS()}}if(!2b){1C(xk,4L)}};E uQ(){B x=o.P.9v();if(x){o.i8=H;o.P.x9();x.Qh();x.1r("Qg",xN)}}E iZ(){B x=o.P.9v();if(x){x.Qd()}};G.iZ=E(){iZ()};E xk(){if(o.xj!=H){if(o.8f){o.P.c7()}if(v.1X.nI==1){ln(H);o.52=H}v.5L==1?o.5L.2I("lf"):\'\';js("2a");9B("lf","8b",1)}};B fT;B al={x:0,y:0};E ow(e){if(o.3h){if(o.3h.Qe()){L}}o.8N=H;41(fT);fT=7q(E(){o.8N=I;o.S.4T();al={x:0,y:0};41(fT)},4b);o.S.4T();e.8s();e.rf!=0?al.x++:al.x--;e.ew!=0?al.y++:al.y--;if(e.Qf!=0){if(al.x>al.y){if(e.rf>0){o.U.3M(4A(v.1N)-v.1X.d4/10,"no")}F{o.U.3M(4A(v.1N)+v.1X.d4/10,"no")}}F{if(e.ew>0){o.U.3M(4A(v.1N)+(o.1l.gc?-v.1X.d4/10:v.1X.d4/10),"no")}F{o.U.3M(4A(v.1N)-(o.1l.gc?-v.1X.d4/10:v.1X.d4/10),"no")}}o.S.hc()}}E xN(){if(o.1l.4Z){o.P.xb();js("oq")}o.i8=I}G.pS=E(){if(o.cz){o.2a=H;o.S.8b();if(!o.7v){if(J(o.7O)){3q{O(o.7O,{\'W\':\'1i%\',\'19\':\'1i%\',\'1h\':\'ox\',\'Z\':0,\'1f\':0,\'59\':"jG"})}2U(c9){}}O(o.1J,{\'W\':\'1i%\',\'19\':\'1i%\',\'1h\':\'ox\',\'Z\':0,\'1f\':0,\'59\':"jG"});o.3f=o.1J.26;o.4N=o.1J.2R;3q{1R.9Q.C.6R=\'3j\';if(!J(o.X)){1R.sm=E(e){e.8s()}}}2U(c9){}}if(v.nP==1){O(o.1J,{\'6o\':\'#3B\'})}if(o.3h){o.3h.fj()}91();o.cz=I}};G.7R=E(){mC=H;if(1R.wl){1R.wl()}F if(1R.wG){1R.wG()}F if(1R.wJ){1R.wJ()}F if(1R.Ae){1R.Ae()}F if(1R.wP){1R.wP()}F if(1R.wM){1R.wM()}if(!o.7v){G.pU(I)}};G.Fq=E(x,y){qc(x,y)};E qc(x,wR){if(J(o.1U)&&!wR){o.iX=x}F{B 2B=I;B fn=o.af/x;if(J(o.7O)&&v.Ei!=1){3q{O(o.7O,{\'19\':fn})}2U(c9){2B=H;1p("cO Ox Ou")}}if(!2B){o.4S=x;o.9I=fn;if(o.4S>0){O(o.1E,{\'19\':fn})}js("19",fn)}if(o.1U&&!o.2a){o.4N=fn;o.1U.2z()}}};G.pU=E(x){if(mC||x){o.2a=I;o.i8=I;if(!o.7v){if(J(o.7O)){3q{O(o.7O,{\'1h\':\'uF\',\'Z\':0,\'1f\':0,\'59\':\'wU\'});O(o.7O,o.Ej);O(o.7O,{\'W\':o.a2,\'19\':o.bJ})}2U(c9){}}O(o.1J,{\'W\':o.a2,\'19\':o.bJ,\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'59\':\'wU\'});3q{1R.9Q.C.6R=\'2t\';1R.sm=E(e){L H}}2U(c9){}}o.S.7R();if(v.nP==1){O(o.1J,{\'6o\':v.kx});if(v.cQ==1){o.1J.C.6o=\'cQ\'}F{O(o.1J,{\'6o\':v.kx})}}if(v.1X.nI==1){ln(I);o.52=I}if(o.3h){o.3h.fj()}91();o.mD?o.mD=I:\'\';o.S.kc();mC=I;js("oq");o.7v=I;o.aJ=I}};G.52=E(x){ln(x)};E ln(x){al={x:0,y:0};if(x){1V.1r("ou",ow)}F{41(fT);1V.6u("ou",ow)}}G.9V=E(){v.4f=0;o.S.2X();o.U.wj();o.P.3M(v.1N);if(o.S.aY()){o.S.7u()}if(o.3D){G.53()}if(J(o.fS)){41(o.fS);o.fS=1W}91(0);1p("2B");js("2B")};G.oe=E(){v.4f=0;v.3J=0;o.P.lV();o.U.9V()};G.5B=E(x){if(J(o.3e)){if(o.3e!=x){o.3e=x;if(v.oa==1){o.4r=o.2o[x];if(o.5j){3z.8O("o6",o.4r)}}o.P.5B(x);js("4M",o.2o[x]);o.S.vn(x)}}};G.h7=E(){o.S?o.S.h7():\'\'};G.cv=E(x){if(J(o.7l)){if(o.7l!=x){o.7l=x;if(v.AV==1){o.aO=v.aO=o.7z[x];if(o.5j){3z.8O("nZ",o.aO)}}o.P.cv(x);js("6I",x);o.S.kl("6I")}}};G.8x=E(x,z){x==\'0.0\'?x=0.1:\'\';B y=x;6T(y).K(\'.\')>0?z=1:\'\';y=y*1;if(!z){y=x==o.cB?1:o.4U[x];o.9t=x}if(o.dP||z){if(x==o.fo){L}o.fo=y;V(B i=0;i<o.4U.Q;i++){if(y<=o.4U[i]*1){o.9t=i;1g}}}if(o.5j&&v.Cx==1){3z.8O("Cz",y)}js("4G",y);o.P.8x(y);o.S.kl("4G")};E 91(x){o.4B?o.4B.1o(J(x)?x:o.P.Y()):\'\'};G.lw=E(){if(o.4B){91();o.4B.C()}};G.g6=E(x){if(1Q(fQ)==\'E\'){!o.4B?o.4B=1y fQ():\'\';o.4B.1A(x)}};B 6J;B 8p;B kY;B 2h;E 8h(x){if(v["5R"+x+"vM"]>0&&o.5j){B tb=3z.6c("jz"+x+"5S"+o.d);if(tb){B ct=1y 6K();o.9u=ct.9h();B vN=(ct.9h()-tb)/OH;if(vN<v["5R"+x+"vM"]){L I}}}if(v["5R"+x+"w9"]>0){if(o.P.1k()>0){if(o.P.1k()<v["5R"+x+"w9"]*60){if(v["5R"+x+"wf"]>0){v["5R"+x+"5S"+"yo"]=v["5R"+x+"wf"]}F{L I}}}}if(o.iC.K("7N")!=-1&&v.1U==1&&!o.aw&&v[x+\'s\']==1){if(1Q oi=="1T"){L I}if(x=="6l"||x=="qZ"){if(1Q zH!=="1T"){2h=[];L zH(x)}}if(J(o.1U)||J(o.5w)){if(!6b(o.nS)||8B(o.3E)){1p(\'ad bg\');L I}F{1p(\'ad iU\');L H}}F{if(J(v[x])){if(v[x].6w().K(".")>-1||v[x].6w().K(":")>-1||v[x].6w().K("[OF]")>-1){js("OG",x);if(!8B(x)&&x!="dK"){1C(E(){o.1z||(o.5w==1W&&o.1U==1W)?\'\':o.U.8F()},10);f5()}6J=0;8p=0;kY=x;2h=v[x].2v(" lQ ");o.5v=[];o.qn=2h.Q;kR();o.yI=1;o.jH=H;V(B i=0;i<2h.Q;i++){2h[i]=2h[i].2v(" or ")}v[x.8C("5S","g4")]=v[x];v[x]=1W;o.3E=x;if(x!=\'dK\'){o.1U=1y oi()}o.5w=1y kU();V(B i=0;i<2h.Q;i++){V(B j=0;j<2h[i].Q;j++){B 7p=4q(2h[i][j]);if(7p.K("[50%]")>0){B 1H=5d(1,2);2h[i][j]=2h[i][j].22("[50%]","");if(1H==2){2h[i][j]=\'\'}}}}if(v.qk==1){V(B i=0;i<2h.Q;i++){B n=i==0?1:0;if(2h[i].Q>n){V(B j=n;j<2h[i].Q;j++){B 7p=4q(2h[i][j]);if(o.1l.qm){fk(7p)}F{1C(fk,i*1i,7p)}}}}}if(2h[0][0]==\'\'){gu()}F{o.5w.l1(4q(2h[0][0]),x)}L H}F{L I}}F{L I}}}F{L I}};G.op=E(x){8h(x)};E mS(w,x,d){if(J(o[w+\'o\'])&&v[w+\'s\']==1){B y;V(B i in o[w+\'o\']){if(o[w+\'o\'].2n(i)){if(!J(o[w+\'o\'][i].jr)&&J(o[w+\'o\'][i].Y)&&J(o[w+\'o\'][i].1U)){B z=o[w+\'o\'][i].Y.6w();B ok=I;if(z){if(x=="9f"){if(z==x){ok=H}}F{if(z.K("%")>0){if(d>0){z=2E(z.1n(0,z.K("%")))*d/1i}F{z=-1}}F{z=2E(z)}if(x>=z){if(v[\'5R\'+w+\'zK\']>0&&z>-1){if(x-z>=v[\'5R\'+w+\'zK\']){z=-1}}if(z>-1){ok=H}}}if(o[w+\'o\'][i].zR&&o.P.1k()>0){if(o.P.1k()<o[w+\'o\'][i].zR*1){o[w+\'o\'][i].jr=H;ok=I}}if(ok){y=o[w+\'o\'][i].1U;v[w]=o[w+\'o\'][i].1U;o[w+\'Os\']=o[w+\'o\'][i].Y;o[w+\'Of\']=o[w+\'o\'][i].Og;if(8h(w)){o[w+\'o\'][i].jr=H;1g}}}}}}}};E kT(){if(8B()){if(o.bV==0||v[\'5R\'+o.3E+\'Oh\']==1){O(o.nS,{"1v":0,"5g":"3j","1f":4b});1p(o.3E+" 1m")}}}E 8B(z){B y=I;B x=[\'6z\',\'d2\'];V(B i=0;i<x.Q;i++){if(o.3E==x[i]||z==x[i]){if(v[\'5R\'+x[i]+\'Oe\']==1){y=H}}}L y};G.8B=E(x){L 8B(x)};G.Od=E(x){x?\'\':j1();o.3E=="6z"?o.zM.2H(o.zg):\'\'};G.Ob=E(){j1()};G.Oc=E(){j1()};E j1(){if(8B()){if(o.1z){o.P.2X();o.S.2X()}1p(o.3E+" 1o");O(o.nS,{"1v":1,"5g":"3W","1f":0});o.n9=1}if(o.i8&&!o.7v){iZ()}F{if(v["5R"+o.3E+"dh"]==1&&o.2a){o.U.7R()}}};G.Or=E(x){o.5w=1W;o.n9=0;1p("7N 3C",o.3E);js("Op",o.3E);if(x.1B=="dK"){B zq=1y Oo(x);o.nL.2H(zq)}F{if(J(o.1U)){if(v.4f==0&&v.Ok==1&&o.P.Y()==0&&o.P.1k()==0){v.4f=1;o.P.pq()}if((!o.1U.Ol()||x.Am)&&o.oj>0){1p("7N OM");o.1U.43();o.1U=1W;o.1U=1y oi()}if(8B()){kT()}F{if(o.1z){o.P.2X();o.S.2X()}}o.oj++;if(o.jH&&v.dj>0){3b(o.dj);o.dj=1C(Af,v.dj*2x*60);if(J(v.Ap)){if(v.Ap!=\'\'){o.gB?o.gB.6C():\'\';o.gB=1y Pd()}}}o.jH=I;if(v.Ar>0){1p("7N Pe");js("Pf");1C(od,v.Ar*2x,x)}F{od(x)}}F{1p("7N Pc")}}};E od(x){o.1U.Go(x)}E Af(){if(J(o.1U)){if(o.1U.uX()&&o.bV==0){o.1U.qw();1p("7N FK "+v.dj);2h=[];bd()}}}G.Pb=E(){js(\'P8\',o.3E);1p("7N 2b");o2()};G.gu=E(){o2()};E o2(){B n=kR();1p("7N 7h "+!n);!n?gu():bd()};G.P9=E(x){if(v[o.3E+"ov"]){V(B i=0;i<3;i++){v[o.3E+"ov"]=v[o.3E+"ov"].22(x+(i==0?\' lQ \':(i==1?\' or \':\'\')),\'\')}}};E kR(){B x=I;if(o.3E){B 6p=v[\'5R\'+o.3E+\'5S\'+\'yo\'];B gf=v[\'5R\'+o.3E+\'5S\'+\'Pg\'];if(gf||6p){if(gf>0&&o.pX>0){o.qn=gf;if(o.bV>=gf){x=H}}F{if(6p>0){o.qn=6p;if(o.bV>=6p){x=H}}}}}L x}E gu(){if(2h.Q>0&&2h[6J]){if(8p<2h[6J].Q-1){1p("7N Pn");o.1U?o.1U.qw():\'\';kT();8p++;B 7p=4q(2h[6J][8p]);B f9=qu(7p);if(f9==\'kN\'){o.5w=1y kU();o.5w.l1(7p,o.3E)}if(f9==\'2b\'){gu()}}F{bd()}}F{bd()}}E qu(7p){B x=\'kN\';if(v.qk==1&&o.5v){B k6=I;B n=0;V(B i=0;i<o.5v.Q;i++){if(o.5v[i].jR==0){if(o.5v[i].aV.yz(7p)){o.5v[i].jR=1;B y=o.5v[i].aV.ay();if(y==\'3C\'){o.5w=o.5v[i].aV;1p("7N yz");o.5v[i].aV.hM();x=y}F{if(y==\'\'){x=\'ok\';1p("7N Pm");o.5w=o.5v[i].aV;o.5v[i].aV.Pl()}if(y==\'2b\'){x=\'2b\'}}k6=H}if(k6&&o.5v[i].f7==0){n++;if(n<6){qz(o.5v[i])}F{1g}}}}}L x}G.Pi=E(x,y){if(x!=\'\'){B z=6J;B ql=I;if(y){V(B j=0;j<2h.Q;j++){2h[j]==y?z=j:\'\'}}if(2h.Q==1){if(2h[0].Q>1&&8p<2h[0].Q-1&&2h[8p]){B z7=2h[8p].6q(1,99);2h[0].qo(8p+1,99);ql=H}}if(1Q(x)=="3x"){V(B i=0;i<x.Q;i++){2h.qo(z+i+1,0,[x[i]]);if(o.1l.qm){fk(x[i])}F{1C(fk,i*1i,x[i])}}}F{if(1Q(x)=="5p"){2h.2H([x]);fk(x)}}if(ql){2h[2h.Q-1]=2h[2h.Q-1].8C(z7)}}};G.OU=E(x,y){if(x!=\'\'){B z=6J;if(y){V(B j=0;j<2h.Q;j++){2h[j]==y?z=j:\'\'}}if(2h[z]){if(1Q(x)=="3x"){V(B i=0;i<x.Q;i++){2h[z].2H(x[i])}}F{if(1Q(x)=="5p"){2h[z].2H(x)}}}}};G.bd=E(x){bd(x)};E fk(x){if(v.qk==1&&o.5v){B i=0;V(B i=0;i<2h.Q;i++){if(2h[i]==x){if(6J>=i){L}F{}}}if(2h.Q==1&&2h[0].Q>1){}F{B n=0;V(i=0;i<o.5v.Q;i++){o.5v[i].jR==0?n++:\'\'}o.5v.2H({f7:0,jR:0,x:4q(x),t:o.3E,aV:1y kU(H)});n<5?qz(o.5v[o.5v.Q-1]):\'\'}}}E qz(x){if(x){x.f7=1;x.aV.l1(x.x,x.t)}}E bd(gz){B 2B=kR();1p("7N 6C ("+o.bV+")");if(2h.Q>0&&6J==2h.Q-1){if(2h[0][0].K("js:")==0){6J=-1;2h=[[2h[0][0]]]}}if(o.OP==2){2B=H}if(2h.Q>6J+1&&!2B){o.1U.qw();kT();6J++;o.yI++;8p=0;B 7p=4q(2h[6J][0]);B f9=qu(7p);if(f9==\'kN\'){o.5w=1y kU();o.5w.l1(7p,kY)}if(f9==\'2b\'){bd(gz)}}F{eA();o.S.6G();if(J(o.1U)){o.1U.43();o.1U=1W}o.5w=1W;2h=[];8p=0;6J=0;o.n9=0;o.za!=1?js("P1",o.3E):\'\';o.za=0;if(v.QD==1){if(o.kX){3q{o.kX.pu()}2U(e){1p(o.kX,e)}o.kX=1T}}kY=\'\';o.bV=0;o.z6=0;3b(o.dj);o.gB?o.gB.6C():\'\';o.pX++;if(o.3E=="7j"||(o.3E=="d2"&&v.jf==1&&o.mM)||o.3E=="6z"){if(v.3i!=\'?\'){o.P.dx();B re;if(o.2i=="4h"&&!o.qa&&o.1l.4Z){re=H;o.3E=="7j"?o.P.Gh():\'\'}if(re||gz==\'gz\'||v.Sc==1){}F{o.U.2F(1)}}}if(o.iX>0){qc(o.iX);o.iX=0}if(o.3E=="jB"){9i()}o.qa=I;o.3E=1W}};G.Sp=E(){2h=[[\'\']]};G.eR=E(y){B x=[\'7j\',\'d2\',\'jB\',\'6l\',\'qZ\'];B z;V(B i=0;i<x.Q;i++){z=I;if(y){y!=x[i]?z=H:\'\'}if(!z&&J(v[x[i].8C("5S","g4")])){v[\'5R\'+x[i].8C("5S","yk")]--;if(v[\'5R\'+x[i].8C("5S","yk")]>0){v[x[i]]=v[x[i].8C("5S","g4")];v[x[i].8C("5S","g4")]=1W}}}if(y=="7j"||y=="6z"){if(v.rb>1){if(J(o.r5)&&v.gn==1){V(B i in o.r5){o.r5[i].jr=1T}v.rb--}}}};G.ji=E(){f5();if(J(o.7e)){o.7e.43();o.7e=1W}o.7e=1y S8()};G.RW=E(){eA();o.7e.43();o.7e=1W};G.f5=E(){f5()};G.eA=E(){eA()};E f5(){if(o.an){}F{o.an=1M("1Z");o.1J.1K(o.an);pc(o.an);O(o.an,{"2u":"#3B","1v":0.1});o.an.C.59=CB}};E eA(){if(o.an){o.1J.3d(o.an);o.an=1W}};E 7E(){if(J(o.2g)){if(v.2g!=o.pI){8Z(v.2g,o.2g,v.fL)}1o(o.2g);O(o.2g,{"1v":v.jE});o.S.4u()}};G.fB=E(){if(J(o.2g)){if(6b(o.2g)){B t=o.P.Y();if(t==0&&v.w4==1){}F{if(v.A7>0){3b(o.r9);o.r9=1C(jo,v.A7*2x)}F{jo()}}}}};E jo(){3b(o.r9);if(v.r8==1&&!o.1z){}F{O(o.2g,{"1v":0});1C(A4,4d)}}E A4(){if(!o.1z&&v.fN==1){}F{1m(o.2g)}}G.7E=E(){7E()};E A0(x){if(v.A1==1){V(B i=0;i<6N.Q;i++){if(6N[i].2I("id")!=v.id){6N[i].2I(\'4o\')}}}ip=v.id}E qJ(x){B y=4E.3U(x).Q;if(y>0){x=qL(x,y,\'\',-1)}L x}E qL(x,y,p,j){B x2=[];B 2B;if(J(x[\'X\'])){x=x[\'X\'];y=x.Q}B ii=0;V(B i=0;i<y;i++){2B=I;if(J(x[i][\'id\'])){x[i][\'ca\']=x[i][\'id\']}x[i][\'id\']="x"+p+\'-\'+i+(J(x[i][\'id\'])?\'-\'+x[i][\'id\']:\'\');j==-1&&i==0&&!J(x[i][\'4V\'])?o.gq=x[i][\'id\']:\'\';if(!J(o.gq)){j==0&&!J(x[i][\'4V\'])?o.gq=x[i][\'id\']:\'\'}x[i][\'gl\']=p;x[i][\'qD\']=j;x[i][\'bq\']=ii;if(J(x[i][\'Av\'])){x[i][\'1L\']=x[i][\'Av\'];B q1=x[i][\'3i\']?x[i][\'3i\'].K(\'[\'):0;B q2=x[i][\'3i\']?x[i][\'3i\'].K(\']\'):0;if(q1>0&&q2>0){B s1=x[i][\'3i\'].1n(q1+1,q2-q1-1);B s2=s1.2v(",");B s3=\'\';V(B k=0;k<s2.Q;k++){s3+="["+s2[k]+"]"+x[i][\'3i\'].22("["+s1+"]",s2[k])+(k<s2.Q-1?",":\'\')}x[i][\'3i\']=s3}}if(J(x[i][\'X\'])){x[i][\'4V\']=x[i][\'X\']}if(!J(x[i][\'4V\'])){if(J(x[i][\'3i\'])){if(x[i][\'3i\']==\'\'&&!J(x[i][\'7x\'])){2B=H}}F{2B=H}}if(!2B){o.1w[x[i][\'id\']]=x[i];ii+=1}if(J(x[i][\'4V\'])){B z=4E.3U(x[i][\'4V\']).Q;if(z>0){x[i][\'4V\']=qL(x[i][\'4V\'],z,x[i][\'id\'],i)}}if(!2B){x2.2H(x[i])}}L x2}E Aq(){B x=[];if(J(v.4Y)){if(v.4Y.K("x-")!=0){V(B y in o.1w){if(o.1w.2n(y)){if(o.1w[y].ca==v.4Y){v.4Y=y}}}}if(J(o.1w[v.4Y])){v.X.RZ==1?v.X.rs=0:\'\';x=o.1w[v.4Y]}F{x=o.X[0];if(v.4Y==o.Ak){o.2y=1T}}}F{x=o.X[0]}if(x){V(B i=0;i<10;i++){if(J(x[\'4V\'])){x=x[\'4V\'][0]}F{1g}}v.4Y=x.id;if(v.4Y==o.Ak){x.1A=1T}}L x}E 9i(){9B("4F","9i",1);o.U.eR();if(o.5j&&v.aG==1){o.3n.nY(0,o.P.1k())}if(o.S.ke()){if(v.X.eG==1&&o.S.cY()){o.S.aL();if(o.1z&&o.1l.4Z&&o.2i!="aM"){}}F{qO()}}F{if(v.S7==1&&o.2a){o.U.7R()}7E();js("zs")}}G.An=E(){qO()};E qO(){if(v.X.jA==1&&!o.S.cY()){o.S.kb();L}if(v.X.Eo==1){!o.S.da()?o.S.aC():\'\'}7E();js("zs")}E p1(x){if(x.K(\'js:\')==0){3q{x=2m(x.1n(3))}2U(e){cK.1p(e.8S)}}L x?x:\'\'}E p2(){B oZ=2A.7Y(6K.iU()/2x);B p5=(J(v.zt)?v.zt:0)+2E(o.P.Y());B 1B=0;o.1l.kg?1B=1:\'\';o.1l.4Z?1B=2:\'\';o.1l.9K?1B=3:\'\';o.1l.S2?1B=4:\'\';o.1l.tv?1B=5:\'\';B 1b=v.gw.22("[oZ]",oZ);1b=1b.22("[p5]",p5);1b=1b.22("[Ss]",1B);B 8r=1R.1M("3Q");8r.6h(\'2Q\',1b);8r.6h(\'19\',\'6f\');8r.6h(\'W\',\'6f\');o.1J.1K(8r)}};B Co=E(1b){B 1b;B 3O;B mo;B 8M;B fg="";B du=0;B lW=I;B lU=I;B oE;B P;B 3p;o.3m={x:1,y:1,x0:1,y0:1};B nc;B na;B mN=0;B bO=0;if(1Q(1b)==\'5p\'){1b=4q(1b);if(1b.K("[{")==0){3q{1b=1b.22(/ba\'qt/ig,\'"\');1b=4O.6x(1b);nc?1b=o.U.6n(1b):\'\'}2U(e){cK.1p(e);1b="zk 4O"}}if(1b.K("#"+v.9g)==0){1b=o[o.fd[0]](1b)}if(1b){if(1b.K("#"+v.9J)==0&&1b.K(v.b7)>0){1b=o[o.fd[1]](1b)}}if(1b){if(1b.K("#0")==0){if(1b.K(o.cE)>0){1b=b6(1b.22(o.cE,\'\'))+o.cE}F{1b=b6(1b)}}}if(v.bE==1){1b=bE(1b)}if(1Q(1b)==\'5p\'){if(1b.K(".ah")==1b.Q-4||1b.K(".92")>0){na=1b.2v(" or ");oV()}}}o.3o=1M("1Z");pc(o.3o);O(o.3o,{"4W":"2O 0.2s 2T","1D-7D":"7P"});o.1J.1K(o.3o);if(v.1X.zl==1){if(!o.pa){pg(o.3o,\'o.zl\',H,I,zA);o.pa=H}}if(!nc){cZ()}E zA(){B x;if(o.3o.eK>o.3f/2){if(o.S.ei()){x=H;o.S.ch()}}F{if(o.3o.eK<-o.3f/2){if(o.S.cY()){x=H;o.S.aL()}}}if(x){O(o.3o,{"Z":0})}F{1y 5t({mc:o.3o,1B:"Z",to:0,Y:0.1,7V:"o7",me:"pa"})}}E oV(){1b=na[mN];if(1b.K(o.cE)>0){1b=1b.22(o.cE,\'\');v.3i=1b}B 4k=eD(1b);4k.bN=E(){if(G.eL==4&&G.6m==4L){aC(G);o.S.BG()}F{nv(1)}};4k.p9=E(e){nv(1)};4k.bb();nc=H}E nv(x){if(mN+1<na.Q){mN++;oV();x=0}if(x==1){6a("X eO k8 or zT zS")}if(x==2){6a("SN 4O")}}E aC(x){if(x.c0){B y=x.c0;if(y.K("#"+v.9g)==0){y=o[o.fd[0]](y)}if(y.K("#"+v.9J)==0&&y.K(v.b7)>0){y=o[o.fd[1]](y)}if(1b.K(".ah")==1b.Q-4){B ah=y.2v(/(\\r\\n\\t|\\n|\\r\\t)/gm);1b=[];B oI=1;B g7=\'\';V(B i=0;i<ah.Q;i++){if(ah[i].K("#ST")>-1){if(ah[i].K(" - ")>-1){B 1H=ah[i].2v(" - ");g7=1H[1H.Q-1]}}if(ah[i].K("3v")>-1){1b.2H({1L:""+(g7!=\'\'?g7:oI),3i:ah[i]});oI++;g7=\'\'}}}F{y=y.22(/(\\r\\n\\t|\\n|\\r\\t)/gm,"");3q{1b=4O.6x(y)}2U(e){nv(2)}}if(J(1b.cM)){1b=SZ(1b)}if(o.S){if(v.X.jg==1){if(!o.S.da()){o.S.kf()}}}cZ();ij();1C(E(){js("X")},1)}}E cZ(){1b=o.U.6n(1b);1b&&1b!=\'?\'?6n(1b):\'\'}E 6a(x){1p("e6: "+x);B y=H;B yy=H;js("SY",x);if(3O){if(3O.Q>0){8M++;y=8M>3O.Q-1;if(y&&v.SV==1){if(o.3H.Q>1){if(o.2o[o.3e].K(2D("cN"))==-1){o.2o[o.3e]=o.2o[o.3e]+\' (\'+2D("cN")+\')\'}if(o.3e>0){yy=I;o.U.5B(o.3e-1);gX()}F{if(o.2o[o.3e+1].K(2D("cN"))==-1){yy=I;o.U.5B(o.3e+1);gX()}}}}if(!y){B z=I;o.2y>0||!o.1A||P.5E()?\'\':o.2y=4z();if(o.2i!=mf(3O[8M])||o.2i!=\'aM\'){if(o.1z){o.U.9V();z=H}}1p("SX aI",o.2y);6n(\'or\');o.1A&&!o.1U?P.2F():\'\';gX()}F{if(v.9w==1&&yy){y=I;oF()}}}}if(y&&yy&&x){oG(x,H)}};E oG(x,mr){9B("2b","e6",H);if(v.zI==1&&!o.9R){if(v.Ay==1){o.av.92(v.vK)}F{o.av.92(x)}if(v.vt==1&&J(v.vu)){o.cA=1y vv();o.U.fB()}}mr?o.9R=H:\'\';if(o.1z){o.U.6G();o.S.2X()}J(o.2g)&&!J(o.cA)?o.U.7E():\'\';js("2b",x)}E oF(){bO++;1p("e6 e7 FT "+bO);o.1z?o.lF=1:\'\';J(o.bC)?3b(o.bC):\'\';o.bC=1C(wh,v.oH*2x)}E wh(){B x=3N(v.SB,10);if(o.1z||o.lF==1){o.lF=0;if(bO<x){o.U.e7()}F{oG(\'e7 e6 \'+P.k1())}}}G.6a=E(x){6a(x?x:P.k1())};G.8u=E(y){1p("np");lW=H;B x=I;if(47()>0&&!o.4R&&!y){B Y=o.FZ;if(Y+10<47()){1p(\'SI (vV)\');js("vV");P.2F();P.3L(Y);x=H}}if(!x){o.U.np();js("4F")}};G.9p=E(){if(v.pQ==1){J(o.2g)?o.U.7E():\'\'}v.fN==1?o.U.fB():\'\';o.S.2F();o.U.w0();if(v.SG==1&&J(v.pj)){if(v.pj.Q>5){pi();41(oE);oE=7q(pi,v.w8*2x)}}if(v.9w==1){if(bO>0&&o.P.1k()==0){bO=0;oF()}}js("1z")};G.hj=E(){if(v.mT==1&&o.4C){if(o.U.hj()){o.aZ=P.qe();o.S.4u()}}o.oM=H};G.di=E(){o.U.2X()};G.fX=E(){1p("RP")};G.fY=E(){1p("oS");o.U.oS();J(o.gO)?js("4a",o.gO):\'\'};G.b4=E(){1p("oT");bO=0;o.U.oT()};G.9C=E(){if(P){1p("47",47());o.U.47(4z(),47());js("1k",47());bO=0;3b(o.bC);if(J(o.lA)){o.U.cv(o.lA);o.lA=1W}}};E 4z(){B x=P.Y();L x}E 47(){B x=P.1k();L x}G.cW=E(){};G.8H=E(){1p("8F");o.U.8F();js("9b")};G.az=E(){if(du!=4z()){o.U.6G();if(du==0){if(v.fN==1&&v.w4==1){o.U.fB()}}}du=4z();js("Y",du);if(v.2j.on==1){if(1Q(w5)==\'E\'){if(!3p&&v.2j.4w!=1&&v.vT&&v.vT!=\'\'&&du>0){o.ce=1y w5();3p=o.ce.fu()}}}};G.pd=E(){if(o.2i=="4h"){P?P.lO():\'\'}};G.wg=E(x){o.U.9V();P.wc(x)};G.lO=E(){if(o.2i=="4h"&&P){L P.3C()}F{L H}};G.jP=E(){L P.jP()};G.jS=E(){L P.jS()};G.5B=E(x){1p("Rd",x);if((o.2i=="aM"||o.2i==o.ws||(o.2i=="1G"&&(v.8v==0||9k()<2))||(o.2i=="3t"&&(v.ll==0||aX()<2)))&&J(o.3H[x])){B Y=G.Y();o.2y>0?\'\':o.2y=Y;o.U.3L(Y,I);6n(o.3H[x],H);B y=H;if(v.1d){if((v.1d.Rb==1&&!o.1z)||!o.1A){y=I}}if(y){o.U.2F()}}if(o.2i=="1G"&&v.8v==1&&9k()>1){P.Gg(x)}F if(o.2i=="3t"&&v.ll==1&&aX()>1){P.G7(x)}F if(o.2i=="4h"||o.2i=="dm"){P.qs(x)}};G.FF=E(x,y){L hm(x,y)};G.F5=E(x){L xn(x)};E hm(x,y){B r=x.19+\'p\';if(x.19<4L){r=\'lP\'}F if(x.19>=4L&&x.19<=do){r=\'gp\'}F if(x.19>do&&x.19<=hn){r=\'gg\'}F if(x.19>hn&&x.19<=4d){r=\'gj\'}F if(x.19>4d&&x.19<=dw){r=\'pK\'}F if(x.19>dw&&x.19<=vC){r=\'lb\'}F if(x.19>vC&&x.19<=vy){r=\'la\'}F if(x.19>vy&&x.19<=vE){r=\'pG\'}F if(x.19>vE){r=\'pM\'}if(x.W==R8&&x.19<=R9){r=\'gp\'}F if(x.W==vG&&x.19<=vF){r=\'gg\'}F if(x.W==QV&&x.19<=QJ){r=\'gj\'}F if(x.W==QL&&x.19<=QI){r=\'lb\'}F if(x.W==QE&&x.19<=QF){r=\'la\'}F if(x.W==QG&&x.19<=QM){r=\'pG\'}F if(x.W==QN&&x.19<=QT){r=\'pM\'}if(v.1d.QS==1&&J(v.1d[\'6Q\'+r])){r=v.1d[\'6Q\'+r]}F{if(y==1){r=2D(r)}if(y==2&&J(x.gk)){r=2E(x.gk/2x)+\' \'+2D(\'dD\')}}L r};E xn(x){B r=x.jY();if(r=="QO"||r=="en"){x="QP"}F if(r=="QQ"||r=="ru"){x="Русский"}if(1Q(v.xp)=="3x"){x=3N(v.xp[x],x)}L x};E x8(){if(o.4C&&o.1S){P.qp();V(B i=0;i<o.1S.Q;i++){P.BX(o.1S[i],o.2Y[i],(i==o.3F))}}}G.8x=E(x){1p("RE",x);P?P.fl(x):\'\';if(v.2j.on==1){if(3p){3p.fl(x)}}};G.x9=E(){x8()};G.xb=E(){P.qp()};G.cv=E(x){1p("RD",x);if(o.aq.Q>0){if(o.aq[x]){B Y=G.Y();o.2y>0?\'\':o.2y=Y;o.U.3L(Y,I);6n(o.aq[x],H);o.U.2F()}}F{if(o.2i=="1G"&&v.bL==1){P.C2(x)}F if(o.2i=="3t"&&v.xf==1){P.FU(x)}}};G.pR=E(){B x=o.2o[o.3e];x==1T?x=\'\':\'\';B y=fW()&&v.go==1&&v.8v==1&&x!=2D("2t");L(y?\'\'+2D("2t")+\' \':\'\')+x};G.pO=E(){B x=o.7z[o.7l];x==1T?x=\'\':\'\';L x};G.fW=E(){L fW()};E fW(){B x=I;if(P){if(o.2i=="4h"){x=P.2t()}if(o.2i=="1G"&&v.8v==1&&9k()>1&&v.go==1){x=P.2t()}if(o.2i=="3t"&&v.ll==1&&aX()>1){x=P.2t()}}L x}E 9k(){if(o.2i=="1G"){L P.9k()}F{L 0}}E aX(){if(o.2i=="3t"){L P.aX()}F{L 0}};G.4T=E(x){if(P&&(o.2i=="4h"||o.2i=="8Y"||J(v.fm))){P.4T()}if(v.oD>0){O(o.3o,{"19":(o.2a?"1i%":o.bJ-v.oD)})}if(o.3p&&v.2j.Ge==1){o.ce.4T()}if(v.pk==1){RH()}};G.3w=E(){L P.3w()};G.pP=E(){P.pP()};G.9w=E(){1p(\'9w\');o.a4=0;o.1A?v.3J=1:\'\';o.U.8F();if(1b&&v.RO!=1){if(1b.K(\'(5d)\')==-1){1b=1b+(1b.K(\'?\')==-1?\'?\':\'&\')+\'xH=(5d)\'}}if(o.4C){P.2Q(1b)}F{6n(1b)}};if(!J(o.2g)){pt()}if(J(v.2g)){if(v.2g!=\'\'){8Z(v.2g,o.2g,v.fL);if(v.pQ==1&&!o.1A){1m(o.2g)}}F{v.2g=1W}}E ay(){fg=P?P.6m():\'\'}E xF(1b){3O=1b.2v(" or ");V(B i=0;i<3O.Q;i++){if(3O[i].K(" lQ ")>-1){mo=3O[i].2v(" lQ ");3O[i]=mo[5d(0,mo.Q-1)]}if(J(v.ml)&&3O[i].K("//")==-1){3O[i]=v.ml+3O[i]}}8M=0}E x5(){ay();if(fg=="7t"||o.4R){o.U.pC()}if(fg!=""){o.U.v4()}}E pt(){if(o.2g){o.1J.3d(o.2g)}o.2g=1M("1Z");O(o.2g,{"3S-2P":"1I","1v":v.jE,4W:"1v 0.5s"});if(v.pk==1){Rm()}F{O(o.2g,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':\'1i%\',\'19\':\'1i%\'})}o.1J.1K(o.2g)}E 6n(x,y,xE){v.fU==\'\'?v.fU=\';\':\'\';if(x.K(\'{\')>-1&&x.K(\'}\')>-1&&x.K(v.fU)>-1){B z=x.2v(v.fU);o.aq=[];V(B i=0;i<z.Q;i++){o.7z[i]=z[i].1n(z[i].K("{")+1,z[i].K("}")-1);o.aq[i]=z[i].1n(z[i].K("}")+1);if(J(v.aO)){if(v.aO==o.7z[i]){o.7l=i}}}x=o.aq[o.7l]}!J(3O)?3O=[]:\'\';o.mh?3b(o.mh):\'\';x&&x!=\'or\'&&x!=\'x\'?xF(x):\'\';B ft=o.2i;if(3O.Q>0){o.2i=mf(3O[8M]);B fu=I;if(xE){fu=H}1b=3O[8M];if(1b){1b=1b.22(/\\(5d\\)/g,2A.5d())}if(!fu&&x!=\'x\'&&P&&o.2i==ft&&(ft=="aM"||(ft=="8Y"&&!o.1l.2l)||(ft=="4h"&&o.1A&&!lU)||ft=="dm"||ft=="1G"||ft=="3t")){P.2Q(1b);1p("2Q")}F{1p("Rj");ma();wX(1b)}if(o.cB){if(o.dP){P.fl(o.fo)}F{if(o.9t!=o.cB){P.fl(o.4U[o.9t])}}}}if(!y){41(o.pn);o.pn=7q(x5,o.pf);if(!J(v.2c)&&v.mx==1&&v.ph==1){v.2c=\'\'}if(J(v.2c)){o.U.g6(v.2c)}if(v.dJ==1){if(v.mT==1&&o.1l.2l){}F{if(o.2i=="4h"){O(o.3o,{"1f":-iN,"Z":-iN})}F{2W(o.3o)}v.1u.1m=0}}}}E mf(x){B 1B="aM";if(x){if(x.K(".FI")>0){1B="1G"}F if(x.K(".FG")>0){1B="3t"}F if(x.K("ws")==0){1B=o.ws}F if(x.K(\'4h.9U/\')>-1||x.K(\'my.be/\')>-1){if(1Q(pw)==\'E\'){1B="4h";if(v.vq==1){B y=\'mj://3Q.4h.9U/vi/\'+lY(x)+\'/\';wZ(y+\'wx.h1\',E(z){z>1i?v.2g=y+\'wx.h1\':v.2g=y+\'Ri.h1\';if(o.1w){o.1w[o.3y][\'2g\']=v.2g}v.3J==1||o.1A?\'\':8Z(v.2g,o.2g,v.fL)})}}F{1p("No wk")}}F if(v.8Y==1&&x.K(\'8Y.9U/\')>-1){1B="8Y"}F if(v.dm==1&&x.K(\'Rv.9U\')>-1){1B="dm"}F if(v.wT==1){if(1Q(wS)==\'E\'){wS(x)?1B="ba":\'\'}}}o.4C=1B=="aM"||1B=="1G"||1B=="3t"||1B==o.ws;L 1B}E wZ(1b,wY){B 3Q=1y Ru();3Q.bN=E(){wY(G.19)};3Q.2Q=1b}E wX(x){o.2i=mf(x);if(o.4C){P=1y F2(x,o.3o,I)}if(o.2i=="4h"){P=1y pw(x,o.3o)}if(v.8Y==1&&o.2i=="8Y"){P=1y Rt(x,o.3o)}if(o.2i=="ba"){P=1y Rq(x)}if(o.2i=="dm"){P=1y Rr(x,o.3o)}o.S?o.S.Be():\'\';B t=0;if(J(v.1k)){if(o.3n&&v.aG==1&&!o.1A){t=o.3n.9P().t}1C(E(){o.U.47(t,v.1k)},1i)}}E ma(){if(P){P.43();P=1W;fg="96"}if(3p){3p.43();3p=1W;3p=1T;o.ce.6C();o.3p=1W;o.ce=1W}};G.43=E(){ma()};G.Rs=E(){3O=[];ma()};G.6n=E(x,y,z){6n(x,y,z)};G.8Z=E(x){8Z(x,o.2g,v.fL)};G.2F=E(){if(P){lW=I;lU=I;if(o.4R){o.3R.2F()}F{P.2F();v.fN==1?o.U.fB():\'\'}if(J(3p)){3p.2F()}if(o.7a){if(o.4C){if(o.9u>0&&!o.7a.Vw()){o.7a.m9()}}F{o.md=[];o.S.kl("bs")}}if(o.4C&&v.Fk>-1&&!o.qf&&!o.1l.4Z){if(o.9u>0){P.Fi()}}gX()}F{1C(G.2F,4d)}};E gX(){if(v.G4>0&&3O.Q>1){if(47()==0){3b(o.mh);o.mh=1C(G6,v.G4*2x)}}}E G6(){if(o.1z&&47()==0&&4z()==0){if(P){if(P.8X()==0&&8M!=3O.Q-1){6a(\'6n FT\')}}}}G.FX=E(1a){if(o.3p){if(v.2j.Ge==1){if(o.qH[o.3p]>2){L}}if(1a){1a.ak();1V.1a?1V.1a.6j=H:\'\'}B 1H=P;P.q8(H,o.3p);3p.q8(I,o.3o);P=3p;3p=1H;P.2F();3p.2F();js("2j")}};G.Gh=E(){P.2Q(1b)};G.uO=E(){v.5L==1?o.5L.2I("1m"):\'\';o.pv=H};G.fP=E(){if(v.1u.sb){v.1u.sb=I;if(o.S){o.S.uj(1);o.S.nM()}}o.pv=I};G.FS=E(){if(o.3p&&o.ce){o.ce.fI()}};G.fs=E(){if(o.4C&&o.5x){o.g5=H;P.5x()}};G.c7=E(){if(o.4C&&o.8g){P.8g()}};G.jd=E(){if(v.9T==1&&J(v.G2)){if(!J(o.9T)){o.9T=1M("1Z");O(o.9T,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':\'1i%\',\'19\':\'1i%\',"3S-2P":"1I","59":G3});o.1J.1K(o.9T)}5V(o.9T);8Z(v.G2,o.9T,\'5y\')}if(P){jm(0);P.jd()}};G.dx=E(){if(o.9T){2W(o.9T)}P?P.dx():\'\'};G.2X=E(){if(o.4R){o.3R.2X()}F{P?P.2X():1p("Rw")}if(J(o.3p)){3p.2X()}};G.lV=E(){lU=H;o.U.3L(0,I);J(o.2g)?o.U.7E():\'\';6n(\'x\')};G.cq=E(){P?P.cq():\'\'};G.3L=E(x){if(P){if(o.4R){o.3R.3L(x)}F{P.3L(x);if(v.2j.on==1){if(3p){3p.3L(x)}}}}};G.53=E(){if(P){P.53();o.4R?o.3R.53():\'\';1p("4P")}if(v.2j.on==1&&v.2j.dR==1){if(3p){3p.53()}}};G.6P=E(){if(P){P.6P();o.4R?o.3R.6P():\'\';1p("94")}if(v.2j.on==1&&v.2j.dR==1){if(3p){3p.6P()}}};G.3M=E(x){P?P.3M(x):\'\';if(v.2j.on==1){if(v.2j.dR==1&&3p){3p.3M(x)}}if(o.4R){o.3R.3M(x)}};G.kD=E(){L P?P.kD():I};G.5E=E(){L P?P.5E():I};G.6m=E(){L fg};G.96=E(){L lW};G.Y=E(){B x=0;if(P){x=4z();if(o.4R){B y=o.3R.4z();y?x=y:\'\'}F{if(47()>0&&x!=47()){o.FZ=x+0.Rp}}L x}F{L 0}};G.1k=E(){B x=0;if(P){x=47();x==0&&J(v.1k)?x=v.1k*1:\'\';if(o.4R){B y=o.3R.47();y?x=y:\'\'}}L x};G.8X=E(){L P?P.8X():0};G.e8=E(){o.3m.e8=o.3m.e8?I:H;O(o.3o,{"2O":(o.3m.e8?"3c(-1)":"3c(1)")})};G.Ro=E(){pt()};G.pq=E(){if(o.4C){P.4f()}};G.Fa=E(x,y){if(x==\'1F\'){if(y==1){cV(v.1d.1F/1i)}if(y==2){cV(-v.1d.1F/1i)}if(y==3){o.P.mB()}}F{if(o.4C){if(!o.9a[x]){if(x==\'lZ\'){o.9a[x]=0}F{o.9a[x]=1}}if(y==1){o.9a[x]+=v.1d[x]/1i}if(y==2){o.9a[x]-=v.1d[x]/1i}if(y==3){if(x==\'lZ\'){o.9a[x]=0}F{o.9a[x]=1}}!o.gE?o.gE=[]:\'\';o.gE[x]=x+\'(\'+2E(o.9a[x]*1i)+\'%) \';B cf=\'\';V(B i in o.gE){cf+=o.gE[i]}O(P.9v(),{\'n1\':cf});o.S.kp(x)}}};G.1F=E(x){cV(x)};E cV(x){if(6T(x).K(":")>0){B y=x.2v(":");B z0=o.3f/o.4N;B z1=o.P.3w();if(z1.W>0){z0=z1.W/z1.19}B z=y[0]/y[1];if(z0!=z){if(o.4C){P.fh()}B w2=o.4N*z;B x2=w2/o.3f;B h2=o.3f/z;B y2=h2/o.4N;if(x2<1){o.3m.x0=o.3m.x=4A(x2);o.3m.y=1}F{o.3m.x=1;o.3m.y0=o.3m.y=4A(y2)}O(o.3o,{"2O":"3c("+o.3m.x+") 3g("+o.3m.y+")"});o.ik=x}}F{o.3m.x+=4A(x);o.3m.y+=4A(x);O(o.3o,{"2O":"3c("+o.3m.x+") 3g("+o.3m.y+")"})}if(v.1X.Rh==1){if(!o.F1){if(o.3m.x>0||o.3m.y>1){pg(o.3o,\'o.Rg\');o.F1=H}}F{if(o.3m.x==1&&o.3m.y==1){O(o.3o,{"1f":0,"Z":0})}}}o.S.kp(\'1F\')};G.mB=E(){if(o.4C){P.fh()}o.3m.x=o.3m.x0;o.3m.y=o.3m.y0;O(o.3o,{"2O":"3c("+o.3m.x+") 3g("+o.3m.y+")"});o.S.kp(\'1F\');o.ik=1W};G.gt=E(x,y){P.gt(x,y)};G.bu=E(){L bu()};E bu(){L 3O?(3O.Q>0?(3O[8M]?3O[8M]:\'\'):\'\'):\'\'};G.9v=E(){L P?P.9v():I};G.5T=E(){if(o.4C){P.5T()}};G.pE=E(){P.pE()};E pi(){B 4k=eD(v.pj+\'?1b=\'+3O[8M]);4k.bN=E(){if(G.eL==4&&G.6m==4L){if(G.c0){v.1L=G.c0;o.U.9H(\'1L\')}}};4k.bb()}};B F2=E(1b,1E,2j){B 1e=1M(v.dJ==1?"F3":"mW");B dU;B pV=0;B 1G;B 4v=I;B p4=I;B r6=I;B a8=I;B dM=-1;B 3t;B 62=I;B ws;B ra=I;B 5X=I;o.5c=I;B 8d=0;B 8E=I;B 2b;B Rk;B jj=I;B gA=-1;B ae=-1;B p6;B ko;B gh;B Rn;B FL=\'mW/Rl; Rx="Ry.RK, RJ.40.2"\';B jC=I;O(1e,{\'1h\':\'2e\',\'1f\':0,\'Z\':0,\'W\':\'1i%\',\'19\':\'1i%\',\'3x-ki\':\'oO\',\'4W\':"n1 0.2s 2T",\'8G-19\':\'2t\',\'5N-19\':\'1I\',\'8G-W\':\'2t\',\'5N-W\':\'1I\'});fh();if(o.1l.7J&&v.3J==1&&v.r4==1){if(!o.1A&&v.7j){3Z(1e,{\'mt\':1})}F{3Z(1e,{\'3D\':1,\'mt\':1,\'3J\':1})}}F{if(v.pD==1&&o.1l.2l){3Z(1e,{\'mt\':1})}if(!o.1l.tv){3Z(1e,{\'4f\':(v.4f==1&&v.3J==0?\'9f\':\'1I\')})}}if(v.RI==1){3Z(1e,{"RL":"Fx","RM":"Fx"})}3Z(1e,{\'2Q\':1b,\'x-3G-5x\':\'Bt\',\'Fz\':\'H\'});if(v.RN!=1){3Z(1e,{\'Fz\':\'H\'})}if(v.RG==1){3Z(1e,{\'2j\':\'I\'})}if(2j){1e.3J=H;if(v.2j.dR!=1||v.3J==1){1e.3D=H}}if(v.RB==1){3Z(1e,{\'RA\':\'Rz\'})}q6();if(v.RC==1){B cF=1M("cO");3Z(cF,{"Bv":"no","Br":"H","Bs":"H","2Q":""});O(cF,{"1h":"2e","W":"1i%","19":"1i%","2Z":0});1E.1K(cF);B FE=1V.7q(E(){if(cF.hv.1R.eL==="RF"){1V.41(FE);O(cF.nX.9Q,{"2M":0,"2L":0});cF.nX.9Q.1K(1e)}},1i)}F{1E.1K(1e)}if(!J(1b)){1b=\'\'}if(1b.K(".FG")>0){5X=H;if(!o.3t){if(1Q FH!=="1T"){o.3t=1y FH()}}if(J(o.3t)){if(!J(1V.Fh)){o.3t.l9()}F{pH()}}}F if(((3r.1G==1&&v.pN!=1)||1b.K(".FI")>0)&&(o.fi.K("7G")!=-1||J(1V.5f))){4v=H;p4=H;3q{if(J(5f)){if(!5f.EV()||(o.1l.6y&&v.Rf==1&&!o.1l.4Z)||(o.1l.6y&&o.1l.4Z&&v.Re==1)||(o.1l.l8&&v.QR==1)){1p(\'7G QU \',5f.EV());4v=I}F{if(v.4f==1||v.3J==1||v.EY==1||2j){de(I)}}}F{4v=I}}2U(2b){4v=I}}F if(1b.K("ws")==0&&v.QH==1){8E=H;rc()}if(o.1l.tv&&v.3J==1&&!4v&&!5X&&!8E){1C(E(){o.U.cs()},1i)}if(v.7a==1){J(o.7a)?o.7a.fj():\'\';o.7a=1y QK()};G.pE=E(){pH()};E pH(){5X=H;if(qP()){if(v.4f==1||v.3J==1||v.Fm==1){kC(I)}}F{5X=I;1p("QW eO FD")}}E kC(x){if(o.3t&&!62){o.3t.fu(x,1e,1b,2j);J(1V.Fh)?62=H:\'\'}}E de(x){1p("7G");if(o.3H.Q>1){v.8v=0;v.Fb=H}F{v.Fb?v.8v=1:\'\'}if(o.aq.Q>1){v.bL=0;v.Fd=H}F{v.Fd?v.bL=1:\'\'}o.lv=I;dM=-1;B pJ=I;if(v.7j&&v.Ff==1){pJ=H;v.Ff=0}dU={FM:(v.FQ==1&&!2j),R7:(v.4f==1||v.3J==1||2j||x)&&!pJ,dZ:60,oN:60,Ra:(v.Gb>0?v.Gb*2x:FY),Rc:(v.G1>0?v.G1*2x:FY),R6:I};if(v.R5==1){dU.QZ=H}if(v.G8==1){dU[\'QY\']=E(4k,1b){4k.QX=H}}if(J(v.7f)){if(J(v.7f.dZ)){if(v.7f.dZ>dw){v.7f.dZ=dw}v.7f.oN=v.7f.dZ}if(J(v.7f.FV)){v.7f.oN=v.7f.dZ=v.7f.FV}if(1Q v.7f=="3x"){V(B 18 in v.7f){dU[18]=v.7f[18]}}}1G=1y 5f(dU);js("1G",1G,1);1G.FB(1b);1G.R0(1e);1G.on(5f.7C.R1,E(){1p("7G R4")});1G.on(5f.7C.R3,E(1a,29){!2j?o.U.cs():\'\'});1G.on(5f.7C.R2,E(1a,29){if(!2j&&v.8v==1&&9k()>1){FJ();nm();o.S?o.S.h6(o.3e):\'\'}});1G.on(5f.7C.RQ,E(1a,29){nm()});1G.on(5f.7C.SF,E(1a,29){nm()});1G.on(5f.7C.SE,E(1a,29){if(!2j){if(29.g3.5c!=o.5c){o.5c=29.g3.5c;o.S.4u()}o.5c=29.g3.5c;if(o.5c){1p("SD");o.Ga=1b.K("?sX")>-1;if(1e.1k>0&&1e.dW>0){if(1e.1k-1e.dW<10){if(o.hr>0){if(o.hr==1e.dW&&o.Fe==1e.1k){o.nu++;if(o.nu>2){o.nu=0;o.hr=-1;1G.9q();de(H);8u()}}F{o.hr=-1}}F{o.hr=1e.dW;o.Fe=1e.1k}}}}}if(v.8v==1){o.3e=1G.jU;o.S?o.S.h6(o.3e):\'\'}jM()});1G.on(5f.7C.SH,E(1a,29){if(J(29.F8)&&!2j){js("SJ",29.F8.SC)}if(dM>-1){1G.F9=dM;dM=-1}r6=H;FC()});1G.on(5f.7C.Sv,E(1a,29){js("Su",29,1)});1G.on(5f.7C.St,E(1a,29){!2j&&v.bL==1?qI():\'\'});1G.on(5f.7C.Sw,E(1a,29){if(!2j&&v.bL==1){qT()}});if(v.Sx==1){ko=1y SA(1G,2j)}F{1G.Sz=I}1G.on(5f.7C.Sy,E(1a,29){v.1p==1?cK.1p(29):\'\';js(29.1B+\'5f\',29,0,H);o.oJ=29;if(29.nC){9X(29.1B){1j 5f.F6.SK:1p("7G nC pb 2b");if(v.oY==1){oX()}F{2b=29.g3+\' (\'+29.1B+\')\';o.2y>0||2j||v.5c==1||8E?\'\':o.2y=4z();1G.9q();if(!2j){o.P.6a()}}1g;1j 5f.F6.SL:1p("7G nC P 2b, g4");1G.SW();1g;6X:2b="7G nC 2b, 9q";1G.9q();!2j?o.P.6a():\'\';1g}}F{1p("7G ",29.1B,29.g3,(29.nx?29.nx.mZ:\'\'));js("T1",(29.nx?29.nx.mZ:\'\'));if(8d>0){8d=2;p7()}}});a8=H}E nm(){if(!2j&&v.8v==1&&9k()>1){if(o.3e!=1G.jU){o.3e=1G.jU;o.S?o.S.h6(o.3e):\'\';1p("7G T0 "+o.3e)}if(4I(v.aB)&&o.3e>0){B fq=v.aB.2v(",");V(B k=0;k<fq.Q;k++){if(o.2o[o.3e].K(fq[k])>-1){1p(\'SU 4M\');1G.gy=o.3e-1;o.3e--;1g}}}}}E rc(){if(J(1V.FO)){if(qP()){if(!J(o.ws)){o.ws=1y SO()}ws=1y FO(1e,1b,{FM:H});ra=H}F{8E=I;1p("eO FD")}}}E FC(){p8()};G.5T=E(){p8()};E p8(){if(v.E8){if(1e.dp.Q>0){if(v.5T==1){1e.dp[1e.dp.Q-1].gv="C3"}F{1e.dp[1e.dp.Q-1].gv="3j"}if(!o.5T){o.5T=H;o.S.4u()}}F{if(o.5T){o.5T=I;o.S.4u()}}}}E oX(){1p("SM");!2j&&o.1z?o.U.2X():\'\';o.U.7E();8d=1;p7(o.1z)}E p7(x){if(8d>0){3b(p6);p6=1C(Fp,v.Fs*2x)}}E Fp(){if(8d>0){1p("SP");if(4v){if(8d==1){1G.FB(1b)}if(8d==2){1G.9q();de(H);1e.1z()}}F{3Z(1e,{\'2Q\':1b})}}}1e.1r(\'SQ\',Fy);1e.1r(\'2b\',o4);1e.1r(\'96\',8u);1e.1r(\'1z\',9p);1e.1r(\'4o\',di);1e.1r(\'Ca\',az);1e.1r(\'ge\',fX);1e.1r(\'kB\',fY);1e.1r(\'C8\',b4);1e.1r(\'C5\',cW);1e.1r(\'9b\',8H);1e.1r(\'C6\',9C);1e.1r(\'SS\',Fr);1e.1r(\'BV\',oA);1e.1r(\'BU\',ot);E Fy(){if(!4v&&!5X){!2j?o.U.cs():\'\'}}E o4(){if(!4v&&!5X){if(1e.2b){1p(1e.2b,1e.2b.mZ,1e.2b.8S);B x=1e.2b.mZ;2b=1e.2b.8S;if(2b==\'\'){if(x==1){2b="SR"}if(x==2){2b="pb"}if(x==3){2b="bT"}if(x==4){2b="eO k8"}}1p("Sr e6: ",2b)}if(p4&&v.oY==1){2b=1T;oX()}if(2b!=1T){6a()}}}E 6a(){!2j?o.P.6a():\'\'}E 8u(){!2j?o.P.8u():\'\'}E 9p(){if(!o.1A&&v.7j){1p(\'FA 1z\');4o();o.U.2F();L}if(4v&&8d>0){}F{if(!2j){B p0=o.U.8B()&&o.n9!=1;if(p0||ae==-1){B x=I;if(4v){if(J(o.1U)||J(o.5w)){if(p0){}F{1p(\'4o hq\');4o();x=H}}}if(!x){o.P.9p()}}}}}E di(){if(!jC){1p("S3");if(o.1z&&o.mM&&!1e.96&&v.Az==1&&!o.aZ){1p("Az");gi()}F{!2j&&!o.Fw&&1e.7I?o.P.di():\'\'}}}E az(){!2j?o.P.az():\'\';if(ae>-1){if(4z()>ae){1p(\'4o S4\',ae);4o();ae=-1}}}E fX(){!2j?o.P.fX():\'\'}E fY(){!2j?o.P.fY():\'\'}E b4(){if(2j){kJ()}F{o.P.b4();q7();if(4v&&8d>0){8d=0;1p("S5 up");1G.F7();gi();o.S.2F()}if(J(v.fm)){2z()}}}G.fm=E(){L(1e.ks/1e.dr)};E kJ(){if(1e.dr>0){O(1E,{"19":1E.26/(1e.ks/1e.dr)-2E(v.2j.2Z)})}F{if(pV<20){1C(kJ,1i);pV++}}}E q7(){if(v.kh==1){41(o.qN);o.qN=7q(pW,1i);pW()}}E pW(){if(1e){if(1e.dr>0){o.U.Fq(1e.ks/1e.dr);41(o.qN)}}}E 9C(){!2j&&!8E?o.P.9C():\'\'}E cW(){!2j?o.P.cW():\'\'}E 8H(){if(4v&&8d>0){}F{!2j?o.P.8H():\'\'}}E Fr(){o.U.qM()}E qP(){B lG=1V.Fu=1V.Fu||1V.S6;B gr=1V.Ft=1V.Ft||1V.S0;B j5=lG&&1Q lG.j5===\'E\'&&lG.j5(FL);B FP=!gr||gr.qR&&1Q gr.qR.RT===\'E\'&&1Q gr.qR.6C===\'E\';L j5&&FP}B qC="<7L C=\'1v:0.5\'>";E FJ(){if(!2j&&v.8v==1){B x=1G.bY;B q=-1;o.2o=[];if(x.Q>1){V(B i=0;i<x.Q;i++){if(J(x[i].19)){B y=o.P.FF(x[i],v.Fo);if(o.2o.K(y)>-1||v.RS==1){if(J(x[i].gk)){B yi=o.2o.K(y);yi>-1?o.2o[yi]+=" "+qC+" &hL;"+2E(x[yi].gk/2x)+\' \'+2D(\'dD\')+\'</7L>\':\'\';o.2o[i]=y+" "+qC+" &hL;"+2E(x[i].gk/2x)+\' \'+2D(\'dD\')+\'</7L>\'}}F{o.2o[i]=y}if(J(x[i].Fn)){o.8i[i]=x[i].Fn[0]}}F if(J(x[i].6Q)){o.2o[i]=x[i].6Q}F{o.2o[i]=i}if(J(v.4r)&&q==-1){if(v.4r==o.2o[i]){q=i}}if(J(o.4r)){if(o.4r==o.2o[i]){q=i}}}if(v.go==1){o.2o[x.Q]=2D("2t")}F{1G.Fc=0;1G.gC=0}if(v.F4==1||q>-1){1G.gC=0;if(v.gx=="7h"||(!o.1A&&v.4f==0)){1G.qq=q}F{if(v.gx=="eS"){1G.gy=q}}o.3e=q}F{if(v.go==1){o.3e=1G.bY.Q-1}F{o.3e=1G.RR}}jM()}o.S?o.S.4u():\'\'}}E jM(){if(o.8i.Q>0&&v.bL==1){qI();qT()}}E qI(){if(!2j&&v.bL==1){B x=1G.qg;o.7z=[];B 2B;if(x.Q>1){V(B i=0;i<x.Q;i++){2B=I;if(J(x[i].dI)&&o.8i.Q>0){if(x[i].dI!=o.8i[o.3e]){V(B j=0;j<o.8i.Q;j++){if(o.8i[j]==x[i].dI){2B=H}}}}if(!2B){o.7z[i]=J(x[i].6Q)?o.P.F5(x[i].6Q):i;if(J(v.aO)){if(v.aO==o.7z[i]){o.7l=i;1G.kk=i}}}}}}}E qT(){if(!2j){B x=1G.qg;B y=1G.kk;if(y>-1){if(J(x[y].dI)){if(o.8i.Q>0){if(o.8i[o.3e]!=x[y].dI){V(B i=0;i<x.Q;i++){if(x[i].6Q==x[y].6Q&&x[i].dI==o.8i[o.3e]){1G.kk=i;y=i;1g}}}}}o.7l=y;1p("7G RU",o.7l);o.S.v6(o.7l)}}};E 4z(){if(5X){L 62?o.3t.Y():0}F{L 1e.dW}};E 47(){B x=1e.1k;if(5X&&62){x=o.3t.1k()}if(J(v.4F)){x=v.4F}L x!=RV&&!r7(x)?x:0}G.2F=E(){B p=H;if(4v&&!r6){if(!a8){de(H)}1G.F7()}if(5X&&!62){kC(H);p=I}if(8E){if(!ra){rc()}ws.1z();p=I}if(1e.C.1f=="-RY"){G.dx()}p?gi():\'\'};B RX;E gi(){if(1b!="1I"){B pp=1e.1z();if(pp!==1T){pp.bF(E(){}).2U(E(2b){1p("S9",2b.8S);if(2b.8S.K(\'aI\')==-1&&2b.8S.K(\'Sm by\')==-1){if(v.r4==1){1p(\'Sl\');o.U.53();1e.1N=0;B qX=1e.1z();if(qX){qX.bF(E(){}).2U(E(e){1p("Sk",e.8S);if(o.1l.tv&&(4v||5X)){}F{o.S.2X();o.U.7E();js("Sn")}})}}F{o.S.2X();o.U.7E()}}})}}}G.jd=E(){if(o.5w||o.1U){if(o.8f){c7()}if(!o.g5&&o.1l.2l&&o.1l.3G){if(!1e.3D){1e.3D=H;jj=H}O(1e,{"1h":"2e","Z":-4b,"1f":-4b});ae=4z();if(!8E){1e.1z()}if(ae==0&&o.2y>0){gh=o.2y}}}};G.dx=E(){if(!o.g5&&(o.1l.2l||o.1l.3G)){O(1e,{"1h":"uF","Z":0,"1f":0});if(J(v.fm)){2z()}if(jj){!o.3D?1e.3D=I:\'\';jj=I}if(gh>0){o.2y=gh;gh=0}ae=-1}};G.2X=E(){1p(\'7I\');4o()};E 4o(){if(8E){ws.4o()}F{1e.4o()}};G.cq=E(){!1e.7I?2X():gi()};G.3L=E(x){if(5X&&62){o.3t.4a(x)}F{if(4v){if(v.So==1&&x>0&&pY()){dM=1G.gy;1G.F9=0}}1e.dW=x}};G.53=E(){1e.3D=H};G.6P=E(){1e.3D=I;if(o.2i=="1G"&&o.1l.4Z&&v.1U==1){if(!J(o.Fj)){jC=H;1e.4o();1C(E(){1e.1z();jC=I},10);o.Fj=H}}};G.3M=E(x){1e.1N=x};G.Fi=E(){if(o.Fg!=1e){B aI;B 9x;if(o.iW[1e]){aI=o.iW[1e];9x=o.qb[1e]}F{1V.oC=1V.oC||1V.Sq;9x=1y oC();aI=9x.Sj(1e);o.iW[1e]=aI;o.qb[1e]=9x}B gs=9x.Si();gs.gs.5e=v.Fk;aI.Fl(gs);gs.Fl(9x.Sb);o.qf=H;o.Fg=1e}};G.kD=E(){L!1e.7I};G.5E=E(){L v.5c==1||8E?H:o.5c};G.9v=E(){L 1e};G.qe=E(){3Z(1e,{\'S\':\'1\'});L H};G.4f=E(){3Z(1e,{\'4f\':\'9f\'});if(4v&&!a8){de(I)}if(5X&&!62){kC(I)}};G.6m=E(){B 6L="7t";if(1e.7I){6L="7I"}if(1e.96){6L="96"}L 6L};G.q8=E(x,y){2j=x;y.1K(1e);1E=y;if(x){if(v.2j.dR!=1){1e.3D=H}F{if(!o.3D){1e.3D=I}}kJ();if(o.2o.Q>0){if(4v){gA=o.3e;1G.gC=0;1G.gy=0}}}F{if(!o.3D&&v.2j.dR!=1){1e.3D=I}1e.1N=v.1N;q7();if(o.2o.Q>0){if(4v){1G.gC=-1;if(gA>-1){gA<1G.bY.Q?1G.qq=gA:\'\'}}}}};G.Y=E(){L 4z()};G.1k=E(){L 47()};G.8X=E(){B x=0;if(1e.7A){if(1e.7A.Q>0){B y=4z();V(B i=0;i<1e.7A.Q;i++){if((y>=1e.7A.1A(i)||y>=1e.7A.1A(i)-1i)&&y<=1e.7A.4F(i)){x=1e.7A.4F(i)}}x==0?x=1e.7A.4F(1e.7A.Q-1):\'\'}}if(J(v.4F)){x>v.4F?x=v.4F:\'\'}L x};G.2t=E(){L pY()};E pY(){B x=I;if(4v){if(a8){x=1G.Fc}}F if(5X){if(62){x=o.3t.2t()}}L x}G.3w=E(){L{"W":1e.ks,"19":1e.dr}};G.2Q=E(x){x=x.22(/\\(5d\\)/g,2A.5d());1b=x;o.9R!=2?o.9R=I:\'\';if(5X){if(62){o.3t.aI(x)}}F if(4v){4v&&1G?1G.9q():\'\';de(H);qh()}F{3Z(1e,{\'2Q\':x,\'3J\':0});q6();4o()}};E q6(){if(o.1l.6y){B y=1e.dp;if(y){V(B i=0;i<y.Q;i++){y[i].gv="Sa"}}y=1e.qg;if(y){V(i=0;i<y.Q;i++){y[i].Sd=(i==0?1:0)}}if(1V.Se){1e.1r(\'Sh\',E(1a){o.5x=1a.Sg=="Sf";!2j?o.U.h7():\'\'});1e.1r(\'QC\',E(1a){})}}qh()}G.5x=E(){1e.P0()};G.8g=E(){c7()};E qh(){if(o.1l.3G){if(J(1e.OZ)&&!o.1l.7J){o.8g=H}if(1R.P2&&!1e.P3){o.8g=H}}}E c7(){if(o.1l.6y){if(1e.P5==="kV-in-kV"){1e.FW("bI");o.8f=I}F{1e.FW("kV-in-kV");o.8f=H}}F{if(!1R.P4){2m(\'1e.OY().bF(p => {o.8f = H;}).2U(2b => {o.8f = I;});\')}F{2m(\'1R.OX().bF(ok =>{o.8f = I;}).2U(2b => {});\')}}};E oA(){o.8f=H};E ot(){o.8f=I};G.G7=E(x){if(62){o.3t.qs(x)}};G.FU=E(x){if(62){if(1e.7A.Q>0){o.3t.OQ(x)}}};G.OO=E(x){if(o.ws){o.ws.Gf(ws,x,-1)}};G.OR=E(x){if(o.ws){o.ws.Gf(ws,-1,x)}};G.Gg=E(x){if(a8){B y=2E(x);if(x==1G.bY.Q){y=-1;1G.gC=-1}if(v.gx=="eS"){1C(8H,4d);1G.gy=y}if(v.gx=="7h"){1p("7G 7h OT "+y);1G.qq=y}if(y==-1){o.3e=1G.jU}jM()}};G.jP=E(){L 1G};G.jS=E(){L 62?o.3t.OW():I};G.9k=E(){L 9k()};E 9k(){B x=0;if(a8){if(1G.bY){x=1G.bY.Q}}L x}G.aX=E(){L aX()};G.fh=E(){fh()};E fh(){if(1e){if(v.k5==1||v.5y==1){if(v.OV==1||v.5y==1){O(1e,{\'3x-ki\':\'5y\'})}F{O(1e,{\'3x-ki\':\'ET\'})}}F{O(1e,{\'3x-ki\':\'oO\'})}}}G.4T=E(){2z()};E 2z(){if(v.fm){2I(\'1F\',6T(v.fm).22(\'/\',\':\'))}}E aX(){B x=0;if(62){x=o.3t.bY()}L x}G.C2=E(x){if(a8){1G.kk=2E(x)}};G.gt=E(x,y){if(y=="1G"&&a8&&ko){ko.P6(x)}if(y=="3t"&&62){o.3t.P7(x)}};G.fl=E(x){if(x){1e.Pk=x}};G.qp=E(){B x=1e.Pj;B y=[];V(B i=0;i<x.Q;i++){if(x[i].jX.jY()==\'9s\'){x[i].6u("f7",nW);y.2H(x[i])}}V(B i=0;i<y.Q;i++){1e.3d(y[i])}};G.BX=E(x,y,z){if(x!=\'\'){if(x.K(\' or \')>0){B xx=x.2v(\' or \');x=xx[0]}B 9s=1R.1M(\'9s\');9s.6h(\'2Q\',x);9s.6h(\'aU\',y);9s.6h(\'Po\',\'BY\');9s.6h(\'gv\',\'C3\');if(z){9s.6h(\'6X\',\'\')}1e.1K(9s);9s.1r("f7",nW)}};E nW(e){if(e.44.aU&&o.4B){V(B i=0;i<o.2Y.Q;i++){if(o.2Y[i]==e.44.aU){o.4B.9c(i)}}}};G.k1=E(){L 2b?2b:\'\'};G.43=E(){41(o.Ph);4v&&1G?1G.9q():\'\';5X&&62?o.3t.Pa():\'\';8E&&ws?ws.2B():\'\';1e.6u(\'2b\',o4);1e.6u(\'96\',8u);1e.6u(\'1z\',9p);1e.6u(\'4o\',di);1e.6u(\'Ca\',az);1e.6u(\'ge\',fX);1e.6u(\'kB\',fY);1e.6u(\'C8\',b4);1e.6u(\'C5\',cW);1e.6u(\'9b\',8H);1e.6u(\'C6\',9C);1e.6u(\'BV\',oA);1e.6u(\'BU\',ot);1e.2Q=\'\';if(1E.jX=="Eg"){1E.nX.9Q.3d(1e)}F{1E.3d(1e)}1e=1W}};B q5=E(){B b=[];B eY=[];B 54=[];B 9b=I;B kZ;B 8A=I;B 1d;B X;if(o.4Q){o.4Q.1m();o.4Q=1W}B jv;o.4U=[0.25,0.5,0.75,1,1.25,1.5,2];if(v.1d.ON==1&&J(v.1d.fZ)){v.1d.fZ=v.1d.fZ.22(/\\n/ig,\'\');o.4U=v.1d.fZ.2v(",")}o.cB=o.4U.K(\'1\')>-1?o.4U.K(\'1\'):o.4U.K(1);o.9t==3?o.9t=o.cB:\'\';V(B i in o.5n){if(o.5n.2n(i)){!J(v.1d[i])?v.1d[i]=5:\'\';o[\'cH\'+i]=[\'+ \'+v.1d[i]+\'%\',\'&Om; \'+v.1d[i]+\'%\',(o.5n[i]*1i+\'%\')]}}if(v.1u.cw==1&&o.1l.4Z&&v.f8==1){v.1u.1m=0}B lo=I;B 8y=0;B mE=0;B eM=I;B v0=H;B gd;B bg=1y E2();B 1d;B 5K=[];B nE=I;B nT=I;B g0=0;B bh=[];if(v.eq.1h=="S-2f"){v.eq.1h="S"}V(B y in v){if(v.2n(y)){if(y.K("8U")==0&&v[y]){!J(v[y].oB)?v[y].oB=v[y].5K:v[y].5K=v[y].oB;5K[v[y].5K]=y;if(v.eq.1h!="S"){if(v[y].1h=="S-2f"){bh.2H([y,v[y].5K]);nE=H}F{if(v[y].1h=="S"||v[y].1h==1T){nE?nT=H:\'\'}}}g0<v[y].5K?g0=v[y].5K:\'\'}}}if(nT){bh.BL(E(a,b){L a[1]-b[1]});V(B i=0;i<bh.Q;i++){5K[v[bh[i][0]].5K]=1W;v[bh[i][0]].5K=g0+1;g0++;5K[v[bh[i][0]].5K]=bh[i][0]}}if(v.1u.1m==1&&v.1u.cj==1){o.1u=1M("1Z");o.1J.1K(o.1u);O(o.1u,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':\'1i%\',\'19\':\'1i%\',\'4W\':\'1f 0.3s 7V-5Y\',\'3S-2P\':\'1I\'})}B 7o=1M("1Z");if(v.1u.1m==1&&v.1u.cj==1){o.1u.1K(7o)}F{o.1J.1K(7o)}O(7o,{\'1h\':\'2e\',\'Z\':0,\'2J\':0,\'W\':\'1i%\',\'19\':v.1u.h});7o.ds=E(){!o.1l.2l?o.U.BF():\'\'};if(o.s6){2W(bg.c());2W(7o)}V(B i=1;i<5K.Q;i++){if(5K[i]){B y=5K[i];if(y){B 1c=v[y].1c;if(o.1l.2l){if(1c=="1N"&&v[y].cd=="4G"){}F{if(1c=="1N"&&v.Oq==1&&o.1l.2l){v[y].fD=0}F{if(1c=="1N"||(1c=="2a"&&v.Oj)){v[y].on=0}}}}if(o.s6){v[y].on=0}if(v[y].on==1){if(1c=="2C"||1c=="1N"){b[y]=1y Dn(y,1c);b[y].2z(b[y].s("w"))}F{b[y]=1y Ed(y)}eY.2H(y);if(b[y].g("1c")=="1L"){if(b[y].s("1D")==\'\'){if(b[y].s("B")!=\'\'){if(!J(v[b[y].s("B")])){b[y].1Y("2k",I)}}F{b[y].1Y("2k",I)}}}if(b[y].g("1c")=="4w"){B lu=b[y].s("2N");if(lu){if(lu.K("2I:")==0&&lu.K(",0/1")>0){B z=lu.2v(",");2I(z[0].1n(4))==0?b[y].bw(0):\'\'}}}b[y].1Y("1F",b[y].s("1F"))}}}}if(J(v.1d)){if(1Q(7u)==\'E\'){1d=1y 7u("1d");v.1d.8P==1?1d.1o():1d.1m()}F{o.Oi=H}}if(J(v.X)){if(1Q(7u)==\'E\'){X=1y 7u("X");if(J(o.X)){X.uE(o.X);if(v.X.jg==0||!J(v.X.jg)){v.X.8P==0?X.1m():\'\'}F{X.1o()}}F{X.1m(1)}h8()}}nV();v7();2z(H);4m();v9();v0=I;E BS(R){B x=0;B Oa=I;if(R){if(R.g("1c")==\'2C\'){x=54.Z+R.s("3P");if(54.eE!=1W){}F{54.eE=[]}}F{if(54.eE!=1W){B bm=R.g("W")+R.s("4t")+R.s("3P");if(hb(R)){bm=0}if(R.s("3j")==1&&!R.g("1o")){bm=0}if(R.s("9G")>0){bm=0}x=bg.g("w")-v.1u.n6*1-bm+R.g("W")/2+R.s("3P");B i=0;54.2f-=bm;V(i=0;i<54.eE.Q;i++){B bv=b[54.eE[i]];if(bv.s("9G")>0){O(bv.c(),{"Z":(bv.g("x0")-bm)})}F{O(bv.c(),{"Z":(bv.g("x")-bm)})}bv.1Y("x0",bv.g("x"))}54.eE.2H(R.g("18"));R.1Y(\'dv\',1)}F{if(R.s("3j")==1&&!R.g("1o")){if(R.g("1c")=="1N"){if(R.s("1m")==1&&R.s("fD")==1&&eM){8y+=R.g("W")+R.s("3P")+R.s("4t");eM=I}}}F{if(R.s("9G")>0){x=54.Z+R.s("3P")+R.s("4t")}F{B 2B=I;if(R.g("1c")=="1N"){if(R.s("1m")==1&&R.s("fD")==1){if(!o.bQ&&!o.8N){2B=H;eM=I}F{if(!eM){8y-=R.g("W")+R.s("3P")+R.s("4t");eM=H}}}}if(hb(R)){2B=H}if(!2B){54.Z+=R.g("W")/2+R.s("3P");x=54.Z;54.Z+=R.g("W")/2+R.s("4t")}F{x=54.Z}}}}}}L x};G.BG=E(){nV()};E nV(){if(o.kt){1Q BH==\'E\'?o.2V=1y BH():\'\'}}E v1(R){B W=o.2a&&v.1u.i3==0?o.a2:o.3f;B 19=o.4N;B 9E=0;if(R!=bg){9E=W/2+R.s("3P")-R.s("4t")}B d1=19/2;B nG=R.g("W");B n7=R.g("19");B 1h=R.s("1h");if(1h.K("7P")>-1){9E=o.3f/2+R.s("3P")-R.s("4t")}if(1h.K("1f")==0){d1=n7/2+(R.s("BN")*o.4N/1i)}if(1h.K("2J")==0){d1=o.4N-(R==bg?n7:n7/2)-(R.s("BM")*o.4N/1i)}if(1h.K("2f")>-1){9E=o.3f-nG/2+R.s("3P")-R.s("4t")-(R.s("Ot")*o.3f/1i)}if(1h.K("Z")>-1){9E=nG/2+R.s("3P")-R.s("4t")+(R.s("jp")*o.3f/1i)}if(1h=="cl"){9E=-o.t8/2+(R.s("jp")*o.t8/1i)+R.s("3P")-R.s("4t");d1=-o.mm/2-(R.s("BM")*o.mm/1i)+(R.s("BN")*o.mm/1i)}if(1h.K("S")>-1){B cx=BS(R);9E=(bg?(bg.c()?4X(bg.c().eK):0):0)+cx;if(1h=="S-2f"){9E+=8y}if(v.1u.1h=="1f"){d1=v.1u.h/2-(v.c8<0?v.c8:0)}F{d1=19-v.1u.h/2}}L{x:9E,y:d1+R.s("7W")-R.s("d5")}}E 2z(9y){B w=o.2a&&v.1u.i3==0?o.a2:o.3f;B h=o.4N;O(bg.c(),{\'1f\':(v.1u.1h=="1f"?0:o.4N-v.1u.h)-v.c8});bg.1Y("y0",(o.4N-v.1u.h-v.c8));if(v.1u.i3==0&&bg){O(bg.c(),{\'W\':w,\'Z\':0,\'2L-Z\':0});bg.1Y("w",w);if(o.2a){O(bg.c(),{\'Z\':\'50%\',\'2L-Z\':-w/2})}}54={"Z":v.1u.n6*1,"2f":(bg.g("w")-v.1u.n6*1)};B oy=I;if(!bg.g("1o")){bg.1Y("2k",H);oy=H}B 18;V(B i=0;i<eY.Q;i++){18=eY[i];if(b[18]){B cc=v1(b[18]);if(cc){if(b[18].s("5F")=="1h"){if(J(o.6H[18])){o.6H[18].BT(b[18].g("x0"),cc.x,b[18].g("y0"),cc.y)}}b[18].1Y("x0",cc.x);b[18].1Y("y0",cc.y);if(b[18].s("3j")==1&&!b[18].g("1o")&&!9y){uG(b[18])}F{O(b[18].c(),{"1h":"2e","Z":b[18].g("x0"),"1f":b[18].g("y0")})}}}}if(oy){bg.1Y("2k",I)}8y=0;V(18 in b){if(b.2n(18)){if(b[18].s("1h")=="S-2f"&&b[18].g("1c")!="2C"&&8y>-1){8y=54.2f-54.Z}if(b[18].g("1c")=="2C"&&bg){B dg;if(b[18].s("OE")==1){dg=b[18].s("w")}F{if(b[18].s("1h").K("S")>-1){dg=54.2f-54.Z-b[18].s("3P")-b[18].s("4t");O(b[18].c(),{"Z":(4X(bg.c().eK)+54.Z+b[18].s("3P")+dg/2)});8y=-1}F{dg=bg.g("w")-b[18].s("3P")-b[18].s("4t");O(b[18].c(),{"Z":(4X(bg.c().eK)+b[18].s("3P")+dg/2)})}}b[18].1Y("x0",b[18].g("x"));b[18].2z(dg)}}}if(1d){g9(1d)}if(X){g9(X)}if(lo||o.2a||mE!=8y){4m()}}E uG(b){B Z=0;B 1f=0;if(b.s("1h").K("2f")>-1&&b.s("1h").K("S")==-1){Z=o.3f+b.g("W")+10}if(b.s("1h").K("Z")>-1){Z=-b.g("W")-10}if(b.s("1h").K("1f")>-1){1f=-b.g("19")*2}if(b.s("1h").K("2J")>-1||b.s("1h").K("S")>-1){1f=o.4N+b.g("19")+b.g("W")+10}if(Z>0){O(b.c(),{"Z":Z})}if(1f>0){O(b.c(),{"1f":1f})}}E g9(x){B 1f=-4b;x.g2();B y=o.4N-v.1u.h*(x.s("1h").K("1f")>-1?1:2);if(x==X&&v.oK==1){y=o.4N}B fR=y-(o.2a&&!o.1l.2l?(1i+x.s("fV")*1):x.s("fV"))-(x==X&&x.s("fV")*1==0?x.s("7W"):0);fR<1i?fR=1i:\'\';O(x.c(),{\'5N-19\':fR});x.co()?O(x.co(),{\'5N-19\':fR}):\'\';if(x.g("1o")){1f=o.4N/2-x.g("19")/2+x.s("7W")-x.s("d5");if(x.s("1h").K("1f")>-1){1f=x.s("7W")-x.s("d5")}if(x.s("1h").K("2J")>-1){1f=o.4N-(v.1u.1h!=\'1f\'?v.1u.h:0)-x.g("19")+x.s("7W")-x.s("d5")}1f<0?1f=0:\'\'}if(x.g("18")=="1d"&&o.ez){B BR=o.3f-x.g("W")-x.s("4t");if(o.ez>BR){O(x.c(),{"1h":"2e","2f":x.s("4t"),"Z":"2t","1f":1f})}F{O(x.c(),{"1h":"2e","Z":o.ez,"2f":"2t","1f":1f})}}F{if(x.s("1h").K("2f")>-1){O(x.c(),{"1h":"2e","2f":x.s("4t")-x.s("mF"),"Z":"2t","1f":1f})}F if(x.s("1h").K("Z")>-1){O(x.c(),{"1h":"2e","Z":x.s("3P"),"2f":"2t","1f":1f})}F{if(x.g("18")=="X"&&x.s("3A")==1){O(x.c(),{"1h":"2e","Z":o.3f/2-x.g("W")/2+x.s("3P")/2-x.s("4t")/2,"1f":1f})}F{B l=o.3f/2-x.g("W")/2+x.s("3P")-x.s("4t");O(x.c(),{"1h":"2e","Z":(l>0?l:0),"1f":1f})}}}x.9r()};G.dF=E(18){B R=b[18];B 1c=R.g("1c");if(1c){B d=1y 6K();o.9u=d.9h();if(1c&&1c!=""){4D(R)}}};G.o9=E(z,x,y){V(B 18 in b){if(b.2n(18)){if(b[18].s(z)==x){b[18].1Y(y?"5V":"2W")}}}};G.uq=E(x,s){B y=7m(s,x);L y};E 4D(R,1B){o.jc=H;jv=R;B a=R.g("1c");if(a=="1z"){o.U.2F();if(v.1X.on==1&&v.1X.2G==1&&v.1X.ob==1){6W(\'1z\',1)}}F{if(a=="4o"){o.lF=0;o.U.2X();if(v.1X.on==1&&v.1X.2G==1&&v.1X.ob==1){6W(\'1z\',0)}}if(a=="2B"){o.U.oe()}}if(a=="o7"){o.U.3L(0,I)}if(a=="2a"){!o.4R?o.U.8b():\'\'}F{if(a=="o0"){o.U.7R()}}if(a=="2C"){B ld=o.P.1k();B lt=R.g("2r")*ld;if(v.4l>0){ld-=v.4l;lt=R.g("2r")*ld+v.4l}if(v.BQ>0){if(v.BQ/ld<=1-R.g("2r")){L}}o.U.3L(lt,H);if(o.3n){o.3n.nY(lt,ld);o.2y>0?o.2y=1T:\'\'}}if(a=="1N"){B x=R.g("2r");x<0.OI?x=0:\'\';x>1?x=1:\'\';if(R.s("cd")=="4G"){x=4A(x*o.4U.6q(-1)[0]).rW(1);o.U.8x(x,1)}F{if(o.5j&&v.q0==1){3z.8O("pZ",x);if(R.g("2r")>0||o.1l.7J||v.kH==0){3z.o5("io")}F{3z.8O("io",1)}}o.U.3M(x)}}if(a=="4P"){if(o.5j&&!o.1l.7J&&v.kH==1){3z.8O("io",1)}o.U.53();if(v.1X.2G==1&&v.1X.Cy==1){6W(\'4P\',0)}}F{if(a=="94"){if(o.5j){3z.o5("io")}o.U.6P();if(v.1X.2G==1&&v.1X.Cy==1){6W(\'4P\',1)}}}if(a.K("Y")==0){R.OL()?R.gS():R.On()}if(a=="mz"){o.P.tx()}if(a=="1F+"){o.P.cV(0.1)}if(a=="1F-"){o.P.cV(-0.1)}if(a=="1F"){o.P.cV(0)}if(a=="5c"){2I("tQ");R.1Y("tH",1);R.1Y("dC",1)}if(a=="2V"){js("2V");ve()}if(a=="1d"){o.ez=1T;if(1d){if(!1d.g("1o")){1d.1o()}F{1d.1m()}}}if(a=="X"){if(o.eF==a){L}if(J(v.X)){if(X.g("1o")){X.1m()}F{1C(E(){X.1o()},1i)}}}if(a=="7h"){o.S.aL()}if(a=="cX"){o.S.ch()}if(a=="4w"){if(R.s("er")==1&&R.s("2N")!=""){B x=4q(R.s("2N"));if(o.eF==a+x){L}if(x.K(\'{Y}\')>-1){x=x.22(\'{Y}\',(J(o.3n)?o.3n.9P().t:o.P.Y()))}if(x.K(\'{3i}\')>-1){x=x.22(\'{3i}\',o.P.bu())}if(x.K(\'{1L}\')>-1){x=x.22(\'{1L}\',v.1L.22(/,/ig," "))}if(x=="5x"){o.P.fs()}if(x=="OJ"){o.U.3L(R.s("jp")*o.P.1k()/1i);!o.1z?o.U.2F():\'\'}R.s("Cw")==1?o.U.2X():\'\';B y=x.2v(",");if(x.K("2I:")==0){B z=x.1n(4).2v(";");V(B i=0;i<z.Q;i++){y=z[i].2v(",");if(y.Q>1){if(y[0]==\'4a\'){if(v.1X.2G==1&&v.1X.oU==1){6W(\'4a\',y[1]>0?1:0)}}2I(y[0],y[1],R);y[1]==\'0/1\'||y[1]==\'1/0\'?uy():\'\'}F{if(y[0]=="Cu"){B ss=2I(y[0]);if(ss){if(ss.K("29")>-1){if(v.OD==1){B 3Q=1R.1M(\'3Q\');3Q.6h(\'2Q\',ss);O(3Q,{1h:"ox",2f:(J(v.lq)?v.lq:20),2J:(J(v.lq)?v.lq:20),W:0,4W:"W 0.5s aA-OC(.75,-0.5,0,1.75)"});3Q.C.59=CB;1R.9Q.1K(3Q);1C(E(){O(3Q,{W:(J(v.CG)?v.CG:4L)})},1);3Q.ds=E(){G.5u.3d(G)}}if(v.Ow==1){B a=1M("a");a.9o=ss;a.5W=y[0]+".h1";a.2r()}}}F{1p(y[0]+" 2b")}}F{2I(y[0])}}}}F{if(x.K("js:")==0){if(x.K("(")>0&&x.K(")")>0){2m(x.1n(3))}F{2m(y[0].1n(3)+\'(\'+(J(y[1])?\'"\'+y[1]+\'"\':\'\')+(J(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}}if(x.K("1a:")==0){nF(x.1n(6),o.P.Y())}if(x.K("2V:")==0&&o.2V){o.2V.2I(x.1n(6))}if(x.K("nQ:")==0&&o.5L){2I("nQ",x.1n(7))}if(x.K("3v")==0||x.K("/")==0||x.K("?")==0||x.K("1b:")==0){x.K("1b:")==0?x=x.1n(4):\'\';1V.7S(x,R.s("CH"))}if(x.K("5W")==0){o.U.m0()}if(x=="2I:8g"){o.P.c7()}}if(x.K("1d#")>-1){if(1d){B si=x.1n(9).2v(",");if(1d.g("1o")&&1d.g("7S")==si[0]){o.ez=1T;1d.1m()}F{o.ez=R.g("x")-R.g("W")/2;V(B i=0;i<si.Q;i++){i==0?1d.1o():\'\';1d.7S(si[i])}}}}if(x.K("1d:")>-1&&v.1d.Ov==1){if(!o.4Q){o.4Q=1y Oy()}if(v.1d.ea==1){if(1B=="6s"){o.4Q.1o(x)}F{o.4Q.fI(x)}}F{if(!1B){o.4Q.fI(x)}}}if(x=="En"){o.U.eA();o.su=0;R.1Y("2W");B bl=7m("2N","4p");if(bl){bl.1Y("2W")}}if(x=="4p"){R.6k("OK");R.s("j2")?1V.8T.9o=4q(R.s("j2")):\'\'}}}};G.1L=E(t){B y=I;V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1L"){if(b[x].s("B")==t||t=="1L"){if(b[x].s("1m")==1&&b[x].s("rP")==1&&o.1z){y=H}if(v[t]==\'\'||y){b[x].1Y("2k",I)}F{b[x].1Y("2k",H)}b[x].6k(v[t])}}}}nJ()};G.CE=E(){nJ()};G.nM=E(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="4w"){if(b[x].s("1B")=="1D"){b[x].8K()}}}}};E nJ(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="4w"){if(b[x].s("1B")=="1D"){b[x].DE(H)}}}}}E ve(){if(J(o.2V)){o.2V.jJ()}}G.CC=E(){ve()};G.BZ=E(){if(v.1L!=\'\'){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1L"){B y=I;if(!b[x].g("1o")){y=H;b[x].1Y("2k",H)}b[x].6k(v.1L);if(y){b[x].1Y("2k",I)}}}}}};G.OB=E(){v7()};E v7(){if(v.db){if(1Q(v.db)=="3x"){V(B x in v.db){if(v.db.2n(x)){gZ(x,v.db[x])}}}}};G.Ct=E(y,z){gZ(y,z)};E gZ(y,z){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="4w"&&b[x].s("1B")=="1D"){if(b[x].s("4s")==y){if(!b[x].g("1o")||b[x].s("3j")==1){b[x].1Y("CX");b[x].1Y("2k",H)}b[x].gZ(z)}}}}};G.4T=E(){2z()};G.OA=E(){2z(H)};G.vo=E(){g9(1d)};G.g2=E(){g9(X)};G.2F=E(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1z"){b[x].On()}}}if(G.da()&&v.X.eB==1){G.aC()}o.1z=H;4m()};G.2X=E(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="4o"||b[x].g("1c")=="2B"){b[x].gS()}}}if(X){if(v.X.Eq==1&&!X.4J()){X.1o()}}o.1z=I;G.6G();4m();if(v.1u.1m==1&&v.1u.e4==1){hl(H)}};G.53=E(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="4P"){b[x].On()}G.3M(0)}}4m()};G.6P=E(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="94"){b[x].gS()}}}if(v.1N<0.1){v.1N=0.5;o.U.3M(v.1N)}F{G.3M(v.1N)}4m()};G.3M=E(1N,y){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1N"){if(b[x].s("cd")!="4G"){b[x].6D(1N,1,(y=="no"?y:H))}}if(b[x].g("1c")=="4P"){b[x].uh(1N)}}}4m()};G.8b=E(){B bl=7m("1c","2a");if(bl){bl.On();bl.1Y("1F",bl.s("1F"))}4m();lo?1C(4m,4d):\'\';eQ()};G.7R=E(){B bl=7m("1c","2a");if(bl){bl.gS()}2z();41(o.hi);4m()};G.8u=E(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1z"){b[x].tV()}}}};G.qi=E(){4m()};E 4m(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")!="cC"){aW(b[x])}}}aW(bg);if(mE!=8y){mE=8y;2z()}if(v.1u.1m==1&&v.1u.cj==1){e3(!o.eu&&!o.56&&!o.2a&&o.1z&&v.1u.cw!=1&&!o.4R)}};E hk(){B 1o=8A&&v.1u.ha==1;if(!o.1z&&v.1u.1m==1&&v.1u.e4==1){1o=I}if(1o){V(B x in b){if(b.2n(x)){if(b[x].g("1c")!="cC"){aW(b[x],I)}}}O(o.1J,{"6t":"6X"});o.mu=H;aW(bg,I);if(bg.g("1o")){fP()}e3(I)}}E hl(){B 1m=o.1z&&v.1u.ha==1&&!o.3u&&!o.bS;if(!o.1z&&v.1u.1m==1&&v.1u.e4==1){1m=H}if(1d){if(1d.g("1o")&&o.us){1m=I}}if(o.4R){1m=I}if(1m){V(B x in b){if(b.2n(x)){if(b[x].g("1c")!="cC"){aW(b[x],H)}}}aW(bg,H);if(!bg.g("1o")){8A=H;o.P.uO();if(o.1z){O(o.1J,{"6t":"1I"});o.mu=I}}e3(H)}}E eQ(){if(v.1u.ha==1){if(v.1u.cw==1&&!o.2a&&!o.aJ){}F{41(o.hi);o.hi=7q(hl,((v.1u.8I>0?v.1u.8I:v.1u.gb)*2x))}}}E aW(R,d3){B 1m=I;B 1o=I;B d6=I;if(v.1u.1m==1){if(!o.eu&&!o.56&&!o.2a&&o.1z&&v.1u.cw!=1&&!o.4R){1m=H;1o=I;d6=H}F{1m=I;1o=H}if(J(d3)&&!o.4R){1m=d3;1o=!1m}if(v.1u.1m==1&&v.1u.cj==1&&(R.s("1h").K("S")==0||R.s("1c")=="2C")){1m=I;1o=H}if(v.1u.e4==1&&!o.1z){1m=H;1o=I;d6=I}}F{if(R.s("1m")!=1){1o=H}}if(1o&&!o.mu){O(o.1J,{"6t":"6X"});o.mu=H}B a=R.g("1c");if(a=="4w"&&R.s("1h").K("S")==-1){1m=I;1o=H}if(o.4R){if(a=="2C"){if(o.P.1k()==-1){1m=H;1o=I}}}B uY=I;B hp=hb(R);if(R.s("1m")==1){if(R.s("Oz")==1){if(d6||d3||(o.1z&&!o.56)){!d6&&!d3?\'\':hp=H}}if(R.s("Pp")==1){if(o.1z&&!o.56){hp=H}}if(R.s("Cr")==1||R.s("Cl")==1||R.s("AT")==1){lo=H}}if(hp){1m=H;1o=I}F{!1m?1o=H:\'\'}if(R.s("1c")=="1N"){if(R.s("1m")==1&&R.s("fD")==1){1m=H;1o=I;if(!d6&&(o.8N||o.bQ)&&!d3&&R.s("bW")!=1){1m=I;1o=H}F{uY=H}}}if(o.aZ||(!o.1A&&v.1u.1m==1&&v.1u.v3==1)||(!o.9f&&v.1u.1m==1&&v.1u.AZ==1)){if(R.s("1h").K("S")>-1||R.s("1h").K("2J")>-1){1m=H;1o=I}if(v.1u.cw==1&&!o.2a){1m=I;1o=H}}if(1d){if(1d.g("1o")&&v.1d.8P!=1){d6=I;d3=I}}if(a=="2V"){if(J(o.2V)){if(o.2V.4J()){1m=H;1o=I;R.1Y("5F","1I")}}}if(a=="X"||a=="7h"||a=="cX"||R.s("Cj")==1){if(X){if(X.4J()&&R.s("Cj")!=0){1m=H;1o=I;R.1Y("5F","1I")}}F{1m=H;1o=I}}if(o.Pq==1){1m=H;1o=I}if(uY){B cc=v1(R);if(cc){cc.y>0?R.1Y("y0",cc.y):\'\';O(R.c(),{"1h":"2e","1f":R.g("y0")})}}if(1m){9L(R,(v0?H:I))}if(1o){AF(R)}if(R==bg){if(!1m&&1o){fP();5V(7o);8A=I;gd==0?js("ui",1):\'\';gd=1;o.5U&&o.9A?o.5U.1o():\'\'}if(1m&&!1o&&!o.4R){o.P.uO();ck();2W(7o);8A=H;gd==1?js("ui",0):\'\';gd=0;o.5U&&o.9A?o.5U.1m():\'\'}if(X){if(v.X.8P==1&&!X.4J()){if(1o||o.aZ){if(v.X.Cd==1&&o.2a){}F{if(!X.g("1o")){if(v.X.Cf==1){!o.1z?X.1o():\'\'}F{X.1o()}}}}F{if(1m&&X.g("1o")){X.1m()}}}}}};E hb(R){B x=I;B a=R.g("1c");if(R.s("1m")==1){if(R.s("rP")==1){o.1z?x=H:\'\'}if(R.s("e4")==1){!o.1z?x=H:\'\'}if(R.s("Qj")==1){o.1l.kg?x=H:\'\'}if(R.s("Qi")==1){o.1l.2l?x=H:\'\'}if(R.s("Cl")==1){if(o.3f>R.s("Cq")){R.1Y("bW",1);x=H}F{R.1Y("bW",0)}}if(R.s("Cr")==1){if(o.3f<=R.s("Cp")){R.1Y("bW",1);x=H}F{R.1Y("bW",0)}}if(R.s("Qc")==1){o.1A?x=H:\'\'}if(R.s("EN")==1&&R.s("Cm")>0){if(o.P.Y()>=R.s("Cm")){x=H}}if(R.s("EO")==1&&R.s("Cn")>0){if(o.P.Y()<R.s("Cn")){x=H}}if(R.s("Q4")==1){if(o.1A||!o.3n||o.P.5E()){x=H}if(o.3n){if(o.3n.9P().t==0){x=H}}}if(R.s("v3")==1){!o.1A?x=H:\'\'}if(R.s("jk")>0){x=H}if(R.s("Q3")==1){if(J(R.s("BE"))){3r[R.s("BE")]?x=H:\'\'}}if(R.s("Q8")==1){if(!J(R.s("db"))){x=H}}if(R.s("Qk")==1){if(J(R.s("AW"))){!3r[R.s("AW")]?x=H:\'\'}}if(R.s("Qx")==1&&o.1l.4Z){!o.1A||o.mU?x=H:\'\'}if(R.s("Qw")==1){!o.P.96()?x=H:\'\'}if(R.s("Qv")==1){!o.P.5E()?x=H:\'\'}if(R.s("Qy")==1){!o.56?x=H:\'\'}if(R.s("QB")==1){!o.2a?x=H:\'\'}if(R.s("AT")==1){o.2a?x=H:\'\'}if(R.s("Qu")==1){!o.3D?x=H:\'\'}if(R.s("Qt")==1){o.P.5E()&&o.P.bu().K("?sX")==-1?x=H:\'\'}if(R.s("DK")==1){6b(o.2g)?x=H:\'\'}if(R.s("AZ")==1){!o.9f?x=H:\'\'}if(R.s("Qo")==1){o.9f?x=H:\'\'}if(R.s("Qn")==1){o.nf?x=H:\'\'}if(R.s("Qm")==1){!o.nf?x=H:\'\'}if(R.s("CQ")==1){if(R.g("gQ")){x=H}}if(R.s("Qq")==1){!o.ab?x=H:\'\'}if(R.s("T3")==1){o.ab?x=H:\'\'}if(R.s("Qr")==1){if(v.4f==1&&v.cm==1){if(o.2i=="4h"&&!J(v.2g)&&v.vq==0){if(!o.1A||o.P.6m()=="96"){if(v.2g==\'\'){}F{x=H}}}}}}if(a=="4w"){if(R.s("2N")){if(R.s("2N")=="2I:5x"||R.s("2N")=="5x"){if(!o.5x&&!o.g5){x=H}}if(R.s("2N")=="2I:8g"){if(!o.8g||(!o.1A&&v.4f==0)){x=H}}if(R.s("2N")=="2I:B0"){if(!o.nf){x=H}}if(R.s("2N").K("5T")>-1){if(!o.5T){x=H}}}}if(a=="X"||a=="7h"||a=="cX"){if(X){if(X.4J()){x=H}}F{x=H}}if(a=="1d"){if(1d){if(1d.4J()){x=H;R.1Y("5F","1I")}}F{x=H}}if(R.g("1B")=="1D"){if(R.g("Q")==0){x=H}}if(R.g("1d#")){if(!R.g("1Y#3W")){x=H}}if(R.s("3R")==1){B cb=1R.8D("Q2"+v.id);if((o.P.1k()==0&&o.P.Y()==0)||!o.4C||!6b(cb)||!o.PC){x=H}}if(R.s("tJ")==1){!x?R.1Y("tJ",1):\'\'}if(a=="1k"){if(o.P.5E()){x=H}}if(R.g("18")=="rQ"&&o.1l.2l){if(o.aZ&&o.1l.9K){x=H}}L x}E 9L(R,uH){if(R.g("1o")){if(o.aJ||R.s("5F")=="1I"||uH){R.1Y("2k",I)}F{AG(R)}R.1Y("1o",I)}};E AF(R){if(!R.g("1o")){if(R.s("5F")=="1I"||o.aJ){R.1Y("2k",H);if(o.aJ&&R.g("18")!=\'bg\'){R.1Y("1v",1)}if(R.g("1c")=="1N"){if(o.fA){uG(R)}}}F{AD(R)}if(R.s("1c")=="1N"){o.S.3M(o.3D?0:v.1N)}if(R.s("1c")=="2C"){o.U.v4()}R.1Y("1o",H)}};E AG(R){uo(R.g("18"));B 5A="gD|";B 5b="0|";B 1m=1;B a=R.s("5F");B p=R.s("1h");if(a=="1F"){5A+="1F|";5b+="0|"}if(a=="1h"){if(p.K("2f")>-1&&p.K("S")==-1){5A+="x|";5b+=4X(o.3f+R.g("W"))+"|"}if(p.K("Z")>-1){5A+="x|";5b+=4X(-R.g("W"))+"|"}if(p.K("1f")>-1){5A+="y|";5b+="0|"+(-R.g("19"))+"|"}if(p.K("2J")>-1||p.K("S")>-1||p=="cl"){5A+="y|";if(R.g("1c")=="2C"||R.g("1c")=="1N"){5b+=4X(o.4N+R.s("h")+(R.s("h")<20?20-R.s("h"):0))+"|"}F{5b+=4X(o.4N+R.g("19"))+"|"}}if(p=="7P"){5A+="1F|";5b+="0|"}}B m=1y 5t({"mc":R,"me":R.g("18"),"1B":5A.1n(0,5A.Q-1),"to":5b.1n(0,5b.Q-1),"1m":1m})};E AD(R){uo(R.g("18"));B 5A="";B 5b="";B a=R.s("5F");B p=R.s("1h");if(R.g("1v")!=1){5A="gD|";5b=(R.g("18")==\'bg\'?v.1u.a:"1")+"|"}if(a=="1F"){if(R.g("3c")!=R.s("1F")){5A+="1F|";5b+=R.s("1F")+"|"}}if(a=="1h"){if(p=="7P"){if(R.g("3c")!=R.s("1F")){5A+="1F|";5b+=R.s("1F")+"|"}}F{if(p.K("S")>-1){if(R.g("y")!=R.g("y0")){5A+="y|";5b+=R.g("y0")+"|"}}F{5A+="x|y|";5b+=R.g("x0")+"|"+R.g("y0")+"|"}}}if(5A!=""&&5b!=""){B m=1y 5t({mc:R,me:R.g("18"),1B:5A.1n(0,5A.Q-1),to:5b.1n(0,5b.Q-1),1o:1})}F{R.1Y("2k",H)}};G.iV=E(18,1B,uH){B 4T=I;B 2B=I;B R=b[18];B 1c=R.g("1c");B 2N=R.s("2N");if(1B=="6s"){if(o.fA){if(1c=="1N"||1c=="4P"||1c=="94"){o.8N=H;o.bQ=H;4T=H;4m();if(v.eq.AN==1){B bl=7m("1c","2C");if(bl){2W(bl.c())}}}}if(1d&&v.1d.ea==1&&((1c=="1d"||2N.K("AO")==0)||2N.K("1d:")==0)){3b(o.e9);if(!1d.g("1o")||jv!=R){4D(R,1B);o.eF=1c+2N;1C(E(){o.eF=1W},4d)}}if(X&&v.X.ea==1&&1c=="X"){3b(o.uM);if(!X.g("1o")||jv!=R){4D(R,1B);o.eF=1c;1C(E(){o.eF=1W},4d)}}}if(1B=="5Y"){if(o.fA){if(1c=="1N"||1c=="4P"||1c=="94"){o.8N=I;o.bQ=H;1C(E(){if(!o.8N){o.bQ=I;V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1N"){9L(b[x]);2z()}if(b[x].g("1c")=="2C"){if(v.eq.AN==1){5V(b[x].c())}}}}}},4d)}}if(v.1d.ea==1&&((1c=="1d"||2N.K("AO")==0)||2N.K("1d:")==0)){3b(o.e9);o.e9=1C(E(){if(!o.3u){ck(1)}},(v.1d.eb>0?v.1d.eb*2x:2x))}if(X&&v.X.ea==1&&1c=="X"){3b(o.uM);o.uM=1C(E(){if(!o.3u){X.g("1o")?X.1m(1):\'\'}},(v.X.eb>0?v.X.eb*2x:2x))}}if(4T){1C(2z,10)}};G.k2=E(){if(o.52&&!o.2a){o.U.52(I);o.52=I}if(o.2g){if(v.j8>-1&&6b(o.2g)){O(o.2g,{1v:v.jE})}}if(o.1z&&v.AJ==1&&v.Pz!=0){o.U.2X()}if(v.1u.8I>0){3b(o.AL);o.AL=1C(4m,v.1u.8I*2x)}F{4m()}};G.Ck=E(){if(o.2g){if(v.j8>-1&&6b(o.2g)){O(o.2g,{1v:v.j8})}}if(!o.1z&&v.AJ==1){o.U.2F()}4m();e3(I)};G.eU=E(ax,au){B y;V(B x in b){if(b.2n(x)){y=b[x].g("1c");if(y=="2C"||y=="1N"){b[x].eU(ax,au)}}}};G.qS=E(){if(v.1u.1m==1){if(v.1u.cw==1&&!o.2a){L}if((!o.56||o.1l.2l)&&o.P.6m()=="7t"){o.56=H;4m();o.1l.2l?1C(E(){o.56=I},4d):\'\'}if(v.1u.ha==1){hk();eQ()}e3(I)}};G.fr=E(ax,au){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="2C"||b[x].g("1c")=="1N"){b[x].fr(ax,au)}}}};G.hO=E(Y,1k){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="2C"){b[x].6D(Y,1k)}if(b[x].g("1c")=="Y"){kq(b[x],Y,1k)}if(b[x].s("DS")==1){b[x].tx()}if(b[x].s("EE")==1){if(!b[x].g("1o")&&8A){}F if(b[x].g("1o")==hb(b[x])){4m()}}}}};E e3(x){if(v.1u.1m==1){x?ck():\'\';if(v.1u.cj==1){if(!o.1z&&v.1u.e4==1){x=H}if(x&&!o.uK){O(o.1u,{"1f":bg.h()})}if(!x&&o.uK){O(o.1u,{"1f":0})}o.uK=x}}}E fP(){8A=I;o.P.fP();if(o.sc){o.sc=I;2z();1C(2z,do)}}E kq(x,Y,1k){if(v.4l>0){Y-=v.4l;1k-=v.4l}B y=4z(Y);if(x.s("DW")=="1"){y=4z(1k-Y)}if(x.s("Ps")=="1"){if(x.s("Pu")=="1"){y=y+(1k>0?\' \'+2D(x.s("PW"))+\' \'+4z(1k):\'\')}F{Y==0?y=4z(1k):\'\'}}x.6k(y)}G.uZ=E(Y,1k){B x=7m("1c","2C");if(x){x.ED(Y,1k)}};G.ib=E(y){if(o.P.1k()>0){B x=7m("1c","2C");if(x){x.ib(y)}}};G.8F=E(){if(!9b){if(v.dJ==1){3b(kZ);kZ=1C(8F,4d)}F{8F()}}};E 8F(){if(!9b){js("PV");B x=7m("1c","cC");if(x){x.DN();9b=H}}}G.Bu=E(y){V(B x in b){if(x==y){b[x].1Y("2W")}}};G.6G=E(Y,1k){3b(kZ);if(9b){js("7A");B x=7m("1c","cC");if(x){x.ht();9b=I}}};G.hc=E(){B x=7m("2N","1N 9e");if(x){x.1Y("5V");x.6k(2D(\'1N\')+\' \'+(o.3D?0:2A.tc(v.1N*1i))+\'%\');3b(o.hc);o.hc=1C(Bp,2x)}};E Bp(){B x=7m("2N","1N 9e");if(x){x.6k(\'\');x.1Y("2W");3b(o.hc)}}G.3L=E(Y,1k){if(v.4l>0){Y-=v.4l;1k-=v.4l}V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="2C"){1k>0?b[x].1Y("2r",Y/1k):\'\';b[x].Eu()}if(b[x].g("1c")=="Y"){kq(b[x],Y,1k)}if(b[x].g("1c")=="5c"){b[x].1Y("tH",0.5);b[x].1Y("dC",0)}}}};G.47=E(Y,1k){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1k"){if(v.4l>0){1k-=v.4l}b[x].6k(4z(1k))}if(b[x].g("1c")=="2C"){b[x].6D(Y,1k);b[x].D4(1k)}if(b[x].g("1c")=="Y"){kq(b[x],Y,1k)}}}};G.7u=E(){1d.g("1o")?1d.1m():1d.1o()};G.aY=E(){if(1d){L 1d.g("1o")?H:I}F{L I}};G.kp=E(x){if(1d){1d.5n(x)}};G.ck=E(){ck()};G.PY=E(x){if(1d){1d.Bw(x)}};G.Cb=E(){if(1d){1d.he()}};G.Cc=E(x){if(1d){L 1d.BB(x)}};E ck(x){if(1d){1d.g("1o")?1d.1m(x):\'\'}o.4Q?o.4Q.1m():\'\'};G.aC=E(){if(X){if(X.g("1o")){X.1m(1)}F{X.1o()}}};G.kf=E(){if(X){1C(E(){X.1o()},1i)}};G.da=E(){if(X){L X.g("1o")?H:I}F{L I}};G.ej=E(x){L X?X.g(x):\'\'};G.5Z=E(x){if(X){X.uE(x)}};G.BA=E(x){if(X){X.Bz(x)}};G.aL=E(){if(X){X.aL()}};G.kc=E(){if(X){X.kc()}};G.h8=E(){h8()};E h8(){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="7h"){O(b[x].c(),{"1v":(!X.cY()?0.5:1)})}if(b[x].g("1c")=="cX"){O(b[x].c(),{"1v":(!X.ei()?0.5:1)})}}}}G.cY=E(){if(X){L X.cY()}F{L I}};G.ei=E(){if(X){L X.ei()}F{L I}};G.ke=E(){if(X){L X.ke()}F{L I}};G.kb=E(){if(X){X.kb()}};G.ch=E(){if(X){X.ch()}};G.Bx=E(x){if(x&&X){X.h5(x)}};G.By=E(x){if(x&&X){X.k7(x)}};G.Bo=E(x){if(x&&X){O(X.co(),{"PM":"1I","2M-2f":X.s("6E")});1R.8D(x).1K(X.co());2W(X.c())}};G.PL=E(){};G.vn=E(x){if(1d){1d.5B();1d.g("1o")?1C(E(){1d.1m()},4L):\'\'}};G.h6=E(){if(1d){1d.5B()}if(o.4Q){o.4Q.e2()}};G.h7=E(x){if(1d){1d.fs()}2z();4m()};G.kl=E(x){if(1d){1d.ho(x);1d.g("1o")?1d.1m():\'\'}if(o.4Q){o.4Q.e2()}x=="4G"?v9():\'\'};E v9(){if(o.dP){B x=4A(o.fo/o.4U.6q(-1)[0],1).rW(1);V(B i in b){if(b.2n(i)){if(b[i].s("cd")=="4G"&&o.fo){b[i].6D(x,1)}if(b[i].s("2N")=="2I:4G,1.0"){b[i].uh(x)}}}}}G.v6=E(x){if(1d){1d.ho("6I")}if(o.4Q){o.4Q.e2()}};G.aQ=E(){if(1d){1d.9c();1d.g("1o")?1C(E(){1d.1m()},4L):\'\'}if(o.4Q){o.4Q.e2()}if(o.4R&&o.4C){o.3R.91()}};G.vf=E(){o.4Q?o.4Q.1m():\'\';if(1d){1d.vf()}};G.hf=E(jT,2k,6p){V(B x in b){if(b.2n(x)){if(b[x].g("1c")=="1d"){if(b[x].s("dz")==1){b[x].DI()}}if(b[x].g("CS")=="1d#"+jT){b[x].1Y("1Y#3W",2k);if(b[x].g("1B")=="1D"){if(6p){6p=6p.6w();B uk=6p.K(" <7L C=\'1v");if(uk>-1){6p=6p.1n(0,uk)}b[x].6k(6p)}}F{if(v.1d[\'1d\'+jT+\'1c\']=="2c"){if(6p==2D("7Z")){b[x].bw(0)}F{b[x].bw(1)}}2z()}aW(b[x])}}}};G.Be=E(){if(1d){1d.5B();1d.ho("6I");1d.ho("5W")}};G.hw=E(){B x=7m("1c","2C");if(x){x.hw()}};G.4T=E(){2z();if(8A){o.sc=H}};G.uj=E(x){if(!8A||x==1){2z();4m()}F{v.1u.sb=H}};G.4u=E(){4m();2z();4m();if(o.aZ){2W(7o)}F{!8A?5V(7o):\'\'}};G.CD=E(1a){if(ip==v.id&&v.1X.on==1){B x=1a.Bi;B y=I;if(x==1T){x=1a.CI}if(J(o.1U)||J(o.7e)||o.su==1){L I}if(o.1z&&v.1X.hq==1){y=H}if(((v.1X.8k==1&&x==32)||(v.1X.PN==1&&x==13))&&(o.6e||o.56||y)){if(v.1X.2G==1){6W(\'1z\',o.1z?0:1)}o.U.cq();1a.8s();L I}!v.1X.l2?v.1X.l2=0.2:\'\';!v.1X.1F?v.1X.1F=5:\'\';if(v.1X.Ba==1&&(o.6e||y)){if(o.P.1k()>0){V(B i=48;i<58;i++){if(x==i){o.U.3L((o.P.1k()*(x-48)*10)/1i,H)}}}}if(x==39&&(o.6e||y)){kM(v.1X.sh)}if(x==37&&(o.6e||y)){kO(v.1X.sh)}if(x==38&&(o.6e||y)){kM(v.1X.sg)}if(x==40&&(o.6e||y)){kO(v.1X.sg)}if(x==Vf&&(o.6e||y)){kM(v.1X.Bh)}if(x==V6&&(o.6e||y)){kO(v.1X.Bh)}}};E 7m(y,z){V(B x in b){if(b.2n(x)){if(b[x].s(y)==z){L b[x]}}}}E kM(x){if(x=="7h"){if(o.X){o.S.aL()}F{x="4a"}}if(x=="4a"){if(o.P.1k()>0){if(o.P.Y()+4A(v.1X.4a)<o.P.1k()){o.U.3L(o.P.Y()+4A(v.1X.4a),H)}}}if(x=="1N"){o.U.3M(4A(v.1N)+4A(v.1X.l2));1a.8s()}if(x=="1F"){o.P.1F(v.1X.1F/1i);1a.8s()}if(v.1X.2G==1){6W(x,1)}}E kO(x){if(x=="7h"){if(o.X){o.S.ch()}F{x="4a"}}if(x=="4a"){if(o.P.1k()>0&&o.1A){o.U.3L((o.P.Y()-v.1X.4a>=0?o.P.Y()-v.1X.4a:0),H)}}if(x=="1N"){o.U.3M(4A(v.1N)-4A(v.1X.l2));1a.8s()}if(x=="1F"){o.P.1F(-v.1X.1F/1i);1a.8s()}if(v.1X.2G==1){6W(x,0)}};G.Ci=E(1a){if(ip==v.id){B x=1a.Bi;if(x==1T){x=1a.CI}if(x==57){if(v.1p==1){}}if(o.2a&&x==27){o.U.7R()}if(J(o.1U)||J(o.7e)){L I}if(v.1X.f==1&&x==70&&v.dJ!=1&&(o.6e||o.56)){if(v.1X.2G==1){6W(\'2a\',o.2a?0:1)}o.2a?o.U.7R():o.U.8b()}if(v.1X.m==1&&x==77&&(o.6e||o.56)){if(v.1X.2G==1){6W(\'4P\',o.3D?1:0)}o.3D?o.U.6P():o.U.53()}}};G.43=E(){41(o.hi);V(B x in o){if(x.K("17")==0&&x.K("Fv")>-1){41(o[x])}}V(B i=0;i<eY.Q;i++){18=eY[i];if(b[18]){b[18].43()}}if(1d){1d.43()}if(X){X.43()}bg.43();if(7o.5u==o.1J){o.1J.3d(7o)}F{o.1u?o.1u.3d(7o):\'\'}};G.hk=E(){hk()};G.hl=E(){hl();4m()};G.eQ=E(){eQ()};G.j0=E(){L 8A}};B Ed=E(18){B i;B C=[];B w;B h;B ub=0;B bg;B jt;B 8w;B mv=0;B 3W=H;B CZ=I;B 3c=1;B 3g=1;B 2p;B gP;B 2K;B 8a;B 1c;B 8W=\'\';B x0;B y0;B on;B 6s=I;B bG=I;B d8=0;B UR;B UK=0;B dv=0;B Et=0;B gI=0;B mX=I;B tA=I;B gQ=I;B 3j=I;B gY;B dz;B l5;B tO=I;C=9n(C,fb.R);C=9n(C,v[18]);B U=[C.1c];1c=U[0];J(C.Eb)?U[1]=C.Eb:\'\';J(C.Ea)?U[1]=C.Ea:\'\';J(C.1L)?C.1D=C.1L:\'\';if(4I(C.E7)){o.gM?C.1F=C.E7:\'\'}if(1c=="2V"){o.kt=H}if(J(C.2N)){if(C.1B=="1D"&&C.2N!=\'\'){if(J(v[C.2N+\'1D\'])){C.1D=v[C.2N+\'1D\']}}if(C.2N.K("1d#")==0){8W=C.2N;if(C.2K==\'\'&&8W.K(",")==-1){C.2K=2D(v.1d[\'1d\'+8W.1n(9)+\'1c\'])}}if(C.2N.K("5T")>-1){v.E8=H}if(C.2N.K("2V:")>-1){o.kt=H}if(C.2N=="V3"){C.UZ=1y UU(C)}}B 6M=C.2K?C.2K.2v("///"):[];if(C.DQ==1){C.1B="1D";C.1D=gT(0)+(U.Q>1?\'///\'+gT(1):\'\');if(4I(C.a7)){C.1t=C.a7}}B rq=0;B 2G=1y 8R();B 1q=1y 8R();B bX=1y 8R();B Tt=1y 8R();B gU=0;B am;if(C.1B=="1D"){if(C.4s){if(J(v[C.4s+\'1D\'])){C.1D=v[C.4s+\'1D\']}}if(J(C.1D)){2G[0]=4q(C.1D);C.nd=C.1D.Q;B sB=[\'/\',\'|\',\'-\'];sB.K(C.1D.1n(-1))>-1?C.tC=C.1D.1n(-1):\'\';sB.K(C.1D.1n(0,1))>-1?C.tD=C.1D.1n(0,1):\'\';if(1c=="Y"||1c=="1k"){if(C.1D.K(\'0:\')==0){C.mV=H}if(C.1D.2v(":").Q==3){C.DF=H}F{if(C.1D.K(\'aH:aH\')>-1){C.DD=H}}if(C.kA==1){v.kA=1}}if(C.DW==1&&C.1D.K("-")==0){C.DC=H}if(C.1D.K("///")>0&&(1c=="4w"||C.DQ==1)){C.dY=C.1D.2v("///");C.1D=2G[0]=C.dY[0]}}if(v.sD==1){1C(8K,1i);1C(8K,4d);1C(8K,2x)}}F{if(J(C.1q)){2G[0]=C.1q;if(2G[0].K("///")>0&&2G[0].K("i1")==-1){2G=C.1q.2v("///")}if(J(C.jb)){2G[1]=C.jb}if(C.lB==1){if(4I(C.DR)){2G.2H(C.DR);gU=2G.Q-1}}}}if(1c=="4w"){if(C.Tq==1&&J(C.j2)){C.rO=C.2N}}B 17=1M("1Z");if(C.1h==\'cl\'){o.cl.1K(17)}F{if(C.1h.K(\'S\')>-1&&v.1u.1m==1&&v.1u.cj==1){o.1u.1K(17)}F{o.1J.1K(17)}if(1c=="cC"&&C.Tj==1){17.C.59=ER}}B jt=1M("1Z");17.1K(jt);O(17,{"1h":"2e","Z":0,"1f":0,"1v":1,"d9":"ky","sz":"ih"});if(4I(C.4s)){3Z(17,{"id":(v.id+"5S"+"8U"+C.4s)})}if(C.DS==1){O(17,{"4W":"2O 0.2s 2T"})}if(2G.Q>0){V(i=0;i<2G.Q;i++){1q[i]=1M("1Z");O(1q[i],{"1h":"2e","1f":0,"Z":0,"7g":"1I","1v":C.a,"4W":"1v 0.1s 2T,2O 0.1s 2T"});if(C.1B=="dN"&&C.2Q!=\'\'){if(4I(C.4s)){3Z(1q[i],{"id":(v.id+"fx"+C.4s+"E1")});if(v[C.4s+\'2Q\']){C.2Q=v[C.4s+\'2Q\']}}if(C.2Q.K(".sG")>-1||C.2Q.K(".h1")>-1||C.2Q.K(".8r")>-1||C.2Q.K("i1")>-1){C.2Q.K("//")==-1&&C.2Q.K("i1")==-1?C.2Q=\'//\'+C.2Q:\'\';B z=1M("3Q");C.8o=1;z.1r("f7",rN);z.2Q=C.2Q;1q[i].1K(z);C.w=1q[i].26;C.h=1q[i].2R;if(C.DX>0){O(z,{19:C.DX})}}}if(C.1B=="1D"){O(1q[i],{"1t":(C.1t),"d9":C.f1*3N(v.8e,1),"uu":ee(C.46),"hH-et":C.gL+\'px\',"2M":"0 cu 0 cu","ag-8k":"cr"});if(o.gM){if(4I(C.DY)){O(1q[i],{"d9":C.DY*3N(v.8e,1),})}}if(C.2r==1){if(C.1D.K("<a ")>-1||18=="b3"){O(1q[i],{"7g":"2t"})}}if(C.E3==1){O(1q[i],{"46-gN":"E3"})}2G[i]==\'5c\'?2G[i]=2D("5c"):\'\';1q[i].1P=sU(2G[i]);1C(ud,1i);C.w=1q[i].26;C.h=1q[i].2R;if(4I(C.4s)){3Z(1q[i],{"id":(v.id+"fx"+C.4s+"UE")})}}if(C.1B=="O"){E4(2G[i],C.1t,1q[i])}B 8m=2G[i].6w();if(8m.K(\'B:\')==0){8m=3N(1V[8m.1n(4)],\'\')}B iY=8m.K(\'<2w\')>-1||8m.K(\'<Uw\')>-1;if(C.1B=="2w"&&(8m.K(\'<g>\')>-1||iY)){if(1c=="4P"||1c=="4w"){8m=8m.22(/n8/g,\'n8\'+v.id+18)}if(8m.K(\'3S\')>-1){bD(1q[i])}1q[i].1P=(!iY?"<2w W=\'20\' 19=\'20\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'>":\'\')+8m+(!iY?"</2w>":\'\');1q[i].26>20?C.w=1q[i].26:\'\';1q[i].2R>20?C.h=1q[i].2R:\'\';O(1q[i],{"W":C.w,"19":C.h});if(C.a7!=-1){lI(1q,C.a7)}if(4I(C.4s)){3Z(1q[i],{"id":(v.id+"fx"+C.4s+"E1"+i)})}}17.1K(1q[i]);i>0?1m(1q[i]):\'\'}a9();l5?rN():\'\';if(C.2N=="3R"){C.3R=1;C.1m=1;o.3R?1q[0].1P=o.3R.n0(C.a7!=-1?C.a7:\'#3I\'):\'\';if(o.1l.2l){1q[0].E0=rA;1q[0].Uf=5z;1q[0].sm=rw}F{1q[0].hP=6i;1q[0].hz=5z;1q[0].hN=cn}}F{if((bg.26*C.1F<35||bg.2R*C.1F<35)&&C.1B!=\'1D\'){rM();bD(8w)}F{bD(bg)}}if(1c=="4w"){if(C.er==1&&J(C.2N)){B lu=C.2N;if(lu.K("2I:")==0){B 1H=lu.1n(4).2v(",");if(1H.Q==2){B sq=1H[1].2v("/");if(sq.Q==2){1H[0]==\'hd\'?1H[0]="4r":\'\';if(v[1H[0]]==sq[1]){C.a=1;O(1q[0],{"1v":C.a})}}}}if(lu=="En"||lu=="4p"){o.U.f5();17.C.59=ER;o.su=1}}if(C.1m==1&&(C.EN==1||C.EO==1)){C.EE=1}}if(1c=="1d"&&C.dz==1){dz=1y Uh(17,bg,C)}if(C.2r==0){rE(17)}if(C.8o==1){1m(bg)}if(C.2p==1){n3()}if(C.1h.K("2f")>-1){dv=1}if(C.1h.K("1f")>-1){Et=1}if(C.1h.K("2J")>-1||C.1h.K("17")>-1){gI=1}2z();B t=\'\';if(C.a5!=0){t+="mz("+C.a5+"ts)"}if(C.Ur==1){t+=" 3c(-1)"}if(C.TP==1){t+=" 3g(-1)"}if(t!=\'\'){O(17,{"2O":t})}if(1c=="cC"){ht()}B 1H=[];B i;if(1c=="X"){1H=[\'eG\',\'Eo\',\'jg\',\'Eq\',\'rs\',\'jA\'];V(i=0;i<1H.Q;i++){if(J(C[1H[i]])&&!J(v.X[1H[i]])){v.X[1H[i]]=C[1H[i]]}}}if(1c=="1L"){1H=[\'je\',\'rr\',\'rv\'];V(i=0;i<1H.Q;i++){if(J(C[1H[i]])&&!J(3r[1H[i]])){v[1H[i]]=C[1H[i]]}}}C.dV==1?8q():\'\';if(1c=="4w"&&C.on==0){2W(17)}if(C.1m==1&&C.jk>0){1C(Ev,C.jk*2x)}}E Ev(){C.jk=-1;o.S.4u()}E rM(){if(8w){8w.5u.3d(8w)}8w=1M("1Z");O(8w,{"1h":"2e","1f":0,"Z":0,"W":C.1B=="dN"?bg.26:(bg.26>35?bg.26:35)*C.Ew,"19":C.1B=="dN"?bg.2R:(bg.2R>35?bg.2R:35)*C.td});C=4H(C,\'fJ\',\'fJ\');17.1K(8w)}E bD(x){if(1c.K("Y")==0&&U.Q==1){C.2r=0}if(1c=="4w"&&C.er==0){C.2r=0}if(C.2r==1){if(C.g1==1){O(x,{"6t":"3S"})}O(x,{"7g":"2t"});if(o.1l.2l){x.1r("bG",E(e){rw(e)});x.1r("eV",E(e){rA(e)});x.1r("eW",E(e){EC(e)})}F{x.ds=aj}if(v.1u.fK==1||C.fK==1){O(x,{"2u-1t":"#mg","1v":0.5})}}F{O(x,{"6t":"6X"})}if(!o.1l.2l){x.hP=6i;x.hz=5z}if(C.3j==1||C.2p==1){x.hN=cn}}E rw(e){js("TJ"+18);e.ak();bG=H}E rA(e){C.EA==1?6i():\'\';e.ak()}E EC(e){e.ak();e.8s();C.EA==1?5z():\'\';if(!bG){aj(e)}bG=I}E a9(){if(bg){bg.5u.3d(bg)}bg=1M("1Z");O(bg,{"1h":"2e","1f":0,"Z":0});if(4I(C.4s)){3Z(bg,{"id":(v.id+"fx"+C.4s+"VJ")})}w=C.w;h=C.h;C=4H(C,\'2L\',\'2L\');C=4H(C,\'cP\',\'cP\');if(C.1B=="1D"){w=1q[rq].26;h=1q[rq].2R;if(C.ul>0){w<C.ul?w=C.ul:\'\'}}C=4H(C,\'dA\',\'dA\');C=4H(C,\'DP\',\'DP\');if(o.1l.6y){C.Db/=C.1F;C.D0/=C.1F;C.Dc/=C.1F;C.Da/=C.1F}if(4I(C.4s)&&J(v.4w)&&C.1c=="4w"){if(1Q(v.4w)==\'3x\'){V(B i=0;i<4E.3U(v.4w).Q;i++){if(v.4w[i][C.4s]){if(v.4w[i][C.4s]=="7Z"){C.on=0}F{B 1H=v.4w[i][C.4s].2v(":");if(1H[0]=="2L-Z"){if(1H[1].K("%")>0){C.jp=2E(1H[1])}F{C.3P=2E(1H[1])}}}}}}}C.h=h;C.w=w;if(C.bg==1){h=h+C.9z+C.9j;w=w+C.6B+C.6E;C.h=h;C.w=w;if(C.1B=="1D"){C.m7=1q[0].2R}}F{C.5O=0}O(bg,{"W":(C.DO==1?D6:w),"19":h,"tg":(C.mb*h)/2,"2u":C.5H,"1v":C.5O,"4W":"1v .1s 2T, 2u .1s 2T, 2O .1s 2T"});if(C.1B=="dN"){O(bg,{"W":w,"19":h,"tg":(C.mb*h/C.1F)/2,})}if(C.VT==1){D7(bg,C.5H,C.UY,C.UM)}if(C.tf==1){O(bg,{"2Z":"6f 7k "+C.te})}jt.1K(bg)}E 2z(){O(bg,{"1f":(-bg.2R/2),"Z":(-bg.26/2)});if(8w){B x=C.1B=="dN"?bg.26:(bg.26>35?bg.26:35);B y=C.1B=="dN"?bg.2R:(bg.2R>35?bg.2R:35);O(8w,{"1f":(-y/2)+C.Dd-C.Df,"Z":(-x/2)+C.Vm-C.Vh})}V(i=0;i<2G.Q;i++){if(C.1B=="2w"){O(1q[i],{"1f":-2A.4g(2E(1q[i].C.19))/2,"Z":-2E(1q[i].C.W)/2})}F{O(1q[i],{"1f":-2A.4g(1q[i].2R)/2,"Z":-1q[i].26/2})}if(bg){O(1q[i],{"1f":(4X(1q[i].C.1f)+C.9z/2-C.9j/2+C.Dc/2+C.Da/2),"Z":(4X(1q[i].C.Z)+C.6B/2-C.6E/2+C.Db/2+C.D0/2)})}}}E 6i(){B i;6s=H;if(C.bX==1){if(on&&J(C.jb)){i=1}F{i=0}if(am&&bX.Q>2){i=2}if(bX[i]){lx();1o(1q[bX[i]])}}if(C.bg==1){if(C.7Q!=-1){O(bg,{"1v":C.7Q})}if(C.9m!=-1){O(bg,{"2u":C.9m})}}if(C.6A>-1&&!CZ){V(i=0;i<2G.Q;i++){if(1q[i].C.5g!="3j"){O(1q[i],{"1v":C.6A})}}}if(C.j7!=-1){lI(1q,C.j7)}if(C.Vr==1){d8=d8+45;h0(1q[0],d8)}if(C.gH>C.1F&&C.gH>-1){1F(C.gH)}if(1c=="1d"&&o.S.aY()){}F{if(C.2p==1&&C.dV!=1){B x=6M.Q>1&&!on?6M[1]:6M[0];if(x){if(x.K(\'B:\')==0){2K.1P=1V[x.1n(4)];8q()}}1o(2p);O(2p,{"1v":1})}}if(1c=="4P"){o.U.52(H);o.52=H}o.bS=H;o.S.iV(18,"6s")}E 5z(){6s=I;B i;if(C.bX==1){if(on&&J(C.jb)){i=1}F{i=0}if(am&&bX.Q>2){i=2}lx();1o(1q[i])}if(C.bg==1){if(C.7Q!=-1){O(bg,{"1v":C.5O})}if(C.9m!=-1){O(bg,{"2u":C.5H})}}if(C.6A>-1){V(i=0;i<2G.Q;i++){if(1q[i].C.5g!="3j"){O(1q[i],{"1v":C.a})}}}if(C.gH>-1){1F(C.1F)}if(C.j7!=-1){lI(1q,(C.a7==-1?\'#3I\':C.a7))}if(1c=="4P"&&!o.2a){o.U.52(I);o.52=I}rl();o.bS=I;o.S?o.S.iV(18,"5Y"):\'\'}E rl(){if(C.2p==1&&C.dV!=1){1m(2p);O(2p,{"1v":0})}}E aj(e){e?e.6j=H:\'\';if(!mX){o.S.dF(18);if(1c=="4w"){mJ()}rl();if(C.Vn==1){d8=d8+45;h0(1q[0],d8)}gQ=H;if(C.CQ==1||(18=="rQ"&&C.1m==1&&C.rP==1)){o.S.4u()}}};G.CO=E(){aj()};E mJ(){if(2G){if(2G.Q>1){if(on==H){1o(1q[0]);1m(1q[1])}F{1o(1q[1]);1m(1q[0])}}if(C.2p==1&&6M.Q>1){2K.1P=o.ni+(on==H?6M[0]:6M[1])+o.gR;8q()}}if(J(C.rO)){if(on==H){C.2N=C.rO}F{C.2N=C.j2}}lC();on=on!=H;if(C.2N){if(C.2N.K(",0/1")>-1){js(C.2N,on?1:0)}}if(C.bg==1&&J(C.rR)){if(C.rR!=-1){if(on){C.CN=C.5H;C.5H=C.rR}F{C.5H=C.CN}a9();bD(bg);2z();if(C.1B=="1D"){8K()}F{1F(C.1F)}}}}E lC(){if(J(C.dY)){if(C.dY.Q>1){if(on==H){6k(C.dY[0])}F{6k(C.dY[1])}}}}E tV(1a){1a.6j=H;o.S.dF(18)}E lx(){V(B i=0;i<2G.Q;i++){if(1q[i].C.5g!="3j"){O(1q[i],{"1v":C.a});1m(1q[i])}}}E ud(1D){if(1q[0]){if(1q[0].26>o.3f-C.3P-C.4t-C.6B-C.6E){if(C.rT==1){if(!1D){1D=1q[0].1P}1q[0].1P=\'<rT>\'+1D+\'</rT>\'}F{O(1q[0],{"ag-8k":"dh"})}O(1q[0],{"W":o.3f-C.3P-C.4t-C.6B-C.6E})}}}E rN(){if(bg){l5=I;C.8o=0;1m(bg);if(1q[0]){C.w=1q[0].26*C.1F;C.h=1q[0].2R*C.1F;1F(C.1F)}C.8X=0;a9();rM();bD(8w);1o(bg);2z();o.S.4T();if(!6b(17)){2W(17)}}F{l5=H}}E D8(1a){1a.6j=H}E cn(){if(!o.1l.2l&&!o.bS){6i()}8q()}E 1F(x){if(x>0){if(o.1l.6y&&C.dV!=1){O(bg,{"CK":x+""})}F{O(bg,{"2O":"1F("+x+")"})}V(i=0;i<2G.Q;i++){if(o.1l.6y&&C.dV!=1){O(1q[i],{"CK":x+""});tA=H}F{O(1q[i],{"2O":"1F("+x+")"})}}3c=x;3g=x}}E n3(){2p=1M("1Z");O(2p,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'19\':\'2t\',"1v":0,"4W":"1v 0.1s 2T"});gP=1M("1Z");C=4H(C,\'iD\',\'iD\');C=4H(C,\'CL\',\'CL\');O(gP,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':\'1i%\',\'19\':30,\'2u-1t\':C.iy,\'1v\':C.iJ,\'2Z-6v\':C.ro});2K=1M("1Z");O(2K,{\'1h\':\'2e\',\'Z\':C.sH,\'1f\':C.mQ,\'1t\':C.rG,\'46-iS\':ee(C.rU),\'46-3w\':C.rD*3N(v.8e,1),"hH-et":C.rn+\'px\',"2C-19":"1"});if(C.2K){if(C.2K.K("B:")==0){C.CM=H}}if(!C.CM){O(2K,{\'ag-8k\':\'cr\'})}if(C.e1==1){8a=1M("1Z");8a.1P=\'<2w W="iQ" 19="rj" rh="0 0 8 6" 7U="1.1" 3Y="3v://3T.w3.3V/4b/2w" 3Y:3X="3v://3T.w3.3V/6Z/3X"><dS id="EK" 4e="1I" 5y="#\'+C.iy.22("#","")+\'" 5y-EJ="Em" 7T="0 0 8 0 4 6"></dS></2w>\'}if(C.dV==1){O(2p,{"1v":1});bD(2p)}F{rE(2p)}17.1K(2p);2K.1P=o.ni+(C.2K==\'\'?2D(1c):6M[0])+o.gR;2p.1K(gP);2p.1K(2K);if(C.e1==1){2p.1K(8a);B rL=o.rH?\'-iQ\':\'-rj\';B ps=C.Tr;if(!J(ps)){ps=\'\'}B tp=ps.K("1f")>-1;if(tp){h0(8a,\'-Tb\')}O(8a,{\'1h\':\'2e\',\'2f\':(ps.K("2f")>-1?10*C.1F:\'2t\'),\'Z\':(ps.K("Z")>-1?10*C.1F:(ps==\'\'||ps==\'1f\'?\'50%\':\'2t\')),\'2L-Z\':(ps==\'\'||ps==\'1f\'?\'-AA\':0),\'2J\':(tp?\'2t\':rL),\'1f\':(tp?rL:\'2t\'),\'1v\':C.iJ})}8q()}E 8q(){if(C.2p==1){O(2p,{"1f":(gI==1?-h-2p.2R+3:-2p.2R/2)+C.U6-C.U9,"Z":(dv==1?-2K.26:(gI==1?-w/2:+2K.26))-(gI==1?0:2K.26/2+5)+C.TW-C.TU,"19":C.mQ+2K.2R+C.rF,"W":C.sH+2K.26+C.EH});O(gP,{\'19\':2p.2R});2p.C.59="2x"}}G.c=E(){L 17};G.s=E(x){L C[x]};G.ss=E(x,x2){L J(C[x])?C[x][x2]:I};G.g=E(x){9X(x){1j"W":L w;1g;1j"19":L h;1g;1j"x":L 4X(17.C.Z);1g;1j"y":L 4X(17.C.1f);1g;1j"1v":L 17.C.1v?17.C.1v:1;1g;1j"1o":L 3W;1g;1j"3c":L 3c;1g;1j"3g":L 3g;1g;1j"1c":L 1c;1g;1j"CS":L 8W;1g;1j"gQ":L gQ;1g;1j"1B":L C.1B;1g;1j"Q":L C.nd?C.nd:0;1g;1j"18":L 18;1g;1j"x0":L x0;1g;1j"y0":L y0;1g;1j"6s":L 6s;1g;1j"1d#":L 8W.K("1d#")==0;1g;1j"1d:":L 8W.K("1d:")==0;1g;1j"1Y#3W":L tO;1g;6X:L I}};G.1Y=E(k,x){9X(k){1j"1o":6s?5z():\'\';3W=x;1g;1j"2k":CW(x);1g;1j"5V":5V(17);1g;1j"2W":2W(17);1g;1j"CX":C.3j=0;1g;1j"tJ":if(C.CY>0&&C.3j!=1&&!gY){3b(gY);gY=1C(E(){2W(17);C.3j=1;gY=1T},C.CY*2x)}1g;1j"1F":1F(x);1g;1j"U1":O(17,{"2O":"1F(0)"});1g;1j"3c":O(17,{"2O":"3c("+x+")"});3c=x;1g;1j"3g":O(17,{"2O":"3g("+x+")"});3g=x;1g;1j"1v":O(17,{"1v":x});1g;1j"tH":O(1q[0],{"1v":x});1g;1j"dC":O(1q[0],{"n1":"dC("+x+")"});1g;1j"Z":O(17,{"Z":x});1g;1j"1f":O(17,{"1f":x});1g;1j"W":O(17,{"W":x});1g;1j"19":O(17,{"19":x});1g;1j"tw":C.tw=x;1g;1j"dv":dv=x;1g;1j"1Y#3W":tO=x;1g;1j"x":O(17,{"Z":x});1g;1j"y":O(17,{"1f":x});1g;1j"5F":C.5F=x;1g;1j"x0":x0=x;1g;1j"y0":y0=x;1g;6X:L I}};E CW(x){if(x&&o.1l.2l){mX=H;1C(CT,do)}if(!x){if(C.lB==1&&am){1m(1q[gU]);1o(1q[0]);am=I}}if(C.8o==1){x?1o(17):1m(17)}F{if(18=="Ui"||18=="CV"){x?1o(17):1m(17)}F{O(17,{"2k":(x?"4p":"1I")})}3W=x;x?1o(17):\'\'}if(x&&C.tF){C.tF=I;1C(8K,1i)}}E CT(){mX=I}G.6k=E(x){if(8W!=\'\'&&(C.1D==\'x\'||C.1D==\'1x\')){x=x+\'x\'}6k(x);!6b(17)?C.tF=H:\'\'};G.gZ=E(x){C.db=x;6k(x);o.S.4T()};G.tx=E(){h0(17,mv);mv+=20};E h0(x,y){O(x,{"2O":"mz("+y+"ts)"+(x==1q[0]&&!tA&&3c!=1?\' 1F(\'+3c+\')\':\'\')})};G.DE=E(x){if(C.1D.K("{1L")>-1){6k(C.1D)}};G.mJ=E(){mJ()};E 6k(1D){if(C.1B=="1D"){if(J(1D)){if(C.DF){if(1D.Q==4){1D=(C.mV?\'0:0\':\'aH:0\')+1D}if(1D.Q==5){1D=(C.mV?\'0:\':\'aH:\')+1D}if(1D.Q==7){1D=(C.mV?\'\':\'0\')+1D}}if(C.DD){if(1D.Q==4){1D=\'0\'+1D}}C.nd=1D.Q}1D=(C.tD?C.tD+(C.DC?\'\':\' \'):\'\')+1D+(C.tC?\' \'+C.tC:\'\');B DA=1q[0].26+(C.bg==1?C.9z+C.9j:0);B DB=1q[0].2R+(C.bg==1?C.9z+C.9j:0);1q[0].1P=o.ni+(1c=="4w"?sU(1D):1D)+o.gR;if(C.T4==1){1q[0].1P+=\'<7L C="2k:bI-4p;W:cG"></7L><7L C="2Z-1f: cu 7k #eH;2Z-Z: cu 7k cQ;2Z-2f: cu 7k cQ;1h: 2e;2f:cu;1f: 50%;2L-1f: -6f;"></7L>\'}if(1c=="1L"){O(1q[0],{"W":"2t","ag-8k":"cr"});ud(1D)}C.w=1q[0].26+(C.bg==1?C.9z+C.9j:0);C.h=1q[0].2R+(C.bg==1?C.9z+C.9j:0);if(DA!=C.w||DB!=C.h||(C.w>0&&ub==0)){8K()}if(1q[0].26>0){ub=C.w}F{8W!=\'\'?1m(1q[0]):\'\';if(1D!=\'\'){1C(8K,10)}}}}G.8K=E(){8K()};E 8K(){if(C.1B=="1D"){if(1q[0]){if(1q[0].26>0){8W!=\'\'?1o(1q[0]):\'\';w=C.w=1q[0].26;h=C.h=1q[0].2R;a9();bD(bg);2z();o.S?o.S.uj():\'\'}}}}G.uh=E(x){if(C.DG==1){B n=4;if(18=="Ta"){if(o.1l.2l){L}}F{n=8}B y=\'n8\';B z=[];V(B i=1;i<n;i++){z[i]=1R.8D(y.8C(v.id,18,\'Te\',i))}if(z[1]){V(B i=1;i<n;i++){z[i]?1m(z[i]):\'\'}if(n==4){V(B i=1;i<n;i++){x>(i/n)&&z[i]?1o(z[i]):\'\'}}F{V(B i=n;i>0;i--){if(x*1+(1/n)>=(i/n)&&z[i]){1o(z[i]);1g}}}}}};G.On=E(){if(!on){if(2G){if(2G.Q>1&&U.Q>1){1m(1q[0]);1o(1q[1])}}if(U.Q>1){1c=U[1];if(C.2p==1){2K.1P=gT(1);8q()}}if(C.lB==1&&am){1m(1q[gU]);am=I}lC();on=H}};E gT(x){L o.ni+(C.2K==\'\'?2D(U[x]):(6M.Q>1?6M[x]:6M[0]))+o.gR}G.bw=E(x){bw(x)};E bw(x){B y=\'n8\';B z=1R.8D(y.8C(v.id,18,\'TG\'));if(z){O(z,{"4W":"2O 0.1s 7V-5Y"});if(x==1){z.C.2O=\'DH(0, 0)\'}F{z.C.2O=\'DH(-DM, 0)\'}}F{if(x==1){C.a=1}F{C.a=0.5}}on=x==1;if(C.2p==1&&6M.Q>1){2K.1P=(on?6M[0]:6M[1])}O(1q[0],{"1v":C.a})};G.gS=E(){if(on){if(2G){if(2G.Q>1&&U.Q>1){1o(1q[0]);1m(1q[1])}}1c=U[0];if(U.Q>1){if(C.2p==1){2K.1P=gT(0);8q()}}lC();on=I;am=I}};G.tV=E(){if(C.lB==1){lx();1o(1q[gU]);am=H}};G.DN=E(){B 2B=I;if(C.1m==1&&C.DK==1){if(6b(o.2g)){2B=H}}if(!2B){5V(17);B cM=17.c6("*");V(B i=cM.Q;i--;){O(cM[i],{"5F-1z-6L":"VF"})}3W=H}};G.ht=E(){ht()};E ht(){2W(17);B cM=17.c6("*");V(B i=cM.Q;i--;){O(cM[i],{"5F-1z-6L":"7I"})}3W=I}G.43=E(){if(2G.Q>0){V(i=0;i<2G.Q;i++){17.3d(1q[i]);1q[i]=1W}}if(bg){bg.dq("ds");bg.dq("hP");bg.dq("hz");bg.5u.3d(bg);bg=1W}if(C.1h==\'cl\'){o.cl.3d(17)}F{if(17.5u==o.1J){o.1J.3d(17)}F{if(o.1u){if(17.5u==o.1u){o.1u.3d(17)}}}}if(2p){17.3d(2p)}17=1W};G.DI=E(){dz?dz.fI():\'\'};E sU(x){B z=x+\'\';if(x.K(\'{Y}\')>-1&&J(o.3n)){x=x.22(\'{Y}\',hB(o.3n.9P().t))}if(x.K(\'{1L\')>-1){B y=o.dB?o.dB:(v.1L?v.1L:\'\');if(x.K(\'{aP}\')>-1&&o.S){x=x.22(\'{aP}\',o.S.ej(\'aP\'))}if(o.b8&&o.S){y=o.S.ej(\'b8\')}x=x.22(\'{1L}\',y);if(o.b8&&!o.S){1C(6k,1i,z)}}L x}E lI(1q,7r){V(B i=0;i<1q.Q;i++){Dz(1q[i],7r)}if(C.2N=="3R"){if(o.3R){o.3R.Dy(1q[0],7r)}}}};B Dn=E(18,1c){B i;B C=[];B w;B h;B bg;B 3W=H;B x0;B y0;B 3c=1;B 3g=1;B ef=0;B 8c=0;B VU;B 3u;B lp;B 6s;B 2r;B 3l;B EP;B Er;B uc;B Es;B 2p;B 2K;B 8a;o.D9=-1;B m8;B 6s;B sN;V(i in fb.R){C[i]=fb.R[i]}B 1c=v[18].1c;B 1B=v[18].1B;V(i in fb[1c]){C[i]=fb[1c][i]}V(i in v[18]){C[i]=v[18][i]}C.w=2E(C.w);C.h=2E(C.h);C=4H(C,\'2L\',\'2L\');C=4H(C,\'cP\',\'cP\');B 17=1M("1Z");if(v.1u.cj==1&&v.1u.1m==1){o.1u.1K(17)}F{o.1J.1K(17)}1c=="2C"?o.cl=17:\'\';B a6=I;if(C.cd){if(C.cd!=\'1N\'){a6=H}}O(17,{"1h":"2e","1f":0,"Z":0,"1v":1,"d9":"ky","sz":"ih"});if(C.Dp==1){17.C.59=C.5K}a9();B 8n=1M("1Z");O(8n,{"1h":"2e","2J":2A.4g(-C.h/2),"Z":2A.4g(-C.w/2)});if(C.CU==1){O(8n,{"2Z-6v":C.7c*C.h/2,"19":C.h,"6R":"3j","3S-2P":"1I"})}if(4I(C.4s)){3Z(17,{"id":(v.id+"fx"+C.4s)})}17.1K(8n);if(1c==\'2C\'&&v.sY==1){ES()}if(C.2p==1){n3()}B 8j=1M("1Z");fM(0,8j,0.3,(C.5k==1?"2T-5k(#"+C.Dm+", #"+C.l7+")":C.l7),C.w,C.W1);if(C.Du==1&&J(C.lr)){B fz=1M("1Z");fz.1P=C.lr.22(/\\#Ds/g,"#"+C.l7);8j.1K(fz);O(fz,{"1h":"2e","2J":-2A.4g(C.h/2),"Z":0,"3S-2P":"1I"});O(8j,{"6R":"3j","2u":"1I"});B x=["tk","dS","l6","fG","df"];V(B y=0;y<x.Q;y++){B z=fz.tn("2w "+x[y]);if(z.Q>0){V(B y2=0;y2<z.Q;y2++){z[y2].C.5y=C.l7}}}}8n.1K(8j);B Vs=[];B bH=1M("1Z");fM(1,bH,C.Dl,(C.5k==1?"2T-5k(#"+C.Di+", #"+C.Dj+")":C.Dj),0,C.V0);8n.1K(bH);if(C.6A>0){B ci=1M("1Z");fM(2,ci,C.Dw,C.Vo,0,C.6A);8n.1K(ci)}B 6O=1M("1Z");fM(3,6O,C.Dx,(C.5k==1?"2T-5k(#"+C.Dv+", #"+C.1t+")":C.1t),0,C.a);if(C.Du==1&&J(C.lr)){B ls=1M("1Z");ls.1P=C.lr.22(/\\#Ds/g,"#"+C.1t);O(ls,{"1h":"2e","2J":-2A.4g(C.h/2),"Z":0,"3S-2P":"1I"});O(6O,{"6R":"3j","2u":"1I"});6O.1K(ls)}if(C.5e==1){B bz=1M("1Z");C=4H(C,\'sJ\',\'sJ\');C=4H(C,\'sM\',\'sM\');O(bz,{"1h":"2e","2J":C.h/2,"Z":0,"3S-2P":"1I","46-3w":C.Dt*3N(v.8e,1),"1t":C.5m,"2C-19":"1i%","2M-1f":C.Vb,"2M-2J":C.Ve,"2M-Z":C.KD,"2M-2f":C.Iv,"2L-1f":C.It,"2L-2J":C.Io,"2L-Z":C.In,"2L-2f":C.Is,"2Z-6v":(C.Dr+"px"),"2k":"1I"});if(C.Dq==1){O(bz,{"2u":"#"+C.Dk})}6O.1K(bz);B i4=I;B IL=I}o.mm=C.h;8n.1K(6O);if(C.eT==1){B 7T=[];if(1Q DJ!=="1T"){B 8z=1y DJ(17,7T,w,C)}}if(C.3l==1){if(C.cS.6w().K(\'<2w\')==-1){C.cS==\'\'?C.cS="<2w W=\'20\' 19=\'20\'><g><df ry=\'5\' rx=\'5\' cy=\'10\' cx=\'10\' 5y=\'#eH\'/></g></2w>":\'\'}3l=1M("1Z");3l.1P=C.cS.6w();C=4H(C,\'DL\',\'DL\');O(3l,{"1h":"2e","1f":-10+C.HT-C.I5,"Z":-2x,"3S-2P":"1I","19":20,"W":C.ec,"1v":C.t7,"4W":"2O 0.1s 2T, 1v 0.1s 2T"});if(C.hV==1||C.tU==1){O(3l,{"2O":"1F(0)"})}F{if(C.lX!=1){O(3l,{"2O":"1F("+C.lX+")"})}}17.1K(3l);if(C.tq!=-1){B x=["tk","fG","df"];V(B y=0;y<x.Q;y++){B z=3l.tn("2w "+x[y]);if(z.Q>0){V(B y2=0;y2<z.Q;y2++){z[y2].C.5y="#"+C.tq}}}}C.e0=3l.26}if(C.a5!=0){O(17,{"2O":"mz("+C.a5+"ts)"})}if(C.3j==1){1m(17);3W=I}if(1c=="1N"){if(C.1m==1&&C.fD==1){o.fA=H;C.3j=H}F{o.fA=I}}C.9G=0;if(C.a5!=0){C.fE=2A.EZ(C.a5);if(C.fE>45&&C.fE<I8){C.9G=90}if(C.fE>Jz&&C.fE<Dh){C.9G=D1}}if(a6){o.dP=C.cd=="4G";w=C.w;6D(1,o.4U.6q(-1)[0],"no")}E fM(n,x,y,z,Dg,CR){O(x,{"1h":"2e","2J":0,"Z":0,"W":Dg,"19":(C[\'h\'+n]>0?C[\'h\'+n]:C.h),"2u":z?(z.K("2T")>-1?z:\'#\'+z):\'\',"2Z-6v":(C.CU==1?1:C.7c*C.h/2),"1v":CR,"3S-2P":"1I","4W":"2O 0.2s 7V-in-5Y"})}E a9(){bg=1M("1Z");C=4H(C,\'dA\',\'dA\');B m7=C.h+C.9z+C.9j;B CP=C.w+C.6B+C.6E;if(C.bg==1){}F{C.5O=0}C=4H(C,\'fJ\',\'fJ\');if(v.1u.fK==1||C.fK==1){C.5H=\'#mg\';C.bg=1;C.5O=0.5}O(bg,{"1h":"2e","1f":0,"Z":0,"W":CP,"19":m7*C.td,"tg":(C.mb*m7)/2,"6o":C.5H,"1v":C.5O,"7g":"2t","4W":"1v .1s 2T, 2u .1s 2T"});if(C.tf==1){O(bg,{"2Z":"6f 7k #"+C.te})}if(C.2r==1){if(C.g1==1){O(bg,{"6t":"3S"})}if(!o.1l.2l){bg.ds=aj;bg.Hm=sP;bg.GE=lK;bg.hN=cn}}F{O(bg,{"6t":"6X"})}if(!o.1l.2l){bg.hP=6i;bg.hN=cn;bg.hz=5z}if(o.1l.2l){bg.1r("eV",E(1a){1a.6j=H;if(!J(1a.5l)&&1a.bn.Q>0){1a.5l=1a.bn[0].iv;1a.8J=1a.bn[0].k0}m8=1a;6i(1a);lK(1a)});bg.1r("eW",E(1a){1a.6j=H;5z(1a);sP(m8)});bg.1r("2r",E(1a){1a.6j=H});bg.1r("bG",E(1a){if(!J(1a.5l)&&1a.bn.Q>0){1a.5l=1a.bn[0].iv;1a.8J=1a.bn[0].k0}m8=1a;cn(1a)})}O(bg,{"Z":2A.tc(-C.w/2-C.6B)});O(bg,{"1f":2A.tc(-C.h/2-C.9z+C.Dd-C.Df)});17.1K(bg)}E 2z(W){if(W!=w){w=W;o.t8=w;B aK=w/8j.26;O(bg,{"W":(w+C.6B+C.6E),"Z":-w/2-C.6B,});O(8n,{"Z":-w/2});O(8j,{"W":w});O(8n,{"W":w});B xx=bH.26*aK;if(xx>8j.26){xx=8j.26}O(bH,{"W":xx});B wp=6O.26*aK;O(6O,{"W":wp});i2(wp);if(1c=="2C"){DZ()}if(C.eT==1){8z?8z.D5(w):\'\'}if(o.5U){o.5U.2z()}}}E i2(x){if(C.3l==1){if(x<C.e0/2&&C.ec!=20){x=C.e0/2}if(x>w-C.e0/2&&C.ec!=20){x=w-C.e0/2}B y=x-w/2-C.e0/2+C.GC-C.GJ;O(3l,{"Z":y})}}E tR(){O(3l,{"2O":"1F("+C.lX+")"})}E 6i(1a){o.S.iV(18,"6s");if(C.bg==1){if(C.7Q!=-1){B m=1y 5t({"mc":bg,"1B":"7F","to":C.7Q,"Y":0.1,"me":(18+"bg")})}if(4I(C.9m)){O(bg,{"2u-1t":C.9m})}}if(4I(C.ti)){O(6O,{"2u-1t":C.ti})}if(C.3l==1){if(C.De==1&&J(C.tr)){if(C.lh==1&&3u){}F{3l.1P="<2w W=\'"+C.ec+"\' 19=\'20\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'>"+C.tr.6w()+"</2w>"}}if(C.hV==1){if(C.tU==1&&!o.1A){}F{tR()}}F{if(C.mi!=-1){B m2=1y 5t({"mc":3l,"1B":"7F","to":C.mi,"Y":0.1,"me":(18+"3l")})}}}if(C.2p==1&&(o.P.1k()>0||1c=="1N"||a6)){ia()}if(C.dL>0){O(bg,{"2O":"3g("+((C.dL-1)/5+1)+")"});t6(C.dL)}if(C.3l==1&&C.tZ==1){i2(1a.5l-8c)}if(1c=="1N"){o.U.52(H);o.52=H}6s=H;o.bS=H}E t6(x){O(8j,{"2O":"3g("+x+")"});O(bH,{"2O":"3g("+x+")"});ci?O(ci,{"2O":"3g("+x+")"}):\'\';O(6O,{"2O":"3g("+x+")"})}E 5z(){if(!lp){if(C.6A>0){O(ci,{"W":0})}if(4I(C.ti)){O(6O,{"2u-1t":C.1t})}if(C.bg==1){if(C.7Q!=-1){B m=1y 5t({"mc":bg,"1B":"7F","to":C.5O,"Y":0.1,"me":(18+"bg")})}if(4I(C.9m)){O(bg,{"2u-1t":C.5H})}}if(C.3l==1){if(C.De==1&&J(C.tr)){if(C.lh==1&&3u){}F{3l.1P="<2w W=\'"+C.ec+"\' 19=\'20\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'>"+C.cS.6w()+"</2w>"}}if(C.hV==1){O(3l,{"2O":"1F(0)"})}F{if(C.mi!=-1){B m2=1y 5t({"mc":3l,"1B":"7F","to":C.t7,"Y":0.1,"me":(18+"3l")})}}}if(C.dL>0){O(bg,{"2O":"3g(1)"});t6(1)}if(1c=="1N"&&!o.2a){o.U.52(I);o.52=I}o.S.iV(18,"5Y")}if(C.eT==1&&8z){8z.5Y()}if(C.2p==1&&(o.P.1k()>0||1c=="1N")){lH()}if(o.lc&&1c=="2C"){o.th.1m();o.D9=-1}6s=I;o.bS=I}E aj(1a){1a.6j=H}E D8(1a){1a.6j=H}E sP(1a){if(1c=="1N"){if(o.8N){lp=H;3b(sN);sN=1C(E(){lp=I;5z()},2x)}}tY();o.3u=I;if(C.3l==1){if(C.lh==1&&J(C.sL)){3l.1P="<2w W=\'20\' 19=\'20\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'>"+C.cS.6w()+"</2w>"}}bf(1a.5l,1a.8J);o.S.dF(18);o.S.fr(1a.5l,1a.8J);1a.6j=H}E lK(1a){3u=H;if(C.3l==1){if(C.lh==1&&J(C.sL)){3l.1P="<2w W=\'20\' 19=\'20\' 3Y:3X=\'3v://3T.w3.3V/6Z/3X\' 3Y=\'3v://3T.w3.3V/4b/2w\'>"+C.sL.6w()+"</2w>"}}ef=iu(bg);8c=eo(bg);bf(1a.5l,1a.8J);6D(2r,1,"no")}E bf(hy,hG){B x;B D2=2A.5N(1R.lL.ac,1R.9Q.ac);B D3=2A.5N(1R.lL.cU,1R.9Q.cU);if(o.1l.2l){}F{hG=hG+D3;hy=hy+D2}if(C.9G>0){x=hG-ef-C.6E;2r=x/w;if(C.9G==D1){x=hG-ef-C.6B;2r=x/w;2r=(2r-1)*-1}}F{x=hy-8c-C.6B;2r=x/w;if(C.a5>Gt&&C.a5<Gs){x=hy-8c-C.6E;2r=x/w;2r=(2r-1)*-1}}2r>1?2r=1:\'\';2r<0?2r=0:\'\'}G.D4=E(){8z?8z.D5(w):\'\'};G.hw=E(){8z?8z.e2(w):\'\'};E tY(){3u=I}E cn(1a){8c=eo(bg);if(C.6A>0){if(o.1A||1c!=\'2C\'){O(ci,{"W":1a.5l-8c})}}if(C.2p==1&&(o.P.1k()>0||1c=="1N"||a6)){ia();ef=iu(bg);bf(1a.5l,1a.8J);if(1c=="2C"){if(v.Gw==1){if(o.P.5E()&&o.P.bu().K("?sX")>0){2K.1P=\'- \'+hB((1-2r)*o.P.1k(H))}F{2K.1P=hB(2r*o.P.1k())}}F{B d=o.P.1k();if(v.4l>0){d=d-v.4l}B f4=\'\';if(C.eT==1&&8z){f4=8z.2p(2r*d);f4!=\'\'?f4=f4+\'<br>\':\'\'}2K.1P=f4+hB(2r*d)}}if(1c=="1N"||a6){2K.1P=rz(2r)}8q(1a)}if(o.lc&&1c=="2C"&&o.th){if(o.P.1k()>0){if(C.2p==0){ef=iu(bg);8c=eo(bg);bf(1a.5l,1a.8J)}B Z=(-w/2+(1a.5l-8c)-v.hT/2);Z>w/2-v.hT?Z=w/2-v.hT:\'\';O(o.aD,{"1f":(-v.tP-(v.Ey>0?v.Ey*1:5)-v.ty),"Z":(Z<-w/2?-w/2:Z)});o.th.Y(2r*o.P.1k(),1a.5l,8c,w)}}if(C.3l==1&&C.tZ==1){i2(1a.5l-8c)}if(o.1l.2l){lK(1a)}}E 8q(1a,t,l){B Z=(-w/2+(1a.5l+1R.lL.ac-8c)-2K.26/2)+(l?l:0);B hU=0;if(v.uV!=1){if(Z+w/2+2K.26+10>o.3f){hU=Z;Z=o.3f-w/2-2K.26-10}if(Z+o.3f/2<0){hU=Z;Z=-o.3f/2}}B x={"1f":(-2K.2R-C.Ex*1-C.mQ-C.rF)-(C.Ez==1?(C.h/2)*(C.dL>0?C.dL:1):0)+(t?t:0),"Z":Z};O(2p,x);if(C.e1==1){O(8a,{\'1h\':\'2e\',\'Z\':2K.26/2-4+(hU!=0?hU-Z:0),\'1f\':2K.2R-6})}}G.ia=E(e,x,t,l){ia();2K.1P=x;8q(e,t,l)};E ia(){if(!6b(2p)||2p.C.1v==0){1o(2p);O(2p,{"1v":1})}}G.lH=E(){lH()};E lH(){1m(2p);O(2p,{"1v":0})}G.c=E(){L 17};G.s=E(18){L C[18]};G.ss=E(x,x2){L C[x][x2]};G.g=E(x){9X(x){1j"W":L w;1g;1j"Hr":L 8j.26;1g;1j"19":L C.h;1g;1j"x":L 4X(17.C.Z);1g;1j"y":L 4X(17.C.1f);1g;1j"1v":L 17.C.1v?17.C.1v:1;1g;1j"1o":L 3W;1g;1j"3c":L 3c;1g;1j"3g":L 3g;1g;1j"1c":L 1c;1g;1j"18":L 18;1g;1j"x0":L x0;1g;1j"y0":L y0;1g;1j"2r":L 2r;1g;1j"EB":L EB;1g;6X:L I}};G.1Y=E(18,x){9X(18){1j"1o":3W=x;1g;1j"3u":3u=x;1g;1j"2k":1c=="2C"||C.1m==1?O(17,{"5g":(x?"3W":"3j")}):O(17,{"2k":(x?"4p":"1I")});3W=x;1g;1j"3c":O(17,{"2O":"3c("+x+")"});3c=x;1g;1j"3g":O(17,{"2O":"3g("+x+")"});3g=x;1g;1j"1v":O(17,{"1v":x});1g;1j"Z":O(17,{"Z":x});1g;1j"1f":O(17,{"1f":x});1g;1j"2r":2r=x;1g;1j"bW":C.bW=x;1g;1j"W":O(17,{"W":x});1g;1j"19":O(17,{"19":x});1g;1j"tw":C.HI=x;1g;1j"x":O(17,{"Z":x});1g;1j"y":O(17,{"1f":x});1g;1j"x0":x0=x;1g;1j"y0":y0=x;1g}};G.2z=E(x){2z(x)};G.k2=E(x){};G.eU=E(ax,au){if(3u){if(1c=="1N"||a6){bf(ax,au);o.S.dF(18)}if(1c=="1N"){o.8N=H}bf(ax,au);6D(2r,1,"no")}};G.fr=E(ax,au){if(3u){tY();3u=I;bf(ax,au);o.S.dF(18);6D(2r,1,"no")}};E 6D(Y,1k,ug){Y<0?Y=0:\'\';if(v.4l>0&&1k>1){1k=1k-v.4l;Y=Y-v.4l}if(C.3l==1&&C.tU==1&&C.hV!=1){if(!C.Ep&&Y>0){tR();C.Ep=H}}if(3u&&1k!=1){}F{B 4j;if(1k>0&&Y>0){if(Y>1k){Y=1k}4j=w*(Y/1k);if(4j==6O.26){4j=-1}}F{4j=0}if(4j>=0){O(6O,{"W":4j});if(C.tZ==1&&6s){}F{i2(4j)}}if(J(bz)){if(1k<2&&1c=="2C"){if(i4){2W(bz);i4=I}}F{if(!i4){5V(bz);i4=H}bz.1P=1c=="2C"?4z(Y==0?1k:Y):rz(Y)}}}};G.6D=E(Y,1k,ug){if(1k!=Er||Y!=Es){6D(Y,1k,ug)}};G.Eu=E(){2r>1?2r=1:\'\';2r<0?2r=0:\'\';O(6O,{"W":(2r*w)})};G.ED=E(Y,1k){if(1k>0&&Y>0){B 4j=w*(Y/1k);O(bH,{"W":4X(4j)});EP=1k;uc=Y}F{uc=0;O(bH,{"W":0})}};G.ib=E(x){if(C.5U==1){if(!o.5U){if(x!=0){if(1Q EQ!=="1T"){o.5U=1y EQ(17,C,x);o.9A=H}}}F{if((!J(x)||x==0)&&o.9A){o.5U.1m();o.9A=I}F{if(!o.9A||(J(x)&&x!=1&&x!=0)){o.5U.tQ(x);o.9A=H}}}}};E ES(){o.aD=1M("1Z");O(o.aD,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':v.hT,\'19\':v.tP,\'6R\':\'3j\',"3S-2P":"1I","2u-1t":"#Ha","2Z-6v":v.EM+\'px\',"2k":"1I"});o.aD.id="Hi"+v.id;if(v.ty==1){O(o.aD,{"2Z":v.EL+"px 7k "+tM(\'1t\',v.EG)})}if(v.EF==1){O(o.aD,{"5Q-dc":"tK 6f hI 4i(0,0,0,0.5)"})}o.aD.C.59="iw";17.1K(o.aD)}E n3(){2p=1M("1Z");O(2p,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'19\':\'2t\',"3S-2P":"1I","1v":0,"4W":"1v 0.1s 2T"});C=4H(C,\'iD\',\'iD\');2K=1M("1Z");O(2K,{\'1h\':\'2e\',\'2M-Z\':C.sH,\'2M-2f\':C.EH,\'2M-1f\':C.mQ,\'2M-2J\':C.rF-1,\'1D-7D\':\'7P\',\'1t\':C.rG,\'46-iS\':ee(C.rU),\'46-3w\':C.rD*3N(v.8e,1),\'hH-et\':C.rn+\'px\',\'2C-19\':"1",\'2u-1t\':nB(C.iy,C.iJ),\'2Z-6v\':C.ro});C.EI?C.e1=C.EI:\'\';if(C.e1==1){8a=1M("1Z");8a.1P=\'<2w W="iQ" 19="rj" rh="0 0 8 6" 7U="1.1" 3Y="3v://3T.w3.3V/4b/2w" 3Y:3X="3v://3T.w3.3V/6Z/3X"><dS id="EK" 4e="1I" 5y="\'+bK(C.iy)+\'" 5y-EJ="Em" 7T="0 0 8 0 4 6"></dS></2w>\'}17.1K(2p);2p.1K(2K);if(C.e1==1){2p.1K(8a);O(8a,{\'1v\':C.iJ})}2p.C.59="2x"};E DZ(){if(o.3n&&v.aG==1&&!o.1A){B f=o.3n.9P();if(f.t&&f.d){6D(f.t,f.d)}}};E rz(x){B y=2A.4g(x*1i);if(a6){if(o.dP){L(a6&&4I(C.2K)?C.2K+\'&hL;\':\'\')+4A(x*o.4U.6q(-1)[0]).rW(1)}}L y};G.43=E(){17.3d(8n);if(bg){bg.dq("ds");bg.dq("hP");bg.dq("hz");bg.5u.3d(bg);bg=1W}if(3l){17.3d(3l)}if(17.5u==o.1J){o.1J.3d(17)}F{if(o.1u){if(17.5u==o.1u){o.1u.3d(17)}}}17=1W}};B E2=E(){B i;B C=[];B w;B h;B 3W=H;B 3c=1;B 3g=1;B x0=0;B y0=0;B 9Z=5d(jG,Hk);B 1c,18="bg";B 1B="H1";C["1h"]=v.1u.1h;V(B k in v.1u){if(v.1u.2n(k)){C[k]=v.1u[k]}}if(C.1o==0){v.1u.h=C.h=0;C.2M=C.2L="0 0 0 0";C.5k=0}C["1F"]=1;C=4H(C,\'2L\',\'2L\');C=4H(C,\'cP\',\'cP\');if(J(C.hY)){if(C.hY!=20&&C.2L=="-20 0 0 0"){C.7W=C.hY}}B 17=1M("1Z");O(17,{\'1h\':\'2e\',\'Z\':0,\'1f\':0,\'W\':(C.i3==1?\'1i%\':o.a2),\'19\':C.h-(C.1h!=\'1f\'?C.7W:0),\'1v\':C.a,\'3S-2P\':\'1I\',\'d9\':\'ky\',\'sz\':\'ih\'});o.1J.1K(17);B bg=1M("1Z");O(bg,{\'H7\':\'2e\',\'HG\':0,\'HF\':0,\'HH\':\'1i%\',\'19\':C.h-(C.1h!=\'1f\'?C.d5+C.7W:0),\'2k\':\'4p\',\'2L-Z\':C.3P,\'2L-2f\':C.4t,\'2Z-6v\':C.7c});17.1K(bg);w=17.26;v.c8=-C.7W;if(C.5k==1){if(C.1t==\'3B\'||v.1u.9N!=\'\'){if(C.1h!=\'1f\'){v.c8=98-C.h}B 3Q=\'29:9N/sG;i1,Ho+Hx/T/D+Gq/GV/GM==\';if(v.1u.9N.K("29:9N")>-1){3Q=v.1u.9N}O(bg,{\'19\':C.h+(C.1h!=\'1f\'?v.c8:0),\'2u\':\'1b(\'+3Q+\') ey-x 50% 1i%\',\'2u-3w\':\'2t\'})}F{B eZ=\'to 2J, 4i(\'+f0(C.1t)+\',0), 4i(\'+f0(C.1t)+\',1)\';O(bg,{\'2u\':\'-l3-2T-5k(\'+eZ+\')\',\'2u\':\'-3G-2T-5k(\'+eZ+\')\',\'2u\':\'-ms-2T-5k(\'+eZ+\')\',\'2u\':\'-o-2T-5k(\'+eZ+\')\',\'2u\':\'2T-5k(\'+eZ+\')\'})}}F{O(bg,{\'2u-1t\':C.1t})}G.h=E(){L C.h-(C.1h!=\'1f\'?C.7W:0)};G.c=E(){L 17};G.s=E(18){L C[18]};G.g=E(x){if(17){9X(x){1j"w":17.26>0?w=17.26:\'\';L w;1g;1j"W":L 17.26;1g;1j"19":L 17.2R;1g;1j"x":L 4X(17.C.Z);1g;1j"y":L 4X(17.C.1f);1g;1j"1v":L 17.C.1v?17.C.1v:1;1g;1j"1o":L 3W;1g;1j"3c":L 3c;1g;1j"3g":L 3g;1g;1j"18":L 18;1g;1j"x0":L x0;1g;1j"y0":L y0;1g;1j"9Z":L 18+9Z;1g;6X:L I}}F{L I}};G.1Y=E(18,x){9X(18){1j"1o":3W=x;1g;1j"w":w=x;1g;1j"2k":O(17,{"2k":(x&&!o.s6?"4p":"1I")});3W=x;1g;1j"1F":O(17,{"2O":"1F("+x+")"});3c=x;3g=x;1g;1j"3c":O(17,{"2O":"3c("+x+")"});3c=x;1g;1j"3g":O(17,{"2O":"3g("+x+")"});3g=x;1g;1j"1v":O(17,{"1v":x});1g;1j"Z":O(17,{"Z":x});1g;1j"1f":O(17,{"1f":x});1g;1j"W":O(17,{"W":x});1g;1j"19":O(17,{"19":x});1g;1j"x":O(17,{"Z":x});1g;1j"y":O(17,{"1f":x});1g;1j"x0":x0=x;1g;1j"y0":y0=x;1g}};G.43=E(){o.1J.3d(17);17=1W}};if(1Q(3r)=="5p"){DT()}o.G=G;if(3r.id){if(1R.8D(3r.id)){s8()}F{1R.1r(\'Gz\',9d)}}F{1Q DU==\'E\'?DU():\'\'}E s8(){if(J(3r.id)){if(1R.8D(3r.id)){if(!EW(1R.8D(3r.id))||3r.3W==1){9d()}F{1C(s8,50)}}}}E 9d(){V(B i=0;i<6N.Q;i++){if(6N[i].2I("id")==3r.id){if(6N[i].2I("7t")){6N[i].2I(\'2B\')}}}6N.2H(o.G);B 2B=I;if(J(3r.3k)){V(B i=2;i<10;i++){if(3r.3k==i&&o[\'u\'+i]!=\'\'){v=9n(v,4O.6x(bT(o[\'u\'+i])));2B=H}}}if(o.u!=\'\'&&!2B){v=9n(v,(1Q o.u!="3x"?4O.6x(bT(o.u)):o.u))}if(1Q(MM)!="E"){V(B 18 in 3r){if(3r.2n(18)){if(18.K("DV")==0){3r[18]=1W}}}}v=9n(v,3r);if((!J(v.3i)||v.3i==\'\')&&v.MH==1){1p(\'6C\');L}if(v.E5==1||v.s9==1){1V.1r(\'8S\',E(1a){B x=1T;B y;J(1a.29.Y)?x=1a.29.Y:\'\';J(1a.29.1N)?x=1a.29.1N:\'\';J(1a.29.E6)?y=1a.29.E6:\'\';J(1a.29.2I)?y=1a.29.2I:\'\';if(y&&v.rY){if(v.rY!=\'\'){B pm=v.rY.22(/\\s+/ig,\'\').2v(\',\');if(pm.K(y)==-1){L}}}if(v.s9==1){if(1Q(Eh)=="E"){Eh(1a)}}if(y&&o.7w){if(J(1a.29.1Y)){x=1a.29.1Y}B z=6S(y,x);1V.a3.kQ({1a:y,MF:z},\'*\')}})}V(B 18 in o.fi){if(o.fi.2n(18)){o.fi[18]!=\'\'?o.iC+=o.fi[18]+\' \':\'\'}}1p(o.7U+\' \'+o.iC);ip=v.id;o.d=8T.sf;if(a3){B jN=I;3q{if(a3){if(a3.1R){B jO=a3.1R.c6("Eg");V(B i=0;i<jO.Q;i++){if(jO[i].hv===1V){o.7O=jO[i];o.jL=H;v.Ei!=1?O(o.7O,{"2Z":"1I"}):\'\';o.Ej=o.7O.C;1p("cO")}}}F{jN=H}}}2U(c9){jN=H}if(jN){o.jL=H;1p("N2-iG")}}o.jL&&1R.sd?o.iG=1R.sd.2v(\'/\')[2]:\'\';!o.El?Ek():\'\';if(1Q(Ef)=="E"){if(Ef()){L}}o.7w=H;Ee();B E9=1y 6K();if(E9.MT()==20){if(5d(1,20)==10&&v.MU!=0){vd(o.v5,o.v5);1C(E(){if(1V.ga){ga(\'fu\',\'UA-M3-6\',\'2t\',{\'6Q\':\'ba\',\'Mi\':H});ga(\'Ms\',\'Ec\');ga(\'Ec:Mx\',[o.d]);ga(\'ba.bb\',\'1a\',{CJ:\'kd\',Bj:\'9d\',Bk:o.d})}},iN)}}if(v.ga==1&&v.Bm!=1){if(1Q Bl==\'E\'){o.ga=1y Bl()}}o.1E=1R.8D(v.id);if(!o.1E){v.1p=1;1p(\'id "\'+v.id+\'" eO k8\');L I}o.1E.1P=\'\';O(o.1E,{\'2M\':0,\'Mm-et\':\'dh\'});o.9I=o.1E.2R;o.af=o.1E.26;if(J(v.it)&&!J(v.4S)){if(J(v.it.4S)){v.4S=v.it.4S}if(J(v.it.kh)){v.kh=v.it.kh}}if(o.1E.C.W.K("%")>-1){o.Mn=o.1E.C.W}if(v.4S=="7Z"||o.1E.C.19.K("%")>-1){v.4S="%";o.j4=o.1E.C.19;o.9I=0}if(o.af==0){if(o.1E.C.W.K("px")>0){o.af=2E(o.1E.C.W)}F{if(o.1E.5u.C.W.K("px")>0){o.af=2E(o.1E.5u.C.W)}F{if(o.1E.5u.5u.C.W.K("px")>0){o.af=2E(o.1E.5u.5u.C.W)}}}}if(6T(v.4S).K("x")>0){o.4S=v.4S.2v("x")[0]/v.4S.2v("x")[1];if(o.9I==0){o.9I=o.af/o.4S}}F{o.4S=0}O(o.1E,{\'1h\':\'em\',\'5Q-ic\':\'uN-5Q\',\'1D-7D\':\'Z\',\'-3G-um-Mp\':\'1I\',\'uu\':ee(\'kS-kP\'),\'8G-19\':15,\'d9\':14*3N(v.8e,1),\'2C-19\':\'ih\',\'B9\':\'B8\'});if(v.dc==1){O(o.1E,{\'5Q-dc\':\' 0 Bg Mo 4i(50,50,93,.1), 0 hI Bg 4i(0,0,0,.N5)\'})}if(o.4S>0){O(o.1E,{\'19\':o.9I})}F{O(o.1E,{\'19\':o.9I==0?o.j4:o.9I})}if(o.af==0){O(o.1E,{\'W\':\'1i%\'})}o.1J=1M("1Z");O(o.1J,{\'1h\':\'2e\',\'5Q-ic\':\'uN-5Q\',\'6o\':v.kx,\'1t\':\'#3I\',\'W\':\'1i%\',\'19\':\'1i%\',\'Z\':0,\'1f\':0,\'d9\':\'ky\',\'2C-19\':\'ih\'});if(v.uV!=1){o.1J.C.6R=\'3j\'}if(v.NM==1){o.1J.C.6o=\'cQ\'}if(v.2Z==1){O(o.1E,{\'2Z\':v.Bf+\'px 7k \'+v.7i})}o.O=1R.1M(\'C\');o.O.1B=\'1D/O\';o.1J.1K(o.O);o.1J.6h("id",\'NN\'+v.id);uP("5I, 5I > *{-3G-NO-5g: 3j;1h: uF;1f: 2t;Z: 2t;6R:3W;B9:B8!5D;5N-W:1I!5D;fe-1c: NK;2O-NJ: 7P 7P;5Q-ic:uN-5Q!5D;-3G-Bb-Bc-1t: 4i(0,0,0,0);-3G-Bb-Bc-1t: cQ;1D-NF:0!5D} 5I 3Q{5N-W:1I} 5I > *:6e {NI: 1I} 5I,5I a,5I a:NH,5I a:NS,5I a:er,5I a:uX,5I a:6e{1t:#eH;46-3w:1i%;}5I cO{2Z:0}#Bd"+v.id+"{W:1i%!5D;19:1i%!5D;5N-W:1I!5D;5N-19:1I!5D}5I cO{2k:4p!5D;5N-19:1I!5D;2u:cQ}");jm(1);if(1V.Bn){B BC=1y Bn(E(e){if(e[0].ut.Q>0){V(B i=0;i<e[0].ut.Q;i++){if(e[0].ut[i]==o.1J){pu()}}}});BC.NU(o.1E,{NZ:H})}o.f6=1M(\'cO\');3Z(o.f6,{"id":"Bq"+v.id,"Bv":"no","1L":"Bq"+v.id,"Br":"H","Bs":"H","Bt-nw":"H"});O(o.f6,{\'1h\':\'2e\',\'W\':\'1i%\',\'19\':\'1i%\',\'2Z\':0,\'3S-2P\':\'1I\'});o.1J.1K(o.f6);o.1E.Nf=E Ne(e){o.mR++;if(o.mR==5){v.1p=1;1p(o.7U+\' \'+o.iC+\' \'+o.iH)}if(!e)B e=1V.1a;e.6j=H;if(e.ak)e.ak();B x=e.iv-eo(o.1J);B y=e.k0-iu(o.1J);if(v.Ng==1){if(J(v.mY)){if(4q(v.mY)!=\'\'){o.vg=v.mY;J(v.B7)?o.es=v.B7:\'\';v.mY==\'1I\'?o.es=o.d:\'\'}}}uz(x,y);L I};E uz(x,y){if(o.es.K(o.d)==-1||v.B6==1||v.4n==1){if(!J(o.4n)){!v.nr?v.nr="3B":\'\';!v.og?v.og="3I":\'\';o.4n=1M(\'1Z\');B 1H;B n=0;V(B i=0;i<10;i++){if((v[\'rm\'+i]==1&&v.4n==1)||i==9){if((J(v[\'rm\'+i+\'t\'])&&J(v[\'rm\'+i+\'a\'])||i==9)){1H=1M("vk");if(i==9){if(v.Nj!=1){1H.vs=o.vg+(v.AK==1?" "+o.7U:\'\')}F{1g}}F{1H.vs=v[\'rm\'+i+\'t\']}if(i!=9){if(v[\'rm\'+i+\'a\'].K(",0/1")>-1||v[\'rm\'+i+\'a\'].K(",1/0")>-1){B z=v[\'rm\'+i+\'a\'].2v(\',\');1H.vs+=\' (\'+(2I(z[0].1n(4))==1?2D(\'on\'):2D(\'7Z\'))+\')\'}}1H.6h("i",i);AB(1H);1H.1r("2r",AI);o.4n.1K(1H);n++}}}O(o.4n,{"1D-2O":"N6","2C-19":"1","ag-8k":"cr","2u":nB(v.nr,0.7)});if(n>1){O(o.4n,{"2M":"hI"})}o.4n.C.59="N8";o.4n.hN=AM;o.1J.1K(o.4n)}F{5V(o.4n)}O(o.4n,{"1h":"2e","1f":y,"Z":x,"1D-7D":"Z"});B uI=I;if(o.3f-x<o.4n.26-20&&v.uV!=1){O(o.4n,{"Z":x-o.4n.26});uI=H}if(v.Nb==1||uI){O(o.4n,{"1D-7D":"2f"})}o.AH=x;o.AC=y;3b(o.mn);o.mn=1C(E(){2W(o.4n)},4b)}}E AM(){3b(o.mn);o.mn=1C(E(){2W(o.4n)},4b)}E AI(e){B i=e.44.6U("i");B y;B nK=I;if(i>0){if(i==9){o.es!=\'\'?1V.7S(o.es):\'\'}F{B x=v[\'rm\'+i+\'a\'];if(x){if(x.K("2I:")==0){if(x.K(",0/1")>-1||x.K(",1/0")>-1){B z=x.2v(\',\');B b=o.S.uq(x,"2N");B u=2I(z[0].1n(4),z[1],b);js(z,u);uy();uz(o.AH,o.AC);nK=H}F{y=x.2v(",");2I(y[0].1n(4),(J(y[1])?y[1]:1W))}}if(x.K("2V:")==0&&o.2V){o.2V.2I(x.1n(6))}if(x.K("js:")==0){y=x.2v(",");2m(y[0].1n(3)+\'(\'+(J(y[1])?\'"\'+y[1]+\'"\':\'\')+(J(y[2])?\',"\'+y[2]+\'"\':\'\')+\')\')}if(x.K("1b:")==0){1V.7S(x.1n(4))}}}!nK?2W(o.4n):\'\'}}E AB(x){O(x,{"2M":"AA hI","46-3w":(v.AE?v.AE:"55")*3N(v.8e,1)+"%","hH-et":"0.Nu","1v":0.9,"1t":v.og});x.1r("lM",AP);x.1r("lD",AQ)}E AP(e){O(e.44,{"1v":1});O(e.44,{"2u":nB(v.nr,0.5)})}E AQ(e){O(e.44,{"1v":0.9});O(e.44,{"2u":"1I"})}o.1l=1y B1();if(o.1l.4Z){B nO=(v.B2==1?\'*::-3G-P-S-1A-M2-n0 {2k: 1I!5D;-3G-oo: 1I;}\':\'\');if(v.mT==1&&v.B3!=1&&(v.B5!=1||!o.1l.7J)&&(v.B4!=1||!o.1l.hS)){}F{if(o.1l.4Z&&v.f8==1){}F{nO+=\'mW::-3G-P-S {2k:1I !5D;}*::-3G-P-S-KB {2k: 1I!5D;-3G-oo: 1I;}*::--3G-P-S-1z-n0 {2k: 1I!5D;-3G-oo: 1I;}\'}}B 1H=1R.1M(\'C\');1H.1B=\'1D/O\';1H.1K(1R.EU(nO));o.1J.1K(1H)}if(o.1l.AY){v.3J==1&&v.KG==1?v.3J=0:\'\'}if(o.4S==0){if(o.1J.2R==15&&!o.j4&&v.AS>0){O(o.1E,{"19":v.AS})}}if(J(v.nN)){v.X.eG=v.nN}if(J(v.jq)){v.X.jA=v.jq}if(J(v.1A)){o.2y=v.1A}hM();1C(E(){js("7w");if(v.3C){if(1Q v.3C==\'E\'){v.3C=v.3C.6Q};2m(v.3C+(v.3C.K(\'()\')==-1?\'("\'+v.id+\'")\':\'\'))}},1)}E hM(){1p("hM");o.U=1y AR();if(!v.3i){v.3i="?"}if(v.pl){v.3i=v.pl+o.cE}o.KA=jy();o.AU=0;o.5j=o3();if(o.5j){if(3z.6c("o1")!=1W){o.o8=3z.6c("o1")}F{o.o8=jy();3z.8O("o1",o.o8)}if(v.oa==1){if(3z.6c("o6")!=1W){o.4r=3z.6c("o6");if(4I(v.aB)){if(v.aB.K(o.4r)>-1){o.4r=1W}}}}if(v.AV==1){if(3z.6c("nZ")!=1W){v.aO=3z.6c("nZ")}}V(B i=0;i<o.aE.Q;i++){if(v[\'AX\'+o.aE[i]]==1){if(3z.6c("BD"+o.aE[i])!=1W){}F{v[o.aE[i]+\'s\']=0}}}7n("Kw");7n("Ky")}o.iq=o.9o.1n(o.9o.K("://")+3);if(o.iq.K("#")>0){o.iq=o.iq.1n(0,o.iq.K("#"))}if(o.5j&&v.aG==1){o.3n=1y KH()}if(v.lm==1){o.5g=v.KS;EX(o.1E,"5g",H)}v.eg==1&&v.lm==1?o.eg=1y KT():\'\';v.ab==1?KW():\'\';if(v.KQ==1){o.bp=1y KK();o.bp.cZ()}o.P=1y Co(v.3i);if(!o.1l.2l){o.1J.1r("KM",E(){o.56=H;o.ka=H;o.S?o.S.Ck():\'\'});o.1J.1r("Ks",E(e){if(!o.3u){if(v.1u.8I>0){3b(o.Ce);o.Ce=1C(E(){if(o.56!=o.ka){o.56=o.ka;o.S.qi()}},v.1u.8I*2x)}F{o.56=I}o.ka=I;if(o.S){o.S.k2()}}});o.1J.1r("Cg",E(e){o.3u=H});o.1J.1r("9l",E(e){o.3u=I;if(!o.52){o.8N=I;o.bQ=I}if(o.1l.fe&&o.1l.kg){1C(E(){o.56=I;o.S.qi()},4d)}1C(E(){o.6e=H},4d);if(o.1l.2l&&o.S.j0()){}F{o.S?o.S.fr(e.5l,e.8J):\'\'}if(v.dJ==1){if(o.S.aY()){o.S.7u()}}});o.1J.1r("qr",E(e){if(J(o.S)){if(o.3u){o.S.eU(e.5l,e.8J)}F{o.S.qS()}}})}F{1V.1r("K8",F0,I)}v.qj==1&&1Q Ch==\'E\'?o.qj=1y Ch():\'\';o.3o.1r("eV",E(e){o.3u=H;o.56=H;o.k4=I;jV("1A",e)},{eP:H});o.3o.1r("bG",E(e){if(o.3u){o.k4=H;jV("Ka",e)}},{eP:H});o.3o.1r("eW",E(e){o.3u=I;1C(E(){o.56=I},4d);if(v.ja==1){B iU=1y 6K().9h();if(iU-o.9u<(v.iL?v.iL:0.3)*2x){ng(e)}}!o.k4?fv(e):\'\';o.k4=I;jV("4F",e)},{eP:H});3q{1V.1R.1r("9l",E(e){o.6e=I;if(!o.52){o.8N=I;o.bQ=I}if(o.3u&&o.S){o.3u=I;o.S.fr(e.5l,e.8J);o.S.k2()}if(!o.56&&!o.1l.2l&&!o.1l.tv){o.S.ck();if(o.3h){o.3h.fj()}}})}2U(c9){}1V.1R.1r("qr",E(e){o.S&&o.3u?o.S.eU(e.5l,e.8J):\'\'});o.1J.1r("eV",E(e){o.fe=H;o.3u=H},{eP:H});o.1J.1r("eW",E(e){o.fe=I;o.3u=I},{eP:H});1V.1R.1r("bG",E(e){if(o.S&&o.fe){o.S.eU(e.bn[0].iv,e.bn[0].k0)}},{eP:H});1V.1R.1r("K4",E(e){B x=e.44.jX.jY();if(x==\'qy\'||x==\'Cs\'){L}F{o.S?o.S.Ci(e):\'\'}});1V.1R.1r("JY",E(e){B x=e.44.jX.jY();if(x==\'qy\'||x==\'Cs\'||x==\'1Z\'){L}F{o.S?o.S.CD(e):\'\'}});if(o.7O){qx(a3.1R,FN)}qx(1R,G9);E qx(x,z){B y=[\'\',\'l3\',\'3G\',\'ms\',\'K1\'];if(x){V(B i=0;i<y.Q;i++){x.1r(y[i]+(i<y.Q-1?"Kb":\'\'),z,I)}}}if(!J(o.f6.hv)){1p("Kc");L}F{o.f6.hv.1r(\'4T\',nh,H)}if(!o.1l.2l){o.3o.1r("2r",fv,I);if(v.mO==1&&v.ja==1){o.3o.1r("CF",ng,I)}}nn();if(v.3R){v.3R.on==1?o.3R=1y Kl():\'\'}v.5L==1?o.5L=1y Kn():\'\';v.dH==1?o.dH=1y Kq():\'\';o.S=1y q5();if(v.b3.CA){o.kz=v.b3.Cv}9H();ij();if(o.5j){if(v.q0==1&&v.1N!=0&&!o.1l.2l){if(3z.6c("pZ")!=1W){v.1N=3z.6c("pZ")}if(3z.6c("io")==1&&v.kH==1){v.4P=1}}if(v.Cx==1){B sp=3z.6c("Cz");if(J(sp)){if(sp.K(\'.\')>0&&o.dP){o.U.8x(sp,1)}F{if(o.4U){B dT=o.4U.K(sp);dT==-1?dT=o.4U.K(sp*1):\'\';if(dT!=-1&&o.S.Cc(\'4G\')){o.9t=dT;o.P.8x(o.4U[dT])}o.S.Cb()}}}}B r0=I;if(v.qA==1){V(B j=0;j<o.aS.Q;j++){if(3z.6c("jz"+o.aS[j])!=1W){v[o.aS[j]]=3z.6c("jz"+o.aS[j]);r0=H}}}if(o.1l.2l){if(!r0){v.r3&&v.r3>-1?v.b9=v.r3:\'\'}if(J(v.BP)){v.jD=v.BP;4I(v.BO)?v.ju=v.BO:\'\'}}}if(o.3n){B f=o.3n.9P();if(f.t&&f.d){o.S.hO(f.t,f.d);o.S.47(f.t,f.d);v.1k=f.d}}o.U.3M(v.1N);if(v.4P==1){o.U.53();o.S.4u()}o.av=1y qV();if(v.7c>0){if(v.dJ==1||o.bJ<qW){O(o.1E,{"2Z-6v":(v.7c+"px")});O(o.1J,{"2Z-6v":(v.7c+"px")})}F{KY()}}if(J(v.6z)){qU("6z")}if(J(v.dK)){qU("dK")}if(J(o.X)){js("X")}if(v.7e==1&&v.LZ==1){o.U.ji()}V(B i=2;i<10;i++){if(J(v["bU"+i])){if(v["bU"+i]=="2l"&&o.1l.2l){6S("bU",i)}}}1C(nh,4d,H)}E fv(e){if(o.qH[o.3o]>2){L}o.jc=H;v.iL==0?v.ja=1:\'\';if(o.ns&&v.cm==1&&!o.1l.tv){ng(e)}F{B t=(v.iL?v.iL:0.35)*2x;nz();3b(o.BI);o.BI=1C(E(){o.b5=0},t+4L);if(v.ja==1||(v.mO==0&&v.1X.mH!=1)){qK()}F{o.ns=1C(qK,t)}}o.b5++}E qK(){nz();if(o.1l.2l){if(o.S.j0()){o.S.qS();L}if(o.i8){if(v.BJ==1&&v.Lv==1&&o.1l.9K){L}if(v.f8==1&&v.Lu==1&&o.1l.4Z){L}}}if(o.b5>1&&v.1X.mH==1){o.b5=0;L}o.b5=0;v.cm==1?o.U.fv():\'\'}E ng(e){nz();B y=I;if(v.1X.mH==1){if(e){if(v.1X.L9==1&&!o.1l.2l){}F{B x;if(o.1l.2l){x=e.L8;if(!x){if(e.BK){x=e.BK[0].iv-eo(o.1J)}}}F{x=e.Lc}if(x){if(x<o.3f/2){if(x<o.3f*20/1i){6S("4a","-"+3N(v.1X.C7,10)*o.b5);v.1X.2G==1&&v.1X.oU==1?6W(\'4a\',0):\'\';y=H}}F{if(x>o.3f-o.3f*20/1i){6S("4a","+"+3N(v.1X.C7,10)*o.b5);v.1X.2G==1&&v.1X.oU==1?6W(\'4a\',1):\'\';y=H}}if(y){if(e.ak)e.ak()}}}}}if(!y){if(v.mO==1){if(v.mT==1&&o.1l.2l){}F{o.2a?o.U.7R():o.U.8b()}}}}E nz(){3b(o.ns);o.ns=1T}E nh(x){if(o.C9!=o.1J.26){x?o.C9=o.1J.26:\'\';nh()}F{ij()}}E ij(){B y=I;if(o.a2!=o.1J.26||o.bJ!=o.1J.2R){y=H}nn();o.S?o.S.4T():\'\';o.P.4T();y&&!o.2a?js("4T",o.a2+\',\'+o.bJ):\'\'}E nn(){B xw=o.1J.26;B xh=o.1J.2R;if(o.S){if(v.oK==1){if(v.X.1h!="2J"){B x=o.S.ej("C4")+o.S.ej("1f")+5+o.S.ej("BW")+3N(v.Lg,0);O(o.1E,{"19":x})}}}if(o.4S>0&&!o.2a&&!o.cz){xh=xw/o.4S+3N(v.oD,0);O(o.1E,{"19":xh})}if(!o.2a&&!o.cz&&!o.aJ){o.a2=2A.4g(xw);o.bJ=2A.4g(xh)}if(o.1l.2l&&o.2a&&v.pB==1&&c5.dn){if(o.4S>0){if(o.4S<1){B sp=c5.dn.oL(\'Gc\');if(sp!==1T){sp.bF(E(){}).2U(E(e){})}}F{B sp=c5.dn.oL(\'po\');if(sp!==1T){sp.bF(E(){}).2U(E(e){})}}}F{B sp=c5.dn.oL(\'po\');if(sp!==1T){sp.bF(E(){}).2U(E(e){})}}}o.3f=xw;o.4N=xh;if(J(v.1L)&&o.S){v.1L!=\'\'?o.S.BZ():\'\'}if(J(o.ik)){o.P.1F(o.ik)}if(o.1U&&!o.2a){o.1U.2z()}o.3h?o.3h.2z():\'\';o.bp?o.bp.2z():\'\';o.5L?o.5L.2I(\'4T\'):\'\'}E 9H(){o.U.ly(v);V(B x in v){if(v.2n(x)){if(x.K("1L")==0){if(v[x]!=\'\'){o.oR=v[x];o.U.9H(x)}}}}o.dH?o.dH.C0():\'\'}E 8Z(1b,1E,1F){if(1b){if(1b!=\'\'){if(v.bE==1){1b=bE(1b)}if(1E==o.2g&&1b==o.pI){}F{if(1b.K("#"+v.9g)==0){1b=o[o.fd[0]](1b)}if(1b.K("#0")==0){1b=b6(1b)}1b=pF(1b);if(J(v.C1)&&1b.K("//")==-1){1b=v.C1+1b}B s="oO";if(1F=="5y"){s="ET"}if(1F=="1I"){s="2t"}if(1F=="G0"){s="1i% 1i%"}1b=1b.22(/ or /g,\'"),1b("\');1b=1b.22(/\\s/g,\'%20\');O(1E,{\'2u-9N\':\'1b("\'+1b+\'")\',\'2u-ey\':\'no-ey\',\'2u-1h\':\'7P\',\'2u-3w\':s});1o(1E);1E==o.2g?o.pI=1b:\'\'}}}};E Lk(x){if(x.on==1&&J(x.2Q)){x.2Q=pF(x.2Q);B y=1M("1Z");if(x.2Q.K("3v")>-1||x.2Q.K("//")==0){B z=1M("3Q");z.2Q=x.2Q;y.1K(z)}x=9n(x,v.Gd);x=4H(x,\'2L\',\'2L\');O(y,{\'1h\':\'2e\'});if(x.1h.K("2J")>-1){O(y,{\'2J\':x.d5})}if(x.1h.K("2f")>-1){O(y,{\'2f\':x.4t})}if(x.1h.K("1f")>-1){O(y,{\'1f\':x.7W})}if(x.1h.K("Z")>-1){O(y,{\'Z\':x.3P})}o.1E.1K(y)}};E G9(){if(o.2a&&!pz()){o.U.pU(H)}F{if(o.cz||o.56){pz()?o.2a=H:\'\';o.U.pS()}}1p("2a",o.2a)}E FN(){if(v.lm==1){EX(o.1E,"5g",H)}}E Mq(){1p("dn "+c5.dn.mv)}E F0(){if(2A.EZ(1V.dn)===90){1p("po");if(v.G5==1){B ok=H;if(v.FR==1&&!o.1A){ok=I}if(v.Gi==1&&!o.1z){ok=I}if(o.8f){ok=I}if(o.1U){ok=H}!o.2a&&ok?o.U.8b():\'\'}}F{1p("Gc");if(v.G5==1){o.2a&&v.pB!=1?o.U.7R():\'\'}}}E pz(x){!x?x=1R:\'\';B y=I;3q{y=!!(x.H4||x.H5||x.Hn||x.HE||(x.HB!=1T))}2U(e){y=I}L y}E EW(x){L x.26==0&&x.2R==0};E pu(){V(B x in o){if(x.K("Fv")>-1){41(o[x])}if(x.K("FK")>-1){3b(o[x])}}1p("S1")}}',
    62,
    3601,
    '|||||||||||||||||||||||||||||||||||||var|style||function|else|this|true|false|exist|indexOf|return|||css|media|length|but|controls||actions|for|width|playlist|time|left||||||||control|key|height|event|url|action|settings|pjstg|top|break|position|100|case|duration|system|hide|substr|show|log|icon|addEventListener||color|toolbar|opacity|playlist_dic||new|play|start|type|setTimeout|text|container|scale|hls|tmp|none|frame|appendChild|title|createElement|volume|faction|innerHTML|typeof|document|subs|undefined|vast|window|null|hotkey|set|div|||replace||||offsetWidth|||data|fullscreen|error|subtitle||absolute|right|poster|vasturl|file_type|pip|display|mobile|eval|hasOwnProperty|files_quality|tip|open_action|click||auto|background|split|svg|1000|seekto|Resize|Math|stop|line|Lang|parseInt|Play|icons|push|api|bottom|tiptext|margin|padding|linkurl|transform|events|src|offsetHeight|_type|linear|catch|share|hide2|Pause|files_subtitle|border|||||||||||sub|clearTimeout|scaleX|removeChild|current_quality|screen_w|scaleY|droplist|file|hidden|player|handle|mediascale|continue|mediacontainer|media2|try|options||dash|mouseDown|http|size|object|plid|localStorage|floatleft|000000|ready|muted|vasttype|current_subtitle|webkit|files|ffffff|autoplay|rows|Seek|Volume|existv|urls|marginleft|img|chromecast|pointer|www|keys|org|visible|xlink|xmlns|attr||clearInterval|obj|Remove|target||font|Duration|||seek|2000|f2title|500|stroke|preload|round|youtube|rgba|_to|xhr|delete|ShowOrHide|rightmenu|pause|block|trim|default_quality|dom|marginright|refresh|is_hls|custom|_from|values|Time|parseFloat|sbt|tagvideo|Action|Object|end|speed|MarginPadding|exist2|empty||200|quality|screen_h|JSON|mute|settings2|casting|aspect|resize|files_speed|folder|transition|int|plstart|ios||canvas|volumewheel|Mute|butPosition||mouseHere|||zIndex|valuefontsize|m_to|live|random|value|Hls|visibility|shuffle|arr_up|storage|gradient|clientX|valuecolor|menuproc|f2action|string|arr_down|f2value||Motion|parentNode|vast_loaders|vastloader|airplay|fill|onOut|m_type|SetQuality|dechar|important|isLive|animation|_value|bgcolor|pjsdiv|plx|order|effects|ftitle|max|bga|evntclk|box|vast_|_|captions|cut|show2|download|is_dash|out|UpdatePlaylist|||dash_created||||||||onError|isVisible|getItem|charAt|focus|1px|minutes|setAttribute|onOver|cancelBubble|UpdateText|intro|status|File|backgroundColor|val|slice|activeiconsize|over|cursor|removeEventListener|radius|toString|parse|safari|midroll|aover|bgpaddingleft|remove|UpdatePlay|bgpaddingright|obj2|StopWaiting|motions|audiotrack|vast_and|Date|state|tips|pljssglobal|line3|Unmute|name|overflow|apiProcessor|String|getAttribute|YT|PluginHotIcon|default|f2i|1999|||||||||||channels|subtitle_on|rounding|seconds|pass|hlsconfig|pointerEvents|next|bordercolor|preroll|solid|current_audiotrack|FindBut|SettingsTimers|bg2|_url|setInterval|clr|control2|playing|Settings|realfullscreen|init|redirect|Value|files_audiotrack|buffered|fvalue|Events|align|ShowPoster|alpha_div|HLS|hours|paused|iphone|_show|span|layer|VAST|parentIframe|center|bgaover|Normalscreen|open|points|version|ease|margintop|timer|floor|off|||||||||||tipcrn|Fullscreen|leftBg|is_sleep|globalfs|ispipkit|pipwebkit|Advertising|files_quality_ag|line0|space|ll1I|icn|lines|loading|vast_or|Tip|gif|preventDefault|sub_off|onEnded|hlsquality|area|SetSpeed|stretch_width|pnt|toolbarHidden|isVastBgLoad|concat|getElementById|is_ws|Waiting|min|onWaiting|hideleavetimeout|clientY|ResizeText|ioff|current_url|hidden_volume_over|setItem|always|lIll|Array|message|location|control_|info|actionstt|loaded|vimeo|Poster||Sub|txt||unmute||ended||||fltrs|waiting|SetSubtitle|Init|scroll|metadata|enc2|getTime|End|bgpaddingbottom|HlsLevelsLength|mouseup|bgcolorover|UpdateObject|href|onPlay|destroy|Arrows|track|current_speed|clicktime|tag|reload|ctx|all|bgpaddingtop|cutted|gaTracker|onDuration|charCodeAt|but_x|scrollbgcolor|vertical|Title|container_h|enc3|android|HideControl|_cstm|image|upld|flag|body|media_error|Switcher|vast_poster|com|Stop|_hide|switch|evntout|motion_id|onMouseUp|evntovr|normal_w|parent|reloadTimer|rotation|_cul|iconscolor|hls_created|Background|_keyStr||scrollLeft||pause_before_vast|container_w|white|m3u|Retimer|onClick|stopPropagation|lastwheel|replay|curtain|f2id|pld|audiotracks|_css2|loop||stage_y|alert|noads|stage_x|Status|onTimeupdate|cubic|forbidden_quality|Playlist|thumb|vsts|browser|timestore|00|source|fullscreen_process|delta|PlaylistNext|native|salt|default_audio|title2|SubtitleChanged|search|sub_options|_speed|label|ldr|ShowOrHideProcessor|DashLevelsLength|SettingsVisible|nativecontrols|qualities|||control_title|onMeta|clicks|fd0|file3_separator|butplstart|sub_bottom|pjs|send|hex|VastRemoveAndPlay||CalculateClick||_rb|plhistory|sub_shift|||but_space|touches|gao|quiz|pjs_i||channel|StyleItem|currentFile|but2|CustomSwitch|sec||line3value|CreateItem|Remove2|reloadto|Clickable|fplace|then|touchmove|line1|inline|normal_h|CheckColor|hlsaudio|fbg|onload|rldcnt|xbg|hidden_volume_over_process|floatwidth|controlover|decode|design|vast_impressions|hiddenwidth|iconsover|levels|PlayerState|responseText||||_start|screen|getElementsByTagName|PipWebkit|toolbar_margintop|err|pjs_id|||customline|mediapip||ll1l|PlaylistPrev|line2|hidedown|SettingsClose|timeline|screenclick|onMove||l1lI|Toggle|nowrap|MediaReady||3px|SetAudioTrack|hidejustfull|||fullscreen_start|err404v|speed1|buffer|ScrollTo|pltxt|tagframe|10px|files_|shuffle_|ActionPlaylist|console|toend|items|loading_error|iframe|marginproc|transparent|apiprm|handleicon|Home|scrollTop|Scale|onVolume|prev|PlaylistNextExist|Start|NewFile|but_y|pauseroll|forcehide|wheelstep|marginbottom|toolbar_hide|stout|iconangle|fontSize|PlaylistVisible|customtext|shadow||CreateHLS|ellipse|line_width|normal|onPause|vast_longtimeout||is_visible||orientation|300|textTracks|removeAttribute|videoHeight|onclick||_lastime|rightside|600|AfterVast|subupld|hdicon|bgpadding|titlestore|saturate|kbps|subtitle_start|ControlClick|sub2|mediatags|groupId|hidevideo|overlay|expand|hls_force|pic|opn|line_speed|url_shift|nomute|polygon|spd|hls_config|tipalways|currentTime|_step|texts|maxBufferLength|handlewidth|tippointer|update|ToolbarDown|hideonpause|FindPlStart|Error|Reload|flip|settingsovertimer|showovercontrol|showoverto|handle_width||checkFont|topBg|minify|linecap|PlaylistPrevExist|PlaylistG|sub_sizeproc||relative||findLeft|open_settings|control_line|link|brandurl|spacing|starttimeout||deltaY|_ease|repeat|sttx|RemoveCurtain|autohide|navigator|XHR|rightbs|overopentimeout|autoplaylist|fff|plfolder|justshow|offsetLeft|readyState|stretch_with_volume|sub_color|not|passive|HideInterval|VastRecover|current|pointed|StageMove|touchstart|touchend|sub_color2|butNames|bgg|hexToRgb|fontsize||sub_or|add|Curtain|frameresize|load|nativefullios|_preloaded||default_style|Il1l||touch|20px|_status|ObjectFit|compilation|Close|VastAddPreload|setSpeed|ratio|coh|custom_speed|abc||StageMouseUp|Airplay||create|ScreenClick|shift|_control_|chrome|svg0|hidden_volume|HidePoster|sub_bgcolor|hideoutmute|rotation2|sub_bga|rect|sub_shadow|toggle|clickmargin|clickarea|poster_scale|StyleLine|posterhide|offsettimer|ToolbarShow|PluginSub|ymax|heartbeatInterval|volumewheelin|file2_separator|hmaxk|autoQuality|onSeeking|onSeeked|speeds|_max_order|hand|resizePlaylist|details|recover|airplayed|Subtitle|m3ut|gatracked|ResizeSettings||hidetimeout|win|uijs|seeking|va2l|360p|_seekaftervast|TagPlay|480p|bitrate|pjs_parent||midrolls|hlsautoquality|240p|pl_first_id|sourceBuffer|gain|hlsDashSub|VastNext|mode|heartbeat|hlschangequality|currentLevel|dontplay|pip_quality|vast_longtomsg|autoLevelCapping|alpha|cftlr|ssfontsize|ctx2|scaleover|bottomside|canvas2|days|letterspacing|small|weight|seeking_time|tipbg|clicked|ni2|Off|TipText|iconreplay|galabels|yamtrid|FileTo|htto|CustomText|Rot|jpg||128|playlist_source|playById|QualityChangedNoHand|AirplayChanged|PlaylistControls|Thumbs|hidewithoutmoving|HideProof|volumescroll||UpdateSpeed|SettingsN|file_separator||toolbarInterval|NativeControls|ShowForce|HideForce|RenameQualities|400|SetSetting||onplay|hls_stuck_time|result|BufferStop|sub_weight|contentWindow|RenewPoints|floatheight|event_x|onmouseout|SubtitleSettingsMenu|timeFormat|HistoryPlaylist|_prevIcon|headfontsize|created|event_y|letter|5px|ScrollOverOut|f2bg|nbsp|Ready|onmousemove|Played|onmouseover|SubtitleLoad|sub_settings_on|ipad|thumb_width|left0|handlehide|float|sxs|paddingtop|prm|memory|base64|HandleWidth|stretchonfullscreen|l3v_show|subload|FltrVal|downin|nativefull|parentcontainer|ShowTip|Cut|sizing|||||1em||MainResize|custom_aspect|unshift|mpi||pljsmute|pljssglobalid|href2|_wait||playersize|findTop|pageX|999|scrollleft|tipbgcolor||shr|srt|compilations|tippadding|TimeSub|xtitle|domain|playerid|_activeIcon|tipbga|removed|dclckto|scrollarrows|3000|limitmaxwidth|_play_i|8px|StyleArrow|family|cC9zQZP|now|Mouse|audiosrc|resizeonplay|isvg|NativeExitFs|ToolbarHidden|VastVisible|linkurl2|gifed|container_h_procent|isTypeSupported|showinterval|iconscolorover|poster_aover|playbgcolor|click0timeout|icon2|acted|BeforeVast|showtitleplaylist|pauserollonplay|openplaylistbefore|ssa|Password|unmuteplease|hideuntilto|playroll|datetime|autonextopenfolder|HidePoster2|marginprocleft|playlistloop|worked||bgcontainer|sub_size_fullscreen|_lastactbut|SubtitleError|UpdateVars0|randomstr|pljs|playlistrewind|postroll|nops|sub_size|poster_a|UpdateVars|100000|adsfirst|playlist_title|Show|vastonmobile|iniframe|HlsUpdateAudio|exception|frames|getHLS|ShowLayer|done|getDASH|num|loadLevel|Touch|vars|tagName|toLowerCase|embed|pageY|errorMessage|StageLeave|thumbnails|mouseMove|covervideo|find|openById|found|current_file|mouseHere2|PlaylistRewind|PlaylistHere|Player|PlaylistExist|PlaylistShow|desktop|changeheight|fit|scrollarrowsize|audioTrack|SettingChanged|scrollarrowcolor|container_id|_hlssubtracks|MenuProc|UpdateTime|_readyonplay|videoWidth|shareme|quality_received|while|close|screencolor|14px|title_template|dvrtime|seeked|CreateDASH|isPlaying|subsor|autoprevopenfolder|bigint|mutestore|StringVar|PipSize|playVideo|YouTubeIframeAPIReady|KeyPlusUp|skip|KeyPlusDown|serif|postMessage|VastAndLimit|sans|VastBgLoad|VastLoader|picture|youtube_id|ima|vast_type|wait_to|brd|Load|vol|moz|SubtitleLoad2|imgldd|polyline|colorbg|edge|script|1080p|720p|thumbs_on||marginbg|full||handleiconspress||sleeptimer|333333|dashquality|observer|VolumeWheelX|resizeonwidth|mouseUp|ssflyp|customdesignsvg|svg3|||hls_subs|RenewSubtitle|hideAllIcons|TitleTemplate|fspr|restart_audio|iconsreplay|SwitchText|mouseout|lang|rldplay|mediaSource|HideTip|IconsColor|sub_reset|onDown|documentElement|mouseover|navigationUI|YoutubeReady|160p|and|join|floatlimitwidth|998|_stopped|Recover|_ended|handlescale|YoutubeID|sepia|Download|||||_steps|onStep|bgh|lastTouch|Update|RemoveMedia|bgo||files_channel||FileType|ff0000|fileTimeout|handleaover|https|opera|prefile|timeline_h|rightout|urls_and|mtp|match|||playsinline|fcdef|angle|ResizePlaylist|sub_upload|youtu|rotate|limitwidth|normalscale|_fullscreen_end|subdrag|stretch_width_last|scrollwidth|sub_all|seeksides|quartile|CustomToogle|iclr|clr_options|actplay|current_plurl|doubleclick|omt|tippaddingtop|rightclick|MidrollOverlay|nativecontrolsmobile|newfile|timeshort|video|noclick|rc_label|code|button|filter|rld|CreateTip|timeld|wheelinterval|leftandrightpadding|but_h|pjs_|vastfrombg|plurls|played|wait|lngth|_t|mini|DoubleClick|FrameResizer||eventstracker|gaTrackPlay|fid|HlsLevel|MainUpdateSize||Ended|copyObject|rmbgcolor|click_t|suboptns|stuck|PlaylistError|scripts|response|started|ClearClick|yaCounter|hex2rgb|fatal|onClickSubtitle|_rights|JsEvent|but_w|Action2|volumewheelfull|TitlePl|dont|overlays|resizetext|autonext|ioscss|fullblack|effect|scrollarrowbgcolor|vastcontainer|_move_rights|historybga|CreateShare|iOSTrackLoaded|contentDocument|write|pljstrack|normalscreen|pljsuserid|VastCheckNext|StorageSupport|onTagError|removeItem|pljsquality|back|userid|toggleControl|qualitystore|playiconbut|floatmarginright|VastGo|StopMedia||rmcolor|paddingright|VastVideo|vastgo||sleep2|historybgcolor||appearance|advertising|exitfullscreen||historytitlea|onPipLeave|wheel|_recover|VolumeWheel|fixed|bg_hide|paddingleft|onPipEnter|order0|AudioContext|screenmarginbottom|_tags|ErrorReload|ErrorMsg|reloadtimeout|m3ui|hlserror|change2playlist|lock|checknative|maxMaxBufferLength|contain|ControlOut|downi|maintitle|Seeked|Metadata|seekiconbut|PlaylistLoad|pjslng|HlsSleep0|livewakeup|vts|bgl|fjs|Heartbeat|clck|is_hls2|fts|sleep_timeout|HlsSleep|Captions|onerror|mdswp|network|Pos0|onYoutubeReady|arrinterval|timerTime|PluginMovable|sub_upload0|RadioTags|tagsurl|poster_float|||timerInterval|landscape||Preload|||CreatePoster|Destroy|toolbarhidden|MediaYoutube||ll11|isFullscreen|l1ll|landfullmobile|Playing|playsinlineonmobile|onDash|checkBase64|1440p|CheckDash|currentposter|dontload|540p|marginbgcolor|2160p|playerjscom|getAudioTrack|iosfull|posterhidepause|getQuality|FullscreenUI|marginbgpadding|NormalscreenUI|pipto|WaitSize|vast_starts|isAuto|pljsvolume|volumestore|||hdbrdclr|noprevicon|Controls|tagSrc|PlayerSize|ChangePip|playbgcolored|vastclick|audioctx|NewAspect|plopenid|nativeControls|gained|audioTracks|CheckPip|Review|geo|vast_preload|moveOr2end|ie9|adsinchain|splice|removeTracks|nextLevel|mousemove|setQuality||VastPreloaded|borderbottom|RemoveForNextAd|FSL|input|VastPreloadLoad|sub_designstore|UpdateStart|span05|pjs_parent_i|_i|ActionOptions|StyleSubtitle|moving|HlsAudioTracks|IndexPlaylist|ScreenClick2|IndexPlaylistProcessor|LoadedData|heightInterval|End2|MseIsSupported|onClick2|prototype|StageMove2|HlsAudioTrack|str2obj|Alert|120|pp2|valuefromlang|outro|substore|||sub_bottommob|autoplaymute|midrollo|hls_started|isNaN|posteronpause|pstr_to|ws_created|vast_midroll_limit|CreateWS|scrollarrowbg||deltaX|drawImage|viewBox|destroyed|6px|sstext|TipHide||tipletterspacing|tipbgrounding|ass|_currentIcon|addtitleplaylist|openplaylistroot|fontnames||addtitleplaylistbr|onMobMove|||TipVol|onMobOver|logout|ssfontcolor|tipfontsize|Pnt0|tippaddingbottom|tipcolor|doctype|ahd|show_settings|show_playlist|btm|ClickArea|imageLoaded|linkurl0|hideonplay|control_start|bgcolorlink2|piped|marquee|tipfont|3600|toFixed|chr|postmessages|startwait_t|encoded|||||SetCurrentQuality|hidecontrols|pauseVideo|VisibleCheck|pjsframed|stringify|resizeme|resizeonmouse|referrer|150|hostname|updown|leftright||last|_set_quality|pepper|ontouchmove|_css|SubtitleParse||tmp2|vtt||cnt|stopkeys||insertBefore||removebykey|lineHeight|fromCharCode|smbls|ytautoquality|fonts|255|urlcnfg|png|tippaddingleft|sub_store|valuepadding|together|handleiconpress|valuemargin|onup_to|mutedautoplay|onUp|TheEnd|second|minute|Style|Places|sub_bgpadding|sub_font|DVR|thumbs|hour|Text||||||LineScale|handlea|timeline_w|Alpha|_timeout||ceil|clickscaley|bgbordercolor|bgborder|borderRadius||coloroverplay|_stop|path|tem|firefox|querySelectorAll|||handlecolor|handleiconover|deg||decoration||over_final|Rotate|thumb_border|SubtitleLoadAll|zoomed|other|postsmbl|presmbl|SubUpload|resizetxt|lastIndexOf|iconopacity|cpm|hidetime|0px|pljssubtitle|SettingsParser|remember_sub|settingsNumberVisible|thumb_height|restart|ShowHandle|rename|dash_subs|handlehideinit|ReplayIcon|lang_|SetSubtitle2|EndMove|handlemove||playerjs_||||||||||last_text_w|_time_load|Marquee|SubtitleOff||animate|UpdateVolume||resizeFromText|spn|minw|user|mozRequestFullScreen|killMotion||butByS|subpausehide|setaction|removedNodes|fontFamily|clientWidth|requestFullScreen|activeicon|reRightMenu|RightMenu|xvalue|play25|_blank|requestFullscreen|updatePlaylist|static|HidePositionControl|quick|tmpr|Menuproc|toolbarisdown|msRequestFullscreen|playlistovertimer|content|ToolbarHide|pushCSS|NativeEnterFs|settimer|Shuffle|start2|StartTimeout|notofh|webkitRequestFullScreen|active|re_y|Loaded|firstly|ControlCoordinate||hideuntilstarted|Loading|gaurl|AudioTrackChangedNoHand|CustomTextButs|SubtitleTimerMenu|SpeedChanged|cntrls|VisibleItems|play75|Script|ShowShare|SubOpt|brand|introstart||reloadlog|div2|onYtPlayerReady|play50|QualityChanged|resizeSettings|scrpt|youtubeposter|Prefile|innerText|alert404v|alert404video|PluginErrorVideo|sub_lineheight||1200|intros|Quartile|sub_big_fullscreen|900|copied|1800|360|640|220|yamtr_event|_subfile|alert404text|SubtitleBottom|timebreak|ct2|finishrewind|valuealign|sub_bgo|TheEnd2|High|file2|openpl|recovery|ads|Yandex|gtag|sub_bg|onPlayTag|DownIn|||posterhidestart|PluginPip|cstm|playedquartile|tagsinterval|timelimit|Wheel|ga_event|playId|ControlOver|adsinvitation|timelimited|playByYoutubeId|ReloadTimeout|playedstore|Stopped|YouTube|cancelFullScreen|029|095|997||848|006||I1lI|lI1l|072||maxresdefault|width100|height_div|width_div|003|ffdd1f|007|arial|helvetica|exitFullscreen|700|noindex|cancelFullscreen|analytics|playerjs|msExitFullscreen|PlayerjsAsync|Ease|webkitCancelFullScreen|elastic|frmvst|PjsFramed|pjsframe|unset|hyifsGnb|nkZrftdE|CreateMedia|callback|imageExists||||||Timer|nohead|1val|NativeSubtitle|nativeSubtitle|passontime|removeNativeSubtitle|0val|Playback|device|dashaudio|Number||smallfontsize|fs_error|PostFullscreen|floatheightsmall|contrast|RenameTracks|floatwidthsmall|rename_audio|brightness|str|casterror|alertspaddingv|alertspaddingh||||MSIE|alertscolor|maxTouchPoints|666666|msie|alertsbgcolor|crt|ParseUrl|castdevice|rand|alertsfontsize|hexToRGBA|SubtitleSettings|notv|alertsbga|iosExitFullscreen|upload|offsetwrite|PluginThumbs|XMLHttpRequest|GET|styleSheet|Exit|_html|ArrowsInterval|subshift|parentElement|show1value||||||iframe_api|scrollarrowbgovercolor|101|ytcl|sub_off_title|headbordercolor|HideLayer|default_subtitle|keyframes|Scripted|Width|scrollHeight|ScrollLeft||PlaylistBack|limit|pjslog|18px|rel|andlimit|Hide|toLocaleTimeString|ScrollUp|ScrollDown|ScrollRight|full_minutes|onClickTimer2|full_hours|onClickSubtitle2||preloaded|102|40px|globalfontname|getBoundingClientRect|scrollX|scrollarrowgradient|onQualityChanged|yterrors|adscounter|_nextIcon|Youtube|onYtPlayerStateChange|PLAYING|ENDED|PlayingChecker|url3|customyterror|offset|url2|scrollarrowbgover|playedstored|getDuration|InvertPlaylist|Za|224|brda|||_ue|_ud|reverse|seekTo|vpaid_starts|last_ors|sugar|Qualities|shwvstfnsh|getPlayerState|nameofyoutubequality|youtubecontrols|heartbeatinterval|adblock|current_vast_url|_xIcon|endfull|yamtr|incorrect|swiping|SetChannel|pressed|VastBreak|cuid|ovr|butseekto|finish|livets|redirectonclick||setupx|seeked_time|setVolume||Swiping|ShowTimeout|FileReader|reloadlive|reachGoal|sub_off0|nomidroll|PluginIntro|alerts|yaHit|rest|PlayerjsEvents|midrollimprsd|skipads|Papi41|pjsfrm|hidecontrol|minduration|denied|access|isyoutube|youtubeready|dasherror|showById|ffeeab|bordercolored|StopOtherPlayer|stopotherplayers|playlist_id|ffect|HidePoster3|FindIdPl|vast_adid|posterhidetime|Playerjs|historycolor|resume|VastInfo|wrapper||mozCancelFullScreen|VastLongTimeout|fullonplay|onMouseDown|scroll_down|geobj|plcontinue|scroll_left|isVpaid|ShuffleEnd|playlistfolder|vast_longtimemsg|FindFileInPlaylist|vast_prestarttimeout|fullonplaymobile|_reset|redirectonplay|comment|historytitlestrike|getContext|alert404|unpause|4px|RightCSS|right_y|ShowAnimate|rmsize|ShowControl|HideAnimate|right_x|RightClick|playonhover|rc_version|leavetimeout|RightMove|hideonvolume|setting|RightOver|RightOut|Actions|playerheight|hideonfullscreen|sesstime|trackstore|hidevar2|vast_nofirst|mobiletv|hideuntilmeta|unfixing|System|hidestartbutios|nativenotios|nativenotipad|nativenotiphone|rc_anyway|rc_labelurl|ltr|direction|nums|tap|highlight|pljs_yt_|UpdateSettings|bordersize|15px|plusminus|which|eventAction|eventLabel|PluginOldGA|ga4|MutationObserver|PlaylistMove|Volumescrolled|pjsfrrs|allowfullscreen|allowtransparency|allow|HideElement|scrolling|UpdateTimer|PlaylistPlayId|PlaylistOpenId|prenewpl|PreNewPl|Exist|obsrvr|pljsfirst|hidevar|ControlsBgClick|NewPl|PluginShare|click_t2|nativefulldroid|changedTouches|sort|marginprocbottom|marginproctop|sub_sizemobfull|sub_sizemob|seekwindow|sttr|ControlX|XY|leavepictureinpicture|enterpictureinpicture|margin_bottom|addTrack|subtitles|updateTitle|read|preposter|setHlsAudioTrack|showing|scroll_height|volumechange|durationchange|seeksidesec|loadedmetadata|screen_lw|timeupdate|SettingsSpeed|SettingsExist|alwaysnotfullscreen|leavetimeout2|alwaysjustpause|mousedown|PluginGeo|KeyUp|hidewithoutplaylist|StageOver|hideoverwidth|hideaftersec|hidebeforesec|Media|hideonwidthlimit|hideoverwidthlimit|hideonwidth|textarea|customText|screenshot|template|linkpause|speedstore|muteiconbut|pljsspeed|templated|1001|showShare|KeyDown|titlepl|dblclick|ssflyw|linktarget|keyCode|eventCategory|zoom|tipmargin|tipvar|bgcolorlink0|Click|bgw|hideafterclick|_a|action_settings|noClickTimeout|roundout|control_duration|DisplayControl|unhidden|hidesec|selectOpen|iconmarginright|270|xOffset|yOffset|PlacePoints|place|5000|Bglines|CancelBubble|current_thumb|iconmarginbottom|iconmarginleft|iconmargintop|clickmargintop|handleiconsover|clickmarginbottom|_w|315|gradientcolorload|colorload|valuebgcolor|linespeed1|gradientcolorbg|ControlLine||ontop|valuebg|valuerounding|FFFFFF|valuesize|customdesign|gradientcolor|linespeed2|linespeed3|Color|SvgColor|prevorius_default_w|prevorius_default_h|minus4back|with_min|RenewFromTitle|with_hours|displayvolume|translate|HdIcon|PluginPoints|hidewithposter|handlemargin|7px|Buffer|bgstretch|iconmargin|liketext|icon3|rotateplaying|optStr|PluginReplace|rc_|inversetime|picheight|fontsizesmall|Continue|ontouchstart|_icon|ControlsBg|bold|controlCSS|postmessage|method|scalesmall|hlscaptions|today|opposite|action2|linker|Control|CustomFonts|PjsFr|IFRAME|PjsFrMsg|notframe|parentIframe_style|prtObj|prted|evenodd|unblock|openplaylistafter|handleinit|openplaylistpause|_duration_play|_time_play|topside|UpdatePlaySeek|Hideuntilto|clickscalex|linetipmarginbottom|thumb_bottom|toptip|mobileover|cul|onMobOut|UpdateLoad|often|thumb_shadow|thumb_bordercolor|tippaddingright|linetippointer|rule|Rectangle|thumb_borderwidth|thumb_radius|hideafter|hidebefore|_duration_load|PluginCut|2001|CreateThumb|cover|createTextNode|isSupported|isHidden|Visibility|preloadhls|abs|OrientationChange|mediadrag|MediaVideo|audio|hlslowquality|renameTracks|ErrorTypes|startLoad|frag|nextAutoLevel|menufltr|hlsquality_off|autoLevelEnabled|hlsaudio_off|hls_stuck_duration|hlsvastwait|gainedsource|dashjs|Gain|um1|volumegain|connect|preloaddash|audioGroupIds|nameofhlsquality|HlsLiveWaiting|changeAspect|onLoadedData|livewakeuptime|SourceBuffer|MediaSource|Interval|nopause|anonymous|onLoadStart|disableRemotePlayback|wrong|loadSource|hlsTextTracks|supported|framei|renameQualities|mpd|PluginDash|m3u8|HlsQualityLevels|timeout|mimeCodec|debug|ParentFS|FlussonicMsePlayer|sourceBufferValidAPI|hlsdebug|lsfullstart|PipToggle|Timeout|setDashAudioTrack|customBuffer|webkitSetPresentationMode|PipSwitch|40000|current_time|stretch|hlsfto|vast_posterurl|10000|fileto|landscapefull|FileTimeout|setDashQuality|hlscookies|FullscreenChange|dvr|hlsmto|portrait|logo|movable|setTracks|setHlsQuality|reYT|lsfullplay|_timer|black|Verdana|tippmargin|sub_drag||lang_ru|kbq|unmute_video|235|134|skip_after_|normalonclick|hlsdvrtime|sub_all_title|loadVideoById|DOMContentLoaded|clr_brightness|clr_saturate|handlemarginleft|setPlaybackRate|onmousedown|files_sleep|current_sleep|getCurrentTime|clr_contrast|handlemarginright|unMute|2px|bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg|222222|line_play|getVideoLoadedFraction|action_back|setPlaybackQuality|clr_sepia|vast_impressions_all|vast_remove|RWAlnQyyazA4aoAB4FsBSA|stripsspace|77c18m3o1t3s221a271s3b3v2z1b3o01101m252z2q193v3c1i1b3v1z1i1a21173s3w1z21141z133v3b2o1730241u3s2t302n113u243c133x392o1720261z2z1m232e1g2c29361y2v3s1z101o260w1z102b213v3z29381w2v3s1z121m2c162t212n1z3038251q25332c162z2v232c182s271z1z3a231q25332e142z361w1c2s271w2s29162s271s2u271o3c1z3w261z1z3u281z3u243s2o3o0z1z2z2b3w121m252e2o1z1x21141z101m252e2o2m35202q1z2z3z29233v2036143q0z1c1c2t2e292o122s11101d3z1o112z3823353w253u253r1536211z1z3a371z3z141j1z1c1m2c182t2z2p2c2b213v3z2o1i27313c293y121m121s2e1d1d1c1c1h1c102e1i1e1a2e1k1c1a3e161e131g1i1c1i1d1f2c1q1d1p2e1r2e1r2c1s2c1u2c1q2g1c2c1s1c1z2c1q3c1p2e1s2c122c1s2e1k2c1s1e1i2c1s3c1h2c1s2d1x2e1q3c1x2c1t1d1s2c1q1f1s2c1q2c1u2c1r3e1t2e1s2c1t2c1u2e172c1s1f1w2c1r2e1q2c1q2d1w2e1r2e1j2c1t1c1s2c1r2e1q2c1q2c1y2c1q3c172e1s2e1y2c1s3c152c1r3g1r2c1q2d172c1q3d1v2e1q3d152c1s3d1c2c1q2f172c1q3d1a2c1q1d172e1r3e142c1s3d162c1q3f1t2c1q1d172c1r3e1a2e1q3d162c1s3d122c1q3f172c1s3d1a2c1q3d162e1q3d1f2c1s3d172c1q3f1b2c1q3d172c1q3d1r2e1q2d172c1s3d142c1q3f152c1r3c1i2c1q2d152e1q3e172c1s3d152c1s2e1s2c1q2c1e1c1d1c1k1g1a1c1i2d1d3c192c121e101e123d1s3d1a1e1s1f1u2d1h2d183e101b1d3g1c3e1k1c1b3c1d3d1h3g113e1j1c1i1e1f3d1e2e161c1d1d161e1q1e1h3e1d1c1e3e141d1f3e173g1d3d1q1e1m3c1d1c1d3f1d3d1d3d1f3d1d3d1d1f192d1c3d1e3d1c1e1q3e1d1c121d1s1e1d3e1p3d1d2d1d3c1f3c161c1d2g192c1a1d1b3d1e2c1d2e1d1e1i1c1d3c1e1d1e2e1h1d1r2c1s1e1h3c1b3g161c1b3e1i3e1d1c1e2f1r2e1j2c1u2c1g2c1q1g132c1r2e1k2c1s1e1d3e1s2e1p2c1u2c1s2c1r2g1y2c1r2e1l2c1q2e1b1f1s2e1o2c1t1e1j2c1s2f1y2c1r1c1k2c1q2e181e133d1v3c1t2c1d321t1d3e193d1q1e191c111e143c141e1i3f171e1c2e1m1c1x3e1i3g152c1r3e1x2c1u2c1v2e1u2e172c1w1d1y2c1t2g1q2c1q2d102c1t2e1o2e1t1c1s2c1v2c1s2c1s2e1y2c1q3c1b2c1u2e102e1s3c152c1v3e1z2c1s2e1w2c1s1c1q2c1t2c152e1s1c1j2c1u3e1f2c1u1e1e2c1q3e1i2c1u2d1x2e1t2e1h2c1w2e1t2c1u2g1z2c1q2c1e2c1u1c1x2e1u2c1f2c1u1d182c1u3f1a2c1q3d1b2c1s3d1a2e1s3d172c1w3d1o2c1s3f192c1r3c1f2c1s1d182e1u3e132c1u3d172c1t3f1d2c1q1d1a2c1u3e102e1s3d162c1u3d192c1s3f182c1q3c192c1s3d172e1s3c1b2c1u3d172c1s3f1o2c1q3d1b2c1u3e1c2e1s3d152c1u3d1j2c1s2f182c1s3d1d2c1s1d172e1s3d192c1u2c1z2c1s2e1k1c1f3c1e2d1e1c1h3d1c3d1d3c1d2c141c103d1d3e161d1b1d1c1e1g3f1g1c1d3d1e2d1k1c1o1e1i1d1f1e1e1c1h1c1b1f1k1d163d1e3c1a1e1g3f141e1f1c141d1w2d1j1f181c101b1f1e1e3e1p1e1b3c1d3e1l3e1e3d1e3g1e3d1c3c1e3d1c1e1k3f1k3d1u1e162c1e1c1b3e1d1e1f1d1r3c1y3e1c2f132c183d162d1c3c1g3e1i3c1d1c1u2d1p1c1c1g1b3d123e1f2e1i1e1k1f1h1c101e161c1a1e1r1g1b1c1c1c1v3c1u1c1x2e1t3c1q2c1u1c1y2c1u1f1o2c1s2e1h2c1t1e152e1t2c1k2c1u1c1z2c1s1g1w2c1s1e1m3c1u2c1u2e1u1e1j2c1u3d1h2c1t2g1t2c1q2c1m2c183d192e1u2c1f122k2d1e1e1g3g1u1e1h1d1d1c1h1d191f1f1d1b1c1l1c1s1e1o3e1s3d1c2c1u2c1g2c1s3e1z2c1s1c1x2c1s1d1r2e1t1c1e2c1u1d1v2c1t2e1p2c1s1e1x2c1r2c152e1u2c1w2c1u3c1c2c1u2e1r2c1q1d182c1q2c1u2e1s2e1i2c1v3c1x2c1u2g1y2c1r2c102c1q3d1k2e1s2c162c1u3c1p2c1u2e1q2c1r1c1i2c1s3c142e1u2c1x2c1u2c192c1u2g1e2c1r3e1l2c1q3d182e1s3c1d2c1u1d172c1s3g1b2c1q3d1a2c1r3c192e1s3d152c1u3c1f2c1s2f182c1s3c1f2c1q1d192e1s3c1f2c1u3d162c1u3f192c1q3d1b2c1q3c1z2e1s2d172c1u3d1c2c1s1f192c1q3d1e2c1q1d172e1t3e192c1u2d162c1s3f182c1q2d192c1r3c1j2e1s2d162c1u3d172c1s3f172c1q3d1v2c1q2c1u2e1f1c1d3b163e1d2d181g1c2e1d1c1k1d1k3d1y1g1c2c1d1e1e1d1f1c1b1f1k1d163d1f3c181d1g3g141d1f3d141d1u2d1j3f181c101b1e1d1c3d1p1e1b3c1b3d1l3d111d1o1e1i1d1f3d1i2c161c1c1f161e1q1d1l3c161c181e181c161c1u1e1h1c1a1e1a1e103b1e1d1a1c1i2f1c3d1d3c141d123e1d3e1c1d1c3d1l1e1d2c192f141d1d1c1e3c1d2d1i3f1a1e1e1d1e1e1i1d1h2e1s3d1h3d172d1c3d142f1e2d1a1c1h2d1y2c1u1g102c1r2e1e2c1s3c1h2e1u2c1y2c1m3c1f2c1s3f1s2c1q1d1z2c1r1c1q2e1u1c1t2c1h2c1q2c1t3g1t2c1r2c1q2c1s1c1i2e1t3c1b2c1h3d1x2d163e162c1f172f1k1s1r2t2v2h1e2e1g1j14|readAsText|542bf2b33313w331y371e25203q193v3c1b3q001z1m25313o2m252c2q2m2w23381g232z1g2c2b361a2v3s113z1m360w113z39213v3139361a2v3u1z3z1m2z182t3z2n1z3238231q25353c142z2v253c1w3s27111z38231q27333c142z281w101z1411133v392o192z341s3s2v2z3n1z3u263c133v392q172z3410111m231z3u281z3u261z3w261z3u2o3139213v2c2b213v29213x252y393v2e1z1z2233163o00302c2b3w121m2c1d3o0z3z2k241z3z1m2z111z3s271z311d393v2c1a1w10302v3w2s333c10111c1m1z133x27211t302q12232520352c162633211d1e182c163z261w1z121z303s2711101m3s35013z223314352f1q3d1j1g1i1d1d1c1q3d1h2e1o3f1d3e163e1k1e1g1c1f2f1c3c1q3d1k2c1r3c1x2e1s2e1w2c1t2c1w2c1q3f1i2c1q2c182c1q3c1p2e1s2c1o2c1t1c1e2c1s2e122c1s2c1z2c1q2c192e1s2e1c2c1t3e1h2c1q2e1s2c1q1e142c1s2e1p2e1q2c1x2c1u2c1e2c1s3e1r2c1s2e1w2c1r2c1r2e1s2e1e2c1t2c1v2c1s2f1w2c1s2c182c1q2e1v2e1s2e192c1s1d142c1s3g1t2c1q2d192c1q3d172e1q1d162c1s3e1x2c1q3f172c1q3c1i2c1q2d152e1s3d122c1s2d152c1r3f1j2c1q2d192c1s3d122e1q3d172c1u3c1a2c1q2f152c1s3d1d2c1q3d152e1r3d1d2c1s3d152c1q3g192c1q2d172c1r3d1x2e1q3d142c1u3e182c1q2f162c1s3e1v2c1q3d152e1q3e172c1s3d1s2c1q2e1s2c1d1c1h3d1e1e1e3g1s1e121e1s2e1b3c1g3g101e123d1g1c1e3c1q1g1o3e1d3c1j3c1d1d193g1h2d163e123c173d1d1g1e3d1e2c1f3d1q3d1i3e1j1c1g1e1h3d1a1c1f3e191d1i3e183d1d3c181g1e3e121d1h1c101c181e181c181c1a3e1k1e1q1f191d191d1m3d1d3d1e1g1b1e1k3c122c123d1y1e1d3d1d3e1k3e1r1e1q1e1b1d183e1s1c1q3c1e3f1c3e121d1i1e1q1d1e3e1s1e1f3d1c3c1d1d1i3e103e1d3d1g1e1p3d1q2e1s1e1s2c1t1c1d2c1q2g1y2c1r2c1h2c122e1t2e1s3d1o2c1t3e1r2c1q2e1t2c1r2c1w2c1d2c1o2e1q1c1d2c1t2c1r2c1s2e1h2c1r2e1u2c1d3c153f172c1v2c12121j123c181c1i3e1g2g1c3d142c1k3d181e1g1f1q2e1j1c143e1a1c1r3g142c1u2e1t2c1q2c1z2e1u2c1g2c1w3c1r2c1u3g1w2c1t2c1v2c1s2e1g2e1t2c1x2c1w2d1w2c1u2e182c1s2e1z2c1s2e1b2e1s1d162c1u3c1x2c1s1g1g2c1u1c1w2c1r3c1k2e1u2c162c1u2e1k2c1s1f192c1u2e1r2c1s2e1x2e1s2e1y2c1u3d1y2c1s3e1w2c1s1d1m2c1p2e1v2e1t3e1g2c1u1d172c1u3f182c1s3d1b2c1r3e162e1s1d172c1w3d1a2c1s2f172c1u3e1i2c1q3d192e1u3d1d2c1u3d162c1u3g1b2c1s3d192c1q3d172e1s2d172c1w3c182c1s3f182c1s3d1c2c1q3d182e1s3d1a2c1u1d152c1t3f1b2c1s3d1b2c1q3d152e1s2d172c1w3e1u2c1s1f172c1s3d1d2c1q1d172e1s3c1z2c1u3c1u2c1k1e123d1o1e1m1d121e121f142e1s2e1e1d121e103f1i1d1d3c1f2d141e1c1f1b1d1q3d1e1e1e3d1g1e1d1c1c1c1e1e1k3c1c1e183e133e1j2c192d1k1f1c1c1g2c1u2e1h3e1d1e1j3c1c1d1d1e1h1d181e122c191d1d2d192d1b2f1b1c181c1f3d163d153e1i1e1s3d1h2e1d1e1f1e1c3c1b3c1b1d1p1e1s1g121c1u1d163d1d3d171f1h1e1s2d1l2e1k1c1a3g181e1p3e1f1c1f1c1c1e1g2c1c3e1j2c1g2e1c3f1f2c173c1j2c1q1c102e1s2e1h2c1u1e1i2c1s2e1t2c1x1e1k2c1q3c1y2e1u1c1f2c1u2e1h2c1u2e1h2c172c1r2c1q2c1j2e1s2e152c1u3e1p2c1u1g1p2c1t2c193d1v2d1w2e171r1q1d1g3e1a1c1i3e1k1e1j1d1m1c1b3c1g1f1e1d1g2c1j1e192c152e1s1c1o2c1v2c132c1s1e1j2c1s3e1h2c1s1c1e2e1q3e1g2c1w2d1v2c1t2g1h2c1u2e1v2c1s3e1z2e1q2c1c2c1w1c1v2c1u2e1f2c1s1c1w2c1q2c1w2e1r2c102c1w2c1x2c1t2f1s2c1s1c172c1r2e1y2e1s2c152c1v3e1s2c1u2e1i2c1u1c112c1s1c1x2e1q3d1w2c1v3c1r2c1s2f152c1t3c112c1q3d182e1q3c1b2c1u3d172c1u3f1b2c1s3d1a2c1q3d1d2e1q2d172c1v3d1x2c1s1f152c1s3c1m2c1q3d172e1q3d162c1u1d172c1s3f132c1s3d1a2c1q3d1v2e1q3d192c1u3e1e2c1s2f172c1s3d1d2c1q3d172e1q3c1q2c1u1d172c1u3f1r2c1s3d1a2c1s3e1y2e1q3d172c1u3d172c1s3f152c1s2c1w2c1q2e1f1e103e193d1s1c1k3d1r3d1b3d1c3c1d2c1k3c1y2f1i3e1c3c1e1e1k3c1d1e163d133e1j2c191d1k1f1d1c1g2c1u2e1a3e1c1e1h3c1d1d1d1d1h3d181e102c193d1e1e1e3d1g2e1d3d1s1d1m1c1j1c1i1f1f1d1c2d1m3d1i1d1k3f1i3d1c3d1e1e1h3e1h3f121c1c1e1h3d1q3c1d1e1d1c1i2d141d123d1c2f191d1h3b1u2d1q1d1f3e1b2d143d1q1e181e1i3e1h1c1c1e1e1c1v3c122e171d1s1d1d1d1u1e1s2g1d3c1u2c1v3e1d2c1u2g1u2c1s2d1a2c1r3e1x2e1r1c182c1t2c152c1t2e1g2c1u2c1h2c1s1e1h2e1r1e1v2c1w3e162c1u1g1r2c1s3c1h2c1q2e192e1q2d162d1y3c142c1u2e121q2j2j2i2s1q2q1f1s1e1b141|c2b89b8ed5dfef6cffc65432c3635006|shape|constrols|subtitle_errdel|webkitFullscreenElement|webkitIsFullScreen|0bd381u212a29313918263q0z211o27312o1b3x2e1d3o01112m3q0z222m3x3u35262v223p1z223a251s25352116212v25211c3u2711113a251q2735211620281y11121411153x2b2o1921261u3s2v212p113u262e153x292q1921261z121o253e1g2e2b38182v3u12111o260y12113b213x212b38162x3u12111m2e182v3b213x2b233x39233x2b233v11112u291z222u291u2s291r2q1i25222q2e1z21141b3x111z222435162z2q1b3x111i1v35211d202p2e113w2m211q1g272z1q1o25111q273t193124162e1e3e29381c3y2b321x3w2u3q3s39222b3r35222919162z1611121o232e1q11113u262e1d37383x111z23121i1s2i183d1k1g1j1f1h3e181e1t3c1c1g1b3f123g1m3g1k1c1w1g121f152e1t2e102c1u2e1z2e1r2f1u2e1s1c152e1t2g1w2e1u2e152c1t3g1u2e1s1e1k2e1u1c1z2e1u1e1v2e1s2f1w2c1t2e1t2e1q2f172e1t2c1u2e1s2e1c2e1u2g1t2c1u2f1r2e1q3g1x2e1s2e142e1u2g1w2e1t2g1z2c1s1e1s2e1q2g1v2e1t2c1v2e1t2e1t2e1s3f1w2c1u2e1q2e1q3g1h2e1s2d192e1s3f1y2e1s2f182c1s3f1h2e1q3f172e1s3e102e1s3f152e1u3f1u2c1s3f192e1q3f1t2e1s2d172e1u3f1t2e1s3f192c1t3e1c2e1q3f182e1u3d1y2e1s3f172e1u3f182c1s1f192e1s3f1e2e1s3d172e1s3g1p2e1s2f192c1s3g1c2e1q3f192e1s3e1w2e1s1f152e1s3g192c1s3f172e1q3f1b2e1s2c1u2e1s1e1d1e1b1g1e3e1c1e1i1g1k3f1r3d1f3d1f3f1i2f103f1l2f1f2e1m1e1b3e1d3f1c3g1m1e1f1g1q3g1d3e1f1f1f3c1d1f161g1q1f1b1g1c3d1f3g1g3f1e2e1f1e1d3c1f1g1m3e1d1e183f133e1h2e1b1f1i3f1d3e1g3e1j3g1j3g1h3g143g1e3e1m1g1m1g1g3g1b2e1f1e1h3d1d2f1a1e1s2g1f3d1f3g123e1d3f1f3e1m3e1l3e1d3g161f1d3e123c1b1f191f1d1f1d1f1j1e1f2e1l2e1d1e1f1e1d3d1f1e181d1d1g1h1e162c1t1e1j2e1s1g1k2e1s3c1v2e1t1g1v2e1t1e1s2c1u2f162e1r2g152e1s2c1s2e1t1e1s2e1u1e1x2c1t2e1f2e1q1g1t2e1s2e1s2e1t1e1w2e1t3e153d192f1w2e1p1e192j1l123g1h2f1a3e1t3e1c3e1s3g1c1g1k3c1l1e1q1e1f2e1a1d1i3d162e1w2g1r2e1w2f1t2c1u3g1z2e1q2g162e1w2e102e1v3g1x2e1u2e1u2c1u2g1x2e1r2e1x2e1v2c1x2e1u3f1u2e1w3e1s2c1u3g1j2e1q2e112e1u2c1g2e1u2e1g2e1u3e112c1w1e1x2e1s1f1t2e1v1c1i2e1u1f1v2e1v2e1r2c1w1g1x2e1r2e172e1w2c102e1u3e1c2e1w2e1t2c1u1f182e1s3e1i2e1u3d1b2e1w3g142e1u3f192c1u3f1d2e1q2f1b2e1u3d1x2e1u3f172e1u3e1a2c1u3f1b2e1s3g1d2e1u3d1a2e1u3f162e1u3f1b2c1w3f1x2e1q3f1a2e1u3c1e2e1u3f172e1v3g1f2c1u3f1b2e1q3g1m2e1u2d192e1w3g1a2e1u1f1b2c1w3e1s2e1q1f192e1v3c1k2e1u1f152e1u3f1d2c1u3f192e1q2e112e1u1c1m1e1a1f1i1g1l1g1e1c1k3f1r3g1p3d1e3g1e1d1d3g1j3g111g1q1e1k1d1j3f1i1e161e1e2f181e1e1f1l3e1b1e1i3f161e1j3g1b1f1d3f1u1g1r3c1e1e1f3f1q2g1r1e1d3c1e3f1e1e1k1g1e2g1l3e1f3e1u1f1k1g1r1g1r1e1r1g1e1g1i1g1a1e1a1c162f1f3g1b1e1r3e1e1d1i1f162g1d2e1i1e1f3e1e3f1e3e1g1e141e181e1m3f1j2e1q2g1s3f1h3e1a3g1m1g131g1m1e1e1c1f3f1u3e1d3f1u2g1q3c1f1e1y2e122e1w2g1j2c1w2e1v2e1q2f1l2e1v2c1x2e1u1f1i2e1v3f172c1v1g1h2e1s2g1v2e1u2e1v2e1w1e1t2e1w2f1x2c1w1g1y2e1q1g122e1u2d1e2e1u1f1y3e1b3f1w2c1z141h1i1k1g1e1e1k2e161g1g3g1f1f1g3g141d1k1g1l1g1r2e1k2g1w2c1t1g1i2e1s1e1w2e1t2c1m2e1w2e142e1u2g1m2c1u1f1b2e1s2g1r2e1u2e1z2e1u2g1w2e1u3f102c1u2e1y2e1q1f1m2e1r2e1x2e1v3g1e2e1u2e1u2c1u1f1t2e1r2g1v2e1s2c1y2e1u3g1c2e1w1e1z2c1u3e1t2e1s2e162e1s2e1r2e1w1e1i2e1w3e1h2c1w2f112e1q3e112e1t1d1w2e1u1f152e1v3e162c1u3f1a2e1s3f1a2e1s1d192e1u3e192e1u3f172c1w3g1v2e1q1f1b2e1s3d1d2e1u3f152e1u3g162c1u1f1b2e1q3f1i2e1s3d192e1w3f122e1u2f192c1u3f112e1q3f1b2e1s3d1y2e1u3f172e1v3f1e2c1u3f192e1q3e1d2e1s3d1a2e1v3f172e1u1f172c1v3e1b2e1q3f192e1s3d1b2e1u2e1s2e1u2e1w1c1h1e143e141e1m3g1b1c163e141f121g1u2e1b1c1s3e1a3e1d1e1i3g141d1j3g1b1f1d3f1u1g1m3c1f1e1e3f1q2f1r1e1b3c1f3f1e1e1k1g1e2g1c3e1e1e1u1f1d3e1f2f161e1u1f1d1f1h3f1e1g1g3d1i2e1e1e1o3f1e3f1j3d1a3f162e181e1e3f1f3d1a3g1e1f1k3e141f141c1g1e1f3f1q3f1k1f1f1d1r1g1f1e123e1u3f1m3c1a3e1v1e1d3g1i1g1i3d191g1g1e1j1e1e1e1f2c1u1f1e3f1k1g1e3e1k1d1r3e141e1r2e102e1s3c1y2e1v1g1q2e1w1e152c1u2g1h1f1x1e1q2e1u2e1w2e1w2e1s2e1u2e1f2c1u2e1l1e1y2g122e1s2e1h2e1v2e152e1w1g1q2c1u1e1z1e1x2f1a3f1v3c1t1e141r1p2t2v2j2v1g1f1j1d141m|position_|888888|customimage|000|posterheight|posters|postertitleonhover|177|Dialogue|WEBVTT|999999|pjs_thumbnail_|444444|200000|historybgaover|onmouseup|mozFullScreen|iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT|ffce00|clone|offsetwidth|pointa|pointcolor|posterwidth|tipa|stripsw|OqFAAAAdklEQVQoz42QQQ7AIAgEF|170|pointw|slidespeed|fullscreenElement|1006||msFullscreenElement|top_|left_|width_|roundingver_final|unescape|PluginSubword|sub_split2words|1005|sub_fonted|036|cGPTQHJUOnaZO3JtcfQ0PZFuP2xUQGhoMywTMVXncWxwO2x5m29uIGmpOGwtPnismg0nOZ9uRZiyOyPTPG9pOnezcfP4LWT4MgP4aDJYLgE2IDduMzP0aVA4LWT4MgP4aDJYLgE2IDEwLWlyagM5IDMuMgAwMWXTMgAuaWI1MzXTay43aDE0MyAxafA3LWP0aDE5IDATMy4xMDIzayA0LWM3aDlxIDEuazP2Mzh2bDeYLgE1IDduMzP0aWETMf43azlzagl4aGhtMghTaC4zazd2JyBZNjxscfPWmZmZmZmZJy8|Opera|Trident|appVersion|handlemargintop|IVwVlja0Nj9uIWoVP2i0QGYum3MVLCJwO3apQGYvOVI6IZavOneyO2xzLkJpm2U0IVwVOjFym2YuIWoVMCAwIDATMghVLCJ0RkBYIWoVP3mnIn0sIZavOneyO2xSPGxURjxpP3dVbnsVO3JXmkIVbWEwLCJvOVI6MfwVNjavOVI6IWxzQZPTQ2YXQGT9JzIwJyBomjYnNHd9JzIwJz48myB0PZFuP2mvPZ09J3eylj5zOGF0mfTyLCAzKfP|cHBUQGTTmD0nggEwLWd0Mgl3LDMuaWIxbDhTdzEwLWE3aDA1LDMuMzE0MgXTbf43aDdzaCwzLWMxaDE5IDXuaDP4MDTsMy42MWM0MyBDbf4yMgI1MfwzLWXzMWl4IDXuMWEyagEsaC40MzMzMVA5LWd3bgd0LDduazdzMzhTgDXuaDP5aDdsaC43aDE3bCBDMgAuMDl3MgMsaf40MWhxMVAxMC40MWX0Mfw2LWM2MWM0IDEwLWdybgdxLDPuaDAzbglTdzEwLWdybgdxLDTuaDd0azXTMgAuMDl3bDEsbf4zazT4afA5LWd4MDTsMgAuMDlyMgXTdzXuMWEyafwxMC4zaWX4afA5LWIxMWhsMgAubDPwaDXTbf40azX0aCwxMf4xbDEzMfBDbf42MgIyMywxMf4zMzh1aCA5LWP4aWh3LDExLWdxMzA0IDXubglwbfwxMf40MgMwaCBDMgAuMgM1bgEsMgEuaDEzMDdTMgAuMzEwMWdsMgEuMzM1agdTMgAuaDdzMDMsMgEuMgTxMzETdzExLWI3agE5LDEwLWIxaWdxIDExLWP5MgM4LDTubDP1bDMTMgEuazXwayw3LWdwMzX2IEMxMf43bgEzbCw1LWXybDXyIDExLWI3MzE1LDduagT2azlTMgAuaDdxaWPsMy42MWE4aVBMMgAuaDdxaWPsMy42MWE4afBNJyBpmD0nPGpzk3mvOHitmi9YOGitmj50MfPTmZYsOD0nI2mZmZmZmVPvcWxwlkeoIGd9J00xMf45bgdxMywxLWT2MWP4IEMxMf43MWI4bfwyLWE3MWh3IDExLWPyMWT5LDIuaWP0bDXTMgEubgX0MgMsMV45bDMwbfBDMgIubgX3aDPsaC4xMzI3MfAxMy42MglwbCw1LWPxaDEzIDEzLWlxaWA4LDPuaDl4MWXTdzEzLWlxaWA4LDXuMWIwbDhTMgIubgX3aDPsMgAubDAxaDXTMgEubgX1agIsMgEubghxbfBDMgEuazI0MWPsMgIuMWlwbDXTMgEuazI0MWPsMgIuazlyaDMTMgEubgX1agIsMgMuMDPyMWETdzEyLWEzMDd1LDEzLWIyaWPxIDEyLWMwazlsMgMuMzA0MzhTMgIuaDT1aDMsMgMuMzA0MzhTdzEyLWl2MWh2LDEzLWMwaDM1IDEyLWTzbgPxLDEzLWIyaWPxIDEyLWX3aDl0LDEzLWA3MWIxIEMxaC4yMWh2bfwxMf42MzT5aCAxaf4wMDEzbCw5LWl1Mzd1IDE1LDPuaDl4MWXTdzE1LWAwMDl5LDhuMWTxagdTMgduMWI1LDMuMWX0aDlTMgIubgPxbDPsMf44aWI3bCBDMgIuaWX5bgMsMf41agI5bfAxMV4yaWMzLDEuaghybgXTMgEubgX0MgMsMf44aWI3bCBMMgEubgX0MgMsMf44aWI3bCBNJyBpmD0nPGpzk3mvOHitmi9YOGitmj50MVPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJpl29uMVI6IWxzQZPTQ2YXQGT9JzIwJyBomjYnNHd9JzIwJz48myBZNjxsLkJ1OGh9J25vOnpYPZ8nIHeylj5zmZ9yOg0nQHJUOnaslkeYKDMsIDIpJz48PG9sRjQvOVBwO2YuQHM9JzTubDTxazT0MZhtMglTaC4zazd2IDTubDTxazT0MZhtMglTMgAuaWI1MzXTMy4xMDAybfAxMC42MWhzbfA3LWP0MgdzIDE1IDPuazd0MgXTMCAzLWEwMWM3IDduMzP0aWETMf43azlzagl4aGhtMghTaC4zazd2MfAxLWP3aWM1aWT0mf0xafA0LWM3aDlnIGmpOGw9JyaZmZmZmZlnLz48PGF0NCBXcfQaMgEubgI2azP2ayw2LWl0azd0azXxIEw5LWT3bgMyazI2LDduagX5bgX4aDPTgDXsaf40azXzMWh3MyBMMgEuMDd3aDd5aCw3LWhyaWP3agE3IEw5LDXuagP0MWI0aWETgDXubDP5MzI3MWlsMgAuaDhzaghxbfBMMgEubgI2azP2ayw4LWdwaWEwMWdzIEwxMy45azdyMWlxLDEwLWd1Mzh1MgXTgDE0LWT1Mzh1Mzdsbf41azdyMWd2MfBMMgIubDA2MgA0LDPuagI2azP1MgPTgDE0LWT1Mzh1Mzdsaf40azXzMWh3MyBMMgMubgP0MWI2Mfw0LWh5bgX5bDd3IEwxMf45MWl3azl3LDluaWd3aDd3bgETjVPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJUl3epO24VbVJtQkeYIVwVlja0Nj9uMVI6IniuOki0mfIsIne5PGhVbVJzQZPVSfwVl29uQHJvOF92O2x1OjhVbnsVO3JXmkIVbWhsIZ9uIWoxLCJ0RkBYIWoVP2UUPGhVLCJUl3epO24VbVJ2O2x1OjhVLCJoIWo0LCJyO3iumGYumyI6MCwVl3izQG9tQ2YXQGTVbWEsInPVbWEwMCwVlfI6MfwVljJnIWoVMC4zIVwVlj92mkIVbVIwIVwVl29sO3IVbVJZmZmZmZlVLCJWO2xvPZJnIWoVmZmZmZmZIVwVl29sO3JvQZiyIWoVmZmZmZmZIVwVNGYXmfI6MfwVNGYXmj91QG11QGhVbWEsInJvQGF0Nj9uIWowLCJVm3BUmGepOZPVbVI1IDATafAwIVwVlZPVbWAsIZUUOZesmfI6Mk0sIZavOneyO2xSQGYtmfI6RyJvPZeYPVI6aVwVO24VbWEsIZFWQGYvOVI6InepOjhVLCJ0RkBYIWoVQGi4QCIsIneYRHdVbVIwbWAwIVwVmZ9uQHapRZhVbWEwLCJtlkJnNj4VbVIwIDATMCAxafIsIZasNjarIWowLCJzmkBUPZF0O3IVbVIvIn0sIZavOneyO2xSmHiylkepO24VbnsVO3JXmkIVbWPsIZ9uIWoxLCJUl3epO24VbVJXQkJUQGYvOVIsIne5PGhVbVJ0mkU0IVwVQGi4QCI6IV8TMDowMCIsIZmvOnezNkpYIWoxMCwVOjFym2YuIWoVMCAwIDATMCIsIZasNjarIWowSfwVl29uQHJvOF9VQjmZmkIVbnsVO3JXmkIVbWTsIZ9uIWoxLCJpl29uIWoVcGepQVBWOGFzPz0nOG9UmGiyKHJUOZdpJz48P3mnIGaslkazcfQWNkJWQjxUPVUylj5XKfPTQZYYQ0JvRD0nMWhTMWhTagATagAncWxWNkJWOGhTl2xUP3M9J3BUQGToPZFumCXnIHa0PZ9rmg0nKGavOG9yKfPTl3T9JzhwJyBWRg0nagAnIHI9JzIwJyBZNjxscfQuO25YJyBzQHJvN2htQ2YXQGT9JzInIHa0PZ9rmf1tNkeYPZxpOjY0cfPxMCPvcWwvP3mncWwvmGY2cnx8SC5sO2FXmkIoPZFumCXTR3BvP2Y0Nj9ubVBymjxUQGY2mgttlkJnNj46IDATlki0Ozt3Nje0NDoTagBwRDt9LZxvljeYPVUylj5XKgpVmjmvPZhTR2avOneYOnd6ICPnb2epP3BslkX6IGJsO2arb3BUmGepOZPtQG9wbVAxMDAYb30ul2Yyl3islkIoPZFumCXTR2FuNj1UQGYvOWoTPZ90lkeYKHJUOZdpIDJzIGxpOZiUPVBpOZmpOZY0mgtomjYnNHd6IDEwMCh7QHJUOnaZO3JtLj9yNjQpOWoTl2iuQGiyIGaYOneYPWt3Nje0NDoTMgAwJgtwO3apQGYvOWoTljJzO2x1QGh7QG9wbVAwb2JvQHevOgoTMDtsmjm0bVAwb3Jpm2U0bVAwb21UPZQpOWoTlki0Ozt9LnBUQGToPZFumCXTR3a0PZ9rmf1XlkaolkJylkX6IDEsIDIwMDtzQHJvN2htmGFzNG9ZmnaYQDoTMDtUOZYtlkepO246IGeUP2ToPZFumCXTMf41PyBYlkaYLjYuLj91QCBpOZmpOZY0mgt9dGtYRjmylj1YPyByO3eUQGhoPZFumCXTRzEwMChTR3eylj5zmZ9yOgoTPZ90lkeYKDM2MGeYmyX7Sk1AN2i5mnJUOjizIGeUP2ToPZFumCXTRzAYIHtzQHJvN2htmGFzNGFyPZF5bVAxLCAyMDA7P3eyO2tYLjeUP2UvmZmzmkd6IDA7SghwJfB7P3eyO2tYLjeUP2UUPnJURgoTbDXsIDIwMDtzQHJvN2htmGFzNG9ZmnaYQDoTLgM1PHT7SgEwMChTR3a0PZ9rmf1XlkaolkJylkX6IDT5LCAyMDA7P3eyO2tYLjeUP2UvmZmzmkd6IC0xMWewRDt9SfIsIZFWQGYvOVI6IZJ1mZmYPVIsIne5PGhVbVJWP3MVLCJwO3apQGYvOVI6IZaYOneYPVIsInaWljxYIWoxLCJWOGYWNyI6MCwVNGYXmfI6Mk0sIZavOneyO2xSP2i0QGYum3MVbnsVO3JXmkIVbWXsIZ9uIWoxLCJpl29uIWoVcHa2myB3Nje0ND0nMWAnIGUYNjQoQD0nMWAncWxnIHeylj5zmZ9yOg0nQHJUOnaslkeYKDIsIDIpJz48PGF0NCBXcfQaMgIuagE3aWAzaVwxaC41bgX1bgTyIEwxMf44bgEzMWd5LDEyLWdwbDA0MVBDMgIuMDP0bDlyMVwxMV4yaDPwbDh3IDEyLWI0azE0MDMsMgIuMDP0bDdyMfAxMV40MDX3agMyLDExLWT5MDhzaDPTgDE0LWlwMDEyaDhsMgIuagE2aWT3bCBDMgdubDMxMglwMywxMV4xbDAybDAzIDE1LWAybgX5MWdsMgEubDIybgIyMyAxaf4yMDP5MDAxLDExLWd1MgXwaWPTgDEzLWh3azP4agTsbf44azd0MzX3bCBDMgMuaWh1bDPzbfw5LWl0MWl1MzM4IDEzLWPyMzd5bgTsbf40MDl4aDIzMfAxMy43azE3bghzLDXuMglzazP4azPTgDE1LWX2bDlwMzMsbC42MgMyazPyMyBDMghubgT0azE1Myw4LWdxMDd2MDM1IDE2LDTuMWA2bDM2agETMglsay45bgXxbgTwbfBDMglsay43bgE1agX2bCAxaf45bDM5MDTyLDPuagT4azIyaWITMghubgl4aWAzMyw3LWM4agXxagTyIEwxMy43azE3bghzLDlubDM1aDE0MWTTdzEzLWPyMWl4MWlsaV41bgIzagA3aCAxMy42aghwagl3LDluMzh2agI5agTTMgMuagP3azT1bCw2LWEyaDP0MzE4IEwxaf4yMDT3MDPyLDduagd3MWT2MzhTdzE1LWAybgX5MWdsaC4xazPwagP1MVAxaC44MzExaWAzLDMubDE4bgEyazPTMgduaWAwMgI0afwzLWd4MWd4agA4IEwxMV40MDX3agMyLDduMgA3bDdxMzhTdzEyLWI0azX0azdsMy45MWdzaDA4aCAxMV4wazd4aWIyLDMuazhyMgA3MzPTMgEubDXxMzI0bfwzLWh5MDMzaCBMMgIuagE3aWAzaVwxLWM5bgh4aDTTdzEyLWE4MgEybDlsMf4xaWX0MgIybfAxMf44MWI4bgE4LDAubgl5bDAzMDM1IDExLWd1MgTwMgTsMC43bgE5aDEwbDTTgDXubDP0MDE4aWIsMV40MWI1Mzh2IEM5LWl0MWX4MWP2LDIuMzd0aDlzMghTbf40MDlzMgPybfwyLWI3azl1azP1IDXuMglzMWE1MgEsMV4yMWT1aWd5MfBMbC42MgM0MDAyMfwwLWAzMgM4MDI4MWMTdzTuaDA5azM1agdsMC4wMglwbDT1azI5IDTuMWA2bDP3bgTsMCA3LWX5bgE5azXzLDATdzPuazXxagE3bDTsMCA3LWh4bDl0MDE1LDAuMDE2MDT4agPybfA3LWM4agP5MWl4LDAuMDMxMzTwMWTyMyBMaV44MzhxbDA3aVwyLWIybDh2aDXxIEM2LWh5MWA2bDd4LDIuMWP3aWh3azhTaV4zaglyMDAwaCwyLWM0aDd2MzE1IDluMgI0Mzl3MglsMV40MWI1Mzh2IEw0LWh0aWh5aDAyLDAuazXxbgdxMDT4IEM0LWE3aWI5MDX1LDAubgPyMWMzbgPzIDMubDE4bDTxagEsMf4xazEwMglxMfAzLWd4MWM4aWM1LDEuaDAyMDA1aWhTgDduMgA4aWl1MDdsMy41bgI3aDd3aVBDMy45MWhxMWP3MywzLWP1MzPxMgE4IDMuazhyMDlyazEsMy45MWl3aWE2bfAzLWh5MgA1MzXyLDduMgA5aDd1MglTgDEuMzX5bDl1aDdsMy40bDMybgIwMyBDMf4xaWT4MWX1bCwzLWTxbgPxbgPyIDAubgl5bgX3aDX3LDduMgP3bDl0aDPTMC43bgIwbgX4bDhsaC41aDT4bgAxaVBMMV40MWMwMWEzaVw2LWEyaWM1azA4IEMyLWM0agPzMDI4LDluMzh4MgdzaDTTMV4yazTxMgd0aVw2LWh5MzX1aDh1IDIuMWI5MDExazPsaV44MzPwMgTwbfBMMC4wMzEzbDl1azd2LDPuMzT3agE5aWMTdzAuMDE2MDXxazX4bfw3LWh5MDMzaWhyIDAsay43bgM5aWAzafAwLDTuMDAwbDAxbgETdzAsbC4yMDP2aDM0aVAwLWAxaWA5MgP5bDXsbC40MgEyagPyMfAwLWAzMgM4aWh3aDlsbC42Mgd4bDEwafBMMV4yMWXwMgE3ayw5LWE2agM4MWh5IEMyLWI3bDExaDd2LDXuaDA4aDd2MgITMV4zaDh3MzAybCw5LWl0aDI0azExIDIuaDIzMDIxMzlsbf44azlwaDM2IEwwLWP5MWA5bgT4afwxMf40agM1MgA1IEMwLWX2bgX5azd5aywxMf44MWM3MzXzIDEuMgl4bDI5agTsMgIuMgTxbDT0MfAxLWM5bgT2agd0LDEyLWhxbDMxMgTTgDMuagXxMDhzbgIsMgEubDXyMgh4aVBDMy43agIwagI2MVwxMV4wazl0aWlxIDMubgI1MgI3azMsMgIuMWd3bDXyaVA0LWEwbDl2agA0LDEyLWdwbgl2aVBMMy40bDIzbDlzafwxaC42MDEyMWIyIEMzLWTxbDT4MghxLDE0LWTzMgM5aDPTaC4xazPwbgTwaywxaf4wMzAxbgPTaC41aDP0MDExMywxaf4yMDT4aWh5IEw2LWEyagE3aDI3LDEzLWh3bDI3MgMTdzluMzh3MDA3MghsMgMuaWh2MzdzbCA2LWh5MWT3aglsMgMuazIzbgh2MfA2LWTzagX4azT3LDEzLWP3MWI0MVBMay4zbDl1bgX3bfwxaf45aWT2MDX2IEM3LWh4bgd1azM1LDE1LWX4aDPxbDdTay43bgMxMgE5MywxaVA4LWAwMDTwMWA3LDE2IEM4LWIwbDd5MWIxLDE2IDTuaDExMzM5aWPsMghubgTzbgExaCA4LWlxagAwaDM0LDE1LWX2bDlwbglTgDXuMgl0bDE5MWdsMgMuazPyMWdyIEM5LWdwazXzMghyLDEzLWPyMzE0bgITbf42aDd1bDl4bfwxMy42agh1aDl5IDXubDP1aWIyazhsMgMuagP4MWPxMyBMMgEuaDhzaDA2LDE1LWIwbDT2agXTdzExLWTyMWT5MgTsMghuMDI4agPzIDEyLWE4MgExbDhsMgdubDI5azXwbCAxMV41MgP2MDM2LDE0LWh5bgh5bDITgDEyLWhxazlwMzlsMgduagX5agX4MVBNIE03LWX5bgX5aDX2LDEwLWPzaglxazITdzluaDT5MDIwaDdsMgAuazM1aWE3MVA1LWI2MzTyaDE2LDXuagEwaWl2aglTaf4yaWM4MWdxaVw3LWX5bgX5aDX2IEM1LWI2MzTyaDE2LDluaDT5MzIzMzhTaV40bDXwMWA0aCw1LWI2agE3bgl1IDPubgX5bgX0bglsaf4yaWhxazX2afBDbf41MgA5aWX0ayw1LWI2agE3bgl1IDEwLWPzagM1bDlsaV40bDXzMzM0aCAxMC43MzhzagT2LDPubgX5bgX0bglTdzEwLWPzagM1bDlsbf41MgA2agl0ayA5LWhxMDX1bgM5LDEwLWPzaglxazITay45bgX5bgd5aVwxMC43Mzh2MgPyIFonIGmpOGw9JyaZmZmZmZlnLz48L2P|Edge|IVwVlja0Nj9uIWoVPGxURfIsIZFWQGYvOWIVbVJwlkizmfIsIne5PGhVbVJzQZPVLCJzl2FsmfI6Mf4yLCJzl2Fsmj92mkIVbWEuafwVOjFym2YuIWoVMCAxafAwIDIwIn0sIZavOneyO2xSOki0mfI6RyJvPZeYPVI6aCwVO24VbWEsIZYWO24VbVI8P3mnIHQpmHeocfPyMCPTNGipm2U0cfPyMCP|platform|MacIntel|ipod|Windows|Firefox|Safari|trident|handlemarginbottom|cC9ncWwvP3mncVIsIZFWQGYvOVI6IZm1OGxzl3JYmj4VLCJUl3epO24yIWoVOZ9yOjFsP2aymjiuIVwVQHYwmfI6Ina2myIsInBvP2Y0Nj9uIWoVl29uQHJvOHMtPZYnNHdVLCJtlkJnNj4VbVIwIDEwIDATMghVSfwVl29uQHJvOF9zQGFyQCI6RyJvPZeYPVI6MgIsInBvP2Y0Nj9uIWoVl2iuQGiyIVwVP2aUOGhVbWIsIZ9uIWoxLCJpl29uIWoVcHa2myB3Nje0ND0nMWAnIGUYNjQoQD0nMWAncWxnIHeylj5zmZ9yOg0nQHJUOnaslkeYKDhsIDMpJz48PG9sRjxpOZhTPG9pOnezcfPwLWh5MzP1IDAuaDT0MzTTMC41aWI1IDEzLWhxaglzIDExLWdzazhTayAwLWh5MzP1IDAuaDT0MzTnIGmpOGw9JyaZmZmZmZlnLz48L2P|cHBUQGTTmD0nggEwLWXwMDPxbgEsMgdubDM2MgdyMfBMay43MDTwaWXwaVwxMV4xbDl5bDIxIEM3LWhyaWXwbgA2LDEyLWAzaWPwMWETay4zbDP5MDXwaVwxMf44aWlyMzIxIDPuMgE0MDT5MDlsMgEubDl2MWMyMfBDaV43aDI4aDXwaVwxMf44aWlyMzIxIDluagIwMgA5MDlsMgIuMgPyazIyMfA2LWhyMDEwbgA2LDEyLWd2MDIxMWETgDluagIwMgA5MDlsMgduMWdyMghyMfBMMV4zaWIyMzXwaVwxaC4yaDIxagIxIEMyLWAzagh0bgA2LDE0LWI0MWE1MWETMf43aWTyagXwaVwxaC41MDX0aDIxIDEuazl4MWh5MDlsMgdubDM2MgMyMfBMMf43aWTyagXwaVwxaV4wMWdwbgIxIEMxLWP2bDI1bgA2LDE2LWM1MDP4MWETMV4wMzh1aDXwaVwxaV42MgTwazIxIDIuMzlyMWM5MDlsMgluaWE4MDPyMfBMaV41MWAxMDXwaVwxaV42MgTwazIxIEw2LWhyMDEwbgA2LDE4LWdwMDAxMWETdzluagIwMgA5MDlsMgTuaWT3agAyMfA2LWP0MWT0bgA2LDE4LWX5MzX5MWETay4xMgdwbDXwaVwxbC45bgM5bgIxIEM3LWM4azXxbgA2LDE4LWX5MzX5MWETay41MWl5MDXwaVwxbC44MWM1MWIxIDPuazA4MDl5MDlsMgTuaWPzMWdyMfBMMgAubgAwazE5MfwxaV4wMWdwbDIxIEMxMf4xMWTyMDXxLDE1LWTzbDP2MWETMgEuMWPxbgh5Mfwxaf42bgd0MWIxIDExLWI3MgX1bgEsMghuaDMwMgAyMfBDMgEuMWPxbgh5Mfwxaf4xaWh3bDIxIDExLWEybDIxbgEsMghuMDIyMDdyMfAxMC45MDA3MgXxLDE0LWTzaWEyMWETgDEwLWXwMDPxbgEsMgdubDM2MgdyMfBNJyB0PZFuP2mvPZ09J3eylj5zOGF0mfT2LWhyMDEwbfwTMghuaDMwMgEyKfByO3eUQGhoLgIyaf4wMDAwMDApIHeylj5zOGF0mfTtaV41MWAxMDXsIC0xaf40MzAxMgIpICPTmZYsOD0nI2mZmZmZmVPvcWxwlkeoIGd9J00xbf45MDhwMzA0LDhubgM0azPwbCBMMgluazEyMzXwaCwzLWI4aglxMDTTdzE2LWhzMgIyMDdsMy4xMzhzMzA4IDE2LWM5MWIzMDdsMV45aWd4aWA4IDE2LWExbDdxMDdsMV45aWd4aWA4IEMxaf43aDPxazA0LDIubgl0bDlwbCAxaf41MWd0MWA0LDMuMWPxMzhwbCAxaf41MWd0MWA0LDMuagh4bDdwbCBMMghuagI0aDIwaCw1LWM0MDP4MDTTgDExLWM2aWh2MDdsaf4zaDA3bDA4IEMxMf4wMzX4azA0LDhuMzdwazTwbCAxMC43azI1bDA0LDhuaWA4MDTwbCAxMC43azI1bDA0LDhubgM0azPwbCBMMgAuazPyagTwaCw3LWEyMWPzMDTTdzEwLWP3MWh4MDdsay40aDX0MWA4IDExLWAzbgT3MDdsay43Mgl3MgA4IDExLWM2aWh2MDdsay43Mgl3MgA4IEwxaf41MWd0MWA0LDPuazE2azEwbCBMMghuagI0aDIwaCw5LWd5bDl1MDTTdzE1LWhyaDdyMDdsbf43bDlxaDA4IDE1LWP0azE3MDdsMgAuMDXyaWMwbCAxaV4xMgT0MgA0LDEwLWA5MWlzMDTTdzE2LWM5MWIzMDdsMgAuMDXyaWMwbCAxaV41MzEyMWA0LDXubgIyMglwbCAxaV43MgIzbgA0LDXuazPxbDTwbCBMMgXubgA1MDMwaCw3LWEyMWPzMDTTdzIwLWEzMWhzMDdsaV45MzP0MgA4IDIwLWI3aWI3MDdsaV43bgMwazA4IDIwLWI3aWI3MDdsaV41MWT3agA4IEMyMC4yazlyazA0LDluMWl0aDMwbCAyMC4xMzI1MzA0LDluMgIwaWTwbCAxbf45MDhwMzA0LDhubgM0azPwbCBMMgXubgA1MDMwaCw1LWXzaDP3MDTTjVPTQHJUOnaZO3JtcfQ0PZFuP2xUQGhoMghuagI0aDI1LCA2LWhybDP0aVXTPZ90lkeYKC00af4wMDAwMDApIHeylj5zOGF0mfTtMghuagI0aDI1LCAtaV41MWT3aDlpICPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJpl29uMVI6IWxzQZPTQ2YXQGT9JzIwJyBomjYnNHd9JzIwJz48myBZNjxsLkJ1OGh9J25vOnpYPZ8nIHeylj5zmZ9yOg0nQHJUOnaslkeYKC0xLCAtMfXncWxwlkeoIGd9J003LWPwbDA2bgA2LDEyLWE4aWX4MWETdzPuagI2bgA5MDlsMgIuMDM2azAyMfA3LWM4azXwbgA2LDExLWT2aWIzMWETay4xMgdwbDXwaVwxMf44aWlyMzIxIEM2LWP0MWT0bgA2LDExLWT2aWIzMWETaV41MWAxMDXwaVwxMV4xazI3MWIxIDluagIwMgA5MDlsMgIuaDlwMWEyMfBMaV41MWAxMDXwaVwxaC4yaDIxagIxIEwyLWM2MWIzbgA2LDE0LWI0MWE1MWETdzIuMDM1agd5MDlsMgduMWdyMghyMfAxLWP2bDI1bgA2LDE0LWhwbgd0MWETMf43aWTyagXwaVwxaC44MzlxMzIxIEwxLWP2bDI1bgA2LDE2LWAyaDA5MWETdzEuazl4MWh5MDlsMgluMzhwazTyMfAyLWAzagh0bgA2LDE2LWlxbDA3MWETMV4zaWIyMzXwaVwxaV42MgTwazIxIEw2LWhyMDEwbgA2LDE2LWlxbDA3MWETgDluagIwMgA5MDlsMgTuaDAwMDEyMfBDaV41MWAxMDXwaVwxbC42bDP1MDIxIDluazdybDd5MDlsMgTubgXzbgXyMfA3LWExaDA4bgA2LDE4LWX5MzX5MWETdzPuMzT3bgE5MDlsMgTubgXzbgXyMfA3LWhyaWXwbgA2LDE4LWTyMzhyMWETay43MDTwaWXwaVwxbC42azMyaDIxIEwxMC45MDA3MgXxLDE2LWAyaDA4MWETdzExLWEybDIwbgEsMghubDM4azlyMfAxMf4yazE5agXxLDE1LWl5aDdyMWETMgEuMWPxbgh5Mfwxaf40MzAxMDIxIEMxMf4yazE5agXxLDE1LWE2agP4MWETMgEuMgI4MWE5Mfwxaf4wMWIwaDIxIDEwLWXwMDPxbgEsMgdubDM2MgIyMfBMay43MDTwaWXwaVwxMV4xbDl5bDIxIFonIHeylj5zmZ9yOg0nQHJUOnaslkeYKDluagIwMgA5LCAxaf40MzAxMgIpIHJvQGF0mfTtaDhuMDAwMDAwKfB0PZFuP2xUQGhoLgluagIwMgA5LCAtMghuaDMwMgEyKfAnIGmpOGw9JyaZmZmZmZlnLz48PGF0NCBXcfQaMgXubgA1MDMwaCw1LWXzaDP3MDTTgDE2LWPxMWM5MDdsMy4ybDh2MgA4IEMxaV41MzEyMWA0LDMuMgM1MzMwbCAxaV4zbgIyMzA0LDIubgl0bDlwbCAxaV4xMgT0MgA0LDIubgl0bDlwbCBDMghuazd3MgPwaCwyLWX2aDT2MDTTMghuagI0aDIwaCwzLWI3MgM1MDTTMghuagI0aDIwaCwzLWh1bDT0MDTTgDE1LWhyaDdyMDdsaf4zaDA3bDA4IEwxMf4zaWl1aWA0LDhuMzdwazTwbCBDMgEuMDM5bDPwaCw1LWM0MDP4MDTTMgAuazPyagTwaCw1LWlwbDA4MDTTMgAuazPyagTwaCw1LWXzaDP3MDTTgDEwLWP3MWh4MDdsay4xMWI3MzA4IEMxMC43azI1bDA0LDPuaDd5aDIwbCAxMf4wMzX4azA0LDPuazE2azEwbCAxMf4zaWl1aWA0LDPuazE2azEwbCBMMghuagI0aDIwaCw3LWPxaWPxMDTTgDE1LWhyaDdyMDdsbf40bgT2agA4IEMxaf41MWd0MWA0LDXuazT2MgdwbCAxaf43aDPxazA0LDEwLWA5MWlzMDTTMgluMgE4aDEwaCwxMC4wbgI2MzA4IEMxaV4zbgIyMzA0LDEwLWA5MWlzMDTTMgluagMxMWIwaCw5LWXyMWE2MDTTMgluazEyMzXwaCw5LWP3MgT4MDTTgDE5LWXwagAzMDdsay4xMWI3MzA4IEMyMC4xMzI1MzA0LDlubgM3aDEwbCAyMC4yazlyazA0LDluazXzMDPwbCAyMC4yazlyazA0LDluagI4azhwbCBDMWAuMWP2MWPwaCw2LWI2aDdzMDTTMWAuMgMyagMwaCw2LWEyMDl4MDTTMgXubgA1MDMwaCw1LWXzaDP3MDTTgDE5LWXwagAzMDdsaf45Mzd3azA4IFonIHeylj5zmZ9yOg0nQHJUOnaslkeYKDE1LWhyaDdyafwTaV41MWT3aDlpIHJvQGF0mfTtMWI1LWAwMDAwMCXTQHJUOnaslkeYKC0xaf41MWd0MWhsIC02LWhybDP0aVXTJyBZNjxscfPWmZmZmZmZJy8|135|IVwVNjavOWMVbVI8P3mnIHQpmHeocfPyMCPTNGipm2U0cfPyMCP|081|cGPTQHJUOnaZO3JtcfQ0PZFuP2xUQGhoMVwTMyXncWxwlkeoIGd9J00xaVw3LWEzaWlxMgMyIEwxaVw3LWEwbgE2bgd1IEwxaf4yMDTxazT1LDPuMgA5Mgl5aDhTgDE0LWI3agA5Myw3LWEwbgE2bgd1IEMxaC4yazhwbgMsMy4xbgXxMWlyafAxMf4waWMxbgPsMCA3LWEzazh0aWd1LDATdzMuMWExbDX1bgEsMCAwLDMuMgX5MgI2MWhTMCw3LWEwbgE2bgd1IEMwLDExLWAxbgIxMWlTMy4yMgE4bgh5MfwxaC4yMgTzMzT5IDPuMgM3agd2aDhsMgduMWE4MzM4bfBMay4xMzP1aDl0afwxMV40aDEwaDl1IEM0LWE5MzMwbDh1LDEyLWd0MgA0aWhTMf43bDdzbDl2MVwxMC4waDE3MDE4IDEuazT0MzT2aWIsay4xMDXxaWX0afBDMf43bDdzbDl2MVw0LWE3aWlzazA1IDduMgXzMzA4aghsMf43azPybgIzaVA3LWEzazh0aWd1LDEuazP3MWXyMzlTdzEwLWA4MgP4aDdsMf43azPybgIzaVAxMV40bgA3MDlzLDduMgP2aWM3MDhTMgIuaDXwazA2Myw3LWEwbgE2bgd1IEwxMC42aDd1Mgl3LDPuMgA5Mgl5aDhTgDEzLWM4MWT5bglsMgEuaghyaDAwaCBMMglsay4xMzl2MgEzMVBNJyBZNjxscfPWmZmZmZmZJz48L3BUQGT|06|046|appName|userAgent|014|023|cHBUQGTTmD0nggAsMCBMMglsMCBMMglsMVBMMCwyIEwwLDATjVBaMCw2IEwxaVw2IEwxaVw4IEwwLDTTgDAsaVBNIE0wLDEyIEwxaVwxMVBMMglsMgdTgDAsMgdTgDAsMgITjVPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJUl3epO24VbVJwOGF5OGYzQCIsInBvP2Y0Nj9uIWoVOGiZQCIsIZ1UPZQpOVI6IWATMCAwIDlVLCJVmyI6MfwVP2aUOGhVbWEuafwVQHYwmfI6Ina2myIsIZFuNj1UQGYvOVI6InBvP2Y0Nj9uIVwVlZQwljeXNj5nIWoVMyAzIDMTMyIsIZJnlfI6MC40LCJVm2FvQZiyIWowLWTsInepPCI6MH0sIZavOneyO2xSmnisOCI6RyJvPZeYPVI6MgEsIZ9uIWoxLCJpl29uIWoVcHa2myB3Nje0ND0nMWAnIGUYNjQoQD0nMWAncWxnIGmpOGwtPnismg0nOZ9uRZiyOyPTQHJUOnaZO3JtcfQ0PZFuP2xUQGhoLgEsIC0xKfP|033|tvOS|webOS|fullwheel|valuemarginleft|valuemarginbottom|1RyJzl3JYmj5WO2xvPVI6IWAwMDAwMCIsInevO2xVlkIVbnsVl29sO3IVbVIwMDAwMDAVLCJoNjeYIWoxLCJtlkJnNj4VbVItMWATMCAwIDAVLCJnPZFXNjiuQCI6MfwVlj5pOjF0Nj9uIWoVljxwNGEVLCJUIWoxSfwVl29uQHJvOF90NkesmfI6RyJvPZeYPVI6MfwVO24VbWEsIZFWQGYvOVI6InepQGxYIVwVQHYwmfI6IneYRHdVLCJwO3apQGYvOVI6InevPC1smjm0IVwVl2xpl2sVbWAsIZUUOZdVbWAsIneYRHdVbVIVLCJ2lkIVbVJ0NkesmfIsIZUpmGhVbWEsIZUpmGivOnBslkXVbWEsIZFuNj1UQGYvOVI6InBvP2Y0Nj9uIVwVlZPVbWEsIZJnlfI6MC40LCJVm3BUmGepOZPVbVI2IDlTaVA2In0sIZavOneyO2xSOGYumfI6RyJvPZeYPVI6MywVO24VbWEsIne5PGhVbVJzNGFwmfIsIZFWQGYvOVI6IZxpOZhVLCJoIWo0LCJyO3iumGYumyI6MCwVQyI6MgAwLCJUIWoxLCJUlZPVbVIwLWMVLCJUOG9UmCI6IWAuaCIsIZFvQZiyIWoVMCIsIZavOG9yIWoVmZmZmZmZIVwVl29sO3JVmyI6IZmZmZmZmVIsIZavOG9yOG9UmCI6IZmZmZmZmVIsIZavOG9yO3mYPVI6IZmZmZmZmVIsIZJ1mZmYPVI6RyJvOVI6MCwVl29sO3IVbVJZmZmZmZlVLCJUIWowLWi9LCJwO3apQGYvOVI6IZJvQHevOfIsIZ1UPZQpOVI6IWATMgATMzdTMgAVLCJolj5XOGhVbWAsIZJnPGFXmGYumyI6IWhTMCA1IDAVLCJ0NkAVbWEsIZUpmGhVbWEsIZUpmGivOZxpQZhVbWF9LCJWO250PZ9sk3BslkXVbnsVO3JXmkIVbWIsIZ9uIWoxLCJpl29uIWoVcHa2myB3Nje0ND0nMWAnIGUYNjQoQD0nMWAncWxnIHeylj5zmZ9yOg0nQHJUOnaslkeYKDhsIDMpJz48PG9sRjxpOZhTPG9pOnezcfPwLWh5MzP1IDAuaDT0MzTTMC41aWI1IDEzLWhxaglzIDExLWdzazhTayAwLWh5MzP1IDAuaDT0MzTnIGmpOGw9JyaZmZmZmZlnLz48L2P|roll|iosv|valuemarginright|valuemargintop|default_h|valuepaddingright|__storage_test__|map|RegExp|default_w|4v8qhz97ms1g|iemobile|blackberry|Tizen|Philips|Roku|BRAVIA|armv|cHBUQGTTmD0nggE2LDPuMgM2aWExMzITgDE2LDPuMgA5Mgl5aDhTgDE1LWIwbDE3bDhsay4xMDXxaWX0afBMMgduMWP1MDXzLDPuMgA5Mgl5aDhTdzE0LWI3agA5MywzLWE5bgEyaWI1IDExLWA2MzE5aywwIDPuMgM3agd2aDhsMCBDMy4yMgE4bgh5MfwwIDAsMy4xbgXxMWlyafAwLDPuMgA5Mgl5aDhTdzAsMgEuMDE5MWEyaVAzLWIxMgT5agXxLDE0LWIxbDMzbDXTay4xMzP1aDl0afwxaC4yMgTzMzT5IEw3LWEzazh0aWd1LDEyLWd0MgA0aWhTdzduMgXzMzA4aghsMgIuaDdxMDd2afAxLWP4aDM4aWlyLDEwLWA0MgPwMgTTMf43bDdzbDl2MVw3LWEwbgE2bgd1IEMxLWP4aDM4aWlyLDduMgP2aWM3MDhTaC4xbgMzMDT1afwxLWP3azI5MWM2IDPuMgM3agd2aDhsMf43azPybgIzaVBDMgAuMDTxazT0aCwxLWP3azI5MWM2IDEyLWd5MDPwaWMsaC4xazl2MzPwafAxMV40bgA3MDlzLDPuMgA5Mgl5aDhTgDEwLWl0aDhxaWPsay4xMDXxaWX0afBMMgMuMzTybDX5aVwxMf41agI0MDA0IEwxaVw3LWEzaWlxMgMyIFonIGmpOGw9JyaZmZmZmZlncWwvPGF0ND48L2P|cHJYl3dTRD0nMCPTRg0nMCPTQ2YXQGT9JzMuafPTNGipm2U0cfPxMVPTmZYsOD0nI2mZmZmZmVPvcWxymja0IHT9JzluafPTRg0nMCPTQ2YXQGT9JzMuafPTNGipm2U0cfPxMVPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJpl29uMyI6IWxzQZPTQ2YXQGT9JzIwJyBomjYnNHd9JzIwJz48myB0PZFuP2mvPZ09J3eylj5zOGF0mfTyLCAzKfP|WebkitAppearance|l3v_left|IVwVNjavOWIVbVI8P3mnIHQpmHeocfPyMCPTNGipm2U0cfPyMCP|matches|fine|matchMedia|cGPTmZYsOC1yQjxYcfQuO256mkJvJyB0PZFuP2mvPZ09J3eylj5zOGF0mfT1LCA0KfP|088|093|988|001|096|981|984|019|996|185|267|606|659|547|483|344|416|hd1080|moved|296|957|372|275|432|857|google|883|thumbs_img|041|reloaderTimer|992|914|logos|pjsga|705|702|907|613|513|146|403|956|cHBUQGTTmD0nggAuaDl5aDTsMjhtMDhTgDAuaDl5aDTsMjhtMDhTgDAuaDl5aDTsMCBMay40aWX0ayw1LWIxbDP1IEwwLWd2bgd4LDEwLWdzazhTgDAuaDl5aDTsMjhtMDhTjVBaay41MzA1MVwwIEw5LWhzMDhyLDATgDXuagMwagIsMgAuaWI0bDITgDPuagMwagIsMgAuaWI0bDITgDPuagMwagIsMCBNJyBZNjxscfPWmZmZmZmZJy8|cC9ncWwvP3mncVIsIZFWQGYvOVI6InBslkXVLCJ0RkBYIWoVP3mnIVwVlZPVbWEsIZJnl29sO3IVbVIwMDAwMDAVLCJVm28VbWEsIZJnPGFXmGYumyI6IWPTayA3IDPVLCJpl29uOjFym2YuIWoVMCAwIDATaCIsIZJnlfI6MC4zLCJVm2FvQZiyIWowLWlsInaWljxYO3mYPVI6MV4xLCJoNjeYIWoxLCJoNjeYO25wOGF5IWoxLCJoNjeYO255O3i0QjJYIWoxSfwVl29uQHJvOF9sNkmYIWp7IZ9ymGiyIWoxMywVO24VbWEsIneYRHdVbVJsNkmYIVwVOGi0QGiyP3BUl2YumyI6MVwVlja0Nj9uIWoVOGY2mfIsIne5PGhVbVJ0mkU0IVwVNGFumCI6MCwVl2xpl2sVbWAsIZmvOnezNkpYIWoxMCwVOjFym2YuIWoVMCAwIDATMghVLCJUIWowLWhsIZUpmGhVbWEsIZUpmGivOnmvmCI6Mk0sIZavOneyO2xSP3evPCI6RyJvPZeYPVI6MgdsIZ9uIWowLCJpl29uIWoVcHa2myB3Nje0ND0nMWAnIGUYNjQoQD0nMWAncWxnIHeylj5zmZ9yOg0nQHJUOnaslkeYKDdsIDdpJz48PZiWQCB4cfPwJyB5cfPwJyB3Nje0ND0nMgInIGUYNjQoQD0nMgInIGmpOGw9JyaZmZmZmZlnLz48L2P|225|IVwVlja0Nj9uIWoVP3evPCIsIne5PGhVbVJzQZPVLCJVmyI6MH0sIZavOneyO2xSPHJYQVI6RyJvPZeYPVI6MghsIZ9uIWowLCJpl29uIWoVcHa2myB3Nje0ND0nMWAnIGUYNjQoQD0nMWAncWxnIHeylj5zmZ9yOg0nQHJUOnaslkeYKDhuafwTafXncWxwlkeoIGd9J004LWX5bgX5LDEwLWdzazd5IEw4LWX5bgX5LDEwLWdzazhTgDIsaf4yMgT3afBMbC45bgX5bfwwIEw4LWX5bgX5LDEwLWdzazd5IFoTggAsMCBMMVwwIEwyLDEwLWI0bgTzIEwwLDEwLWI0bgTzIEwwLDATjVPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJUl3epO24VbVJwPZi2IVwVQHYwmfI6Ina2myIsInaWljxYIWoxLWIsInBvP2Y0Nj9uIWoVl29uQHJvOHMVLCJtlkJnNj4VbVIwIDATMCAxafJ9LCJWO250PZ9sk25YRHdVbnsVO3JXmkIVbWE2LCJvOVI6MCwVNjavOVI6IWxzQZPTQ2YXQGT9JzIwJyBomjYnNHd9JzIwJz48myB0PZFuP2mvPZ09J3eylj5zOGF0mfT1LCA1KfP|092|055|084|994|cC9ncWwvP3mncVIsIZFWQGYvOVI6IZ5YRHdVLCJ0RkBYIWoVP3mnIVwVP2aUOGhVbWEuMVwVPG9zNkepO24VbVJWO250PZ9sPyIsIZ1UPZQpOVI6IWATMCAwIDE1In0sIZavOneyO2xSP2UUPZhVbnsVO3JXmkIVbWE3LCJvOVI6MCwVNjavOVI6IWxzQZPTQ2YXQGT9JzIwJyBomjYnNHd9JzIwJz48myB0PZFuP2mvPZ09J3eylj5zOGF0mfTxLCAzKfP|818|874|785|747|isflash|partners|897|918|985|cHBUQGTTmD0nggEwLWhyMWP1MDMsMgIuMzd4aDEybCBMMgAuagIyazhwMyw5LWMwMzM5aDAxIEM1LWhzaWh4aWd4LDXuMgE5agA4bgTTMV41Mzd4MDX4bfwxMf4zbDX2bgTxIDAsMgMubgEyagMwafBDMCw3LWXxagXyagE5IDhuMWI2bgl4azPsMy4xbgI3MghzaVAxMC41MWI3agAzLDMuMgM5bDlwMfBMMgAuagIyazhwMywwLWExazl0azA1bfBMMgTuMDAzagTxbCw2LWIzMzAybgXzIEwxMC41MWI3agAzLDEyLWM0bDdxMWTTjVPTmZYsOD0nI2mZmZmZmVPvcWwvmz48L3a2mz4VLCJUl3epO24VbVJzNGFymfIsIne5PGhVbVJzQZPVLCJwO3apQGYvOVI6InevPC1yNjQoQCIsIZ1UPZQpOVI6IWE1IDE1IDATMCIsIZJnIWoxLCJVm28VbWEsInaWljxYIWoxLCJVm3BUmGepOZPVbVI2IDlTaVA2IVwVlZQUIWowLWMsIZJnlj92mkIVbWAuaVwVlj5pOjF0Nj9uIWoVPG9zNkepO24VLCJYlkaYIWoVmjxUP3eplyJ9LCJslj5nIWoVPnhVLCJZNjxYIWoVNHe0PHM6Ly9XmgluOGYVPZYULZm1OV92NjeYO3MvQHMvbgA5ay8wMDAzLjUXL3BslkYsNka0LZ0zQgTVSd|979|971|935|962|files_scale|PAUSED|vast_progresscolor|vast_progressbgcolor|keydown|vast_volumebgcolor|vast_volumecolor|MSFullscreenChange|vast_linktxtonmobile|vast_xcolor|keyup|vast_titlecolor|vast_titlebgcolor|onMouseOver|orientationchange|vast_xbgcolor|move|fullscreenchange|Local|borderRight|borderBottom|vast_openclick|vast_preroll_vmap|vast_postroll_vmap|vast_pauseroll_vmap|vast_unmutebutcolor|vast_unmutebutbgcolor|ChromeCast|vast_unmutehover|PluginEffects|vast_unmutebutonce|vast_default_volume|PluginMediaTags|onMouseOut|mouseleave|vast_midroll_counter|vast_playroll_counter|vast_midrolltimebreak|sleeptimer0|scroll_right|offsettimerinit|through|sessid|panel|vast_postrolltbimp|valuepaddingleft|vast_postroll_counter|vast_playroll_limit|autoplaynomobiletv|TimeStore|vast_midrolltbimp|vast_linktxtbgcolor|PluginQuiz|vast_linktxtcolor|mouseenter|vast_skipcolor|vast_skipbgcolor|vast_introtbimp|quizes|scroll_up|startvisibility|PluginMini|scrollWidth|vast_introtimebreak|PluginBlock|vast_midroll_vmap|PluginRounding|clr_|introtitle|hlsqhsort|introtxt|default_channel|pjslng_|home|pjslng_sub_sizeproc|introclosetime|layerX|seeksidesmob|f2parent|introskiptime|offsetX|introclickable|minivis|fimg|change2playlist_bottom|sub_settings|hidearrow|speed4live|Logo|current_channel|sleep2options|sleepoptions|accept|onchange|f2img|pressed_|offsetoptions|current_|nfsclios|nfscldr|4bd9ac|vpaid_slotinframe|b3fee8|d9bb8c|eventstrackervast|aaaaaa|vast_resound|FEF370|vpaid_timeout|644082||vpaid_timeout2|409829|D90000|073DA0|ffc7d1|e8bbff|125|partnerpauserollor|partnerpostrollor|redirectplaylist|midrollpoint|partnermidrollor|175|250|partnerprerollor|feba54|faed54|62de50|passonstart|72ccf8|vast_postrolltimebreak|playback|88484718|html5|disablekb|playerapiid|enablejsapi|videoId|playerVars|poster_floatwidth|playsinlineonmobileiphone|modestbranding|onReady|showinfo|iv_load_policy|poster_floatposition|poster_floatmargin|allowLinker|poster_floatheight|dashdebug|16x9|word|container_w_procent|35px|select|Orientation|ytcl1|require|API|youtube_iframe_api|onYouTubeIframeAPIReady|poster_floatbgcolor|autoLink|onStateChange|onPlaybackQualityChange|getAvailableQualityLevels|getPlaybackQuality|settings1action|settings2action|customyterrors|answer|settings1|emptyremove|large|hd720|medium|tiny|pljscom|setSize|unavailable|settings3|ytEnded|settings5action|ytlog|getDate|srvsga|ytReady|settings5|settings4action|CUED|ytError|settings3action|settings4|Cross|BUFFERING|dashcookies|07|uppercase|vast_pauseonclick|99999|vast_closeonclick|vast_volume|rmright|always2|dropnohide|ContextMenu|oncontextmenu|rc_custom|contains|hidesmoothly|rc_nobrand|vast_title|vast_preroll_limit|paddingbottom|vast_pauseroll_counter||marginRight|5em|vast_postroll_limit|actn|vast_pauserolltbimp|15em|vast_prerolltimebreak|vast_preroll_andlimit|vast_prerolltbimp|vast_preroll_counter|vast_pauserolltimebreak|vast_pauseroll_limit|vast_timeout|PluginDroplist|vast_click|vast_skip|indent|offsetTop|visited|outline|origin|manipulation|dashlowquality|transbg|oframe|backface|errortimeout|nameofdashquality|vast_impression|hover||observe|embedwidth|560|embedheight|160|childList|embedsize|shareiconmargin|ga_proc|shuffle8|sharetitle|sharetop|shareiconscaleover|shareiconscale|titlecolor|Medium|to_right|VpaidStarted|VastShow|VastImpression|bgload|skipimprsd|skipimpessed|bgload2|noset|nativemobile|vastbgpreload|tagLive|ndash||VastOverlay|vast_ready|showvolmobile|VastReady|crtm|marginprocright|issue|combined|ssdown|crossdomain|PluginSettings2|hideonleaveandplay|resize2|customTextPl|bezier|ssfly|customwidth|yandex|vast_init|3600000|02|seektome||isOn|renew|customspeeds|setWsQuality|vast_stop|setAudio|setWsAudioTrack||level|VastInsertOr|fillvideo|getDash|exitPictureInPicture|requestPictureInPicture|webkitSupportsPresentationMode|webkitShowPlaybackTargetPicker|vast_finish|pictureInPictureEnabled|disablePictureInPicture|pictureInPictureElement|webkitPresentationMode|HlsSubTrack|subtrack|vast_error|VastRemoveUrl|reset|VastError|alarm|PluginVastTimeMsg|startdelay|vast_startdelay|and2limit|dashInterval|VastInsertAnd|childNodes|playbackRate|disablePreload|preloading|Next|kind|hidelap|hideall|AdBlock|showduration|Resume|showboth|PluginStat|PluginWater|pjsstat|pjsstatid|pauseonhover|pdf|Open|cast_available|downself|dontseekforward|Visible|01|Progress|wid|water|showfrom1file|ShowSettingsBut|maxHeight|enter|openlast|const|scrollY|redirectblank|sess|autoplayed|heartbeats|buffering|separator|isOpen|SettingsTimer|nativenotandroid|nativeontv|_self|pjs_cast_button_|hideonvar|hide0timestore|outros|fileend|pjsiframed|hideuntiltext|reloadjustevent|reloadplus|webkitSupportsFullscreen|hideafterstart|webkitExitFullscreen|OpenScroll|wheelDelta|webkitendfullscreen|webkitEnterFullScreen|hideonmobile|hideondesktop|hidewovar|writePl|hidenomini|hidemini|hideonmeta|reloadstart|hidenoab|hideonyoutube|toUpperCase|hideonlive|hideonunmute|hideonvod|hideuntilended|hideuntilstartedios|hideonleave|PasswordTime|nooverlay|hidenormscreen|webkitcurrentplaybacktargetiswirelesschanged|vast_ima|1920|1080|2560|flussonic|720|480|PlugMediaChannels|1280|1440|3840|eng|English|rus|nativehlsinedge|customqualities|2160|support|854|DASH|withCredentials|xhrSetup|capLevelToPlayerSize|attachMedia|MEDIA_ATTACHED|MANIFEST_PARSED|MANIFEST_LOADED|attached|hlscltps|enableWorker|autoStartLoad|426|240|manifestLoadingTimeOut|qualitypause|fragLoadingTimeOut|Quality|nativehlsios|nativehlsinsafari|dragging|scaledrag|hqdefault|New|error_time|mp4|PluginFloatPoster|urlmse|createposter|0001|MediaPjs|MediaDaily|RemoveAll|MediaVimeo|Image|dailymotion|nomedia|codecs|avc1|nodownload|controlsList|nativenodownload|taginframe|Audiotrack|Speed|complete|ynxnopip|FloatPosterScale|tagcors|mp4a|42E01E|crossorigin|crossOrigin|drunchr|rldnornd|Seeking|LEVEL_SWITCH|firstLevel|hlsaddbitrate|appendBuffer|AudioTrack|Infinity|RemovePassword|playtry|2000px|norootplstart|WebKitSourceBuffer|Destroyed|winmob|onpause|ontime|wake|WebKitMediaSource|finishnormal|Pass|playError|disabled|destination|vast_dontplay|enabled|WebKitPlaybackTargetAvailabilityEvent|available|availability|webkitplaybacktargetavailabilitychanged|createGain|createMediaElementSource|playError2|automute|interrupted|autoplay_denied|hlsforce|EmptyVastUrl|webkitAudioContext|Video|dvtp|AUDIO_TRACKS_UPDATED|fragdata|FRAG_PARSING_METADATA|AUDIO_TRACK_SWITCHING|hlssubtracks|ERROR|subtitleDisplay|PluginHlsSubtitles|reloadtimes|relurl|Live|LEVEL_LOADED|LEVEL_SWITCHED|tags|FRAG_CHANGED|Break|fragment|NETWORK_ERROR|MEDIA_ERROR|sleep|playlists|PluginWS|watching|loadstart|aborted|loadeddata|EXTINF|regress|tryotherquality|recoverMediaError|Alternative|loaderror|YoutubePlaylist|Level|hls_error|globalfont|hideab|triangle|nonInteraction|playerjs_hit|watch|capiom|gainact|control_mute|180|googleapis|timeplay|volume_element|eventlisteners|jpeg|rewound|vast_Impression|ontop2|adShown|unmuted|resumed|head|circle|MarPad|link2|tippointeralign|Metric|iconspress|midroll_time|the|advertiser|103|104|108|107|fix|105|Active|castinit|Enter|slider|300000|stylesheet|touch_|switchpip|website|Audio|LIVE|midrollcrtm|flipy|encode|45deg|updateCuid|Boolean|tipmarginright||tipmarginleft|vastbreak|1000000|startvast|prt|scale0|unfix|repeating|moveplaylist|NaNpx|tipmargintop|rgb|isfullscreen|tipmarginbottom|number|encodeURIComponent|same|setProperty|async|ontouchend|indOf|PluginHdIcon|control_time|vpaid_|VpaidSet|youtubeid|toogle||createEvent|initEvent|dispatchEvent|flipx|Href|reduce|nodeName|FindPjsDiv|SVG|cssText|dwn|PJSDIV||substring|Test|arguments|_text|109|106|currentfile|fillStyle|vrsn|bufferDeg|Bottom|bgline2|vastmute|vastresume|vaststart|startAd|bufferInterval|191|192|PluginCountdown|getVolume|Font|Shadow|bgline1|counter|aload|2048|127|countdown|vastpause|Yes|189|toDataURL|once|Sleep|All|valuepaddingtop|invert|pageXOffset|valuepaddingbottom|187|playlist_folders|clickmarginright|showplaylist|vastnow|vastinfo|Skip|clickmarginleft|rotateonclick|colorover|fillText|playlist_length|rotateonhover|lines1|vastids|110|Small|Created|Full|0123456789|112|113|clipboard|Tiny|1296p|Super|running|Courier|sscopyright|Arial|_bg|filetype|Quad|Ultra|114|111|adsystem|Copied|Reset|115|bglines|alphas|Previous|vpaid|121|122|wrapper0|116|abg|117|118|119'.split(
      '|',
    ),
    0,
    {},
  ),
);
'undefined' != typeof window &&
  (function (t, e) {
    'object' == typeof exports && 'object' == typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define([], e)
      : 'object' == typeof exports
      ? (exports.Hls = e())
      : (t.Hls = e());
  })(this, function () {
    return (function (t) {
      var e = {};
      function r(i) {
        if (e[i]) return e[i].exports;
        var n = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
      }
      return (
        (r.m = t),
        (r.c = e),
        (r.d = function (t, e, i) {
          r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (r.r = function (t) {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 });
        }),
        (r.t = function (t, e) {
          if ((1 & e && (t = r(t)), 8 & e)) return t;
          if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
          var i = Object.create(null);
          if (
            (r.r(i),
            Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
            2 & e && 'string' != typeof t)
          )
            for (var n in t)
              r.d(
                i,
                n,
                function (e) {
                  return t[e];
                }.bind(null, n),
              );
          return i;
        }),
        (r.n = function (t) {
          var e =
            t && t.__esModule
              ? function () {
                  return t.default;
                }
              : function () {
                  return t;
                };
          return r.d(e, 'a', e), e;
        }),
        (r.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (r.p = '/dist/'),
        r((r.s = 20))
      );
    })([
      function (t, e, r) {
        'use strict';
        var i;
        r.d(e, 'a', function () {
          return i;
        }),
          (function (t) {
            (t.MEDIA_ATTACHING = 'hlsMediaAttaching'),
              (t.MEDIA_ATTACHED = 'hlsMediaAttached'),
              (t.MEDIA_DETACHING = 'hlsMediaDetaching'),
              (t.MEDIA_DETACHED = 'hlsMediaDetached'),
              (t.BUFFER_RESET = 'hlsBufferReset'),
              (t.BUFFER_CODECS = 'hlsBufferCodecs'),
              (t.BUFFER_CREATED = 'hlsBufferCreated'),
              (t.BUFFER_APPENDING = 'hlsBufferAppending'),
              (t.BUFFER_APPENDED = 'hlsBufferAppended'),
              (t.BUFFER_EOS = 'hlsBufferEos'),
              (t.BUFFER_FLUSHING = 'hlsBufferFlushing'),
              (t.BUFFER_FLUSHED = 'hlsBufferFlushed'),
              (t.MANIFEST_LOADING = 'hlsManifestLoading'),
              (t.MANIFEST_LOADED = 'hlsManifestLoaded'),
              (t.MANIFEST_PARSED = 'hlsManifestParsed'),
              (t.LEVEL_SWITCHING = 'hlsLevelSwitching'),
              (t.LEVEL_SWITCHED = 'hlsLevelSwitched'),
              (t.LEVEL_LOADING = 'hlsLevelLoading'),
              (t.LEVEL_LOADED = 'hlsLevelLoaded'),
              (t.LEVEL_UPDATED = 'hlsLevelUpdated'),
              (t.LEVEL_PTS_UPDATED = 'hlsLevelPtsUpdated'),
              (t.LEVELS_UPDATED = 'hlsLevelsUpdated'),
              (t.AUDIO_TRACKS_UPDATED = 'hlsAudioTracksUpdated'),
              (t.AUDIO_TRACK_SWITCHING = 'hlsAudioTrackSwitching'),
              (t.AUDIO_TRACK_SWITCHED = 'hlsAudioTrackSwitched'),
              (t.AUDIO_TRACK_LOADING = 'hlsAudioTrackLoading'),
              (t.AUDIO_TRACK_LOADED = 'hlsAudioTrackLoaded'),
              (t.SUBTITLE_TRACKS_UPDATED = 'hlsSubtitleTracksUpdated'),
              (t.SUBTITLE_TRACKS_CLEARED = 'hlsSubtitleTracksCleared'),
              (t.SUBTITLE_TRACK_SWITCH = 'hlsSubtitleTrackSwitch'),
              (t.SUBTITLE_TRACK_LOADING = 'hlsSubtitleTrackLoading'),
              (t.SUBTITLE_TRACK_LOADED = 'hlsSubtitleTrackLoaded'),
              (t.SUBTITLE_FRAG_PROCESSED = 'hlsSubtitleFragProcessed'),
              (t.CUES_PARSED = 'hlsCuesParsed'),
              (t.NON_NATIVE_TEXT_TRACKS_FOUND = 'hlsNonNativeTextTracksFound'),
              (t.INIT_PTS_FOUND = 'hlsInitPtsFound'),
              (t.FRAG_LOADING = 'hlsFragLoading'),
              (t.FRAG_LOAD_EMERGENCY_ABORTED = 'hlsFragLoadEmergencyAborted'),
              (t.FRAG_LOADED = 'hlsFragLoaded'),
              (t.FRAG_DECRYPTED = 'hlsFragDecrypted'),
              (t.FRAG_PARSING_INIT_SEGMENT = 'hlsFragParsingInitSegment'),
              (t.FRAG_PARSING_USERDATA = 'hlsFragParsingUserdata'),
              (t.FRAG_PARSING_METADATA = 'hlsFragParsingMetadata'),
              (t.FRAG_PARSED = 'hlsFragParsed'),
              (t.FRAG_BUFFERED = 'hlsFragBuffered'),
              (t.FRAG_CHANGED = 'hlsFragChanged'),
              (t.FPS_DROP = 'hlsFpsDrop'),
              (t.FPS_DROP_LEVEL_CAPPING = 'hlsFpsDropLevelCapping'),
              (t.ERROR = 'hlsError'),
              (t.DESTROYING = 'hlsDestroying'),
              (t.KEY_LOADING = 'hlsKeyLoading'),
              (t.KEY_LOADED = 'hlsKeyLoaded'),
              (t.LIVE_BACK_BUFFER_REACHED = 'hlsLiveBackBufferReached'),
              (t.BACK_BUFFER_REACHED = 'hlsBackBufferReached');
          })(i || (i = {}));
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return o;
        }),
          r.d(e, 'b', function () {
            return l;
          });
        var i = function () {},
          n = { trace: i, debug: i, log: i, warn: i, info: i, error: i },
          a = n;
        function s(t) {
          var e = self.console[t];
          return e ? e.bind(self.console, '[' + t + '] >') : i;
        }
        function o(t) {
          if ((self.console && !0 === t) || 'object' == typeof t) {
            !(function (t) {
              for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                r[i - 1] = arguments[i];
              r.forEach(function (e) {
                a[e] = t[e] ? t[e].bind(t) : s(e);
              });
            })(t, 'debug', 'log', 'info', 'warn', 'error');
            try {
              a.log();
            } catch (t) {
              a = n;
            }
          } else a = n;
        }
        var l = n;
      },
      function (t, e, r) {
        'use strict';
        var i, n;
        r.d(e, 'b', function () {
          return i;
        }),
          r.d(e, 'a', function () {
            return n;
          }),
          (function (t) {
            (t.NETWORK_ERROR = 'networkError'),
              (t.MEDIA_ERROR = 'mediaError'),
              (t.KEY_SYSTEM_ERROR = 'keySystemError'),
              (t.MUX_ERROR = 'muxError'),
              (t.OTHER_ERROR = 'otherError');
          })(i || (i = {})),
          (function (t) {
            (t.KEY_SYSTEM_NO_KEYS = 'keySystemNoKeys'),
              (t.KEY_SYSTEM_NO_ACCESS = 'keySystemNoAccess'),
              (t.KEY_SYSTEM_NO_SESSION = 'keySystemNoSession'),
              (t.KEY_SYSTEM_LICENSE_REQUEST_FAILED = 'keySystemLicenseRequestFailed'),
              (t.KEY_SYSTEM_NO_INIT_DATA = 'keySystemNoInitData'),
              (t.MANIFEST_LOAD_ERROR = 'manifestLoadError'),
              (t.MANIFEST_LOAD_TIMEOUT = 'manifestLoadTimeOut'),
              (t.MANIFEST_PARSING_ERROR = 'manifestParsingError'),
              (t.MANIFEST_INCOMPATIBLE_CODECS_ERROR = 'manifestIncompatibleCodecsError'),
              (t.LEVEL_EMPTY_ERROR = 'levelEmptyError'),
              (t.LEVEL_LOAD_ERROR = 'levelLoadError'),
              (t.LEVEL_LOAD_TIMEOUT = 'levelLoadTimeOut'),
              (t.LEVEL_SWITCH_ERROR = 'levelSwitchError'),
              (t.AUDIO_TRACK_LOAD_ERROR = 'audioTrackLoadError'),
              (t.AUDIO_TRACK_LOAD_TIMEOUT = 'audioTrackLoadTimeOut'),
              (t.SUBTITLE_LOAD_ERROR = 'subtitleTrackLoadError'),
              (t.SUBTITLE_TRACK_LOAD_TIMEOUT = 'subtitleTrackLoadTimeOut'),
              (t.FRAG_LOAD_ERROR = 'fragLoadError'),
              (t.FRAG_LOAD_TIMEOUT = 'fragLoadTimeOut'),
              (t.FRAG_DECRYPT_ERROR = 'fragDecryptError'),
              (t.FRAG_PARSING_ERROR = 'fragParsingError'),
              (t.REMUX_ALLOC_ERROR = 'remuxAllocError'),
              (t.KEY_LOAD_ERROR = 'keyLoadError'),
              (t.KEY_LOAD_TIMEOUT = 'keyLoadTimeOut'),
              (t.BUFFER_ADD_CODEC_ERROR = 'bufferAddCodecError'),
              (t.BUFFER_INCOMPATIBLE_CODECS_ERROR = 'bufferIncompatibleCodecsError'),
              (t.BUFFER_APPEND_ERROR = 'bufferAppendError'),
              (t.BUFFER_APPENDING_ERROR = 'bufferAppendingError'),
              (t.BUFFER_STALLED_ERROR = 'bufferStalledError'),
              (t.BUFFER_FULL_ERROR = 'bufferFullError'),
              (t.BUFFER_SEEK_OVER_HOLE = 'bufferSeekOverHole'),
              (t.BUFFER_NUDGE_ON_STALL = 'bufferNudgeOnStall'),
              (t.INTERNAL_EXCEPTION = 'internalException'),
              (t.INTERNAL_ABORTED = 'aborted'),
              (t.UNKNOWN = 'unknown');
          })(n || (n = {}));
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return i;
        });
        var i =
          Number.isFinite ||
          function (t) {
            return 'number' == typeof t && isFinite(t);
          };
        Number.MAX_SAFE_INTEGER;
      },
      function (t, e, r) {
        'use strict';
        var i, n;
        r.d(e, 'a', function () {
          return i;
        }),
          r.d(e, 'b', function () {
            return n;
          }),
          (function (t) {
            (t.MANIFEST = 'manifest'),
              (t.LEVEL = 'level'),
              (t.AUDIO_TRACK = 'audioTrack'),
              (t.SUBTITLE_TRACK = 'subtitleTrack');
          })(i || (i = {})),
          (function (t) {
            (t.MAIN = 'main'), (t.AUDIO = 'audio'), (t.SUBTITLE = 'subtitle');
          })(n || (n = {}));
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return i;
        }),
          r.d(e, 'b', function () {
            return g;
          }),
          r.d(e, 'c', function () {
            return v;
          });
        var i,
          n = r(3),
          a = r(11),
          s = r(1),
          o = r(17),
          l = r(12);
        function u(t, e) {
          (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), h(t, e);
        }
        function h(t, e) {
          return (h =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function d(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function c(t, e, r) {
          return e && d(t.prototype, e), r && d(t, r), t;
        }
        !(function (t) {
          (t.AUDIO = 'audio'), (t.VIDEO = 'video'), (t.AUDIOVIDEO = 'audiovideo');
        })(i || (i = {}));
        var f = (function () {
            function t(t) {
              var e;
              (this._byteRange = null),
                (this._url = null),
                (this.baseurl = void 0),
                (this.relurl = void 0),
                (this.elementaryStreams =
                  (((e = {})[i.AUDIO] = null), (e[i.VIDEO] = null), (e[i.AUDIOVIDEO] = null), e)),
                (this.baseurl = t);
            }
            return (
              (t.prototype.setByteRange = function (t, e) {
                var r = t.split('@', 2),
                  i = [];
                1 === r.length ? (i[0] = e ? e.byteRangeEndOffset : 0) : (i[0] = parseInt(r[1])),
                  (i[1] = parseInt(r[0]) + i[0]),
                  (this._byteRange = i);
              }),
              c(t, [
                {
                  key: 'byteRange',
                  get: function () {
                    return this._byteRange ? this._byteRange : [];
                  },
                },
                {
                  key: 'byteRangeStartOffset',
                  get: function () {
                    return this.byteRange[0];
                  },
                },
                {
                  key: 'byteRangeEndOffset',
                  get: function () {
                    return this.byteRange[1];
                  },
                },
                {
                  key: 'url',
                  get: function () {
                    return (
                      !this._url &&
                        this.baseurl &&
                        this.relurl &&
                        (this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                          alwaysNormalize: !0,
                        })),
                      this._url || ''
                    );
                  },
                  set: function (t) {
                    this._url = t;
                  },
                },
              ]),
              t
            );
          })(),
          g = (function (t) {
            function e(e, r) {
              var i;
              return (
                ((i = t.call(this, r) || this)._decryptdata = null),
                (i.rawProgramDateTime = null),
                (i.programDateTime = null),
                (i.tagList = []),
                (i.duration = 0),
                (i.sn = 0),
                (i.levelkey = void 0),
                (i.type = void 0),
                (i.loader = null),
                (i.level = -1),
                (i.cc = 0),
                (i.startPTS = void 0),
                (i.endPTS = void 0),
                (i.appendedPTS = void 0),
                (i.startDTS = void 0),
                (i.endDTS = void 0),
                (i.start = 0),
                (i.deltaPTS = void 0),
                (i.maxStartPTS = void 0),
                (i.minEndPTS = void 0),
                (i.stats = new l.a()),
                (i.urlId = 0),
                (i.data = void 0),
                (i.bitrateTest = !1),
                (i.title = null),
                (i.initSegment = null),
                (i.type = e),
                i
              );
            }
            u(e, t);
            var r = e.prototype;
            return (
              (r.createInitializationVector = function (t) {
                for (var e = new Uint8Array(16), r = 12; r < 16; r++)
                  e[r] = (t >> (8 * (15 - r))) & 255;
                return e;
              }),
              (r.setDecryptDataFromLevelKey = function (t, e) {
                var r = t;
                return (
                  'AES-128' === (null == t ? void 0 : t.method) &&
                    t.uri &&
                    !t.iv &&
                    (((r = o.a.fromURI(t.uri)).method = t.method),
                    (r.iv = this.createInitializationVector(e)),
                    (r.keyFormat = 'identity')),
                  r
                );
              }),
              (r.setElementaryStreamInfo = function (t, e, r, i, n, a) {
                void 0 === a && (a = !1);
                var s = this.elementaryStreams,
                  o = s[t];
                o
                  ? ((o.startPTS = Math.min(o.startPTS, e)),
                    (o.endPTS = Math.max(o.endPTS, r)),
                    (o.startDTS = Math.min(o.startDTS, i)),
                    (o.endDTS = Math.max(o.endDTS, n)))
                  : (s[t] = { startPTS: e, endPTS: r, startDTS: i, endDTS: n, partial: a });
              }),
              (r.clearElementaryStreamInfo = function () {
                var t = this.elementaryStreams;
                (t[i.AUDIO] = null), (t[i.VIDEO] = null), (t[i.AUDIOVIDEO] = null);
              }),
              c(e, [
                {
                  key: 'decryptdata',
                  get: function () {
                    if (!this.levelkey && !this._decryptdata) return null;
                    if (!this._decryptdata && this.levelkey) {
                      var t = this.sn;
                      'number' != typeof t &&
                        (this.levelkey &&
                          'AES-128' === this.levelkey.method &&
                          !this.levelkey.iv &&
                          s.b.warn(
                            'missing IV for initialization segment with method="' +
                              this.levelkey.method +
                              '" - compliance issue',
                          ),
                        (t = 0)),
                        (this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t));
                    }
                    return this._decryptdata;
                  },
                },
                {
                  key: 'end',
                  get: function () {
                    return this.start + this.duration;
                  },
                },
                {
                  key: 'endProgramDateTime',
                  get: function () {
                    if (null === this.programDateTime) return null;
                    if (!Object(n.a)(this.programDateTime)) return null;
                    var t = Object(n.a)(this.duration) ? this.duration : 0;
                    return this.programDateTime + 1e3 * t;
                  },
                },
                {
                  key: 'encrypted',
                  get: function () {
                    var t;
                    return !(
                      null === (t = this.decryptdata) ||
                      void 0 === t ||
                      !t.keyFormat ||
                      !this.decryptdata.uri
                    );
                  },
                },
              ]),
              e
            );
          })(f),
          v = (function (t) {
            function e(e, r, i, n, a) {
              var s;
              ((s = t.call(this, i) || this).fragOffset = 0),
                (s.duration = 0),
                (s.gap = !1),
                (s.independent = !1),
                (s.relurl = void 0),
                (s.fragment = void 0),
                (s.index = void 0),
                (s.stats = new l.a()),
                (s.duration = e.decimalFloatingPoint('DURATION')),
                (s.gap = e.bool('GAP')),
                (s.independent = e.bool('INDEPENDENT')),
                (s.relurl = e.enumeratedString('URI')),
                (s.fragment = r),
                (s.index = n);
              var o = e.enumeratedString('BYTERANGE');
              return o && s.setByteRange(o, a), a && (s.fragOffset = a.fragOffset + a.duration), s;
            }
            return (
              u(e, t),
              c(e, [
                {
                  key: 'start',
                  get: function () {
                    return this.fragment.start + this.fragOffset;
                  },
                },
                {
                  key: 'end',
                  get: function () {
                    return this.start + this.duration;
                  },
                },
                {
                  key: 'loaded',
                  get: function () {
                    var t = this.elementaryStreams;
                    return !!(t.audio || t.video || t.audiovideo);
                  },
                },
              ]),
              e
            );
          })(f);
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'b', function () {
          return h;
        }),
          r.d(e, 'g', function () {
            return d;
          }),
          r.d(e, 'f', function () {
            return c;
          }),
          r.d(e, 'd', function () {
            return f;
          }),
          r.d(e, 'c', function () {
            return g;
          }),
          r.d(e, 'e', function () {
            return p;
          }),
          r.d(e, 'h', function () {
            return m;
          }),
          r.d(e, 'a', function () {
            return y;
          });
        var i = r(9),
          n = r(5),
          a = Math.pow(2, 32) - 1,
          s = [].push;
        function o(t) {
          return String.fromCharCode.apply(null, t);
        }
        function l(t, e) {
          'data' in t && ((e += t.start), (t = t.data));
          var r = (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3];
          return r < 0 ? 4294967296 + r : r;
        }
        function u(t, e, r) {
          'data' in t && ((e += t.start), (t = t.data)),
            (t[e] = r >> 24),
            (t[e + 1] = (r >> 16) & 255),
            (t[e + 2] = (r >> 8) & 255),
            (t[e + 3] = 255 & r);
        }
        function h(t, e) {
          var r,
            i,
            n,
            a = [];
          if (!e.length) return a;
          'data' in t
            ? ((r = t.data), (i = t.start), (n = t.end))
            : ((i = 0), (n = (r = t).byteLength));
          for (var u = i; u < n; ) {
            var d = l(r, u),
              c = d > 1 ? u + d : n;
            if (o(r.subarray(u + 4, u + 8)) === e[0])
              if (1 === e.length) a.push({ data: r, start: u + 8, end: c });
              else {
                var f = h({ data: r, start: u + 8, end: c }, e.slice(1));
                f.length && s.apply(a, f);
              }
            u = c;
          }
          return a;
        }
        function d(t) {
          var e = h(t, ['moov'])[0],
            r = e ? e.end : null,
            i = h(t, ['sidx']);
          if (!i || !i[0]) return null;
          var n = [],
            a = i[0],
            s = a.data[0],
            o = 0 === s ? 8 : 16,
            u = l(a, o);
          o += 4;
          (o += 0 === s ? 8 : 16), (o += 2);
          var d = a.end + 0,
            c = (function (t, e) {
              'data' in t && ((e += t.start), (t = t.data));
              var r = (t[e] << 8) | t[e + 1];
              return r < 0 ? 65536 + r : r;
            })(a, o);
          o += 2;
          for (var f = 0; f < c; f++) {
            var g = o,
              v = l(a, g);
            g += 4;
            var p = 2147483647 & v;
            if (1 === (2147483648 & v) >>> 31)
              return console.warn('SIDX has hierarchical references (not supported)'), null;
            var m = l(a, g);
            (g += 4),
              n.push({
                referenceSize: p,
                subsegmentDuration: m,
                info: { duration: m / u, start: d, end: d + p - 1 },
              }),
              (d += p),
              (o = g += 4);
          }
          return {
            earliestPresentationTime: 0,
            timescale: u,
            version: s,
            referencesCount: c,
            references: n,
            moovEndOffset: r,
          };
        }
        function c(t) {
          for (var e = [], r = h(t, ['moov', 'trak']), i = 0; i < r.length; i++) {
            var a = r[i],
              s = h(a, ['tkhd'])[0];
            if (s) {
              var u = s.data[s.start],
                d = 0 === u ? 12 : 20,
                c = l(s, d),
                f = h(a, ['mdia', 'mdhd'])[0];
              if (f) {
                var g = l(f, (d = 0 === (u = f.data[f.start]) ? 12 : 20)),
                  v = h(a, ['mdia', 'hdlr'])[0];
                if (v) {
                  var p = o(v.data.subarray(v.start + 8, v.start + 12)),
                    m = { soun: n.a.AUDIO, vide: n.a.VIDEO }[p];
                  if (m) {
                    var y = h(a, ['mdia', 'minf', 'stbl', 'stsd'])[0],
                      T = void 0;
                    y && (T = o(y.data.subarray(y.start + 12, y.start + 16))),
                      (e[c] = { timescale: g, type: m }),
                      (e[m] = { timescale: g, id: c, codec: T });
                  }
                }
              }
            }
          }
          return (
            h(t, ['moov', 'mvex', 'trex']).forEach(function (t) {
              var r = l(t, 4),
                i = e[r];
              i && (i.default = { duration: l(t, 12), flags: l(t, 20) });
            }),
            e
          );
        }
        function f(t, e) {
          return (
            h(e, ['moof', 'traf']).reduce(function (e, r) {
              var i = h(r, ['tfdt'])[0],
                n = i.data[i.start],
                a = h(r, ['tfhd']).reduce(function (e, r) {
                  var a = l(r, 4),
                    s = t[a];
                  if (s) {
                    var o = l(i, 4);
                    1 === n && ((o *= Math.pow(2, 32)), (o += l(i, 8)));
                    var u = o / (s.timescale || 9e4);
                    if (isFinite(u) && (null === e || u < e)) return u;
                  }
                  return e;
                }, null);
              return null !== a && isFinite(a) && (null === e || a < e) ? a : e;
            }, null) || 0
          );
        }
        function g(t, e) {
          for (var r = 0, i = 0, a = 0, s = h(t, ['moof', 'traf']), o = 0; o < s.length; o++) {
            var u = s[o],
              c = h(u, ['tfhd'])[0],
              f = e[l(c, 4)];
            if (f) {
              var g = f.default,
                p = l(c, 0) | (null == g ? void 0 : g.flags),
                m = null == g ? void 0 : g.duration;
              8 & p && (m = l(c, 2 & p ? 12 : 8));
              for (var y = f.timescale || 9e4, T = h(u, ['trun']), b = 0; b < T.length; b++) {
                if (m) r = m * l(T[b], 4);
                else r = v(T[b]);
                f.type === n.a.VIDEO ? (i += r / y) : f.type === n.a.AUDIO && (a += r / y);
              }
            }
          }
          if (0 === i && 0 === a) {
            var E = d(t);
            if (null != E && E.references)
              return E.references.reduce(function (t, e) {
                return t + e.info.duration || 0;
              }, 0);
          }
          return i || a;
        }
        function v(t) {
          var e = l(t, 0),
            r = 8;
          1 & e && (r += 4), 4 & e && (r += 4);
          for (var i = 0, n = l(t, 4), a = 0; a < n; a++) {
            if (256 & e) (i += l(t, r)), (r += 4);
            512 & e && (r += 4), 1024 & e && (r += 4), 2048 & e && (r += 4);
          }
          return i;
        }
        function p(t, e, r) {
          h(e, ['moof', 'traf']).forEach(function (e) {
            h(e, ['tfhd']).forEach(function (i) {
              var n = l(i, 4),
                s = t[n];
              if (s) {
                var o = s.timescale || 9e4;
                h(e, ['tfdt']).forEach(function (t) {
                  var e = t.data[t.start],
                    i = l(t, 4);
                  if (0 === e) u(t, 4, i - r * o);
                  else {
                    (i *= Math.pow(2, 32)), (i += l(t, 8)), (i -= r * o), (i = Math.max(i, 0));
                    var n = Math.floor(i / (a + 1)),
                      s = Math.floor(i % (a + 1));
                    u(t, 4, n), u(t, 8, s);
                  }
                });
              }
            });
          });
        }
        function m(t) {
          var e = { valid: null, remainder: null },
            r = h(t, ['moof']);
          if (!r) return e;
          if (r.length < 2) return (e.remainder = t), e;
          var n = r[r.length - 1];
          return (
            (e.valid = Object(i.a)(t, 0, n.start - 8)),
            (e.remainder = Object(i.a)(t, n.start - 8)),
            e
          );
        }
        function y(t, e) {
          var r = new Uint8Array(t.length + e.length);
          return r.set(t), r.set(e, t.length), r;
        }
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'b', function () {
          return s;
        }),
          r.d(e, 'a', function () {
            return l;
          }),
          r.d(e, 'd', function () {
            return u;
          }),
          r.d(e, 'e', function () {
            return h;
          }),
          r.d(e, 'c', function () {
            return c;
          }),
          r.d(e, 'f', function () {
            return y;
          });
        var i,
          n = function (t, e) {
            return (
              e + 10 <= t.length &&
              73 === t[e] &&
              68 === t[e + 1] &&
              51 === t[e + 2] &&
              t[e + 3] < 255 &&
              t[e + 4] < 255 &&
              t[e + 6] < 128 &&
              t[e + 7] < 128 &&
              t[e + 8] < 128 &&
              t[e + 9] < 128
            );
          },
          a = function (t, e) {
            return (
              e + 10 <= t.length &&
              51 === t[e] &&
              68 === t[e + 1] &&
              73 === t[e + 2] &&
              t[e + 3] < 255 &&
              t[e + 4] < 255 &&
              t[e + 6] < 128 &&
              t[e + 7] < 128 &&
              t[e + 8] < 128 &&
              t[e + 9] < 128
            );
          },
          s = function (t, e) {
            for (var r = e, i = 0; n(t, e); ) {
              (i += 10), (i += o(t, e + 6)), a(t, e + 10) && (i += 10), (e += i);
            }
            if (i > 0) return t.subarray(r, r + i);
          },
          o = function (t, e) {
            var r = 0;
            return (
              (r = (127 & t[e]) << 21),
              (r |= (127 & t[e + 1]) << 14),
              (r |= (127 & t[e + 2]) << 7),
              (r |= 127 & t[e + 3])
            );
          },
          l = function (t, e) {
            return n(t, e) && o(t, e + 6) + 10 <= t.length - e;
          },
          u = function (t) {
            for (var e = c(t), r = 0; r < e.length; r++) {
              var i = e[r];
              if (h(i)) return m(i);
            }
          },
          h = function (t) {
            return (
              t && 'PRIV' === t.key && 'com.apple.streaming.transportStreamTimestamp' === t.info
            );
          },
          d = function (t) {
            var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
              r = o(t, 4);
            return { type: e, size: r, data: t.subarray(10, 10 + r) };
          },
          c = function (t) {
            for (var e = 0, r = []; n(t, e); ) {
              for (var i = o(t, e + 6), s = (e += 10) + i; e + 8 < s; ) {
                var l = d(t.subarray(e)),
                  u = f(l);
                u && r.push(u), (e += l.size + 10);
              }
              a(t, e) && (e += 10);
            }
            return r;
          },
          f = function (t) {
            return 'PRIV' === t.type ? g(t) : 'W' === t.type[0] ? p(t) : v(t);
          },
          g = function (t) {
            if (!(t.size < 2)) {
              var e = y(t.data, !0),
                r = new Uint8Array(t.data.subarray(e.length + 1));
              return { key: t.type, info: e, data: r.buffer };
            }
          },
          v = function (t) {
            if (!(t.size < 2)) {
              if ('TXXX' === t.type) {
                var e = 1,
                  r = y(t.data.subarray(e), !0);
                e += r.length + 1;
                var i = y(t.data.subarray(e));
                return { key: t.type, info: r, data: i };
              }
              var n = y(t.data.subarray(1));
              return { key: t.type, data: n };
            }
          },
          p = function (t) {
            if ('WXXX' === t.type) {
              if (t.size < 2) return;
              var e = 1,
                r = y(t.data.subarray(e), !0);
              e += r.length + 1;
              var i = y(t.data.subarray(e));
              return { key: t.type, info: r, data: i };
            }
            var n = y(t.data);
            return { key: t.type, data: n };
          },
          m = function (t) {
            if (8 === t.data.byteLength) {
              var e = new Uint8Array(t.data),
                r = 1 & e[3],
                i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
              return (i /= 45), r && (i += 47721858.84), Math.round(i);
            }
          },
          y = function (t, e) {
            void 0 === e && (e = !1);
            var r = T();
            if (r) {
              var i = r.decode(t);
              if (e) {
                var n = i.indexOf('\0');
                return -1 !== n ? i.substring(0, n) : i;
              }
              return i.replace(/\0/g, '');
            }
            for (var a, s, o, l = t.length, u = '', h = 0; h < l; ) {
              if (0 === (a = t[h++]) && e) return u;
              if (0 !== a && 3 !== a)
                switch (a >> 4) {
                  case 0:
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                  case 6:
                  case 7:
                    u += String.fromCharCode(a);
                    break;
                  case 12:
                  case 13:
                    (s = t[h++]), (u += String.fromCharCode(((31 & a) << 6) | (63 & s)));
                    break;
                  case 14:
                    (s = t[h++]),
                      (o = t[h++]),
                      (u += String.fromCharCode(
                        ((15 & a) << 12) | ((63 & s) << 6) | ((63 & o) << 0),
                      ));
                }
            }
            return u;
          };
        function T() {
          return i || void 0 === self.TextDecoder || (i = new self.TextDecoder('utf-8')), i;
        }
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'c', function () {
          return n;
        }),
          r.d(e, 'b', function () {
            return a;
          }),
          r.d(e, 'a', function () {
            return s;
          });
        function i(t, e, r, i) {
          void 0 === r && (r = 1), void 0 === i && (i = !1);
          var n = t * e * r;
          return i ? Math.round(n) : n;
        }
        function n(t, e, r, n) {
          return void 0 === r && (r = 1), void 0 === n && (n = !1), i(t, e, 1 / r, n);
        }
        function a(t, e) {
          return void 0 === e && (e = !1), i(t, 1e3, 1 / 9e4, e);
        }
        function s(t, e) {
          return void 0 === e && (e = 1), i(t, 9e4, 1 / e);
        }
      },
      function (t, e, r) {
        'use strict';
        function i(t, e, r) {
          return Uint8Array.prototype.slice
            ? t.slice(e, r)
            : new Uint8Array(Array.prototype.slice.call(t, e, r));
        }
        r.d(e, 'a', function () {
          return i;
        });
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'c', function () {
          return lt;
        }),
          r.d(e, 'd', function () {
            return ht;
          }),
          r.d(e, 'a', function () {
            return dt;
          }),
          r.d(e, 'b', function () {
            return ct;
          });
        var i = r(0),
          n = r(2),
          a = r(15),
          s = r(3),
          o = r(7);
        var l = r(6),
          u = r(9),
          h = (function () {
            function t() {
              (this._audioTrack = void 0),
                (this._id3Track = void 0),
                (this.frameIndex = 0),
                (this.cachedData = null),
                (this.initPTS = null);
            }
            var e = t.prototype;
            return (
              (e.resetInitSegment = function (t, e, r) {
                this._id3Track = {
                  type: 'id3',
                  id: 0,
                  pid: -1,
                  inputTimeScale: 9e4,
                  sequenceNumber: 0,
                  samples: [],
                  dropped: 0,
                };
              }),
              (e.resetTimeStamp = function () {}),
              (e.resetContiguity = function () {}),
              (e.canParse = function (t, e) {
                return !1;
              }),
              (e.appendFrame = function (t, e, r) {}),
              (e.demux = function (t, e) {
                this.cachedData &&
                  ((t = Object(l.a)(this.cachedData, t)), (this.cachedData = null));
                var r,
                  i,
                  n = o.b(t, 0),
                  a = n ? n.length : 0,
                  s = this._audioTrack,
                  h = this._id3Track,
                  c = n ? o.d(n) : void 0,
                  f = t.length;
                for (
                  (0 !== this.frameIndex && null !== this.initPTS) || (this.initPTS = d(c, e)),
                    n &&
                      n.length > 0 &&
                      h.samples.push({ pts: this.initPTS, dts: this.initPTS, data: n }),
                    i = this.initPTS;
                  a < f;

                ) {
                  if (this.canParse(t, a)) {
                    var g = this.appendFrame(s, t, a);
                    g ? (this.frameIndex++, (i = g.sample.pts), (r = a += g.length)) : (a = f);
                  } else
                    o.a(t, a)
                      ? ((n = o.b(t, a)),
                        h.samples.push({ pts: i, dts: i, data: n }),
                        (r = a += n.length))
                      : a++;
                  if (a === f && r !== f) {
                    var v = Object(u.a)(t, r);
                    this.cachedData
                      ? (this.cachedData = Object(l.a)(this.cachedData, v))
                      : (this.cachedData = v);
                  }
                }
                return {
                  audioTrack: s,
                  avcTrack: {
                    type: '',
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0,
                  },
                  id3Track: h,
                  textTrack: {
                    type: '',
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0,
                  },
                };
              }),
              (e.demuxSampleAes = function (t, e, r) {
                return Promise.reject(
                  new Error('[' + this + '] This demuxer does not support Sample-AES decryption'),
                );
              }),
              (e.flush = function (t) {
                var e = this.cachedData;
                return (
                  e && ((this.cachedData = null), this.demux(e, 0)),
                  (this.frameIndex = 0),
                  {
                    audioTrack: this._audioTrack,
                    avcTrack: {
                      type: '',
                      id: -1,
                      pid: -1,
                      inputTimeScale: 9e4,
                      sequenceNumber: -1,
                      samples: [],
                      dropped: 0,
                    },
                    id3Track: this._id3Track,
                    textTrack: {
                      type: '',
                      id: -1,
                      pid: -1,
                      inputTimeScale: 9e4,
                      sequenceNumber: -1,
                      samples: [],
                      dropped: 0,
                    },
                  }
                );
              }),
              (e.destroy = function () {}),
              t
            );
          })(),
          d = function (t, e) {
            return Object(s.a)(t) ? 90 * t : 9e4 * e;
          },
          c = h,
          f = r(1);
        function g(t, e) {
          return 255 === t[e] && 240 == (246 & t[e + 1]);
        }
        function v(t, e) {
          return 1 & t[e + 1] ? 7 : 9;
        }
        function p(t, e) {
          return ((3 & t[e + 3]) << 11) | (t[e + 4] << 3) | ((224 & t[e + 5]) >>> 5);
        }
        function m(t, e) {
          return e + 1 < t.length && g(t, e);
        }
        function y(t, e) {
          if (m(t, e)) {
            var r = v(t, e);
            if (e + r >= t.length) return !1;
            var i = p(t, e);
            if (i <= r) return !1;
            var n = e + i;
            return n === t.length || m(t, n);
          }
          return !1;
        }
        function T(t, e, r, a, s) {
          if (!t.samplerate) {
            var o = (function (t, e, r, a) {
              var s,
                o,
                l,
                u,
                h = navigator.userAgent.toLowerCase(),
                d = a,
                c = [
                  96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350,
                ];
              s = 1 + ((192 & e[r + 2]) >>> 6);
              var g = (60 & e[r + 2]) >>> 2;
              if (!(g > c.length - 1))
                return (
                  (l = (1 & e[r + 2]) << 2),
                  (l |= (192 & e[r + 3]) >>> 6),
                  f.b.log('manifest codec:' + a + ', ADTS type:' + s + ', samplingIndex:' + g),
                  /firefox/i.test(h)
                    ? g >= 6
                      ? ((s = 5), (u = new Array(4)), (o = g - 3))
                      : ((s = 2), (u = new Array(2)), (o = g))
                    : -1 !== h.indexOf('android')
                    ? ((s = 2), (u = new Array(2)), (o = g))
                    : ((s = 5),
                      (u = new Array(4)),
                      (a && (-1 !== a.indexOf('mp4a.40.29') || -1 !== a.indexOf('mp4a.40.5'))) ||
                      (!a && g >= 6)
                        ? (o = g - 3)
                        : (((a &&
                            -1 !== a.indexOf('mp4a.40.2') &&
                            ((g >= 6 && 1 === l) || /vivaldi/i.test(h))) ||
                            (!a && 1 === l)) &&
                            ((s = 2), (u = new Array(2))),
                          (o = g))),
                  (u[0] = s << 3),
                  (u[0] |= (14 & g) >> 1),
                  (u[1] |= (1 & g) << 7),
                  (u[1] |= l << 3),
                  5 === s &&
                    ((u[1] |= (14 & o) >> 1), (u[2] = (1 & o) << 7), (u[2] |= 8), (u[3] = 0)),
                  {
                    config: u,
                    samplerate: c[g],
                    channelCount: l,
                    codec: 'mp4a.40.' + s,
                    manifestCodec: d,
                  }
                );
              t.trigger(i.a.ERROR, {
                type: n.b.MEDIA_ERROR,
                details: n.a.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: 'invalid ADTS sampling index:' + g,
              });
            })(e, r, a, s);
            if (!o) return;
            (t.config = o.config),
              (t.samplerate = o.samplerate),
              (t.channelCount = o.channelCount),
              (t.codec = o.codec),
              (t.manifestCodec = o.manifestCodec),
              f.b.log(
                'parsed codec:' +
                  t.codec +
                  ', rate:' +
                  o.samplerate +
                  ', channels:' +
                  o.channelCount,
              );
          }
        }
        function b(t) {
          return 9216e4 / t;
        }
        function E(t, e, r, i, n) {
          var a = (function (t, e, r, i, n) {
            var a = v(t, e),
              s = p(t, e);
            if ((s -= a) > 0) return { headerLength: a, frameLength: s, stamp: r + i * n };
          })(e, r, i, n, b(t.samplerate));
          if (a) {
            var s,
              o = a.frameLength,
              l = a.headerLength,
              u = a.stamp,
              h = l + o,
              d = Math.max(0, r + h - e.length);
            d
              ? (s = new Uint8Array(h - l)).set(e.subarray(r + l, e.length), 0)
              : (s = e.subarray(r + l, r + h));
            var c = { unit: s, pts: u };
            return d || t.samples.push(c), { sample: c, length: h, missing: d };
          }
        }
        function S(t, e) {
          return (S =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var L = (function (t) {
          var e, r;
          function i(e, r) {
            var i;
            return (
              ((i = t.call(this) || this).observer = void 0),
              (i.config = void 0),
              (i.observer = e),
              (i.config = r),
              i
            );
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            S(e, r);
          var n = i.prototype;
          return (
            (n.resetInitSegment = function (e, r, i) {
              t.prototype.resetInitSegment.call(this, e, r, i),
                (this._audioTrack = {
                  container: 'audio/adts',
                  type: 'audio',
                  id: 0,
                  pid: -1,
                  sequenceNumber: 0,
                  isAAC: !0,
                  samples: [],
                  manifestCodec: e,
                  duration: i,
                  inputTimeScale: 9e4,
                  dropped: 0,
                });
            }),
            (i.probe = function (t) {
              if (!t) return !1;
              for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++)
                if (y(t, e)) return f.b.log('ADTS sync word found !'), !0;
              return !1;
            }),
            (n.canParse = function (t, e) {
              return (function (t, e) {
                return (
                  (function (t, e) {
                    return e + 5 < t.length;
                  })(t, e) &&
                  g(t, e) &&
                  p(t, e) <= t.length - e
                );
              })(t, e);
            }),
            (n.appendFrame = function (t, e, r) {
              T(t, this.observer, e, r, t.manifestCodec);
              var i = E(t, e, r, this.initPTS, this.frameIndex);
              if (i && 0 === i.missing) return i;
            }),
            i
          );
        })(c);
        L.minProbeByteLength = 9;
        var A = L,
          R = (function () {
            function t(t, e) {
              (this.remainderData = null), (this.config = void 0), (this.config = e);
            }
            var e = t.prototype;
            return (
              (e.resetTimeStamp = function () {}),
              (e.resetInitSegment = function () {}),
              (e.resetContiguity = function () {}),
              (t.probe = function (t) {
                return (
                  Object(l.b)({ data: t, start: 0, end: Math.min(t.length, 16384) }, ['moof'])
                    .length > 0
                );
              }),
              (e.demux = function (t) {
                var e = t,
                  r = {
                    type: '',
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0,
                  };
                if (this.config.progressive) {
                  this.remainderData && (e = Object(l.a)(this.remainderData, t));
                  var i = Object(l.h)(e);
                  (this.remainderData = i.remainder), (r.samples = i.valid || new Uint8Array());
                } else r.samples = e;
                return {
                  audioTrack: {
                    type: '',
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0,
                  },
                  avcTrack: r,
                  id3Track: {
                    type: '',
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0,
                  },
                  textTrack: {
                    type: '',
                    id: -1,
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: -1,
                    samples: [],
                    dropped: 0,
                  },
                };
              }),
              (e.flush = function () {
                var t = {
                  type: '',
                  id: -1,
                  pid: -1,
                  inputTimeScale: 9e4,
                  sequenceNumber: -1,
                  samples: [],
                  dropped: 0,
                };
                return (
                  (t.samples = this.remainderData || new Uint8Array()),
                  (this.remainderData = null),
                  {
                    audioTrack: {
                      type: '',
                      id: -1,
                      pid: -1,
                      inputTimeScale: 9e4,
                      sequenceNumber: -1,
                      samples: [],
                      dropped: 0,
                    },
                    avcTrack: t,
                    id3Track: {
                      type: '',
                      id: -1,
                      pid: -1,
                      inputTimeScale: 9e4,
                      sequenceNumber: -1,
                      samples: [],
                      dropped: 0,
                    },
                    textTrack: {
                      type: '',
                      id: -1,
                      pid: -1,
                      inputTimeScale: 9e4,
                      sequenceNumber: -1,
                      samples: [],
                      dropped: 0,
                    },
                  }
                );
              }),
              (e.demuxSampleAes = function (t, e, r) {
                return Promise.reject(
                  new Error('The MP4 demuxer does not support SAMPLE-AES decryption'),
                );
              }),
              (e.destroy = function () {}),
              t
            );
          })();
        R.minProbeByteLength = 1024;
        var D = R,
          k = null,
          _ = [
            32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80,
            96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160,
            192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8,
            16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160,
          ],
          I = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
          C = [
            [0, 72, 144, 12],
            [0, 0, 0, 0],
            [0, 72, 144, 12],
            [0, 144, 144, 12],
          ],
          w = [0, 1, 1, 4];
        function O(t, e, r, i, n) {
          if (!(r + 24 > e.length)) {
            var a = x(e, r);
            if (a && r + a.frameLength <= e.length) {
              var s = i + n * ((9e4 * a.samplesPerFrame) / a.sampleRate),
                o = { unit: e.subarray(r, r + a.frameLength), pts: s, dts: s };
              return (
                (t.config = []),
                (t.channelCount = a.channelCount),
                (t.samplerate = a.sampleRate),
                t.samples.push(o),
                { sample: o, length: a.frameLength, missing: 0 }
              );
            }
          }
        }
        function x(t, e) {
          var r = (t[e + 1] >> 3) & 3,
            i = (t[e + 1] >> 1) & 3,
            n = (t[e + 2] >> 4) & 15,
            a = (t[e + 2] >> 2) & 3;
          if (1 !== r && 0 !== n && 15 !== n && 3 !== a) {
            var s = (t[e + 2] >> 1) & 1,
              o = t[e + 3] >> 6,
              l = 1e3 * _[14 * (3 === r ? 3 - i : 3 === i ? 3 : 4) + n - 1],
              u = I[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + a],
              h = 3 === o ? 1 : 2,
              d = C[r][i],
              c = w[i],
              f = 8 * d * c,
              g = Math.floor((d * l) / u + s) * c;
            if (null === k) {
              var v = (navigator.userAgent || '').match(/Chrome\/(\d+)/i);
              k = v ? parseInt(v[1]) : 0;
            }
            return (
              !!k && k <= 87 && 2 === i && l >= 224e3 && 0 === o && (t[e + 3] = 128 | t[e + 3]),
              { sampleRate: u, channelCount: h, frameLength: g, samplesPerFrame: f }
            );
          }
        }
        function P(t, e) {
          return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1]);
        }
        function M(t, e) {
          return e + 1 < t.length && P(t, e);
        }
        function F(t, e) {
          if (e + 1 < t.length && P(t, e)) {
            var r = x(t, e),
              i = 4;
            null != r && r.frameLength && (i = r.frameLength);
            var n = e + i;
            return n === t.length || M(t, n);
          }
          return !1;
        }
        var N = (function () {
            function t(t) {
              (this.data = void 0),
                (this.bytesAvailable = void 0),
                (this.word = void 0),
                (this.bitsAvailable = void 0),
                (this.data = t),
                (this.bytesAvailable = t.byteLength),
                (this.word = 0),
                (this.bitsAvailable = 0);
            }
            var e = t.prototype;
            return (
              (e.loadWord = function () {
                var t = this.data,
                  e = this.bytesAvailable,
                  r = t.byteLength - e,
                  i = new Uint8Array(4),
                  n = Math.min(4, e);
                if (0 === n) throw new Error('no bytes available');
                i.set(t.subarray(r, r + n)),
                  (this.word = new DataView(i.buffer).getUint32(0)),
                  (this.bitsAvailable = 8 * n),
                  (this.bytesAvailable -= n);
              }),
              (e.skipBits = function (t) {
                var e;
                this.bitsAvailable > t
                  ? ((this.word <<= t), (this.bitsAvailable -= t))
                  : ((t -= this.bitsAvailable),
                    (t -= (e = t >> 3) >> 3),
                    (this.bytesAvailable -= e),
                    this.loadWord(),
                    (this.word <<= t),
                    (this.bitsAvailable -= t));
              }),
              (e.readBits = function (t) {
                var e = Math.min(this.bitsAvailable, t),
                  r = this.word >>> (32 - e);
                return (
                  t > 32 && f.b.error('Cannot read more than 32 bits at a time'),
                  (this.bitsAvailable -= e),
                  this.bitsAvailable > 0
                    ? (this.word <<= e)
                    : this.bytesAvailable > 0 && this.loadWord(),
                  (e = t - e) > 0 && this.bitsAvailable ? (r << e) | this.readBits(e) : r
                );
              }),
              (e.skipLZ = function () {
                var t;
                for (t = 0; t < this.bitsAvailable; ++t)
                  if (0 != (this.word & (2147483648 >>> t)))
                    return (this.word <<= t), (this.bitsAvailable -= t), t;
                return this.loadWord(), t + this.skipLZ();
              }),
              (e.skipUEG = function () {
                this.skipBits(1 + this.skipLZ());
              }),
              (e.skipEG = function () {
                this.skipBits(1 + this.skipLZ());
              }),
              (e.readUEG = function () {
                var t = this.skipLZ();
                return this.readBits(t + 1) - 1;
              }),
              (e.readEG = function () {
                var t = this.readUEG();
                return 1 & t ? (1 + t) >>> 1 : -1 * (t >>> 1);
              }),
              (e.readBoolean = function () {
                return 1 === this.readBits(1);
              }),
              (e.readUByte = function () {
                return this.readBits(8);
              }),
              (e.readUShort = function () {
                return this.readBits(16);
              }),
              (e.readUInt = function () {
                return this.readBits(32);
              }),
              (e.skipScalingList = function (t) {
                for (var e = 8, r = 8, i = 0; i < t; i++)
                  0 !== r && (r = (e + this.readEG() + 256) % 256), (e = 0 === r ? e : r);
              }),
              (e.readSPS = function () {
                var t,
                  e,
                  r,
                  i = 0,
                  n = 0,
                  a = 0,
                  s = 0,
                  o = this.readUByte.bind(this),
                  l = this.readBits.bind(this),
                  u = this.readUEG.bind(this),
                  h = this.readBoolean.bind(this),
                  d = this.skipBits.bind(this),
                  c = this.skipEG.bind(this),
                  f = this.skipUEG.bind(this),
                  g = this.skipScalingList.bind(this);
                o();
                var v = o();
                if (
                  (l(5),
                  d(3),
                  o(),
                  f(),
                  100 === v ||
                    110 === v ||
                    122 === v ||
                    244 === v ||
                    44 === v ||
                    83 === v ||
                    86 === v ||
                    118 === v ||
                    128 === v)
                ) {
                  var p = u();
                  if ((3 === p && d(1), f(), f(), d(1), h()))
                    for (e = 3 !== p ? 8 : 12, r = 0; r < e; r++) h() && g(r < 6 ? 16 : 64);
                }
                f();
                var m = u();
                if (0 === m) u();
                else if (1 === m) for (d(1), c(), c(), t = u(), r = 0; r < t; r++) c();
                f(), d(1);
                var y = u(),
                  T = u(),
                  b = l(1);
                0 === b && d(1), d(1), h() && ((i = u()), (n = u()), (a = u()), (s = u()));
                var E = [1, 1];
                if (h() && h())
                  switch (o()) {
                    case 1:
                      E = [1, 1];
                      break;
                    case 2:
                      E = [12, 11];
                      break;
                    case 3:
                      E = [10, 11];
                      break;
                    case 4:
                      E = [16, 11];
                      break;
                    case 5:
                      E = [40, 33];
                      break;
                    case 6:
                      E = [24, 11];
                      break;
                    case 7:
                      E = [20, 11];
                      break;
                    case 8:
                      E = [32, 11];
                      break;
                    case 9:
                      E = [80, 33];
                      break;
                    case 10:
                      E = [18, 11];
                      break;
                    case 11:
                      E = [15, 11];
                      break;
                    case 12:
                      E = [64, 33];
                      break;
                    case 13:
                      E = [160, 99];
                      break;
                    case 14:
                      E = [4, 3];
                      break;
                    case 15:
                      E = [3, 2];
                      break;
                    case 16:
                      E = [2, 1];
                      break;
                    case 255:
                      E = [(o() << 8) | o(), (o() << 8) | o()];
                  }
                return {
                  width: Math.ceil(16 * (y + 1) - 2 * i - 2 * n),
                  height: (2 - b) * (T + 1) * 16 - (b ? 2 : 4) * (a + s),
                  pixelRatio: E,
                };
              }),
              (e.readSliceType = function () {
                return this.readUByte(), this.readUEG(), this.readUEG();
              }),
              t
            );
          })(),
          U = (function () {
            function t(t, e, r) {
              (this.keyData = void 0),
                (this.decrypter = void 0),
                (this.keyData = r),
                (this.decrypter = new a.a(t, e, { removePKCS7Padding: !1 }));
            }
            var e = t.prototype;
            return (
              (e.decryptBuffer = function (t, e) {
                this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e);
              }),
              (e.decryptAacSample = function (t, e, r, i) {
                var n = t[e].unit,
                  a = n.subarray(16, n.length - (n.length % 16)),
                  s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
                  o = this;
                this.decryptBuffer(s, function (a) {
                  var s = new Uint8Array(a);
                  n.set(s, 16), i || o.decryptAacSamples(t, e + 1, r);
                });
              }),
              (e.decryptAacSamples = function (t, e, r) {
                for (; ; e++) {
                  if (e >= t.length) return void r();
                  if (!(t[e].unit.length < 32)) {
                    var i = this.decrypter.isSync();
                    if ((this.decryptAacSample(t, e, r, i), !i)) return;
                  }
                }
              }),
              (e.getAvcEncryptedData = function (t) {
                for (
                  var e = 16 * Math.floor((t.length - 48) / 160) + 16,
                    r = new Int8Array(e),
                    i = 0,
                    n = 32;
                  n <= t.length - 16;
                  n += 160, i += 16
                )
                  r.set(t.subarray(n, n + 16), i);
                return r;
              }),
              (e.getAvcDecryptedUnit = function (t, e) {
                for (
                  var r = new Uint8Array(e), i = 0, n = 32;
                  n <= t.length - 16;
                  n += 160, i += 16
                )
                  t.set(r.subarray(i, i + 16), n);
                return t;
              }),
              (e.decryptAvcSample = function (t, e, r, i, n, a) {
                var s = q(n.data),
                  o = this.getAvcEncryptedData(s),
                  l = this;
                this.decryptBuffer(o.buffer, function (o) {
                  (n.data = l.getAvcDecryptedUnit(s, o)), a || l.decryptAvcSamples(t, e, r + 1, i);
                });
              }),
              (e.decryptAvcSamples = function (t, e, r, i) {
                if (t instanceof Uint8Array)
                  throw new Error('Cannot decrypt samples of type Uint8Array');
                for (; ; e++, r = 0) {
                  if (e >= t.length) return void i();
                  for (var n = t[e].units; !(r >= n.length); r++) {
                    var a = n[r];
                    if (!(a.data.length <= 48 || (1 !== a.type && 5 !== a.type))) {
                      var s = this.decrypter.isSync();
                      if ((this.decryptAvcSample(t, e, r, i, a, s), !s)) return;
                    }
                  }
                }
              }),
              t
            );
          })(),
          B = { video: 1, audio: 2, id3: 3, text: 4 },
          G = (function () {
            function t(t, e, r) {
              (this.observer = void 0),
                (this.config = void 0),
                (this.typeSupported = void 0),
                (this.sampleAes = null),
                (this.pmtParsed = !1),
                (this.audioCodec = void 0),
                (this.videoCodec = void 0),
                (this._duration = 0),
                (this.aacLastPTS = null),
                (this._initPTS = null),
                (this._initDTS = null),
                (this._pmtId = -1),
                (this._avcTrack = void 0),
                (this._audioTrack = void 0),
                (this._id3Track = void 0),
                (this._txtTrack = void 0),
                (this.aacOverFlow = null),
                (this.avcSample = null),
                (this.remainderData = null),
                (this.observer = t),
                (this.config = e),
                (this.typeSupported = r);
            }
            (t.probe = function (e) {
              var r = t.syncOffset(e);
              return (
                !(r < 0) &&
                (r &&
                  f.b.warn(
                    'MPEG2-TS detected but first sync word found @ offset ' + r + ', junk ahead ?',
                  ),
                !0)
              );
            }),
              (t.syncOffset = function (t) {
                for (var e = Math.min(1e3, t.length - 564), r = 0; r < e; ) {
                  if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                  r++;
                }
                return -1;
              }),
              (t.createTrack = function (t, e) {
                return {
                  container: 'video' === t || 'audio' === t ? 'video/mp2t' : void 0,
                  type: t,
                  id: B[t],
                  pid: -1,
                  inputTimeScale: 9e4,
                  sequenceNumber: 0,
                  samples: [],
                  dropped: 0,
                  duration: 'audio' === t ? e : void 0,
                };
              });
            var e = t.prototype;
            return (
              (e.resetInitSegment = function (e, r, i) {
                (this.pmtParsed = !1),
                  (this._pmtId = -1),
                  (this._avcTrack = t.createTrack('video', i)),
                  (this._audioTrack = t.createTrack('audio', i)),
                  (this._id3Track = t.createTrack('id3', i)),
                  (this._txtTrack = t.createTrack('text', i)),
                  (this._audioTrack.isAAC = !0),
                  (this.aacOverFlow = null),
                  (this.aacLastPTS = null),
                  (this.avcSample = null),
                  (this.audioCodec = e),
                  (this.videoCodec = r),
                  (this._duration = i);
              }),
              (e.resetTimeStamp = function () {}),
              (e.resetContiguity = function () {
                var t = this._audioTrack,
                  e = this._avcTrack,
                  r = this._id3Track;
                t && (t.pesData = null),
                  e && (e.pesData = null),
                  r && (r.pesData = null),
                  (this.aacOverFlow = null),
                  (this.aacLastPTS = null);
              }),
              (e.demux = function (e, r, a, s) {
                var o;
                void 0 === a && (a = !1), void 0 === s && (s = !1), a || (this.sampleAes = null);
                var u = this._avcTrack,
                  h = this._audioTrack,
                  d = this._id3Track,
                  c = u.pid,
                  g = u.pesData,
                  v = h.pid,
                  p = d.pid,
                  m = h.pesData,
                  y = d.pesData,
                  T = !1,
                  b = this.pmtParsed,
                  E = this._pmtId,
                  S = e.length;
                if (
                  (this.remainderData &&
                    ((S = (e = Object(l.a)(this.remainderData, e)).length),
                    (this.remainderData = null)),
                  S < 188 && !s)
                )
                  return (
                    (this.remainderData = e),
                    { audioTrack: h, avcTrack: u, id3Track: d, textTrack: this._txtTrack }
                  );
                var L = Math.max(0, t.syncOffset(e));
                (S -= (S + L) % 188) < e.byteLength &&
                  !s &&
                  (this.remainderData = new Uint8Array(e.buffer, S, e.buffer.byteLength - S));
                for (var A = L; A < S; A += 188)
                  if (71 === e[A]) {
                    var R = !!(64 & e[A + 1]),
                      D = ((31 & e[A + 1]) << 8) + e[A + 2],
                      k = void 0;
                    if ((48 & e[A + 3]) >> 4 > 1) {
                      if ((k = A + 5 + e[A + 4]) === A + 188) continue;
                    } else k = A + 4;
                    switch (D) {
                      case c:
                        R &&
                          (g && (o = V(g)) && this.parseAVCPES(o, !1), (g = { data: [], size: 0 })),
                          g && (g.data.push(e.subarray(k, A + 188)), (g.size += A + 188 - k));
                        break;
                      case v:
                        R &&
                          (m &&
                            (o = V(m)) &&
                            (h.isAAC ? this.parseAACPES(o) : this.parseMPEGPES(o)),
                          (m = { data: [], size: 0 })),
                          m && (m.data.push(e.subarray(k, A + 188)), (m.size += A + 188 - k));
                        break;
                      case p:
                        R && (y && (o = V(y)) && this.parseID3PES(o), (y = { data: [], size: 0 })),
                          y && (y.data.push(e.subarray(k, A + 188)), (y.size += A + 188 - k));
                        break;
                      case 0:
                        R && (k += e[k] + 1), (E = this._pmtId = j(e, k));
                        break;
                      case E:
                        R && (k += e[k] + 1);
                        var _ = H(
                          e,
                          k,
                          !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3,
                          a,
                        );
                        (c = _.avc) > 0 && (u.pid = c),
                          (v = _.audio) > 0 && ((h.pid = v), (h.isAAC = _.isAAC)),
                          (p = _.id3) > 0 && (d.pid = p),
                          T && !b && (f.b.log('reparse from beginning'), (T = !1), (A = L - 188)),
                          (b = this.pmtParsed = !0);
                        break;
                      case 17:
                      case 8191:
                        break;
                      default:
                        T = !0;
                    }
                  } else
                    this.observer.emit(i.a.ERROR, i.a.ERROR, {
                      type: n.b.MEDIA_ERROR,
                      details: n.a.FRAG_PARSING_ERROR,
                      fatal: !1,
                      reason: 'TS packet did not start with 0x47',
                    });
                (u.pesData = g), (h.pesData = m), (d.pesData = y);
                var I = { audioTrack: h, avcTrack: u, id3Track: d, textTrack: this._txtTrack };
                return s && this.extractRemainingSamples(I), I;
              }),
              (e.flush = function () {
                var t,
                  e = this.remainderData;
                return (
                  (this.remainderData = null),
                  (t = e
                    ? this.demux(e, -1, !1, !0)
                    : {
                        audioTrack: this._audioTrack,
                        avcTrack: this._avcTrack,
                        textTrack: this._txtTrack,
                        id3Track: this._id3Track,
                      }),
                  this.extractRemainingSamples(t),
                  this.sampleAes ? this.decrypt(t, this.sampleAes) : t
                );
              }),
              (e.extractRemainingSamples = function (t) {
                var e,
                  r = t.audioTrack,
                  i = t.avcTrack,
                  n = t.id3Track,
                  a = i.pesData,
                  s = r.pesData,
                  o = n.pesData;
                a && (e = V(a)) ? (this.parseAVCPES(e, !0), (i.pesData = null)) : (i.pesData = a),
                  s && (e = V(s))
                    ? (r.isAAC ? this.parseAACPES(e) : this.parseMPEGPES(e), (r.pesData = null))
                    : (null != s &&
                        s.size &&
                        f.b.log('last AAC PES packet truncated,might overlap between fragments'),
                      (r.pesData = s)),
                  o && (e = V(o)) ? (this.parseID3PES(e), (n.pesData = null)) : (n.pesData = o);
              }),
              (e.demuxSampleAes = function (t, e, r) {
                var i = this.demux(t, r, !0, !this.config.progressive),
                  n = (this.sampleAes = new U(this.observer, this.config, e));
                return this.decrypt(i, n);
              }),
              (e.decrypt = function (t, e) {
                return new Promise(function (r) {
                  var i = t.audioTrack,
                    n = t.avcTrack;
                  i.samples && i.isAAC
                    ? e.decryptAacSamples(i.samples, 0, function () {
                        n.samples
                          ? e.decryptAvcSamples(n.samples, 0, 0, function () {
                              r(t);
                            })
                          : r(t);
                      })
                    : n.samples &&
                      e.decryptAvcSamples(n.samples, 0, 0, function () {
                        r(t);
                      });
                });
              }),
              (e.destroy = function () {
                (this._initPTS = this._initDTS = null), (this._duration = 0);
              }),
              (e.parseAVCPES = function (t, e) {
                var r,
                  i = this,
                  n = this._avcTrack,
                  a = this.parseAVCNALu(t.data),
                  s = this.avcSample,
                  l = !1;
                (t.data = null),
                  s &&
                    a.length &&
                    !n.audFound &&
                    (W(s, n), (s = this.avcSample = K(!1, t.pts, t.dts, ''))),
                  a.forEach(function (e) {
                    switch (e.type) {
                      case 1:
                        (r = !0), s || (s = i.avcSample = K(!0, t.pts, t.dts, '')), (s.frame = !0);
                        var a = e.data;
                        if (l && a.length > 4) {
                          var u = new N(a).readSliceType();
                          (2 !== u && 4 !== u && 7 !== u && 9 !== u) || (s.key = !0);
                        }
                        break;
                      case 5:
                        (r = !0),
                          s || (s = i.avcSample = K(!0, t.pts, t.dts, '')),
                          (s.key = !0),
                          (s.frame = !0);
                        break;
                      case 6:
                        r = !0;
                        var h = new N(q(e.data));
                        h.readUByte();
                        for (var d = 0, c = 0, f = !1, g = 0; !f && h.bytesAvailable > 1; ) {
                          d = 0;
                          do {
                            d += g = h.readUByte();
                          } while (255 === g);
                          c = 0;
                          do {
                            c += g = h.readUByte();
                          } while (255 === g);
                          if (4 === d && 0 !== h.bytesAvailable) {
                            if (((f = !0), 181 === h.readUByte()))
                              if (49 === h.readUShort())
                                if (1195456820 === h.readUInt())
                                  if (3 === h.readUByte()) {
                                    for (
                                      var v = h.readUByte(),
                                        p = 31 & v,
                                        m = [v, h.readUByte()],
                                        y = 0;
                                      y < p;
                                      y++
                                    )
                                      m.push(h.readUByte()),
                                        m.push(h.readUByte()),
                                        m.push(h.readUByte());
                                    Y(i._txtTrack.samples, { type: 3, pts: t.pts, bytes: m });
                                  }
                          } else if (5 === d && 0 !== h.bytesAvailable) {
                            if (((f = !0), c > 16)) {
                              for (var T = [], b = 0; b < 16; b++)
                                T.push(h.readUByte().toString(16)),
                                  (3 !== b && 5 !== b && 7 !== b && 9 !== b) || T.push('-');
                              for (var E = c - 16, S = new Uint8Array(E), L = 0; L < E; L++)
                                S[L] = h.readUByte();
                              Y(i._txtTrack.samples, {
                                pts: t.pts,
                                payloadType: d,
                                uuid: T.join(''),
                                userData: Object(o.f)(S),
                                userDataBytes: S,
                              });
                            }
                          } else if (c < h.bytesAvailable)
                            for (var A = 0; A < c; A++) h.readUByte();
                        }
                        break;
                      case 7:
                        if (((r = !0), (l = !0), !n.sps)) {
                          var R = new N(e.data).readSPS();
                          (n.width = R.width),
                            (n.height = R.height),
                            (n.pixelRatio = R.pixelRatio),
                            (n.sps = [e.data]),
                            (n.duration = i._duration);
                          for (var D = e.data.subarray(1, 4), k = 'avc1.', _ = 0; _ < 3; _++) {
                            var I = D[_].toString(16);
                            I.length < 2 && (I = '0' + I), (k += I);
                          }
                          n.codec = k;
                        }
                        break;
                      case 8:
                        (r = !0), n.pps || (n.pps = [e.data]);
                        break;
                      case 9:
                        (r = !1),
                          (n.audFound = !0),
                          s && W(s, n),
                          (s = i.avcSample = K(!1, t.pts, t.dts, ''));
                        break;
                      case 12:
                        r = !1;
                        break;
                      default:
                        (r = !1), s && (s.debug += 'unknown NAL ' + e.type + ' ');
                    }
                    s && r && s.units.push(e);
                  }),
                  e && s && (W(s, n), (this.avcSample = null));
              }),
              (e.getLastNalUnit = function () {
                var t,
                  e,
                  r = this.avcSample;
                if (!r || 0 === r.units.length) {
                  var i = this._avcTrack.samples;
                  r = i[i.length - 1];
                }
                if (null !== (t = r) && void 0 !== t && t.units) {
                  var n = r.units;
                  e = n[n.length - 1];
                }
                return e;
              }),
              (e.parseAVCNALu = function (t) {
                var e,
                  r,
                  i = t.byteLength,
                  n = this._avcTrack,
                  a = n.naluState || 0,
                  s = a,
                  o = [],
                  l = 0,
                  u = -1,
                  h = 0;
                for (-1 === a && ((u = 0), (h = 31 & t[0]), (a = 0), (l = 1)); l < i; )
                  if (((e = t[l++]), a))
                    if (1 !== a)
                      if (e)
                        if (1 === e) {
                          if (u >= 0) {
                            var d = { data: t.subarray(u, l - a - 1), type: h };
                            o.push(d);
                          } else {
                            var c = this.getLastNalUnit();
                            if (
                              c &&
                              (s &&
                                l <= 4 - s &&
                                c.state &&
                                (c.data = c.data.subarray(0, c.data.byteLength - s)),
                              (r = l - a - 1) > 0)
                            ) {
                              var f = new Uint8Array(c.data.byteLength + r);
                              f.set(c.data, 0),
                                f.set(t.subarray(0, r), c.data.byteLength),
                                (c.data = f);
                            }
                          }
                          l < i ? ((u = l), (h = 31 & t[l]), (a = 0)) : (a = -1);
                        } else a = 0;
                      else a = 3;
                    else a = e ? 0 : 2;
                  else a = e ? 0 : 1;
                if (u >= 0 && a >= 0) {
                  var g = { data: t.subarray(u, i), type: h, state: a };
                  o.push(g);
                }
                if (0 === o.length) {
                  var v = this.getLastNalUnit();
                  if (v) {
                    var p = new Uint8Array(v.data.byteLength + t.byteLength);
                    p.set(v.data, 0), p.set(t, v.data.byteLength), (v.data = p);
                  }
                }
                return (n.naluState = a), o;
              }),
              (e.parseAACPES = function (t) {
                var e,
                  r,
                  a,
                  s,
                  o,
                  l = 0,
                  u = this._audioTrack,
                  h = this.aacOverFlow,
                  d = t.data;
                if (h) {
                  this.aacOverFlow = null;
                  var c = h.sample.unit.byteLength,
                    g = Math.min(h.missing, c),
                    v = c - g;
                  h.sample.unit.set(d.subarray(0, g), v), u.samples.push(h.sample), (l = h.missing);
                }
                for (e = l, r = d.length; e < r - 1 && !m(d, e); e++);
                if (
                  e !== l &&
                  (e < r - 1
                    ? ((a = 'AAC PES did not start with ADTS header,offset:' + e), (s = !1))
                    : ((a = 'no ADTS header found in AAC PES'), (s = !0)),
                  f.b.warn('parsing error:' + a),
                  this.observer.emit(i.a.ERROR, i.a.ERROR, {
                    type: n.b.MEDIA_ERROR,
                    details: n.a.FRAG_PARSING_ERROR,
                    fatal: s,
                    reason: a,
                  }),
                  s)
                )
                  return;
                if ((T(u, this.observer, d, e, this.audioCodec), void 0 !== t.pts)) o = t.pts;
                else {
                  if (!h) return void f.b.warn('[tsdemuxer]: AAC PES unknown PTS');
                  var p = b(u.samplerate);
                  o = h.sample.pts + p;
                }
                for (var y = 0; e < r; ) {
                  if (m(d, e)) {
                    if (e + 5 < r) {
                      var S = E(u, d, e, o, y);
                      if (S) {
                        if (!S.missing) {
                          (e += S.length), y++;
                          continue;
                        }
                        this.aacOverFlow = S;
                      }
                    }
                    break;
                  }
                  e++;
                }
              }),
              (e.parseMPEGPES = function (t) {
                var e = t.data,
                  r = e.length,
                  i = 0,
                  n = 0,
                  a = t.pts;
                if (void 0 !== a)
                  for (; n < r; )
                    if (M(e, n)) {
                      var s = O(this._audioTrack, e, n, a, i);
                      if (!s) break;
                      (n += s.length), i++;
                    } else n++;
                else f.b.warn('[tsdemuxer]: MPEG PES unknown PTS');
              }),
              (e.parseID3PES = function (t) {
                void 0 !== t.pts
                  ? this._id3Track.samples.push(t)
                  : f.b.warn('[tsdemuxer]: ID3 PES unknown PTS');
              }),
              t
            );
          })();
        function K(t, e, r, i) {
          return { key: t, frame: !1, pts: e, dts: r, units: [], debug: i, length: 0 };
        }
        function j(t, e) {
          return ((31 & t[e + 10]) << 8) | t[e + 11];
        }
        function H(t, e, r, i) {
          var n = { audio: -1, avc: -1, id3: -1, isAAC: !0 },
            a = e + 3 + (((15 & t[e + 1]) << 8) | t[e + 2]) - 4;
          for (e += 12 + (((15 & t[e + 10]) << 8) | t[e + 11]); e < a; ) {
            var s = ((31 & t[e + 1]) << 8) | t[e + 2];
            switch (t[e]) {
              case 207:
                if (!i) {
                  f.b.log('ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream');
                  break;
                }
              case 15:
                -1 === n.audio && (n.audio = s);
                break;
              case 21:
                -1 === n.id3 && (n.id3 = s);
                break;
              case 219:
                if (!i) {
                  f.b.log('H.264 with AES-128-CBC slice encryption found in unencrypted stream');
                  break;
                }
              case 27:
                -1 === n.avc && (n.avc = s);
                break;
              case 3:
              case 4:
                r
                  ? -1 === n.audio && ((n.audio = s), (n.isAAC = !1))
                  : f.b.log('MPEG audio found, not supported in this browser');
                break;
              case 36:
                f.b.warn('Unsupported HEVC stream type found');
            }
            e += 5 + (((15 & t[e + 3]) << 8) | t[e + 4]);
          }
          return n;
        }
        function V(t) {
          var e,
            r,
            i,
            n,
            a,
            s = 0,
            o = t.data;
          if (!t || 0 === t.size) return null;
          for (; o[0].length < 19 && o.length > 1; ) {
            var l = new Uint8Array(o[0].length + o[1].length);
            l.set(o[0]), l.set(o[1], o[0].length), (o[0] = l), o.splice(1, 1);
          }
          if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
            if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
            var u = e[7];
            192 & u &&
              ((n =
                536870912 * (14 & e[9]) +
                4194304 * (255 & e[10]) +
                16384 * (254 & e[11]) +
                128 * (255 & e[12]) +
                (254 & e[13]) / 2),
              64 & u
                ? n -
                    (a =
                      536870912 * (14 & e[14]) +
                      4194304 * (255 & e[15]) +
                      16384 * (254 & e[16]) +
                      128 * (255 & e[17]) +
                      (254 & e[18]) / 2) >
                    54e5 &&
                  (f.b.warn(Math.round((n - a) / 9e4) + 's delta between PTS and DTS, align them'),
                  (n = a))
                : (a = n));
            var h = (i = e[8]) + 9;
            if (t.size <= h) return null;
            t.size -= h;
            for (var d = new Uint8Array(t.size), c = 0, g = o.length; c < g; c++) {
              var v = (e = o[c]).byteLength;
              if (h) {
                if (h > v) {
                  h -= v;
                  continue;
                }
                (e = e.subarray(h)), (v -= h), (h = 0);
              }
              d.set(e, s), (s += v);
            }
            return r && (r -= i + 3), { data: d, pts: n, dts: a, len: r };
          }
          return null;
        }
        function W(t, e) {
          if (t.units.length && t.frame) {
            if (void 0 === t.pts) {
              var r = e.samples,
                i = r.length;
              if (!i) return void e.dropped++;
              var n = r[i - 1];
              (t.pts = n.pts), (t.dts = n.dts);
            }
            e.samples.push(t);
          }
          t.debug.length && f.b.log(t.pts + '/' + t.dts + ':' + t.debug);
        }
        function Y(t, e) {
          var r = t.length;
          if (r > 0) {
            if (e.pts >= t[r - 1].pts) t.push(e);
            else
              for (var i = r - 1; i >= 0; i--)
                if (e.pts < t[i].pts) {
                  t.splice(i, 0, e);
                  break;
                }
          } else t.push(e);
        }
        function q(t) {
          for (var e = t.byteLength, r = [], i = 1; i < e - 2; )
            0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), (i += 2)) : i++;
          if (0 === r.length) return t;
          var n = e - r.length,
            a = new Uint8Array(n),
            s = 0;
          for (i = 0; i < n; s++, i++) s === r[0] && (s++, r.shift()), (a[i] = t[s]);
          return a;
        }
        G.minProbeByteLength = 188;
        var X = G;
        function z(t, e) {
          return (z =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var Q = (function (t) {
          var e, r;
          function i() {
            return t.apply(this, arguments) || this;
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            z(e, r);
          var n = i.prototype;
          return (
            (n.resetInitSegment = function (e, r, i) {
              t.prototype.resetInitSegment.call(this, e, r, i),
                (this._audioTrack = {
                  container: 'audio/mpeg',
                  type: 'audio',
                  id: 0,
                  pid: -1,
                  sequenceNumber: 0,
                  isAAC: !1,
                  samples: [],
                  manifestCodec: e,
                  duration: i,
                  inputTimeScale: 9e4,
                  dropped: 0,
                });
            }),
            (i.probe = function (t) {
              if (!t) return !1;
              for (var e = (o.b(t, 0) || []).length, r = t.length; e < r; e++)
                if (F(t, e)) return f.b.log('MPEG Audio sync word found !'), !0;
              return !1;
            }),
            (n.canParse = function (t, e) {
              return (function (t, e) {
                return P(t, e) && 4 <= t.length - e;
              })(t, e);
            }),
            (n.appendFrame = function (t, e, r) {
              if (null !== this.initPTS) return O(t, e, r, this.initPTS, this.frameIndex);
            }),
            i
          );
        })(c);
        Q.minProbeByteLength = 4;
        var $ = Q,
          J = r(16),
          Z = r(5),
          tt = (function () {
            function t() {
              (this.emitInitSegment = !1),
                (this.audioCodec = void 0),
                (this.videoCodec = void 0),
                (this.initData = void 0),
                (this.initPTS = void 0),
                (this.initTracks = void 0),
                (this.lastEndDTS = null);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {}),
              (e.resetTimeStamp = function (t) {
                (this.initPTS = t), (this.lastEndDTS = null);
              }),
              (e.resetNextTimestamp = function () {
                this.lastEndDTS = null;
              }),
              (e.resetInitSegment = function (t, e, r) {
                (this.audioCodec = e),
                  (this.videoCodec = r),
                  this.generateInitSegment(t),
                  (this.emitInitSegment = !0);
              }),
              (e.generateInitSegment = function (t) {
                var e = this.audioCodec,
                  r = this.videoCodec;
                if (!t || !t.byteLength)
                  return (this.initTracks = void 0), void (this.initData = void 0);
                var i = (this.initData = Object(l.f)(t));
                e || (e = rt(i.audio, Z.a.AUDIO)), r || (r = rt(i.video, Z.a.VIDEO));
                var n = {};
                i.audio && i.video
                  ? (n.audiovideo = {
                      container: 'video/mp4',
                      codec: e + ',' + r,
                      initSegment: t,
                      id: 'main',
                    })
                  : i.audio
                  ? (n.audio = { container: 'audio/mp4', codec: e, initSegment: t, id: 'audio' })
                  : i.video
                  ? (n.video = { container: 'video/mp4', codec: r, initSegment: t, id: 'main' })
                  : f.b.warn(
                      '[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes.',
                    ),
                  (this.initTracks = n);
              }),
              (e.remux = function (t, e, r, i, n) {
                var a = this.initPTS,
                  o = this.lastEndDTS,
                  u = { audio: void 0, video: void 0, text: i, id3: r, initSegment: void 0 };
                Object(s.a)(o) || (o = this.lastEndDTS = n || 0);
                var h = e.samples;
                if (!h || !h.length) return u;
                var d = { initPTS: void 0, timescale: 1 },
                  c = this.initData;
                if (
                  ((c && c.length) || (this.generateInitSegment(h), (c = this.initData)),
                  !c || !c.length)
                )
                  return f.b.warn('[passthrough-remuxer.ts]: Failed to generate initSegment.'), u;
                this.emitInitSegment && ((d.tracks = this.initTracks), (this.emitInitSegment = !1)),
                  Object(s.a)(a) || (this.initPTS = d.initPTS = a = et(c, h, o));
                var g = Object(l.c)(h, c),
                  v = o,
                  p = g + v;
                Object(l.e)(c, h, a),
                  g > 0
                    ? (this.lastEndDTS = p)
                    : (f.b.warn('Duration parsed from mp4 should be greater than zero'),
                      this.resetNextTimestamp());
                var m = !!c.audio,
                  y = !!c.video,
                  T = '';
                m && (T += 'audio'), y && (T += 'video');
                var b = {
                  data1: h,
                  startPTS: v,
                  startDTS: v,
                  endPTS: p,
                  endDTS: p,
                  type: T,
                  hasAudio: m,
                  hasVideo: y,
                  nb: 1,
                  dropped: 0,
                };
                return (
                  (u.audio = 'audio' === b.type ? b : void 0),
                  (u.video = 'audio' !== b.type ? b : void 0),
                  (u.text = i),
                  (u.id3 = r),
                  (u.initSegment = d),
                  u
                );
              }),
              t
            );
          })(),
          et = function (t, e, r) {
            return Object(l.d)(t, e) - r;
          };
        function rt(t, e) {
          var r = null == t ? void 0 : t.codec;
          return r && r.length > 4
            ? r
            : 'hvc1' === r
            ? 'hvc1.1.c.L120.90'
            : 'av01' === r
            ? 'av01.0.04M.08'
            : 'avc1' === r || e === Z.a.VIDEO
            ? 'avc1.42e01e'
            : 'mp4a.40.5';
        }
        var it,
          nt = tt,
          at = r(13);
        try {
          it = self.performance.now.bind(self.performance);
        } catch (t) {
          f.b.debug('Unable to use Performance API on this environment'), (it = self.Date.now);
        }
        var st = [
            { demux: X, remux: J.a },
            { demux: D, remux: nt },
            { demux: A, remux: J.a },
            { demux: $, remux: J.a },
          ],
          ot = 1024;
        st.forEach(function (t) {
          var e = t.demux;
          ot = Math.max(ot, e.minProbeByteLength);
        });
        var lt = (function () {
          function t(t, e, r, i, n) {
            (this.observer = void 0),
              (this.typeSupported = void 0),
              (this.config = void 0),
              (this.vendor = void 0),
              (this.id = void 0),
              (this.demuxer = void 0),
              (this.remuxer = void 0),
              (this.decrypter = void 0),
              (this.probe = void 0),
              (this.decryptionPromise = null),
              (this.transmuxConfig = void 0),
              (this.currentTransmuxState = void 0),
              (this.cache = new at.a()),
              (this.observer = t),
              (this.typeSupported = e),
              (this.config = r),
              (this.vendor = i),
              (this.id = n);
          }
          var e = t.prototype;
          return (
            (e.configure = function (t) {
              (this.transmuxConfig = t), this.decrypter && this.decrypter.reset();
            }),
            (e.push = function (t, e, r, i) {
              var n = this,
                a = r.transmuxing;
              a.executeStart = it();
              var s = new Uint8Array(t),
                o = this.cache,
                u = this.config,
                h = this.currentTransmuxState,
                d = this.transmuxConfig;
              i && (this.currentTransmuxState = i);
              var c = (function (t, e) {
                var r = null;
                t.byteLength > 0 &&
                  null != e &&
                  null != e.key &&
                  null !== e.iv &&
                  null != e.method &&
                  (r = e);
                return r;
              })(s, e);
              if (c && 'AES-128' === c.method) {
                var f = this.getDecrypter();
                if (!u.enableSoftwareAES)
                  return (
                    (this.decryptionPromise = f
                      .webCryptoDecrypt(s, c.key.buffer, c.iv.buffer)
                      .then(function (t) {
                        var e = n.push(t, null, r);
                        return (n.decryptionPromise = null), e;
                      })),
                    this.decryptionPromise
                  );
                var g = f.softwareDecrypt(s, c.key.buffer, c.iv.buffer);
                if (!g) return (a.executeEnd = it()), ut(r);
                s = new Uint8Array(g);
              }
              var v = i || h,
                p = v.contiguous,
                m = v.discontinuity,
                y = v.trackSwitch,
                T = v.accurateTimeOffset,
                b = v.timeOffset,
                E = d.audioCodec,
                S = d.videoCodec,
                L = d.defaultInitPts,
                A = d.duration,
                R = d.initSegmentData;
              if (
                ((m || y) && this.resetInitSegment(R, E, S, A),
                m && this.resetInitialTimestamp(L),
                p || this.resetContiguity(),
                this.needsProbing(s, m, y))
              ) {
                if (o.dataLength) {
                  var D = o.flush();
                  s = Object(l.a)(D, s);
                }
                this.configureTransmuxer(s, d);
              }
              var k = this.transmux(s, c, b, T, r),
                _ = this.currentTransmuxState;
              return (
                (_.contiguous = !0),
                (_.discontinuity = !1),
                (_.trackSwitch = !1),
                (a.executeEnd = it()),
                k
              );
            }),
            (e.flush = function (t) {
              var e = this,
                r = t.transmuxing;
              r.executeStart = it();
              var a = this.decrypter,
                s = this.cache,
                o = this.currentTransmuxState,
                l = this.decryptionPromise;
              if (l)
                return l.then(function () {
                  return e.flush(t);
                });
              var u = [],
                h = o.timeOffset;
              if (a) {
                var d = a.flush();
                d && u.push(this.push(d, null, t));
              }
              var c = s.dataLength;
              s.reset();
              var f = this.demuxer,
                g = this.remuxer;
              if (!f || !g)
                return (
                  c >= ot &&
                    this.observer.emit(i.a.ERROR, i.a.ERROR, {
                      type: n.b.MEDIA_ERROR,
                      details: n.a.FRAG_PARSING_ERROR,
                      fatal: !0,
                      reason: 'no demux matching with content found',
                    }),
                  (r.executeEnd = it()),
                  [ut(t)]
                );
              var v = f.flush(h);
              return ht(v)
                ? v.then(function (r) {
                    return e.flushRemux(u, r, t), u;
                  })
                : (this.flushRemux(u, v, t), u);
            }),
            (e.flushRemux = function (t, e, r) {
              var i = e.audioTrack,
                n = e.avcTrack,
                a = e.id3Track,
                s = e.textTrack,
                o = this.currentTransmuxState,
                l = o.accurateTimeOffset,
                u = o.timeOffset;
              f.b.log(
                '[transmuxer.ts]: Flushed fragment ' +
                  r.sn +
                  (r.part > -1 ? ' p: ' + r.part : '') +
                  ' of level ' +
                  r.level,
              );
              var h = this.remuxer.remux(i, n, a, s, u, l, !0, this.id);
              t.push({ remuxResult: h, chunkMeta: r }), (r.transmuxing.executeEnd = it());
            }),
            (e.resetInitialTimestamp = function (t) {
              var e = this.demuxer,
                r = this.remuxer;
              e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t));
            }),
            (e.resetContiguity = function () {
              var t = this.demuxer,
                e = this.remuxer;
              t && e && (t.resetContiguity(), e.resetNextTimestamp());
            }),
            (e.resetInitSegment = function (t, e, r, i) {
              var n = this.demuxer,
                a = this.remuxer;
              n && a && (n.resetInitSegment(e, r, i), a.resetInitSegment(t, e, r));
            }),
            (e.destroy = function () {
              this.demuxer && (this.demuxer.destroy(), (this.demuxer = void 0)),
                this.remuxer && (this.remuxer.destroy(), (this.remuxer = void 0));
            }),
            (e.transmux = function (t, e, r, i, n) {
              return e && 'SAMPLE-AES' === e.method
                ? this.transmuxSampleAes(t, e, r, i, n)
                : this.transmuxUnencrypted(t, r, i, n);
            }),
            (e.transmuxUnencrypted = function (t, e, r, i) {
              var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                a = n.audioTrack,
                s = n.avcTrack,
                o = n.id3Track,
                l = n.textTrack;
              return {
                remuxResult: this.remuxer.remux(a, s, o, l, e, r, !1, this.id),
                chunkMeta: i,
              };
            }),
            (e.transmuxSampleAes = function (t, e, r, i, n) {
              var a = this;
              return this.demuxer.demuxSampleAes(t, e, r).then(function (t) {
                return {
                  remuxResult: a.remuxer.remux(
                    t.audioTrack,
                    t.avcTrack,
                    t.id3Track,
                    t.textTrack,
                    r,
                    i,
                    !1,
                    a.id,
                  ),
                  chunkMeta: n,
                };
              });
            }),
            (e.configureTransmuxer = function (t, e) {
              for (
                var r,
                  i = this.config,
                  n = this.observer,
                  a = this.typeSupported,
                  s = this.vendor,
                  o = e.audioCodec,
                  l = e.defaultInitPts,
                  u = e.duration,
                  h = e.initSegmentData,
                  d = e.videoCodec,
                  c = 0,
                  g = st.length;
                c < g;
                c++
              )
                if (st[c].demux.probe(t)) {
                  r = st[c];
                  break;
                }
              r ||
                (f.b.warn('Failed to find demuxer by probing frag, treating as mp4 passthrough'),
                (r = { demux: D, remux: nt }));
              var v = this.demuxer,
                p = this.remuxer,
                m = r.remux,
                y = r.demux;
              (p && p instanceof m) || (this.remuxer = new m(n, i, a, s)),
                (v && v instanceof y) || ((this.demuxer = new y(n, i, a)), (this.probe = y.probe)),
                this.resetInitSegment(h, o, d, u),
                this.resetInitialTimestamp(l);
            }),
            (e.needsProbing = function (t, e, r) {
              return !this.demuxer || !this.remuxer || e || r;
            }),
            (e.getDecrypter = function () {
              var t = this.decrypter;
              return t || (t = this.decrypter = new a.a(this.observer, this.config)), t;
            }),
            t
          );
        })();
        var ut = function (t) {
          return { remuxResult: {}, chunkMeta: t };
        };
        function ht(t) {
          return 'then' in t && t.then instanceof Function;
        }
        var dt = function (t, e, r, i, n) {
            (this.audioCodec = void 0),
              (this.videoCodec = void 0),
              (this.initSegmentData = void 0),
              (this.duration = void 0),
              (this.defaultInitPts = void 0),
              (this.audioCodec = t),
              (this.videoCodec = e),
              (this.initSegmentData = r),
              (this.duration = i),
              (this.defaultInitPts = n);
          },
          ct = function (t, e, r, i, n) {
            (this.discontinuity = void 0),
              (this.contiguous = void 0),
              (this.accurateTimeOffset = void 0),
              (this.trackSwitch = void 0),
              (this.timeOffset = void 0),
              (this.discontinuity = t),
              (this.contiguous = e),
              (this.accurateTimeOffset = r),
              (this.trackSwitch = i),
              (this.timeOffset = n);
          };
      },
      function (t, e, r) {
        var i, n, a, s, o;
        (i =
          /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/),
          (n = /^([^\/?#]*)([^]*)$/),
          (a = /(?:\/|^)\.(?=\/)/g),
          (s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g),
          (o = {
            buildAbsoluteURL: function (t, e, r) {
              if (((r = r || {}), (t = t.trim()), !(e = e.trim()))) {
                if (!r.alwaysNormalize) return t;
                var i = o.parseURL(t);
                if (!i) throw new Error('Error trying to parse base URL.');
                return (i.path = o.normalizePath(i.path)), o.buildURLFromParts(i);
              }
              var a = o.parseURL(e);
              if (!a) throw new Error('Error trying to parse relative URL.');
              if (a.scheme)
                return r.alwaysNormalize
                  ? ((a.path = o.normalizePath(a.path)), o.buildURLFromParts(a))
                  : e;
              var s = o.parseURL(t);
              if (!s) throw new Error('Error trying to parse base URL.');
              if (!s.netLoc && s.path && '/' !== s.path[0]) {
                var l = n.exec(s.path);
                (s.netLoc = l[1]), (s.path = l[2]);
              }
              s.netLoc && !s.path && (s.path = '/');
              var u = {
                scheme: s.scheme,
                netLoc: a.netLoc,
                path: null,
                params: a.params,
                query: a.query,
                fragment: a.fragment,
              };
              if (!a.netLoc && ((u.netLoc = s.netLoc), '/' !== a.path[0]))
                if (a.path) {
                  var h = s.path,
                    d = h.substring(0, h.lastIndexOf('/') + 1) + a.path;
                  u.path = o.normalizePath(d);
                } else
                  (u.path = s.path),
                    a.params || ((u.params = s.params), a.query || (u.query = s.query));
              return (
                null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path),
                o.buildURLFromParts(u)
              );
            },
            parseURL: function (t) {
              var e = i.exec(t);
              return e
                ? {
                    scheme: e[1] || '',
                    netLoc: e[2] || '',
                    path: e[3] || '',
                    params: e[4] || '',
                    query: e[5] || '',
                    fragment: e[6] || '',
                  }
                : null;
            },
            normalizePath: function (t) {
              for (
                t = t.split('').reverse().join('').replace(a, '');
                t.length !== (t = t.replace(s, '')).length;

              );
              return t.split('').reverse().join('');
            },
            buildURLFromParts: function (t) {
              return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment;
            },
          }),
          (t.exports = o);
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return i;
        });
        var i = function () {
          (this.aborted = !1),
            (this.loaded = 0),
            (this.retry = 0),
            (this.total = 0),
            (this.chunkCount = 0),
            (this.bwEstimate = 0),
            (this.loading = { start: 0, first: 0, end: 0 }),
            (this.parsing = { start: 0, end: 0 }),
            (this.buffering = { start: 0, first: 0, end: 0 });
        };
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return i;
        });
        var i = (function () {
          function t() {
            (this.chunks = []), (this.dataLength = 0);
          }
          var e = t.prototype;
          return (
            (e.push = function (t) {
              this.chunks.push(t), (this.dataLength += t.length);
            }),
            (e.flush = function () {
              var t,
                e = this.chunks,
                r = this.dataLength;
              return e.length
                ? ((t =
                    1 === e.length
                      ? e[0]
                      : (function (t, e) {
                          for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                            var a = t[n];
                            r.set(a, i), (i += a.length);
                          }
                          return r;
                        })(e, r)),
                  this.reset(),
                  t)
                : new Uint8Array(0);
            }),
            (e.reset = function () {
              (this.chunks.length = 0), (this.dataLength = 0);
            }),
            t
          );
        })();
      },
      function (t, e, r) {
        'use strict';
        var i = Object.prototype.hasOwnProperty,
          n = '~';
        function a() {}
        function s(t, e, r) {
          (this.fn = t), (this.context = e), (this.once = r || !1);
        }
        function o(t, e, r, i, a) {
          if ('function' != typeof r) throw new TypeError('The listener must be a function');
          var o = new s(r, i || t, a),
            l = n ? n + e : e;
          return (
            t._events[l]
              ? t._events[l].fn
                ? (t._events[l] = [t._events[l], o])
                : t._events[l].push(o)
              : ((t._events[l] = o), t._eventsCount++),
            t
          );
        }
        function l(t, e) {
          0 == --t._eventsCount ? (t._events = new a()) : delete t._events[e];
        }
        function u() {
          (this._events = new a()), (this._eventsCount = 0);
        }
        Object.create && ((a.prototype = Object.create(null)), new a().__proto__ || (n = !1)),
          (u.prototype.eventNames = function () {
            var t,
              e,
              r = [];
            if (0 === this._eventsCount) return r;
            for (e in (t = this._events)) i.call(t, e) && r.push(n ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r;
          }),
          (u.prototype.listeners = function (t) {
            var e = n ? n + t : t,
              r = this._events[e];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, a = r.length, s = new Array(a); i < a; i++) s[i] = r[i].fn;
            return s;
          }),
          (u.prototype.listenerCount = function (t) {
            var e = n ? n + t : t,
              r = this._events[e];
            return r ? (r.fn ? 1 : r.length) : 0;
          }),
          (u.prototype.emit = function (t, e, r, i, a, s) {
            var o = n ? n + t : t;
            if (!this._events[o]) return !1;
            var l,
              u,
              h = this._events[o],
              d = arguments.length;
            if (h.fn) {
              switch ((h.once && this.removeListener(t, h.fn, void 0, !0), d)) {
                case 1:
                  return h.fn.call(h.context), !0;
                case 2:
                  return h.fn.call(h.context, e), !0;
                case 3:
                  return h.fn.call(h.context, e, r), !0;
                case 4:
                  return h.fn.call(h.context, e, r, i), !0;
                case 5:
                  return h.fn.call(h.context, e, r, i, a), !0;
                case 6:
                  return h.fn.call(h.context, e, r, i, a, s), !0;
              }
              for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
              h.fn.apply(h.context, l);
            } else {
              var c,
                f = h.length;
              for (u = 0; u < f; u++)
                switch ((h[u].once && this.removeListener(t, h[u].fn, void 0, !0), d)) {
                  case 1:
                    h[u].fn.call(h[u].context);
                    break;
                  case 2:
                    h[u].fn.call(h[u].context, e);
                    break;
                  case 3:
                    h[u].fn.call(h[u].context, e, r);
                    break;
                  case 4:
                    h[u].fn.call(h[u].context, e, r, i);
                    break;
                  default:
                    if (!l) for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                    h[u].fn.apply(h[u].context, l);
                }
            }
            return !0;
          }),
          (u.prototype.on = function (t, e, r) {
            return o(this, t, e, r, !1);
          }),
          (u.prototype.once = function (t, e, r) {
            return o(this, t, e, r, !0);
          }),
          (u.prototype.removeListener = function (t, e, r, i) {
            var a = n ? n + t : t;
            if (!this._events[a]) return this;
            if (!e) return l(this, a), this;
            var s = this._events[a];
            if (s.fn) s.fn !== e || (i && !s.once) || (r && s.context !== r) || l(this, a);
            else {
              for (var o = 0, u = [], h = s.length; o < h; o++)
                (s[o].fn !== e || (i && !s[o].once) || (r && s[o].context !== r)) && u.push(s[o]);
              u.length ? (this._events[a] = 1 === u.length ? u[0] : u) : l(this, a);
            }
            return this;
          }),
          (u.prototype.removeAllListeners = function (t) {
            var e;
            return (
              t
                ? ((e = n ? n + t : t), this._events[e] && l(this, e))
                : ((this._events = new a()), (this._eventsCount = 0)),
              this
            );
          }),
          (u.prototype.off = u.prototype.removeListener),
          (u.prototype.addListener = u.prototype.on),
          (u.prefixed = n),
          (u.EventEmitter = u),
          (t.exports = u);
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return u;
        });
        var i = (function () {
            function t(t, e) {
              (this.subtle = void 0), (this.aesIV = void 0), (this.subtle = t), (this.aesIV = e);
            }
            return (
              (t.prototype.decrypt = function (t, e) {
                return this.subtle.decrypt({ name: 'AES-CBC', iv: this.aesIV }, e, t);
              }),
              t
            );
          })(),
          n = (function () {
            function t(t, e) {
              (this.subtle = void 0), (this.key = void 0), (this.subtle = t), (this.key = e);
            }
            return (
              (t.prototype.expandKey = function () {
                return this.subtle.importKey('raw', this.key, { name: 'AES-CBC' }, !1, [
                  'encrypt',
                  'decrypt',
                ]);
              }),
              t
            );
          })(),
          a = r(9);
        var s = (function () {
            function t() {
              (this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]),
                (this.subMix = [
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                ]),
                (this.invSubMix = [
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                  new Uint32Array(256),
                ]),
                (this.sBox = new Uint32Array(256)),
                (this.invSBox = new Uint32Array(256)),
                (this.key = new Uint32Array(0)),
                (this.ksRows = 0),
                (this.keySize = 0),
                (this.keySchedule = void 0),
                (this.invKeySchedule = void 0),
                this.initTable();
            }
            var e = t.prototype;
            return (
              (e.uint8ArrayToUint32Array_ = function (t) {
                for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++)
                  r[i] = e.getUint32(4 * i);
                return r;
              }),
              (e.initTable = function () {
                var t = this.sBox,
                  e = this.invSBox,
                  r = this.subMix,
                  i = r[0],
                  n = r[1],
                  a = r[2],
                  s = r[3],
                  o = this.invSubMix,
                  l = o[0],
                  u = o[1],
                  h = o[2],
                  d = o[3],
                  c = new Uint32Array(256),
                  f = 0,
                  g = 0,
                  v = 0;
                for (v = 0; v < 256; v++) c[v] = v < 128 ? v << 1 : (v << 1) ^ 283;
                for (v = 0; v < 256; v++) {
                  var p = g ^ (g << 1) ^ (g << 2) ^ (g << 3) ^ (g << 4);
                  (p = (p >>> 8) ^ (255 & p) ^ 99), (t[f] = p), (e[p] = f);
                  var m = c[f],
                    y = c[m],
                    T = c[y],
                    b = (257 * c[p]) ^ (16843008 * p);
                  (i[f] = (b << 24) | (b >>> 8)),
                    (n[f] = (b << 16) | (b >>> 16)),
                    (a[f] = (b << 8) | (b >>> 24)),
                    (s[f] = b),
                    (b = (16843009 * T) ^ (65537 * y) ^ (257 * m) ^ (16843008 * f)),
                    (l[p] = (b << 24) | (b >>> 8)),
                    (u[p] = (b << 16) | (b >>> 16)),
                    (h[p] = (b << 8) | (b >>> 24)),
                    (d[p] = b),
                    f ? ((f = m ^ c[c[c[T ^ m]]]), (g ^= c[c[g]])) : (f = g = 1);
                }
              }),
              (e.expandKey = function (t) {
                for (var e = this.uint8ArrayToUint32Array_(t), r = !0, i = 0; i < e.length && r; )
                  (r = e[i] === this.key[i]), i++;
                if (!r) {
                  this.key = e;
                  var n = (this.keySize = e.length);
                  if (4 !== n && 6 !== n && 8 !== n) throw new Error('Invalid aes key size=' + n);
                  var a,
                    s,
                    o,
                    l,
                    u = (this.ksRows = 4 * (n + 6 + 1)),
                    h = (this.keySchedule = new Uint32Array(u)),
                    d = (this.invKeySchedule = new Uint32Array(u)),
                    c = this.sBox,
                    f = this.rcon,
                    g = this.invSubMix,
                    v = g[0],
                    p = g[1],
                    m = g[2],
                    y = g[3];
                  for (a = 0; a < u; a++)
                    a < n
                      ? (o = h[a] = e[a])
                      : ((l = o),
                        a % n == 0
                          ? ((l =
                              (c[(l = (l << 8) | (l >>> 24)) >>> 24] << 24) |
                              (c[(l >>> 16) & 255] << 16) |
                              (c[(l >>> 8) & 255] << 8) |
                              c[255 & l]),
                            (l ^= f[(a / n) | 0] << 24))
                          : n > 6 &&
                            a % n == 4 &&
                            (l =
                              (c[l >>> 24] << 24) |
                              (c[(l >>> 16) & 255] << 16) |
                              (c[(l >>> 8) & 255] << 8) |
                              c[255 & l]),
                        (h[a] = o = (h[a - n] ^ l) >>> 0));
                  for (s = 0; s < u; s++)
                    (a = u - s),
                      (l = 3 & s ? h[a] : h[a - 4]),
                      (d[s] =
                        s < 4 || a <= 4
                          ? l
                          : v[c[l >>> 24]] ^
                            p[c[(l >>> 16) & 255]] ^
                            m[c[(l >>> 8) & 255]] ^
                            y[c[255 & l]]),
                      (d[s] = d[s] >>> 0);
                }
              }),
              (e.networkToHostOrderSwap = function (t) {
                return (t << 24) | ((65280 & t) << 8) | ((16711680 & t) >> 8) | (t >>> 24);
              }),
              (e.decrypt = function (t, e, r) {
                for (
                  var i,
                    n,
                    a,
                    s,
                    o,
                    l,
                    u,
                    h,
                    d,
                    c,
                    f,
                    g,
                    v,
                    p,
                    m = this.keySize + 6,
                    y = this.invKeySchedule,
                    T = this.invSBox,
                    b = this.invSubMix,
                    E = b[0],
                    S = b[1],
                    L = b[2],
                    A = b[3],
                    R = this.uint8ArrayToUint32Array_(r),
                    D = R[0],
                    k = R[1],
                    _ = R[2],
                    I = R[3],
                    C = new Int32Array(t),
                    w = new Int32Array(C.length),
                    O = this.networkToHostOrderSwap;
                  e < C.length;

                ) {
                  for (
                    d = O(C[e]),
                      c = O(C[e + 1]),
                      f = O(C[e + 2]),
                      g = O(C[e + 3]),
                      o = d ^ y[0],
                      l = g ^ y[1],
                      u = f ^ y[2],
                      h = c ^ y[3],
                      v = 4,
                      p = 1;
                    p < m;
                    p++
                  )
                    (i = E[o >>> 24] ^ S[(l >> 16) & 255] ^ L[(u >> 8) & 255] ^ A[255 & h] ^ y[v]),
                      (n =
                        E[l >>> 24] ^
                        S[(u >> 16) & 255] ^
                        L[(h >> 8) & 255] ^
                        A[255 & o] ^
                        y[v + 1]),
                      (a =
                        E[u >>> 24] ^
                        S[(h >> 16) & 255] ^
                        L[(o >> 8) & 255] ^
                        A[255 & l] ^
                        y[v + 2]),
                      (s =
                        E[h >>> 24] ^
                        S[(o >> 16) & 255] ^
                        L[(l >> 8) & 255] ^
                        A[255 & u] ^
                        y[v + 3]),
                      (o = i),
                      (l = n),
                      (u = a),
                      (h = s),
                      (v += 4);
                  (i =
                    (T[o >>> 24] << 24) ^
                    (T[(l >> 16) & 255] << 16) ^
                    (T[(u >> 8) & 255] << 8) ^
                    T[255 & h] ^
                    y[v]),
                    (n =
                      (T[l >>> 24] << 24) ^
                      (T[(u >> 16) & 255] << 16) ^
                      (T[(h >> 8) & 255] << 8) ^
                      T[255 & o] ^
                      y[v + 1]),
                    (a =
                      (T[u >>> 24] << 24) ^
                      (T[(h >> 16) & 255] << 16) ^
                      (T[(o >> 8) & 255] << 8) ^
                      T[255 & l] ^
                      y[v + 2]),
                    (s =
                      (T[h >>> 24] << 24) ^
                      (T[(o >> 16) & 255] << 16) ^
                      (T[(l >> 8) & 255] << 8) ^
                      T[255 & u] ^
                      y[v + 3]),
                    (w[e] = O(i ^ D)),
                    (w[e + 1] = O(s ^ k)),
                    (w[e + 2] = O(a ^ _)),
                    (w[e + 3] = O(n ^ I)),
                    (D = d),
                    (k = c),
                    (_ = f),
                    (I = g),
                    (e += 4);
                }
                return w.buffer;
              }),
              t
            );
          })(),
          o = r(1),
          l = r(6),
          u = (function () {
            function t(t, e, r) {
              var i = (void 0 === r ? {} : r).removePKCS7Padding,
                n = void 0 === i || i;
              if (
                ((this.logEnabled = !0),
                (this.observer = void 0),
                (this.config = void 0),
                (this.removePKCS7Padding = void 0),
                (this.subtle = null),
                (this.softwareDecrypter = null),
                (this.key = null),
                (this.fastAesKey = null),
                (this.remainderData = null),
                (this.currentIV = null),
                (this.currentResult = null),
                (this.observer = t),
                (this.config = e),
                (this.removePKCS7Padding = n),
                n)
              )
                try {
                  var a = self.crypto;
                  a && (this.subtle = a.subtle || a.webkitSubtle);
                } catch (t) {}
              null === this.subtle && (this.config.enableSoftwareAES = !0);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                this.observer = null;
              }),
              (e.isSync = function () {
                return this.config.enableSoftwareAES;
              }),
              (e.flush = function () {
                var t = this.currentResult;
                if (t) {
                  var e,
                    r,
                    i,
                    n = new Uint8Array(t);
                  return (
                    this.reset(),
                    this.removePKCS7Padding
                      ? ((r = (e = n).byteLength),
                        (i = r && new DataView(e.buffer).getUint8(r - 1))
                          ? Object(a.a)(e, 0, r - i)
                          : e)
                      : n
                  );
                }
                this.reset();
              }),
              (e.reset = function () {
                (this.currentResult = null),
                  (this.currentIV = null),
                  (this.remainderData = null),
                  this.softwareDecrypter && (this.softwareDecrypter = null);
              }),
              (e.decrypt = function (t, e, r, i) {
                if (this.config.enableSoftwareAES) {
                  this.softwareDecrypt(new Uint8Array(t), e, r);
                  var n = this.flush();
                  n && i(n.buffer);
                } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i);
              }),
              (e.softwareDecrypt = function (t, e, r) {
                var i = this.currentIV,
                  n = this.currentResult,
                  o = this.remainderData;
                this.logOnce('JS AES decrypt'),
                  o && ((t = Object(l.a)(o, t)), (this.remainderData = null));
                var u = this.getValidChunk(t);
                if (!u.length) return null;
                i && (r = i);
                var h = this.softwareDecrypter;
                h || (h = this.softwareDecrypter = new s()), h.expandKey(e);
                var d = n;
                return (
                  (this.currentResult = h.decrypt(u.buffer, 0, r)),
                  (this.currentIV = Object(a.a)(u, -16).buffer),
                  d || null
                );
              }),
              (e.webCryptoDecrypt = function (t, e, r) {
                var a = this,
                  s = this.subtle;
                return (
                  (this.key === e && this.fastAesKey) ||
                    ((this.key = e), (this.fastAesKey = new n(s, e))),
                  this.fastAesKey
                    .expandKey()
                    .then(function (e) {
                      return s
                        ? new i(s, r).decrypt(t.buffer, e)
                        : Promise.reject(new Error('web crypto not initialized'));
                    })
                    .catch(function (i) {
                      return a.onWebCryptoError(i, t, e, r);
                    })
                );
              }),
              (e.onWebCryptoError = function (t, e, r, i) {
                return (
                  o.b.warn('[decrypter.ts]: WebCrypto Error, disable WebCrypto API:', t),
                  (this.config.enableSoftwareAES = !0),
                  (this.logEnabled = !0),
                  this.softwareDecrypt(e, r, i)
                );
              }),
              (e.getValidChunk = function (t) {
                var e = t,
                  r = t.length - (t.length % 16);
                return (
                  r !== t.length &&
                    ((e = Object(a.a)(t, 0, r)), (this.remainderData = Object(a.a)(t, r))),
                  e
                );
              }),
              (e.logOnce = function (t) {
                this.logEnabled && (o.b.log('[decrypter.ts]: ' + t), (this.logEnabled = !1));
              }),
              t
            );
          })();
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return m;
        }),
          r.d(e, 'b', function () {
            return y;
          });
        var i = r(3),
          n = (function () {
            function t() {}
            return (
              (t.getSilentFrame = function (t, e) {
                switch (t) {
                  case 'mp4a.40.2':
                    if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                    if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                    if (3 === e)
                      return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                    if (4 === e)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56,
                      ]);
                    if (5 === e)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144,
                        2, 56,
                      ]);
                    if (6 === e)
                      return new Uint8Array([
                        0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144,
                        2, 0, 178, 0, 32, 8, 224,
                      ]);
                    break;
                  default:
                    if (1 === e)
                      return new Uint8Array([
                        1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 94,
                      ]);
                    if (2 === e)
                      return new Uint8Array([
                        1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161,
                        10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 94,
                      ]);
                    if (3 === e)
                      return new Uint8Array([
                        1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161,
                        10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                        90, 94,
                      ]);
                }
              }),
              t
            );
          })(),
          a = Math.pow(2, 32) - 1,
          s = (function () {
            function t() {}
            return (
              (t.init = function () {
                var e;
                for (e in ((t.types = {
                  avc1: [],
                  avcC: [],
                  btrt: [],
                  dinf: [],
                  dref: [],
                  esds: [],
                  ftyp: [],
                  hdlr: [],
                  mdat: [],
                  mdhd: [],
                  mdia: [],
                  mfhd: [],
                  minf: [],
                  moof: [],
                  moov: [],
                  mp4a: [],
                  '.mp3': [],
                  mvex: [],
                  mvhd: [],
                  pasp: [],
                  sdtp: [],
                  stbl: [],
                  stco: [],
                  stsc: [],
                  stsd: [],
                  stsz: [],
                  stts: [],
                  tfdt: [],
                  tfhd: [],
                  traf: [],
                  trak: [],
                  trun: [],
                  trex: [],
                  tkhd: [],
                  vmhd: [],
                  smhd: [],
                }),
                t.types))
                  t.types.hasOwnProperty(e) &&
                    (t.types[e] = [
                      e.charCodeAt(0),
                      e.charCodeAt(1),
                      e.charCodeAt(2),
                      e.charCodeAt(3),
                    ]);
                var r = new Uint8Array([
                    0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0,
                  ]),
                  i = new Uint8Array([
                    0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0,
                  ]);
                t.HDLR_TYPES = { video: r, audio: i };
                var n = new Uint8Array([
                    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1,
                  ]),
                  a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                (t.STTS = t.STSC = t.STCO = a),
                  (t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                  (t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])),
                  (t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                  (t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]));
                var s = new Uint8Array([105, 115, 111, 109]),
                  o = new Uint8Array([97, 118, 99, 49]),
                  l = new Uint8Array([0, 0, 0, 1]);
                (t.FTYP = t.box(t.types.ftyp, s, l, s, o)),
                  (t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n)));
              }),
              (t.box = function (t) {
                for (
                  var e = 8, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
                  n < r;
                  n++
                )
                  i[n - 1] = arguments[n];
                for (var a = i.length, s = a; a--; ) e += i[a].byteLength;
                var o = new Uint8Array(e);
                for (
                  o[0] = (e >> 24) & 255,
                    o[1] = (e >> 16) & 255,
                    o[2] = (e >> 8) & 255,
                    o[3] = 255 & e,
                    o.set(t, 4),
                    a = 0,
                    e = 8;
                  a < s;
                  a++
                )
                  o.set(i[a], e), (e += i[a].byteLength);
                return o;
              }),
              (t.hdlr = function (e) {
                return t.box(t.types.hdlr, t.HDLR_TYPES[e]);
              }),
              (t.mdat = function (e) {
                return t.box(t.types.mdat, e);
              }),
              (t.mdhd = function (e, r) {
                r *= e;
                var i = Math.floor(r / (a + 1)),
                  n = Math.floor(r % (a + 1));
                return t.box(
                  t.types.mdhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    255 & e,
                    i >> 24,
                    (i >> 16) & 255,
                    (i >> 8) & 255,
                    255 & i,
                    n >> 24,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    255 & n,
                    85,
                    196,
                    0,
                    0,
                  ]),
                );
              }),
              (t.mdia = function (e) {
                return t.box(
                  t.types.mdia,
                  t.mdhd(e.timescale, e.duration),
                  t.hdlr(e.type),
                  t.minf(e),
                );
              }),
              (t.mfhd = function (e) {
                return t.box(
                  t.types.mfhd,
                  new Uint8Array([0, 0, 0, 0, e >> 24, (e >> 16) & 255, (e >> 8) & 255, 255 & e]),
                );
              }),
              (t.minf = function (e) {
                return 'audio' === e.type
                  ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e))
                  : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e));
              }),
              (t.moof = function (e, r, i) {
                return t.box(t.types.moof, t.mfhd(e), t.traf(i, r));
              }),
              (t.moov = function (e) {
                for (var r = e.length, i = []; r--; ) i[r] = t.trak(e[r]);
                return t.box.apply(
                  null,
                  [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)),
                );
              }),
              (t.mvex = function (e) {
                for (var r = e.length, i = []; r--; ) i[r] = t.trex(e[r]);
                return t.box.apply(null, [t.types.mvex].concat(i));
              }),
              (t.mvhd = function (e, r) {
                r *= e;
                var i = Math.floor(r / (a + 1)),
                  n = Math.floor(r % (a + 1)),
                  s = new Uint8Array([
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    255 & e,
                    i >> 24,
                    (i >> 16) & 255,
                    (i >> 8) & 255,
                    255 & i,
                    n >> 24,
                    (n >> 16) & 255,
                    (n >> 8) & 255,
                    255 & n,
                    0,
                    1,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    255,
                    255,
                    255,
                    255,
                  ]);
                return t.box(t.types.mvhd, s);
              }),
              (t.sdtp = function (e) {
                var r,
                  i,
                  n = e.samples || [],
                  a = new Uint8Array(4 + n.length);
                for (r = 0; r < n.length; r++)
                  (i = n[r].flags),
                    (a[r + 4] = (i.dependsOn << 4) | (i.isDependedOn << 2) | i.hasRedundancy);
                return t.box(t.types.sdtp, a);
              }),
              (t.stbl = function (e) {
                return t.box(
                  t.types.stbl,
                  t.stsd(e),
                  t.box(t.types.stts, t.STTS),
                  t.box(t.types.stsc, t.STSC),
                  t.box(t.types.stsz, t.STSZ),
                  t.box(t.types.stco, t.STCO),
                );
              }),
              (t.avc1 = function (e) {
                var r,
                  i,
                  n,
                  a = [],
                  s = [];
                for (r = 0; r < e.sps.length; r++)
                  (n = (i = e.sps[r]).byteLength),
                    a.push((n >>> 8) & 255),
                    a.push(255 & n),
                    (a = a.concat(Array.prototype.slice.call(i)));
                for (r = 0; r < e.pps.length; r++)
                  (n = (i = e.pps[r]).byteLength),
                    s.push((n >>> 8) & 255),
                    s.push(255 & n),
                    (s = s.concat(Array.prototype.slice.call(i)));
                var o = t.box(
                    t.types.avcC,
                    new Uint8Array(
                      [1, a[3], a[4], a[5], 255, 224 | e.sps.length]
                        .concat(a)
                        .concat([e.pps.length])
                        .concat(s),
                    ),
                  ),
                  l = e.width,
                  u = e.height,
                  h = e.pixelRatio[0],
                  d = e.pixelRatio[1];
                return t.box(
                  t.types.avc1,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    (l >> 8) & 255,
                    255 & l,
                    (u >> 8) & 255,
                    255 & u,
                    0,
                    72,
                    0,
                    0,
                    0,
                    72,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    18,
                    100,
                    97,
                    105,
                    108,
                    121,
                    109,
                    111,
                    116,
                    105,
                    111,
                    110,
                    47,
                    104,
                    108,
                    115,
                    46,
                    106,
                    115,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    24,
                    17,
                    17,
                  ]),
                  o,
                  t.box(
                    t.types.btrt,
                    new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]),
                  ),
                  t.box(
                    t.types.pasp,
                    new Uint8Array([
                      h >> 24,
                      (h >> 16) & 255,
                      (h >> 8) & 255,
                      255 & h,
                      d >> 24,
                      (d >> 16) & 255,
                      (d >> 8) & 255,
                      255 & d,
                    ]),
                  ),
                );
              }),
              (t.esds = function (t) {
                var e = t.config.length;
                return new Uint8Array(
                  [
                    0,
                    0,
                    0,
                    0,
                    3,
                    23 + e,
                    0,
                    1,
                    0,
                    4,
                    15 + e,
                    64,
                    21,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5,
                  ]
                    .concat([e])
                    .concat(t.config)
                    .concat([6, 1, 2]),
                );
              }),
              (t.mp4a = function (e) {
                var r = e.samplerate;
                return t.box(
                  t.types.mp4a,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    e.channelCount,
                    0,
                    16,
                    0,
                    0,
                    0,
                    0,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0,
                  ]),
                  t.box(t.types.esds, t.esds(e)),
                );
              }),
              (t.mp3 = function (e) {
                var r = e.samplerate;
                return t.box(
                  t.types['.mp3'],
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    e.channelCount,
                    0,
                    16,
                    0,
                    0,
                    0,
                    0,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0,
                  ]),
                );
              }),
              (t.stsd = function (e) {
                return 'audio' === e.type
                  ? e.isAAC || 'mp3' !== e.codec
                    ? t.box(t.types.stsd, t.STSD, t.mp4a(e))
                    : t.box(t.types.stsd, t.STSD, t.mp3(e))
                  : t.box(t.types.stsd, t.STSD, t.avc1(e));
              }),
              (t.tkhd = function (e) {
                var r = e.id,
                  i = e.duration * e.timescale,
                  n = e.width,
                  s = e.height,
                  o = Math.floor(i / (a + 1)),
                  l = Math.floor(i % (a + 1));
                return t.box(
                  t.types.tkhd,
                  new Uint8Array([
                    1,
                    0,
                    0,
                    7,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    3,
                    (r >> 24) & 255,
                    (r >> 16) & 255,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0,
                    0,
                    0,
                    o >> 24,
                    (o >> 16) & 255,
                    (o >> 8) & 255,
                    255 & o,
                    l >> 24,
                    (l >> 16) & 255,
                    (l >> 8) & 255,
                    255 & l,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    64,
                    0,
                    0,
                    0,
                    (n >> 8) & 255,
                    255 & n,
                    0,
                    0,
                    (s >> 8) & 255,
                    255 & s,
                    0,
                    0,
                  ]),
                );
              }),
              (t.traf = function (e, r) {
                var i = t.sdtp(e),
                  n = e.id,
                  s = Math.floor(r / (a + 1)),
                  o = Math.floor(r % (a + 1));
                return t.box(
                  t.types.traf,
                  t.box(
                    t.types.tfhd,
                    new Uint8Array([0, 0, 0, 0, n >> 24, (n >> 16) & 255, (n >> 8) & 255, 255 & n]),
                  ),
                  t.box(
                    t.types.tfdt,
                    new Uint8Array([
                      1,
                      0,
                      0,
                      0,
                      s >> 24,
                      (s >> 16) & 255,
                      (s >> 8) & 255,
                      255 & s,
                      o >> 24,
                      (o >> 16) & 255,
                      (o >> 8) & 255,
                      255 & o,
                    ]),
                  ),
                  t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8),
                  i,
                );
              }),
              (t.trak = function (e) {
                return (
                  (e.duration = e.duration || 4294967295), t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                );
              }),
              (t.trex = function (e) {
                var r = e.id;
                return t.box(
                  t.types.trex,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    r >> 24,
                    (r >> 16) & 255,
                    (r >> 8) & 255,
                    255 & r,
                    0,
                    0,
                    0,
                    1,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    1,
                  ]),
                );
              }),
              (t.trun = function (e, r) {
                var i,
                  n,
                  a,
                  s,
                  o,
                  l,
                  u = e.samples || [],
                  h = u.length,
                  d = 12 + 16 * h,
                  c = new Uint8Array(d);
                for (
                  r += 8 + d,
                    c.set(
                      [
                        0,
                        0,
                        15,
                        1,
                        (h >>> 24) & 255,
                        (h >>> 16) & 255,
                        (h >>> 8) & 255,
                        255 & h,
                        (r >>> 24) & 255,
                        (r >>> 16) & 255,
                        (r >>> 8) & 255,
                        255 & r,
                      ],
                      0,
                    ),
                    i = 0;
                  i < h;
                  i++
                )
                  (a = (n = u[i]).duration),
                    (s = n.size),
                    (o = n.flags),
                    (l = n.cts),
                    c.set(
                      [
                        (a >>> 24) & 255,
                        (a >>> 16) & 255,
                        (a >>> 8) & 255,
                        255 & a,
                        (s >>> 24) & 255,
                        (s >>> 16) & 255,
                        (s >>> 8) & 255,
                        255 & s,
                        (o.isLeading << 2) | o.dependsOn,
                        (o.isDependedOn << 6) |
                          (o.hasRedundancy << 4) |
                          (o.paddingValue << 1) |
                          o.isNonSync,
                        61440 & o.degradPrio,
                        15 & o.degradPrio,
                        (l >>> 24) & 255,
                        (l >>> 16) & 255,
                        (l >>> 8) & 255,
                        255 & l,
                      ],
                      12 + 16 * i,
                    );
                return t.box(t.types.trun, c);
              }),
              (t.initSegment = function (e) {
                t.types || t.init();
                var r = t.moov(e),
                  i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i;
              }),
              t
            );
          })();
        (s.types = void 0),
          (s.HDLR_TYPES = void 0),
          (s.STTS = void 0),
          (s.STSC = void 0),
          (s.STCO = void 0),
          (s.STSZ = void 0),
          (s.VMHD = void 0),
          (s.SMHD = void 0),
          (s.STSD = void 0),
          (s.FTYP = void 0),
          (s.DINF = void 0);
        var o = s,
          l = r(0),
          u = r(2),
          h = r(1),
          d = r(4),
          c = r(8);
        function f() {
          return (f =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        var g = null,
          v = null,
          p = !1,
          m = (function () {
            function t(t, e, r, i) {
              if (
                (void 0 === i && (i = ''),
                (this.observer = void 0),
                (this.config = void 0),
                (this.typeSupported = void 0),
                (this.ISGenerated = !1),
                (this._initPTS = void 0),
                (this._initDTS = void 0),
                (this.nextAvcDts = null),
                (this.nextAudioPts = null),
                (this.isAudioContiguous = !1),
                (this.isVideoContiguous = !1),
                (this.observer = t),
                (this.config = e),
                (this.typeSupported = r),
                (this.ISGenerated = !1),
                null === g)
              ) {
                var n = (navigator.userAgent || '').match(/Chrome\/(\d+)/i);
                g = n ? parseInt(n[1]) : 0;
              }
              if (null === v) {
                var a = navigator.userAgent.match(/Safari\/(\d+)/i);
                v = a ? parseInt(a[1]) : 0;
              }
              p = (!!g && g < 75) || (!!v && v < 600);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {}),
              (e.resetTimeStamp = function (t) {
                h.b.log('[mp4-remuxer]: initPTS & initDTS reset'),
                  (this._initPTS = this._initDTS = t);
              }),
              (e.resetNextTimestamp = function () {
                h.b.log('[mp4-remuxer]: reset next timestamp'),
                  (this.isVideoContiguous = !1),
                  (this.isAudioContiguous = !1);
              }),
              (e.resetInitSegment = function () {
                h.b.log('[mp4-remuxer]: ISGenerated flag reset'), (this.ISGenerated = !1);
              }),
              (e.getVideoStartPts = function (t) {
                var e = !1,
                  r = t.reduce(function (t, r) {
                    var i = r.pts - t;
                    return i < -4294967296 ? ((e = !0), y(t, r.pts)) : i > 0 ? t : r.pts;
                  }, t[0].pts);
                return e && h.b.debug('PTS rollover detected'), r;
              }),
              (e.remux = function (t, e, r, i, n, a, s, o) {
                var l,
                  u,
                  c,
                  f,
                  g,
                  v,
                  p = n,
                  m = n,
                  T = t.pid > -1,
                  b = e.pid > -1,
                  E = e.samples.length,
                  S = t.samples.length > 0,
                  L = E > 1;
                if (((!T || S) && (!b || L)) || this.ISGenerated || s) {
                  this.ISGenerated || (c = this.generateIS(t, e, n));
                  var A = this.isVideoContiguous,
                    R = -1;
                  if (
                    L &&
                    ((R = (function (t) {
                      for (var e = 0; e < t.length; e++) if (t[e].key) return e;
                      return -1;
                    })(e.samples)),
                    !A && this.config.forceKeyFrameOnDiscontinuity)
                  )
                    if (((v = !0), R > 0)) {
                      h.b.warn(
                        '[mp4-remuxer]: Dropped ' +
                          R +
                          ' out of ' +
                          E +
                          ' video samples due to a missing keyframe',
                      );
                      var D = this.getVideoStartPts(e.samples);
                      (e.samples = e.samples.slice(R)),
                        (e.dropped += R),
                        (m += (e.samples[0].pts - D) / (e.timescale || 9e4));
                    } else
                      -1 === R &&
                        (h.b.warn(
                          '[mp4-remuxer]: No keyframe found out of ' + E + ' video samples',
                        ),
                        (v = !1));
                  if (this.ISGenerated) {
                    if (S && L) {
                      var k = this.getVideoStartPts(e.samples),
                        _ = (y(t.samples[0].pts, k) - k) / e.inputTimeScale;
                      (p += Math.max(0, _)), (m += Math.max(0, -_));
                    }
                    if (S) {
                      if (
                        (t.samplerate ||
                          (h.b.warn('[mp4-remuxer]: regenerate InitSegment as audio detected'),
                          (c = this.generateIS(t, e, n))),
                        (u = this.remuxAudio(
                          t,
                          p,
                          this.isAudioContiguous,
                          a,
                          b || L || o === d.b.AUDIO ? m : void 0,
                        )),
                        L)
                      ) {
                        var I = u ? u.endPTS - u.startPTS : 0;
                        e.inputTimeScale ||
                          (h.b.warn('[mp4-remuxer]: regenerate InitSegment as video detected'),
                          (c = this.generateIS(t, e, n))),
                          (l = this.remuxVideo(e, m, A, I));
                      }
                    } else L && (l = this.remuxVideo(e, m, A, 0));
                    l && ((l.firstKeyFrame = R), (l.independent = -1 !== R));
                  }
                }
                return (
                  this.ISGenerated &&
                    (r.samples.length && (g = this.remuxID3(r, n)),
                    i.samples.length && (f = this.remuxText(i, n))),
                  { audio: u, video: l, initSegment: c, independent: v, text: f, id3: g }
                );
              }),
              (e.generateIS = function (t, e, r) {
                var n,
                  a,
                  s,
                  l = t.samples,
                  u = e.samples,
                  h = this.typeSupported,
                  d = {},
                  c = !Object(i.a)(this._initPTS),
                  f = 'audio/mp4';
                if (
                  (c && (n = a = 1 / 0),
                  t.config &&
                    l.length &&
                    ((t.timescale = t.samplerate),
                    t.isAAC ||
                      (h.mpeg ? ((f = 'audio/mpeg'), (t.codec = '')) : h.mp3 && (t.codec = 'mp3')),
                    (d.audio = {
                      id: 'audio',
                      container: f,
                      codec: t.codec,
                      initSegment: !t.isAAC && h.mpeg ? new Uint8Array(0) : o.initSegment([t]),
                      metadata: { channelCount: t.channelCount },
                    }),
                    c && ((s = t.inputTimeScale), (n = a = l[0].pts - Math.round(s * r)))),
                  e.sps &&
                    e.pps &&
                    u.length &&
                    ((e.timescale = e.inputTimeScale),
                    (d.video = {
                      id: 'main',
                      container: 'video/mp4',
                      codec: e.codec,
                      initSegment: o.initSegment([e]),
                      metadata: { width: e.width, height: e.height },
                    }),
                    c))
                ) {
                  s = e.inputTimeScale;
                  var g = this.getVideoStartPts(u),
                    v = Math.round(s * r);
                  (a = Math.min(a, y(u[0].dts, g) - v)), (n = Math.min(n, g - v));
                }
                if (Object.keys(d).length)
                  return (
                    (this.ISGenerated = !0),
                    c && ((this._initPTS = n), (this._initDTS = a)),
                    { tracks: d, initPTS: n, timescale: s }
                  );
              }),
              (e.remuxVideo = function (t, e, r, i) {
                var n,
                  a,
                  s,
                  d = t.inputTimeScale,
                  v = t.samples,
                  m = [],
                  b = v.length,
                  E = this._initPTS,
                  S = this.nextAvcDts,
                  L = 8,
                  A = Number.POSITIVE_INFINITY,
                  R = Number.NEGATIVE_INFINITY,
                  D = 0,
                  k = !1;
                (r && null !== S) || (S = e * d - (v[0].pts - y(v[0].dts, v[0].pts)));
                for (var _ = 0; _ < b; _++) {
                  var I = v[_];
                  if (((I.pts = y(I.pts - E, S)), (I.dts = y(I.dts - E, S)), I.dts > I.pts)) {
                    D = Math.max(Math.min(D, I.pts - I.dts), -18e3);
                  }
                  I.dts < v[_ > 0 ? _ - 1 : _].dts && (k = !0);
                }
                k &&
                  v.sort(function (t, e) {
                    var r = t.dts - e.dts,
                      i = t.pts - e.pts;
                    return r || i;
                  }),
                  (a = v[0].dts),
                  (s = v[v.length - 1].dts);
                var C = Math.round((s - a) / (b - 1));
                if (D < 0) {
                  if (D < -2 * C) {
                    h.b.warn(
                      'PTS < DTS detected in video samples, offsetting DTS from PTS by ' +
                        Object(c.b)(-C, !0) +
                        ' ms',
                    );
                    for (var w = D, O = 0; O < b; O++)
                      (v[O].dts = w = Math.max(w, v[O].pts - C)),
                        (v[O].pts = Math.max(w, v[O].pts));
                  } else {
                    h.b.warn(
                      'PTS < DTS detected in video samples, shifting DTS by ' +
                        Object(c.b)(D, !0) +
                        ' ms to overcome this issue',
                    );
                    for (var x = 0; x < b; x++) v[x].dts = v[x].dts + D;
                  }
                  a = v[0].dts;
                }
                if (r) {
                  var P = a - S,
                    M = P > C;
                  if (M || P < -1) {
                    M
                      ? h.b.warn(
                          'AVC: ' +
                            Object(c.b)(P, !0) +
                            ' ms (' +
                            P +
                            'dts) hole between fragments detected, filling it',
                        )
                      : h.b.warn(
                          'AVC: ' +
                            Object(c.b)(-P, !0) +
                            ' ms (' +
                            P +
                            'dts) overlapping between fragments detected',
                        ),
                      (a = S);
                    var F = v[0].pts - P;
                    (v[0].dts = a),
                      (v[0].pts = F),
                      h.b.log(
                        'Video: First PTS/DTS adjusted: ' +
                          Object(c.b)(F, !0) +
                          '/' +
                          Object(c.b)(a, !0) +
                          ', delta: ' +
                          Object(c.b)(P, !0) +
                          ' ms',
                      );
                  }
                }
                p && (a = Math.max(0, a));
                for (var N = 0, U = 0, B = 0; B < b; B++) {
                  for (var G = v[B], K = G.units, j = K.length, H = 0, V = 0; V < j; V++)
                    H += K[V].data.length;
                  (U += H),
                    (N += j),
                    (G.length = H),
                    (G.dts = Math.max(G.dts, a)),
                    (G.pts = Math.max(G.pts, G.dts, 0)),
                    (A = Math.min(G.pts, A)),
                    (R = Math.max(G.pts, R));
                }
                s = v[b - 1].dts;
                var W,
                  Y = U + 4 * N + 8;
                try {
                  W = new Uint8Array(Y);
                } catch (t) {
                  return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                    type: u.b.MUX_ERROR,
                    details: u.a.REMUX_ALLOC_ERROR,
                    fatal: !1,
                    bytes: Y,
                    reason: 'fail allocating video mdat ' + Y,
                  });
                }
                var q = new DataView(W.buffer);
                q.setUint32(0, Y), W.set(o.types.mdat, 4);
                for (var X = 0; X < b; X++) {
                  for (var z = v[X], Q = z.units, $ = 0, J = 0, Z = Q.length; J < Z; J++) {
                    var tt = Q[J],
                      et = tt.data,
                      rt = tt.data.byteLength;
                    q.setUint32(L, rt), (L += 4), W.set(et, L), (L += rt), ($ += 4 + rt);
                  }
                  if (X < b - 1) n = v[X + 1].dts - z.dts;
                  else {
                    var it = this.config,
                      nt = z.dts - v[X > 0 ? X - 1 : X].dts;
                    if (it.stretchShortVideoTrack && null !== this.nextAudioPts) {
                      var at = Math.floor(it.maxBufferHole * d),
                        st = (i ? A + i * d : this.nextAudioPts) - z.pts;
                      st > at
                        ? ((n = st - nt) < 0 && (n = nt),
                          h.b.log(
                            '[mp4-remuxer]: It is approximately ' +
                              st / 90 +
                              ' ms to the next segment; using duration ' +
                              n / 90 +
                              ' ms for the last video frame.',
                          ))
                        : (n = nt);
                    } else n = nt;
                  }
                  var ot = Math.round(z.pts - z.dts);
                  m.push(new T(z.key, n, $, ot));
                }
                if (m.length && g && g < 70) {
                  var lt = m[0].flags;
                  (lt.dependsOn = 2), (lt.isNonSync = 0);
                }
                (this.nextAvcDts = S = s + n), (this.isVideoContiguous = !0);
                var ut = {
                  data1: o.moof(t.sequenceNumber++, a, f({}, t, { samples: m })),
                  data2: W,
                  startPTS: A / d,
                  endPTS: (R + n) / d,
                  startDTS: a / d,
                  endDTS: S / d,
                  type: 'video',
                  hasAudio: !1,
                  hasVideo: !0,
                  nb: m.length,
                  dropped: t.dropped,
                };
                return (t.samples = []), (t.dropped = 0), ut;
              }),
              (e.remuxAudio = function (t, e, r, i, a) {
                var s = t.inputTimeScale,
                  d = s / (t.samplerate ? t.samplerate : s),
                  c = t.isAAC ? 1024 : 1152,
                  g = c * d,
                  v = this._initPTS,
                  p = !t.isAAC && this.typeSupported.mpeg,
                  m = [],
                  b = t.samples,
                  E = p ? 0 : 8,
                  S = this.nextAudioPts || -1,
                  L = e * s;
                if (
                  ((this.isAudioContiguous = r =
                    r ||
                    (b.length &&
                      S > 0 &&
                      ((i && Math.abs(L - S) < 9e3) || Math.abs(y(b[0].pts - v, L) - S) < 20 * g))),
                  b.forEach(function (t) {
                    t.pts = y(t.pts - v, L);
                  }),
                  !r || S < 0)
                ) {
                  if (
                    !(b = b.filter(function (t) {
                      return t.pts >= 0;
                    })).length
                  )
                    return;
                  S = 0 === a ? 0 : i ? Math.max(0, L) : b[0].pts;
                }
                if (t.isAAC)
                  for (
                    var A = void 0 !== a, R = this.config.maxAudioFramesDrift, D = 0, k = S;
                    D < b.length;
                    D++
                  ) {
                    var _ = b[D],
                      I = _.pts,
                      C = I - k,
                      w = Math.abs((1e3 * C) / s);
                    if (C <= -R * g && A)
                      0 === D &&
                        (h.b.warn(
                          'Audio frame @ ' +
                            (I / s).toFixed(3) +
                            's overlaps nextAudioPts by ' +
                            Math.round((1e3 * C) / s) +
                            ' ms.',
                        ),
                        (this.nextAudioPts = S = k = I));
                    else if (C >= R * g && w < 1e4 && A) {
                      var O = Math.round(C / g);
                      (k = I - O * g) < 0 && (O--, (k += g)),
                        0 === D && (this.nextAudioPts = S = k),
                        h.b.warn(
                          '[mp4-remuxer]: Injecting ' +
                            O +
                            ' audio frame @ ' +
                            (k / s).toFixed(3) +
                            's due to ' +
                            Math.round((1e3 * C) / s) +
                            ' ms gap.',
                        );
                      for (var x = 0; x < O; x++) {
                        var P = Math.max(k, 0),
                          M = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                        M ||
                          (h.b.log(
                            '[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead.',
                          ),
                          (M = _.unit.subarray())),
                          b.splice(D, 0, { unit: M, pts: P }),
                          (k += g),
                          D++;
                      }
                    }
                    (_.pts = k), (k += g);
                  }
                for (var F, N = null, U = null, B = 0, G = b.length; G--; )
                  B += b[G].unit.byteLength;
                for (var K = 0, j = b.length; K < j; K++) {
                  var H = b[K],
                    V = H.unit,
                    W = H.pts;
                  if (null !== U) {
                    m[K - 1].duration = Math.round((W - U) / d);
                  } else {
                    if ((r && t.isAAC && (W = S), (N = W), !(B > 0))) return;
                    B += E;
                    try {
                      F = new Uint8Array(B);
                    } catch (t) {
                      return void this.observer.emit(l.a.ERROR, l.a.ERROR, {
                        type: u.b.MUX_ERROR,
                        details: u.a.REMUX_ALLOC_ERROR,
                        fatal: !1,
                        bytes: B,
                        reason: 'fail allocating audio mdat ' + B,
                      });
                    }
                    p || (new DataView(F.buffer).setUint32(0, B), F.set(o.types.mdat, 4));
                  }
                  F.set(V, E);
                  var Y = V.byteLength;
                  (E += Y), m.push(new T(!0, c, Y, 0)), (U = W);
                }
                var q = m.length;
                if (q) {
                  var X = m[m.length - 1];
                  this.nextAudioPts = S = U + d * X.duration;
                  var z = p
                    ? new Uint8Array(0)
                    : o.moof(t.sequenceNumber++, N / d, f({}, t, { samples: m }));
                  t.samples = [];
                  var Q = N / s,
                    $ = S / s,
                    J = {
                      data1: z,
                      data2: F,
                      startPTS: Q,
                      endPTS: $,
                      startDTS: Q,
                      endDTS: $,
                      type: 'audio',
                      hasAudio: !0,
                      hasVideo: !1,
                      nb: q,
                    };
                  return (this.isAudioContiguous = !0), J;
                }
              }),
              (e.remuxEmptyAudio = function (t, e, r, i) {
                var a = t.inputTimeScale,
                  s = a / (t.samplerate ? t.samplerate : a),
                  o = this.nextAudioPts,
                  l = (null !== o ? o : i.startDTS * a) + this._initDTS,
                  u = i.endDTS * a + this._initDTS,
                  d = 1024 * s,
                  c = Math.ceil((u - l) / d),
                  f = n.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                if ((h.b.warn('[mp4-remuxer]: remux empty Audio'), f)) {
                  for (var g = [], v = 0; v < c; v++) {
                    var p = l + v * d;
                    g.push({ unit: f, pts: p, dts: p });
                  }
                  return (t.samples = g), this.remuxAudio(t, e, r, !1);
                }
                h.b.trace(
                  '[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec',
                );
              }),
              (e.remuxID3 = function (t, e) {
                var r = t.samples.length;
                if (r) {
                  for (
                    var i = t.inputTimeScale, n = this._initPTS, a = this._initDTS, s = 0;
                    s < r;
                    s++
                  ) {
                    var o = t.samples[s];
                    (o.pts = y(o.pts - n, e * i) / i), (o.dts = y(o.dts - a, e * i) / i);
                  }
                  var l = t.samples;
                  return (t.samples = []), { samples: l };
                }
              }),
              (e.remuxText = function (t, e) {
                var r = t.samples.length;
                if (r) {
                  for (var i = t.inputTimeScale, n = this._initPTS, a = 0; a < r; a++) {
                    var s = t.samples[a];
                    s.pts = y(s.pts - n, e * i) / i;
                  }
                  t.samples.sort(function (t, e) {
                    return t.pts - e.pts;
                  });
                  var o = t.samples;
                  return (t.samples = []), { samples: o };
                }
              }),
              t
            );
          })();
        function y(t, e) {
          var r;
          if (null === e) return t;
          for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296; ) t += r;
          return t;
        }
        var T = function (t, e, r, i) {
            (this.size = void 0),
              (this.duration = void 0),
              (this.cts = void 0),
              (this.flags = void 0),
              (this.duration = e),
              (this.size = r),
              (this.cts = i),
              (this.flags = new b(t));
          },
          b = function (t) {
            (this.isLeading = 0),
              (this.isDependedOn = 0),
              (this.hasRedundancy = 0),
              (this.degradPrio = 0),
              (this.dependsOn = 1),
              (this.isNonSync = 1),
              (this.dependsOn = t ? 2 : 1),
              (this.isNonSync = t ? 0 : 1);
          };
      },
      function (t, e, r) {
        'use strict';
        r.d(e, 'a', function () {
          return a;
        });
        var i = r(11);
        function n(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var a = (function () {
          function t(t, e) {
            (this._uri = null),
              (this.method = null),
              (this.keyFormat = null),
              (this.keyFormatVersions = null),
              (this.keyID = null),
              (this.key = null),
              (this.iv = null),
              (this._uri = e ? Object(i.buildAbsoluteURL)(t, e, { alwaysNormalize: !0 }) : t);
          }
          var e, r, a;
          return (
            (t.fromURL = function (e, r) {
              return new t(e, r);
            }),
            (t.fromURI = function (e) {
              return new t(e);
            }),
            (e = t),
            (r = [
              {
                key: 'uri',
                get: function () {
                  return this._uri;
                },
              },
            ]) && n(e.prototype, r),
            a && n(e, a),
            t
          );
        })();
      },
      function (t, e, r) {
        function i(t) {
          var e = {};
          function r(i) {
            if (e[i]) return e[i].exports;
            var n = (e[i] = { i: i, l: !1, exports: {} });
            return t[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
          }
          (r.m = t),
            (r.c = e),
            (r.i = function (t) {
              return t;
            }),
            (r.d = function (t, e, i) {
              r.o(t, e) ||
                Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: i });
            }),
            (r.r = function (t) {
              Object.defineProperty(t, '__esModule', { value: !0 });
            }),
            (r.n = function (t) {
              var e =
                t && t.__esModule
                  ? function () {
                      return t.default;
                    }
                  : function () {
                      return t;
                    };
              return r.d(e, 'a', e), e;
            }),
            (r.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (r.p = '/'),
            (r.oe = function (t) {
              throw (console.error(t), t);
            });
          var i = r((r.s = ENTRY_MODULE));
          return i.default || i;
        }
        function n(t) {
          return (t + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
        }
        function a(t, e, i) {
          var a = {};
          a[i] = [];
          var s = e.toString(),
            o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!o) return a;
          for (
            var l,
              u = o[1],
              h = new RegExp(
                '(\\\\n|\\W)' + n(u) + '\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
                'g',
              );
            (l = h.exec(s));

          )
            'dll-reference' !== l[3] && a[i].push(l[3]);
          for (
            h = new RegExp(
              '\\(' +
                n(u) +
                '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
              'g',
            );
            (l = h.exec(s));

          )
            t[l[2]] || (a[i].push(l[1]), (t[l[2]] = r(l[1]).m)),
              (a[l[2]] = a[l[2]] || []),
              a[l[2]].push(l[4]);
          for (var d, c = Object.keys(a), f = 0; f < c.length; f++)
            for (var g = 0; g < a[c[f]].length; g++)
              (d = a[c[f]][g]), isNaN(1 * d) || (a[c[f]][g] = 1 * a[c[f]][g]);
          return a;
        }
        function s(t) {
          return Object.keys(t).reduce(function (e, r) {
            return e || t[r].length > 0;
          }, !1);
        }
        t.exports = function (t, e) {
          e = e || {};
          var n = { main: r.m },
            o = e.all
              ? { main: Object.keys(n.main) }
              : (function (t, e) {
                  for (var r = { main: [e] }, i = { main: [] }, n = { main: {} }; s(r); )
                    for (var o = Object.keys(r), l = 0; l < o.length; l++) {
                      var u = o[l],
                        h = r[u].pop();
                      if (((n[u] = n[u] || {}), !n[u][h] && t[u][h])) {
                        (n[u][h] = !0), (i[u] = i[u] || []), i[u].push(h);
                        for (var d = a(t, t[u][h], u), c = Object.keys(d), f = 0; f < c.length; f++)
                          (r[c[f]] = r[c[f]] || []), (r[c[f]] = r[c[f]].concat(d[c[f]]));
                      }
                    }
                  return i;
                })(n, t),
            l = '';
          Object.keys(o)
            .filter(function (t) {
              return 'main' !== t;
            })
            .forEach(function (t) {
              for (var e = 0; o[t][e]; ) e++;
              o[t].push(e),
                (n[t][e] =
                  '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })'),
                (l =
                  l +
                  'var ' +
                  t +
                  ' = (' +
                  i.toString().replace('ENTRY_MODULE', JSON.stringify(e)) +
                  ')({' +
                  o[t]
                    .map(function (e) {
                      return JSON.stringify(e) + ': ' + n[t][e].toString();
                    })
                    .join(',') +
                  '});\n');
            }),
            (l =
              l +
              'new ((' +
              i.toString().replace('ENTRY_MODULE', JSON.stringify(t)) +
              ')({' +
              o.main
                .map(function (t) {
                  return JSON.stringify(t) + ': ' + n.main[t].toString();
                })
                .join(',') +
              '}))(self);');
          var u = new window.Blob([l], { type: 'text/javascript' });
          if (e.bare) return u;
          var h = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(
              u,
            ),
            d = new window.Worker(h);
          return (d.objectURL = h), d;
        };
      },
      function (t, e, r) {
        'use strict';
        r.r(e),
          r.d(e, 'default', function () {
            return o;
          });
        var i = r(10),
          n = r(0),
          a = r(1),
          s = r(14);
        function o(t) {
          var e = new s.EventEmitter(),
            r = function (e, r) {
              t.postMessage({ event: e, data: r });
            };
          e.on(n.a.FRAG_DECRYPTED, r),
            e.on(n.a.ERROR, r),
            t.addEventListener('message', function (n) {
              var s = n.data;
              switch (s.cmd) {
                case 'init':
                  var o = JSON.parse(s.config);
                  (t.transmuxer = new i.c(e, s.typeSupported, o, s.vendor, s.id)),
                    Object(a.a)(o.debug),
                    r('init', null);
                  break;
                case 'configure':
                  t.transmuxer.configure(s.config);
                  break;
                case 'demux':
                  var u = t.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
                  Object(i.d)(u)
                    ? u.then(function (e) {
                        l(t, e);
                      })
                    : l(t, u);
                  break;
                case 'flush':
                  var d = s.chunkMeta,
                    c = t.transmuxer.flush(d);
                  Object(i.d)(c)
                    ? c.then(function (e) {
                        h(t, e, d);
                      })
                    : h(t, c, d);
              }
            });
        }
        function l(t, e) {
          if ((r = e.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment) {
            var r,
              i = [],
              n = e.remuxResult,
              a = n.audio,
              s = n.video;
            a && u(i, a), s && u(i, s), t.postMessage({ event: 'transmuxComplete', data: e }, i);
          }
        }
        function u(t, e) {
          e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer);
        }
        function h(t, e, r) {
          e.forEach(function (e) {
            l(t, e);
          }),
            t.postMessage({ event: 'flush', data: r });
        }
      },
      function (t, e, r) {
        'use strict';
        r.r(e),
          r.d(e, 'default', function () {
            return ii;
          });
        var i = r(11),
          n = r(3),
          a = r(0),
          s = r(2),
          o = r(1),
          l = r(6),
          u = r(5);
        function h(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var d = (function () {
            function t(t) {
              (this.PTSKnown = !1),
                (this.alignedSliding = !1),
                (this.averagetargetduration = void 0),
                (this.endCC = 0),
                (this.endSN = 0),
                (this.fragments = void 0),
                (this.fragmentHint = void 0),
                (this.partList = null),
                (this.live = !0),
                (this.ageHeader = 0),
                (this.advancedDateTime = void 0),
                (this.updated = !0),
                (this.advanced = !0),
                (this.availabilityDelay = void 0),
                (this.misses = 0),
                (this.needSidxRanges = !1),
                (this.startCC = 0),
                (this.startSN = 0),
                (this.startTimeOffset = null),
                (this.targetduration = 0),
                (this.totalduration = 0),
                (this.type = null),
                (this.url = void 0),
                (this.m3u8 = ''),
                (this.version = null),
                (this.canBlockReload = !1),
                (this.canSkipUntil = 0),
                (this.canSkipDateRanges = !1),
                (this.skippedSegments = 0),
                (this.recentlyRemovedDateranges = void 0),
                (this.partHoldBack = 0),
                (this.holdBack = 0),
                (this.partTarget = 0),
                (this.preloadHint = void 0),
                (this.renditionReports = void 0),
                (this.tuneInGoal = 0),
                (this.deltaUpdateFailed = void 0),
                (this.driftStartTime = 0),
                (this.driftEndTime = 0),
                (this.driftStart = 0),
                (this.driftEnd = 0),
                (this.fragments = []),
                (this.url = t);
            }
            var e, r, i;
            return (
              (t.prototype.reloaded = function (t) {
                if (!t) return (this.advanced = !0), void (this.updated = !0);
                var e = this.lastPartSn - t.lastPartSn,
                  r = this.lastPartIndex - t.lastPartIndex;
                (this.updated = this.endSN !== t.endSN || !!r || !!e),
                  (this.advanced = this.endSN > t.endSN || e > 0 || (0 === e && r > 0)),
                  this.updated || this.advanced
                    ? (this.misses = Math.floor(0.6 * t.misses))
                    : (this.misses = t.misses + 1),
                  (this.availabilityDelay = t.availabilityDelay);
              }),
              (e = t),
              (r = [
                {
                  key: 'hasProgramDateTime',
                  get: function () {
                    return (
                      !!this.fragments.length &&
                      Object(n.a)(this.fragments[this.fragments.length - 1].programDateTime)
                    );
                  },
                },
                {
                  key: 'levelTargetDuration',
                  get: function () {
                    return this.averagetargetduration || this.targetduration || 10;
                  },
                },
                {
                  key: 'drift',
                  get: function () {
                    var t = this.driftEndTime - this.driftStartTime;
                    return t > 0 ? (1e3 * (this.driftEnd - this.driftStart)) / t : 1;
                  },
                },
                {
                  key: 'edge',
                  get: function () {
                    return this.partEnd || this.fragmentEnd;
                  },
                },
                {
                  key: 'partEnd',
                  get: function () {
                    var t;
                    return null !== (t = this.partList) && void 0 !== t && t.length
                      ? this.partList[this.partList.length - 1].end
                      : this.fragmentEnd;
                  },
                },
                {
                  key: 'fragmentEnd',
                  get: function () {
                    var t;
                    return null !== (t = this.fragments) && void 0 !== t && t.length
                      ? this.fragments[this.fragments.length - 1].end
                      : 0;
                  },
                },
                {
                  key: 'age',
                  get: function () {
                    return this.advancedDateTime
                      ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3
                      : 0;
                  },
                },
                {
                  key: 'lastPartIndex',
                  get: function () {
                    var t;
                    return null !== (t = this.partList) && void 0 !== t && t.length
                      ? this.partList[this.partList.length - 1].index
                      : -1;
                  },
                },
                {
                  key: 'lastPartSn',
                  get: function () {
                    var t;
                    return null !== (t = this.partList) && void 0 !== t && t.length
                      ? this.partList[this.partList.length - 1].fragment.sn
                      : this.endSN;
                  },
                },
              ]) && h(e.prototype, r),
              i && h(e, i),
              t
            );
          })(),
          c = r(17),
          f = /^(\d+)x(\d+)$/,
          g = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
          v = (function () {
            function t(e) {
              for (var r in ('string' == typeof e && (e = t.parseAttrList(e)), e))
                e.hasOwnProperty(r) && (this[r] = e[r]);
            }
            var e = t.prototype;
            return (
              (e.decimalInteger = function (t) {
                var e = parseInt(this[t], 10);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
              }),
              (e.hexadecimalInteger = function (t) {
                if (this[t]) {
                  var e = (this[t] || '0x').slice(2);
                  e = (1 & e.length ? '0' : '') + e;
                  for (var r = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++)
                    r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                  return r;
                }
                return null;
              }),
              (e.hexadecimalIntegerAsNumber = function (t) {
                var e = parseInt(this[t], 16);
                return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e;
              }),
              (e.decimalFloatingPoint = function (t) {
                return parseFloat(this[t]);
              }),
              (e.optionalFloat = function (t, e) {
                var r = this[t];
                return r ? parseFloat(r) : e;
              }),
              (e.enumeratedString = function (t) {
                return this[t];
              }),
              (e.bool = function (t) {
                return 'YES' === this[t];
              }),
              (e.decimalResolution = function (t) {
                var e = f.exec(this[t]);
                if (null !== e) return { width: parseInt(e[1], 10), height: parseInt(e[2], 10) };
              }),
              (t.parseAttrList = function (t) {
                var e,
                  r = {};
                for (g.lastIndex = 0; null !== (e = g.exec(t)); ) {
                  var i = e[2];
                  0 === i.indexOf('"') &&
                    i.lastIndexOf('"') === i.length - 1 &&
                    (i = i.slice(1, -1)),
                    (r[e[1]] = i);
                }
                return r;
              }),
              t
            );
          })(),
          p = {
            audio: {
              a3ds: !0,
              'ac-3': !0,
              'ac-4': !0,
              alac: !0,
              alaw: !0,
              dra1: !0,
              'dts+': !0,
              'dts-': !0,
              dtsc: !0,
              dtse: !0,
              dtsh: !0,
              'ec-3': !0,
              enca: !0,
              g719: !0,
              g726: !0,
              m4ae: !0,
              mha1: !0,
              mha2: !0,
              mhm1: !0,
              mhm2: !0,
              mlpa: !0,
              mp4a: !0,
              'raw ': !0,
              Opus: !0,
              samr: !0,
              sawb: !0,
              sawp: !0,
              sevc: !0,
              sqcp: !0,
              ssmv: !0,
              twos: !0,
              ulaw: !0,
            },
            video: {
              avc1: !0,
              avc2: !0,
              avc3: !0,
              avc4: !0,
              avcp: !0,
              av01: !0,
              drac: !0,
              dvav: !0,
              dvhe: !0,
              encv: !0,
              hev1: !0,
              hvc1: !0,
              mjp2: !0,
              mp4v: !0,
              mvc1: !0,
              mvc2: !0,
              mvc3: !0,
              mvc4: !0,
              resv: !0,
              rv60: !0,
              s263: !0,
              svc1: !0,
              svc2: !0,
              'vc-1': !0,
              vp08: !0,
              vp09: !0,
            },
            text: { stpp: !0, wvtt: !0 },
          };
        function m(t, e) {
          return MediaSource.isTypeSupported((e || 'video') + '/mp4;codecs="' + t + '"');
        }
        var y =
            /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
          T = /#EXT-X-MEDIA:(.*)/g,
          b = new RegExp(
            [
              /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
              /(?!#) *(\S[\S ]*)/.source,
              /#EXT-X-BYTERANGE:*(.+)/.source,
              /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
              /#.*/.source,
            ].join('|'),
            'g',
          ),
          E = new RegExp(
            [
              /#(EXTM3U)/.source,
              /#EXT-X-(PLAYLIST-TYPE):(.+)/.source,
              /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source,
              /#EXT-X-(SKIP):(.+)/.source,
              /#EXT-X-(TARGETDURATION): *(\d+)/.source,
              /#EXT-X-(KEY):(.+)/.source,
              /#EXT-X-(START):(.+)/.source,
              /#EXT-X-(ENDLIST)/.source,
              /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source,
              /#EXT-X-(DIS)CONTINUITY/.source,
              /#EXT-X-(VERSION):(\d+)/.source,
              /#EXT-X-(MAP):(.+)/.source,
              /#EXT-X-(SERVER-CONTROL):(.+)/.source,
              /#EXT-X-(PART-INF):(.+)/.source,
              /#EXT-X-(GAP)/.source,
              /#EXT-X-(BITRATE):\s*(\d+)/.source,
              /#EXT-X-(PART):(.+)/.source,
              /#EXT-X-(PRELOAD-HINT):(.+)/.source,
              /#EXT-X-(RENDITION-REPORT):(.+)/.source,
              /(#)([^:]*):(.*)/.source,
              /(#)(.*)(?:.*)\r?\n?/.source,
            ].join('|'),
          ),
          S = /\.(mp4|m4s|m4v|m4a)$/i;
        var L = (function () {
          function t() {}
          return (
            (t.findGroup = function (t, e) {
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (i.id === e) return i;
              }
            }),
            (t.convertAVC1ToAVCOTI = function (t) {
              var e = t.split('.');
              if (e.length > 2) {
                var r = e.shift() + '.';
                return (
                  (r += parseInt(e.shift()).toString(16)),
                  (r += ('000' + parseInt(e.shift()).toString(16)).substr(-4))
                );
              }
              return t;
            }),
            (t.resolve = function (t, e) {
              return i.buildAbsoluteURL(e, t, { alwaysNormalize: !0 });
            }),
            (t.parseMasterPlaylist = function (e, r) {
              var i,
                n = [],
                a = {},
                s = !1;
              for (y.lastIndex = 0; null != (i = y.exec(e)); )
                if (i[1]) {
                  var o = new v(i[1]),
                    l = {
                      attrs: o,
                      bitrate:
                        o.decimalInteger('AVERAGE-BANDWIDTH') || o.decimalInteger('BANDWIDTH'),
                      name: o.NAME,
                      url: t.resolve(i[2], r),
                    },
                    u = o.decimalResolution('RESOLUTION');
                  u && ((l.width = u.width), (l.height = u.height)),
                    A(
                      (o.CODECS || '').split(/[ ,]+/).filter(function (t) {
                        return t;
                      }),
                      l,
                    ),
                    l.videoCodec &&
                      -1 !== l.videoCodec.indexOf('avc1') &&
                      (l.videoCodec = t.convertAVC1ToAVCOTI(l.videoCodec)),
                    n.push(l);
                } else if (i[3]) {
                  var h = new v(i[3]);
                  h['DATA-ID'] && ((s = !0), (a[h['DATA-ID']] = h));
                }
              return { levels: n, sessionData: s ? a : null };
            }),
            (t.parseMasterPlaylistMedia = function (e, r, i, n) {
              var a;
              void 0 === n && (n = []);
              var s = [],
                o = 0;
              for (T.lastIndex = 0; null !== (a = T.exec(e)); ) {
                var l = new v(a[1]);
                if (l.TYPE === i) {
                  var u = {
                    attrs: l,
                    bitrate: 0,
                    id: o++,
                    groupId: l['GROUP-ID'],
                    instreamId: l['INSTREAM-ID'],
                    name: l.NAME || l.LANGUAGE || '',
                    type: i,
                    default: l.bool('DEFAULT'),
                    autoselect: l.bool('AUTOSELECT'),
                    forced: l.bool('FORCED'),
                    lang: l.LANGUAGE,
                    url: l.URI ? t.resolve(l.URI, r) : '',
                  };
                  if (n.length) {
                    var h = t.findGroup(n, u.groupId) || n[0];
                    R(u, h, 'audioCodec'), R(u, h, 'textCodec');
                  }
                  s.push(u);
                }
              }
              return s;
            }),
            (t.parseLevelPlaylist = function (t, e, r, a, s) {
              var l,
                h,
                f,
                g = new d(e),
                p = g.fragments,
                m = null,
                y = 0,
                T = 0,
                L = 0,
                A = 0,
                R = null,
                k = new u.b(a, e),
                _ = -1,
                I = !1;
              for (b.lastIndex = 0, g.m3u8 = t; null !== (l = b.exec(t)); ) {
                I &&
                  ((I = !1),
                  ((k = new u.b(a, e)).start = L),
                  (k.sn = y),
                  (k.cc = A),
                  (k.level = r),
                  m && ((k.initSegment = m), (k.rawProgramDateTime = m.rawProgramDateTime)));
                var C = l[1];
                if (C) {
                  k.duration = parseFloat(C);
                  var w = (' ' + l[2]).slice(1);
                  (k.title = w || null), k.tagList.push(w ? ['INF', C, w] : ['INF', C]);
                } else if (l[3])
                  Object(n.a)(k.duration) &&
                    ((k.start = L),
                    f && (k.levelkey = f),
                    (k.sn = y),
                    (k.level = r),
                    (k.cc = A),
                    (k.urlId = s),
                    p.push(k),
                    (k.relurl = (' ' + l[3]).slice(1)),
                    D(k, R),
                    (R = k),
                    (L += k.duration),
                    y++,
                    (T = 0),
                    (I = !0));
                else if (l[4]) {
                  var O = (' ' + l[4]).slice(1);
                  R ? k.setByteRange(O, R) : k.setByteRange(O);
                } else if (l[5])
                  (k.rawProgramDateTime = (' ' + l[5]).slice(1)),
                    k.tagList.push(['PROGRAM-DATE-TIME', k.rawProgramDateTime]),
                    -1 === _ && (_ = p.length);
                else {
                  if (!(l = l[0].match(E))) {
                    o.b.warn('No matches on slow regex match for level playlist!');
                    continue;
                  }
                  for (h = 1; h < l.length && void 0 === l[h]; h++);
                  var x = (' ' + l[h]).slice(1),
                    P = (' ' + l[h + 1]).slice(1),
                    M = l[h + 2] ? (' ' + l[h + 2]).slice(1) : '';
                  switch (x) {
                    case 'PLAYLIST-TYPE':
                      g.type = P.toUpperCase();
                      break;
                    case 'MEDIA-SEQUENCE':
                      y = g.startSN = parseInt(P);
                      break;
                    case 'SKIP':
                      var F = new v(P),
                        N = F.decimalInteger('SKIPPED-SEGMENTS');
                      if (Object(n.a)(N)) {
                        g.skippedSegments = N;
                        for (var U = N; U--; ) p.unshift(null);
                        y += N;
                      }
                      var B = F.enumeratedString('RECENTLY-REMOVED-DATERANGES');
                      B && (g.recentlyRemovedDateranges = B.split('\t'));
                      break;
                    case 'TARGETDURATION':
                      g.targetduration = parseFloat(P);
                      break;
                    case 'VERSION':
                      g.version = parseInt(P);
                      break;
                    case 'EXTM3U':
                      break;
                    case 'ENDLIST':
                      g.live = !1;
                      break;
                    case '#':
                      (P || M) && k.tagList.push(M ? [P, M] : [P]);
                      break;
                    case 'DIS':
                      A++;
                    case 'GAP':
                      k.tagList.push([x]);
                      break;
                    case 'BITRATE':
                      k.tagList.push([x, P]);
                      break;
                    case 'DISCONTINUITY-SEQ':
                      A = parseInt(P);
                      break;
                    case 'KEY':
                      var G,
                        K = new v(P),
                        j = K.enumeratedString('METHOD'),
                        H = K.URI,
                        V = K.hexadecimalInteger('IV'),
                        W = K.enumeratedString('KEYFORMATVERSIONS'),
                        Y = K.enumeratedString('KEYID'),
                        q = null != (G = K.enumeratedString('KEYFORMAT')) ? G : 'identity';
                      if (
                        [
                          'com.apple.streamingkeydelivery',
                          'com.microsoft.playready',
                          'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
                          'com.widevine',
                        ].indexOf(q) > -1
                      ) {
                        o.b.warn('Keyformat ' + q + ' is not supported from the manifest');
                        continue;
                      }
                      if ('identity' !== q) continue;
                      j &&
                        ((f = c.a.fromURL(e, H)),
                        H &&
                          ['AES-128', 'SAMPLE-AES', 'SAMPLE-AES-CENC'].indexOf(j) >= 0 &&
                          ((f.method = j),
                          (f.keyFormat = q),
                          Y && (f.keyID = Y),
                          W && (f.keyFormatVersions = W),
                          (f.iv = V)));
                      break;
                    case 'START':
                      var X = new v(P).decimalFloatingPoint('TIME-OFFSET');
                      Object(n.a)(X) && (g.startTimeOffset = X);
                      break;
                    case 'MAP':
                      var z = new v(P);
                      (k.relurl = z.URI),
                        z.BYTERANGE && k.setByteRange(z.BYTERANGE),
                        (k.level = r),
                        (k.sn = 'initSegment'),
                        f && (k.levelkey = f),
                        (k.initSegment = null),
                        (m = k),
                        (I = !0);
                      break;
                    case 'SERVER-CONTROL':
                      var Q = new v(P);
                      (g.canBlockReload = Q.bool('CAN-BLOCK-RELOAD')),
                        (g.canSkipUntil = Q.optionalFloat('CAN-SKIP-UNTIL', 0)),
                        (g.canSkipDateRanges = g.canSkipUntil > 0 && Q.bool('CAN-SKIP-DATERANGES')),
                        (g.partHoldBack = Q.optionalFloat('PART-HOLD-BACK', 0)),
                        (g.holdBack = Q.optionalFloat('HOLD-BACK', 0));
                      break;
                    case 'PART-INF':
                      var $ = new v(P);
                      g.partTarget = $.decimalFloatingPoint('PART-TARGET');
                      break;
                    case 'PART':
                      var J = g.partList;
                      J || (J = g.partList = []);
                      var Z = T > 0 ? J[J.length - 1] : void 0,
                        tt = T++,
                        et = new u.c(new v(P), k, e, tt, Z);
                      J.push(et), (k.duration += et.duration);
                      break;
                    case 'PRELOAD-HINT':
                      var rt = new v(P);
                      g.preloadHint = rt;
                      break;
                    case 'RENDITION-REPORT':
                      var it = new v(P);
                      (g.renditionReports = g.renditionReports || []), g.renditionReports.push(it);
                      break;
                    default:
                      o.b.warn('line parsed but not handled: ' + l);
                  }
                }
              }
              R && !R.relurl
                ? (p.pop(), (L -= R.duration), g.partList && (g.fragmentHint = R))
                : g.partList && (D(k, R), (k.cc = A), (g.fragmentHint = k));
              var nt = p.length,
                at = p[0],
                st = p[nt - 1];
              if ((L += g.skippedSegments * g.targetduration) > 0 && nt && st) {
                g.averagetargetduration = L / nt;
                var ot = st.sn;
                (g.endSN = 'initSegment' !== ot ? ot : 0),
                  at &&
                    ((g.startCC = at.cc),
                    at.initSegment ||
                      (g.fragments.every(function (t) {
                        return (
                          t.relurl &&
                          ((e = t.relurl),
                          S.test(
                            null !=
                              (r = null === (n = i.parseURL(e)) || void 0 === n ? void 0 : n.path)
                              ? r
                              : '',
                          ))
                        );
                        var e, r, n;
                      }) &&
                        (o.b.warn(
                          'MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX',
                        ),
                        ((k = new u.b(a, e)).relurl = st.relurl),
                        (k.level = r),
                        (k.sn = 'initSegment'),
                        (at.initSegment = k),
                        (g.needSidxRanges = !0))));
              } else (g.endSN = 0), (g.startCC = 0);
              return (
                g.fragmentHint && (L += g.fragmentHint.duration),
                (g.totalduration = L),
                (g.endCC = A),
                _ > 0 &&
                  (function (t, e) {
                    for (var r = t[e], i = e; i--; ) {
                      var n = t[i];
                      if (!n) return;
                      (n.programDateTime = r.programDateTime - 1e3 * n.duration), (r = n);
                    }
                  })(p, _),
                g
              );
            }),
            t
          );
        })();
        function A(t, e) {
          ['video', 'audio', 'text'].forEach(function (r) {
            var i = t.filter(function (t) {
              return (function (t, e) {
                var r = p[e];
                return !!r && !0 === r[t.slice(0, 4)];
              })(t, r);
            });
            if (i.length) {
              var n = i.filter(function (t) {
                return 0 === t.lastIndexOf('avc1', 0) || 0 === t.lastIndexOf('mp4a', 0);
              });
              (e[r + 'Codec'] = n.length > 0 ? n[0] : i[0]),
                (t = t.filter(function (t) {
                  return -1 === i.indexOf(t);
                }));
            }
          }),
            (e.unknownCodecs = t);
        }
        function R(t, e, r) {
          var i = e[r];
          i && (t[r] = i);
        }
        function D(t, e) {
          t.rawProgramDateTime
            ? (t.programDateTime = Date.parse(t.rawProgramDateTime))
            : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime),
            Object(n.a)(t.programDateTime) ||
              ((t.programDateTime = null), (t.rawProgramDateTime = null));
        }
        var k = r(4);
        function _(t, e) {
          var r = t.url;
          return (void 0 !== r && 0 !== r.indexOf('data:')) || (r = e.url), r;
        }
        var I = (function () {
            function t(t) {
              (this.hls = void 0),
                (this.loaders = Object.create(null)),
                (this.hls = t),
                this.registerListeners();
            }
            var e = t.prototype;
            return (
              (e.registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.on(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                  t.on(a.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                  t.on(a.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
              }),
              (e.unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.off(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                  t.off(a.a.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this),
                  t.off(a.a.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
              }),
              (e.createInternalLoader = function (t) {
                var e = this.hls.config,
                  r = e.pLoader,
                  i = e.loader,
                  n = new (r || i)(e);
                return (t.loader = n), (this.loaders[t.type] = n), n;
              }),
              (e.getInternalLoader = function (t) {
                return this.loaders[t.type];
              }),
              (e.resetInternalLoader = function (t) {
                this.loaders[t] && delete this.loaders[t];
              }),
              (e.destroyInternalLoaders = function () {
                for (var t in this.loaders) {
                  var e = this.loaders[t];
                  e && e.destroy(), this.resetInternalLoader(t);
                }
              }),
              (e.destroy = function () {
                this.unregisterListeners(), this.destroyInternalLoaders();
              }),
              (e.onManifestLoading = function (t, e) {
                var r = e.url;
                this.load({
                  id: null,
                  groupId: null,
                  level: 0,
                  responseType: 'text',
                  type: k.a.MANIFEST,
                  url: r,
                  deliveryDirectives: null,
                });
              }),
              (e.onLevelLoading = function (t, e) {
                var r = e.id,
                  i = e.level,
                  n = e.url,
                  a = e.deliveryDirectives;
                this.load({
                  id: r,
                  groupId: null,
                  level: i,
                  responseType: 'text',
                  type: k.a.LEVEL,
                  url: n,
                  deliveryDirectives: a,
                });
              }),
              (e.onAudioTrackLoading = function (t, e) {
                var r = e.id,
                  i = e.groupId,
                  n = e.url,
                  a = e.deliveryDirectives;
                this.load({
                  id: r,
                  groupId: i,
                  level: null,
                  responseType: 'text',
                  type: k.a.AUDIO_TRACK,
                  url: n,
                  deliveryDirectives: a,
                });
              }),
              (e.onSubtitleTrackLoading = function (t, e) {
                var r = e.id,
                  i = e.groupId,
                  n = e.url,
                  a = e.deliveryDirectives;
                this.load({
                  id: r,
                  groupId: i,
                  level: null,
                  responseType: 'text',
                  type: k.a.SUBTITLE_TRACK,
                  url: n,
                  deliveryDirectives: a,
                });
              }),
              (e.load = function (t) {
                var e,
                  r,
                  i,
                  n,
                  a,
                  s,
                  l = this.hls.config,
                  u = this.getInternalLoader(t);
                if (u) {
                  var h = u.context;
                  if (h && h.url === t.url)
                    return void o.b.trace('[playlist-loader]: playlist request ongoing');
                  o.b.log('[playlist-loader]: aborting previous loader for type: ' + t.type),
                    u.abort();
                }
                switch (t.type) {
                  case k.a.MANIFEST:
                    (r = l.manifestLoadingMaxRetry),
                      (i = l.manifestLoadingTimeOut),
                      (n = l.manifestLoadingRetryDelay),
                      (a = l.manifestLoadingMaxRetryTimeout);
                    break;
                  case k.a.LEVEL:
                  case k.a.AUDIO_TRACK:
                  case k.a.SUBTITLE_TRACK:
                    (r = 0), (i = l.levelLoadingTimeOut);
                    break;
                  default:
                    (r = l.levelLoadingMaxRetry),
                      (i = l.levelLoadingTimeOut),
                      (n = l.levelLoadingRetryDelay),
                      (a = l.levelLoadingMaxRetryTimeout);
                }
                if (
                  ((u = this.createInternalLoader(t)),
                  null !== (e = t.deliveryDirectives) && void 0 !== e && e.part) &&
                  (t.type === k.a.LEVEL && null !== t.level
                    ? (s = this.hls.levels[t.level].details)
                    : t.type === k.a.AUDIO_TRACK && null !== t.id
                    ? (s = this.hls.audioTracks[t.id].details)
                    : t.type === k.a.SUBTITLE_TRACK &&
                      null !== t.id &&
                      (s = this.hls.subtitleTracks[t.id].details),
                  s)
                ) {
                  var d = s.partTarget,
                    c = s.targetduration;
                  d && c && (i = Math.min(1e3 * Math.max(3 * d, 0.8 * c), i));
                }
                var f = {
                    timeout: i,
                    maxRetry: r,
                    retryDelay: n,
                    maxRetryDelay: a,
                    highWaterMark: 0,
                  },
                  g = {
                    onSuccess: this.loadsuccess.bind(this),
                    onError: this.loaderror.bind(this),
                    onTimeout: this.loadtimeout.bind(this),
                  };
                u.load(t, f, g);
              }),
              (e.loadsuccess = function (t, e, r, i) {
                if ((void 0 === i && (i = null), r.isSidxRequest))
                  return this.handleSidxRequest(t, r), void this.handlePlaylistLoaded(t, e, r, i);
                this.resetInternalLoader(r.type);
                var n = t.data;
                0 === n.indexOf('#EXTM3U')
                  ? ((e.parsing.start = performance.now()),
                    n.indexOf('#EXTINF:') > 0 || n.indexOf('#EXT-X-TARGETDURATION:') > 0
                      ? this.handleTrackOrLevelPlaylist(t, e, r, i)
                      : this.handleMasterPlaylist(t, e, r, i))
                  : this.handleManifestParsingError(t, r, 'no EXTM3U delimiter', i);
              }),
              (e.loaderror = function (t, e, r) {
                void 0 === r && (r = null), this.handleNetworkError(e, r, !1, t);
              }),
              (e.loadtimeout = function (t, e, r) {
                void 0 === r && (r = null), this.handleNetworkError(e, r, !0);
              }),
              (e.handleMasterPlaylist = function (t, e, r, i) {
                var n = this.hls,
                  s = t.data,
                  l = _(t, r),
                  u = L.parseMasterPlaylist(s, l),
                  h = u.levels,
                  d = u.sessionData;
                if (h.length) {
                  var c = h.map(function (t) {
                      return { id: t.attrs.AUDIO, audioCodec: t.audioCodec };
                    }),
                    f = h.map(function (t) {
                      return { id: t.attrs.SUBTITLES, textCodec: t.textCodec };
                    }),
                    g = L.parseMasterPlaylistMedia(s, l, 'AUDIO', c),
                    p = L.parseMasterPlaylistMedia(s, l, 'SUBTITLES', f),
                    m = L.parseMasterPlaylistMedia(s, l, 'CLOSED-CAPTIONS');
                  if (g.length)
                    g.some(function (t) {
                      return !t.url;
                    }) ||
                      !h[0].audioCodec ||
                      h[0].attrs.AUDIO ||
                      (o.b.log(
                        '[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one',
                      ),
                      g.unshift({
                        type: 'main',
                        name: 'main',
                        default: !1,
                        autoselect: !1,
                        forced: !1,
                        id: -1,
                        attrs: new v({}),
                        bitrate: 0,
                        url: '',
                      }));
                  n.trigger(a.a.MANIFEST_LOADED, {
                    levels: h,
                    audioTracks: g,
                    subtitles: p,
                    captions: m,
                    url: l,
                    stats: e,
                    networkDetails: i,
                    sessionData: d,
                  });
                } else this.handleManifestParsingError(t, r, 'no level found in manifest', i);
              }),
              (e.handleTrackOrLevelPlaylist = function (t, e, r, i) {
                var o = this.hls,
                  l = r.id,
                  u = r.level,
                  h = r.type,
                  d = _(t, r),
                  c = Object(n.a)(l) ? l : 0,
                  f = Object(n.a)(u) ? u : c,
                  g = (function (t) {
                    switch (t.type) {
                      case k.a.AUDIO_TRACK:
                        return k.b.AUDIO;
                      case k.a.SUBTITLE_TRACK:
                        return k.b.SUBTITLE;
                      default:
                        return k.b.MAIN;
                    }
                  })(r),
                  p = L.parseLevelPlaylist(t.data, d, f, g, c);
                if (p.fragments.length) {
                  if (h === k.a.MANIFEST) {
                    var m = { attrs: new v({}), bitrate: 0, details: p, name: '', url: d };
                    o.trigger(a.a.MANIFEST_LOADED, {
                      levels: [m],
                      audioTracks: [],
                      url: d,
                      stats: e,
                      networkDetails: i,
                      sessionData: null,
                    });
                  }
                  if (((e.parsing.end = performance.now()), p.needSidxRanges)) {
                    var y,
                      T =
                        null === (y = p.fragments[0].initSegment) || void 0 === y ? void 0 : y.url;
                    this.load({
                      url: T,
                      isSidxRequest: !0,
                      type: h,
                      level: u,
                      levelDetails: p,
                      id: l,
                      groupId: null,
                      rangeStart: 0,
                      rangeEnd: 2048,
                      responseType: 'arraybuffer',
                      deliveryDirectives: null,
                    });
                  } else (r.levelDetails = p), this.handlePlaylistLoaded(t, e, r, i);
                } else
                  o.trigger(a.a.ERROR, {
                    type: s.b.NETWORK_ERROR,
                    details: s.a.LEVEL_EMPTY_ERROR,
                    fatal: !1,
                    url: d,
                    reason: 'no fragments found in level',
                    level: 'number' == typeof r.level ? r.level : void 0,
                  });
              }),
              (e.handleSidxRequest = function (t, e) {
                var r = Object(l.g)(new Uint8Array(t.data));
                if (r) {
                  var i = r.references,
                    n = e.levelDetails;
                  i.forEach(function (t, e) {
                    var i = t.info,
                      a = n.fragments[e];
                    0 === a.byteRange.length &&
                      a.setByteRange(String(1 + i.end - i.start) + '@' + String(i.start)),
                      a.initSegment && a.initSegment.setByteRange(String(r.moovEndOffset) + '@0');
                  });
                }
              }),
              (e.handleManifestParsingError = function (t, e, r, i) {
                this.hls.trigger(a.a.ERROR, {
                  type: s.b.NETWORK_ERROR,
                  details: s.a.MANIFEST_PARSING_ERROR,
                  fatal: e.type === k.a.MANIFEST,
                  url: t.url,
                  reason: r,
                  response: t,
                  context: e,
                  networkDetails: i,
                });
              }),
              (e.handleNetworkError = function (t, e, r, i) {
                void 0 === r && (r = !1),
                  o.b.warn(
                    '[playlist-loader]: A network ' +
                      (r ? 'timeout' : 'error') +
                      ' occurred while loading ' +
                      t.type +
                      ' level: ' +
                      t.level +
                      ' id: ' +
                      t.id +
                      ' group-id: "' +
                      t.groupId +
                      '"',
                  );
                var n = s.a.UNKNOWN,
                  l = !1,
                  u = this.getInternalLoader(t);
                switch (t.type) {
                  case k.a.MANIFEST:
                    (n = r ? s.a.MANIFEST_LOAD_TIMEOUT : s.a.MANIFEST_LOAD_ERROR), (l = !0);
                    break;
                  case k.a.LEVEL:
                    (n = r ? s.a.LEVEL_LOAD_TIMEOUT : s.a.LEVEL_LOAD_ERROR), (l = !1);
                    break;
                  case k.a.AUDIO_TRACK:
                    (n = r ? s.a.AUDIO_TRACK_LOAD_TIMEOUT : s.a.AUDIO_TRACK_LOAD_ERROR), (l = !1);
                    break;
                  case k.a.SUBTITLE_TRACK:
                    (n = r ? s.a.SUBTITLE_TRACK_LOAD_TIMEOUT : s.a.SUBTITLE_LOAD_ERROR), (l = !1);
                }
                u && this.resetInternalLoader(t.type);
                var h = {
                  type: s.b.NETWORK_ERROR,
                  details: n,
                  fatal: l,
                  url: t.url,
                  loader: u,
                  context: t,
                  networkDetails: e,
                };
                i && (h.response = i), this.hls.trigger(a.a.ERROR, h);
              }),
              (e.handlePlaylistLoaded = function (t, e, r, i) {
                var n = r.type,
                  s = r.level,
                  o = r.id,
                  l = r.groupId,
                  u = r.loader,
                  h = r.levelDetails,
                  d = r.deliveryDirectives;
                if (null != h && h.targetduration) {
                  if (u)
                    switch (
                      (h.live &&
                        (u.getCacheAge && (h.ageHeader = u.getCacheAge() || 0),
                        (u.getCacheAge && !isNaN(h.ageHeader)) || (h.ageHeader = 0)),
                      n)
                    ) {
                      case k.a.MANIFEST:
                      case k.a.LEVEL:
                        this.hls.trigger(a.a.LEVEL_LOADED, {
                          details: h,
                          level: s || 0,
                          id: o || 0,
                          stats: e,
                          networkDetails: i,
                          deliveryDirectives: d,
                        });
                        break;
                      case k.a.AUDIO_TRACK:
                        this.hls.trigger(a.a.AUDIO_TRACK_LOADED, {
                          details: h,
                          id: o || 0,
                          groupId: l || '',
                          stats: e,
                          networkDetails: i,
                          deliveryDirectives: d,
                        });
                        break;
                      case k.a.SUBTITLE_TRACK:
                        this.hls.trigger(a.a.SUBTITLE_TRACK_LOADED, {
                          details: h,
                          id: o || 0,
                          groupId: l || '',
                          stats: e,
                          networkDetails: i,
                          deliveryDirectives: d,
                        });
                    }
                } else this.handleManifestParsingError(t, r, 'invalid target duration', i);
              }),
              t
            );
          })(),
          C = (function () {
            function t(t) {
              (this.hls = void 0),
                (this.loaders = {}),
                (this.decryptkey = null),
                (this.decrypturl = null),
                (this.hls = t),
                this._registerListeners();
            }
            var e = t.prototype;
            return (
              (e._registerListeners = function () {
                this.hls.on(a.a.KEY_LOADING, this.onKeyLoading, this);
              }),
              (e._unregisterListeners = function () {
                this.hls.off(a.a.KEY_LOADING, this.onKeyLoading);
              }),
              (e.destroy = function () {
                for (var t in (this._unregisterListeners(), this.loaders)) {
                  var e = this.loaders[t];
                  e && e.destroy();
                }
                this.loaders = {};
              }),
              (e.onKeyLoading = function (t, e) {
                var r = e.frag,
                  i = r.type,
                  n = this.loaders[i];
                if (r.decryptdata) {
                  var s = r.decryptdata.uri;
                  if (s !== this.decrypturl || null === this.decryptkey) {
                    var l = this.hls.config;
                    if ((n && (o.b.warn('abort previous key loader for type:' + i), n.abort()), !s))
                      return void o.b.warn('key uri is falsy');
                    var u = l.loader,
                      h = (r.loader = this.loaders[i] = new u(l));
                    (this.decrypturl = s), (this.decryptkey = null);
                    var d = { url: s, frag: r, responseType: 'arraybuffer' },
                      c = {
                        timeout: l.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: l.fragLoadingRetryDelay,
                        maxRetryDelay: l.fragLoadingMaxRetryTimeout,
                        highWaterMark: 0,
                      },
                      f = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this),
                      };
                    h.load(d, c, f);
                  } else
                    this.decryptkey &&
                      ((r.decryptdata.key = this.decryptkey),
                      this.hls.trigger(a.a.KEY_LOADED, { frag: r }));
                } else o.b.warn('Missing decryption data on fragment in onKeyLoading');
              }),
              (e.loadsuccess = function (t, e, r) {
                var i = r.frag;
                i.decryptdata
                  ? ((this.decryptkey = i.decryptdata.key = new Uint8Array(t.data)),
                    (i.loader = null),
                    delete this.loaders[i.type],
                    this.hls.trigger(a.a.KEY_LOADED, { frag: i }))
                  : o.b.error('after key load, decryptdata unset');
              }),
              (e.loaderror = function (t, e) {
                var r = e.frag,
                  i = r.loader;
                i && i.abort(),
                  delete this.loaders[r.type],
                  this.hls.trigger(a.a.ERROR, {
                    type: s.b.NETWORK_ERROR,
                    details: s.a.KEY_LOAD_ERROR,
                    fatal: !1,
                    frag: r,
                    response: t,
                  });
              }),
              (e.loadtimeout = function (t, e) {
                var r = e.frag,
                  i = r.loader;
                i && i.abort(),
                  delete this.loaders[r.type],
                  this.hls.trigger(a.a.ERROR, {
                    type: s.b.NETWORK_ERROR,
                    details: s.a.KEY_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: r,
                  });
              }),
              t
            );
          })();
        function w(t, e) {
          var r;
          try {
            r = new Event('addtrack');
          } catch (t) {
            (r = document.createEvent('Event')).initEvent('addtrack', !1, !1);
          }
          (r.track = t), e.dispatchEvent(r);
        }
        function O(t, e) {
          var r = t.mode;
          if (('disabled' === r && (t.mode = 'hidden'), t.cues && !t.cues.getCueById(e.id)))
            try {
              if ((t.addCue(e), !t.cues.getCueById(e.id)))
                throw new Error('addCue is failed for: ' + e);
            } catch (r) {
              o.b.debug('[texttrack-utils]: ' + r);
              var i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
              (i.id = e.id), t.addCue(i);
            }
          'disabled' === r && (t.mode = r);
        }
        function x(t) {
          var e = t.mode;
          if (('disabled' === e && (t.mode = 'hidden'), t.cues))
            for (var r = t.cues.length; r--; ) t.removeCue(t.cues[r]);
          'disabled' === e && (t.mode = e);
        }
        function P(t, e, r) {
          var i = t.mode;
          if (('disabled' === i && (t.mode = 'hidden'), t.cues && t.cues.length > 0))
            for (
              var n = (function (t, e, r) {
                  var i = [],
                    n = (function (t, e) {
                      if (e < t[0].startTime) return 0;
                      var r = t.length - 1;
                      if (e > t[r].endTime) return -1;
                      var i = 0,
                        n = r;
                      for (; i <= n; ) {
                        var a = Math.floor((n + i) / 2);
                        if (e < t[a].startTime) n = a - 1;
                        else {
                          if (!(e > t[a].startTime && i < r)) return a;
                          i = a + 1;
                        }
                      }
                      return t[i].startTime - e < e - t[n].startTime ? i : n;
                    })(t, e);
                  if (n > -1)
                    for (var a = n, s = t.length; a < s; a++) {
                      var o = t[a];
                      if (o.startTime >= e && o.endTime <= r) i.push(o);
                      else if (o.startTime > r) return i;
                    }
                  return i;
                })(t.cues, e, r),
                a = 0;
              a < n.length;
              a++
            )
              t.removeCue(n[a]);
          'disabled' === i && (t.mode = i);
        }
        var M = r(7),
          F = (function () {
            function t(t) {
              (this.hls = void 0),
                (this.id3Track = null),
                (this.media = null),
                (this.hls = t),
                this._registerListeners();
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                this._unregisterListeners();
              }),
              (e._registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.on(a.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                  t.on(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }),
              (e._unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.off(a.a.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this),
                  t.off(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this);
              }),
              (e.onMediaAttached = function (t, e) {
                this.media = e.media;
              }),
              (e.onMediaDetaching = function () {
                this.id3Track && (x(this.id3Track), (this.id3Track = null), (this.media = null));
              }),
              (e.getID3Track = function (t) {
                if (this.media) {
                  for (var e = 0; e < t.length; e++) {
                    var r = t[e];
                    if ('metadata' === r.kind && 'id3' === r.label) return w(r, this.media), r;
                  }
                  return this.media.addTextTrack('metadata', 'id3');
                }
              }),
              (e.onFragParsingMetadata = function (t, e) {
                if (this.media) {
                  var r = e.frag,
                    i = e.samples;
                  this.id3Track ||
                    ((this.id3Track = this.getID3Track(this.media.textTracks)),
                    (this.id3Track.mode = 'hidden'));
                  for (
                    var n = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, a = 0;
                    a < i.length;
                    a++
                  ) {
                    var s = M.c(i[a].data);
                    if (s) {
                      var o = i[a].pts,
                        l = a < i.length - 1 ? i[a + 1].pts : r.end;
                      l - o <= 0 && (l = o + 0.25);
                      for (var u = 0; u < s.length; u++) {
                        var h = s[u];
                        if (!M.e(h)) {
                          var d = new n(o, l, '');
                          (d.value = h), this.id3Track.addCue(d);
                        }
                      }
                    }
                  }
                }
              }),
              (e.onBufferFlushing = function (t, e) {
                var r = e.startOffset,
                  i = e.endOffset,
                  n = e.type;
                if (!n || 'audio' === n) {
                  var a = this.id3Track;
                  a && P(a, r, i);
                }
              }),
              t
            );
          })();
        function N(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var U,
          B = (function () {
            function t(t) {
              var e = this;
              (this.hls = void 0),
                (this.config = void 0),
                (this.media = null),
                (this.levelDetails = null),
                (this.currentTime = 0),
                (this.stallCount = 0),
                (this._latency = null),
                (this.timeupdateHandler = function () {
                  return e.timeupdate();
                }),
                (this.hls = t),
                (this.config = t.config),
                this.registerListeners();
            }
            var e,
              r,
              i,
              n = t.prototype;
            return (
              (n.destroy = function () {
                this.unregisterListeners(),
                  this.onMediaDetaching(),
                  (this.levelDetails = null),
                  (this.hls = this.timeupdateHandler = null);
              }),
              (n.registerListeners = function () {
                this.hls.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  this.hls.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  this.hls.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  this.hls.on(a.a.LEVEL_UPDATED, this.onLevelUpdated, this),
                  this.hls.on(a.a.ERROR, this.onError, this);
              }),
              (n.unregisterListeners = function () {
                this.hls.off(a.a.MEDIA_ATTACHED, this.onMediaAttached),
                  this.hls.off(a.a.MEDIA_DETACHING, this.onMediaDetaching),
                  this.hls.off(a.a.MANIFEST_LOADING, this.onManifestLoading),
                  this.hls.off(a.a.LEVEL_UPDATED, this.onLevelUpdated),
                  this.hls.off(a.a.ERROR, this.onError);
              }),
              (n.onMediaAttached = function (t, e) {
                (this.media = e.media),
                  this.media.addEventListener('timeupdate', this.timeupdateHandler);
              }),
              (n.onMediaDetaching = function () {
                this.media &&
                  (this.media.removeEventListener('timeupdate', this.timeupdateHandler),
                  (this.media = null));
              }),
              (n.onManifestLoading = function () {
                (this.levelDetails = null), (this._latency = null), (this.stallCount = 0);
              }),
              (n.onLevelUpdated = function (t, e) {
                var r = e.details;
                (this.levelDetails = r),
                  r.advanced && this.timeupdate(),
                  !r.live &&
                    this.media &&
                    this.media.removeEventListener('timeupdate', this.timeupdateHandler);
              }),
              (n.onError = function (t, e) {
                e.details === s.a.BUFFER_STALLED_ERROR &&
                  (this.stallCount++,
                  o.b.warn('[playback-rate-controller]: Stall detected, adjusting target latency'));
              }),
              (n.timeupdate = function () {
                var t = this.media,
                  e = this.levelDetails;
                if (t && e) {
                  this.currentTime = t.currentTime;
                  var r = this.computeLatency();
                  if (null !== r) {
                    this._latency = r;
                    var i = this.config,
                      n = i.lowLatencyMode,
                      a = i.maxLiveSyncPlaybackRate;
                    if (n && 1 !== a) {
                      var s = this.targetLatency;
                      if (null !== s) {
                        var o = r - s,
                          l = o < Math.min(this.maxLatency, s + e.targetduration);
                        if (e.live && l && o > 0.05 && this.forwardBufferLength > 1) {
                          var u = Math.min(2, Math.max(1, a)),
                            h =
                              Math.round((2 / (1 + Math.exp(-0.75 * o - this.edgeStalled))) * 20) /
                              20;
                          t.playbackRate = Math.min(u, Math.max(1, h));
                        } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1);
                      }
                    }
                  }
                }
              }),
              (n.estimateLiveEdge = function () {
                var t = this.levelDetails;
                return null === t ? null : t.edge + t.age;
              }),
              (n.computeLatency = function () {
                var t = this.estimateLiveEdge();
                return null === t ? null : t - this.currentTime;
              }),
              (e = t),
              (r = [
                {
                  key: 'latency',
                  get: function () {
                    return this._latency || 0;
                  },
                },
                {
                  key: 'maxLatency',
                  get: function () {
                    var t = this.config,
                      e = this.levelDetails;
                    return void 0 !== t.liveMaxLatencyDuration
                      ? t.liveMaxLatencyDuration
                      : e
                      ? t.liveMaxLatencyDurationCount * e.targetduration
                      : 0;
                  },
                },
                {
                  key: 'targetLatency',
                  get: function () {
                    var t = this.levelDetails;
                    if (null === t) return null;
                    var e = t.holdBack,
                      r = t.partHoldBack,
                      i = t.targetduration,
                      n = this.config,
                      a = n.liveSyncDuration,
                      s = n.liveSyncDurationCount,
                      o = n.lowLatencyMode,
                      l = this.hls.userConfig,
                      u = (o && r) || e;
                    (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) &&
                      (u = void 0 !== a ? a : s * i);
                    var h = i;
                    return u + Math.min(1 * this.stallCount, h);
                  },
                },
                {
                  key: 'liveSyncPosition',
                  get: function () {
                    var t = this.estimateLiveEdge(),
                      e = this.targetLatency,
                      r = this.levelDetails;
                    if (null === t || null === e || null === r) return null;
                    var i = r.edge,
                      n = t - e - this.edgeStalled,
                      a = i - r.totalduration,
                      s = i - ((this.config.lowLatencyMode && r.partTarget) || r.targetduration);
                    return Math.min(Math.max(a, n), s);
                  },
                },
                {
                  key: 'drift',
                  get: function () {
                    var t = this.levelDetails;
                    return null === t ? 1 : t.drift;
                  },
                },
                {
                  key: 'edgeStalled',
                  get: function () {
                    var t = this.levelDetails;
                    if (null === t) return 0;
                    var e = 3 * ((this.config.lowLatencyMode && t.partTarget) || t.targetduration);
                    return Math.max(t.age - e, 0);
                  },
                },
                {
                  key: 'forwardBufferLength',
                  get: function () {
                    var t = this.media,
                      e = this.levelDetails;
                    if (!t || !e) return 0;
                    var r = t.buffered.length;
                    return r ? t.buffered.end(r - 1) : e.edge - this.currentTime;
                  },
                },
              ]) && N(e.prototype, r),
              i && N(e, i),
              t
            );
          })();
        function G(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        !(function (t) {
          (t.No = ''), (t.Yes = 'YES'), (t.v2 = 'v2');
        })(U || (U = {}));
        var K = (function () {
            function t(t, e, r) {
              (this.msn = void 0),
                (this.part = void 0),
                (this.skip = void 0),
                (this.msn = t),
                (this.part = e),
                (this.skip = r);
            }
            return (
              (t.prototype.addDirectives = function (t) {
                var e = new self.URL(t);
                return (
                  void 0 !== this.msn && e.searchParams.set('_HLS_msn', this.msn.toString()),
                  void 0 !== this.part && e.searchParams.set('_HLS_part', this.part.toString()),
                  this.skip && e.searchParams.set('_HLS_skip', this.skip),
                  e.toString()
                );
              }),
              t
            );
          })(),
          j = (function () {
            function t(t) {
              (this.attrs = void 0),
                (this.audioCodec = void 0),
                (this.bitrate = void 0),
                (this.codecSet = void 0),
                (this.height = void 0),
                (this.id = void 0),
                (this.name = void 0),
                (this.videoCodec = void 0),
                (this.width = void 0),
                (this.unknownCodecs = void 0),
                (this.audioGroupIds = void 0),
                (this.details = void 0),
                (this.fragmentError = 0),
                (this.loadError = 0),
                (this.loaded = void 0),
                (this.realBitrate = 0),
                (this.textGroupIds = void 0),
                (this.url = void 0),
                (this._urlId = 0),
                (this.url = [t.url]),
                (this.attrs = t.attrs),
                (this.bitrate = t.bitrate),
                t.details && (this.details = t.details),
                (this.id = t.id || 0),
                (this.name = t.name),
                (this.width = t.width || 0),
                (this.height = t.height || 0),
                (this.audioCodec = t.audioCodec),
                (this.videoCodec = t.videoCodec),
                (this.unknownCodecs = t.unknownCodecs),
                (this.codecSet = [t.videoCodec, t.audioCodec]
                  .filter(function (t) {
                    return t;
                  })
                  .join(',')
                  .replace(/\.[^.,]+/g, ''));
            }
            var e, r, i;
            return (
              (e = t),
              (r = [
                {
                  key: 'maxBitrate',
                  get: function () {
                    return Math.max(this.realBitrate, this.bitrate);
                  },
                },
                {
                  key: 'uri',
                  get: function () {
                    return this.url[this._urlId] || '';
                  },
                },
                {
                  key: 'urlId',
                  get: function () {
                    return this._urlId;
                  },
                  set: function (t) {
                    var e = t % this.url.length;
                    this._urlId !== e && ((this.details = void 0), (this._urlId = e));
                  },
                },
              ]) && G(e.prototype, r),
              i && G(e, i),
              t
            );
          })();
        function H(t, e, r) {
          switch (e) {
            case 'audio':
              t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(r);
              break;
            case 'text':
              t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(r);
          }
        }
        function V(t) {
          var e = {};
          t.forEach(function (t) {
            var r = t.groupId || '';
            (t.id = e[r] = e[r] || 0), e[r]++;
          });
        }
        function W(t, e) {
          var r = e.startPTS;
          if (Object(n.a)(r)) {
            var i,
              a = 0;
            e.sn > t.sn ? ((a = r - t.start), (i = t)) : ((a = t.start - r), (i = e)),
              i.duration !== a && (i.duration = a);
          } else if (e.sn > t.sn) {
            t.cc === e.cc && t.minEndPTS
              ? (e.start = t.start + (t.minEndPTS - t.start))
              : (e.start = t.start + t.duration);
          } else e.start = Math.max(t.start - e.duration, 0);
        }
        function Y(t, e, r, i, a, s) {
          i - r <= 0 &&
            (o.b.warn('Fragment should have a positive duration', e),
            (i = r + e.duration),
            (s = a + e.duration));
          var l = r,
            u = i,
            h = e.startPTS,
            d = e.endPTS;
          if (Object(n.a)(h)) {
            var c = Math.abs(h - r);
            Object(n.a)(e.deltaPTS) ? (e.deltaPTS = Math.max(c, e.deltaPTS)) : (e.deltaPTS = c),
              (l = Math.max(r, h)),
              (r = Math.min(r, h)),
              (a = Math.min(a, e.startDTS)),
              (u = Math.min(i, d)),
              (i = Math.max(i, d)),
              (s = Math.max(s, e.endDTS));
          }
          e.duration = i - r;
          var f = r - e.start;
          (e.appendedPTS = i),
            (e.start = e.startPTS = r),
            (e.maxStartPTS = l),
            (e.startDTS = a),
            (e.endPTS = i),
            (e.minEndPTS = u),
            (e.endDTS = s);
          var g,
            v = e.sn;
          if (!t || v < t.startSN || v > t.endSN) return 0;
          var p = v - t.startSN,
            m = t.fragments;
          for (m[p] = e, g = p; g > 0; g--) W(m[g], m[g - 1]);
          for (g = p; g < m.length - 1; g++) W(m[g], m[g + 1]);
          return (
            t.fragmentHint && W(m[m.length - 1], t.fragmentHint),
            (t.PTSKnown = t.alignedSliding = !0),
            f
          );
        }
        function q(t, e) {
          for (var r = null, i = t.fragments, a = i.length - 1; a >= 0; a--) {
            var s = i[a].initSegment;
            if (s) {
              r = s;
              break;
            }
          }
          t.fragmentHint && delete t.fragmentHint.endPTS;
          var l,
            u = 0;
          if (
            ((function (t, e, r) {
              for (
                var i = e.skippedSegments,
                  n = Math.max(t.startSN, e.startSN) - e.startSN,
                  a =
                    (t.fragmentHint ? 1 : 0) +
                    (i ? e.endSN : Math.min(t.endSN, e.endSN)) -
                    e.startSN,
                  s = e.startSN - t.startSN,
                  o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments,
                  l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments,
                  u = n;
                u <= a;
                u++
              ) {
                var h = l[s + u],
                  d = o[u];
                i && !d && u < i && (d = e.fragments[u] = h), h && d && r(h, d);
              }
            })(t, e, function (t, i) {
              var a;
              t.relurl && (u = t.cc - i.cc),
                Object(n.a)(t.startPTS) &&
                  Object(n.a)(t.endPTS) &&
                  ((i.start = i.startPTS = t.startPTS),
                  (i.startDTS = t.startDTS),
                  (i.appendedPTS = t.appendedPTS),
                  (i.maxStartPTS = t.maxStartPTS),
                  (i.endPTS = t.endPTS),
                  (i.endDTS = t.endDTS),
                  (i.minEndPTS = t.minEndPTS),
                  (i.duration = t.endPTS - t.startPTS),
                  i.duration && (l = i),
                  (e.PTSKnown = e.alignedSliding = !0)),
                (i.elementaryStreams = t.elementaryStreams),
                (i.loader = t.loader),
                (i.stats = t.stats),
                (i.urlId = t.urlId),
                t.initSegment
                  ? ((i.initSegment = t.initSegment), (r = t.initSegment))
                  : (i.initSegment &&
                      i.initSegment.relurl !=
                        (null === (a = r) || void 0 === a ? void 0 : a.relurl)) ||
                    (i.initSegment = r);
            }),
            e.skippedSegments &&
              ((e.deltaUpdateFailed = e.fragments.some(function (t) {
                return !t;
              })),
              e.deltaUpdateFailed))
          ) {
            o.b.warn('[level-helper] Previous playlist missing segments skipped in delta playlist');
            for (var h = e.skippedSegments; h--; ) e.fragments.shift();
            (e.startSN = e.fragments[0].sn), (e.startCC = e.fragments[0].cc);
          }
          var d = e.fragments;
          if (u) {
            o.b.warn('discontinuity sliding from playlist, take drift into account');
            for (var c = 0; c < d.length; c++) d[c].cc += u;
          }
          e.skippedSegments && (e.startCC = e.fragments[0].cc),
            (function (t, e, r) {
              if (t && e)
                for (var i = 0, n = 0, a = t.length; n <= a; n++) {
                  var s = t[n],
                    o = e[n + i];
                  s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? r(s, o) : i--;
                }
            })(t.partList, e.partList, function (t, e) {
              (e.elementaryStreams = t.elementaryStreams), (e.stats = t.stats);
            }),
            l ? Y(e, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS) : X(t, e),
            d.length && (e.totalduration = e.edge - d[0].start),
            (e.driftStartTime = t.driftStartTime),
            (e.driftStart = t.driftStart);
          var f = e.advancedDateTime;
          if (e.advanced && f) {
            var g = e.edge;
            e.driftStart || ((e.driftStartTime = f), (e.driftStart = g)),
              (e.driftEndTime = f),
              (e.driftEnd = g);
          } else
            (e.driftEndTime = t.driftEndTime),
              (e.driftEnd = t.driftEnd),
              (e.advancedDateTime = t.advancedDateTime);
        }
        function X(t, e) {
          var r = e.startSN + e.skippedSegments - t.startSN,
            i = t.fragments;
          r < 0 || r >= i.length || z(e, i[r].start);
        }
        function z(t, e) {
          if (e) {
            for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++) r[i].start += e;
            t.fragmentHint && (t.fragmentHint.start += e);
          }
        }
        var Q = (function () {
          function t(t, e) {
            (this.hls = void 0),
              (this.timer = -1),
              (this.canLoad = !1),
              (this.retryCount = 0),
              (this.log = void 0),
              (this.warn = void 0),
              (this.log = o.b.log.bind(o.b, e + ':')),
              (this.warn = o.b.warn.bind(o.b, e + ':')),
              (this.hls = t);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              this.clearTimer(), (this.hls = this.log = this.warn = null);
            }),
            (e.onError = function (t, e) {
              e.fatal && e.type === s.b.NETWORK_ERROR && this.clearTimer();
            }),
            (e.clearTimer = function () {
              clearTimeout(this.timer), (this.timer = -1);
            }),
            (e.startLoad = function () {
              (this.canLoad = !0), (this.retryCount = 0), this.loadPlaylist();
            }),
            (e.stopLoad = function () {
              (this.canLoad = !1), this.clearTimer();
            }),
            (e.switchParams = function (t, e) {
              var r = null == e ? void 0 : e.renditionReports;
              if (r)
                for (var i = 0; i < r.length; i++) {
                  var a = r[i],
                    s = '' + a.URI;
                  if (s === t.substr(-s.length)) {
                    var o = parseInt(a['LAST-MSN']),
                      l = parseInt(a['LAST-PART']);
                    if (e && this.hls.config.lowLatencyMode) {
                      var u = Math.min(e.age - e.partTarget, e.targetduration);
                      void 0 !== l && u > e.partTarget && (l += 1);
                    }
                    if (Object(n.a)(o)) return new K(o, Object(n.a)(l) ? l : void 0, U.No);
                  }
                }
            }),
            (e.loadPlaylist = function (t) {}),
            (e.shouldLoadTrack = function (t) {
              return this.canLoad && t && !!t.url && (!t.details || t.details.live);
            }),
            (e.playlistLoaded = function (t, e, r) {
              var i = this,
                n = e.details,
                a = e.stats,
                s = a.loading.end ? Math.max(0, self.performance.now() - a.loading.end) : 0;
              if (((n.advancedDateTime = Date.now() - s), n.live || (null != r && r.live))) {
                if (
                  (n.reloaded(r),
                  r &&
                    this.log(
                      'live playlist ' +
                        t +
                        ' ' +
                        (n.advanced
                          ? 'REFRESHED ' + n.lastPartSn + '-' + n.lastPartIndex
                          : 'MISSED'),
                    ),
                  r && n.fragments.length > 0 && q(r, n),
                  !this.canLoad || !n.live)
                )
                  return;
                var o,
                  l = void 0,
                  u = void 0;
                if (n.canBlockReload && n.endSN && n.advanced) {
                  var h = this.hls.config.lowLatencyMode,
                    d = n.lastPartSn,
                    c = n.endSN,
                    f = n.lastPartIndex,
                    g = d === c;
                  -1 !== f ? ((l = g ? c + 1 : d), (u = g ? (h ? 0 : f) : f + 1)) : (l = c + 1);
                  var v = n.age,
                    p = v + n.ageHeader,
                    m = Math.min(p - n.partTarget, 1.5 * n.targetduration);
                  if (m > 0) {
                    if (r && m > r.tuneInGoal)
                      this.warn(
                        'CDN Tune-in goal increased from: ' +
                          r.tuneInGoal +
                          ' to: ' +
                          m +
                          ' with playlist age: ' +
                          n.age,
                      ),
                        (m = 0);
                    else {
                      var y = Math.floor(m / n.targetduration);
                      if (((l += y), void 0 !== u))
                        u += Math.round((m % n.targetduration) / n.partTarget);
                      this.log(
                        'CDN Tune-in age: ' +
                          n.ageHeader +
                          's last advanced ' +
                          v.toFixed(2) +
                          's goal: ' +
                          m +
                          ' skip sn ' +
                          y +
                          ' to part ' +
                          u,
                      );
                    }
                    n.tuneInGoal = m;
                  }
                  if (((o = this.getDeliveryDirectives(n, e.deliveryDirectives, l, u)), h || !g))
                    return void this.loadPlaylist(o);
                } else o = this.getDeliveryDirectives(n, e.deliveryDirectives, l, u);
                var T = (function (t, e) {
                  var r,
                    i = 1e3 * t.levelTargetDuration,
                    n = i / 2,
                    a = t.age,
                    s = a > 0 && a < 3 * i,
                    o = e.loading.end - e.loading.start,
                    l = t.availabilityDelay;
                  if (!1 === t.updated)
                    if (s) {
                      var u = 333 * t.misses;
                      (r = Math.max(Math.min(n, 2 * o), u)),
                        (t.availabilityDelay = (t.availabilityDelay || 0) + r);
                    } else r = n;
                  else
                    s
                      ? ((l = Math.min(l || i / 2, a)), (t.availabilityDelay = l), (r = l + i - a))
                      : (r = i - o);
                  return Math.round(r);
                })(n, a);
                void 0 !== l && n.canBlockReload && (T -= n.partTarget || 1),
                  this.log('reload live playlist ' + t + ' in ' + Math.round(T) + ' ms'),
                  (this.timer = self.setTimeout(function () {
                    return i.loadPlaylist(o);
                  }, T));
              } else this.clearTimer();
            }),
            (e.getDeliveryDirectives = function (t, e, r, i) {
              var n = (function (t, e) {
                var r = t.canSkipUntil,
                  i = t.canSkipDateRanges,
                  n = t.endSN;
                return r && (void 0 !== e ? e - n : 0) < r ? (i ? U.v2 : U.Yes) : U.No;
              })(t, r);
              return (
                null != e &&
                  e.skip &&
                  t.deltaUpdateFailed &&
                  ((r = e.msn), (i = e.part), (n = U.No)),
                new K(r, i, n)
              );
            }),
            (e.retryLoadingOrFail = function (t) {
              var e,
                r = this,
                i = this.hls.config,
                n = this.retryCount < i.levelLoadingMaxRetry;
              if (n)
                if (
                  (this.retryCount++,
                  t.details.indexOf('LoadTimeOut') > -1 &&
                    null !== (e = t.context) &&
                    void 0 !== e &&
                    e.deliveryDirectives)
                )
                  this.warn(
                    'retry playlist loading #' + this.retryCount + ' after "' + t.details + '"',
                  ),
                    this.loadPlaylist();
                else {
                  var a = Math.min(
                    Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay,
                    i.levelLoadingMaxRetryTimeout,
                  );
                  (this.timer = self.setTimeout(function () {
                    return r.loadPlaylist();
                  }, a)),
                    this.warn(
                      'retry playlist loading #' +
                        this.retryCount +
                        ' in ' +
                        a +
                        ' ms after "' +
                        t.details +
                        '"',
                    );
                }
              else
                this.warn('cannot recover from error "' + t.details + '"'),
                  this.clearTimer(),
                  (t.fatal = !0);
              return n;
            }),
            t
          );
        })();
        function $() {
          return ($ =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        function J(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function Z(t, e) {
          return (Z =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var tt,
          et = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
          rt = (function (t) {
            var e, r;
            function i(e) {
              var r;
              return (
                ((r = t.call(this, e, '[level-controller]') || this)._levels = []),
                (r._firstLevel = -1),
                (r._startLevel = void 0),
                (r.currentLevelIndex = -1),
                (r.manualLevelIndex = -1),
                (r.onParsedComplete = void 0),
                r._registerListeners(),
                r
              );
            }
            (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              Z(e, r);
            var n,
              o,
              l,
              u = i.prototype;
            return (
              (u._registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MANIFEST_LOADED, this.onManifestLoaded, this),
                  t.on(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                  t.on(a.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                  t.on(a.a.FRAG_LOADED, this.onFragLoaded, this),
                  t.on(a.a.ERROR, this.onError, this);
              }),
              (u._unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MANIFEST_LOADED, this.onManifestLoaded, this),
                  t.off(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                  t.off(a.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                  t.off(a.a.FRAG_LOADED, this.onFragLoaded, this),
                  t.off(a.a.ERROR, this.onError, this);
              }),
              (u.destroy = function () {
                this._unregisterListeners(),
                  (this.manualLevelIndex = -1),
                  (this._levels.length = 0),
                  t.prototype.destroy.call(this);
              }),
              (u.startLoad = function () {
                this._levels.forEach(function (t) {
                  t.loadError = 0;
                }),
                  t.prototype.startLoad.call(this);
              }),
              (u.onManifestLoaded = function (t, e) {
                var r,
                  i,
                  n = [],
                  o = [],
                  l = [],
                  u = {},
                  h = !1,
                  d = !1,
                  c = !1;
                if (
                  (e.levels.forEach(function (t) {
                    var e = t.attrs;
                    (h = h || !(!t.width || !t.height)),
                      (d = d || !!t.videoCodec),
                      (c = c || !!t.audioCodec),
                      et &&
                        t.audioCodec &&
                        -1 !== t.audioCodec.indexOf('mp4a.40.34') &&
                        (t.audioCodec = void 0);
                    var r = t.bitrate + '-' + t.attrs.RESOLUTION + '-' + t.attrs.CODECS;
                    (i = u[r]) ? i.url.push(t.url) : ((i = new j(t)), (u[r] = i), n.push(i)),
                      e &&
                        (e.AUDIO && H(i, 'audio', e.AUDIO),
                        e.SUBTITLES && H(i, 'text', e.SUBTITLES));
                  }),
                  (h || d) &&
                    c &&
                    (n = n.filter(function (t) {
                      var e = t.videoCodec,
                        r = t.width,
                        i = t.height;
                      return !!e || !(!r || !i);
                    })),
                  (n = n.filter(function (t) {
                    var e = t.audioCodec,
                      r = t.videoCodec;
                    return (!e || m(e, 'audio')) && (!r || m(r, 'video'));
                  })),
                  e.audioTracks &&
                    V(
                      (o = e.audioTracks.filter(function (t) {
                        return !t.audioCodec || m(t.audioCodec, 'audio');
                      })),
                    ),
                  e.subtitles && V((l = e.subtitles)),
                  n.length > 0)
                ) {
                  (r = n[0].bitrate),
                    n.sort(function (t, e) {
                      return t.bitrate - e.bitrate;
                    }),
                    (this._levels = n);
                  for (var f = 0; f < n.length; f++)
                    if (n[f].bitrate === r) {
                      (this._firstLevel = f),
                        this.log(
                          'manifest loaded, ' + n.length + ' level(s) found, first bitrate: ' + r,
                        );
                      break;
                    }
                  var g = c && !d,
                    v = {
                      levels: n,
                      audioTracks: o,
                      subtitleTracks: l,
                      firstLevel: this._firstLevel,
                      stats: e.stats,
                      audio: c,
                      video: d,
                      altAudio:
                        !g &&
                        o.some(function (t) {
                          return !!t.url;
                        }),
                    };
                  this.hls.trigger(a.a.MANIFEST_PARSED, v),
                    (this.hls.config.autoStartLoad || this.hls.forceStartLoad) &&
                      this.hls.startLoad(this.hls.config.startPosition);
                } else
                  this.hls.trigger(a.a.ERROR, {
                    type: s.b.MEDIA_ERROR,
                    details: s.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                    fatal: !0,
                    url: e.url,
                    reason: 'no level with compatible codecs found in manifest',
                  });
              }),
              (u.onError = function (e, r) {
                if ((t.prototype.onError.call(this, e, r), !r.fatal)) {
                  var i = r.context,
                    n = this._levels[this.currentLevelIndex];
                  if (
                    i &&
                    ((i.type === k.a.AUDIO_TRACK &&
                      n.audioGroupIds &&
                      i.groupId === n.audioGroupIds[n.urlId]) ||
                      (i.type === k.a.SUBTITLE_TRACK &&
                        n.textGroupIds &&
                        i.groupId === n.textGroupIds[n.urlId]))
                  )
                    this.redundantFailover(this.currentLevelIndex);
                  else {
                    var a,
                      o = !1,
                      l = !0;
                    switch (r.details) {
                      case s.a.FRAG_LOAD_ERROR:
                      case s.a.FRAG_LOAD_TIMEOUT:
                      case s.a.KEY_LOAD_ERROR:
                      case s.a.KEY_LOAD_TIMEOUT:
                        if (r.frag) {
                          var u = this._levels[r.frag.level];
                          u
                            ? (u.fragmentError++,
                              u.fragmentError > this.hls.config.fragLoadingMaxRetry &&
                                (a = r.frag.level))
                            : (a = r.frag.level);
                        }
                        break;
                      case s.a.LEVEL_LOAD_ERROR:
                      case s.a.LEVEL_LOAD_TIMEOUT:
                        i && (i.deliveryDirectives && (l = !1), (a = i.level)), (o = !0);
                        break;
                      case s.a.REMUX_ALLOC_ERROR:
                        (a = r.level), (o = !0);
                    }
                    void 0 !== a && this.recoverLevel(r, a, o, l);
                  }
                }
              }),
              (u.recoverLevel = function (t, e, r, i) {
                var n = t.details,
                  a = this._levels[e];
                if ((a.loadError++, r)) {
                  if (!this.retryLoadingOrFail(t)) return void (this.currentLevelIndex = -1);
                  t.levelRetry = !0;
                }
                if (i) {
                  var s = a.url.length;
                  if (s > 1 && a.loadError < s) (t.levelRetry = !0), this.redundantFailover(e);
                  else if (-1 === this.manualLevelIndex) {
                    var o = 0 === e ? this._levels.length - 1 : e - 1;
                    this.currentLevelIndex !== o &&
                      0 === this._levels[o].loadError &&
                      (this.warn(n + ': switch to ' + o),
                      (t.levelRetry = !0),
                      (this.hls.nextAutoLevel = o));
                  }
                }
              }),
              (u.redundantFailover = function (t) {
                var e = this._levels[t],
                  r = e.url.length;
                if (r > 1) {
                  var i = (e.urlId + 1) % r;
                  this.warn('Switching to redundant URL-id ' + i),
                    this._levels.forEach(function (t) {
                      t.urlId = i;
                    }),
                    (this.level = t);
                }
              }),
              (u.onFragLoaded = function (t, e) {
                var r = e.frag;
                if (void 0 !== r && r.type === k.b.MAIN) {
                  var i = this._levels[r.level];
                  void 0 !== i && ((i.fragmentError = 0), (i.loadError = 0));
                }
              }),
              (u.onLevelLoaded = function (t, e) {
                var r,
                  i,
                  n = e.level,
                  a = e.details,
                  s = this._levels[n];
                if (!s)
                  return (
                    this.warn('Invalid level index ' + n),
                    void (
                      null !== (i = e.deliveryDirectives) &&
                      void 0 !== i &&
                      i.skip &&
                      (a.deltaUpdateFailed = !0)
                    )
                  );
                n === this.currentLevelIndex
                  ? (0 === s.fragmentError && ((s.loadError = 0), (this.retryCount = 0)),
                    this.playlistLoaded(n, e, s.details))
                  : null !== (r = e.deliveryDirectives) &&
                    void 0 !== r &&
                    r.skip &&
                    (a.deltaUpdateFailed = !0);
              }),
              (u.onAudioTrackSwitched = function (t, e) {
                var r = this.hls.levels[this.currentLevelIndex];
                if (r && r.audioGroupIds) {
                  for (
                    var i = -1, n = this.hls.audioTracks[e.id].groupId, a = 0;
                    a < r.audioGroupIds.length;
                    a++
                  )
                    if (r.audioGroupIds[a] === n) {
                      i = a;
                      break;
                    }
                  i !== r.urlId && ((r.urlId = i), this.startLoad());
                }
              }),
              (u.loadPlaylist = function (t) {
                var e = this.currentLevelIndex,
                  r = this._levels[e];
                if (this.canLoad && r && r.url.length > 0) {
                  var i = r.urlId,
                    n = r.url[i];
                  if (t)
                    try {
                      n = t.addDirectives(n);
                    } catch (t) {
                      this.warn('Could not construct new URL with HLS Delivery Directives: ' + t);
                    }
                  this.log(
                    'Attempt loading level index ' +
                      e +
                      (t ? ' at sn ' + t.msn + ' part ' + t.part : '') +
                      ' with URL-id ' +
                      i +
                      ' ' +
                      n,
                  ),
                    this.clearTimer(),
                    this.hls.trigger(a.a.LEVEL_LOADING, {
                      url: n,
                      level: e,
                      id: i,
                      deliveryDirectives: t || null,
                    });
                }
              }),
              (u.removeLevel = function (t, e) {
                var r = function (t, r) {
                    return r !== e;
                  },
                  i = this._levels
                    .filter(function (i, n) {
                      return (
                        n !== t ||
                        (i.url.length > 1 &&
                          void 0 !== e &&
                          ((i.url = i.url.filter(r)),
                          i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(r)),
                          i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(r)),
                          (i.urlId = 0),
                          !0))
                      );
                    })
                    .map(function (t, e) {
                      var r = t.details;
                      return (
                        null != r &&
                          r.fragments &&
                          r.fragments.forEach(function (t) {
                            t.level = e;
                          }),
                        t
                      );
                    });
                (this._levels = i), this.hls.trigger(a.a.LEVELS_UPDATED, { levels: i });
              }),
              (n = i),
              (o = [
                {
                  key: 'levels',
                  get: function () {
                    return 0 === this._levels.length ? null : this._levels;
                  },
                },
                {
                  key: 'level',
                  get: function () {
                    return this.currentLevelIndex;
                  },
                  set: function (t) {
                    var e,
                      r = this._levels;
                    if (
                      0 !== r.length &&
                      (this.currentLevelIndex !== t ||
                        null === (e = r[t]) ||
                        void 0 === e ||
                        !e.details)
                    ) {
                      if (t < 0 || t >= r.length) {
                        var i = t < 0;
                        if (
                          (this.hls.trigger(a.a.ERROR, {
                            type: s.b.OTHER_ERROR,
                            details: s.a.LEVEL_SWITCH_ERROR,
                            level: t,
                            fatal: i,
                            reason: 'invalid level idx',
                          }),
                          i)
                        )
                          return;
                        t = Math.min(t, r.length - 1);
                      }
                      this.clearTimer();
                      var n = this.currentLevelIndex,
                        o = r[n],
                        l = r[t];
                      this.log('switching to level ' + t + ' from ' + n),
                        (this.currentLevelIndex = t);
                      var u = $({}, l, {
                        level: t,
                        maxBitrate: l.maxBitrate,
                        uri: l.uri,
                        urlId: l.urlId,
                      });
                      delete u._urlId, this.hls.trigger(a.a.LEVEL_SWITCHING, u);
                      var h = l.details;
                      if (!h || h.live) {
                        var d = this.switchParams(l.uri, null == o ? void 0 : o.details);
                        this.loadPlaylist(d);
                      }
                    }
                  },
                },
                {
                  key: 'manualLevel',
                  get: function () {
                    return this.manualLevelIndex;
                  },
                  set: function (t) {
                    (this.manualLevelIndex = t),
                      void 0 === this._startLevel && (this._startLevel = t),
                      -1 !== t && (this.level = t);
                  },
                },
                {
                  key: 'firstLevel',
                  get: function () {
                    return this._firstLevel;
                  },
                  set: function (t) {
                    this._firstLevel = t;
                  },
                },
                {
                  key: 'startLevel',
                  get: function () {
                    if (void 0 === this._startLevel) {
                      var t = this.hls.config.startLevel;
                      return void 0 !== t ? t : this._firstLevel;
                    }
                    return this._startLevel;
                  },
                  set: function (t) {
                    this._startLevel = t;
                  },
                },
                {
                  key: 'nextLoadLevel',
                  get: function () {
                    return -1 !== this.manualLevelIndex
                      ? this.manualLevelIndex
                      : this.hls.nextAutoLevel;
                  },
                  set: function (t) {
                    (this.level = t), -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t);
                  },
                },
              ]) && J(n.prototype, o),
              l && J(n, l),
              i
            );
          })(Q);
        !(function (t) {
          (t.NOT_LOADED = 'NOT_LOADED'),
            (t.BACKTRACKED = 'BACKTRACKED'),
            (t.APPENDING = 'APPENDING'),
            (t.PARTIAL = 'PARTIAL'),
            (t.OK = 'OK');
        })(tt || (tt = {}));
        var it = (function () {
          function t(t) {
            (this.activeFragment = null),
              (this.activeParts = null),
              (this.fragments = Object.create(null)),
              (this.timeRanges = Object.create(null)),
              (this.bufferPadding = 0.2),
              (this.hls = void 0),
              (this.hls = t),
              this._registerListeners();
          }
          var e = t.prototype;
          return (
            (e._registerListeners = function () {
              var t = this.hls;
              t.on(a.a.BUFFER_APPENDED, this.onBufferAppended, this),
                t.on(a.a.FRAG_BUFFERED, this.onFragBuffered, this),
                t.on(a.a.FRAG_LOADED, this.onFragLoaded, this);
            }),
            (e._unregisterListeners = function () {
              var t = this.hls;
              t.off(a.a.BUFFER_APPENDED, this.onBufferAppended, this),
                t.off(a.a.FRAG_BUFFERED, this.onFragBuffered, this),
                t.off(a.a.FRAG_LOADED, this.onFragLoaded, this);
            }),
            (e.destroy = function () {
              this._unregisterListeners(), (this.fragments = this.timeRanges = null);
            }),
            (e.getAppendedFrag = function (t, e) {
              if (e === k.b.MAIN) {
                var r = this.activeFragment,
                  i = this.activeParts;
                if (!r) return null;
                if (i)
                  for (var n = i.length; n--; ) {
                    var a = i[n],
                      s = a ? a.end : r.appendedPTS;
                    if (a.start <= t && void 0 !== s && t <= s)
                      return n > 9 && (this.activeParts = i.slice(n - 9)), a;
                  }
                else if (r.start <= t && void 0 !== r.appendedPTS && t <= r.appendedPTS) return r;
              }
              return this.getBufferedFrag(t, e);
            }),
            (e.getBufferedFrag = function (t, e) {
              for (var r = this.fragments, i = Object.keys(r), n = i.length; n--; ) {
                var a = r[i[n]];
                if ((null == a ? void 0 : a.body.type) === e && a.buffered) {
                  var s = a.body;
                  if (s.start <= t && t <= s.end) return s;
                }
              }
              return null;
            }),
            (e.detectEvictedFragments = function (t, e, r) {
              var i = this;
              Object.keys(this.fragments).forEach(function (n) {
                var a = i.fragments[n];
                if (a)
                  if (a.buffered) {
                    var s = a.range[t];
                    s &&
                      s.time.some(function (t) {
                        var r = !i.isTimeBuffered(t.startPTS, t.endPTS, e);
                        return r && i.removeFragment(a.body), r;
                      });
                  } else a.body.type === r && i.removeFragment(a.body);
              });
            }),
            (e.detectPartialFragments = function (t) {
              var e = this,
                r = this.timeRanges,
                i = t.frag,
                n = t.part;
              if (r && 'initSegment' !== i.sn) {
                var a = at(i),
                  s = this.fragments[a];
                s &&
                  (Object.keys(r).forEach(function (t) {
                    var a = i.elementaryStreams[t];
                    if (a) {
                      var o = r[t],
                        l = null !== n || !0 === a.partial;
                      s.range[t] = e.getBufferedTimes(i, n, l, o);
                    }
                  }),
                  (s.backtrack = s.loaded = null),
                  Object.keys(s.range).length ? (s.buffered = !0) : this.removeFragment(s.body));
              }
            }),
            (e.fragBuffered = function (t) {
              var e = at(t),
                r = this.fragments[e];
              r && ((r.backtrack = r.loaded = null), (r.buffered = !0));
            }),
            (e.getBufferedTimes = function (t, e, r, i) {
              for (
                var n = { time: [], partial: r },
                  a = e ? e.start : t.start,
                  s = e ? e.end : t.end,
                  o = t.minEndPTS || s,
                  l = t.maxStartPTS || a,
                  u = 0;
                u < i.length;
                u++
              ) {
                var h = i.start(u) - this.bufferPadding,
                  d = i.end(u) + this.bufferPadding;
                if (l >= h && o <= d) {
                  n.time.push({ startPTS: Math.max(a, i.start(u)), endPTS: Math.min(s, i.end(u)) });
                  break;
                }
                if (a < d && s > h)
                  (n.partial = !0),
                    n.time.push({
                      startPTS: Math.max(a, i.start(u)),
                      endPTS: Math.min(s, i.end(u)),
                    });
                else if (s <= h) break;
              }
              return n;
            }),
            (e.getPartialFragment = function (t) {
              var e,
                r,
                i,
                n = null,
                a = 0,
                s = this.bufferPadding,
                o = this.fragments;
              return (
                Object.keys(o).forEach(function (l) {
                  var u = o[l];
                  u &&
                    nt(u) &&
                    ((r = u.body.start - s),
                    (i = u.body.end + s),
                    t >= r &&
                      t <= i &&
                      ((e = Math.min(t - r, i - t)), a <= e && ((n = u.body), (a = e))));
                }),
                n
              );
            }),
            (e.getState = function (t) {
              var e = at(t),
                r = this.fragments[e];
              return r
                ? r.buffered
                  ? nt(r)
                    ? tt.PARTIAL
                    : tt.OK
                  : r.backtrack
                  ? tt.BACKTRACKED
                  : tt.APPENDING
                : tt.NOT_LOADED;
            }),
            (e.backtrack = function (t, e) {
              var r = at(t),
                i = this.fragments[r];
              if (!i || i.backtrack) return null;
              var n = (i.backtrack = e || i.loaded);
              return (i.loaded = null), n;
            }),
            (e.getBacktrackData = function (t) {
              var e = at(t),
                r = this.fragments[e];
              if (r) {
                var i,
                  n = r.backtrack;
                if (null != n && null !== (i = n.payload) && void 0 !== i && i.byteLength) return n;
                this.removeFragment(t);
              }
              return null;
            }),
            (e.isTimeBuffered = function (t, e, r) {
              for (var i, n, a = 0; a < r.length; a++) {
                if (
                  ((i = r.start(a) - this.bufferPadding),
                  (n = r.end(a) + this.bufferPadding),
                  t >= i && e <= n)
                )
                  return !0;
                if (e <= i) return !1;
              }
              return !1;
            }),
            (e.onFragLoaded = function (t, e) {
              var r = e.frag,
                i = e.part;
              if ('initSegment' !== r.sn && !r.bitrateTest && !i) {
                var n = at(r);
                this.fragments[n] = {
                  body: r,
                  loaded: e,
                  backtrack: null,
                  buffered: !1,
                  range: Object.create(null),
                };
              }
            }),
            (e.onBufferAppended = function (t, e) {
              var r = this,
                i = e.frag,
                n = e.part,
                a = e.timeRanges;
              if (i.type === k.b.MAIN)
                if (((this.activeFragment = i), n)) {
                  var s = this.activeParts;
                  s || (this.activeParts = s = []), s.push(n);
                } else this.activeParts = null;
              (this.timeRanges = a),
                Object.keys(a).forEach(function (t) {
                  var e = a[t];
                  if ((r.detectEvictedFragments(t, e), !n))
                    for (var s = 0; s < e.length; s++)
                      i.appendedPTS = Math.max(e.end(s), i.appendedPTS || 0);
                });
            }),
            (e.onFragBuffered = function (t, e) {
              this.detectPartialFragments(e);
            }),
            (e.hasFragment = function (t) {
              var e = at(t);
              return !!this.fragments[e];
            }),
            (e.removeFragmentsInRange = function (t, e, r) {
              var i = this;
              Object.keys(this.fragments).forEach(function (n) {
                var a = i.fragments[n];
                if (a && a.buffered) {
                  var s = a.body;
                  s.type === r && s.start < e && s.end > t && i.removeFragment(s);
                }
              });
            }),
            (e.removeFragment = function (t) {
              var e = at(t);
              (t.stats.loaded = 0), t.clearElementaryStreamInfo(), delete this.fragments[e];
            }),
            (e.removeAllFragments = function () {
              (this.fragments = Object.create(null)),
                (this.activeFragment = null),
                (this.activeParts = null);
            }),
            t
          );
        })();
        function nt(t) {
          var e, r;
          return (
            t.buffered &&
            ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) ||
              (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
          );
        }
        function at(t) {
          return t.type + '_' + t.level + '_' + t.urlId + '_' + t.sn;
        }
        var st = (function () {
            function t() {
              (this._boundTick = void 0),
                (this._tickTimer = null),
                (this._tickInterval = null),
                (this._tickCallCount = 0),
                (this._boundTick = this.tick.bind(this));
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                this.onHandlerDestroying(), this.onHandlerDestroyed();
              }),
              (e.onHandlerDestroying = function () {
                this.clearNextTick(), this.clearInterval();
              }),
              (e.onHandlerDestroyed = function () {}),
              (e.hasInterval = function () {
                return !!this._tickInterval;
              }),
              (e.hasNextTick = function () {
                return !!this._tickTimer;
              }),
              (e.setInterval = function (t) {
                return (
                  !this._tickInterval &&
                  ((this._tickInterval = self.setInterval(this._boundTick, t)), !0)
                );
              }),
              (e.clearInterval = function () {
                return (
                  !!this._tickInterval &&
                  (self.clearInterval(this._tickInterval), (this._tickInterval = null), !0)
                );
              }),
              (e.clearNextTick = function () {
                return (
                  !!this._tickTimer &&
                  (self.clearTimeout(this._tickTimer), (this._tickTimer = null), !0)
                );
              }),
              (e.tick = function () {
                this._tickCallCount++,
                  1 === this._tickCallCount &&
                    (this.doTick(),
                    this._tickCallCount > 1 && this.tickImmediate(),
                    (this._tickCallCount = 0));
              }),
              (e.tickImmediate = function () {
                this.clearNextTick(), (this._tickTimer = self.setTimeout(this._boundTick, 0));
              }),
              (e.doTick = function () {}),
              t
            );
          })(),
          ot = {
            length: 0,
            start: function () {
              return 0;
            },
            end: function () {
              return 0;
            },
          },
          lt = (function () {
            function t() {}
            return (
              (t.isBuffered = function (e, r) {
                try {
                  if (e)
                    for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                      if (r >= i.start(n) && r <= i.end(n)) return !0;
                } catch (t) {}
                return !1;
              }),
              (t.bufferInfo = function (e, r, i) {
                try {
                  if (e) {
                    var n,
                      a = t.getBuffered(e),
                      s = [];
                    for (n = 0; n < a.length; n++) s.push({ start: a.start(n), end: a.end(n) });
                    return this.bufferedInfo(s, r, i);
                  }
                } catch (t) {}
                return { len: 0, start: r, end: r, nextStart: void 0 };
              }),
              (t.bufferedInfo = function (t, e, r) {
                (e = Math.max(0, e)),
                  t.sort(function (t, e) {
                    var r = t.start - e.start;
                    return r || e.end - t.end;
                  });
                var i = [];
                if (r)
                  for (var n = 0; n < t.length; n++) {
                    var a = i.length;
                    if (a) {
                      var s = i[a - 1].end;
                      t[n].start - s < r ? t[n].end > s && (i[a - 1].end = t[n].end) : i.push(t[n]);
                    } else i.push(t[n]);
                  }
                else i = t;
                for (var o, l = 0, u = e, h = e, d = 0; d < i.length; d++) {
                  var c = i[d].start,
                    f = i[d].end;
                  if (e + r >= c && e < f) (u = c), (l = (h = f) - e);
                  else if (e + r < c) {
                    o = c;
                    break;
                  }
                }
                return { len: l, start: u || 0, end: h || 0, nextStart: o };
              }),
              (t.getBuffered = function (t) {
                try {
                  return t.buffered;
                } catch (t) {
                  return o.b.log('failed to get media.buffered', t), ot;
                }
              }),
              t
            );
          })(),
          ut = function (t, e, r, i, n, a) {
            void 0 === i && (i = 0),
              void 0 === n && (n = -1),
              void 0 === a && (a = !1),
              (this.level = void 0),
              (this.sn = void 0),
              (this.part = void 0),
              (this.id = void 0),
              (this.size = void 0),
              (this.partial = void 0),
              (this.transmuxing = { start: 0, executeStart: 0, executeEnd: 0, end: 0 }),
              (this.buffering = {
                audio: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                video: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
                audiovideo: { start: 0, executeStart: 0, executeEnd: 0, end: 0 },
              }),
              (this.level = t),
              (this.sn = e),
              (this.id = r),
              (this.size = i),
              (this.part = n),
              (this.partial = a);
          };
        function ht(t, e) {
          if (t) {
            var r = t.start + e;
            (t.start = t.startPTS = r), (t.endPTS = r + t.duration);
          }
        }
        function dt(t, e) {
          for (var r = e.fragments, i = 0, n = r.length; i < n; i++) ht(r[i], t);
          e.fragmentHint && ht(e.fragmentHint, t), (e.alignedSliding = !0);
        }
        function ct(t, e, r) {
          e &&
            (!(function (t, e, r) {
              if (
                (function (t, e, r) {
                  return !(!e.details || !(r.endCC > r.startCC || (t && t.cc < r.startCC)));
                })(t, r, e)
              ) {
                var i = (function (t, e) {
                  var r = t.fragments,
                    i = e.fragments;
                  if (i.length && r.length) {
                    var n = (function (t, e) {
                      for (var r = null, i = 0, n = t.length; i < n; i++) {
                        var a = t[i];
                        if (a && a.cc === e) {
                          r = a;
                          break;
                        }
                      }
                      return r;
                    })(r, i[0].cc);
                    if (n && (!n || n.startPTS)) return n;
                    o.b.log('No frag in previous level to align on');
                  } else o.b.log('No fragments to align');
                })(r.details, e);
                i &&
                  Object(n.a)(i.start) &&
                  (o.b.log(
                    'Adjusting PTS using last level due to CC increase within current level ' +
                      e.url,
                  ),
                  dt(i.start, e));
              }
            })(t, r, e),
            !r.alignedSliding &&
              e.details &&
              (function (t, e) {
                if (!e.fragments.length || !t.hasProgramDateTime || !e.hasProgramDateTime) return;
                var r = e.fragments[0].programDateTime,
                  i = t.fragments[0].programDateTime,
                  a = (i - r) / 1e3 + e.fragments[0].start;
                a &&
                  Object(n.a)(a) &&
                  (o.b.log(
                    'Adjusting PTS using programDateTime delta ' +
                      (i - r) +
                      'ms, sliding:' +
                      a.toFixed(3) +
                      ' ' +
                      t.url +
                      ' ',
                  ),
                  dt(a, t));
              })(r, e.details),
            r.alignedSliding || !e.details || r.skippedSegments || X(e.details, r));
        }
        function ft(t, e) {
          var r = t.programDateTime;
          if (r) {
            var i = (r - e) / 1e3;
            (t.start = t.startPTS = i), (t.endPTS = i + t.duration);
          }
        }
        function gt(t, e) {
          if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
            var r = e.fragments[0].programDateTime - 1e3 * e.fragments[0].start;
            t.fragments.forEach(function (t) {
              ft(t, r);
            }),
              t.fragmentHint && ft(t.fragmentHint, r),
              (t.alignedSliding = !0);
          }
        }
        var vt = {
          search: function (t, e) {
            for (var r = 0, i = t.length - 1, n = null, a = null; r <= i; ) {
              var s = e((a = t[(n = ((r + i) / 2) | 0)]));
              if (s > 0) r = n + 1;
              else {
                if (!(s < 0)) return a;
                i = n - 1;
              }
            }
            return null;
          },
        };
        function pt(t, e, r) {
          if (null === e || !Array.isArray(t) || !t.length || !Object(n.a)(e)) return null;
          if (e < (t[0].programDateTime || 0)) return null;
          if (e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
          r = r || 0;
          for (var i = 0; i < t.length; ++i) {
            var a = t[i];
            if (Tt(e, r, a)) return a;
          }
          return null;
        }
        function mt(t, e, r, i) {
          void 0 === r && (r = 0), void 0 === i && (i = 0);
          var n = null;
          if (
            (t ? (n = e[t.sn - e[0].sn + 1] || null) : 0 === r && 0 === e[0].start && (n = e[0]),
            n && 0 === yt(r, i, n))
          )
            return n;
          var a = vt.search(e, yt.bind(null, r, i));
          return a || n;
        }
        function yt(t, e, r) {
          void 0 === t && (t = 0), void 0 === e && (e = 0);
          var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
          return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0;
        }
        function Tt(t, e, r) {
          var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
          return (r.endProgramDateTime || 0) - i > t;
        }
        function bt(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (bt = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf('[native code]')))
              return t;
            var r;
            if ('function' != typeof t)
              throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, i);
            }
            function i() {
              return Et(t, arguments, At(this).constructor);
            }
            return (
              (i.prototype = Object.create(t.prototype, {
                constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
              })),
              Lt(i, t)
            );
          })(t);
        }
        function Et(t, e, r) {
          return (Et = St()
            ? Reflect.construct
            : function (t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i))();
                return r && Lt(n, r.prototype), n;
              }).apply(null, arguments);
        }
        function St() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            );
          } catch (t) {
            return !1;
          }
        }
        function Lt(t, e) {
          return (Lt =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function At(t) {
          return (At = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        var Rt = Math.pow(2, 17),
          Dt = (function () {
            function t(t) {
              (this.config = void 0),
                (this.loader = null),
                (this.partLoadTimeout = -1),
                (this.config = t);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                this.loader && (this.loader.destroy(), (this.loader = null));
              }),
              (e.abort = function () {
                this.loader && this.loader.abort();
              }),
              (e.load = function (t, e) {
                var r = this,
                  i = t.url;
                if (!i)
                  return Promise.reject(
                    new _t(
                      {
                        type: s.b.NETWORK_ERROR,
                        details: s.a.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: t,
                        networkDetails: null,
                      },
                      'Fragment does not have a ' + (i ? 'part list' : 'url'),
                    ),
                  );
                this.abort();
                var n = this.config,
                  a = n.fLoader,
                  o = n.loader;
                return new Promise(function (i, l) {
                  r.loader && r.loader.destroy();
                  var u = (r.loader = t.loader = a ? new a(n) : new o(n)),
                    h = kt(t),
                    d = {
                      timeout: n.fragLoadingTimeOut,
                      maxRetry: 0,
                      retryDelay: 0,
                      maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                      highWaterMark: Rt,
                    };
                  (t.stats = u.stats),
                    u.load(h, d, {
                      onSuccess: function (e, n, a, s) {
                        r.resetLoader(t, u),
                          i({ frag: t, part: null, payload: e.data, networkDetails: s });
                      },
                      onError: function (e, i, n) {
                        r.resetLoader(t, u),
                          l(
                            new _t({
                              type: s.b.NETWORK_ERROR,
                              details: s.a.FRAG_LOAD_ERROR,
                              fatal: !1,
                              frag: t,
                              response: e,
                              networkDetails: n,
                            }),
                          );
                      },
                      onAbort: function (e, i, n) {
                        r.resetLoader(t, u),
                          l(
                            new _t({
                              type: s.b.NETWORK_ERROR,
                              details: s.a.INTERNAL_ABORTED,
                              fatal: !1,
                              frag: t,
                              networkDetails: n,
                            }),
                          );
                      },
                      onTimeout: function (e, i, n) {
                        r.resetLoader(t, u),
                          l(
                            new _t({
                              type: s.b.NETWORK_ERROR,
                              details: s.a.FRAG_LOAD_TIMEOUT,
                              fatal: !1,
                              frag: t,
                              networkDetails: n,
                            }),
                          );
                      },
                      onProgress: function (r, i, n, a) {
                        e && e({ frag: t, part: null, payload: n, networkDetails: a });
                      },
                    });
                });
              }),
              (e.loadPart = function (t, e, r) {
                var i = this;
                this.abort();
                var n = this.config,
                  a = n.fLoader,
                  o = n.loader;
                return new Promise(function (l, u) {
                  i.loader && i.loader.destroy();
                  var h = (i.loader = t.loader = a ? new a(n) : new o(n)),
                    d = kt(t, e),
                    c = {
                      timeout: n.fragLoadingTimeOut,
                      maxRetry: 0,
                      retryDelay: 0,
                      maxRetryDelay: n.fragLoadingMaxRetryTimeout,
                      highWaterMark: Rt,
                    };
                  (e.stats = h.stats),
                    h.load(d, c, {
                      onSuccess: function (n, a, s, o) {
                        i.resetLoader(t, h), i.updateStatsFromPart(t, e);
                        var u = { frag: t, part: e, payload: n.data, networkDetails: o };
                        r(u), l(u);
                      },
                      onError: function (r, n, a) {
                        i.resetLoader(t, h),
                          u(
                            new _t({
                              type: s.b.NETWORK_ERROR,
                              details: s.a.FRAG_LOAD_ERROR,
                              fatal: !1,
                              frag: t,
                              part: e,
                              response: r,
                              networkDetails: a,
                            }),
                          );
                      },
                      onAbort: function (r, n, a) {
                        (t.stats.aborted = e.stats.aborted),
                          i.resetLoader(t, h),
                          u(
                            new _t({
                              type: s.b.NETWORK_ERROR,
                              details: s.a.INTERNAL_ABORTED,
                              fatal: !1,
                              frag: t,
                              part: e,
                              networkDetails: a,
                            }),
                          );
                      },
                      onTimeout: function (r, n, a) {
                        i.resetLoader(t, h),
                          u(
                            new _t({
                              type: s.b.NETWORK_ERROR,
                              details: s.a.FRAG_LOAD_TIMEOUT,
                              fatal: !1,
                              frag: t,
                              part: e,
                              networkDetails: a,
                            }),
                          );
                      },
                    });
                });
              }),
              (e.updateStatsFromPart = function (t, e) {
                var r = t.stats,
                  i = e.stats,
                  n = i.total;
                if (((r.loaded += i.loaded), n)) {
                  var a = Math.round(t.duration / e.duration),
                    s = Math.min(Math.round(r.loaded / n), a),
                    o = (a - s) * Math.round(r.loaded / s);
                  r.total = r.loaded + o;
                } else r.total = Math.max(r.loaded, r.total);
                var l = r.loading,
                  u = i.loading;
                l.start
                  ? (l.first += u.first - u.start)
                  : ((l.start = u.start), (l.first = u.first)),
                  (l.end = u.end);
              }),
              (e.resetLoader = function (t, e) {
                (t.loader = null),
                  this.loader === e &&
                    (self.clearTimeout(this.partLoadTimeout), (this.loader = null)),
                  e.destroy();
              }),
              t
            );
          })();
        function kt(t, e) {
          void 0 === e && (e = null);
          var r = e || t,
            i = {
              frag: t,
              part: e,
              responseType: 'arraybuffer',
              url: r.url,
              headers: {},
              rangeStart: 0,
              rangeEnd: 0,
            },
            a = r.byteRangeStartOffset,
            s = r.byteRangeEndOffset;
          return Object(n.a)(a) && Object(n.a)(s) && ((i.rangeStart = a), (i.rangeEnd = s)), i;
        }
        var _t = (function (t) {
            var e, r;
            function i(e) {
              for (var r, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                n[a - 1] = arguments[a];
              return (
                ((r = t.call.apply(t, [this].concat(n)) || this).data = void 0), (r.data = e), r
              );
            }
            return (
              (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              Lt(e, r),
              i
            );
          })(bt(Error)),
          It = r(15),
          Ct = {
            toString: function (t) {
              for (var e = '', r = t.length, i = 0; i < r; i++)
                e += '[' + t.start(i).toFixed(3) + ',' + t.end(i).toFixed(3) + ']';
              return e;
            },
          };
        function wt(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function Ot(t, e) {
          return (Ot =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var xt = 'STOPPED',
          Pt = 'IDLE',
          Mt = 'KEY_LOADING',
          Ft = 'FRAG_LOADING',
          Nt = 'FRAG_LOADING_WAITING_RETRY',
          Ut = 'WAITING_TRACK',
          Bt = 'PARSING',
          Gt = 'PARSED',
          Kt = 'BACKTRACKING',
          jt = 'ENDED',
          Ht = 'ERROR',
          Vt = 'WAITING_INIT_PTS',
          Wt = 'WAITING_LEVEL',
          Yt = (function (t) {
            var e, r;
            function i(e, r, i) {
              var n;
              return (
                ((n = t.call(this) || this).hls = void 0),
                (n.fragPrevious = null),
                (n.fragCurrent = null),
                (n.fragmentTracker = void 0),
                (n.transmuxer = null),
                (n._state = xt),
                (n.media = void 0),
                (n.mediaBuffer = void 0),
                (n.config = void 0),
                (n.bitrateTest = !1),
                (n.lastCurrentTime = 0),
                (n.nextLoadPosition = 0),
                (n.startPosition = 0),
                (n.loadedmetadata = !1),
                (n.fragLoadError = 0),
                (n.retryDate = 0),
                (n.levels = null),
                (n.fragmentLoader = void 0),
                (n.levelLastLoaded = null),
                (n.startFragRequested = !1),
                (n.decrypter = void 0),
                (n.initPTS = []),
                (n.onvseeking = null),
                (n.onvended = null),
                (n.logPrefix = ''),
                (n.log = void 0),
                (n.warn = void 0),
                (n.logPrefix = i),
                (n.log = o.b.log.bind(o.b, i + ':')),
                (n.warn = o.b.warn.bind(o.b, i + ':')),
                (n.hls = e),
                (n.fragmentLoader = new Dt(e.config)),
                (n.fragmentTracker = r),
                (n.config = e.config),
                (n.decrypter = new It.a(e, e.config)),
                e.on(
                  a.a.KEY_LOADED,
                  n.onKeyLoaded,
                  (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t;
                  })(n),
                ),
                n
              );
            }
            (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              Ot(e, r);
            var u,
              h,
              d,
              c = i.prototype;
            return (
              (c.doTick = function () {
                this.onTickEnd();
              }),
              (c.onTickEnd = function () {}),
              (c.startLoad = function (t) {}),
              (c.stopLoad = function () {
                this.fragmentLoader.abort();
                var t = this.fragCurrent;
                t && this.fragmentTracker.removeFragment(t),
                  this.resetTransmuxer(),
                  (this.fragCurrent = null),
                  (this.fragPrevious = null),
                  this.clearInterval(),
                  this.clearNextTick(),
                  (this.state = xt);
              }),
              (c._streamEnded = function (t, e) {
                var r = this.fragCurrent,
                  i = this.fragmentTracker;
                if (!e.live && r && r.sn === e.endSN && !t.nextStart) {
                  var n = i.getState(r);
                  return n === tt.PARTIAL || n === tt.OK;
                }
                return !1;
              }),
              (c.onMediaAttached = function (t, e) {
                var r = (this.media = this.mediaBuffer = e.media);
                (this.onvseeking = this.onMediaSeeking.bind(this)),
                  (this.onvended = this.onMediaEnded.bind(this)),
                  r.addEventListener('seeking', this.onvseeking),
                  r.addEventListener('ended', this.onvended);
                var i = this.config;
                this.levels &&
                  i.autoStartLoad &&
                  this.state === xt &&
                  this.startLoad(i.startPosition);
              }),
              (c.onMediaDetaching = function () {
                var t = this.media;
                null != t &&
                  t.ended &&
                  (this.log('MSE detaching and video ended, reset startPosition'),
                  (this.startPosition = this.lastCurrentTime = 0)),
                  t &&
                    (t.removeEventListener('seeking', this.onvseeking),
                    t.removeEventListener('ended', this.onvended),
                    (this.onvseeking = this.onvended = null)),
                  (this.media = this.mediaBuffer = null),
                  (this.loadedmetadata = !1),
                  this.fragmentTracker.removeAllFragments(),
                  this.stopLoad();
              }),
              (c.onMediaSeeking = function () {
                var t = this.config,
                  e = this.fragCurrent,
                  r = this.media,
                  i = this.mediaBuffer,
                  a = this.state,
                  s = r ? r.currentTime : 0,
                  o = lt.bufferInfo(i || r, s, t.maxBufferHole);
                if (
                  (this.log(
                    'media seeking to ' + (Object(n.a)(s) ? s.toFixed(3) : s) + ', state: ' + a,
                  ),
                  a === jt)
                )
                  this.resetLoadingState();
                else if (e && !o.len) {
                  var l = t.maxFragLookUpTolerance,
                    u = e.start - l,
                    h = s > e.start + e.duration + l;
                  (s < u || h) &&
                    (h &&
                      e.loader &&
                      (this.log(
                        'seeking outside of buffer while fragment load in progress, cancel fragment load',
                      ),
                      e.loader.abort()),
                    this.resetLoadingState());
                }
                r && (this.lastCurrentTime = s),
                  this.loadedmetadata || o.len || (this.nextLoadPosition = this.startPosition = s),
                  this.tickImmediate();
              }),
              (c.onMediaEnded = function () {
                this.startPosition = this.lastCurrentTime = 0;
              }),
              (c.onKeyLoaded = function (t, e) {
                if (this.state === Mt && e.frag === this.fragCurrent && this.levels) {
                  this.state = Pt;
                  var r = this.levels[e.frag.level].details;
                  r && this.loadFragment(e.frag, r, e.frag.start);
                }
              }),
              (c.onHandlerDestroying = function () {
                this.stopLoad(), t.prototype.onHandlerDestroying.call(this);
              }),
              (c.onHandlerDestroyed = function () {
                (this.state = xt),
                  this.hls.off(a.a.KEY_LOADED, this.onKeyLoaded, this),
                  this.fragmentLoader && this.fragmentLoader.destroy(),
                  this.decrypter && this.decrypter.destroy(),
                  (this.hls =
                    this.log =
                    this.warn =
                    this.decrypter =
                    this.fragmentLoader =
                    this.fragmentTracker =
                      null),
                  t.prototype.onHandlerDestroyed.call(this);
              }),
              (c.loadKey = function (t, e) {
                this.log(
                  'Loading key for ' +
                    t.sn +
                    ' of [' +
                    e.startSN +
                    '-' +
                    e.endSN +
                    '], ' +
                    ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                    ' ' +
                    t.level,
                ),
                  (this.state = Mt),
                  (this.fragCurrent = t),
                  this.hls.trigger(a.a.KEY_LOADING, { frag: t });
              }),
              (c.loadFragment = function (t, e, r) {
                this._loadFragForPlayback(t, e, r);
              }),
              (c._loadFragForPlayback = function (t, e, r) {
                var i = this;
                this._doFragLoad(t, e, r, function (e) {
                  if (i.fragContextChanged(t))
                    return (
                      i.warn(
                        'Fragment ' +
                          t.sn +
                          (e.part ? ' p: ' + e.part.index : '') +
                          ' of level ' +
                          t.level +
                          ' was dropped during download.',
                      ),
                      void i.fragmentTracker.removeFragment(t)
                    );
                  t.stats.chunkCount++, i._handleFragmentLoadProgress(e);
                })
                  .then(function (e) {
                    if (e) {
                      i.fragLoadError = 0;
                      var r = i.state;
                      if (!i.fragContextChanged(t))
                        return 'payload' in e &&
                          (i.log('Loaded fragment ' + t.sn + ' of level ' + t.level),
                          i.hls.trigger(a.a.FRAG_LOADED, e),
                          i.state === Kt)
                          ? (i.fragmentTracker.backtrack(t, e), void i.resetFragmentLoading(t))
                          : void i._handleFragmentLoadComplete(e);
                      (r === Ft || r === Kt || (!i.fragCurrent && r === Bt)) &&
                        (i.fragmentTracker.removeFragment(t), (i.state = Pt));
                    }
                  })
                  .catch(function (e) {
                    i.warn(e), i.resetFragmentLoading(t);
                  });
              }),
              (c.flushMainBuffer = function (t, e, r) {
                if ((void 0 === r && (r = null), t - e)) {
                  var i = { startOffset: t, endOffset: e, type: r };
                  (this.fragLoadError = 0), this.hls.trigger(a.a.BUFFER_FLUSHING, i);
                }
              }),
              (c._loadInitSegment = function (t) {
                var e = this;
                this._doFragLoad(t)
                  .then(function (r) {
                    if (!r || e.fragContextChanged(t) || !e.levels)
                      throw new Error('init load aborted');
                    return r;
                  })
                  .then(function (r) {
                    var i = e.hls,
                      n = r.payload,
                      s = t.decryptdata;
                    if (n && n.byteLength > 0 && s && s.key && s.iv && 'AES-128' === s.method) {
                      var o = self.performance.now();
                      return e.decrypter
                        .webCryptoDecrypt(new Uint8Array(n), s.key.buffer, s.iv.buffer)
                        .then(function (e) {
                          var n = self.performance.now();
                          return (
                            i.trigger(a.a.FRAG_DECRYPTED, {
                              frag: t,
                              payload: e,
                              stats: { tstart: o, tdecrypt: n },
                            }),
                            (r.payload = e),
                            r
                          );
                        });
                    }
                    return r;
                  })
                  .then(function (r) {
                    var i = e.fragCurrent,
                      n = e.hls,
                      s = e.levels;
                    if (!s) throw new Error('init load aborted, missing levels');
                    s[t.level].details;
                    var o = t.stats;
                    (e.state = Pt),
                      (e.fragLoadError = 0),
                      (t.data = new Uint8Array(r.payload)),
                      (o.parsing.start = o.buffering.start = self.performance.now()),
                      (o.parsing.end = o.buffering.end = self.performance.now()),
                      r.frag === i &&
                        n.trigger(a.a.FRAG_BUFFERED, { stats: o, frag: i, part: null, id: t.type }),
                      e.tick();
                  })
                  .catch(function (r) {
                    e.warn(r), e.resetFragmentLoading(t);
                  });
              }),
              (c.fragContextChanged = function (t) {
                var e = this.fragCurrent;
                return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId;
              }),
              (c.fragBufferedComplete = function (t, e) {
                var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                this.log(
                  'Buffered ' +
                    t.type +
                    ' sn: ' +
                    t.sn +
                    (e ? ' part: ' + e.index : '') +
                    ' of ' +
                    ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                    ' ' +
                    t.level +
                    ' ' +
                    Ct.toString(lt.getBuffered(r)),
                ),
                  (this.state = Pt),
                  this.tick();
              }),
              (c._handleFragmentLoadComplete = function (t) {
                var e = this.transmuxer;
                if (e) {
                  var r = t.frag,
                    i = t.part,
                    n = t.partsLoaded,
                    a =
                      !n ||
                      0 === n.length ||
                      n.some(function (t) {
                        return !t;
                      }),
                    s = new ut(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !a);
                  e.flush(s);
                }
              }),
              (c._handleFragmentLoadProgress = function (t) {}),
              (c._doFragLoad = function (t, e, r, i) {
                var s = this;
                if ((void 0 === r && (r = null), !this.levels))
                  throw new Error('frag load aborted, missing levels');
                if (((r = Math.max(t.start, r || 0)), this.config.lowLatencyMode && e)) {
                  var o = e.partList;
                  if (o && i) {
                    r > t.end && e.fragmentHint && (t = e.fragmentHint);
                    var l = this.getNextPart(o, t, r);
                    if (l > -1) {
                      var u = o[l];
                      return (
                        this.log(
                          'Loading part sn: ' +
                            t.sn +
                            ' p: ' +
                            u.index +
                            ' cc: ' +
                            t.cc +
                            ' of playlist [' +
                            e.startSN +
                            '-' +
                            e.endSN +
                            '] parts [0-' +
                            l +
                            '-' +
                            (o.length - 1) +
                            '] ' +
                            ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                            ': ' +
                            t.level +
                            ', target: ' +
                            parseFloat(r.toFixed(3)),
                        ),
                        (this.nextLoadPosition = u.start + u.duration),
                        (this.state = Ft),
                        this.hls.trigger(a.a.FRAG_LOADING, {
                          frag: t,
                          part: o[l],
                          targetBufferTime: r,
                        }),
                        this.doFragPartsLoad(t, o, l, i).catch(function (t) {
                          return s.handleFragLoadError(t);
                        })
                      );
                    }
                    if (!t.url || this.loadedEndOfParts(o, r)) return Promise.resolve(null);
                  }
                }
                return (
                  this.log(
                    'Loading fragment ' +
                      t.sn +
                      ' cc: ' +
                      t.cc +
                      ' ' +
                      (e ? 'of [' + e.startSN + '-' + e.endSN + '] ' : '') +
                      ('[stream-controller]' === this.logPrefix ? 'level' : 'track') +
                      ': ' +
                      t.level +
                      ', target: ' +
                      parseFloat(r.toFixed(3)),
                  ),
                  Object(n.a)(t.sn) &&
                    !this.bitrateTest &&
                    (this.nextLoadPosition = t.start + t.duration),
                  (this.state = Ft),
                  this.hls.trigger(a.a.FRAG_LOADING, { frag: t, targetBufferTime: r }),
                  this.fragmentLoader.load(t, i).catch(function (t) {
                    return s.handleFragLoadError(t);
                  })
                );
              }),
              (c.doFragPartsLoad = function (t, e, r, i) {
                var n = this;
                return new Promise(function (s, o) {
                  var l = [];
                  !(function r(u) {
                    var h = e[u];
                    n.fragmentLoader
                      .loadPart(t, h, i)
                      .then(function (i) {
                        l[h.index] = i;
                        var o = i.part;
                        n.hls.trigger(a.a.FRAG_LOADED, i);
                        var d = e[u + 1];
                        if (!d || d.fragment !== t) return s({ frag: t, part: o, partsLoaded: l });
                        r(u + 1);
                      })
                      .catch(o);
                  })(r);
                });
              }),
              (c.handleFragLoadError = function (t) {
                var e = t.data;
                return (
                  e && e.details === s.a.INTERNAL_ABORTED
                    ? this.handleFragLoadAborted(e.frag, e.part)
                    : this.hls.trigger(a.a.ERROR, e),
                  null
                );
              }),
              (c._handleTransmuxerFlush = function (t) {
                var e = this.getCurrentContext(t);
                if (e && this.state === Bt) {
                  var r = e.frag,
                    i = e.part,
                    n = e.level,
                    a = self.performance.now();
                  (r.stats.parsing.end = a),
                    i && (i.stats.parsing.end = a),
                    this.updateLevelTiming(r, i, n, t.partial);
                } else this.fragCurrent || (this.state = Pt);
              }),
              (c.getCurrentContext = function (t) {
                var e = this.levels,
                  r = t.level,
                  i = t.sn,
                  n = t.part;
                if (!e || !e[r])
                  return (
                    this.warn(
                      'Levels object was unset while buffering fragment ' +
                        i +
                        ' of level ' +
                        r +
                        '. The current chunk will not be buffered.',
                    ),
                    null
                  );
                var a = e[r],
                  s =
                    n > -1
                      ? (function (t, e, r) {
                          if (!t || !t.details) return null;
                          var i = t.details.partList;
                          if (i)
                            for (var n = i.length; n--; ) {
                              var a = i[n];
                              if (a.index === r && a.fragment.sn === e) return a;
                            }
                          return null;
                        })(a, i, n)
                      : null,
                  o = s
                    ? s.fragment
                    : (function (t, e, r) {
                        if (!t || !t.details) return null;
                        var i = t.details,
                          n = i.fragments[e - i.startSN];
                        return (
                          n ||
                          ((n = i.fragmentHint) && n.sn === e
                            ? n
                            : e < i.startSN && r && r.sn === e
                            ? r
                            : null)
                        );
                      })(a, i, this.fragCurrent);
                return o ? { frag: o, part: s, level: a } : null;
              }),
              (c.bufferFragmentData = function (t, e, r, i) {
                if (t && this.state === Bt) {
                  var n = t.data1,
                    s = t.data2,
                    o = n;
                  if ((n && s && (o = Object(l.a)(n, s)), o && o.length)) {
                    var u = {
                      type: t.type,
                      frag: e,
                      part: r,
                      chunkMeta: i,
                      parent: e.type,
                      data: o,
                    };
                    this.hls.trigger(a.a.BUFFER_APPENDING, u),
                      t.dropped && t.independent && !r && this.flushBufferGap(e);
                  }
                }
              }),
              (c.flushBufferGap = function (t) {
                var e = this.media;
                if (e)
                  if (lt.isBuffered(e, e.currentTime)) {
                    var r = e.currentTime,
                      i = lt.bufferInfo(e, r, 0),
                      n = t.duration,
                      a = Math.min(2 * this.config.maxFragLookUpTolerance, 0.25 * n),
                      s = Math.max(Math.min(t.start - a, i.end - a), r + a);
                    t.start - s > a && this.flushMainBuffer(s, t.start);
                  } else this.flushMainBuffer(0, t.start);
              }),
              (c.getFwdBufferInfo = function (t, e) {
                var r = this.config,
                  i = this.getLoadPosition();
                if (!Object(n.a)(i)) return null;
                var a = lt.bufferInfo(t, i, r.maxBufferHole);
                if (0 === a.len && void 0 !== a.nextStart) {
                  var s = this.fragmentTracker.getBufferedFrag(i, e);
                  if (s && a.nextStart < s.end)
                    return lt.bufferInfo(t, i, Math.max(a.nextStart, r.maxBufferHole));
                }
                return a;
              }),
              (c.getMaxBufferLength = function (t) {
                var e,
                  r = this.config;
                return (
                  (e = t
                    ? Math.max((8 * r.maxBufferSize) / t, r.maxBufferLength)
                    : r.maxBufferLength),
                  Math.min(e, r.maxMaxBufferLength)
                );
              }),
              (c.reduceMaxBufferLength = function (t) {
                var e = this.config,
                  r = t || e.maxBufferLength;
                return (
                  e.maxMaxBufferLength >= r &&
                  ((e.maxMaxBufferLength /= 2),
                  this.warn('Reduce max buffer length to ' + e.maxMaxBufferLength + 's'),
                  !0)
                );
              }),
              (c.getNextFragment = function (t, e) {
                var r,
                  i,
                  n = e.fragments,
                  a = n.length;
                if (!a) return null;
                var s,
                  o = this.config,
                  l = n[0].start;
                if (e.live) {
                  var u = o.initialLiveManifestSize;
                  if (a < u)
                    return (
                      this.warn(
                        'Not enough fragments to start playback (have: ' + a + ', need: ' + u + ')',
                      ),
                      null
                    );
                  e.PTSKnown ||
                    this.startFragRequested ||
                    -1 !== this.startPosition ||
                    ((s = this.getInitialLiveFragment(e, n)),
                    (this.startPosition = s ? this.hls.liveSyncPosition || s.start : t));
                } else t <= l && (s = n[0]);
                if (!s) {
                  var h = o.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                  s = this.getFragmentAtPosition(t, h, e);
                }
                return (
                  null === (r = s) ||
                    void 0 === r ||
                    !r.initSegment ||
                    (null !== (i = s) && void 0 !== i && i.initSegment.data) ||
                    this.bitrateTest ||
                    (s = s.initSegment),
                  s
                );
              }),
              (c.getNextPart = function (t, e, r) {
                for (var i = -1, n = !1, a = !0, s = 0, o = t.length; s < o; s++) {
                  var l = t[s];
                  if (((a = a && !l.independent), i > -1 && r < l.start)) break;
                  var u = l.loaded;
                  !u && (n || l.independent || a) && l.fragment === e && (i = s), (n = u);
                }
                return i;
              }),
              (c.loadedEndOfParts = function (t, e) {
                var r = t[t.length - 1];
                return r && e > r.start && r.loaded;
              }),
              (c.getInitialLiveFragment = function (t, e) {
                var r = this.fragPrevious,
                  i = null;
                if (r) {
                  if (
                    (t.hasProgramDateTime &&
                      (this.log(
                        'Live playlist, switching playlist, load frag with same PDT: ' +
                          r.programDateTime,
                      ),
                      (i = pt(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance))),
                    !i)
                  ) {
                    var n = r.sn + 1;
                    if (n >= t.startSN && n <= t.endSN) {
                      var a = e[n - t.startSN];
                      r.cc === a.cc &&
                        ((i = a),
                        this.log(
                          'Live playlist, switching playlist, load frag with next SN: ' + i.sn,
                        ));
                    }
                    i ||
                      ((i = (function (t, e) {
                        return vt.search(t, function (t) {
                          return t.cc < e ? 1 : t.cc > e ? -1 : 0;
                        });
                      })(e, r.cc)) &&
                        this.log(
                          'Live playlist, switching playlist, load frag with same CC: ' + i.sn,
                        ));
                  }
                } else {
                  var s = this.hls.liveSyncPosition;
                  null !== s &&
                    (i = this.getFragmentAtPosition(
                      s,
                      this.bitrateTest ? t.fragmentEnd : t.edge,
                      t,
                    ));
                }
                return i;
              }),
              (c.getFragmentAtPosition = function (t, e, r) {
                var i,
                  n = this.config,
                  a = this.fragPrevious,
                  s = r.fragments,
                  o = r.endSN,
                  l = r.fragmentHint,
                  u = n.maxFragLookUpTolerance,
                  h = !!(n.lowLatencyMode && r.partList && l);
                (h && l && !this.bitrateTest && ((s = s.concat(l)), (o = l.sn)), t < e)
                  ? (i = mt(a, s, t, t > e - u ? 0 : u))
                  : (i = s[s.length - 1]);
                if (i) {
                  var d = i.sn - r.startSN,
                    c = a && i.level === a.level,
                    f = s[d + 1];
                  if (this.fragmentTracker.getState(i) === tt.BACKTRACKED) {
                    i = null;
                    for (
                      var g = d;
                      s[g] && this.fragmentTracker.getState(s[g]) === tt.BACKTRACKED;

                    )
                      i = a ? s[g--] : s[--g];
                    i || (i = f);
                  } else
                    a &&
                      i.sn === a.sn &&
                      !h &&
                      c &&
                      (i.sn < o && this.fragmentTracker.getState(f) !== tt.OK
                        ? (this.log('SN ' + i.sn + ' just loaded, load next one: ' + f.sn), (i = f))
                        : (i = null));
                }
                return i;
              }),
              (c.synchronizeToLiveEdge = function (t) {
                var e = this.config,
                  r = this.media;
                if (r) {
                  var i = this.hls.liveSyncPosition,
                    n = r.currentTime,
                    a = t.fragments[0].start,
                    s = t.edge,
                    o = n >= a - e.maxFragLookUpTolerance && n <= s;
                  if (null !== i && r.duration > i && (n < i || !o)) {
                    var l =
                      void 0 !== e.liveMaxLatencyDuration
                        ? e.liveMaxLatencyDuration
                        : e.liveMaxLatencyDurationCount * t.targetduration;
                    ((!o && r.readyState < 4) || n < s - l) &&
                      (this.loadedmetadata || (this.nextLoadPosition = i),
                      r.readyState &&
                        (this.warn(
                          'Playback: ' +
                            n.toFixed(3) +
                            ' is located too far from the end of live sliding playlist: ' +
                            s +
                            ', reset currentTime to : ' +
                            i.toFixed(3),
                        ),
                        (r.currentTime = i)));
                  }
                }
              }),
              (c.alignPlaylists = function (t, e) {
                var r = this.levels,
                  i = this.levelLastLoaded,
                  a = this.fragPrevious,
                  s = null !== i ? r[i] : null,
                  o = t.fragments.length;
                if (!o) return this.warn('No fragments in live playlist'), 0;
                var l = t.fragments[0].start,
                  u = !e,
                  h = t.alignedSliding && Object(n.a)(l);
                if (u || (!h && !l)) {
                  ct(a, s, t);
                  var d = t.fragments[0].start;
                  return (
                    this.log(
                      'Live playlist sliding: ' +
                        d.toFixed(2) +
                        ' start-sn: ' +
                        (e ? e.startSN : 'na') +
                        '->' +
                        t.startSN +
                        ' prev-sn: ' +
                        (a ? a.sn : 'na') +
                        ' fragments: ' +
                        o,
                    ),
                    d
                  );
                }
                return l;
              }),
              (c.waitForCdnTuneIn = function (t) {
                return (
                  t.live &&
                  t.canBlockReload &&
                  t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                );
              }),
              (c.setStartPosition = function (t, e) {
                var r = this.startPosition;
                if ((r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime)) {
                  var i = t.startTimeOffset;
                  Object(n.a)(i)
                    ? ((r = e + i),
                      i < 0 && (r += t.totalduration),
                      (r = Math.min(Math.max(e, r), e + t.totalduration)),
                      this.log(
                        'Start time offset ' +
                          i +
                          ' found in playlist, adjust startPosition to ' +
                          r,
                      ),
                      (this.startPosition = r))
                    : t.live
                    ? (r = this.hls.liveSyncPosition || e)
                    : (this.startPosition = r = 0),
                    (this.lastCurrentTime = r);
                }
                this.nextLoadPosition = r;
              }),
              (c.getLoadPosition = function () {
                var t = this.media,
                  e = 0;
                return (
                  this.loadedmetadata && t
                    ? (e = t.currentTime)
                    : this.nextLoadPosition && (e = this.nextLoadPosition),
                  e
                );
              }),
              (c.handleFragLoadAborted = function (t, e) {
                this.transmuxer &&
                  'initSegment' !== t.sn &&
                  t.stats.aborted &&
                  (this.warn(
                    'Fragment ' +
                      t.sn +
                      (e ? ' part' + e.index : '') +
                      ' of level ' +
                      t.level +
                      ' was aborted',
                  ),
                  this.resetFragmentLoading(t));
              }),
              (c.resetFragmentLoading = function (t) {
                (this.fragCurrent && this.fragContextChanged(t)) || (this.state = Pt);
              }),
              (c.onFragmentOrKeyLoadError = function (t, e) {
                if (!e.fatal) {
                  var r = e.frag;
                  if (r && r.type === t) {
                    this.fragCurrent;
                    var i = this.config;
                    if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
                      if (this.resetLiveStartWhenNotLoaded(r.level)) return;
                      var n = Math.min(
                        Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay,
                        i.fragLoadingMaxRetryTimeout,
                      );
                      this.warn(
                        'Fragment ' +
                          r.sn +
                          ' of ' +
                          t +
                          ' ' +
                          r.level +
                          ' failed to load, retrying in ' +
                          n +
                          'ms',
                      ),
                        (this.retryDate = self.performance.now() + n),
                        this.fragLoadError++,
                        (this.state = Nt);
                    } else
                      e.levelRetry
                        ? (t === k.b.AUDIO && (this.fragCurrent = null),
                          (this.fragLoadError = 0),
                          (this.state = Pt))
                        : (o.b.error(e.details + ' reaches max retry, redispatch as fatal ...'),
                          (e.fatal = !0),
                          this.hls.stopLoad(),
                          (this.state = Ht));
                  }
                }
              }),
              (c.afterBufferFlushed = function (t, e, r) {
                if (t) {
                  var i = lt.getBuffered(t);
                  this.fragmentTracker.detectEvictedFragments(e, i, r),
                    this.state === jt && this.resetLoadingState();
                }
              }),
              (c.resetLoadingState = function () {
                (this.fragCurrent = null), (this.fragPrevious = null), (this.state = Pt);
              }),
              (c.resetLiveStartWhenNotLoaded = function (t) {
                if (!this.loadedmetadata) {
                  this.startFragRequested = !1;
                  var e = this.levels ? this.levels[t].details : null;
                  if (null != e && e.live)
                    return (
                      (this.startPosition = -1),
                      this.setStartPosition(e, 0),
                      this.resetLoadingState(),
                      !0
                    );
                  this.nextLoadPosition = this.startPosition;
                }
                return !1;
              }),
              (c.updateLevelTiming = function (t, e, r, i) {
                var n = this,
                  s = r.details;
                Object.keys(t.elementaryStreams).reduce(function (e, o) {
                  var l = t.elementaryStreams[o];
                  if (l) {
                    var u = l.endPTS - l.startPTS;
                    if (u <= 0)
                      return (
                        n.warn(
                          'Could not parse fragment ' +
                            t.sn +
                            ' ' +
                            o +
                            ' duration reliably (' +
                            u +
                            ') resetting transmuxer to fallback to playlist timing',
                        ),
                        n.resetTransmuxer(),
                        e || !1
                      );
                    var h = i ? 0 : Y(s, t, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
                    return (
                      n.hls.trigger(a.a.LEVEL_PTS_UPDATED, {
                        details: s,
                        level: r,
                        drift: h,
                        type: o,
                        frag: t,
                        start: l.startPTS,
                        end: l.endPTS,
                      }),
                      !0
                    );
                  }
                  return e;
                }, !1)
                  ? ((this.state = Gt), this.hls.trigger(a.a.FRAG_PARSED, { frag: t, part: e }))
                  : this.resetLoadingState();
              }),
              (c.resetTransmuxer = function () {
                this.transmuxer && (this.transmuxer.destroy(), (this.transmuxer = null));
              }),
              (u = i),
              (h = [
                {
                  key: 'state',
                  get: function () {
                    return this._state;
                  },
                  set: function (t) {
                    var e = this._state;
                    e !== t && ((this._state = t), this.log(e + '->' + t));
                  },
                },
              ]) && wt(u.prototype, h),
              d && wt(u, d),
              i
            );
          })(st);
        function qt() {
          return self.MediaSource || self.WebKitMediaSource;
        }
        function Xt() {
          return self.SourceBuffer || self.WebKitSourceBuffer;
        }
        var zt = r(18),
          Qt = r(10),
          $t = r(14),
          Jt = qt() || {
            isTypeSupported: function () {
              return !1;
            },
          },
          Zt = (function () {
            function t(t, e, r, i) {
              var n = this;
              (this.hls = void 0),
                (this.id = void 0),
                (this.observer = void 0),
                (this.frag = null),
                (this.part = null),
                (this.worker = void 0),
                (this.onwmsg = void 0),
                (this.transmuxer = null),
                (this.onTransmuxComplete = void 0),
                (this.onFlush = void 0),
                (this.hls = t),
                (this.id = e),
                (this.onTransmuxComplete = r),
                (this.onFlush = i);
              var l = t.config,
                u = function (e, r) {
                  ((r = r || {}).frag = n.frag), (r.id = n.id), t.trigger(e, r);
                };
              (this.observer = new $t.EventEmitter()),
                this.observer.on(a.a.FRAG_DECRYPTED, u),
                this.observer.on(a.a.ERROR, u);
              var h = {
                  mp4: Jt.isTypeSupported('video/mp4'),
                  mpeg: Jt.isTypeSupported('audio/mpeg'),
                  mp3: Jt.isTypeSupported('audio/mp4; codecs="mp3"'),
                },
                d = navigator.vendor;
              if (l.enableWorker && 'undefined' != typeof Worker) {
                var c;
                o.b.log('demuxing in webworker');
                try {
                  (c = this.worker = zt(19)),
                    (this.onwmsg = this.onWorkerMessage.bind(this)),
                    c.addEventListener('message', this.onwmsg),
                    (c.onerror = function (e) {
                      t.trigger(a.a.ERROR, {
                        type: s.b.OTHER_ERROR,
                        details: s.a.INTERNAL_EXCEPTION,
                        fatal: !0,
                        event: 'demuxerWorker',
                        error: new Error(e.message + '  (' + e.filename + ':' + e.lineno + ')'),
                      });
                    }),
                    c.postMessage({
                      cmd: 'init',
                      typeSupported: h,
                      vendor: d,
                      id: e,
                      config: JSON.stringify(l),
                    });
                } catch (t) {
                  o.b.warn('Error in worker:', t),
                    o.b.error('Error while initializing DemuxerWorker, fallback to inline'),
                    c && self.URL.revokeObjectURL(c.objectURL),
                    (this.transmuxer = new Qt.c(this.observer, h, l, d, e)),
                    (this.worker = null);
                }
              } else this.transmuxer = new Qt.c(this.observer, h, l, d, e);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                var t = this.worker;
                if (t)
                  t.removeEventListener('message', this.onwmsg),
                    t.terminate(),
                    (this.worker = null);
                else {
                  var e = this.transmuxer;
                  e && (e.destroy(), (this.transmuxer = null));
                }
                var r = this.observer;
                r && r.removeAllListeners(), (this.observer = null);
              }),
              (e.push = function (t, e, r, i, n, a, s, l, u, h) {
                var d = this;
                u.transmuxing.start = self.performance.now();
                var c = this.transmuxer,
                  f = this.worker,
                  g = a ? a.start : n.start,
                  v = n.decryptdata,
                  p = this.frag,
                  m = !(p && n.cc === p.cc),
                  y = !(p && u.level === p.level),
                  T = p ? u.sn - p.sn : -1,
                  b = this.part ? u.part - this.part.index : 1,
                  E = !y && (1 === T || (0 === T && 1 === b)),
                  S = self.performance.now();
                (y || T || 0 === n.stats.parsing.start) && (n.stats.parsing.start = S),
                  !a || (!b && E) || (a.stats.parsing.start = S);
                var L = new Qt.b(m, E, l, y, g);
                if (!E || m) {
                  o.b.log(
                    '[transmuxer-interface, ' +
                      n.type +
                      ']: Starting new transmux session for sn: ' +
                      u.sn +
                      ' p: ' +
                      u.part +
                      ' level: ' +
                      u.level +
                      ' id: ' +
                      u.id +
                      '\n        discontinuity: ' +
                      m +
                      '\n        trackSwitch: ' +
                      y +
                      '\n        contiguous: ' +
                      E +
                      '\n        accurateTimeOffset: ' +
                      l +
                      '\n        timeOffset: ' +
                      g,
                  );
                  var A = new Qt.a(r, i, e, s, h);
                  this.configureTransmuxer(A);
                }
                if (((this.frag = n), (this.part = a), f))
                  f.postMessage(
                    { cmd: 'demux', data: t, decryptdata: v, chunkMeta: u, state: L },
                    t instanceof ArrayBuffer ? [t] : [],
                  );
                else if (c) {
                  var R = c.push(t, v, u, L);
                  Object(Qt.d)(R)
                    ? R.then(function (t) {
                        d.handleTransmuxComplete(t);
                      })
                    : this.handleTransmuxComplete(R);
                }
              }),
              (e.flush = function (t) {
                var e = this;
                t.transmuxing.start = self.performance.now();
                var r = this.transmuxer,
                  i = this.worker;
                if (i) i.postMessage({ cmd: 'flush', chunkMeta: t });
                else if (r) {
                  var n = r.flush(t);
                  Object(Qt.d)(n)
                    ? n.then(function (r) {
                        e.handleFlushResult(r, t);
                      })
                    : this.handleFlushResult(n, t);
                }
              }),
              (e.handleFlushResult = function (t, e) {
                var r = this;
                t.forEach(function (t) {
                  r.handleTransmuxComplete(t);
                }),
                  this.onFlush(e);
              }),
              (e.onWorkerMessage = function (t) {
                var e = t.data,
                  r = this.hls;
                switch (e.event) {
                  case 'init':
                    self.URL.revokeObjectURL(this.worker.objectURL);
                    break;
                  case 'transmuxComplete':
                    this.handleTransmuxComplete(e.data);
                    break;
                  case 'flush':
                    this.onFlush(e.data);
                    break;
                  default:
                    (e.data = e.data || {}),
                      (e.data.frag = this.frag),
                      (e.data.id = this.id),
                      r.trigger(e.event, e.data);
                }
              }),
              (e.configureTransmuxer = function (t) {
                var e = this.worker,
                  r = this.transmuxer;
                e ? e.postMessage({ cmd: 'configure', config: t }) : r && r.configure(t);
              }),
              (e.handleTransmuxComplete = function (t) {
                (t.chunkMeta.transmuxing.end = self.performance.now()), this.onTransmuxComplete(t);
              }),
              t
            );
          })(),
          te = (function () {
            function t(t, e, r, i) {
              (this.config = void 0),
                (this.media = void 0),
                (this.fragmentTracker = void 0),
                (this.hls = void 0),
                (this.nudgeRetry = 0),
                (this.stallReported = !1),
                (this.stalled = null),
                (this.moved = !1),
                (this.seeking = !1),
                (this.config = t),
                (this.media = e),
                (this.fragmentTracker = r),
                (this.hls = i);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                this.hls = this.fragmentTracker = this.media = null;
              }),
              (e.poll = function (t) {
                var e = this.config,
                  r = this.media,
                  i = this.stalled,
                  n = r.currentTime,
                  a = r.seeking,
                  s = this.seeking && !a,
                  l = !this.seeking && a;
                if (((this.seeking = a), n === t)) {
                  if (
                    ((l || s) && (this.stalled = null),
                    !r.paused && !r.ended && 0 !== r.playbackRate && lt.getBuffered(r).length)
                  ) {
                    var u = lt.bufferInfo(r, n, 0),
                      h = u.len > 0,
                      d = u.nextStart || 0;
                    if (h || d) {
                      if (a) {
                        var c = u.len > 2,
                          f = !d || (d - n > 2 && !this.fragmentTracker.getPartialFragment(n));
                        if (c || f) return;
                        this.moved = !1;
                      }
                      if (!this.moved && null !== this.stalled) {
                        var g,
                          v = Math.max(d, u.start || 0) - n,
                          p = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                          m = (
                            null == p || null === (g = p.details) || void 0 === g ? void 0 : g.live
                          )
                            ? 2 * p.details.targetduration
                            : 2;
                        if (v > 0 && v <= m) return void this._trySkipBufferHole(null);
                      }
                      var y = self.performance.now();
                      if (null !== i) {
                        var T = y - i;
                        !a && T >= 250 && this._reportStall(u.len);
                        var b = lt.bufferInfo(r, n, e.maxBufferHole);
                        this._tryFixBufferStall(b, T);
                      } else this.stalled = y;
                    }
                  }
                } else if (((this.moved = !0), null !== i)) {
                  if (this.stallReported) {
                    var E = self.performance.now() - i;
                    o.b.warn(
                      'playback not stuck anymore @' + n + ', after ' + Math.round(E) + 'ms',
                    ),
                      (this.stallReported = !1);
                  }
                  (this.stalled = null), (this.nudgeRetry = 0);
                }
              }),
              (e._tryFixBufferStall = function (t, e) {
                var r = this.config,
                  i = this.fragmentTracker,
                  n = this.media.currentTime,
                  a = i.getPartialFragment(n);
                if (a && this._trySkipBufferHole(a)) return;
                t.len > r.maxBufferHole &&
                  e > 1e3 * r.highBufferWatchdogPeriod &&
                  (o.b.warn('Trying to nudge playhead over buffer-hole'),
                  (this.stalled = null),
                  this._tryNudgeBuffer());
              }),
              (e._reportStall = function (t) {
                var e = this.hls,
                  r = this.media;
                this.stallReported ||
                  ((this.stallReported = !0),
                  o.b.warn(
                    'Playback stalling at @' +
                      r.currentTime +
                      ' due to low buffer (buffer=' +
                      t +
                      ')',
                  ),
                  e.trigger(a.a.ERROR, {
                    type: s.b.MEDIA_ERROR,
                    details: s.a.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    buffer: t,
                  }));
              }),
              (e._trySkipBufferHole = function (t) {
                for (
                  var e = this.config,
                    r = this.hls,
                    i = this.media,
                    n = i.currentTime,
                    l = 0,
                    u = lt.getBuffered(i),
                    h = 0;
                  h < u.length;
                  h++
                ) {
                  var d = u.start(h);
                  if (n + e.maxBufferHole >= l && n < d) {
                    var c = Math.max(d + 0.05, i.currentTime + 0.1);
                    return (
                      o.b.warn('skipping hole, adjusting currentTime from ' + n + ' to ' + c),
                      (this.moved = !0),
                      (this.stalled = null),
                      (i.currentTime = c),
                      t &&
                        r.trigger(a.a.ERROR, {
                          type: s.b.MEDIA_ERROR,
                          details: s.a.BUFFER_SEEK_OVER_HOLE,
                          fatal: !1,
                          reason:
                            'fragment loaded with buffer holes, seeking from ' + n + ' to ' + c,
                          frag: t,
                        }),
                      c
                    );
                  }
                  l = u.end(h);
                }
                return 0;
              }),
              (e._tryNudgeBuffer = function () {
                var t = this.config,
                  e = this.hls,
                  r = this.media,
                  i = r.currentTime,
                  n = (this.nudgeRetry || 0) + 1;
                if (((this.nudgeRetry = n), n < t.nudgeMaxRetry)) {
                  var l = i + n * t.nudgeOffset;
                  o.b.warn("Nudging 'currentTime' from " + i + ' to ' + l),
                    (r.currentTime = l),
                    e.trigger(a.a.ERROR, {
                      type: s.b.MEDIA_ERROR,
                      details: s.a.BUFFER_NUDGE_ON_STALL,
                      fatal: !1,
                    });
                } else
                  o.b.error(
                    'Playhead still not moving while enough data buffered @' +
                      i +
                      ' after ' +
                      t.nudgeMaxRetry +
                      ' nudges',
                  ),
                    e.trigger(a.a.ERROR, {
                      type: s.b.MEDIA_ERROR,
                      details: s.a.BUFFER_STALLED_ERROR,
                      fatal: !0,
                    });
              }),
              t
            );
          })();
        function ee(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function re(t, e) {
          return (re =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var ie = (function (t) {
            var e, r;
            function i(e, r) {
              var i;
              return (
                ((i = t.call(this, e, r, '[stream-controller]') || this).audioCodecSwap = !1),
                (i.gapController = null),
                (i.level = -1),
                (i._forceStartLoad = !1),
                (i.altAudio = !1),
                (i.audioOnly = !1),
                (i.fragPlaying = null),
                (i.onvplaying = null),
                (i.onvseeked = null),
                (i.fragLastKbps = 0),
                (i.stalled = !1),
                (i.couldBacktrack = !1),
                (i.audioCodecSwitch = !1),
                (i.videoBuffer = null),
                i._registerListeners(),
                i
              );
            }
            (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              re(e, r);
            var l,
              h,
              d,
              c = i.prototype;
            return (
              (c._registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.on(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.on(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                  t.on(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                  t.on(a.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                  t.on(a.a.ERROR, this.onError, this),
                  t.on(a.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                  t.on(a.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                  t.on(a.a.BUFFER_CREATED, this.onBufferCreated, this),
                  t.on(a.a.BUFFER_FLUSHED, this.onBufferFlushed, this),
                  t.on(a.a.LEVELS_UPDATED, this.onLevelsUpdated, this),
                  t.on(a.a.FRAG_BUFFERED, this.onFragBuffered, this);
              }),
              (c._unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.off(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.off(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                  t.off(a.a.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this),
                  t.off(a.a.ERROR, this.onError, this),
                  t.off(a.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                  t.off(a.a.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this),
                  t.off(a.a.BUFFER_CREATED, this.onBufferCreated, this),
                  t.off(a.a.BUFFER_FLUSHED, this.onBufferFlushed, this),
                  t.off(a.a.LEVELS_UPDATED, this.onLevelsUpdated, this),
                  t.off(a.a.FRAG_BUFFERED, this.onFragBuffered, this);
              }),
              (c.onHandlerDestroying = function () {
                this._unregisterListeners(), this.onMediaDetaching();
              }),
              (c.startLoad = function (t) {
                if (this.levels) {
                  var e = this.lastCurrentTime,
                    r = this.hls;
                  if (
                    (this.stopLoad(),
                    this.setInterval(100),
                    (this.level = -1),
                    (this.fragLoadError = 0),
                    !this.startFragRequested)
                  ) {
                    var i = r.startLevel;
                    -1 === i &&
                      (r.config.testBandwidth
                        ? ((i = 0), (this.bitrateTest = !0))
                        : (i = r.nextAutoLevel)),
                      (this.level = r.nextLoadLevel = i),
                      (this.loadedmetadata = !1);
                  }
                  e > 0 &&
                    -1 === t &&
                    (this.log('Override startPosition with lastCurrentTime @' + e.toFixed(3)),
                    (t = e)),
                    (this.state = Pt),
                    (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t),
                    this.tick();
                } else (this._forceStartLoad = !0), (this.state = xt);
              }),
              (c.stopLoad = function () {
                (this._forceStartLoad = !1), t.prototype.stopLoad.call(this);
              }),
              (c.doTick = function () {
                switch (this.state) {
                  case Pt:
                    this.doTickIdle();
                    break;
                  case Wt:
                    var t,
                      e = this.levels,
                      r = this.level,
                      i = null == e || null === (t = e[r]) || void 0 === t ? void 0 : t.details;
                    if (i && (!i.live || this.levelLastLoaded === this.level)) {
                      if (this.waitForCdnTuneIn(i)) break;
                      this.state = Pt;
                      break;
                    }
                    break;
                  case Nt:
                    var n,
                      a = self.performance.now(),
                      s = this.retryDate;
                    (!s || a >= s || (null !== (n = this.media) && void 0 !== n && n.seeking)) &&
                      (this.log('retryDate reached, switch back to IDLE state'), (this.state = Pt));
                }
                this.onTickEnd();
              }),
              (c.onTickEnd = function () {
                t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
              }),
              (c.doTickIdle = function () {
                var t,
                  e,
                  r = this.hls,
                  i = this.levelLastLoaded,
                  n = this.levels,
                  s = this.media,
                  o = r.config,
                  l = r.nextLoadLevel;
                if (
                  null !== i &&
                  (s || (!this.startFragRequested && o.startFragPrefetch)) &&
                  (!this.altAudio || !this.audioOnly) &&
                  n &&
                  n[l]
                ) {
                  var h = n[l];
                  this.level = r.nextLoadLevel = l;
                  var d = h.details;
                  if (!d || this.state === Wt || (d.live && this.levelLastLoaded !== l))
                    this.state = Wt;
                  else {
                    var c = this.getFwdBufferInfo(
                      this.mediaBuffer ? this.mediaBuffer : s,
                      k.b.MAIN,
                    );
                    if (null !== c)
                      if (!(c.len >= this.getMaxBufferLength(h.maxBitrate))) {
                        if (this._streamEnded(c, d)) {
                          var f = {};
                          return (
                            this.altAudio && (f.type = 'video'),
                            this.hls.trigger(a.a.BUFFER_EOS, f),
                            void (this.state = jt)
                          );
                        }
                        var g = c.end,
                          v = this.getNextFragment(g, d);
                        if (
                          this.couldBacktrack &&
                          !this.fragPrevious &&
                          v &&
                          'initSegment' !== v.sn
                        ) {
                          var p = v.sn - d.startSN;
                          p > 1 &&
                            ((v = d.fragments[p - 1]), this.fragmentTracker.removeFragment(v));
                        }
                        if (
                          v &&
                          this.fragmentTracker.getState(v) === tt.OK &&
                          this.nextLoadPosition > g
                        ) {
                          var m = this.audioOnly && !this.altAudio ? u.a.AUDIO : u.a.VIDEO;
                          this.afterBufferFlushed(s, m, k.b.MAIN),
                            (v = this.getNextFragment(this.nextLoadPosition, d));
                        }
                        v &&
                          (!v.initSegment ||
                            v.initSegment.data ||
                            this.bitrateTest ||
                            (v = v.initSegment),
                          'identity' !==
                            (null === (t = v.decryptdata) || void 0 === t ? void 0 : t.keyFormat) ||
                          (null !== (e = v.decryptdata) && void 0 !== e && e.key)
                            ? this.loadFragment(v, d, g)
                            : this.loadKey(v, d));
                      }
                  }
                }
              }),
              (c.loadFragment = function (e, r, i) {
                var n,
                  a = this.fragmentTracker.getState(e);
                if (((this.fragCurrent = e), a === tt.BACKTRACKED)) {
                  var s = this.fragmentTracker.getBacktrackData(e);
                  if (s)
                    return (
                      this._handleFragmentLoadProgress(s), void this._handleFragmentLoadComplete(s)
                    );
                  a = tt.NOT_LOADED;
                }
                a === tt.NOT_LOADED || a === tt.PARTIAL
                  ? 'initSegment' === e.sn
                    ? this._loadInitSegment(e)
                    : this.bitrateTest
                    ? ((e.bitrateTest = !0),
                      this.log(
                        'Fragment ' +
                          e.sn +
                          ' of level ' +
                          e.level +
                          ' is being downloaded to test bitrate and will not be buffered',
                      ),
                      this._loadBitrateTestFrag(e))
                    : ((this.startFragRequested = !0), t.prototype.loadFragment.call(this, e, r, i))
                  : a === tt.APPENDING
                  ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
                  : 0 ===
                      (null === (n = this.media) || void 0 === n ? void 0 : n.buffered.length) &&
                    this.fragmentTracker.removeAllFragments();
              }),
              (c.getAppendedFrag = function (t) {
                var e = this.fragmentTracker.getAppendedFrag(t, k.b.MAIN);
                return e && 'fragment' in e ? e.fragment : e;
              }),
              (c.getBufferedFrag = function (t) {
                return this.fragmentTracker.getBufferedFrag(t, k.b.MAIN);
              }),
              (c.followingBufferedFrag = function (t) {
                return t ? this.getBufferedFrag(t.end + 0.5) : null;
              }),
              (c.immediateLevelSwitch = function () {
                this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
              }),
              (c.nextLevelSwitch = function () {
                var t = this.levels,
                  e = this.media;
                if (null != e && e.readyState) {
                  var r,
                    i = this.getAppendedFrag(e.currentTime);
                  if ((i && i.start > 1 && this.flushMainBuffer(0, i.start - 1), !e.paused && t)) {
                    var n = t[this.hls.nextLoadLevel],
                      a = this.fragLastKbps;
                    r =
                      a && this.fragCurrent
                        ? (this.fragCurrent.duration * n.maxBitrate) / (1e3 * a) + 1
                        : 0;
                  } else r = 0;
                  var s = this.getBufferedFrag(e.currentTime + r);
                  if (s) {
                    var o = this.followingBufferedFrag(s);
                    if (o) {
                      this.abortCurrentFrag();
                      var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                        u = o.duration,
                        h = Math.max(
                          s.end,
                          l +
                            Math.min(
                              Math.max(u - this.config.maxFragLookUpTolerance, 0.5 * u),
                              0.75 * u,
                            ),
                        );
                      this.flushMainBuffer(h, Number.POSITIVE_INFINITY);
                    }
                  }
                }
              }),
              (c.abortCurrentFrag = function () {
                var t = this.fragCurrent;
                (this.fragCurrent = null),
                  null != t && t.loader && t.loader.abort(),
                  this.state === Mt && (this.state = Pt),
                  (this.nextLoadPosition = this.getLoadPosition());
              }),
              (c.flushMainBuffer = function (e, r) {
                t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? 'video' : null);
              }),
              (c.onMediaAttached = function (e, r) {
                t.prototype.onMediaAttached.call(this, e, r);
                var i = r.media;
                (this.onvplaying = this.onMediaPlaying.bind(this)),
                  (this.onvseeked = this.onMediaSeeked.bind(this)),
                  i.addEventListener('playing', this.onvplaying),
                  i.addEventListener('seeked', this.onvseeked),
                  (this.gapController = new te(this.config, i, this.fragmentTracker, this.hls));
              }),
              (c.onMediaDetaching = function () {
                var e = this.media;
                e &&
                  (e.removeEventListener('playing', this.onvplaying),
                  e.removeEventListener('seeked', this.onvseeked),
                  (this.onvplaying = this.onvseeked = null),
                  (this.videoBuffer = null)),
                  (this.fragPlaying = null),
                  this.gapController && (this.gapController.destroy(), (this.gapController = null)),
                  t.prototype.onMediaDetaching.call(this);
              }),
              (c.onMediaPlaying = function () {
                this.tick();
              }),
              (c.onMediaSeeked = function () {
                var t = this.media,
                  e = t ? t.currentTime : null;
                Object(n.a)(e) && this.log('Media seeked to ' + e.toFixed(3)), this.tick();
              }),
              (c.onManifestLoading = function () {
                this.log('Trigger BUFFER_RESET'),
                  this.hls.trigger(a.a.BUFFER_RESET, void 0),
                  this.fragmentTracker.removeAllFragments(),
                  (this.couldBacktrack = this.stalled = !1),
                  (this.startPosition = this.lastCurrentTime = 0),
                  (this.fragPlaying = null);
              }),
              (c.onManifestParsed = function (t, e) {
                var r,
                  i,
                  n,
                  a = !1,
                  s = !1;
                e.levels.forEach(function (t) {
                  (r = t.audioCodec) &&
                    (-1 !== r.indexOf('mp4a.40.2') && (a = !0),
                    -1 !== r.indexOf('mp4a.40.5') && (s = !0));
                }),
                  (this.audioCodecSwitch =
                    a &&
                    s &&
                    !(
                      'function' ==
                      typeof (null == (n = Xt()) || null === (i = n.prototype) || void 0 === i
                        ? void 0
                        : i.changeType)
                    )),
                  this.audioCodecSwitch &&
                    this.log(
                      'Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC',
                    ),
                  (this.levels = e.levels),
                  (this.startFragRequested = !1);
              }),
              (c.onLevelLoading = function (t, e) {
                var r = this.levels;
                if (r && this.state === Pt) {
                  var i = r[e.level];
                  (!i.details ||
                    (i.details.live && this.levelLastLoaded !== e.level) ||
                    this.waitForCdnTuneIn(i.details)) &&
                    (this.state = Wt);
                }
              }),
              (c.onLevelLoaded = function (t, e) {
                var r,
                  i = this.levels,
                  n = e.level,
                  s = e.details,
                  o = s.totalduration;
                if (i) {
                  this.log(
                    'Level ' +
                      n +
                      ' loaded [' +
                      s.startSN +
                      ',' +
                      s.endSN +
                      '], cc [' +
                      s.startCC +
                      ', ' +
                      s.endCC +
                      '] duration:' +
                      o,
                  );
                  var l = this.fragCurrent;
                  !l ||
                    (this.state !== Ft && this.state !== Nt) ||
                    (l.level !== e.level && l.loader && ((this.state = Pt), l.loader.abort()));
                  var u = i[n],
                    h = 0;
                  if (s.live || (null !== (r = u.details) && void 0 !== r && r.live)) {
                    if ((s.fragments[0] || (s.deltaUpdateFailed = !0), s.deltaUpdateFailed)) return;
                    h = this.alignPlaylists(s, u.details);
                  }
                  if (
                    ((u.details = s),
                    (this.levelLastLoaded = n),
                    this.hls.trigger(a.a.LEVEL_UPDATED, { details: s, level: n }),
                    this.state === Wt)
                  ) {
                    if (this.waitForCdnTuneIn(s)) return;
                    this.state = Pt;
                  }
                  this.startFragRequested
                    ? s.live && this.synchronizeToLiveEdge(s)
                    : this.setStartPosition(s, h),
                    this.tick();
                } else this.warn('Levels were reset while loading level ' + n);
              }),
              (c._handleFragmentLoadProgress = function (t) {
                var e,
                  r = t.frag,
                  i = t.part,
                  n = t.payload,
                  a = this.levels;
                if (a) {
                  var s = a[r.level],
                    o = s.details;
                  if (o) {
                    var l = s.videoCodec,
                      u = o.PTSKnown || !o.live,
                      h = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data,
                      d = this._getAudioCodec(s),
                      c = (this.transmuxer =
                        this.transmuxer ||
                        new Zt(
                          this.hls,
                          k.b.MAIN,
                          this._handleTransmuxComplete.bind(this),
                          this._handleTransmuxerFlush.bind(this),
                        )),
                      f = i ? i.index : -1,
                      g = -1 !== f,
                      v = new ut(r.level, r.sn, r.stats.chunkCount, n.byteLength, f, g),
                      p = this.initPTS[r.cc];
                    c.push(n, h, d, l, r, i, o.totalduration, u, v, p);
                  } else
                    this.warn(
                      'Dropping fragment ' +
                        r.sn +
                        ' of level ' +
                        r.level +
                        ' after level details were reset',
                    );
                } else
                  this.warn(
                    'Levels were reset while fragment load was in progress. Fragment ' +
                      r.sn +
                      ' of level ' +
                      r.level +
                      ' will not be buffered',
                  );
              }),
              (c.onAudioTrackSwitching = function (t, e) {
                var r = this.altAudio,
                  i = !!e.url,
                  n = e.id;
                if (!i) {
                  if (this.mediaBuffer !== this.media) {
                    this.log(
                      'Switching on main audio, use media.buffered to schedule main fragment loading',
                    ),
                      (this.mediaBuffer = this.media);
                    var s = this.fragCurrent;
                    null != s &&
                      s.loader &&
                      (this.log('Switching to main audio track, cancel main fragment load'),
                      s.loader.abort()),
                      this.resetTransmuxer(),
                      this.resetLoadingState();
                  } else this.audioOnly && this.resetTransmuxer();
                  var o = this.hls;
                  r &&
                    o.trigger(a.a.BUFFER_FLUSHING, {
                      startOffset: 0,
                      endOffset: Number.POSITIVE_INFINITY,
                      type: 'audio',
                    }),
                    o.trigger(a.a.AUDIO_TRACK_SWITCHED, { id: n });
                }
              }),
              (c.onAudioTrackSwitched = function (t, e) {
                var r = e.id,
                  i = !!this.hls.audioTracks[r].url;
                if (i) {
                  var n = this.videoBuffer;
                  n &&
                    this.mediaBuffer !== n &&
                    (this.log(
                      'Switching on alternate audio, use video.buffered to schedule main fragment loading',
                    ),
                    (this.mediaBuffer = n));
                }
                (this.altAudio = i), this.tick();
              }),
              (c.onBufferCreated = function (t, e) {
                var r,
                  i,
                  n = e.tracks,
                  a = !1;
                for (var s in n) {
                  var o = n[s];
                  if ('main' === o.id) {
                    if (((i = s), (r = o), 'video' === s)) {
                      var l = n[s];
                      l && (this.videoBuffer = l.buffer);
                    }
                  } else a = !0;
                }
                a && r
                  ? (this.log(
                      'Alternate track found, use ' +
                        i +
                        '.buffered to schedule main fragment loading',
                    ),
                    (this.mediaBuffer = r.buffer))
                  : (this.mediaBuffer = this.media);
              }),
              (c.onFragBuffered = function (t, e) {
                var r = e.frag,
                  i = e.part;
                if (!r || r.type === k.b.MAIN) {
                  if (this.fragContextChanged(r))
                    return (
                      this.warn(
                        'Fragment ' +
                          r.sn +
                          (i ? ' p: ' + i.index : '') +
                          ' of level ' +
                          r.level +
                          ' finished buffering, but was aborted. state: ' +
                          this.state,
                      ),
                      void (this.state === Gt && (this.state = Pt))
                    );
                  var n = i ? i.stats : r.stats;
                  (this.fragLastKbps = Math.round(
                    (8 * n.total) / (n.buffering.end - n.loading.first),
                  )),
                    'initSegment' !== r.sn && (this.fragPrevious = r),
                    this.fragBufferedComplete(r, i);
                }
              }),
              (c.onError = function (t, e) {
                switch (e.details) {
                  case s.a.FRAG_LOAD_ERROR:
                  case s.a.FRAG_LOAD_TIMEOUT:
                  case s.a.KEY_LOAD_ERROR:
                  case s.a.KEY_LOAD_TIMEOUT:
                    this.onFragmentOrKeyLoadError(k.b.MAIN, e);
                    break;
                  case s.a.LEVEL_LOAD_ERROR:
                  case s.a.LEVEL_LOAD_TIMEOUT:
                    this.state !== Ht &&
                      (e.fatal
                        ? (this.warn('' + e.details), (this.state = Ht))
                        : e.levelRetry || this.state !== Wt || (this.state = Pt));
                    break;
                  case s.a.BUFFER_FULL_ERROR:
                    if ('main' === e.parent && (this.state === Bt || this.state === Gt)) {
                      var r = !0,
                        i = this.getFwdBufferInfo(this.media, k.b.MAIN);
                      i && i.len > 0.5 && (r = !this.reduceMaxBufferLength(i.len)),
                        r &&
                          (this.warn(
                            'buffer full error also media.currentTime is not buffered, flush main',
                          ),
                          this.immediateLevelSwitch()),
                        this.resetLoadingState();
                    }
                }
              }),
              (c.checkBuffer = function () {
                var t = this.media,
                  e = this.gapController;
                if (t && e && t.readyState) {
                  var r = lt.getBuffered(t);
                  !this.loadedmetadata && r.length
                    ? ((this.loadedmetadata = !0), this.seekToStartPos())
                    : e.poll(this.lastCurrentTime),
                    (this.lastCurrentTime = t.currentTime);
                }
              }),
              (c.onFragLoadEmergencyAborted = function () {
                (this.state = Pt),
                  this.loadedmetadata ||
                    ((this.startFragRequested = !1), (this.nextLoadPosition = this.startPosition)),
                  this.tickImmediate();
              }),
              (c.onBufferFlushed = function (t, e) {
                var r = e.type;
                if (r !== u.a.AUDIO || (this.audioOnly && !this.altAudio)) {
                  var i = (r === u.a.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                  this.afterBufferFlushed(i, r, k.b.MAIN);
                }
              }),
              (c.onLevelsUpdated = function (t, e) {
                this.levels = e.levels;
              }),
              (c.swapAudioCodec = function () {
                this.audioCodecSwap = !this.audioCodecSwap;
              }),
              (c.seekToStartPos = function () {
                var t = this.media,
                  e = t.currentTime,
                  r = this.startPosition;
                if (r >= 0 && e < r) {
                  if (t.seeking)
                    return void o.b.log('could not seek to ' + r + ', already seeking at ' + e);
                  var i = lt.getBuffered(t),
                    n = (i.length ? i.start(0) : 0) - r;
                  n > 0 &&
                    (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) &&
                    (o.b.log('adjusting start position by ' + n + ' to match buffer start'),
                    (r += n),
                    (this.startPosition = r)),
                    this.log('seek to target start position ' + r + ' from current time ' + e),
                    (t.currentTime = r);
                }
              }),
              (c._getAudioCodec = function (t) {
                var e = this.config.defaultAudioCodec || t.audioCodec;
                return (
                  this.audioCodecSwap &&
                    e &&
                    (this.log('Swapping audio codec'),
                    (e = -1 !== e.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5')),
                  e
                );
              }),
              (c._loadBitrateTestFrag = function (t) {
                var e = this;
                this._doFragLoad(t).then(function (r) {
                  var i = e.hls;
                  if (r && !i.nextLoadLevel && !e.fragContextChanged(t)) {
                    (e.fragLoadError = 0),
                      (e.state = Pt),
                      (e.startFragRequested = !1),
                      (e.bitrateTest = !1);
                    var n = t.stats;
                    (n.parsing.start =
                      n.parsing.end =
                      n.buffering.start =
                      n.buffering.end =
                        self.performance.now()),
                      i.trigger(a.a.FRAG_LOADED, r);
                  }
                });
              }),
              (c._handleTransmuxComplete = function (t) {
                var e,
                  r = 'main',
                  i = this.hls,
                  s = t.remuxResult,
                  o = t.chunkMeta,
                  l = this.getCurrentContext(o);
                if (!l)
                  return (
                    this.warn(
                      'The loading context changed while buffering fragment ' +
                        o.sn +
                        ' of level ' +
                        o.level +
                        '. This chunk will not be buffered.',
                    ),
                    void this.resetLiveStartWhenNotLoaded(o.level)
                  );
                var h = l.frag,
                  d = l.part,
                  c = l.level,
                  f = s.video,
                  g = s.text,
                  v = s.id3,
                  p = s.initSegment,
                  m = this.altAudio ? void 0 : s.audio;
                if (!this.fragContextChanged(h)) {
                  if (((this.state = Bt), p)) {
                    p.tracks &&
                      (this._bufferInitSegment(c, p.tracks, h, o),
                      i.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, {
                        frag: h,
                        id: r,
                        tracks: p.tracks,
                      }));
                    var y = p.initPTS,
                      T = p.timescale;
                    Object(n.a)(y) &&
                      ((this.initPTS[h.cc] = y),
                      i.trigger(a.a.INIT_PTS_FOUND, { frag: h, id: r, initPTS: y, timescale: T }));
                  }
                  if (f && !1 !== s.independent) {
                    if (c.details) {
                      var b = f.startPTS,
                        E = f.endPTS,
                        S = f.startDTS,
                        L = f.endDTS;
                      if (d)
                        d.elementaryStreams[f.type] = {
                          startPTS: b,
                          endPTS: E,
                          startDTS: S,
                          endDTS: L,
                        };
                      else if (
                        (f.firstKeyFrame && f.independent && (this.couldBacktrack = !0),
                        f.dropped && f.independent)
                      ) {
                        if (this.getLoadPosition() + this.config.maxBufferHole < b)
                          return void this.backtrack(h);
                        h.setElementaryStreamInfo(f.type, h.start, E, h.start, L, !0);
                      }
                      h.setElementaryStreamInfo(f.type, b, E, S, L),
                        this.bufferFragmentData(f, h, d, o);
                    }
                  } else if (!1 === s.independent) return void this.backtrack(h);
                  if (m) {
                    var A = m.startPTS,
                      R = m.endPTS,
                      D = m.startDTS,
                      k = m.endDTS;
                    d &&
                      (d.elementaryStreams[u.a.AUDIO] = {
                        startPTS: A,
                        endPTS: R,
                        startDTS: D,
                        endDTS: k,
                      }),
                      h.setElementaryStreamInfo(u.a.AUDIO, A, R, D, k),
                      this.bufferFragmentData(m, h, d, o);
                  }
                  if (null != v && null !== (e = v.samples) && void 0 !== e && e.length) {
                    var _ = { frag: h, id: r, samples: v.samples };
                    i.trigger(a.a.FRAG_PARSING_METADATA, _);
                  }
                  if (g) {
                    var I = { frag: h, id: r, samples: g.samples };
                    i.trigger(a.a.FRAG_PARSING_USERDATA, I);
                  }
                }
              }),
              (c._bufferInitSegment = function (t, e, r, i) {
                var n = this;
                if (this.state === Bt) {
                  (this.audioOnly = !!e.audio && !e.video),
                    this.altAudio && !this.audioOnly && delete e.audio;
                  var s = e.audio,
                    o = e.video,
                    l = e.audiovideo;
                  if (s) {
                    var u = t.audioCodec,
                      h = navigator.userAgent.toLowerCase();
                    this.audioCodecSwitch &&
                      (u && (u = -1 !== u.indexOf('mp4a.40.5') ? 'mp4a.40.2' : 'mp4a.40.5'),
                      1 !== s.metadata.channelCount &&
                        -1 === h.indexOf('firefox') &&
                        (u = 'mp4a.40.5')),
                      -1 !== h.indexOf('android') &&
                        'audio/mpeg' !== s.container &&
                        ((u = 'mp4a.40.2'), this.log('Android: force audio codec to ' + u)),
                      t.audioCodec &&
                        t.audioCodec !== u &&
                        this.log(
                          'Swapping manifest audio codec "' + t.audioCodec + '" for "' + u + '"',
                        ),
                      (s.levelCodec = u),
                      (s.id = 'main'),
                      this.log(
                        'Init audio buffer, container:' +
                          s.container +
                          ', codecs[selected/level/parsed]=[' +
                          (u || '') +
                          '/' +
                          (t.audioCodec || '') +
                          '/' +
                          s.codec +
                          ']',
                      );
                  }
                  o &&
                    ((o.levelCodec = t.videoCodec),
                    (o.id = 'main'),
                    this.log(
                      'Init video buffer, container:' +
                        o.container +
                        ', codecs[level/parsed]=[' +
                        (t.videoCodec || '') +
                        '/' +
                        o.codec +
                        ']',
                    )),
                    l &&
                      this.log(
                        'Init audiovideo buffer, container:' +
                          l.container +
                          ', codecs[level/parsed]=[' +
                          (t.attrs.CODECS || '') +
                          '/' +
                          l.codec +
                          ']',
                      ),
                    this.hls.trigger(a.a.BUFFER_CODECS, e),
                    Object.keys(e).forEach(function (t) {
                      var s = e[t].initSegment;
                      null != s &&
                        s.byteLength &&
                        n.hls.trigger(a.a.BUFFER_APPENDING, {
                          type: t,
                          data: s,
                          frag: r,
                          part: null,
                          chunkMeta: i,
                          parent: r.type,
                        });
                    }),
                    this.tick();
                }
              }),
              (c.backtrack = function (t) {
                (this.couldBacktrack = !0), this.resetTransmuxer(), this.flushBufferGap(t);
                var e = this.fragmentTracker.backtrack(t);
                (this.fragPrevious = null),
                  (this.nextLoadPosition = t.start),
                  e ? this.resetFragmentLoading(t) : (this.state = Kt);
              }),
              (c.checkFragmentChanged = function () {
                var t = this.media,
                  e = null;
                if (t && t.readyState > 1 && !1 === t.seeking) {
                  var r = t.currentTime;
                  if (
                    (lt.isBuffered(t, r)
                      ? (e = this.getAppendedFrag(r))
                      : lt.isBuffered(t, r + 0.1) && (e = this.getAppendedFrag(r + 0.1)),
                    e)
                  ) {
                    var i = this.fragPlaying,
                      n = e.level;
                    (i && e.sn === i.sn && i.level === n && e.urlId === i.urlId) ||
                      (this.hls.trigger(a.a.FRAG_CHANGED, { frag: e }),
                      (i && i.level === n) || this.hls.trigger(a.a.LEVEL_SWITCHED, { level: n }),
                      (this.fragPlaying = e));
                  }
                }
              }),
              (l = i),
              (h = [
                {
                  key: 'nextLevel',
                  get: function () {
                    var t = this.nextBufferedFrag;
                    return t ? t.level : -1;
                  },
                },
                {
                  key: 'currentLevel',
                  get: function () {
                    var t = this.media;
                    if (t) {
                      var e = this.getAppendedFrag(t.currentTime);
                      if (e) return e.level;
                    }
                    return -1;
                  },
                },
                {
                  key: 'nextBufferedFrag',
                  get: function () {
                    var t = this.media;
                    if (t) {
                      var e = this.getAppendedFrag(t.currentTime);
                      return this.followingBufferedFrag(e);
                    }
                    return null;
                  },
                },
                {
                  key: 'forceStartLoad',
                  get: function () {
                    return this._forceStartLoad;
                  },
                },
              ]) && ee(l.prototype, h),
              d && ee(l, d),
              i
            );
          })(Yt),
          ne = (function () {
            function t(t, e, r) {
              void 0 === e && (e = 0),
                void 0 === r && (r = 0),
                (this.halfLife = void 0),
                (this.alpha_ = void 0),
                (this.estimate_ = void 0),
                (this.totalWeight_ = void 0),
                (this.halfLife = t),
                (this.alpha_ = t ? Math.exp(Math.log(0.5) / t) : 0),
                (this.estimate_ = e),
                (this.totalWeight_ = r);
            }
            var e = t.prototype;
            return (
              (e.sample = function (t, e) {
                var r = Math.pow(this.alpha_, t);
                (this.estimate_ = e * (1 - r) + r * this.estimate_), (this.totalWeight_ += t);
              }),
              (e.getTotalWeight = function () {
                return this.totalWeight_;
              }),
              (e.getEstimate = function () {
                if (this.alpha_) {
                  var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                  if (t) return this.estimate_ / t;
                }
                return this.estimate_;
              }),
              t
            );
          })(),
          ae = (function () {
            function t(t, e, r) {
              (this.defaultEstimate_ = void 0),
                (this.minWeight_ = void 0),
                (this.minDelayMs_ = void 0),
                (this.slow_ = void 0),
                (this.fast_ = void 0),
                (this.defaultEstimate_ = r),
                (this.minWeight_ = 0.001),
                (this.minDelayMs_ = 50),
                (this.slow_ = new ne(t)),
                (this.fast_ = new ne(e));
            }
            var e = t.prototype;
            return (
              (e.update = function (t, e) {
                var r = this.slow_,
                  i = this.fast_;
                this.slow_.halfLife !== t &&
                  (this.slow_ = new ne(t, r.getEstimate(), r.getTotalWeight())),
                  this.fast_.halfLife !== e &&
                    (this.fast_ = new ne(e, i.getEstimate(), i.getTotalWeight()));
              }),
              (e.sample = function (t, e) {
                var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                  i = (8 * e) / r;
                this.fast_.sample(r, i), this.slow_.sample(r, i);
              }),
              (e.canEstimate = function () {
                var t = this.fast_;
                return t && t.getTotalWeight() >= this.minWeight_;
              }),
              (e.getEstimate = function () {
                return this.canEstimate()
                  ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate())
                  : this.defaultEstimate_;
              }),
              (e.destroy = function () {}),
              t
            );
          })();
        function se(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var oe = (function () {
            function t(t) {
              (this.hls = void 0),
                (this.lastLoadedFragLevel = 0),
                (this._nextAutoLevel = -1),
                (this.timer = void 0),
                (this.onCheck = this._abandonRulesCheck.bind(this)),
                (this.fragCurrent = null),
                (this.partCurrent = null),
                (this.bitrateTestDelay = 0),
                (this.bwEstimator = void 0),
                (this.hls = t);
              var e = t.config;
              (this.bwEstimator = new ae(
                e.abrEwmaSlowVoD,
                e.abrEwmaFastVoD,
                e.abrEwmaDefaultEstimate,
              )),
                this.registerListeners();
            }
            var e,
              r,
              i,
              l = t.prototype;
            return (
              (l.registerListeners = function () {
                var t = this.hls;
                t.on(a.a.FRAG_LOADING, this.onFragLoading, this),
                  t.on(a.a.FRAG_LOADED, this.onFragLoaded, this),
                  t.on(a.a.FRAG_BUFFERED, this.onFragBuffered, this),
                  t.on(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                  t.on(a.a.ERROR, this.onError, this);
              }),
              (l.unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.FRAG_LOADING, this.onFragLoading, this),
                  t.off(a.a.FRAG_LOADED, this.onFragLoaded, this),
                  t.off(a.a.FRAG_BUFFERED, this.onFragBuffered, this),
                  t.off(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                  t.off(a.a.ERROR, this.onError, this);
              }),
              (l.destroy = function () {
                this.unregisterListeners(),
                  this.clearTimer(),
                  (this.hls = this.onCheck = null),
                  (this.fragCurrent = this.partCurrent = null);
              }),
              (l.onFragLoading = function (t, e) {
                var r,
                  i = e.frag;
                i.type === k.b.MAIN &&
                  (this.timer ||
                    ((this.fragCurrent = i),
                    (this.partCurrent = null != (r = e.part) ? r : null),
                    (this.timer = self.setInterval(this.onCheck, 100))));
              }),
              (l.onLevelLoaded = function (t, e) {
                var r = this.hls.config;
                e.details.live
                  ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive)
                  : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD);
              }),
              (l._abandonRulesCheck = function () {
                var t = this.fragCurrent,
                  e = this.partCurrent,
                  r = this.hls,
                  i = r.autoLevelEnabled,
                  s = r.config,
                  l = r.media;
                if (t && l) {
                  var u = e ? e.stats : t.stats,
                    h = e ? e.duration : t.duration;
                  if (u.aborted)
                    return (
                      o.b.warn('frag loader destroy or aborted, disarm abandonRules'),
                      this.clearTimer(),
                      void (this._nextAutoLevel = -1)
                    );
                  if (i && !l.paused && l.playbackRate && l.readyState) {
                    var d = performance.now() - u.loading.start,
                      c = Math.abs(l.playbackRate);
                    if (!(d <= (500 * h) / c)) {
                      var f = r.levels,
                        g = r.minAutoLevel,
                        v = f[t.level],
                        p = u.total || Math.max(u.loaded, Math.round((h * v.maxBitrate) / 8)),
                        m = Math.max(1, u.bwEstimate ? u.bwEstimate / 8 : (1e3 * u.loaded) / d),
                        y = (p - u.loaded) / m,
                        T = l.currentTime,
                        b = (lt.bufferInfo(l, T, s.maxBufferHole).end - T) / c;
                      if (!(b >= (2 * h) / c || y <= b)) {
                        var E,
                          S = Number.POSITIVE_INFINITY;
                        for (E = t.level - 1; E > g; E--) {
                          if ((S = (h * f[E].maxBitrate) / (6.4 * m)) < b) break;
                        }
                        if (!(S >= y)) {
                          var L = this.bwEstimator.getEstimate();
                          o.b.warn(
                            'Fragment ' +
                              t.sn +
                              (e ? ' part ' + e.index : '') +
                              ' of level ' +
                              t.level +
                              ' is loading too slowly and will cause an underbuffer; aborting and switching to level ' +
                              E +
                              '\n      Current BW estimate: ' +
                              (Object(n.a)(L) ? (L / 1024).toFixed(3) : 'Unknown') +
                              ' Kb/s\n      Estimated load time for current fragment: ' +
                              y.toFixed(3) +
                              ' s\n      Estimated load time for the next fragment: ' +
                              S.toFixed(3) +
                              ' s\n      Time to underbuffer: ' +
                              b.toFixed(3) +
                              ' s',
                          ),
                            (r.nextLoadLevel = E),
                            this.bwEstimator.sample(d, u.loaded),
                            this.clearTimer(),
                            t.loader &&
                              ((this.fragCurrent = this.partCurrent = null), t.loader.abort()),
                            r.trigger(a.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                              frag: t,
                              part: e,
                              stats: u,
                            });
                        }
                      }
                    }
                  }
                }
              }),
              (l.onFragLoaded = function (t, e) {
                var r = e.frag,
                  i = e.part;
                if (r.type === k.b.MAIN && Object(n.a)(r.sn)) {
                  var s = i ? i.stats : r.stats,
                    o = i ? i.duration : r.duration;
                  if (
                    (this.clearTimer(),
                    (this.lastLoadedFragLevel = r.level),
                    (this._nextAutoLevel = -1),
                    this.hls.config.abrMaxWithRealBitrate)
                  ) {
                    var l = this.hls.levels[r.level],
                      u = (l.loaded ? l.loaded.bytes : 0) + s.loaded,
                      h = (l.loaded ? l.loaded.duration : 0) + o;
                    (l.loaded = { bytes: u, duration: h }),
                      (l.realBitrate = Math.round((8 * u) / h));
                  }
                  if (r.bitrateTest) {
                    var d = { stats: s, frag: r, part: i, id: r.type };
                    this.onFragBuffered(a.a.FRAG_BUFFERED, d), (r.bitrateTest = !1);
                  }
                }
              }),
              (l.onFragBuffered = function (t, e) {
                var r = e.frag,
                  i = e.part,
                  n = i ? i.stats : r.stats;
                if (!n.aborted && r.type === k.b.MAIN && 'initSegment' !== r.sn) {
                  var a = n.parsing.end - n.loading.start;
                  this.bwEstimator.sample(a, n.loaded),
                    (n.bwEstimate = this.bwEstimator.getEstimate()),
                    r.bitrateTest ? (this.bitrateTestDelay = a / 1e3) : (this.bitrateTestDelay = 0);
                }
              }),
              (l.onError = function (t, e) {
                switch (e.details) {
                  case s.a.FRAG_LOAD_ERROR:
                  case s.a.FRAG_LOAD_TIMEOUT:
                    this.clearTimer();
                }
              }),
              (l.clearTimer = function () {
                self.clearInterval(this.timer), (this.timer = void 0);
              }),
              (l.getNextABRAutoLevel = function () {
                var t = this.fragCurrent,
                  e = this.partCurrent,
                  r = this.hls,
                  i = r.maxAutoLevel,
                  n = r.config,
                  a = r.minAutoLevel,
                  s = r.media,
                  l = e ? e.duration : t ? t.duration : 0,
                  u = s ? s.currentTime : 0,
                  h = s && 0 !== s.playbackRate ? Math.abs(s.playbackRate) : 1,
                  d = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                  c = (lt.bufferInfo(s, u, n.maxBufferHole).end - u) / h,
                  f = this.findBestLevel(d, a, i, c, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                if (f >= 0) return f;
                o.b.trace(
                  (c ? 'rebuffering expected' : 'buffer is empty') +
                    ', finding optimal quality level',
                );
                var g = l ? Math.min(l, n.maxStarvationDelay) : n.maxStarvationDelay,
                  v = n.abrBandWidthFactor,
                  p = n.abrBandWidthUpFactor;
                if (!c) {
                  var m = this.bitrateTestDelay;
                  if (m)
                    (g = (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - m),
                      o.b.trace(
                        'bitrate test took ' +
                          Math.round(1e3 * m) +
                          'ms, set first fragment max fetchDuration to ' +
                          Math.round(1e3 * g) +
                          ' ms',
                      ),
                      (v = p = 1);
                }
                return (f = this.findBestLevel(d, a, i, c + g, v, p)), Math.max(f, 0);
              }),
              (l.findBestLevel = function (t, e, r, i, n, a) {
                for (
                  var s,
                    l = this.fragCurrent,
                    u = this.partCurrent,
                    h = this.lastLoadedFragLevel,
                    d = this.hls.levels,
                    c = d[h],
                    f = !(null == c || null === (s = c.details) || void 0 === s || !s.live),
                    g = null == c ? void 0 : c.codecSet,
                    v = u ? u.duration : l ? l.duration : 0,
                    p = r;
                  p >= e;
                  p--
                ) {
                  var m = d[p];
                  if (m && (!g || m.codecSet === g)) {
                    var y = m.details,
                      T =
                        (u
                          ? null == y
                            ? void 0
                            : y.partTarget
                          : null == y
                          ? void 0
                          : y.averagetargetduration) || v,
                      b = void 0;
                    b = p <= h ? n * t : a * t;
                    var E = d[p].maxBitrate,
                      S = (E * T) / b;
                    if (
                      (o.b.trace(
                        'level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: ' +
                          p +
                          '/' +
                          Math.round(b) +
                          '/' +
                          E +
                          '/' +
                          T +
                          '/' +
                          i +
                          '/' +
                          S,
                      ),
                      b > E && (!S || (f && !this.bitrateTestDelay) || S < i))
                    )
                      return p;
                  }
                }
                return -1;
              }),
              (e = t),
              (r = [
                {
                  key: 'nextAutoLevel',
                  get: function () {
                    var t = this._nextAutoLevel,
                      e = this.bwEstimator;
                    if (!(-1 === t || (e && e.canEstimate()))) return t;
                    var r = this.getNextABRAutoLevel();
                    return -1 !== t && (r = Math.min(t, r)), r;
                  },
                  set: function (t) {
                    this._nextAutoLevel = t;
                  },
                },
              ]) && se(e.prototype, r),
              i && se(e, i),
              t
            );
          })(),
          le = r(13);
        function ue() {
          return (ue =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        function he(t, e) {
          return (he =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var de = (function (t) {
          var e, r;
          function i(e, r) {
            var i;
            return (
              ((i = t.call(this, e, r, '[audio-stream-controller]') || this).videoBuffer = null),
              (i.videoTrackCC = -1),
              (i.waitingVideoCC = -1),
              (i.audioSwitch = !1),
              (i.trackId = -1),
              (i.waitingData = null),
              (i.mainDetails = null),
              (i.bufferFlushed = !1),
              i._registerListeners(),
              i
            );
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            he(e, r);
          var l = i.prototype;
          return (
            (l.onHandlerDestroying = function () {
              this._unregisterListeners(), (this.mainDetails = null);
            }),
            (l._registerListeners = function () {
              var t = this.hls;
              t.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                t.on(a.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                t.on(a.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.on(a.a.ERROR, this.onError, this),
                t.on(a.a.BUFFER_RESET, this.onBufferReset, this),
                t.on(a.a.BUFFER_CREATED, this.onBufferCreated, this),
                t.on(a.a.BUFFER_FLUSHED, this.onBufferFlushed, this),
                t.on(a.a.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.on(a.a.FRAG_BUFFERED, this.onFragBuffered, this);
            }),
            (l._unregisterListeners = function () {
              var t = this.hls;
              t.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.a.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this),
                t.off(a.a.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this),
                t.off(a.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.off(a.a.ERROR, this.onError, this),
                t.off(a.a.BUFFER_RESET, this.onBufferReset, this),
                t.off(a.a.BUFFER_CREATED, this.onBufferCreated, this),
                t.off(a.a.BUFFER_FLUSHED, this.onBufferFlushed, this),
                t.off(a.a.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.off(a.a.FRAG_BUFFERED, this.onFragBuffered, this);
            }),
            (l.onInitPtsFound = function (t, e) {
              var r = e.frag,
                i = e.id,
                n = e.initPTS;
              if ('main' === i) {
                var a = r.cc;
                (this.initPTS[r.cc] = n),
                  this.log('InitPTS for cc: ' + a + ' found from main: ' + n),
                  (this.videoTrackCC = a),
                  this.state === Vt && this.tick();
              }
            }),
            (l.startLoad = function (t) {
              if (!this.levels) return (this.startPosition = t), void (this.state = xt);
              var e = this.lastCurrentTime;
              this.stopLoad(),
                this.setInterval(100),
                (this.fragLoadError = 0),
                e > 0 && -1 === t
                  ? (this.log('Override startPosition with lastCurrentTime @' + e.toFixed(3)),
                    (this.state = Pt))
                  : ((this.loadedmetadata = !1), (this.state = Ut)),
                (this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t),
                this.tick();
            }),
            (l.doTick = function () {
              switch (this.state) {
                case Pt:
                  this.doTickIdle();
                  break;
                case Ut:
                  var e,
                    r = this.levels,
                    i = this.trackId,
                    n = null == r || null === (e = r[i]) || void 0 === e ? void 0 : e.details;
                  if (n) {
                    if (this.waitForCdnTuneIn(n)) break;
                    this.state = Vt;
                  }
                  break;
                case Nt:
                  var a,
                    s = performance.now(),
                    l = this.retryDate;
                  (!l || s >= l || (null !== (a = this.media) && void 0 !== a && a.seeking)) &&
                    (this.log('RetryDate reached, switch back to IDLE state'), (this.state = Pt));
                  break;
                case Vt:
                  var u = this.waitingData;
                  if (u) {
                    var h = u.frag,
                      d = u.part,
                      c = u.cache,
                      f = u.complete;
                    if (void 0 !== this.initPTS[h.cc]) {
                      (this.waitingData = null), (this.waitingVideoCC = -1), (this.state = Ft);
                      var g = { frag: h, part: d, payload: c.flush(), networkDetails: null };
                      this._handleFragmentLoadProgress(g),
                        f && t.prototype._handleFragmentLoadComplete.call(this, g);
                    } else if (this.videoTrackCC !== this.waitingVideoCC)
                      o.b.log(
                        'Waiting fragment cc (' +
                          h.cc +
                          ') cancelled because video is at cc ' +
                          this.videoTrackCC,
                      ),
                        this.clearWaitingFragment();
                    else {
                      var v = this.getLoadPosition(),
                        p = lt.bufferInfo(this.mediaBuffer, v, this.config.maxBufferHole);
                      yt(p.end, this.config.maxFragLookUpTolerance, h) < 0 &&
                        (o.b.log(
                          'Waiting fragment cc (' +
                            h.cc +
                            ') @ ' +
                            h.start +
                            ' cancelled because another fragment at ' +
                            p.end +
                            ' is needed',
                        ),
                        this.clearWaitingFragment());
                    }
                  } else this.state = Pt;
              }
              this.onTickEnd();
            }),
            (l.clearWaitingFragment = function () {
              var t = this.waitingData;
              t &&
                (this.fragmentTracker.removeFragment(t.frag),
                (this.waitingData = null),
                (this.waitingVideoCC = -1),
                (this.state = Pt));
            }),
            (l.onTickEnd = function () {
              var t = this.media;
              if (t && t.readyState) {
                var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
                !this.loadedmetadata && e.length && (this.loadedmetadata = !0),
                  (this.lastCurrentTime = t.currentTime);
              }
            }),
            (l.doTickIdle = function () {
              var t,
                e,
                r = this.hls,
                i = this.levels,
                n = this.media,
                s = this.trackId,
                o = r.config;
              if (i && i[s] && (n || (!this.startFragRequested && o.startFragPrefetch))) {
                var l = i[s].details;
                if (!l || (l.live && this.levelLastLoaded !== s) || this.waitForCdnTuneIn(l))
                  this.state = Ut;
                else {
                  this.bufferFlushed &&
                    ((this.bufferFlushed = !1),
                    this.afterBufferFlushed(
                      this.mediaBuffer ? this.mediaBuffer : this.media,
                      u.a.AUDIO,
                      k.b.AUDIO,
                    ));
                  var h = this.getFwdBufferInfo(
                    this.mediaBuffer ? this.mediaBuffer : this.media,
                    k.b.AUDIO,
                  );
                  if (null !== h) {
                    var d = h.len,
                      c = this.getMaxBufferLength(),
                      f = this.audioSwitch;
                    if (!(d >= c) || f) {
                      if (!f && this._streamEnded(h, l))
                        return r.trigger(a.a.BUFFER_EOS, { type: 'audio' }), void (this.state = jt);
                      var g = l.fragments[0].start,
                        v = h.end;
                      if (f) {
                        var p = this.getLoadPosition();
                        (v = p),
                          l.PTSKnown &&
                            p < g &&
                            (h.end > g || h.nextStart) &&
                            (this.log(
                              'Alt audio track ahead of main track, seek to start of alt audio track',
                            ),
                            (n.currentTime = g + 0.05));
                      }
                      var m = this.getNextFragment(v, l);
                      m
                        ? 'identity' !==
                            (null === (t = m.decryptdata) || void 0 === t ? void 0 : t.keyFormat) ||
                          (null !== (e = m.decryptdata) && void 0 !== e && e.key)
                          ? this.loadFragment(m, l, v)
                          : this.loadKey(m, l)
                        : (this.bufferFlushed = !0);
                    }
                  }
                }
              }
            }),
            (l.getMaxBufferLength = function () {
              var e = t.prototype.getMaxBufferLength.call(this),
                r = this.getFwdBufferInfo(
                  this.videoBuffer ? this.videoBuffer : this.media,
                  k.b.MAIN,
                );
              return null === r ? e : Math.max(e, r.len);
            }),
            (l.onMediaDetaching = function () {
              (this.videoBuffer = null), t.prototype.onMediaDetaching.call(this);
            }),
            (l.onAudioTracksUpdated = function (t, e) {
              var r = e.audioTracks;
              this.resetTransmuxer(),
                (this.levels = r.map(function (t) {
                  return new j(t);
                }));
            }),
            (l.onAudioTrackSwitching = function (t, e) {
              var r = !!e.url;
              this.trackId = e.id;
              var i = this.fragCurrent;
              null != i && i.loader && i.loader.abort(),
                (this.fragCurrent = null),
                this.clearWaitingFragment(),
                r ? this.setInterval(100) : this.resetTransmuxer(),
                r ? ((this.audioSwitch = !0), (this.state = Pt)) : (this.state = xt),
                this.tick();
            }),
            (l.onManifestLoading = function () {
              (this.mainDetails = null),
                this.fragmentTracker.removeAllFragments(),
                (this.startPosition = this.lastCurrentTime = 0),
                (this.bufferFlushed = !1);
            }),
            (l.onLevelLoaded = function (t, e) {
              this.mainDetails = e.details;
            }),
            (l.onAudioTrackLoaded = function (t, e) {
              var r,
                i = this.levels,
                n = e.details,
                a = e.id;
              if (i) {
                this.log(
                  'Track ' +
                    a +
                    ' loaded [' +
                    n.startSN +
                    ',' +
                    n.endSN +
                    '],duration:' +
                    n.totalduration,
                );
                var s = i[a],
                  o = 0;
                if (n.live || (null !== (r = s.details) && void 0 !== r && r.live)) {
                  var l = this.mainDetails;
                  if ((n.fragments[0] || (n.deltaUpdateFailed = !0), n.deltaUpdateFailed || !l))
                    return;
                  !s.details && n.hasProgramDateTime && l.hasProgramDateTime
                    ? (gt(n, l), (o = n.fragments[0].start))
                    : (o = this.alignPlaylists(n, s.details));
                }
                (s.details = n),
                  (this.levelLastLoaded = a),
                  this.startFragRequested ||
                    (!this.mainDetails && n.live) ||
                    this.setStartPosition(s.details, o),
                  this.state !== Ut || this.waitForCdnTuneIn(n) || (this.state = Pt),
                  this.tick();
              } else this.warn('Audio tracks were reset while loading level ' + a);
            }),
            (l._handleFragmentLoadProgress = function (t) {
              var e,
                r = t.frag,
                i = t.part,
                n = t.payload,
                a = this.config,
                s = this.trackId,
                l = this.levels;
              if (l) {
                var u = l[s],
                  h = u.details,
                  d = a.defaultAudioCodec || u.audioCodec || 'mp4a.40.2',
                  c = this.transmuxer;
                c ||
                  (c = this.transmuxer =
                    new Zt(
                      this.hls,
                      k.b.AUDIO,
                      this._handleTransmuxComplete.bind(this),
                      this._handleTransmuxerFlush.bind(this),
                    ));
                var f = this.initPTS[r.cc],
                  g = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data;
                if (void 0 !== f) {
                  var v = i ? i.index : -1,
                    p = -1 !== v,
                    m = new ut(r.level, r.sn, r.stats.chunkCount, n.byteLength, v, p);
                  c.push(n, g, d, '', r, i, h.totalduration, !1, m, f);
                } else {
                  o.b.log(
                    'Unknown video PTS for cc ' +
                      r.cc +
                      ', waiting for video PTS before demuxing audio frag ' +
                      r.sn +
                      ' of [' +
                      h.startSN +
                      ' ,' +
                      h.endSN +
                      '],track ' +
                      s,
                  ),
                    (this.waitingData = this.waitingData || {
                      frag: r,
                      part: i,
                      cache: new le.a(),
                      complete: !1,
                    }).cache.push(new Uint8Array(n)),
                    (this.waitingVideoCC = this.videoTrackCC),
                    (this.state = Vt);
                }
              } else
                this.warn(
                  'Audio tracks were reset while fragment load was in progress. Fragment ' +
                    r.sn +
                    ' of level ' +
                    r.level +
                    ' will not be buffered',
                );
            }),
            (l._handleFragmentLoadComplete = function (e) {
              this.waitingData
                ? (this.waitingData.complete = !0)
                : t.prototype._handleFragmentLoadComplete.call(this, e);
            }),
            (l.onBufferReset = function () {
              (this.mediaBuffer = this.videoBuffer = null), (this.loadedmetadata = !1);
            }),
            (l.onBufferCreated = function (t, e) {
              var r = e.tracks.audio;
              r && (this.mediaBuffer = r.buffer),
                e.tracks.video && (this.videoBuffer = e.tracks.video.buffer);
            }),
            (l.onFragBuffered = function (t, e) {
              var r = e.frag,
                i = e.part;
              r.type === k.b.AUDIO &&
                (this.fragContextChanged(r)
                  ? this.warn(
                      'Fragment ' +
                        r.sn +
                        (i ? ' p: ' + i.index : '') +
                        ' of level ' +
                        r.level +
                        ' finished buffering, but was aborted. state: ' +
                        this.state +
                        ', audioSwitch: ' +
                        this.audioSwitch,
                    )
                  : ('initSegment' !== r.sn &&
                      ((this.fragPrevious = r),
                      this.audioSwitch &&
                        ((this.audioSwitch = !1),
                        this.hls.trigger(a.a.AUDIO_TRACK_SWITCHED, { id: this.trackId }))),
                    this.fragBufferedComplete(r, i)));
            }),
            (l.onError = function (e, r) {
              switch (r.details) {
                case s.a.FRAG_LOAD_ERROR:
                case s.a.FRAG_LOAD_TIMEOUT:
                case s.a.KEY_LOAD_ERROR:
                case s.a.KEY_LOAD_TIMEOUT:
                  this.onFragmentOrKeyLoadError(k.b.AUDIO, r);
                  break;
                case s.a.AUDIO_TRACK_LOAD_ERROR:
                case s.a.AUDIO_TRACK_LOAD_TIMEOUT:
                  this.state !== Ht &&
                    this.state !== xt &&
                    ((this.state = r.fatal ? Ht : Pt),
                    this.warn(
                      r.details + ' while loading frag, switching to ' + this.state + ' state',
                    ));
                  break;
                case s.a.BUFFER_FULL_ERROR:
                  if ('audio' === r.parent && (this.state === Bt || this.state === Gt)) {
                    var i = !0,
                      n = this.getFwdBufferInfo(this.mediaBuffer, k.b.AUDIO);
                    n && n.len > 0.5 && (i = !this.reduceMaxBufferLength(n.len)),
                      i &&
                        (this.warn(
                          'Buffer full error also media.currentTime is not buffered, flush audio buffer',
                        ),
                        (this.fragCurrent = null),
                        t.prototype.flushMainBuffer.call(
                          this,
                          0,
                          Number.POSITIVE_INFINITY,
                          'audio',
                        )),
                      this.resetLoadingState();
                  }
              }
            }),
            (l.onBufferFlushed = function (t, e) {
              e.type === u.a.AUDIO && (this.bufferFlushed = !0);
            }),
            (l._handleTransmuxComplete = function (t) {
              var e,
                r = 'audio',
                i = this.hls,
                n = t.remuxResult,
                s = t.chunkMeta,
                o = this.getCurrentContext(s);
              if (!o)
                return (
                  this.warn(
                    'The loading context changed while buffering fragment ' +
                      s.sn +
                      ' of level ' +
                      s.level +
                      '. This chunk will not be buffered.',
                  ),
                  void this.resetLiveStartWhenNotLoaded(s.level)
                );
              var l = o.frag,
                h = o.part,
                d = n.audio,
                c = n.text,
                f = n.id3,
                g = n.initSegment;
              if (!this.fragContextChanged(l)) {
                if (
                  ((this.state = Bt),
                  this.audioSwitch && d && this.completeAudioSwitch(),
                  null != g &&
                    g.tracks &&
                    (this._bufferInitSegment(g.tracks, l, s),
                    i.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, { frag: l, id: r, tracks: g.tracks })),
                  d)
                ) {
                  var v = d.startPTS,
                    p = d.endPTS,
                    m = d.startDTS,
                    y = d.endDTS;
                  h &&
                    (h.elementaryStreams[u.a.AUDIO] = {
                      startPTS: v,
                      endPTS: p,
                      startDTS: m,
                      endDTS: y,
                    }),
                    l.setElementaryStreamInfo(u.a.AUDIO, v, p, m, y),
                    this.bufferFragmentData(d, l, h, s);
                }
                if (null != f && null !== (e = f.samples) && void 0 !== e && e.length) {
                  var T = ue({ frag: l, id: r }, f);
                  i.trigger(a.a.FRAG_PARSING_METADATA, T);
                }
                if (c) {
                  var b = ue({ frag: l, id: r }, c);
                  i.trigger(a.a.FRAG_PARSING_USERDATA, b);
                }
              }
            }),
            (l._bufferInitSegment = function (t, e, r) {
              if (this.state === Bt) {
                t.video && delete t.video;
                var i = t.audio;
                if (i) {
                  (i.levelCodec = i.codec),
                    (i.id = 'audio'),
                    this.log(
                      'Init audio buffer, container:' +
                        i.container +
                        ', codecs[parsed]=[' +
                        i.codec +
                        ']',
                    ),
                    this.hls.trigger(a.a.BUFFER_CODECS, t);
                  var n = i.initSegment;
                  if (null != n && n.byteLength) {
                    var s = {
                      type: 'audio',
                      frag: e,
                      part: null,
                      chunkMeta: r,
                      parent: e.type,
                      data: n,
                    };
                    this.hls.trigger(a.a.BUFFER_APPENDING, s);
                  }
                  this.tick();
                }
              }
            }),
            (l.loadFragment = function (e, r, i) {
              var a = this.fragmentTracker.getState(e);
              (this.fragCurrent = e),
                (this.audioSwitch || a === tt.NOT_LOADED || a === tt.PARTIAL) &&
                  ('initSegment' === e.sn
                    ? this._loadInitSegment(e)
                    : r.live && !Object(n.a)(this.initPTS[e.cc])
                    ? (this.log(
                        'Waiting for video PTS in continuity counter ' +
                          e.cc +
                          ' of live stream before loading audio fragment ' +
                          e.sn +
                          ' of level ' +
                          this.trackId,
                      ),
                      (this.state = Vt))
                    : ((this.startFragRequested = !0),
                      t.prototype.loadFragment.call(this, e, r, i)));
            }),
            (l.completeAudioSwitch = function () {
              var e = this.hls,
                r = this.media,
                i = this.trackId;
              r &&
                (this.log('Switching audio track : flushing all audio'),
                t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, 'audio')),
                (this.audioSwitch = !1),
                e.trigger(a.a.AUDIO_TRACK_SWITCHED, { id: i });
            }),
            i
          );
        })(Yt);
        function ce(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function fe(t, e) {
          return (fe =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var ge = (function (t) {
          var e, r;
          function i(e) {
            var r;
            return (
              ((r = t.call(this, e, '[audio-track-controller]') || this).tracks = []),
              (r.groupId = null),
              (r.tracksInGroup = []),
              (r.trackId = -1),
              (r.trackName = ''),
              (r.selectDefaultTrack = !0),
              r.registerListeners(),
              r
            );
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            fe(e, r);
          var n,
            o,
            l,
            u = i.prototype;
          return (
            (u.registerListeners = function () {
              var t = this.hls;
              t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                t.on(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                t.on(a.a.LEVEL_SWITCHING, this.onLevelSwitching, this),
                t.on(a.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.on(a.a.ERROR, this.onError, this);
            }),
            (u.unregisterListeners = function () {
              var t = this.hls;
              t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                t.off(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                t.off(a.a.LEVEL_SWITCHING, this.onLevelSwitching, this),
                t.off(a.a.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this),
                t.off(a.a.ERROR, this.onError, this);
            }),
            (u.destroy = function () {
              this.unregisterListeners(),
                (this.tracks.length = 0),
                (this.tracksInGroup.length = 0),
                t.prototype.destroy.call(this);
            }),
            (u.onManifestLoading = function () {
              (this.tracks = []),
                (this.groupId = null),
                (this.tracksInGroup = []),
                (this.trackId = -1),
                (this.trackName = ''),
                (this.selectDefaultTrack = !0);
            }),
            (u.onManifestParsed = function (t, e) {
              this.tracks = e.audioTracks || [];
            }),
            (u.onAudioTrackLoaded = function (t, e) {
              var r = e.id,
                i = e.details,
                n = this.tracksInGroup[r];
              if (n) {
                var a = n.details;
                (n.details = e.details),
                  this.log('audioTrack ' + r + ' loaded [' + i.startSN + '-' + i.endSN + ']'),
                  r === this.trackId && ((this.retryCount = 0), this.playlistLoaded(r, e, a));
              } else this.warn('Invalid audio track id ' + r);
            }),
            (u.onLevelLoading = function (t, e) {
              this.switchLevel(e.level);
            }),
            (u.onLevelSwitching = function (t, e) {
              this.switchLevel(e.level);
            }),
            (u.switchLevel = function (t) {
              var e = this.hls.levels[t];
              if (null != e && e.audioGroupIds) {
                var r = e.audioGroupIds[e.urlId];
                if (this.groupId !== r) {
                  this.groupId = r;
                  var i = this.tracks.filter(function (t) {
                    return !r || t.groupId === r;
                  });
                  this.selectDefaultTrack &&
                    !i.some(function (t) {
                      return t.default;
                    }) &&
                    (this.selectDefaultTrack = !1),
                    (this.tracksInGroup = i);
                  var n = { audioTracks: i };
                  this.log(
                    'Updating audio tracks, ' +
                      i.length +
                      ' track(s) found in "' +
                      r +
                      '" group-id',
                  ),
                    this.hls.trigger(a.a.AUDIO_TRACKS_UPDATED, n),
                    this.selectInitialTrack();
                }
              }
            }),
            (u.onError = function (e, r) {
              t.prototype.onError.call(this, e, r),
                !r.fatal &&
                  r.context &&
                  r.context.type === k.a.AUDIO_TRACK &&
                  r.context.id === this.trackId &&
                  r.context.groupId === this.groupId &&
                  this.retryLoadingOrFail(r);
            }),
            (u.setAudioTrack = function (t) {
              var e = this.tracksInGroup;
              if (t < 0 || t >= e.length) this.warn('Invalid id passed to audio-track controller');
              else {
                this.clearTimer();
                var r = e[this.trackId];
                this.log('Now switching to audio-track index ' + t);
                var i = e[t],
                  n = i.id,
                  s = i.groupId,
                  o = void 0 === s ? '' : s,
                  l = i.name,
                  u = i.type,
                  h = i.url;
                if (
                  ((this.trackId = t),
                  (this.trackName = l),
                  (this.selectDefaultTrack = !1),
                  this.hls.trigger(a.a.AUDIO_TRACK_SWITCHING, {
                    id: n,
                    groupId: o,
                    name: l,
                    type: u,
                    url: h,
                  }),
                  !i.details || i.details.live)
                ) {
                  var d = this.switchParams(i.url, null == r ? void 0 : r.details);
                  this.loadPlaylist(d);
                }
              }
            }),
            (u.selectInitialTrack = function () {
              this.tracksInGroup;
              var t = this.trackName,
                e = this.findTrackId(t) || this.findTrackId();
              -1 !== e
                ? this.setAudioTrack(e)
                : (this.warn('No track found for running audio group-ID: ' + this.groupId),
                  this.hls.trigger(a.a.ERROR, {
                    type: s.b.MEDIA_ERROR,
                    details: s.a.AUDIO_TRACK_LOAD_ERROR,
                    fatal: !0,
                  }));
            }),
            (u.findTrackId = function (t) {
              for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                var i = e[r];
                if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id;
              }
              return -1;
            }),
            (u.loadPlaylist = function (t) {
              var e = this.tracksInGroup[this.trackId];
              if (this.shouldLoadTrack(e)) {
                var r = e.id,
                  i = e.groupId,
                  n = e.url;
                if (t)
                  try {
                    n = t.addDirectives(n);
                  } catch (t) {
                    this.warn('Could not construct new URL with HLS Delivery Directives: ' + t);
                  }
                this.log('loading audio-track playlist for id: ' + r),
                  this.clearTimer(),
                  this.hls.trigger(a.a.AUDIO_TRACK_LOADING, {
                    url: n,
                    id: r,
                    groupId: i,
                    deliveryDirectives: t || null,
                  });
              }
            }),
            (n = i),
            (o = [
              {
                key: 'audioTracks',
                get: function () {
                  return this.tracksInGroup;
                },
              },
              {
                key: 'audioTrack',
                get: function () {
                  return this.trackId;
                },
                set: function (t) {
                  (this.selectDefaultTrack = !1), this.setAudioTrack(t);
                },
              },
            ]) && ce(n.prototype, o),
            l && ce(n, l),
            i
          );
        })(Q);
        function ve(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function pe(t, e) {
          return (pe =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        var me = (function (t) {
          var e, r;
          function i(e, r) {
            var i;
            return (
              ((i = t.call(this, e, r, '[subtitle-stream-controller]') || this).levels = []),
              (i.currentTrackId = -1),
              (i.tracksBuffered = []),
              (i.mainDetails = null),
              i._registerListeners(),
              i
            );
          }
          (r = t),
            ((e = i).prototype = Object.create(r.prototype)),
            (e.prototype.constructor = e),
            pe(e, r);
          var n,
            s,
            l,
            u = i.prototype;
          return (
            (u.onHandlerDestroying = function () {
              this._unregisterListeners(), (this.mainDetails = null);
            }),
            (u._registerListeners = function () {
              var t = this.hls;
              t.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.on(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                t.on(a.a.ERROR, this.onError, this),
                t.on(a.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.on(a.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                t.on(a.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                t.on(a.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                t.on(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }),
            (u._unregisterListeners = function () {
              var t = this.hls;
              t.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.a.LEVEL_LOADED, this.onLevelLoaded, this),
                t.off(a.a.ERROR, this.onError, this),
                t.off(a.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.off(a.a.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this),
                t.off(a.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                t.off(a.a.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this),
                t.off(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this);
            }),
            (u.startLoad = function () {
              this.stopLoad(), (this.state = Pt), this.setInterval(500), this.tick();
            }),
            (u.onManifestLoading = function () {
              (this.mainDetails = null), this.fragmentTracker.removeAllFragments();
            }),
            (u.onLevelLoaded = function (t, e) {
              this.mainDetails = e.details;
            }),
            (u.onSubtitleFragProcessed = function (t, e) {
              var r = e.frag,
                i = e.success;
              if (((this.fragPrevious = r), (this.state = Pt), i)) {
                var n = this.tracksBuffered[this.currentTrackId];
                if (n) {
                  for (var a, s = r.start, o = 0; o < n.length; o++)
                    if (s >= n[o].start && s <= n[o].end) {
                      a = n[o];
                      break;
                    }
                  var l = r.start + r.duration;
                  a ? (a.end = l) : ((a = { start: s, end: l }), n.push(a)),
                    this.fragmentTracker.fragBuffered(r);
                }
              }
            }),
            (u.onBufferFlushing = function (t, e) {
              var r = e.startOffset,
                i = e.endOffset;
              if (0 === r && i !== Number.POSITIVE_INFINITY) {
                var n = this.currentTrackId,
                  a = this.levels;
                if (!a.length || !a[n] || !a[n].details) return;
                var s = i - a[n].details.targetduration;
                if (s <= 0) return;
                (e.endOffsetSubtitles = Math.max(0, s)),
                  this.tracksBuffered.forEach(function (t) {
                    for (var e = 0; e < t.length; )
                      if (t[e].end <= s) t.shift();
                      else {
                        if (!(t[e].start < s)) break;
                        (t[e].start = s), e++;
                      }
                  }),
                  this.fragmentTracker.removeFragmentsInRange(r, s, k.b.SUBTITLE);
              }
            }),
            (u.onError = function (t, e) {
              var r,
                i = e.frag;
              i &&
                i.type === k.b.SUBTITLE &&
                (null !== (r = this.fragCurrent) &&
                  void 0 !== r &&
                  r.loader &&
                  this.fragCurrent.loader.abort(),
                (this.state = Pt));
            }),
            (u.onSubtitleTracksUpdated = function (t, e) {
              var r = this,
                i = e.subtitleTracks;
              (this.tracksBuffered = []),
                (this.levels = i.map(function (t) {
                  return new j(t);
                })),
                this.fragmentTracker.removeAllFragments(),
                (this.fragPrevious = null),
                this.levels.forEach(function (t) {
                  r.tracksBuffered[t.id] = [];
                }),
                (this.mediaBuffer = null);
            }),
            (u.onSubtitleTrackSwitch = function (t, e) {
              if (
                ((this.currentTrackId = e.id), this.levels.length && -1 !== this.currentTrackId)
              ) {
                var r = this.levels[this.currentTrackId];
                null != r && r.details
                  ? ((this.mediaBuffer = this.mediaBufferTimeRanges), this.setInterval(500))
                  : (this.mediaBuffer = null);
              } else this.clearInterval();
            }),
            (u.onSubtitleTrackLoaded = function (t, e) {
              var r,
                i = e.details,
                n = e.id,
                a = this.currentTrackId,
                s = this.levels;
              if (s.length) {
                var o = s[a];
                if (!(n >= s.length || n !== a) && o) {
                  if (
                    ((this.mediaBuffer = this.mediaBufferTimeRanges),
                    i.live || (null !== (r = o.details) && void 0 !== r && r.live))
                  ) {
                    var l = this.mainDetails;
                    if (i.deltaUpdateFailed || !l) return;
                    var u = l.fragments[0];
                    if (o.details) 0 === this.alignPlaylists(i, o.details) && u && z(i, u.start);
                    else
                      i.hasProgramDateTime && l.hasProgramDateTime ? gt(i, l) : u && z(i, u.start);
                  }
                  if (
                    ((o.details = i),
                    (this.levelLastLoaded = n),
                    this.tick(),
                    i.live && !this.fragCurrent && this.media && this.state === Pt)
                  )
                    mt(null, i.fragments, this.media.currentTime, 0) ||
                      (this.warn('Subtitle playlist not aligned with playback'),
                      (o.details = void 0));
                }
              }
            }),
            (u._handleFragmentLoadComplete = function (t) {
              var e = t.frag,
                r = t.payload,
                i = e.decryptdata,
                n = this.hls;
              if (
                !this.fragContextChanged(e) &&
                r &&
                r.byteLength > 0 &&
                i &&
                i.key &&
                i.iv &&
                'AES-128' === i.method
              ) {
                var s = performance.now();
                this.decrypter
                  .webCryptoDecrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer)
                  .then(function (t) {
                    var r = performance.now();
                    n.trigger(a.a.FRAG_DECRYPTED, {
                      frag: e,
                      payload: t,
                      stats: { tstart: s, tdecrypt: r },
                    });
                  });
              }
            }),
            (u.doTick = function () {
              if (this.media) {
                if (this.state === Pt) {
                  var t,
                    e = this.currentTrackId,
                    r = this.levels;
                  if (!r.length || !r[e] || !r[e].details) return;
                  var i = r[e].details,
                    n = i.targetduration,
                    s = this.config,
                    l = this.media,
                    u = lt.bufferedInfo(
                      this.mediaBufferTimeRanges,
                      l.currentTime - n,
                      s.maxBufferHole,
                    ),
                    h = u.end;
                  if (u.len > this.getMaxBufferLength() + n) return;
                  var d,
                    c = i.fragments,
                    f = c.length,
                    g = i.edge,
                    v = this.fragPrevious;
                  if (h < g) {
                    var p = s.maxFragLookUpTolerance;
                    v && i.hasProgramDateTime && (d = pt(c, v.endProgramDateTime, p)),
                      d || (!(d = mt(v, c, h, p)) && v && v.start < c[0].start && (d = c[0]));
                  } else d = c[f - 1];
                  null !== (t = d) && void 0 !== t && t.encrypted
                    ? (o.b.log('Loading key for ' + d.sn),
                      (this.state = Mt),
                      this.hls.trigger(a.a.KEY_LOADING, { frag: d }))
                    : d &&
                      this.fragmentTracker.getState(d) === tt.NOT_LOADED &&
                      this.loadFragment(d, i, h);
                }
              } else this.state = Pt;
            }),
            (u.loadFragment = function (e, r, i) {
              (this.fragCurrent = e), t.prototype.loadFragment.call(this, e, r, i);
            }),
            (n = i),
            (s = [
              {
                key: 'mediaBufferTimeRanges',
                get: function () {
                  return this.tracksBuffered[this.currentTrackId] || [];
                },
              },
            ]) && ve(n.prototype, s),
            l && ve(n, l),
            i
          );
        })(Yt);
        function ye(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function Te(t, e) {
          return (Te =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function be(t) {
          for (var e = [], r = 0; r < t.length; r++) {
            var i = t[r];
            'subtitles' === i.kind && i.label && e.push(t[r]);
          }
          return e;
        }
        var Ee,
          Se = (function (t) {
            var e, r;
            function i(e) {
              var r;
              return (
                ((r = t.call(this, e, '[subtitle-track-controller]') || this).media = null),
                (r.tracks = []),
                (r.groupId = null),
                (r.tracksInGroup = []),
                (r.trackId = -1),
                (r.selectDefaultTrack = !0),
                (r.queuedDefaultTrack = -1),
                (r.trackChangeListener = function () {
                  return r.onTextTracksChanged();
                }),
                (r.asyncPollTrackChange = function () {
                  return r.pollTrackChange(0);
                }),
                (r.useTextTrackPolling = !1),
                (r.subtitlePollingInterval = -1),
                (r.subtitleDisplay = !0),
                r.registerListeners(),
                r
              );
            }
            (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              Te(e, r);
            var n,
              s,
              o,
              l = i.prototype;
            return (
              (l.destroy = function () {
                this.unregisterListeners(),
                  (this.tracks.length = 0),
                  (this.tracksInGroup.length = 0),
                  (this.trackChangeListener = this.asyncPollTrackChange = null),
                  t.prototype.destroy.call(this);
              }),
              (l.registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.on(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.on(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                  t.on(a.a.LEVEL_SWITCHING, this.onLevelSwitching, this),
                  t.on(a.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                  t.on(a.a.ERROR, this.onError, this);
              }),
              (l.unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                  t.off(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.off(a.a.LEVEL_LOADING, this.onLevelLoading, this),
                  t.off(a.a.LEVEL_SWITCHING, this.onLevelSwitching, this),
                  t.off(a.a.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this),
                  t.off(a.a.ERROR, this.onError, this);
              }),
              (l.onMediaAttached = function (t, e) {
                (this.media = e.media),
                  this.media &&
                    (this.queuedDefaultTrack > -1 &&
                      ((this.subtitleTrack = this.queuedDefaultTrack),
                      (this.queuedDefaultTrack = -1)),
                    (this.useTextTrackPolling = !(
                      this.media.textTracks && 'onchange' in this.media.textTracks
                    )),
                    this.useTextTrackPolling
                      ? this.pollTrackChange(500)
                      : this.media.textTracks.addEventListener(
                          'change',
                          this.asyncPollTrackChange,
                        ));
              }),
              (l.pollTrackChange = function (t) {
                self.clearInterval(this.subtitlePollingInterval),
                  (this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t));
              }),
              (l.onMediaDetaching = function () {
                this.media &&
                  (self.clearInterval(this.subtitlePollingInterval),
                  this.useTextTrackPolling ||
                    this.media.textTracks.removeEventListener('change', this.asyncPollTrackChange),
                  this.trackId > -1 && (this.queuedDefaultTrack = this.trackId),
                  be(this.media.textTracks).forEach(function (t) {
                    x(t);
                  }),
                  (this.subtitleTrack = -1),
                  (this.media = null));
              }),
              (l.onManifestLoading = function () {
                (this.tracks = []),
                  (this.groupId = null),
                  (this.tracksInGroup = []),
                  (this.trackId = -1),
                  (this.selectDefaultTrack = !0);
              }),
              (l.onManifestParsed = function (t, e) {
                this.tracks = e.subtitleTracks;
              }),
              (l.onSubtitleTrackLoaded = function (t, e) {
                var r = e.id,
                  i = e.details,
                  n = this.trackId,
                  a = this.tracksInGroup[n];
                if (a) {
                  var s = a.details;
                  (a.details = e.details),
                    this.log('subtitle track ' + r + ' loaded [' + i.startSN + '-' + i.endSN + ']'),
                    r === this.trackId && ((this.retryCount = 0), this.playlistLoaded(r, e, s));
                } else this.warn('Invalid subtitle track id ' + r);
              }),
              (l.onLevelLoading = function (t, e) {
                this.switchLevel(e.level);
              }),
              (l.onLevelSwitching = function (t, e) {
                this.switchLevel(e.level);
              }),
              (l.switchLevel = function (t) {
                var e = this.hls.levels[t];
                if (null != e && e.textGroupIds) {
                  var r = e.textGroupIds[e.urlId];
                  if (this.groupId !== r) {
                    var i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                      n = this.tracks.filter(function (t) {
                        return !r || t.groupId === r;
                      });
                    this.tracksInGroup = n;
                    var s = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
                    this.groupId = r;
                    var o = { subtitleTracks: n };
                    this.log(
                      'Updating subtitle tracks, ' +
                        n.length +
                        ' track(s) found in "' +
                        r +
                        '" group-id',
                    ),
                      this.hls.trigger(a.a.SUBTITLE_TRACKS_UPDATED, o),
                      -1 !== s && this.setSubtitleTrack(s, i);
                  }
                }
              }),
              (l.findTrackId = function (t) {
                for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                  var i = e[r];
                  if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id;
                }
                return -1;
              }),
              (l.onError = function (e, r) {
                t.prototype.onError.call(this, e, r),
                  !r.fatal &&
                    r.context &&
                    r.context.type === k.a.SUBTITLE_TRACK &&
                    r.context.id === this.trackId &&
                    r.context.groupId === this.groupId &&
                    this.retryLoadingOrFail(r);
              }),
              (l.loadPlaylist = function (t) {
                var e = this.tracksInGroup[this.trackId];
                if (this.shouldLoadTrack(e)) {
                  var r = e.id,
                    i = e.groupId,
                    n = e.url;
                  if (t)
                    try {
                      n = t.addDirectives(n);
                    } catch (t) {
                      this.warn('Could not construct new URL with HLS Delivery Directives: ' + t);
                    }
                  this.log('Loading subtitle playlist for id ' + r),
                    this.hls.trigger(a.a.SUBTITLE_TRACK_LOADING, {
                      url: n,
                      id: r,
                      groupId: i,
                      deliveryDirectives: t || null,
                    });
                }
              }),
              (l.toggleTrackModes = function (t) {
                var e = this,
                  r = this.media,
                  i = this.subtitleDisplay,
                  n = this.trackId;
                if (r) {
                  var a = be(r.textTracks),
                    s = a.filter(function (t) {
                      return t.groupId === e.groupId;
                    });
                  if (-1 === t)
                    [].slice.call(a).forEach(function (t) {
                      t.mode = 'disabled';
                    });
                  else {
                    var o = s[n];
                    o && (o.mode = 'disabled');
                  }
                  var l = s[t];
                  l && (l.mode = i ? 'showing' : 'hidden');
                }
              }),
              (l.setSubtitleTrack = function (t, e) {
                var r,
                  i = this.tracksInGroup;
                if (this.media) {
                  if (
                    (this.trackId !== t && this.toggleTrackModes(t),
                    !(
                      (this.trackId === t &&
                        (-1 === t || (null !== (r = i[t]) && void 0 !== r && r.details))) ||
                      t < -1 ||
                      t >= i.length
                    ))
                  ) {
                    this.clearTimer();
                    var n = i[t];
                    if ((this.log('Switching to subtitle track ' + t), (this.trackId = t), n)) {
                      var s = n.id,
                        o = n.groupId,
                        l = void 0 === o ? '' : o,
                        u = n.name,
                        h = n.type,
                        d = n.url;
                      this.hls.trigger(a.a.SUBTITLE_TRACK_SWITCH, {
                        id: s,
                        groupId: l,
                        name: u,
                        type: h,
                        url: d,
                      });
                      var c = this.switchParams(n.url, null == e ? void 0 : e.details);
                      this.loadPlaylist(c);
                    } else this.hls.trigger(a.a.SUBTITLE_TRACK_SWITCH, { id: t });
                  }
                } else this.queuedDefaultTrack = t;
              }),
              (l.onTextTracksChanged = function () {
                if (
                  (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval),
                  this.media && this.hls.config.renderTextTracksNatively)
                ) {
                  for (var t = -1, e = be(this.media.textTracks), r = 0; r < e.length; r++)
                    if ('hidden' === e[r].mode) t = r;
                    else if ('showing' === e[r].mode) {
                      t = r;
                      break;
                    }
                  this.subtitleTrack !== t && (this.subtitleTrack = t);
                }
              }),
              (n = i),
              (s = [
                {
                  key: 'subtitleTracks',
                  get: function () {
                    return this.tracksInGroup;
                  },
                },
                {
                  key: 'subtitleTrack',
                  get: function () {
                    return this.trackId;
                  },
                  set: function (t) {
                    this.selectDefaultTrack = !1;
                    var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                    this.setSubtitleTrack(t, e);
                  },
                },
              ]) && ye(n.prototype, s),
              o && ye(n, o),
              i
            );
          })(Q),
          Le = (function () {
            function t(t) {
              (this.buffers = void 0),
                (this.queues = { video: [], audio: [], audiovideo: [] }),
                (this.buffers = t);
            }
            var e = t.prototype;
            return (
              (e.append = function (t, e) {
                var r = this.queues[e];
                r.push(t), 1 === r.length && this.buffers[e] && this.executeNext(e);
              }),
              (e.insertAbort = function (t, e) {
                this.queues[e].unshift(t), this.executeNext(e);
              }),
              (e.appendBlocker = function (t) {
                var e,
                  r = new Promise(function (t) {
                    e = t;
                  }),
                  i = {
                    execute: e,
                    onStart: function () {},
                    onComplete: function () {},
                    onError: function () {},
                  };
                return this.append(i, t), r;
              }),
              (e.executeNext = function (t) {
                var e = this.buffers,
                  r = this.queues,
                  i = e[t],
                  n = r[t];
                if (n.length) {
                  var a = n[0];
                  try {
                    a.execute();
                  } catch (e) {
                    o.b.warn(
                      '[buffer-operation-queue]: Unhandled exception executing the current operation',
                    ),
                      a.onError(e),
                      (i && i.updating) || (n.shift(), this.executeNext(t));
                  }
                }
              }),
              (e.shiftAndExecuteNext = function (t) {
                this.queues[t].shift(), this.executeNext(t);
              }),
              (e.current = function (t) {
                return this.queues[t][0];
              }),
              t
            );
          })(),
          Ae = qt(),
          Re = /([ha]vc.)(?:\.[^.,]+)+/,
          De = (function () {
            function t(t) {
              var e = this;
              (this.details = null),
                (this._objectUrl = null),
                (this.operationQueue = void 0),
                (this.listeners = void 0),
                (this.hls = void 0),
                (this.bufferCodecEventsExpected = 0),
                (this._bufferCodecEventsTotal = 0),
                (this.media = null),
                (this.mediaSource = null),
                (this.appendError = 0),
                (this.tracks = {}),
                (this.pendingTracks = {}),
                (this.sourceBuffer = void 0),
                (this._onMediaSourceOpen = function () {
                  var t = e.hls,
                    r = e.media,
                    i = e.mediaSource;
                  o.b.log('[buffer-controller]: Media source opened'),
                    r &&
                      (e.updateMediaElementDuration(), t.trigger(a.a.MEDIA_ATTACHED, { media: r })),
                    i && i.removeEventListener('sourceopen', e._onMediaSourceOpen),
                    e.checkPendingTracks();
                }),
                (this._onMediaSourceClose = function () {
                  o.b.log('[buffer-controller]: Media source closed');
                }),
                (this._onMediaSourceEnded = function () {
                  o.b.log('[buffer-controller]: Media source ended');
                }),
                (this.hls = t),
                this._initSourceBuffer(),
                this.registerListeners();
            }
            var e = t.prototype;
            return (
              (e.hasSourceTypes = function () {
                return (
                  this.getSourceBufferTypes().length > 0 ||
                  Object.keys(this.pendingTracks).length > 0
                );
              }),
              (e.destroy = function () {
                this.unregisterListeners(), (this.details = null);
              }),
              (e.registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.on(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.on(a.a.BUFFER_RESET, this.onBufferReset, this),
                  t.on(a.a.BUFFER_APPENDING, this.onBufferAppending, this),
                  t.on(a.a.BUFFER_CODECS, this.onBufferCodecs, this),
                  t.on(a.a.BUFFER_EOS, this.onBufferEos, this),
                  t.on(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this),
                  t.on(a.a.LEVEL_UPDATED, this.onLevelUpdated, this),
                  t.on(a.a.FRAG_PARSED, this.onFragParsed, this),
                  t.on(a.a.FRAG_CHANGED, this.onFragChanged, this);
              }),
              (e.unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                  t.off(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.off(a.a.BUFFER_RESET, this.onBufferReset, this),
                  t.off(a.a.BUFFER_APPENDING, this.onBufferAppending, this),
                  t.off(a.a.BUFFER_CODECS, this.onBufferCodecs, this),
                  t.off(a.a.BUFFER_EOS, this.onBufferEos, this),
                  t.off(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this),
                  t.off(a.a.LEVEL_UPDATED, this.onLevelUpdated, this),
                  t.off(a.a.FRAG_PARSED, this.onFragParsed, this),
                  t.off(a.a.FRAG_CHANGED, this.onFragChanged, this);
              }),
              (e._initSourceBuffer = function () {
                (this.sourceBuffer = {}),
                  (this.operationQueue = new Le(this.sourceBuffer)),
                  (this.listeners = { audio: [], video: [], audiovideo: [] });
              }),
              (e.onManifestParsed = function (t, e) {
                var r = 2;
                ((e.audio && !e.video) || !e.altAudio) && (r = 1),
                  (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r),
                  (this.details = null),
                  o.b.log(this.bufferCodecEventsExpected + ' bufferCodec event(s) expected');
              }),
              (e.onMediaAttaching = function (t, e) {
                var r = (this.media = e.media);
                if (r && Ae) {
                  var i = (this.mediaSource = new Ae());
                  i.addEventListener('sourceopen', this._onMediaSourceOpen),
                    i.addEventListener('sourceended', this._onMediaSourceEnded),
                    i.addEventListener('sourceclose', this._onMediaSourceClose),
                    (r.src = self.URL.createObjectURL(i)),
                    (this._objectUrl = r.src);
                }
              }),
              (e.onMediaDetaching = function () {
                var t = this.media,
                  e = this.mediaSource,
                  r = this._objectUrl;
                if (e) {
                  if (
                    (o.b.log('[buffer-controller]: media source detaching'),
                    'open' === e.readyState)
                  )
                    try {
                      e.endOfStream();
                    } catch (t) {
                      o.b.warn(
                        '[buffer-controller]: onMediaDetaching: ' +
                          t.message +
                          ' while calling endOfStream',
                      );
                    }
                  this.onBufferReset(),
                    e.removeEventListener('sourceopen', this._onMediaSourceOpen),
                    e.removeEventListener('sourceended', this._onMediaSourceEnded),
                    e.removeEventListener('sourceclose', this._onMediaSourceClose),
                    t &&
                      (r && self.URL.revokeObjectURL(r),
                      t.src === r
                        ? (t.removeAttribute('src'), t.load())
                        : o.b.warn(
                            '[buffer-controller]: media.src was changed by a third party - skip cleanup',
                          )),
                    (this.mediaSource = null),
                    (this.media = null),
                    (this._objectUrl = null),
                    (this.bufferCodecEventsExpected = this._bufferCodecEventsTotal),
                    (this.pendingTracks = {}),
                    (this.tracks = {});
                }
                this.hls.trigger(a.a.MEDIA_DETACHED, void 0);
              }),
              (e.onBufferReset = function () {
                var t = this;
                this.getSourceBufferTypes().forEach(function (e) {
                  var r = t.sourceBuffer[e];
                  try {
                    r &&
                      (t.removeBufferListeners(e),
                      t.mediaSource && t.mediaSource.removeSourceBuffer(r),
                      (t.sourceBuffer[e] = void 0));
                  } catch (t) {
                    o.b.warn('[buffer-controller]: Failed to reset the ' + e + ' buffer', t);
                  }
                }),
                  this._initSourceBuffer();
              }),
              (e.onBufferCodecs = function (t, e) {
                var r = this,
                  i = this.getSourceBufferTypes().length;
                Object.keys(e).forEach(function (t) {
                  if (i) {
                    var n = r.tracks[t];
                    if (n && 'function' == typeof n.buffer.changeType) {
                      var a = e[t],
                        s = a.codec,
                        o = a.levelCodec,
                        l = a.container;
                      if (
                        (n.levelCodec || n.codec).replace(Re, '$1') !== (o || s).replace(Re, '$1')
                      ) {
                        var u = l + ';codecs=' + (o || s);
                        r.appendChangeType(t, u);
                      }
                    }
                  } else r.pendingTracks[t] = e[t];
                }),
                  i ||
                    ((this.bufferCodecEventsExpected = Math.max(
                      this.bufferCodecEventsExpected - 1,
                      0,
                    )),
                    this.mediaSource &&
                      'open' === this.mediaSource.readyState &&
                      this.checkPendingTracks());
              }),
              (e.appendChangeType = function (t, e) {
                var r = this,
                  i = this.operationQueue,
                  n = {
                    execute: function () {
                      var n = r.sourceBuffer[t];
                      n &&
                        (o.b.log(
                          '[buffer-controller]: changing ' + t + ' sourceBuffer type to ' + e,
                        ),
                        n.changeType(e)),
                        i.shiftAndExecuteNext(t);
                    },
                    onStart: function () {},
                    onComplete: function () {},
                    onError: function (e) {
                      o.b.warn(
                        '[buffer-controller]: Failed to change ' + t + ' SourceBuffer type',
                        e,
                      );
                    },
                  };
                i.append(n, t);
              }),
              (e.onBufferAppending = function (t, e) {
                var r = this,
                  i = this.hls,
                  n = this.operationQueue,
                  l = this.tracks,
                  u = e.data,
                  h = e.type,
                  d = e.frag,
                  c = e.part,
                  f = e.chunkMeta,
                  g = f.buffering[h],
                  v = self.performance.now();
                g.start = v;
                var p = d.stats.buffering,
                  m = c ? c.stats.buffering : null;
                0 === p.start && (p.start = v), m && 0 === m.start && (m.start = v);
                var y = l.audio,
                  T =
                    'audio' === h &&
                    1 === f.id &&
                    'audio/mpeg' === (null == y ? void 0 : y.container),
                  b = {
                    execute: function () {
                      if (((g.executeStart = self.performance.now()), T)) {
                        var t = r.sourceBuffer[h];
                        if (t) {
                          var e = d.start - t.timestampOffset;
                          Math.abs(e) >= 0.1 &&
                            (o.b.log(
                              '[buffer-controller]: Updating audio SourceBuffer timestampOffset to ' +
                                d.start +
                                ' (delta: ' +
                                e +
                                ') sn: ' +
                                d.sn +
                                ')',
                            ),
                            (t.timestampOffset = d.start));
                        }
                      }
                      r.appendExecutor(u, h);
                    },
                    onStart: function () {},
                    onComplete: function () {
                      var t = self.performance.now();
                      (g.executeEnd = g.end = t),
                        0 === p.first && (p.first = t),
                        m && 0 === m.first && (m.first = t);
                      var e = r.sourceBuffer,
                        i = {};
                      for (var n in e) i[n] = lt.getBuffered(e[n]);
                      (r.appendError = 0),
                        r.hls.trigger(a.a.BUFFER_APPENDED, {
                          type: h,
                          frag: d,
                          part: c,
                          chunkMeta: f,
                          parent: d.type,
                          timeRanges: i,
                        });
                    },
                    onError: function (t) {
                      o.b.error(
                        '[buffer-controller]: Error encountered while trying to append to the ' +
                          h +
                          ' SourceBuffer',
                        t,
                      );
                      var e = {
                        type: s.b.MEDIA_ERROR,
                        parent: d.type,
                        details: s.a.BUFFER_APPEND_ERROR,
                        err: t,
                        fatal: !1,
                      };
                      t.code === DOMException.QUOTA_EXCEEDED_ERR
                        ? (e.details = s.a.BUFFER_FULL_ERROR)
                        : (r.appendError++,
                          (e.details = s.a.BUFFER_APPEND_ERROR),
                          r.appendError > i.config.appendErrorMaxRetry &&
                            (o.b.error(
                              '[buffer-controller]: Failed ' +
                                i.config.appendErrorMaxRetry +
                                ' times to append segment in sourceBuffer',
                            ),
                            (e.fatal = !0))),
                        i.trigger(a.a.ERROR, e);
                    },
                  };
                n.append(b, h);
              }),
              (e.onBufferFlushing = function (t, e) {
                var r = this,
                  i = this.operationQueue,
                  n = function (t) {
                    return {
                      execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                      onStart: function () {},
                      onComplete: function () {
                        r.hls.trigger(a.a.BUFFER_FLUSHED, { type: t });
                      },
                      onError: function (e) {
                        o.b.warn(
                          '[buffer-controller]: Failed to remove from ' + t + ' SourceBuffer',
                          e,
                        );
                      },
                    };
                  };
                e.type
                  ? i.append(n(e.type), e.type)
                  : this.getSourceBufferTypes().forEach(function (t) {
                      i.append(n(t), t);
                    });
              }),
              (e.onFragParsed = function (t, e) {
                var r = this,
                  i = e.frag,
                  n = e.part,
                  s = [],
                  l = n ? n.elementaryStreams : i.elementaryStreams;
                l[u.a.AUDIOVIDEO]
                  ? s.push('audiovideo')
                  : (l[u.a.AUDIO] && s.push('audio'), l[u.a.VIDEO] && s.push('video'));
                0 === s.length &&
                  o.b.warn(
                    'Fragments must have at least one ElementaryStreamType set. type: ' +
                      i.type +
                      ' level: ' +
                      i.level +
                      ' sn: ' +
                      i.sn,
                  ),
                  this.blockBuffers(function () {
                    var t = self.performance.now();
                    (i.stats.buffering.end = t), n && (n.stats.buffering.end = t);
                    var e = n ? n.stats : i.stats;
                    r.hls.trigger(a.a.FRAG_BUFFERED, { frag: i, part: n, stats: e, id: i.type });
                  }, s);
              }),
              (e.onFragChanged = function (t, e) {
                this.flushBackBuffer();
              }),
              (e.onBufferEos = function (t, e) {
                var r = this;
                this.getSourceBufferTypes().reduce(function (t, i) {
                  var n = r.sourceBuffer[i];
                  return (
                    (e.type && e.type !== i) ||
                      (n &&
                        !n.ended &&
                        ((n.ended = !0),
                        o.b.log('[buffer-controller]: ' + i + ' sourceBuffer now EOS'))),
                    t && !(n && !n.ended)
                  );
                }, !0) &&
                  this.blockBuffers(function () {
                    var t = r.mediaSource;
                    t && 'open' === t.readyState && t.endOfStream();
                  });
              }),
              (e.onLevelUpdated = function (t, e) {
                var r = e.details;
                r.fragments.length &&
                  ((this.details = r),
                  this.getSourceBufferTypes().length
                    ? this.blockBuffers(this.updateMediaElementDuration.bind(this))
                    : this.updateMediaElementDuration());
              }),
              (e.flushBackBuffer = function () {
                var t = this.hls,
                  e = this.details,
                  r = this.media,
                  i = this.sourceBuffer;
                if (r && null !== e) {
                  var s = this.getSourceBufferTypes();
                  if (s.length) {
                    var o =
                      e.live && null !== t.config.liveBackBufferLength
                        ? t.config.liveBackBufferLength
                        : t.config.backBufferLength;
                    if (Object(n.a)(o) && !(o < 0)) {
                      var l = r.currentTime,
                        u = e.levelTargetDuration,
                        h = Math.max(o, u),
                        d = Math.floor(l / u) * u - h;
                      s.forEach(function (r) {
                        var n = i[r];
                        if (n) {
                          var s = lt.getBuffered(n);
                          s.length > 0 &&
                            d > s.start(0) &&
                            (t.trigger(a.a.BACK_BUFFER_REACHED, { bufferEnd: d }),
                            e.live && t.trigger(a.a.LIVE_BACK_BUFFER_REACHED, { bufferEnd: d }),
                            t.trigger(a.a.BUFFER_FLUSHING, {
                              startOffset: 0,
                              endOffset: d,
                              type: r,
                            }));
                        }
                      });
                    }
                  }
                }
              }),
              (e.updateMediaElementDuration = function () {
                if (
                  this.details &&
                  this.media &&
                  this.mediaSource &&
                  'open' === this.mediaSource.readyState
                ) {
                  var t = this.details,
                    e = this.hls,
                    r = this.media,
                    i = this.mediaSource,
                    a = t.fragments[0].start + t.totalduration,
                    s = r.duration,
                    l = Object(n.a)(i.duration) ? i.duration : 0;
                  t.live && e.config.liveDurationInfinity
                    ? (o.b.log('[buffer-controller]: Media Source duration is set to Infinity'),
                      (i.duration = 1 / 0),
                      this.updateSeekableRange(t))
                    : ((a > l && a > s) || !Object(n.a)(s)) &&
                      (o.b.log(
                        '[buffer-controller]: Updating Media Source duration to ' + a.toFixed(3),
                      ),
                      (i.duration = a));
                }
              }),
              (e.updateSeekableRange = function (t) {
                var e = this.mediaSource,
                  r = t.fragments;
                if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                  var i = Math.max(0, r[0].start),
                    n = Math.max(i, i + t.totalduration);
                  e.setLiveSeekableRange(i, n);
                }
              }),
              (e.checkPendingTracks = function () {
                var t = this.bufferCodecEventsExpected,
                  e = this.operationQueue,
                  r = this.pendingTracks,
                  i = Object.keys(r).length;
                if ((i && !t) || 2 === i) {
                  this.createSourceBuffers(r), (this.pendingTracks = {});
                  var n = this.getSourceBufferTypes();
                  if (0 === n.length)
                    return void this.hls.trigger(a.a.ERROR, {
                      type: s.b.MEDIA_ERROR,
                      details: s.a.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                      fatal: !0,
                      reason: 'could not create source buffer for media codec(s)',
                    });
                  n.forEach(function (t) {
                    e.executeNext(t);
                  });
                }
              }),
              (e.createSourceBuffers = function (t) {
                var e = this.sourceBuffer,
                  r = this.mediaSource;
                if (!r) throw Error('createSourceBuffers called when mediaSource was null');
                var i = 0;
                for (var n in t)
                  if (!e[n]) {
                    var l = t[n];
                    if (!l)
                      throw Error(
                        'source buffer exists for track ' + n + ', however track does not',
                      );
                    var u = l.levelCodec || l.codec,
                      h = l.container + ';codecs=' + u;
                    o.b.log('[buffer-controller]: creating sourceBuffer(' + h + ')');
                    try {
                      var d = (e[n] = r.addSourceBuffer(h)),
                        c = n;
                      this.addBufferListener(c, 'updatestart', this._onSBUpdateStart),
                        this.addBufferListener(c, 'updateend', this._onSBUpdateEnd),
                        this.addBufferListener(c, 'error', this._onSBUpdateError),
                        (this.tracks[n] = {
                          buffer: d,
                          codec: u,
                          container: l.container,
                          levelCodec: l.levelCodec,
                          id: l.id,
                        }),
                        i++;
                    } catch (t) {
                      o.b.error(
                        '[buffer-controller]: error while trying to add sourceBuffer: ' + t.message,
                      ),
                        this.hls.trigger(a.a.ERROR, {
                          type: s.b.MEDIA_ERROR,
                          details: s.a.BUFFER_ADD_CODEC_ERROR,
                          fatal: !1,
                          error: t,
                          mimeType: h,
                        });
                    }
                  }
                i && this.hls.trigger(a.a.BUFFER_CREATED, { tracks: this.tracks });
              }),
              (e._onSBUpdateStart = function (t) {
                this.operationQueue.current(t).onStart();
              }),
              (e._onSBUpdateEnd = function (t) {
                var e = this.operationQueue;
                e.current(t).onComplete(), e.shiftAndExecuteNext(t);
              }),
              (e._onSBUpdateError = function (t, e) {
                o.b.error('[buffer-controller]: ' + t + ' SourceBuffer error', e),
                  this.hls.trigger(a.a.ERROR, {
                    type: s.b.MEDIA_ERROR,
                    details: s.a.BUFFER_APPENDING_ERROR,
                    fatal: !1,
                  });
                var r = this.operationQueue.current(t);
                r && r.onError(e);
              }),
              (e.removeExecutor = function (t, e, r) {
                var i = this.media,
                  a = this.mediaSource,
                  s = this.operationQueue,
                  l = this.sourceBuffer[t];
                if (!i || !a || !l)
                  return (
                    o.b.warn(
                      '[buffer-controller]: Attempting to remove from the ' +
                        t +
                        ' SourceBuffer, but it does not exist',
                    ),
                    void s.shiftAndExecuteNext(t)
                  );
                var u = Object(n.a)(i.duration) ? i.duration : 1 / 0,
                  h = Object(n.a)(a.duration) ? a.duration : 1 / 0,
                  d = Math.max(0, e),
                  c = Math.min(r, u, h);
                c > d
                  ? (o.b.log(
                      '[buffer-controller]: Removing [' +
                        d +
                        ',' +
                        c +
                        '] from the ' +
                        t +
                        ' SourceBuffer',
                    ),
                    l.remove(d, c))
                  : s.shiftAndExecuteNext(t);
              }),
              (e.appendExecutor = function (t, e) {
                var r = this.operationQueue,
                  i = this.sourceBuffer[e];
                if (!i)
                  return (
                    o.b.warn(
                      '[buffer-controller]: Attempting to append to the ' +
                        e +
                        ' SourceBuffer, but it does not exist',
                    ),
                    void r.shiftAndExecuteNext(e)
                  );
                (i.ended = !1), i.appendBuffer(t);
              }),
              (e.blockBuffers = function (t, e) {
                var r = this;
                if ((void 0 === e && (e = this.getSourceBufferTypes()), !e.length))
                  return (
                    o.b.log(
                      '[buffer-controller]: Blocking operation requested, but no SourceBuffers exist',
                    ),
                    void Promise.resolve(t)
                  );
                var i = this.operationQueue,
                  n = e.map(function (t) {
                    return i.appendBlocker(t);
                  });
                Promise.all(n).then(function () {
                  t(),
                    e.forEach(function (t) {
                      var e = r.sourceBuffer[t];
                      (e && e.updating) || i.shiftAndExecuteNext(t);
                    });
                });
              }),
              (e.getSourceBufferTypes = function () {
                return Object.keys(this.sourceBuffer);
              }),
              (e.addBufferListener = function (t, e, r) {
                var i = this.sourceBuffer[t];
                if (i) {
                  var n = r.bind(this, t);
                  this.listeners[t].push({ event: e, listener: n }), i.addEventListener(e, n);
                }
              }),
              (e.removeBufferListeners = function (t) {
                var e = this.sourceBuffer[t];
                e &&
                  this.listeners[t].forEach(function (t) {
                    e.removeEventListener(t.event, t.listener);
                  });
              }),
              t
            );
          })(),
          ke = {
            42: 225,
            92: 233,
            94: 237,
            95: 243,
            96: 250,
            123: 231,
            124: 247,
            125: 209,
            126: 241,
            127: 9608,
            128: 174,
            129: 176,
            130: 189,
            131: 191,
            132: 8482,
            133: 162,
            134: 163,
            135: 9834,
            136: 224,
            137: 32,
            138: 232,
            139: 226,
            140: 234,
            141: 238,
            142: 244,
            143: 251,
            144: 193,
            145: 201,
            146: 211,
            147: 218,
            148: 220,
            149: 252,
            150: 8216,
            151: 161,
            152: 42,
            153: 8217,
            154: 9473,
            155: 169,
            156: 8480,
            157: 8226,
            158: 8220,
            159: 8221,
            160: 192,
            161: 194,
            162: 199,
            163: 200,
            164: 202,
            165: 203,
            166: 235,
            167: 206,
            168: 207,
            169: 239,
            170: 212,
            171: 217,
            172: 249,
            173: 219,
            174: 171,
            175: 187,
            176: 195,
            177: 227,
            178: 205,
            179: 204,
            180: 236,
            181: 210,
            182: 242,
            183: 213,
            184: 245,
            185: 123,
            186: 125,
            187: 92,
            188: 94,
            189: 95,
            190: 124,
            191: 8764,
            192: 196,
            193: 228,
            194: 214,
            195: 246,
            196: 223,
            197: 165,
            198: 164,
            199: 9475,
            200: 197,
            201: 229,
            202: 216,
            203: 248,
            204: 9487,
            205: 9491,
            206: 9495,
            207: 9499,
          },
          _e = function (t) {
            var e = t;
            return ke.hasOwnProperty(t) && (e = ke[t]), String.fromCharCode(e);
          },
          Ie = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
          Ce = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
          we = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
          Oe = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
          xe = [
            'white',
            'green',
            'blue',
            'cyan',
            'red',
            'yellow',
            'magenta',
            'black',
            'transparent',
          ];
        !(function (t) {
          (t[(t.ERROR = 0)] = 'ERROR'),
            (t[(t.TEXT = 1)] = 'TEXT'),
            (t[(t.WARNING = 2)] = 'WARNING'),
            (t[(t.INFO = 2)] = 'INFO'),
            (t[(t.DEBUG = 3)] = 'DEBUG'),
            (t[(t.DATA = 3)] = 'DATA');
        })(Ee || (Ee = {}));
        var Pe = (function () {
            function t() {
              (this.time = null), (this.verboseLevel = Ee.ERROR);
            }
            return (
              (t.prototype.log = function (t, e) {
                this.verboseLevel >= t && o.b.log(this.time + ' [' + t + '] ' + e);
              }),
              t
            );
          })(),
          Me = function (t) {
            for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
            return e;
          },
          Fe = (function () {
            function t(t, e, r, i, n) {
              (this.foreground = void 0),
                (this.underline = void 0),
                (this.italics = void 0),
                (this.background = void 0),
                (this.flash = void 0),
                (this.foreground = t || 'white'),
                (this.underline = e || !1),
                (this.italics = r || !1),
                (this.background = i || 'black'),
                (this.flash = n || !1);
            }
            var e = t.prototype;
            return (
              (e.reset = function () {
                (this.foreground = 'white'),
                  (this.underline = !1),
                  (this.italics = !1),
                  (this.background = 'black'),
                  (this.flash = !1);
              }),
              (e.setStyles = function (t) {
                for (
                  var e = ['foreground', 'underline', 'italics', 'background', 'flash'], r = 0;
                  r < e.length;
                  r++
                ) {
                  var i = e[r];
                  t.hasOwnProperty(i) && (this[i] = t[i]);
                }
              }),
              (e.isDefault = function () {
                return (
                  'white' === this.foreground &&
                  !this.underline &&
                  !this.italics &&
                  'black' === this.background &&
                  !this.flash
                );
              }),
              (e.equals = function (t) {
                return (
                  this.foreground === t.foreground &&
                  this.underline === t.underline &&
                  this.italics === t.italics &&
                  this.background === t.background &&
                  this.flash === t.flash
                );
              }),
              (e.copy = function (t) {
                (this.foreground = t.foreground),
                  (this.underline = t.underline),
                  (this.italics = t.italics),
                  (this.background = t.background),
                  (this.flash = t.flash);
              }),
              (e.toString = function () {
                return (
                  'color=' +
                  this.foreground +
                  ', underline=' +
                  this.underline +
                  ', italics=' +
                  this.italics +
                  ', background=' +
                  this.background +
                  ', flash=' +
                  this.flash
                );
              }),
              t
            );
          })(),
          Ne = (function () {
            function t(t, e, r, i, n, a) {
              (this.uchar = void 0),
                (this.penState = void 0),
                (this.uchar = t || ' '),
                (this.penState = new Fe(e, r, i, n, a));
            }
            var e = t.prototype;
            return (
              (e.reset = function () {
                (this.uchar = ' '), this.penState.reset();
              }),
              (e.setChar = function (t, e) {
                (this.uchar = t), this.penState.copy(e);
              }),
              (e.setPenState = function (t) {
                this.penState.copy(t);
              }),
              (e.equals = function (t) {
                return this.uchar === t.uchar && this.penState.equals(t.penState);
              }),
              (e.copy = function (t) {
                (this.uchar = t.uchar), this.penState.copy(t.penState);
              }),
              (e.isEmpty = function () {
                return ' ' === this.uchar && this.penState.isDefault();
              }),
              t
            );
          })(),
          Ue = (function () {
            function t(t) {
              (this.chars = void 0),
                (this.pos = void 0),
                (this.currPenState = void 0),
                (this.cueStartTime = void 0),
                (this.logger = void 0),
                (this.chars = []);
              for (var e = 0; e < 100; e++) this.chars.push(new Ne());
              (this.logger = t), (this.pos = 0), (this.currPenState = new Fe());
            }
            var e = t.prototype;
            return (
              (e.equals = function (t) {
                for (var e = !0, r = 0; r < 100; r++)
                  if (!this.chars[r].equals(t.chars[r])) {
                    e = !1;
                    break;
                  }
                return e;
              }),
              (e.copy = function (t) {
                for (var e = 0; e < 100; e++) this.chars[e].copy(t.chars[e]);
              }),
              (e.isEmpty = function () {
                for (var t = !0, e = 0; e < 100; e++)
                  if (!this.chars[e].isEmpty()) {
                    t = !1;
                    break;
                  }
                return t;
              }),
              (e.setCursor = function (t) {
                this.pos !== t && (this.pos = t),
                  this.pos < 0
                    ? (this.logger.log(Ee.DEBUG, 'Negative cursor position ' + this.pos),
                      (this.pos = 0))
                    : this.pos > 100 &&
                      (this.logger.log(Ee.DEBUG, 'Too large cursor position ' + this.pos),
                      (this.pos = 100));
              }),
              (e.moveCursor = function (t) {
                var e = this.pos + t;
                if (t > 1)
                  for (var r = this.pos + 1; r < e + 1; r++)
                    this.chars[r].setPenState(this.currPenState);
                this.setCursor(e);
              }),
              (e.backSpace = function () {
                this.moveCursor(-1), this.chars[this.pos].setChar(' ', this.currPenState);
              }),
              (e.insertChar = function (t) {
                t >= 144 && this.backSpace();
                var e = _e(t);
                this.pos >= 100
                  ? this.logger.log(
                      Ee.ERROR,
                      'Cannot insert ' +
                        t.toString(16) +
                        ' (' +
                        e +
                        ') at position ' +
                        this.pos +
                        '. Skipping it!',
                    )
                  : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1));
              }),
              (e.clearFromPos = function (t) {
                var e;
                for (e = t; e < 100; e++) this.chars[e].reset();
              }),
              (e.clear = function () {
                this.clearFromPos(0), (this.pos = 0), this.currPenState.reset();
              }),
              (e.clearToEndOfRow = function () {
                this.clearFromPos(this.pos);
              }),
              (e.getTextString = function () {
                for (var t = [], e = !0, r = 0; r < 100; r++) {
                  var i = this.chars[r].uchar;
                  ' ' !== i && (e = !1), t.push(i);
                }
                return e ? '' : t.join('');
              }),
              (e.setPenStyles = function (t) {
                this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState);
              }),
              t
            );
          })(),
          Be = (function () {
            function t(t) {
              (this.rows = void 0),
                (this.currRow = void 0),
                (this.nrRollUpRows = void 0),
                (this.lastOutputScreen = void 0),
                (this.logger = void 0),
                (this.rows = []);
              for (var e = 0; e < 15; e++) this.rows.push(new Ue(t));
              (this.logger = t),
                (this.currRow = 14),
                (this.nrRollUpRows = null),
                (this.lastOutputScreen = null),
                this.reset();
            }
            var e = t.prototype;
            return (
              (e.reset = function () {
                for (var t = 0; t < 15; t++) this.rows[t].clear();
                this.currRow = 14;
              }),
              (e.equals = function (t) {
                for (var e = !0, r = 0; r < 15; r++)
                  if (!this.rows[r].equals(t.rows[r])) {
                    e = !1;
                    break;
                  }
                return e;
              }),
              (e.copy = function (t) {
                for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e]);
              }),
              (e.isEmpty = function () {
                for (var t = !0, e = 0; e < 15; e++)
                  if (!this.rows[e].isEmpty()) {
                    t = !1;
                    break;
                  }
                return t;
              }),
              (e.backSpace = function () {
                this.rows[this.currRow].backSpace();
              }),
              (e.clearToEndOfRow = function () {
                this.rows[this.currRow].clearToEndOfRow();
              }),
              (e.insertChar = function (t) {
                this.rows[this.currRow].insertChar(t);
              }),
              (e.setPen = function (t) {
                this.rows[this.currRow].setPenStyles(t);
              }),
              (e.moveCursor = function (t) {
                this.rows[this.currRow].moveCursor(t);
              }),
              (e.setCursor = function (t) {
                this.logger.log(Ee.INFO, 'setCursor: ' + t), this.rows[this.currRow].setCursor(t);
              }),
              (e.setPAC = function (t) {
                this.logger.log(Ee.INFO, 'pacData = ' + JSON.stringify(t));
                var e = t.row - 1;
                if (
                  (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1),
                  this.nrRollUpRows && this.currRow !== e)
                ) {
                  for (var r = 0; r < 15; r++) this.rows[r].clear();
                  var i = this.currRow + 1 - this.nrRollUpRows,
                    n = this.lastOutputScreen;
                  if (n) {
                    var a = n.rows[i].cueStartTime,
                      s = this.logger.time;
                    if (a && null !== s && a < s)
                      for (var o = 0; o < this.nrRollUpRows; o++)
                        this.rows[e - this.nrRollUpRows + o + 1].copy(n.rows[i + o]);
                  }
                }
                this.currRow = e;
                var l = this.rows[this.currRow];
                if (null !== t.indent) {
                  var u = t.indent,
                    h = Math.max(u - 1, 0);
                  l.setCursor(t.indent), (t.color = l.chars[h].penState.foreground);
                }
                var d = {
                  foreground: t.color,
                  underline: t.underline,
                  italics: t.italics,
                  background: 'black',
                  flash: !1,
                };
                this.setPen(d);
              }),
              (e.setBkgData = function (t) {
                this.logger.log(Ee.INFO, 'bkgData = ' + JSON.stringify(t)),
                  this.backSpace(),
                  this.setPen(t),
                  this.insertChar(32);
              }),
              (e.setRollUpRows = function (t) {
                this.nrRollUpRows = t;
              }),
              (e.rollUp = function () {
                if (null !== this.nrRollUpRows) {
                  this.logger.log(Ee.TEXT, this.getDisplayText());
                  var t = this.currRow + 1 - this.nrRollUpRows,
                    e = this.rows.splice(t, 1)[0];
                  e.clear(),
                    this.rows.splice(this.currRow, 0, e),
                    this.logger.log(Ee.INFO, 'Rolling up');
                } else this.logger.log(Ee.DEBUG, 'roll_up but nrRollUpRows not set yet');
              }),
              (e.getDisplayText = function (t) {
                t = t || !1;
                for (var e = [], r = '', i = -1, n = 0; n < 15; n++) {
                  var a = this.rows[n].getTextString();
                  a && ((i = n + 1), t ? e.push('Row ' + i + ": '" + a + "'") : e.push(a.trim()));
                }
                return e.length > 0 && (r = t ? '[' + e.join(' | ') + ']' : e.join('\n')), r;
              }),
              (e.getTextAndFormat = function () {
                return this.rows;
              }),
              t
            );
          })(),
          Ge = (function () {
            function t(t, e, r) {
              (this.chNr = void 0),
                (this.outputFilter = void 0),
                (this.mode = void 0),
                (this.verbose = void 0),
                (this.displayedMemory = void 0),
                (this.nonDisplayedMemory = void 0),
                (this.lastOutputScreen = void 0),
                (this.currRollUpRow = void 0),
                (this.writeScreen = void 0),
                (this.cueStartTime = void 0),
                (this.logger = void 0),
                (this.chNr = t),
                (this.outputFilter = e),
                (this.mode = null),
                (this.verbose = 0),
                (this.displayedMemory = new Be(r)),
                (this.nonDisplayedMemory = new Be(r)),
                (this.lastOutputScreen = new Be(r)),
                (this.currRollUpRow = this.displayedMemory.rows[14]),
                (this.writeScreen = this.displayedMemory),
                (this.mode = null),
                (this.cueStartTime = null),
                (this.logger = r);
            }
            var e = t.prototype;
            return (
              (e.reset = function () {
                (this.mode = null),
                  this.displayedMemory.reset(),
                  this.nonDisplayedMemory.reset(),
                  this.lastOutputScreen.reset(),
                  this.outputFilter.reset(),
                  (this.currRollUpRow = this.displayedMemory.rows[14]),
                  (this.writeScreen = this.displayedMemory),
                  (this.mode = null),
                  (this.cueStartTime = null);
              }),
              (e.getHandler = function () {
                return this.outputFilter;
              }),
              (e.setHandler = function (t) {
                this.outputFilter = t;
              }),
              (e.setPAC = function (t) {
                this.writeScreen.setPAC(t);
              }),
              (e.setBkgData = function (t) {
                this.writeScreen.setBkgData(t);
              }),
              (e.setMode = function (t) {
                t !== this.mode &&
                  ((this.mode = t),
                  this.logger.log(Ee.INFO, 'MODE=' + t),
                  'MODE_POP-ON' === this.mode
                    ? (this.writeScreen = this.nonDisplayedMemory)
                    : ((this.writeScreen = this.displayedMemory), this.writeScreen.reset()),
                  'MODE_ROLL-UP' !== this.mode &&
                    ((this.displayedMemory.nrRollUpRows = null),
                    (this.nonDisplayedMemory.nrRollUpRows = null)),
                  (this.mode = t));
              }),
              (e.insertChars = function (t) {
                for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                var r = this.writeScreen === this.displayedMemory ? 'DISP' : 'NON_DISP';
                this.logger.log(Ee.INFO, r + ': ' + this.writeScreen.getDisplayText(!0)),
                  ('MODE_PAINT-ON' !== this.mode && 'MODE_ROLL-UP' !== this.mode) ||
                    (this.logger.log(
                      Ee.TEXT,
                      'DISPLAYED: ' + this.displayedMemory.getDisplayText(!0),
                    ),
                    this.outputDataUpdate());
              }),
              (e.ccRCL = function () {
                this.logger.log(Ee.INFO, 'RCL - Resume Caption Loading'),
                  this.setMode('MODE_POP-ON');
              }),
              (e.ccBS = function () {
                this.logger.log(Ee.INFO, 'BS - BackSpace'),
                  'MODE_TEXT' !== this.mode &&
                    (this.writeScreen.backSpace(),
                    this.writeScreen === this.displayedMemory && this.outputDataUpdate());
              }),
              (e.ccAOF = function () {}),
              (e.ccAON = function () {}),
              (e.ccDER = function () {
                this.logger.log(Ee.INFO, 'DER- Delete to End of Row'),
                  this.writeScreen.clearToEndOfRow(),
                  this.outputDataUpdate();
              }),
              (e.ccRU = function (t) {
                this.logger.log(Ee.INFO, 'RU(' + t + ') - Roll Up'),
                  (this.writeScreen = this.displayedMemory),
                  this.setMode('MODE_ROLL-UP'),
                  this.writeScreen.setRollUpRows(t);
              }),
              (e.ccFON = function () {
                this.logger.log(Ee.INFO, 'FON - Flash On'), this.writeScreen.setPen({ flash: !0 });
              }),
              (e.ccRDC = function () {
                this.logger.log(Ee.INFO, 'RDC - Resume Direct Captioning'),
                  this.setMode('MODE_PAINT-ON');
              }),
              (e.ccTR = function () {
                this.logger.log(Ee.INFO, 'TR'), this.setMode('MODE_TEXT');
              }),
              (e.ccRTD = function () {
                this.logger.log(Ee.INFO, 'RTD'), this.setMode('MODE_TEXT');
              }),
              (e.ccEDM = function () {
                this.logger.log(Ee.INFO, 'EDM - Erase Displayed Memory'),
                  this.displayedMemory.reset(),
                  this.outputDataUpdate(!0);
              }),
              (e.ccCR = function () {
                this.logger.log(Ee.INFO, 'CR - Carriage Return'),
                  this.writeScreen.rollUp(),
                  this.outputDataUpdate(!0);
              }),
              (e.ccENM = function () {
                this.logger.log(Ee.INFO, 'ENM - Erase Non-displayed Memory'),
                  this.nonDisplayedMemory.reset();
              }),
              (e.ccEOC = function () {
                if (
                  (this.logger.log(Ee.INFO, 'EOC - End Of Caption'), 'MODE_POP-ON' === this.mode)
                ) {
                  var t = this.displayedMemory;
                  (this.displayedMemory = this.nonDisplayedMemory),
                    (this.nonDisplayedMemory = t),
                    (this.writeScreen = this.nonDisplayedMemory),
                    this.logger.log(Ee.TEXT, 'DISP: ' + this.displayedMemory.getDisplayText());
                }
                this.outputDataUpdate(!0);
              }),
              (e.ccTO = function (t) {
                this.logger.log(Ee.INFO, 'TO(' + t + ') - Tab Offset'),
                  this.writeScreen.moveCursor(t);
              }),
              (e.ccMIDROW = function (t) {
                var e = { flash: !1 };
                if (((e.underline = t % 2 == 1), (e.italics = t >= 46), e.italics))
                  e.foreground = 'white';
                else {
                  var r = Math.floor(t / 2) - 16;
                  e.foreground = ['white', 'green', 'blue', 'cyan', 'red', 'yellow', 'magenta'][r];
                }
                this.logger.log(Ee.INFO, 'MIDROW: ' + JSON.stringify(e)),
                  this.writeScreen.setPen(e);
              }),
              (e.outputDataUpdate = function (t) {
                void 0 === t && (t = !1);
                var e = this.logger.time;
                null !== e &&
                  this.outputFilter &&
                  (null !== this.cueStartTime || this.displayedMemory.isEmpty()
                    ? this.displayedMemory.equals(this.lastOutputScreen) ||
                      (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen),
                      t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                      (this.cueStartTime = this.displayedMemory.isEmpty() ? null : e))
                    : (this.cueStartTime = e),
                  this.lastOutputScreen.copy(this.displayedMemory));
              }),
              (e.cueSplitAtTime = function (t) {
                this.outputFilter &&
                  (this.displayedMemory.isEmpty() ||
                    (this.outputFilter.newCue &&
                      this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory),
                    (this.cueStartTime = t)));
              }),
              t
            );
          })();
        function Ke(t, e, r) {
          (r.a = t), (r.b = e);
        }
        function je(t, e, r) {
          return r.a === t && r.b === e;
        }
        var He = (function () {
            function t(t, e, r) {
              (this.channels = void 0),
                (this.currentChannel = 0),
                (this.cmdHistory = void 0),
                (this.logger = void 0);
              var i = new Pe();
              (this.channels = [null, new Ge(t, e, i), new Ge(t + 1, r, i)]),
                (this.cmdHistory = { a: null, b: null }),
                (this.logger = i);
            }
            var e = t.prototype;
            return (
              (e.getHandler = function (t) {
                return this.channels[t].getHandler();
              }),
              (e.setHandler = function (t, e) {
                this.channels[t].setHandler(e);
              }),
              (e.addData = function (t, e) {
                var r,
                  i,
                  n,
                  a = !1;
                this.logger.time = t;
                for (var s = 0; s < e.length; s += 2)
                  if (((i = 127 & e[s]), (n = 127 & e[s + 1]), 0 !== i || 0 !== n)) {
                    if (
                      (this.logger.log(
                        Ee.DATA,
                        '[' + Me([e[s], e[s + 1]]) + '] -> (' + Me([i, n]) + ')',
                      ),
                      (r = this.parseCmd(i, n)) || (r = this.parseMidrow(i, n)),
                      r || (r = this.parsePAC(i, n)),
                      r || (r = this.parseBackgroundAttributes(i, n)),
                      !r && (a = this.parseChars(i, n)))
                    ) {
                      var o = this.currentChannel;
                      if (o && o > 0) this.channels[o].insertChars(a);
                      else this.logger.log(Ee.WARNING, 'No channel found yet. TEXT-MODE?');
                    }
                    r ||
                      a ||
                      this.logger.log(
                        Ee.WARNING,
                        "Couldn't parse cleaned data " +
                          Me([i, n]) +
                          ' orig: ' +
                          Me([e[s], e[s + 1]]),
                      );
                  }
              }),
              (e.parseCmd = function (t, e) {
                var r = this.cmdHistory;
                if (
                  !((20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47) &&
                  !((23 === t || 31 === t) && e >= 33 && e <= 35)
                )
                  return !1;
                if (je(t, e, r))
                  return (
                    Ke(null, null, r),
                    this.logger.log(Ee.DEBUG, 'Repeated command (' + Me([t, e]) + ') is dropped'),
                    !0
                  );
                var i = 20 === t || 21 === t || 23 === t ? 1 : 2,
                  n = this.channels[i];
                return (
                  20 === t || 21 === t || 28 === t || 29 === t
                    ? 32 === e
                      ? n.ccRCL()
                      : 33 === e
                      ? n.ccBS()
                      : 34 === e
                      ? n.ccAOF()
                      : 35 === e
                      ? n.ccAON()
                      : 36 === e
                      ? n.ccDER()
                      : 37 === e
                      ? n.ccRU(2)
                      : 38 === e
                      ? n.ccRU(3)
                      : 39 === e
                      ? n.ccRU(4)
                      : 40 === e
                      ? n.ccFON()
                      : 41 === e
                      ? n.ccRDC()
                      : 42 === e
                      ? n.ccTR()
                      : 43 === e
                      ? n.ccRTD()
                      : 44 === e
                      ? n.ccEDM()
                      : 45 === e
                      ? n.ccCR()
                      : 46 === e
                      ? n.ccENM()
                      : 47 === e && n.ccEOC()
                    : n.ccTO(e - 32),
                  Ke(t, e, r),
                  (this.currentChannel = i),
                  !0
                );
              }),
              (e.parseMidrow = function (t, e) {
                var r = 0;
                if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                  if ((r = 17 === t ? 1 : 2) !== this.currentChannel)
                    return this.logger.log(Ee.ERROR, 'Mismatch channel in midrow parsing'), !1;
                  var i = this.channels[r];
                  return (
                    !!i &&
                    (i.ccMIDROW(e), this.logger.log(Ee.DEBUG, 'MIDROW (' + Me([t, e]) + ')'), !0)
                  );
                }
                return !1;
              }),
              (e.parsePAC = function (t, e) {
                var r,
                  i = this.cmdHistory;
                if (
                  !(((t >= 17 && t <= 23) || (t >= 25 && t <= 31)) && e >= 64 && e <= 127) &&
                  !((16 === t || 24 === t) && e >= 64 && e <= 95)
                )
                  return !1;
                if (je(t, e, i)) return Ke(null, null, i), !0;
                var n = t <= 23 ? 1 : 2;
                r = e >= 64 && e <= 95 ? (1 === n ? Ie[t] : we[t]) : 1 === n ? Ce[t] : Oe[t];
                var a = this.channels[n];
                return (
                  !!a &&
                  (a.setPAC(this.interpretPAC(r, e)), Ke(t, e, i), (this.currentChannel = n), !0)
                );
              }),
              (e.interpretPAC = function (t, e) {
                var r,
                  i = { color: null, italics: !1, indent: null, underline: !1, row: t };
                return (
                  (r = e > 95 ? e - 96 : e - 64),
                  (i.underline = 1 == (1 & r)),
                  r <= 13
                    ? (i.color = [
                        'white',
                        'green',
                        'blue',
                        'cyan',
                        'red',
                        'yellow',
                        'magenta',
                        'white',
                      ][Math.floor(r / 2)])
                    : r <= 15
                    ? ((i.italics = !0), (i.color = 'white'))
                    : (i.indent = 4 * Math.floor((r - 16) / 2)),
                  i
                );
              }),
              (e.parseChars = function (t, e) {
                var r,
                  i,
                  n = null,
                  a = null;
                (t >= 25 ? ((r = 2), (a = t - 8)) : ((r = 1), (a = t)), a >= 17 && a <= 19)
                  ? ((i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144),
                    this.logger.log(Ee.INFO, "Special char '" + _e(i) + "' in channel " + r),
                    (n = [i]))
                  : t >= 32 && t <= 127 && (n = 0 === e ? [t] : [t, e]);
                if (n) {
                  var s = Me(n);
                  this.logger.log(Ee.DEBUG, 'Char codes =  ' + s.join(',')),
                    Ke(t, e, this.cmdHistory);
                }
                return n;
              }),
              (e.parseBackgroundAttributes = function (t, e) {
                var r;
                if (
                  !((16 === t || 24 === t) && e >= 32 && e <= 47) &&
                  !((23 === t || 31 === t) && e >= 45 && e <= 47)
                )
                  return !1;
                var i = {};
                16 === t || 24 === t
                  ? ((r = Math.floor((e - 32) / 2)),
                    (i.background = xe[r]),
                    e % 2 == 1 && (i.background = i.background + '_semi'))
                  : 45 === e
                  ? (i.background = 'transparent')
                  : ((i.foreground = 'black'), 47 === e && (i.underline = !0));
                var n = t <= 23 ? 1 : 2;
                return this.channels[n].setBkgData(i), Ke(t, e, this.cmdHistory), !0;
              }),
              (e.reset = function () {
                for (var t = 0; t < Object.keys(this.channels).length; t++) {
                  var e = this.channels[t];
                  e && e.reset();
                }
                this.cmdHistory = { a: null, b: null };
              }),
              (e.cueSplitAtTime = function (t) {
                for (var e = 0; e < this.channels.length; e++) {
                  var r = this.channels[e];
                  r && r.cueSplitAtTime(t);
                }
              }),
              t
            );
          })(),
          Ve = (function () {
            function t(t, e) {
              (this.timelineController = void 0),
                (this.cueRanges = []),
                (this.trackName = void 0),
                (this.startTime = null),
                (this.endTime = null),
                (this.screen = null),
                (this.timelineController = t),
                (this.trackName = e);
            }
            var e = t.prototype;
            return (
              (e.dispatchCue = function () {
                null !== this.startTime &&
                  (this.timelineController.addCues(
                    this.trackName,
                    this.startTime,
                    this.endTime,
                    this.screen,
                    this.cueRanges,
                  ),
                  (this.startTime = null));
              }),
              (e.newCue = function (t, e, r) {
                (null === this.startTime || this.startTime > t) && (this.startTime = t),
                  (this.endTime = e),
                  (this.screen = r),
                  this.timelineController.createCaptionsTrack(this.trackName);
              }),
              (e.reset = function () {
                this.cueRanges = [];
              }),
              t
            );
          })(),
          We = (function () {
            if ('undefined' != typeof self && self.VTTCue) return self.VTTCue;
            var t = ['', 'lr', 'rl'],
              e = ['start', 'middle', 'end', 'left', 'right'];
            function r(t, e) {
              if ('string' != typeof e) return !1;
              if (!Array.isArray(t)) return !1;
              var r = e.toLowerCase();
              return !!~t.indexOf(r) && r;
            }
            function i(t) {
              return r(e, t);
            }
            function n(t) {
              for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                r[i - 1] = arguments[i];
              for (var n = 1; n < arguments.length; n++) {
                var a = arguments[n];
                for (var s in a) t[s] = a[s];
              }
              return t;
            }
            function a(e, a, s) {
              var o = this,
                l = { enumerable: !0 };
              o.hasBeenReset = !1;
              var u = '',
                h = !1,
                d = e,
                c = a,
                f = s,
                g = null,
                v = '',
                p = !0,
                m = 'auto',
                y = 'start',
                T = 50,
                b = 'middle',
                E = 50,
                S = 'middle';
              Object.defineProperty(
                o,
                'id',
                n({}, l, {
                  get: function () {
                    return u;
                  },
                  set: function (t) {
                    u = '' + t;
                  },
                }),
              ),
                Object.defineProperty(
                  o,
                  'pauseOnExit',
                  n({}, l, {
                    get: function () {
                      return h;
                    },
                    set: function (t) {
                      h = !!t;
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'startTime',
                  n({}, l, {
                    get: function () {
                      return d;
                    },
                    set: function (t) {
                      if ('number' != typeof t)
                        throw new TypeError('Start time must be set to a number.');
                      (d = t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'endTime',
                  n({}, l, {
                    get: function () {
                      return c;
                    },
                    set: function (t) {
                      if ('number' != typeof t)
                        throw new TypeError('End time must be set to a number.');
                      (c = t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'text',
                  n({}, l, {
                    get: function () {
                      return f;
                    },
                    set: function (t) {
                      (f = '' + t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'region',
                  n({}, l, {
                    get: function () {
                      return g;
                    },
                    set: function (t) {
                      (g = t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'vertical',
                  n({}, l, {
                    get: function () {
                      return v;
                    },
                    set: function (e) {
                      var i = (function (e) {
                        return r(t, e);
                      })(e);
                      if (!1 === i)
                        throw new SyntaxError('An invalid or illegal string was specified.');
                      (v = i), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'snapToLines',
                  n({}, l, {
                    get: function () {
                      return p;
                    },
                    set: function (t) {
                      (p = !!t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'line',
                  n({}, l, {
                    get: function () {
                      return m;
                    },
                    set: function (t) {
                      if ('number' != typeof t && 'auto' !== t)
                        throw new SyntaxError('An invalid number or illegal string was specified.');
                      (m = t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'lineAlign',
                  n({}, l, {
                    get: function () {
                      return y;
                    },
                    set: function (t) {
                      var e = i(t);
                      if (!e) throw new SyntaxError('An invalid or illegal string was specified.');
                      (y = e), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'position',
                  n({}, l, {
                    get: function () {
                      return T;
                    },
                    set: function (t) {
                      if (t < 0 || t > 100) throw new Error('Position must be between 0 and 100.');
                      (T = t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'positionAlign',
                  n({}, l, {
                    get: function () {
                      return b;
                    },
                    set: function (t) {
                      var e = i(t);
                      if (!e) throw new SyntaxError('An invalid or illegal string was specified.');
                      (b = e), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'size',
                  n({}, l, {
                    get: function () {
                      return E;
                    },
                    set: function (t) {
                      if (t < 0 || t > 100) throw new Error('Size must be between 0 and 100.');
                      (E = t), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                Object.defineProperty(
                  o,
                  'align',
                  n({}, l, {
                    get: function () {
                      return S;
                    },
                    set: function (t) {
                      var e = i(t);
                      if (!e) throw new SyntaxError('An invalid or illegal string was specified.');
                      (S = e), (this.hasBeenReset = !0);
                    },
                  }),
                ),
                (o.displayState = void 0);
            }
            return (
              (a.prototype.getCueAsHTML = function () {
                return self.WebVTT.convertCueToDOMTree(self, this.text);
              }),
              a
            );
          })(),
          Ye = (function () {
            function t() {}
            return (
              (t.prototype.decode = function (t, e) {
                if (!t) return '';
                if ('string' != typeof t) throw new Error('Error - expected string data.');
                return decodeURIComponent(encodeURIComponent(t));
              }),
              t
            );
          })();
        function qe(t) {
          function e(t, e, r, i) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | r) + parseFloat(i || 0);
          }
          var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
          return r
            ? parseFloat(r[2]) > 59
              ? e(r[2], r[3], 0, r[4])
              : e(r[1], r[2], r[3], r[4])
            : null;
        }
        var Xe = (function () {
          function t() {
            this.values = Object.create(null);
          }
          var e = t.prototype;
          return (
            (e.set = function (t, e) {
              this.get(t) || '' === e || (this.values[t] = e);
            }),
            (e.get = function (t, e, r) {
              return r ? (this.has(t) ? this.values[t] : e[r]) : this.has(t) ? this.values[t] : e;
            }),
            (e.has = function (t) {
              return t in this.values;
            }),
            (e.alt = function (t, e, r) {
              for (var i = 0; i < r.length; ++i)
                if (e === r[i]) {
                  this.set(t, e);
                  break;
                }
            }),
            (e.integer = function (t, e) {
              /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10));
            }),
            (e.percent = function (t, e) {
              if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                var r = parseFloat(e);
                if (r >= 0 && r <= 100) return this.set(t, r), !0;
              }
              return !1;
            }),
            t
          );
        })();
        function ze(t, e, r, i) {
          var n = i ? t.split(i) : [t];
          for (var a in n)
            if ('string' == typeof n[a]) {
              var s = n[a].split(r);
              if (2 === s.length) e(s[0], s[1]);
            }
        }
        var Qe = new We(0, 0, ''),
          $e = 'middle' === Qe.align ? 'middle' : 'center';
        function Je(t, e, r) {
          var i = t;
          function n() {
            var e = qe(t);
            if (null === e) throw new Error('Malformed timestamp: ' + i);
            return (t = t.replace(/^[^\sa-zA-Z-]+/, '')), e;
          }
          function a() {
            t = t.replace(/^\s+/, '');
          }
          if ((a(), (e.startTime = n()), a(), '--\x3e' !== t.substr(0, 3)))
            throw new Error(
              "Malformed time stamp (time stamps must be separated by '--\x3e'): " + i,
            );
          (t = t.substr(3)),
            a(),
            (e.endTime = n()),
            a(),
            (function (t, e) {
              var i = new Xe();
              ze(
                t,
                function (t, e) {
                  var n;
                  switch (t) {
                    case 'region':
                      for (var a = r.length - 1; a >= 0; a--)
                        if (r[a].id === e) {
                          i.set(t, r[a].region);
                          break;
                        }
                      break;
                    case 'vertical':
                      i.alt(t, e, ['rl', 'lr']);
                      break;
                    case 'line':
                      (n = e.split(',')),
                        i.integer(t, n[0]),
                        i.percent(t, n[0]) && i.set('snapToLines', !1),
                        i.alt(t, n[0], ['auto']),
                        2 === n.length && i.alt('lineAlign', n[1], ['start', $e, 'end']);
                      break;
                    case 'position':
                      (n = e.split(',')),
                        i.percent(t, n[0]),
                        2 === n.length &&
                          i.alt('positionAlign', n[1], [
                            'start',
                            $e,
                            'end',
                            'line-left',
                            'line-right',
                            'auto',
                          ]);
                      break;
                    case 'size':
                      i.percent(t, e);
                      break;
                    case 'align':
                      i.alt(t, e, ['start', $e, 'end', 'left', 'right']);
                  }
                },
                /:/,
                /\s/,
              ),
                (e.region = i.get('region', null)),
                (e.vertical = i.get('vertical', ''));
              var n = i.get('line', 'auto');
              'auto' === n && -1 === Qe.line && (n = -1),
                (e.line = n),
                (e.lineAlign = i.get('lineAlign', 'start')),
                (e.snapToLines = i.get('snapToLines', !0)),
                (e.size = i.get('size', 100)),
                (e.align = i.get('align', $e));
              var a = i.get('position', 'auto');
              'auto' === a &&
                50 === Qe.position &&
                (a =
                  'start' === e.align || 'left' === e.align
                    ? 0
                    : 'end' === e.align || 'right' === e.align
                    ? 100
                    : 50),
                (e.position = a);
            })(t, e);
        }
        function Ze(t) {
          return t.replace(/<br(?: \/)?>/gi, '\n');
        }
        var tr = (function () {
            function t() {
              (this.state = 'INITIAL'),
                (this.buffer = ''),
                (this.decoder = new Ye()),
                (this.regionList = []),
                (this.cue = null),
                (this.oncue = void 0),
                (this.onparsingerror = void 0),
                (this.onflush = void 0);
            }
            var e = t.prototype;
            return (
              (e.parse = function (t) {
                var e = this;
                function r() {
                  var t = e.buffer,
                    r = 0;
                  for (t = Ze(t); r < t.length && '\r' !== t[r] && '\n' !== t[r]; ) ++r;
                  var i = t.substr(0, r);
                  return '\r' === t[r] && ++r, '\n' === t[r] && ++r, (e.buffer = t.substr(r)), i;
                }
                t && (e.buffer += e.decoder.decode(t, { stream: !0 }));
                try {
                  var i = '';
                  if ('INITIAL' === e.state) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    var n = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                    if (!n || !n[0]) throw new Error('Malformed WebVTT signature.');
                    e.state = 'HEADER';
                  }
                  for (var a = !1; e.buffer; ) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    switch ((a ? (a = !1) : (i = r()), e.state)) {
                      case 'HEADER':
                        /:/.test(i) ? ze(i, function (t, e) {}, /:/) : i || (e.state = 'ID');
                        continue;
                      case 'NOTE':
                        i || (e.state = 'ID');
                        continue;
                      case 'ID':
                        if (/^NOTE($|[ \t])/.test(i)) {
                          e.state = 'NOTE';
                          break;
                        }
                        if (!i) continue;
                        if (
                          ((e.cue = new We(0, 0, '')),
                          (e.state = 'CUE'),
                          -1 === i.indexOf('--\x3e'))
                        ) {
                          e.cue.id = i;
                          continue;
                        }
                      case 'CUE':
                        if (!e.cue) {
                          e.state = 'BADCUE';
                          continue;
                        }
                        try {
                          Je(i, e.cue, e.regionList);
                        } catch (t) {
                          (e.cue = null), (e.state = 'BADCUE');
                          continue;
                        }
                        e.state = 'CUETEXT';
                        continue;
                      case 'CUETEXT':
                        var s = -1 !== i.indexOf('--\x3e');
                        if (!i || (s && (a = !0))) {
                          e.oncue && e.cue && e.oncue(e.cue), (e.cue = null), (e.state = 'ID');
                          continue;
                        }
                        if (null === e.cue) continue;
                        e.cue.text && (e.cue.text += '\n'), (e.cue.text += i);
                        continue;
                      case 'BADCUE':
                        i || (e.state = 'ID');
                    }
                  }
                } catch (t) {
                  'CUETEXT' === e.state && e.cue && e.oncue && e.oncue(e.cue),
                    (e.cue = null),
                    (e.state = 'INITIAL' === e.state ? 'BADWEBVTT' : 'BADCUE');
                }
                return this;
              }),
              (e.flush = function () {
                try {
                  if (
                    ((this.cue || 'HEADER' === this.state) &&
                      ((this.buffer += '\n\n'), this.parse()),
                    'INITIAL' === this.state || 'BADWEBVTT' === this.state)
                  )
                    throw new Error('Malformed WebVTT signature.');
                } catch (t) {
                  this.onparsingerror && this.onparsingerror(t);
                }
                return this.onflush && this.onflush(), this;
              }),
              t
            );
          })(),
          er = r(8),
          rr = r(16),
          ir = /\r\n|\n\r|\n|\r/g,
          nr = function (t, e, r) {
            return void 0 === r && (r = 0), t.substr(r, e.length) === e;
          },
          ar = function (t) {
            for (var e = 5381, r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
            return (e >>> 0).toString();
          };
        function sr(t, e, r) {
          return ar(t.toString()) + ar(e.toString()) + ar(r);
        }
        function or(t, e, r, i, a, s, o, l) {
          var u,
            h = new tr(),
            d = Object(M.f)(new Uint8Array(t)).trim().replace(ir, '\n').split('\n'),
            c = [],
            f = Object(er.a)(e, r),
            g = '00:00.000',
            v = 0,
            p = 0,
            m = !0,
            y = !1;
          (h.oncue = function (t) {
            var e = i[a],
              r = i.ccOffset,
              n = (v - f) / 9e4;
            if (
              (null != e &&
                e.new &&
                (void 0 !== p
                  ? (r = i.ccOffset = e.start)
                  : (function (t, e, r) {
                      var i = t[e],
                        n = t[i.prevCC];
                      if (!n || (!n.new && i.new))
                        return (t.ccOffset = t.presentationOffset = i.start), void (i.new = !1);
                      for (; null !== (a = n) && void 0 !== a && a.new; ) {
                        var a;
                        (t.ccOffset += i.start - n.start), (i.new = !1), (n = t[(i = n).prevCC]);
                      }
                      t.presentationOffset = r;
                    })(i, a, n)),
              n && (r = n - i.presentationOffset),
              y)
            ) {
              var o = t.endTime - t.startTime,
                l = Object(rr.b)(9e4 * (t.startTime + r - p), 9e4 * s) / 9e4;
              (t.startTime = l), (t.endTime = l + o);
            }
            var u = t.text.trim();
            (t.text = decodeURIComponent(encodeURIComponent(u))),
              t.id || (t.id = sr(t.startTime, t.endTime, u)),
              t.endTime > 0 && c.push(t);
          }),
            (h.onparsingerror = function (t) {
              u = t;
            }),
            (h.onflush = function () {
              u ? l(u) : o(c);
            }),
            d.forEach(function (t) {
              if (m) {
                if (nr(t, 'X-TIMESTAMP-MAP=')) {
                  (m = !1),
                    (y = !0),
                    t
                      .substr(16)
                      .split(',')
                      .forEach(function (t) {
                        nr(t, 'LOCAL:')
                          ? (g = t.substr(6))
                          : nr(t, 'MPEGTS:') && (v = parseInt(t.substr(7)));
                      });
                  try {
                    p =
                      (function (t) {
                        var e = parseInt(t.substr(-3)),
                          r = parseInt(t.substr(-6, 2)),
                          i = parseInt(t.substr(-9, 2)),
                          a = t.length > 9 ? parseInt(t.substr(0, t.indexOf(':'))) : 0;
                        if (!(Object(n.a)(e) && Object(n.a)(r) && Object(n.a)(i) && Object(n.a)(a)))
                          throw Error('Malformed X-TIMESTAMP-MAP: Local:' + t);
                        return (e += 1e3 * r), (e += 6e4 * i), (e += 36e5 * a);
                      })(g) / 1e3;
                  } catch (t) {
                    (y = !1), (u = t);
                  }
                  return;
                }
                '' === t && (m = !1);
              }
              h.parse(t + '\n');
            }),
            h.flush();
        }
        function lr() {
          return (lr =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        var ur = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
          hr = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
          dr = { left: 'start', center: 'center', right: 'end', start: 'start', end: 'end' };
        function cr(t, e, r, i, n) {
          var a = Object(l.b)(new Uint8Array(t), ['mdat']);
          if (0 !== a.length) {
            var s = a[0],
              o = Object(M.f)(new Uint8Array(t, s.start, s.end - s.start)),
              u = Object(er.c)(e, 1, r);
            try {
              i(
                (function (t, e) {
                  var r = new DOMParser()
                    .parseFromString(t, 'text/xml')
                    .getElementsByTagName('tt')[0];
                  if (!r) throw new Error('Invalid ttml');
                  var i = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 },
                    n = Object.keys(i).reduce(function (t, e) {
                      return (t[e] = r.getAttribute('ttp:' + e) || i[e]), t;
                    }, {}),
                    a = 'preserve' !== r.getAttribute('xml:space'),
                    s = gr(fr(r, 'styling', 'style')),
                    o = gr(fr(r, 'layout', 'region')),
                    l = fr(r, 'body', '[begin]');
                  return [].map
                    .call(l, function (t) {
                      var r = (function t(e, r) {
                        return [].slice.call(e.childNodes).reduce(function (e, i, n) {
                          var a;
                          return 'br' === i.nodeName && n
                            ? e + '\n'
                            : null !== (a = i.childNodes) && void 0 !== a && a.length
                            ? t(i, r)
                            : r
                            ? e + i.textContent.trim().replace(/\s+/g, ' ')
                            : e + i.textContent;
                        }, '');
                      })(t, a);
                      if (!r || !t.hasAttribute('begin')) return null;
                      var i = mr(t.getAttribute('begin'), n),
                        l = mr(t.getAttribute('dur'), n),
                        u = mr(t.getAttribute('end'), n);
                      if (null === i) throw pr(t);
                      if (null === u) {
                        if (null === l) throw pr(t);
                        u = i + l;
                      }
                      var h = new We(i - e, u - e, r);
                      h.id = sr(h.startTime, h.endTime, h.text);
                      var d = o[t.getAttribute('region')],
                        c = s[t.getAttribute('style')];
                      (h.position = 10), (h.size = 80);
                      var f = (function (t, e) {
                          var r = 'http://www.w3.org/ns/ttml#styling';
                          return [
                            'displayAlign',
                            'textAlign',
                            'color',
                            'backgroundColor',
                            'fontSize',
                            'fontFamily',
                          ].reduce(function (i, n) {
                            var a = vr(e, r, n) || vr(t, r, n);
                            return a && (i[n] = a), i;
                          }, {});
                        })(d, c),
                        g = f.textAlign;
                      if (g) {
                        var v = dr[g];
                        v && (h.lineAlign = v), (h.align = g);
                      }
                      return lr(h, f), h;
                    })
                    .filter(function (t) {
                      return null !== t;
                    });
                })(o, u),
              );
            } catch (t) {
              n(t);
            }
          } else n(new Error('Could not parse IMSC1 mdat'));
        }
        function fr(t, e, r) {
          var i = t.getElementsByTagName(e)[0];
          return i ? [].slice.call(i.querySelectorAll(r)) : [];
        }
        function gr(t) {
          return t.reduce(function (t, e) {
            var r = e.getAttribute('xml:id');
            return r && (t[r] = e), t;
          }, {});
        }
        function vr(t, e, r) {
          return t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null;
        }
        function pr(t) {
          return new Error('Could not parse ttml timestamp ' + t);
        }
        function mr(t, e) {
          if (!t) return null;
          var r = qe(t);
          return (
            null === r &&
              (ur.test(t)
                ? (r = (function (t, e) {
                    var r = ur.exec(t),
                      i = (0 | r[4]) + (0 | r[5]) / e.subFrameRate;
                    return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + i / e.frameRate;
                  })(t, e))
                : hr.test(t) &&
                  (r = (function (t, e) {
                    var r = hr.exec(t),
                      i = Number(r[1]);
                    switch (r[2]) {
                      case 'h':
                        return 3600 * i;
                      case 'm':
                        return 60 * i;
                      case 'ms':
                        return 1e3 * i;
                      case 'f':
                        return i / e.frameRate;
                      case 't':
                        return i / e.tickRate;
                    }
                    return i;
                  })(t, e))),
            r
          );
        }
        var yr = (function () {
          function t(t) {
            if (
              ((this.hls = void 0),
              (this.media = null),
              (this.config = void 0),
              (this.enabled = !0),
              (this.Cues = void 0),
              (this.textTracks = []),
              (this.tracks = []),
              (this.initPTS = []),
              (this.timescale = []),
              (this.unparsedVttFrags = []),
              (this.captionsTracks = {}),
              (this.nonNativeCaptionsTracks = {}),
              (this.cea608Parser1 = void 0),
              (this.cea608Parser2 = void 0),
              (this.lastSn = -1),
              (this.prevCC = -1),
              (this.vttCCs = {
                ccOffset: 0,
                presentationOffset: 0,
                0: { start: 0, prevCC: -1, new: !1 },
              }),
              (this.captionsProperties = void 0),
              (this.hls = t),
              (this.config = t.config),
              (this.Cues = t.config.cueHandler),
              (this.captionsProperties = {
                textTrack1: {
                  label: this.config.captionsTextTrack1Label,
                  languageCode: this.config.captionsTextTrack1LanguageCode,
                },
                textTrack2: {
                  label: this.config.captionsTextTrack2Label,
                  languageCode: this.config.captionsTextTrack2LanguageCode,
                },
                textTrack3: {
                  label: this.config.captionsTextTrack3Label,
                  languageCode: this.config.captionsTextTrack3LanguageCode,
                },
                textTrack4: {
                  label: this.config.captionsTextTrack4Label,
                  languageCode: this.config.captionsTextTrack4LanguageCode,
                },
              }),
              this.config.enableCEA708Captions)
            ) {
              var e = new Ve(this, 'textTrack1'),
                r = new Ve(this, 'textTrack2'),
                i = new Ve(this, 'textTrack3'),
                n = new Ve(this, 'textTrack4');
              (this.cea608Parser1 = new He(1, e, r)), (this.cea608Parser2 = new He(3, i, n));
            }
            t.on(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this),
              t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
              t.on(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
              t.on(a.a.MANIFEST_LOADED, this.onManifestLoaded, this),
              t.on(a.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
              t.on(a.a.FRAG_LOADING, this.onFragLoading, this),
              t.on(a.a.FRAG_LOADED, this.onFragLoaded, this),
              t.on(a.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
              t.on(a.a.FRAG_DECRYPTED, this.onFragDecrypted, this),
              t.on(a.a.INIT_PTS_FOUND, this.onInitPtsFound, this),
              t.on(a.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
              t.on(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              var t = this.hls;
              t.off(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this),
                t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this),
                t.off(a.a.MANIFEST_LOADING, this.onManifestLoading, this),
                t.off(a.a.MANIFEST_LOADED, this.onManifestLoaded, this),
                t.off(a.a.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this),
                t.off(a.a.FRAG_LOADING, this.onFragLoading, this),
                t.off(a.a.FRAG_LOADED, this.onFragLoaded, this),
                t.off(a.a.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this),
                t.off(a.a.FRAG_DECRYPTED, this.onFragDecrypted, this),
                t.off(a.a.INIT_PTS_FOUND, this.onInitPtsFound, this),
                t.off(a.a.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this),
                t.off(a.a.BUFFER_FLUSHING, this.onBufferFlushing, this),
                (this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null);
            }),
            (e.addCues = function (t, e, r, i, n) {
              for (var s, o, l, u, h = !1, d = n.length; d--; ) {
                var c = n[d],
                  f = ((s = c[0]), (o = c[1]), (l = e), (u = r), Math.min(o, u) - Math.max(s, l));
                if (
                  f >= 0 &&
                  ((c[0] = Math.min(c[0], e)),
                  (c[1] = Math.max(c[1], r)),
                  (h = !0),
                  f / (r - e) > 0.5)
                )
                  return;
              }
              if ((h || n.push([e, r]), this.config.renderTextTracksNatively)) {
                var g = this.captionsTracks[t];
                this.Cues.newCue(g, e, r, i);
              } else {
                var v = this.Cues.newCue(null, e, r, i);
                this.hls.trigger(a.a.CUES_PARSED, { type: 'captions', cues: v, track: t });
              }
            }),
            (e.onInitPtsFound = function (t, e) {
              var r = this,
                i = e.frag,
                n = e.id,
                s = e.initPTS,
                o = e.timescale,
                l = this.unparsedVttFrags;
              'main' === n && ((this.initPTS[i.cc] = s), (this.timescale[i.cc] = o)),
                l.length &&
                  ((this.unparsedVttFrags = []),
                  l.forEach(function (t) {
                    r.onFragLoaded(a.a.FRAG_LOADED, t);
                  }));
            }),
            (e.getExistingTrack = function (t) {
              var e = this.media;
              if (e)
                for (var r = 0; r < e.textTracks.length; r++) {
                  var i = e.textTracks[r];
                  if (i[t]) return i;
                }
              return null;
            }),
            (e.createCaptionsTrack = function (t) {
              this.config.renderTextTracksNatively
                ? this.createNativeTrack(t)
                : this.createNonNativeTrack(t);
            }),
            (e.createNativeTrack = function (t) {
              if (!this.captionsTracks[t]) {
                var e = this.captionsProperties,
                  r = this.captionsTracks,
                  i = this.media,
                  n = e[t],
                  a = n.label,
                  s = n.languageCode,
                  o = this.getExistingTrack(t);
                if (o) (r[t] = o), x(r[t]), w(r[t], i);
                else {
                  var l = this.createTextTrack('captions', a, s);
                  l && ((l[t] = !0), (r[t] = l));
                }
              }
            }),
            (e.createNonNativeTrack = function (t) {
              if (!this.nonNativeCaptionsTracks[t]) {
                var e = this.captionsProperties[t];
                if (e) {
                  var r = {
                    _id: t,
                    label: e.label,
                    kind: 'captions',
                    default: !!e.media && !!e.media.default,
                    closedCaptions: e.media,
                  };
                  (this.nonNativeCaptionsTracks[t] = r),
                    this.hls.trigger(a.a.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [r] });
                }
              }
            }),
            (e.createTextTrack = function (t, e, r) {
              var i = this.media;
              if (i) return i.addTextTrack(t, e, r);
            }),
            (e.onMediaAttaching = function (t, e) {
              (this.media = e.media), this._cleanTracks();
            }),
            (e.onMediaDetaching = function () {
              var t = this.captionsTracks;
              Object.keys(t).forEach(function (e) {
                x(t[e]), delete t[e];
              }),
                (this.nonNativeCaptionsTracks = {});
            }),
            (e.onManifestLoading = function () {
              (this.lastSn = -1),
                (this.prevCC = -1),
                (this.vttCCs = {
                  ccOffset: 0,
                  presentationOffset: 0,
                  0: { start: 0, prevCC: -1, new: !1 },
                }),
                this._cleanTracks(),
                (this.tracks = []),
                (this.captionsTracks = {}),
                (this.nonNativeCaptionsTracks = {}),
                (this.textTracks = []),
                (this.unparsedVttFrags = this.unparsedVttFrags || []),
                (this.initPTS = []),
                (this.timescale = []),
                this.cea608Parser1 &&
                  this.cea608Parser2 &&
                  (this.cea608Parser1.reset(), this.cea608Parser2.reset());
            }),
            (e._cleanTracks = function () {
              var t = this.media;
              if (t) {
                var e = t.textTracks;
                if (e) for (var r = 0; r < e.length; r++) x(e[r]);
              }
            }),
            (e.onSubtitleTracksUpdated = function (t, e) {
              var r = this;
              this.textTracks = [];
              var i = e.subtitleTracks || [],
                n = i.some(function (t) {
                  return 'stpp.ttml.im1t' === t.textCodec;
                });
              if (this.config.enableWebVTT || (n && this.config.enableIMSC1)) {
                var s = this.tracks && i && this.tracks.length === i.length;
                if (((this.tracks = i || []), this.config.renderTextTracksNatively)) {
                  var o = this.media ? this.media.textTracks : [];
                  this.tracks.forEach(function (t, e) {
                    var i;
                    if (e < o.length) {
                      for (var n = null, a = 0; a < o.length; a++)
                        if (Tr(o[a], t)) {
                          n = o[a];
                          break;
                        }
                      n && (i = n);
                    }
                    i
                      ? x(i)
                      : (i = r.createTextTrack('subtitles', t.name, t.lang)) &&
                        (i.mode = 'disabled'),
                      i && ((i.groupId = t.groupId), r.textTracks.push(i));
                  });
                } else if (!s && this.tracks && this.tracks.length) {
                  var l = this.tracks.map(function (t) {
                    return {
                      label: t.name,
                      kind: t.type.toLowerCase(),
                      default: t.default,
                      subtitleTrack: t,
                    };
                  });
                  this.hls.trigger(a.a.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: l });
                }
              }
            }),
            (e.onManifestLoaded = function (t, e) {
              var r = this;
              this.config.enableCEA708Captions &&
                e.captions &&
                e.captions.forEach(function (t) {
                  var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                  if (e) {
                    var i = 'textTrack' + e[1],
                      n = r.captionsProperties[i];
                    n && ((n.label = t.name), t.lang && (n.languageCode = t.lang), (n.media = t));
                  }
                });
            }),
            (e.onFragLoading = function (t, e) {
              var r = this.cea608Parser1,
                i = this.cea608Parser2,
                n = this.lastSn;
              if (this.enabled && r && i && e.frag.type === k.b.MAIN) {
                var a = e.frag.sn;
                a !== n + 1 && (r.reset(), i.reset()), (this.lastSn = a);
              }
            }),
            (e.onFragLoaded = function (t, e) {
              var r = e.frag,
                i = e.payload,
                s = this.initPTS,
                o = this.unparsedVttFrags;
              if (r.type === k.b.SUBTITLE)
                if (i.byteLength) {
                  if (!Object(n.a)(s[r.cc]))
                    return (
                      o.push(e),
                      void (
                        s.length &&
                        this.hls.trigger(a.a.SUBTITLE_FRAG_PROCESSED, {
                          success: !1,
                          frag: r,
                          error: new Error('Missing initial subtitle PTS'),
                        })
                      )
                    );
                  var l = r.decryptdata;
                  if (null == l || null == l.key || 'AES-128' !== l.method) {
                    var u = this.tracks[r.level],
                      h = this.vttCCs;
                    h[r.cc] ||
                      ((h[r.cc] = { start: r.start, prevCC: this.prevCC, new: !0 }),
                      (this.prevCC = r.cc)),
                      u && 'stpp.ttml.im1t' === u.textCodec
                        ? this._parseIMSC1(r, i)
                        : this._parseVTTs(r, i, h);
                  }
                } else
                  this.hls.trigger(a.a.SUBTITLE_FRAG_PROCESSED, {
                    success: !1,
                    frag: r,
                    error: new Error('Empty subtitle payload'),
                  });
            }),
            (e._parseIMSC1 = function (t, e) {
              var r = this,
                i = this.hls;
              cr(
                e,
                this.initPTS[t.cc],
                this.timescale[t.cc],
                function (e) {
                  r._appendCues(e, t.level),
                    i.trigger(a.a.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: t });
                },
                function (e) {
                  o.b.log('Failed to parse IMSC1: ' + e),
                    i.trigger(a.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t, error: e });
                },
              );
            }),
            (e._parseVTTs = function (t, e, r) {
              var i = this,
                n = this.hls;
              or(
                e,
                this.initPTS[t.cc],
                this.timescale[t.cc],
                r,
                t.cc,
                t.start,
                function (e) {
                  i._appendCues(e, t.level),
                    n.trigger(a.a.SUBTITLE_FRAG_PROCESSED, { success: !0, frag: t });
                },
                function (r) {
                  i._fallbackToIMSC1(t, e),
                    o.b.log('Failed to parse VTT cue: ' + r),
                    n.trigger(a.a.SUBTITLE_FRAG_PROCESSED, { success: !1, frag: t, error: r });
                },
              );
            }),
            (e._fallbackToIMSC1 = function (t, e) {
              var r = this,
                i = this.tracks[t.level];
              i.textCodec ||
                cr(
                  e,
                  this.initPTS[t.cc],
                  this.timescale[t.cc],
                  function () {
                    (i.textCodec = 'stpp.ttml.im1t'), r._parseIMSC1(t, e);
                  },
                  function () {
                    i.textCodec = 'wvtt';
                  },
                );
            }),
            (e._appendCues = function (t, e) {
              var r = this.hls;
              if (this.config.renderTextTracksNatively) {
                var i = this.textTracks[e];
                if ('disabled' === i.mode) return;
                t.forEach(function (t) {
                  return O(i, t);
                });
              } else {
                var n = this.tracks[e].default ? 'default' : 'subtitles' + e;
                r.trigger(a.a.CUES_PARSED, { type: 'subtitles', cues: t, track: n });
              }
            }),
            (e.onFragDecrypted = function (t, e) {
              var r = e.frag;
              if (r.type === k.b.SUBTITLE) {
                if (!Object(n.a)(this.initPTS[r.cc])) return void this.unparsedVttFrags.push(e);
                this.onFragLoaded(a.a.FRAG_LOADED, e);
              }
            }),
            (e.onSubtitleTracksCleared = function () {
              (this.tracks = []), (this.captionsTracks = {});
            }),
            (e.onFragParsingUserdata = function (t, e) {
              var r = this.cea608Parser1,
                i = this.cea608Parser2;
              if (this.enabled && r && i)
                for (var n = 0; n < e.samples.length; n++) {
                  var a = e.samples[n].bytes;
                  if (a) {
                    var s = this.extractCea608Data(a);
                    r.addData(e.samples[n].pts, s[0]), i.addData(e.samples[n].pts, s[1]);
                  }
                }
            }),
            (e.onBufferFlushing = function (t, e) {
              var r = e.startOffset,
                i = e.endOffset,
                n = e.endOffsetSubtitles,
                a = e.type,
                s = this.media;
              if (s && !(s.currentTime < i)) {
                if (!a || 'video' === a) {
                  var o = this.captionsTracks;
                  Object.keys(o).forEach(function (t) {
                    return P(o[t], r, i);
                  });
                }
                if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                  var l = this.textTracks;
                  Object.keys(l).forEach(function (t) {
                    return P(l[t], r, n);
                  });
                }
              }
            }),
            (e.extractCea608Data = function (t) {
              for (var e = 31 & t[0], r = 2, i = [[], []], n = 0; n < e; n++) {
                var a = t[r++],
                  s = 127 & t[r++],
                  o = 127 & t[r++],
                  l = 3 & a;
                (0 === s && 0 === o) ||
                  (0 != (4 & a) && ((0 !== l && 1 !== l) || (i[l].push(s), i[l].push(o))));
              }
              return i;
            }),
            t
          );
        })();
        function Tr(t, e) {
          return t && t.label === e.name && !(t.textTrack1 || t.textTrack2);
        }
        function br(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var Er,
          Sr = (function () {
            function t(t) {
              (this.autoLevelCapping = void 0),
                (this.firstLevel = void 0),
                (this.media = void 0),
                (this.restrictedLevels = void 0),
                (this.timer = void 0),
                (this.hls = void 0),
                (this.streamController = void 0),
                (this.clientRect = void 0),
                (this.hls = t),
                (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                (this.firstLevel = -1),
                (this.media = null),
                (this.restrictedLevels = []),
                (this.timer = void 0),
                (this.clientRect = null),
                this.registerListeners();
            }
            var e,
              r,
              i,
              n = t.prototype;
            return (
              (n.setStreamController = function (t) {
                this.streamController = t;
              }),
              (n.destroy = function () {
                this.unregisterListener(),
                  this.hls.config.capLevelToPlayerSize && this.stopCapping(),
                  (this.media = null),
                  (this.clientRect = null),
                  (this.hls = this.streamController = null);
              }),
              (n.registerListeners = function () {
                var t = this.hls;
                t.on(a.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                  t.on(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  t.on(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.on(a.a.BUFFER_CODECS, this.onBufferCodecs, this),
                  t.on(a.a.MEDIA_DETACHING, this.onMediaDetaching, this);
              }),
              (n.unregisterListener = function () {
                var t = this.hls;
                t.off(a.a.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this),
                  t.off(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this),
                  t.off(a.a.MANIFEST_PARSED, this.onManifestParsed, this),
                  t.off(a.a.BUFFER_CODECS, this.onBufferCodecs, this),
                  t.off(a.a.MEDIA_DETACHING, this.onMediaDetaching, this);
              }),
              (n.onFpsDropLevelCapping = function (e, r) {
                t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) &&
                  this.restrictedLevels.push(r.droppedLevel);
              }),
              (n.onMediaAttaching = function (t, e) {
                this.media = e.media instanceof HTMLVideoElement ? e.media : null;
              }),
              (n.onManifestParsed = function (t, e) {
                var r = this.hls;
                (this.restrictedLevels = []),
                  (this.firstLevel = e.firstLevel),
                  r.config.capLevelToPlayerSize && e.video && this.startCapping();
              }),
              (n.onBufferCodecs = function (t, e) {
                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping();
              }),
              (n.onMediaDetaching = function () {
                this.stopCapping();
              }),
              (n.detectPlayerSize = function () {
                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                  var t = this.hls.levels;
                  if (t.length) {
                    var e = this.hls;
                    (e.autoLevelCapping = this.getMaxLevel(t.length - 1)),
                      e.autoLevelCapping > this.autoLevelCapping &&
                        this.streamController &&
                        this.streamController.nextLevelSwitch(),
                      (this.autoLevelCapping = e.autoLevelCapping);
                  }
                }
              }),
              (n.getMaxLevel = function (e) {
                var r = this,
                  i = this.hls.levels;
                if (!i.length) return -1;
                var n = i.filter(function (i, n) {
                  return t.isLevelAllowed(n, r.restrictedLevels) && n <= e;
                });
                return (
                  (this.clientRect = null),
                  t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                );
              }),
              (n.startCapping = function () {
                this.timer ||
                  ((this.autoLevelCapping = Number.POSITIVE_INFINITY),
                  (this.hls.firstLevel = this.getMaxLevel(this.firstLevel)),
                  self.clearInterval(this.timer),
                  (this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3)),
                  this.detectPlayerSize());
              }),
              (n.stopCapping = function () {
                (this.restrictedLevels = []),
                  (this.firstLevel = -1),
                  (this.autoLevelCapping = Number.POSITIVE_INFINITY),
                  this.timer && (self.clearInterval(this.timer), (this.timer = void 0));
              }),
              (n.getDimensions = function () {
                if (this.clientRect) return this.clientRect;
                var t = this.media,
                  e = { width: 0, height: 0 };
                if (t) {
                  var r = t.getBoundingClientRect();
                  (e.width = r.width),
                    (e.height = r.height),
                    e.width ||
                      e.height ||
                      ((e.width = r.right - r.left || t.width || 0),
                      (e.height = r.bottom - r.top || t.height || 0));
                }
                return (this.clientRect = e), e;
              }),
              (t.isLevelAllowed = function (t, e) {
                return void 0 === e && (e = []), -1 === e.indexOf(t);
              }),
              (t.getMaxLevelByMediaSize = function (t, e, r) {
                if (!t || !t.length) return -1;
                for (var i, n, a = t.length - 1, s = 0; s < t.length; s += 1) {
                  var o = t[s];
                  if (
                    (o.width >= e || o.height >= r) &&
                    ((i = o), !(n = t[s + 1]) || i.width !== n.width || i.height !== n.height)
                  ) {
                    a = s;
                    break;
                  }
                }
                return a;
              }),
              (e = t),
              (i = [
                {
                  key: 'contentScaleFactor',
                  get: function () {
                    var t = 1;
                    try {
                      t = self.devicePixelRatio;
                    } catch (t) {}
                    return t;
                  },
                },
              ]),
              (r = [
                {
                  key: 'mediaWidth',
                  get: function () {
                    return this.getDimensions().width * t.contentScaleFactor;
                  },
                },
                {
                  key: 'mediaHeight',
                  get: function () {
                    return this.getDimensions().height * t.contentScaleFactor;
                  },
                },
              ]) && br(e.prototype, r),
              i && br(e, i),
              t
            );
          })(),
          Lr = (function () {
            function t(t) {
              (this.hls = void 0),
                (this.isVideoPlaybackQualityAvailable = !1),
                (this.timer = void 0),
                (this.media = null),
                (this.lastTime = void 0),
                (this.lastDroppedFrames = 0),
                (this.lastDecodedFrames = 0),
                (this.streamController = void 0),
                (this.hls = t),
                this.registerListeners();
            }
            var e = t.prototype;
            return (
              (e.setStreamController = function (t) {
                this.streamController = t;
              }),
              (e.registerListeners = function () {
                this.hls.on(a.a.MEDIA_ATTACHING, this.onMediaAttaching, this);
              }),
              (e.unregisterListeners = function () {
                this.hls.off(a.a.MEDIA_ATTACHING, this.onMediaAttaching);
              }),
              (e.destroy = function () {
                this.timer && clearInterval(this.timer),
                  this.unregisterListeners(),
                  (this.isVideoPlaybackQualityAvailable = !1),
                  (this.media = null);
              }),
              (e.onMediaAttaching = function (t, e) {
                var r = this.hls.config;
                if (r.capLevelOnFPSDrop) {
                  var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                  (this.media = i),
                    i &&
                      'function' == typeof i.getVideoPlaybackQuality &&
                      (this.isVideoPlaybackQualityAvailable = !0),
                    self.clearInterval(this.timer),
                    (this.timer = self.setInterval(
                      this.checkFPSInterval.bind(this),
                      r.fpsDroppedMonitoringPeriod,
                    ));
                }
              }),
              (e.checkFPS = function (t, e, r) {
                var i = performance.now();
                if (e) {
                  if (this.lastTime) {
                    var n = i - this.lastTime,
                      s = r - this.lastDroppedFrames,
                      l = e - this.lastDecodedFrames,
                      u = (1e3 * s) / n,
                      h = this.hls;
                    if (
                      (h.trigger(a.a.FPS_DROP, {
                        currentDropped: s,
                        currentDecoded: l,
                        totalDroppedFrames: r,
                      }),
                      u > 0 && s > h.config.fpsDroppedMonitoringThreshold * l)
                    ) {
                      var d = h.currentLevel;
                      o.b.warn(
                        'drop FPS ratio greater than max allowed value for currentLevel: ' + d,
                      ),
                        d > 0 &&
                          (-1 === h.autoLevelCapping || h.autoLevelCapping >= d) &&
                          ((d -= 1),
                          h.trigger(a.a.FPS_DROP_LEVEL_CAPPING, {
                            level: d,
                            droppedLevel: h.currentLevel,
                          }),
                          (h.autoLevelCapping = d),
                          this.streamController.nextLevelSwitch());
                    }
                  }
                  (this.lastTime = i), (this.lastDroppedFrames = r), (this.lastDecodedFrames = e);
                }
              }),
              (e.checkFPSInterval = function () {
                var t = this.media;
                if (t)
                  if (this.isVideoPlaybackQualityAvailable) {
                    var e = t.getVideoPlaybackQuality();
                    this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames);
                  } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount);
              }),
              t
            );
          })();
        !(function (t) {
          (t.WIDEVINE = 'com.widevine.alpha'), (t.PLAYREADY = 'com.microsoft.playready');
        })(Er || (Er = {}));
        var Ar =
          'undefined' != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess
            ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator)
            : null;
        function Rr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var Dr,
          kr,
          _r,
          Ir = (function () {
            function t(t) {
              (this.hls = void 0),
                (this._widevineLicenseUrl = void 0),
                (this._licenseXhrSetup = void 0),
                (this._licenseResponseCallback = void 0),
                (this._emeEnabled = void 0),
                (this._requestMediaKeySystemAccess = void 0),
                (this._drmSystemOptions = void 0),
                (this._config = void 0),
                (this._mediaKeysList = []),
                (this._media = null),
                (this._hasSetMediaKeys = !1),
                (this._requestLicenseFailureCount = 0),
                (this.mediaKeysPromise = null),
                (this._onMediaEncrypted = this.onMediaEncrypted.bind(this)),
                (this.hls = t),
                (this._config = t.config),
                (this._widevineLicenseUrl = this._config.widevineLicenseUrl),
                (this._licenseXhrSetup = this._config.licenseXhrSetup),
                (this._licenseResponseCallback = this._config.licenseResponseCallback),
                (this._emeEnabled = this._config.emeEnabled),
                (this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc),
                (this._drmSystemOptions = this._config.drmSystemOptions),
                this._registerListeners();
            }
            var e,
              r,
              i,
              n = t.prototype;
            return (
              (n.destroy = function () {
                this._unregisterListeners(),
                  (this.hls = this._onMediaEncrypted = null),
                  (this._requestMediaKeySystemAccess = null);
              }),
              (n._registerListeners = function () {
                this.hls.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  this.hls.on(a.a.MEDIA_DETACHED, this.onMediaDetached, this),
                  this.hls.on(a.a.MANIFEST_PARSED, this.onManifestParsed, this);
              }),
              (n._unregisterListeners = function () {
                this.hls.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  this.hls.off(a.a.MEDIA_DETACHED, this.onMediaDetached, this),
                  this.hls.off(a.a.MANIFEST_PARSED, this.onManifestParsed, this);
              }),
              (n.getLicenseServerUrl = function (t) {
                switch (t) {
                  case Er.WIDEVINE:
                    if (!this._widevineLicenseUrl) break;
                    return this._widevineLicenseUrl;
                }
                throw new Error('no license server URL configured for key-system "' + t + '"');
              }),
              (n._attemptKeySystemAccess = function (t, e, r) {
                var i = this,
                  n = (function (t, e, r, i) {
                    switch (t) {
                      case Er.WIDEVINE:
                        return (function (t, e, r) {
                          var i = { audioCapabilities: [], videoCapabilities: [] };
                          return (
                            t.forEach(function (t) {
                              i.audioCapabilities.push({
                                contentType: 'audio/mp4; codecs="' + t + '"',
                                robustness: r.audioRobustness || '',
                              });
                            }),
                            e.forEach(function (t) {
                              i.videoCapabilities.push({
                                contentType: 'video/mp4; codecs="' + t + '"',
                                robustness: r.videoRobustness || '',
                              });
                            }),
                            [i]
                          );
                        })(e, r, i);
                      default:
                        throw new Error('Unknown key-system: ' + t);
                    }
                  })(t, e, r, this._drmSystemOptions);
                o.b.log('Requesting encrypted media key-system access');
                var a = this.requestMediaKeySystemAccess(t, n);
                (this.mediaKeysPromise = a.then(function (e) {
                  return i._onMediaKeySystemAccessObtained(t, e);
                })),
                  a.catch(function (e) {
                    o.b.error('Failed to obtain key-system "' + t + '" access:', e);
                  });
              }),
              (n._onMediaKeySystemAccessObtained = function (t, e) {
                var r = this;
                o.b.log('Access for key-system "' + t + '" obtained');
                var i = {
                  mediaKeysSessionInitialized: !1,
                  mediaKeySystemAccess: e,
                  mediaKeySystemDomain: t,
                };
                this._mediaKeysList.push(i);
                var n = Promise.resolve()
                  .then(function () {
                    return e.createMediaKeys();
                  })
                  .then(function (e) {
                    return (
                      (i.mediaKeys = e),
                      o.b.log('Media-keys created for key-system "' + t + '"'),
                      r._onMediaKeysCreated(),
                      e
                    );
                  });
                return (
                  n.catch(function (t) {
                    o.b.error('Failed to create media-keys:', t);
                  }),
                  n
                );
              }),
              (n._onMediaKeysCreated = function () {
                var t = this;
                this._mediaKeysList.forEach(function (e) {
                  e.mediaKeysSession ||
                    ((e.mediaKeysSession = e.mediaKeys.createSession()),
                    t._onNewMediaKeySession(e.mediaKeysSession));
                });
              }),
              (n._onNewMediaKeySession = function (t) {
                var e = this;
                o.b.log('New key-system session ' + t.sessionId),
                  t.addEventListener(
                    'message',
                    function (r) {
                      e._onKeySessionMessage(t, r.message);
                    },
                    !1,
                  );
              }),
              (n._onKeySessionMessage = function (t, e) {
                o.b.log('Got EME message event, creating license request'),
                  this._requestLicense(e, function (e) {
                    o.b.log(
                      'Received license data (length: ' +
                        (e ? e.byteLength : e) +
                        '), updating key-session',
                    ),
                      t.update(e);
                  });
              }),
              (n.onMediaEncrypted = function (t) {
                var e = this;
                if (
                  (o.b.log('Media is encrypted using "' + t.initDataType + '" init data type'),
                  !this.mediaKeysPromise)
                )
                  return (
                    o.b.error(
                      'Fatal: Media is encrypted but no CDM access or no keys have been requested',
                    ),
                    void this.hls.trigger(a.a.ERROR, {
                      type: s.b.KEY_SYSTEM_ERROR,
                      details: s.a.KEY_SYSTEM_NO_KEYS,
                      fatal: !0,
                    })
                  );
                var r = function (r) {
                  e._media &&
                    (e._attemptSetMediaKeys(r),
                    e._generateRequestWithPreferredKeySession(t.initDataType, t.initData));
                };
                this.mediaKeysPromise.then(r).catch(r);
              }),
              (n._attemptSetMediaKeys = function (t) {
                if (!this._media)
                  throw new Error(
                    'Attempted to set mediaKeys without first attaching a media element',
                  );
                if (!this._hasSetMediaKeys) {
                  var e = this._mediaKeysList[0];
                  if (!e || !e.mediaKeys)
                    return (
                      o.b.error(
                        'Fatal: Media is encrypted but no CDM access or no keys have been obtained yet',
                      ),
                      void this.hls.trigger(a.a.ERROR, {
                        type: s.b.KEY_SYSTEM_ERROR,
                        details: s.a.KEY_SYSTEM_NO_KEYS,
                        fatal: !0,
                      })
                    );
                  o.b.log('Setting keys for encrypted media'),
                    this._media.setMediaKeys(e.mediaKeys),
                    (this._hasSetMediaKeys = !0);
                }
              }),
              (n._generateRequestWithPreferredKeySession = function (t, e) {
                var r = this,
                  i = this._mediaKeysList[0];
                if (!i)
                  return (
                    o.b.error(
                      'Fatal: Media is encrypted but not any key-system access has been obtained yet',
                    ),
                    void this.hls.trigger(a.a.ERROR, {
                      type: s.b.KEY_SYSTEM_ERROR,
                      details: s.a.KEY_SYSTEM_NO_ACCESS,
                      fatal: !0,
                    })
                  );
                if (i.mediaKeysSessionInitialized)
                  o.b.warn('Key-Session already initialized but requested again');
                else {
                  var n = i.mediaKeysSession;
                  if (!n)
                    return (
                      o.b.error('Fatal: Media is encrypted but no key-session existing'),
                      void this.hls.trigger(a.a.ERROR, {
                        type: s.b.KEY_SYSTEM_ERROR,
                        details: s.a.KEY_SYSTEM_NO_SESSION,
                        fatal: !0,
                      })
                    );
                  if (!e)
                    return (
                      o.b.warn('Fatal: initData required for generating a key session is null'),
                      void this.hls.trigger(a.a.ERROR, {
                        type: s.b.KEY_SYSTEM_ERROR,
                        details: s.a.KEY_SYSTEM_NO_INIT_DATA,
                        fatal: !0,
                      })
                    );
                  o.b.log('Generating key-session request for "' + t + '" init data type'),
                    (i.mediaKeysSessionInitialized = !0),
                    n
                      .generateRequest(t, e)
                      .then(function () {
                        o.b.debug('Key-session generation succeeded');
                      })
                      .catch(function (t) {
                        o.b.error('Error generating key-session request:', t),
                          r.hls.trigger(a.a.ERROR, {
                            type: s.b.KEY_SYSTEM_ERROR,
                            details: s.a.KEY_SYSTEM_NO_SESSION,
                            fatal: !1,
                          });
                      });
                }
              }),
              (n._createLicenseXhr = function (t, e, r) {
                var i = new XMLHttpRequest();
                (i.responseType = 'arraybuffer'),
                  (i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(
                    this,
                    i,
                    t,
                    e,
                    r,
                  ));
                var n = this._licenseXhrSetup;
                if (n)
                  try {
                    n.call(this.hls, i, t), (n = void 0);
                  } catch (t) {
                    o.b.error(t);
                  }
                try {
                  i.readyState || i.open('POST', t, !0), n && n.call(this.hls, i, t);
                } catch (t) {
                  throw new Error('issue setting up KeySystem license XHR ' + t);
                }
                return i;
              }),
              (n._onLicenseRequestReadyStageChange = function (t, e, r, i) {
                switch (t.readyState) {
                  case 4:
                    if (200 === t.status) {
                      (this._requestLicenseFailureCount = 0), o.b.log('License request succeeded');
                      var n = t.response,
                        l = this._licenseResponseCallback;
                      if (l)
                        try {
                          n = l.call(this.hls, t, e);
                        } catch (t) {
                          o.b.error(t);
                        }
                      i(n);
                    } else {
                      if (
                        (o.b.error(
                          'License Request XHR failed (' +
                            e +
                            '). Status: ' +
                            t.status +
                            ' (' +
                            t.statusText +
                            ')',
                        ),
                        this._requestLicenseFailureCount++,
                        this._requestLicenseFailureCount > 3)
                      )
                        return void this.hls.trigger(a.a.ERROR, {
                          type: s.b.KEY_SYSTEM_ERROR,
                          details: s.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                          fatal: !0,
                        });
                      var u = 3 - this._requestLicenseFailureCount + 1;
                      o.b.warn('Retrying license request, ' + u + ' attempts left'),
                        this._requestLicense(r, i);
                    }
                }
              }),
              (n._generateLicenseRequestChallenge = function (t, e) {
                switch (t.mediaKeySystemDomain) {
                  case Er.WIDEVINE:
                    return e;
                }
                throw new Error('unsupported key-system: ' + t.mediaKeySystemDomain);
              }),
              (n._requestLicense = function (t, e) {
                o.b.log('Requesting content license for key-system');
                var r = this._mediaKeysList[0];
                if (!r)
                  return (
                    o.b.error(
                      'Fatal error: Media is encrypted but no key-system access has been obtained yet',
                    ),
                    void this.hls.trigger(a.a.ERROR, {
                      type: s.b.KEY_SYSTEM_ERROR,
                      details: s.a.KEY_SYSTEM_NO_ACCESS,
                      fatal: !0,
                    })
                  );
                try {
                  var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                    n = this._createLicenseXhr(i, t, e);
                  o.b.log('Sending license request to URL: ' + i);
                  var l = this._generateLicenseRequestChallenge(r, t);
                  n.send(l);
                } catch (t) {
                  o.b.error('Failure requesting DRM license: ' + t),
                    this.hls.trigger(a.a.ERROR, {
                      type: s.b.KEY_SYSTEM_ERROR,
                      details: s.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                      fatal: !0,
                    });
                }
              }),
              (n.onMediaAttached = function (t, e) {
                if (this._emeEnabled) {
                  var r = e.media;
                  (this._media = r), r.addEventListener('encrypted', this._onMediaEncrypted);
                }
              }),
              (n.onMediaDetached = function () {
                var t = this._media,
                  e = this._mediaKeysList;
                t &&
                  (t.removeEventListener('encrypted', this._onMediaEncrypted),
                  (this._media = null),
                  (this._mediaKeysList = []),
                  Promise.all(
                    e.map(function (t) {
                      if (t.mediaKeysSession)
                        return t.mediaKeysSession.close().catch(function () {});
                    }),
                  )
                    .then(function () {
                      return t.setMediaKeys(null);
                    })
                    .catch(function () {}));
              }),
              (n.onManifestParsed = function (t, e) {
                if (this._emeEnabled) {
                  var r = e.levels
                      .map(function (t) {
                        return t.audioCodec;
                      })
                      .filter(function (t) {
                        return !!t;
                      }),
                    i = e.levels
                      .map(function (t) {
                        return t.videoCodec;
                      })
                      .filter(function (t) {
                        return !!t;
                      });
                  this._attemptKeySystemAccess(Er.WIDEVINE, r, i);
                }
              }),
              (e = t),
              (r = [
                {
                  key: 'requestMediaKeySystemAccess',
                  get: function () {
                    if (!this._requestMediaKeySystemAccess)
                      throw new Error('No requestMediaKeySystemAccess function configured');
                    return this._requestMediaKeySystemAccess;
                  },
                },
              ]) && Rr(e.prototype, r),
              i && Rr(e, i),
              t
            );
          })();
        function Cr(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        function wr(t, e, r) {
          return e && Cr(t.prototype, e), r && Cr(t, r), t;
        }
        function Or(t, e) {
          var r = ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator'];
          if (r) return (r = r.call(t)).next.bind(r);
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return xr(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === r && t.constructor && (r = t.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(t);
              if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return xr(t, e);
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            r && (t = r);
            var i = 0;
            return function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        function xr(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i;
        }
        function Pr() {
          return (Pr =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        !(function (t) {
          (t.MANIFEST = 'm'),
            (t.AUDIO = 'a'),
            (t.VIDEO = 'v'),
            (t.MUXED = 'av'),
            (t.INIT = 'i'),
            (t.CAPTION = 'c'),
            (t.TIMED_TEXT = 'tt'),
            (t.KEY = 'k'),
            (t.OTHER = 'o');
        })(Dr || (Dr = {})),
          (function (t) {
            (t.DASH = 'd'), (t.HLS = 'h'), (t.SMOOTH = 's'), (t.OTHER = 'o');
          })(kr || (kr = {})),
          (function (t) {
            (t.VOD = 'v'), (t.LIVE = 'l');
          })(_r || (_r = {}));
        var Mr = (function () {
            function t(e) {
              var r = this;
              (this.hls = void 0),
                (this.config = void 0),
                (this.media = void 0),
                (this.sid = void 0),
                (this.cid = void 0),
                (this.useHeaders = !1),
                (this.initialized = !1),
                (this.starved = !1),
                (this.buffering = !0),
                (this.audioBuffer = void 0),
                (this.videoBuffer = void 0),
                (this.onWaiting = function () {
                  r.initialized && (r.starved = !0), (r.buffering = !0);
                }),
                (this.onPlaying = function () {
                  r.initialized || (r.initialized = !0), (r.buffering = !1);
                }),
                (this.applyPlaylistData = function (t) {
                  try {
                    r.apply(t, { ot: Dr.MANIFEST, su: !r.initialized });
                  } catch (t) {
                    o.b.warn('Could not generate manifest CMCD data.', t);
                  }
                }),
                (this.applyFragmentData = function (t) {
                  try {
                    var e = t.frag,
                      i = r.hls.levels[e.level],
                      n = r.getObjectType(e),
                      a = { d: 1e3 * e.duration, ot: n };
                    (n !== Dr.VIDEO && n !== Dr.AUDIO && n != Dr.MUXED) ||
                      ((a.br = i.bitrate / 1e3),
                      (a.tb = r.getTopBandwidth(n)),
                      (a.bl = r.getBufferLength(n))),
                      r.apply(t, a);
                  } catch (t) {
                    o.b.warn('Could not generate segment CMCD data.', t);
                  }
                }),
                (this.hls = e);
              var i = (this.config = e.config),
                n = i.cmcd;
              null != n &&
                ((i.pLoader = this.createPlaylistLoader()),
                (i.fLoader = this.createFragmentLoader()),
                (this.sid = n.sessionId || t.uuid()),
                (this.cid = n.contentId),
                (this.useHeaders = !0 === n.useHeaders),
                this.registerListeners());
            }
            var e = t.prototype;
            return (
              (e.registerListeners = function () {
                var t = this.hls;
                t.on(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.on(a.a.MEDIA_DETACHED, this.onMediaDetached, this),
                  t.on(a.a.BUFFER_CREATED, this.onBufferCreated, this);
              }),
              (e.unregisterListeners = function () {
                var t = this.hls;
                t.off(a.a.MEDIA_ATTACHED, this.onMediaAttached, this),
                  t.off(a.a.MEDIA_DETACHED, this.onMediaDetached, this),
                  t.off(a.a.BUFFER_CREATED, this.onBufferCreated, this),
                  this.onMediaDetached();
              }),
              (e.destroy = function () {
                this.unregisterListeners(),
                  (this.hls = this.config = this.audioBuffer = this.videoBuffer = null);
              }),
              (e.onMediaAttached = function (t, e) {
                (this.media = e.media),
                  this.media.addEventListener('waiting', this.onWaiting),
                  this.media.addEventListener('playing', this.onPlaying);
              }),
              (e.onMediaDetached = function () {
                this.media &&
                  (this.media.removeEventListener('waiting', this.onWaiting),
                  this.media.removeEventListener('playing', this.onPlaying),
                  (this.media = null));
              }),
              (e.onBufferCreated = function (t, e) {
                var r, i;
                (this.audioBuffer =
                  null === (r = e.tracks.audio) || void 0 === r ? void 0 : r.buffer),
                  (this.videoBuffer =
                    null === (i = e.tracks.video) || void 0 === i ? void 0 : i.buffer);
              }),
              (e.createData = function () {
                var t;
                return {
                  v: 1,
                  sf: kr.HLS,
                  sid: this.sid,
                  cid: this.cid,
                  pr: null === (t = this.media) || void 0 === t ? void 0 : t.playbackRate,
                  mtp: this.hls.bandwidthEstimate / 1e3,
                };
              }),
              (e.apply = function (e, r) {
                void 0 === r && (r = {}), Pr(r, this.createData());
                var i = r.ot === Dr.INIT || r.ot === Dr.VIDEO || r.ot === Dr.MUXED;
                if (
                  (this.starved && i && ((r.bs = !0), (r.su = !0), (this.starved = !1)),
                  null == r.su && (r.su = this.buffering),
                  this.useHeaders)
                ) {
                  var n = t.toHeaders(r);
                  if (!Object.keys(n).length) return;
                  e.headers || (e.headers = {}), Pr(e.headers, n);
                } else {
                  var a = t.toQuery(r);
                  if (!a) return;
                  e.url = t.appendQueryToUri(e.url, a);
                }
              }),
              (e.getObjectType = function (t) {
                var e = t.type;
                return 'subtitle' === e
                  ? Dr.TIMED_TEXT
                  : 'initSegment' === t.sn
                  ? Dr.INIT
                  : 'audio' === e
                  ? Dr.AUDIO
                  : 'main' === e
                  ? this.hls.audioTracks.length
                    ? Dr.VIDEO
                    : Dr.MUXED
                  : void 0;
              }),
              (e.getTopBandwidth = function (t) {
                for (
                  var e, r = 0, i = Or(t === Dr.AUDIO ? this.hls.audioTracks : this.hls.levels);
                  !(e = i()).done;

                ) {
                  var n = e.value;
                  n.bitrate > r && (r = n.bitrate);
                }
                return r > 0 ? r : NaN;
              }),
              (e.getBufferLength = function (t) {
                var e = this.hls.media,
                  r = t === Dr.AUDIO ? this.audioBuffer : this.videoBuffer;
                return r && e
                  ? 1e3 * lt.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len
                  : NaN;
              }),
              (e.createPlaylistLoader = function () {
                var t = this.config.pLoader,
                  e = this.applyPlaylistData,
                  r = t || this.config.loader;
                return (function () {
                  function t(t) {
                    (this.loader = void 0), (this.loader = new r(t));
                  }
                  var i = t.prototype;
                  return (
                    (i.destroy = function () {
                      this.loader.destroy();
                    }),
                    (i.abort = function () {
                      this.loader.abort();
                    }),
                    (i.load = function (t, r, i) {
                      e(t), this.loader.load(t, r, i);
                    }),
                    wr(t, [
                      {
                        key: 'stats',
                        get: function () {
                          return this.loader.stats;
                        },
                      },
                      {
                        key: 'context',
                        get: function () {
                          return this.loader.context;
                        },
                      },
                    ]),
                    t
                  );
                })();
              }),
              (e.createFragmentLoader = function () {
                var t = this.config.fLoader,
                  e = this.applyFragmentData,
                  r = t || this.config.loader;
                return (function () {
                  function t(t) {
                    (this.loader = void 0), (this.loader = new r(t));
                  }
                  var i = t.prototype;
                  return (
                    (i.destroy = function () {
                      this.loader.destroy();
                    }),
                    (i.abort = function () {
                      this.loader.abort();
                    }),
                    (i.load = function (t, r, i) {
                      e(t), this.loader.load(t, r, i);
                    }),
                    wr(t, [
                      {
                        key: 'stats',
                        get: function () {
                          return this.loader.stats;
                        },
                      },
                      {
                        key: 'context',
                        get: function () {
                          return this.loader.context;
                        },
                      },
                    ]),
                    t
                  );
                })();
              }),
              (t.uuid = function () {
                var t = URL.createObjectURL(new Blob()),
                  e = t.toString();
                return URL.revokeObjectURL(t), e.substr(e.lastIndexOf('/') + 1);
              }),
              (t.serialize = function (t) {
                for (
                  var e,
                    r = [],
                    i = function (t) {
                      return !Number.isNaN(t) && null != t && '' !== t && !1 !== t;
                    },
                    n = function (t) {
                      return Math.round(t);
                    },
                    a = function (t) {
                      return 100 * n(t / 100);
                    },
                    s = {
                      br: n,
                      d: n,
                      bl: a,
                      dl: a,
                      mtp: a,
                      nor: function (t) {
                        return encodeURIComponent(t);
                      },
                      rtp: a,
                      tb: n,
                    },
                    o = Or(Object.keys(t || {}).sort());
                  !(e = o()).done;

                ) {
                  var l = e.value,
                    u = t[l];
                  if (i(u) && !(('v' === l && 1 === u) || ('pr' == l && 1 === u))) {
                    var h = s[l];
                    h && (u = h(u));
                    var d = typeof u,
                      c = void 0;
                    (c =
                      'ot' === l || 'sf' === l || 'st' === l
                        ? l + '=' + u
                        : 'boolean' === d
                        ? l
                        : 'number' === d
                        ? l + '=' + u
                        : l + '=' + JSON.stringify(u)),
                      r.push(c);
                  }
                }
                return r.join(',');
              }),
              (t.toHeaders = function (e) {
                for (
                  var r = {},
                    i = ['Object', 'Request', 'Session', 'Status'],
                    n = [{}, {}, {}, {}],
                    a = {
                      br: 0,
                      d: 0,
                      ot: 0,
                      tb: 0,
                      bl: 1,
                      dl: 1,
                      mtp: 1,
                      nor: 1,
                      nrr: 1,
                      su: 1,
                      cid: 2,
                      pr: 2,
                      sf: 2,
                      sid: 2,
                      st: 2,
                      v: 2,
                      bs: 3,
                      rtp: 3,
                    },
                    s = 0,
                    o = Object.keys(e);
                  s < o.length;
                  s++
                ) {
                  var l = o[s];
                  n[null != a[l] ? a[l] : 1][l] = e[l];
                }
                for (var u = 0; u < n.length; u++) {
                  var h = t.serialize(n[u]);
                  h && (r['CMCD-' + i[u]] = h);
                }
                return r;
              }),
              (t.toQuery = function (e) {
                return 'CMCD=' + encodeURIComponent(t.serialize(e));
              }),
              (t.appendQueryToUri = function (t, e) {
                if (!e) return t;
                var r = t.includes('?') ? '&' : '?';
                return '' + t + r + e;
              }),
              t
            );
          })(),
          Fr = r(12),
          Nr = /^age:\s*[\d.]+\s*$/m,
          Ur = (function () {
            function t(t) {
              (this.xhrSetup = void 0),
                (this.requestTimeout = void 0),
                (this.retryTimeout = void 0),
                (this.retryDelay = void 0),
                (this.config = null),
                (this.callbacks = null),
                (this.context = void 0),
                (this.loader = null),
                (this.stats = void 0),
                (this.xhrSetup = t ? t.xhrSetup : null),
                (this.stats = new Fr.a()),
                (this.retryDelay = 0);
            }
            var e = t.prototype;
            return (
              (e.destroy = function () {
                (this.callbacks = null),
                  this.abortInternal(),
                  (this.loader = null),
                  (this.config = null);
              }),
              (e.abortInternal = function () {
                var t = this.loader;
                self.clearTimeout(this.requestTimeout),
                  self.clearTimeout(this.retryTimeout),
                  t &&
                    ((t.onreadystatechange = null),
                    (t.onprogress = null),
                    4 !== t.readyState && ((this.stats.aborted = !0), t.abort()));
              }),
              (e.abort = function () {
                var t;
                this.abortInternal(),
                  null !== (t = this.callbacks) &&
                    void 0 !== t &&
                    t.onAbort &&
                    this.callbacks.onAbort(this.stats, this.context, this.loader);
              }),
              (e.load = function (t, e, r) {
                if (this.stats.loading.start) throw new Error('Loader can only be used once.');
                (this.stats.loading.start = self.performance.now()),
                  (this.context = t),
                  (this.config = e),
                  (this.callbacks = r),
                  (this.retryDelay = e.retryDelay),
                  this.loadInternal();
              }),
              (e.loadInternal = function () {
                var t = this.config,
                  e = this.context;
                if (t) {
                  var r = (this.loader = new self.XMLHttpRequest()),
                    i = this.stats;
                  (i.loading.first = 0), (i.loaded = 0);
                  var n = this.xhrSetup;
                  try {
                    if (n)
                      try {
                        n(r, e.url);
                      } catch (t) {
                        r.open('GET', e.url, !0), n(r, e.url);
                      }
                    r.readyState || r.open('GET', e.url, !0);
                    var a = this.context.headers;
                    if (a) for (var s in a) r.setRequestHeader(s, a[s]);
                  } catch (t) {
                    return void this.callbacks.onError({ code: r.status, text: t.message }, e, r);
                  }
                  e.rangeEnd &&
                    r.setRequestHeader('Range', 'bytes=' + e.rangeStart + '-' + (e.rangeEnd - 1)),
                    (r.onreadystatechange = this.readystatechange.bind(this)),
                    (r.onprogress = this.loadprogress.bind(this)),
                    (r.responseType = e.responseType),
                    self.clearTimeout(this.requestTimeout),
                    (this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout)),
                    r.send();
                }
              }),
              (e.readystatechange = function () {
                var t = this.context,
                  e = this.loader,
                  r = this.stats;
                if (t && e) {
                  var i = e.readyState,
                    n = this.config;
                  if (!r.aborted && i >= 2)
                    if (
                      (self.clearTimeout(this.requestTimeout),
                      0 === r.loading.first &&
                        (r.loading.first = Math.max(self.performance.now(), r.loading.start)),
                      4 === i)
                    ) {
                      (e.onreadystatechange = null), (e.onprogress = null);
                      var a = e.status;
                      if (a >= 200 && a < 300) {
                        var s, l;
                        if (
                          ((r.loading.end = Math.max(self.performance.now(), r.loading.first)),
                          (l =
                            'arraybuffer' === t.responseType
                              ? (s = e.response).byteLength
                              : (s = e.responseText).length),
                          (r.loaded = r.total = l),
                          !this.callbacks)
                        )
                          return;
                        var u = this.callbacks.onProgress;
                        if ((u && u(r, t, s, e), !this.callbacks)) return;
                        var h = { url: e.responseURL, data: s };
                        this.callbacks.onSuccess(h, r, t, e);
                      } else
                        r.retry >= n.maxRetry || (a >= 400 && a < 499)
                          ? (o.b.error(a + ' while loading ' + t.url),
                            this.callbacks.onError({ code: a, text: e.statusText }, t, e))
                          : (o.b.warn(
                              a +
                                ' while loading ' +
                                t.url +
                                ', retrying in ' +
                                this.retryDelay +
                                '...',
                            ),
                            this.abortInternal(),
                            (this.loader = null),
                            self.clearTimeout(this.retryTimeout),
                            (this.retryTimeout = self.setTimeout(
                              this.loadInternal.bind(this),
                              this.retryDelay,
                            )),
                            (this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay)),
                            r.retry++);
                    } else
                      self.clearTimeout(this.requestTimeout),
                        (this.requestTimeout = self.setTimeout(
                          this.loadtimeout.bind(this),
                          n.timeout,
                        ));
                }
              }),
              (e.loadtimeout = function () {
                o.b.warn('timeout while loading ' + this.context.url);
                var t = this.callbacks;
                t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader));
              }),
              (e.loadprogress = function (t) {
                var e = this.stats;
                (e.loaded = t.loaded), t.lengthComputable && (e.total = t.total);
              }),
              (e.getCacheAge = function () {
                var t = null;
                if (this.loader && Nr.test(this.loader.getAllResponseHeaders())) {
                  var e = this.loader.getResponseHeader('age');
                  t = e ? parseFloat(e) : null;
                }
                return t;
              }),
              t
            );
          })();
        function Br(t) {
          var e = 'function' == typeof Map ? new Map() : void 0;
          return (Br = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf('[native code]')))
              return t;
            var r;
            if ('function' != typeof t)
              throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, i);
            }
            function i() {
              return Gr(t, arguments, Hr(this).constructor);
            }
            return (
              (i.prototype = Object.create(t.prototype, {
                constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 },
              })),
              jr(i, t)
            );
          })(t);
        }
        function Gr(t, e, r) {
          return (Gr = Kr()
            ? Reflect.construct
            : function (t, e, r) {
                var i = [null];
                i.push.apply(i, e);
                var n = new (Function.bind.apply(t, i))();
                return r && jr(n, r.prototype), n;
              }).apply(null, arguments);
        }
        function Kr() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            );
          } catch (t) {
            return !1;
          }
        }
        function jr(t, e) {
          return (jr =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        function Hr(t) {
          return (Hr = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function Vr() {
          return (Vr =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        var Wr = (function () {
          function t(t) {
            (this.fetchSetup = void 0),
              (this.requestTimeout = void 0),
              (this.request = void 0),
              (this.response = void 0),
              (this.controller = void 0),
              (this.context = void 0),
              (this.config = null),
              (this.callbacks = null),
              (this.stats = void 0),
              (this.loader = null),
              (this.fetchSetup = t.fetchSetup || Yr),
              (this.controller = new self.AbortController()),
              (this.stats = new Fr.a());
          }
          var e = t.prototype;
          return (
            (e.destroy = function () {
              (this.loader = this.callbacks = null), this.abortInternal();
            }),
            (e.abortInternal = function () {
              var t = this.response;
              (t && t.ok) || ((this.stats.aborted = !0), this.controller.abort());
            }),
            (e.abort = function () {
              var t;
              this.abortInternal(),
                null !== (t = this.callbacks) &&
                  void 0 !== t &&
                  t.onAbort &&
                  this.callbacks.onAbort(this.stats, this.context, this.response);
            }),
            (e.load = function (t, e, r) {
              var i = this,
                a = this.stats;
              if (a.loading.start) throw new Error('Loader can only be used once.');
              a.loading.start = self.performance.now();
              var s = (function (t, e) {
                  var r = {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    signal: e,
                    headers: new self.Headers(Vr({}, t.headers)),
                  };
                  t.rangeEnd &&
                    r.headers.set('Range', 'bytes=' + t.rangeStart + '-' + String(t.rangeEnd - 1));
                  return r;
                })(t, this.controller.signal),
                o = r.onProgress,
                l = 'arraybuffer' === t.responseType,
                u = l ? 'byteLength' : 'length';
              (this.context = t),
                (this.config = e),
                (this.callbacks = r),
                (this.request = this.fetchSetup(t, s)),
                self.clearTimeout(this.requestTimeout),
                (this.requestTimeout = self.setTimeout(function () {
                  i.abortInternal(), r.onTimeout(a, t, i.response);
                }, e.timeout)),
                self
                  .fetch(this.request)
                  .then(function (r) {
                    if (((i.response = i.loader = r), !r.ok)) {
                      var s = r.status,
                        u = r.statusText;
                      throw new qr(u || 'fetch, bad network response', s, r);
                    }
                    return (
                      (a.loading.first = Math.max(self.performance.now(), a.loading.start)),
                      (a.total = parseInt(r.headers.get('Content-Length') || '0')),
                      o && Object(n.a)(e.highWaterMark)
                        ? i.loadProgressively(r, a, t, e.highWaterMark, o)
                        : l
                        ? r.arrayBuffer()
                        : r.text()
                    );
                  })
                  .then(function (s) {
                    var l = i.response;
                    self.clearTimeout(i.requestTimeout),
                      (a.loading.end = Math.max(self.performance.now(), a.loading.first)),
                      (a.loaded = a.total = s[u]);
                    var h = { url: l.url, data: s };
                    o && !Object(n.a)(e.highWaterMark) && o(a, t, s, l), r.onSuccess(h, a, t, l);
                  })
                  .catch(function (e) {
                    if ((self.clearTimeout(i.requestTimeout), !a.aborted)) {
                      var n = e.code || 0;
                      r.onError({ code: n, text: e.message }, t, e.details);
                    }
                  });
            }),
            (e.getCacheAge = function () {
              var t = null;
              if (this.response) {
                var e = this.response.headers.get('age');
                t = e ? parseFloat(e) : null;
              }
              return t;
            }),
            (e.loadProgressively = function (t, e, r, i, n) {
              void 0 === i && (i = 0);
              var a = new le.a(),
                s = t.body.getReader();
              return (function o() {
                return s
                  .read()
                  .then(function (s) {
                    if (s.done)
                      return (
                        a.dataLength && n(e, r, a.flush(), t), Promise.resolve(new ArrayBuffer(0))
                      );
                    var l = s.value,
                      u = l.length;
                    return (
                      (e.loaded += u),
                      u < i || a.dataLength
                        ? (a.push(l), a.dataLength >= i && n(e, r, a.flush(), t))
                        : n(e, r, l, t),
                      o()
                    );
                  })
                  .catch(function () {
                    return Promise.reject();
                  });
              })();
            }),
            t
          );
        })();
        function Yr(t, e) {
          return new self.Request(t.url, e);
        }
        var qr = (function (t) {
            var e, r;
            function i(e, r, i) {
              var n;
              return (
                ((n = t.call(this, e) || this).code = void 0),
                (n.details = void 0),
                (n.code = r),
                (n.details = i),
                n
              );
            }
            return (
              (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              jr(e, r),
              i
            );
          })(Br(Error)),
          Xr = Wr,
          zr = /\s/;
        function Qr() {
          return (Qr =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(this, arguments);
        }
        function $r(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, i);
          }
          return r;
        }
        function Jr(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? $r(Object(r), !0).forEach(function (e) {
                  Zr(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : $r(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                });
          }
          return t;
        }
        function Zr(t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        var ti = Jr(
          Jr(
            {
              autoStartLoad: !0,
              startPosition: -1,
              defaultAudioCodec: void 0,
              debug: !1,
              capLevelOnFPSDrop: !1,
              capLevelToPlayerSize: !1,
              initialLiveManifestSize: 1,
              maxBufferLength: 30,
              backBufferLength: 1 / 0,
              maxBufferSize: 6e7,
              maxBufferHole: 0.1,
              highBufferWatchdogPeriod: 2,
              nudgeOffset: 0.1,
              nudgeMaxRetry: 3,
              maxFragLookUpTolerance: 0.25,
              liveSyncDurationCount: 3,
              liveMaxLatencyDurationCount: 1 / 0,
              liveSyncDuration: void 0,
              liveMaxLatencyDuration: void 0,
              maxLiveSyncPlaybackRate: 1,
              liveDurationInfinity: !1,
              liveBackBufferLength: null,
              maxMaxBufferLength: 600,
              enableWorker: !0,
              enableSoftwareAES: !0,
              manifestLoadingTimeOut: 1e4,
              manifestLoadingMaxRetry: 1,
              manifestLoadingRetryDelay: 1e3,
              manifestLoadingMaxRetryTimeout: 64e3,
              startLevel: void 0,
              levelLoadingTimeOut: 1e4,
              levelLoadingMaxRetry: 4,
              levelLoadingRetryDelay: 1e3,
              levelLoadingMaxRetryTimeout: 64e3,
              fragLoadingTimeOut: 2e4,
              fragLoadingMaxRetry: 6,
              fragLoadingRetryDelay: 1e3,
              fragLoadingMaxRetryTimeout: 64e3,
              startFragPrefetch: !1,
              fpsDroppedMonitoringPeriod: 5e3,
              fpsDroppedMonitoringThreshold: 0.2,
              appendErrorMaxRetry: 3,
              loader: Ur,
              fLoader: void 0,
              pLoader: void 0,
              xhrSetup: void 0,
              licenseXhrSetup: void 0,
              licenseResponseCallback: void 0,
              abrController: oe,
              bufferController: De,
              capLevelController: Sr,
              fpsController: Lr,
              stretchShortVideoTrack: !1,
              maxAudioFramesDrift: 1,
              forceKeyFrameOnDiscontinuity: !0,
              abrEwmaFastLive: 3,
              abrEwmaSlowLive: 9,
              abrEwmaFastVoD: 3,
              abrEwmaSlowVoD: 9,
              abrEwmaDefaultEstimate: 5e5,
              abrBandWidthFactor: 0.95,
              abrBandWidthUpFactor: 0.7,
              abrMaxWithRealBitrate: !1,
              maxStarvationDelay: 4,
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              emeEnabled: !1,
              widevineLicenseUrl: void 0,
              drmSystemOptions: {},
              requestMediaKeySystemAccessFunc: Ar,
              testBandwidth: !0,
              progressive: !1,
              lowLatencyMode: !0,
              cmcd: void 0,
            },
            {
              cueHandler: {
                newCue: function (t, e, r, i) {
                  for (
                    var n, a, s, o, l, u = [], h = self.VTTCue || self.TextTrackCue, d = 0;
                    d < i.rows.length;
                    d++
                  )
                    if (((s = !0), (o = 0), (l = ''), !(n = i.rows[d]).isEmpty())) {
                      for (var c = 0; c < n.chars.length; c++)
                        zr.test(n.chars[c].uchar) && s ? o++ : ((l += n.chars[c].uchar), (s = !1));
                      (n.cueStartTime = e), e === r && (r += 1e-4), o >= 16 ? o-- : o++;
                      var f = Ze(l.trim()),
                        g = sr(e, r, f);
                      (t && t.cues && t.cues.getCueById(g)) ||
                        (((a = new h(e, r, f)).id = g),
                        (a.line = d + 1),
                        (a.align = 'left'),
                        (a.position = 10 + Math.min(80, 10 * Math.floor((8 * o) / 32))),
                        u.push(a));
                    }
                  return (
                    t &&
                      u.length &&
                      (u.sort(function (t, e) {
                        return 'auto' === t.line || 'auto' === e.line
                          ? 0
                          : t.line > 8 && e.line > 8
                          ? e.line - t.line
                          : t.line - e.line;
                      }),
                      u.forEach(function (e) {
                        return O(t, e);
                      })),
                    u
                  );
                },
              },
              enableCEA708Captions: !0,
              enableWebVTT: !0,
              enableIMSC1: !0,
              captionsTextTrack1Label: 'English',
              captionsTextTrack1LanguageCode: 'en',
              captionsTextTrack2Label: 'Spanish',
              captionsTextTrack2LanguageCode: 'es',
              captionsTextTrack3Label: 'Unknown CC',
              captionsTextTrack3LanguageCode: '',
              captionsTextTrack4Label: 'Unknown CC',
              captionsTextTrack4LanguageCode: '',
              renderTextTracksNatively: !0,
            },
          ),
          {},
          {
            subtitleStreamController: me,
            subtitleTrackController: Se,
            timelineController: yr,
            audioStreamController: de,
            audioTrackController: ge,
            emeController: Ir,
            cmcdController: Mr,
          },
        );
        function ei(t) {
          var e = t.loader;
          e !== Xr && e !== Ur
            ? (o.b.log('[config]: Custom loader detected, cannot enable progressive streaming'),
              (t.progressive = !1))
            : (function () {
                if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
                  try {
                    return new self.ReadableStream({}), !0;
                  } catch (t) {}
                return !1;
              })() &&
              ((t.loader = Xr),
              (t.progressive = !0),
              (t.enableSoftwareAES = !0),
              o.b.log('[config]: Progressive streaming enabled, using FetchLoader'));
        }
        function ri(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        var ii = (function () {
          function t(e) {
            void 0 === e && (e = {}),
              (this.config = void 0),
              (this.userConfig = void 0),
              (this.coreComponents = void 0),
              (this.networkControllers = void 0),
              (this._emitter = new $t.EventEmitter()),
              (this._autoLevelCapping = void 0),
              (this.abrController = void 0),
              (this.bufferController = void 0),
              (this.capLevelController = void 0),
              (this.latencyController = void 0),
              (this.levelController = void 0),
              (this.streamController = void 0),
              (this.audioTrackController = void 0),
              (this.subtitleTrackController = void 0),
              (this.emeController = void 0),
              (this.cmcdController = void 0),
              (this._media = null),
              (this.url = null);
            var r = (this.config = (function (t, e) {
              if (
                (e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) &&
                (e.liveSyncDuration || e.liveMaxLatencyDuration)
              )
                throw new Error(
                  "Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration",
                );
              if (
                void 0 !== e.liveMaxLatencyDurationCount &&
                (void 0 === e.liveSyncDurationCount ||
                  e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)
              )
                throw new Error(
                  'Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"',
                );
              if (
                void 0 !== e.liveMaxLatencyDuration &&
                (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)
              )
                throw new Error(
                  'Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"',
                );
              return Qr({}, t, e);
            })(t.DefaultConfig, e));
            (this.userConfig = e),
              Object(o.a)(r.debug),
              (this._autoLevelCapping = -1),
              r.progressive && ei(r);
            var i = r.abrController,
              n = r.bufferController,
              a = r.capLevelController,
              s = r.fpsController,
              l = (this.abrController = new i(this)),
              u = (this.bufferController = new n(this)),
              h = (this.capLevelController = new a(this)),
              d = new s(this),
              c = new I(this),
              f = new C(this),
              g = new F(this),
              v = (this.levelController = new rt(this)),
              p = new it(this),
              m = (this.streamController = new ie(this, p));
            h.setStreamController(m), d.setStreamController(m);
            var y = [v, m];
            this.networkControllers = y;
            var T = [c, f, l, u, h, d, g, p];
            (this.audioTrackController = this.createController(r.audioTrackController, null, y)),
              this.createController(r.audioStreamController, p, y),
              (this.subtitleTrackController = this.createController(
                r.subtitleTrackController,
                null,
                y,
              )),
              this.createController(r.subtitleStreamController, p, y),
              this.createController(r.timelineController, null, T),
              (this.emeController = this.createController(r.emeController, null, T)),
              (this.cmcdController = this.createController(r.cmcdController, null, T)),
              (this.latencyController = this.createController(B, null, T)),
              (this.coreComponents = T);
          }
          t.isSupported = function () {
            return (function () {
              var t = qt();
              if (!t) return !1;
              var e = Xt(),
                r =
                  t &&
                  'function' == typeof t.isTypeSupported &&
                  t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                i =
                  !e ||
                  (e.prototype &&
                    'function' == typeof e.prototype.appendBuffer &&
                    'function' == typeof e.prototype.remove);
              return !!r && !!i;
            })();
          };
          var e,
            r,
            n,
            l = t.prototype;
          return (
            (l.createController = function (t, e, r) {
              if (t) {
                var i = e ? new t(this, e) : new t(this);
                return r && r.push(i), i;
              }
              return null;
            }),
            (l.on = function (t, e, r) {
              void 0 === r && (r = this), this._emitter.on(t, e, r);
            }),
            (l.once = function (t, e, r) {
              void 0 === r && (r = this), this._emitter.once(t, e, r);
            }),
            (l.removeAllListeners = function (t) {
              this._emitter.removeAllListeners(t);
            }),
            (l.off = function (t, e, r, i) {
              void 0 === r && (r = this), this._emitter.off(t, e, r, i);
            }),
            (l.listeners = function (t) {
              return this._emitter.listeners(t);
            }),
            (l.emit = function (t, e, r) {
              return this._emitter.emit(t, e, r);
            }),
            (l.trigger = function (t, e) {
              if (this.config.debug) return this.emit(t, t, e);
              try {
                return this.emit(t, t, e);
              } catch (e) {
                o.b.error(
                  'An internal error happened while handling event ' +
                    t +
                    '. Error message: "' +
                    e.message +
                    '". Here is a stacktrace:',
                  e,
                ),
                  this.trigger(a.a.ERROR, {
                    type: s.b.OTHER_ERROR,
                    details: s.a.INTERNAL_EXCEPTION,
                    fatal: !1,
                    event: t,
                    error: e,
                  });
              }
              return !1;
            }),
            (l.listenerCount = function (t) {
              return this._emitter.listenerCount(t);
            }),
            (l.destroy = function () {
              o.b.log('destroy'),
                this.trigger(a.a.DESTROYING, void 0),
                this.detachMedia(),
                this.removeAllListeners(),
                (this._autoLevelCapping = -1),
                (this.url = null),
                this.networkControllers.forEach(function (t) {
                  return t.destroy();
                }),
                (this.networkControllers.length = 0),
                this.coreComponents.forEach(function (t) {
                  return t.destroy();
                }),
                (this.coreComponents.length = 0);
            }),
            (l.attachMedia = function (t) {
              o.b.log('attachMedia'),
                (this._media = t),
                this.trigger(a.a.MEDIA_ATTACHING, { media: t });
            }),
            (l.detachMedia = function () {
              o.b.log('detachMedia'),
                this.trigger(a.a.MEDIA_DETACHING, void 0),
                (this._media = null);
            }),
            (l.loadSource = function (t) {
              this.stopLoad();
              var e = this.media,
                r = this.url,
                n = (this.url = i.buildAbsoluteURL(self.location.href, t, { alwaysNormalize: !0 }));
              o.b.log('loadSource:' + n),
                e &&
                  r &&
                  r !== n &&
                  this.bufferController.hasSourceTypes() &&
                  (this.detachMedia(), this.attachMedia(e)),
                this.trigger(a.a.MANIFEST_LOADING, { url: t });
            }),
            (l.startLoad = function (t) {
              void 0 === t && (t = -1),
                o.b.log('startLoad(' + t + ')'),
                this.networkControllers.forEach(function (e) {
                  e.startLoad(t);
                });
            }),
            (l.stopLoad = function () {
              o.b.log('stopLoad'),
                this.networkControllers.forEach(function (t) {
                  t.stopLoad();
                });
            }),
            (l.swapAudioCodec = function () {
              o.b.log('swapAudioCodec'), this.streamController.swapAudioCodec();
            }),
            (l.recoverMediaError = function () {
              o.b.log('recoverMediaError');
              var t = this._media;
              this.detachMedia(), t && this.attachMedia(t);
            }),
            (l.removeLevel = function (t, e) {
              void 0 === e && (e = 0), this.levelController.removeLevel(t, e);
            }),
            (e = t),
            (n = [
              {
                key: 'version',
                get: function () {
                  return '1.1.1';
                },
              },
              {
                key: 'Events',
                get: function () {
                  return a.a;
                },
              },
              {
                key: 'ErrorTypes',
                get: function () {
                  return s.b;
                },
              },
              {
                key: 'ErrorDetails',
                get: function () {
                  return s.a;
                },
              },
              {
                key: 'DefaultConfig',
                get: function () {
                  return t.defaultConfig ? t.defaultConfig : ti;
                },
                set: function (e) {
                  t.defaultConfig = e;
                },
              },
            ]),
            (r = [
              {
                key: 'levels',
                get: function () {
                  var t = this.levelController.levels;
                  return t || [];
                },
              },
              {
                key: 'currentLevel',
                get: function () {
                  return this.streamController.currentLevel;
                },
                set: function (t) {
                  o.b.log('set currentLevel:' + t),
                    (this.loadLevel = t),
                    this.abrController.clearTimer(),
                    this.streamController.immediateLevelSwitch();
                },
              },
              {
                key: 'nextLevel',
                get: function () {
                  return this.streamController.nextLevel;
                },
                set: function (t) {
                  o.b.log('set nextLevel:' + t),
                    (this.levelController.manualLevel = t),
                    this.streamController.nextLevelSwitch();
                },
              },
              {
                key: 'loadLevel',
                get: function () {
                  return this.levelController.level;
                },
                set: function (t) {
                  o.b.log('set loadLevel:' + t), (this.levelController.manualLevel = t);
                },
              },
              {
                key: 'nextLoadLevel',
                get: function () {
                  return this.levelController.nextLoadLevel;
                },
                set: function (t) {
                  this.levelController.nextLoadLevel = t;
                },
              },
              {
                key: 'firstLevel',
                get: function () {
                  return Math.max(this.levelController.firstLevel, this.minAutoLevel);
                },
                set: function (t) {
                  o.b.log('set firstLevel:' + t), (this.levelController.firstLevel = t);
                },
              },
              {
                key: 'startLevel',
                get: function () {
                  return this.levelController.startLevel;
                },
                set: function (t) {
                  o.b.log('set startLevel:' + t),
                    -1 !== t && (t = Math.max(t, this.minAutoLevel)),
                    (this.levelController.startLevel = t);
                },
              },
              {
                key: 'capLevelToPlayerSize',
                get: function () {
                  return this.config.capLevelToPlayerSize;
                },
                set: function (t) {
                  var e = !!t;
                  e !== this.config.capLevelToPlayerSize &&
                    (e
                      ? this.capLevelController.startCapping()
                      : (this.capLevelController.stopCapping(),
                        (this.autoLevelCapping = -1),
                        this.streamController.nextLevelSwitch()),
                    (this.config.capLevelToPlayerSize = e));
                },
              },
              {
                key: 'autoLevelCapping',
                get: function () {
                  return this._autoLevelCapping;
                },
                set: function (t) {
                  this._autoLevelCapping !== t &&
                    (o.b.log('set autoLevelCapping:' + t), (this._autoLevelCapping = t));
                },
              },
              {
                key: 'bandwidthEstimate',
                get: function () {
                  var t = this.abrController.bwEstimator;
                  return t ? t.getEstimate() : NaN;
                },
              },
              {
                key: 'autoLevelEnabled',
                get: function () {
                  return -1 === this.levelController.manualLevel;
                },
              },
              {
                key: 'manualLevel',
                get: function () {
                  return this.levelController.manualLevel;
                },
              },
              {
                key: 'minAutoLevel',
                get: function () {
                  var t = this.levels,
                    e = this.config.minAutoBitrate;
                  if (!t) return 0;
                  for (var r = t.length, i = 0; i < r; i++) if (t[i].maxBitrate > e) return i;
                  return 0;
                },
              },
              {
                key: 'maxAutoLevel',
                get: function () {
                  var t = this.levels,
                    e = this.autoLevelCapping;
                  return -1 === e && t && t.length ? t.length - 1 : e;
                },
              },
              {
                key: 'nextAutoLevel',
                get: function () {
                  return Math.min(
                    Math.max(this.abrController.nextAutoLevel, this.minAutoLevel),
                    this.maxAutoLevel,
                  );
                },
                set: function (t) {
                  this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t);
                },
              },
              {
                key: 'audioTracks',
                get: function () {
                  var t = this.audioTrackController;
                  return t ? t.audioTracks : [];
                },
              },
              {
                key: 'audioTrack',
                get: function () {
                  var t = this.audioTrackController;
                  return t ? t.audioTrack : -1;
                },
                set: function (t) {
                  var e = this.audioTrackController;
                  e && (e.audioTrack = t);
                },
              },
              {
                key: 'subtitleTracks',
                get: function () {
                  var t = this.subtitleTrackController;
                  return t ? t.subtitleTracks : [];
                },
              },
              {
                key: 'subtitleTrack',
                get: function () {
                  var t = this.subtitleTrackController;
                  return t ? t.subtitleTrack : -1;
                },
                set: function (t) {
                  var e = this.subtitleTrackController;
                  e && (e.subtitleTrack = t);
                },
              },
              {
                key: 'media',
                get: function () {
                  return this._media;
                },
              },
              {
                key: 'subtitleDisplay',
                get: function () {
                  var t = this.subtitleTrackController;
                  return !!t && t.subtitleDisplay;
                },
                set: function (t) {
                  var e = this.subtitleTrackController;
                  e && (e.subtitleDisplay = t);
                },
              },
              {
                key: 'lowLatencyMode',
                get: function () {
                  return this.config.lowLatencyMode;
                },
                set: function (t) {
                  this.config.lowLatencyMode = t;
                },
              },
              {
                key: 'liveSyncPosition',
                get: function () {
                  return this.latencyController.liveSyncPosition;
                },
              },
              {
                key: 'latency',
                get: function () {
                  return this.latencyController.latency;
                },
              },
              {
                key: 'maxLatency',
                get: function () {
                  return this.latencyController.maxLatency;
                },
              },
              {
                key: 'targetLatency',
                get: function () {
                  return this.latencyController.targetLatency;
                },
              },
              {
                key: 'drift',
                get: function () {
                  return this.latencyController.drift;
                },
              },
              {
                key: 'forceStartLoad',
                get: function () {
                  return this.streamController.forceStartLoad;
                },
              },
            ]) && ri(e.prototype, r),
            n && ri(e, n),
            t
          );
        })();
        ii.defaultConfig = void 0;
      },
    ]).default;
  });
