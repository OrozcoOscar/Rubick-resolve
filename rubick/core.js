canvas=document.querySelector("#canvas");
ctx=canvas.getContext("2d");
/////////////////////--variables/////////////////////////
let c1=createMatriz(3,3,1);//azul 1 9
let c2=createMatriz(3,3,2);//rojo 2 12
let c3=createMatriz(3,3,3);//verde 3,3 10
let c4=createMatriz(3,3,4);//naranja 4 13,3 pink
let c5=createMatriz(3,3,5);//amarillo 5 14
let c6=createMatriz(3,3,6);//blanco 6 15
//////////////////////////////////////
let m1=[5,2,6,4];
let m2=[5,3,6,1];

let m3=[5,4,6,2];
let m4=[5,1,6,3];
let m5=[1,4,3,2];
let m6=[3,4,1,2];

let cubo=[c1,c2,c3,c4,c5,c6]
/////////////////--core--//////////////////////////////
window.onload=()=>{pintar()}
//-------------------------------------------------
function createMatriz(f,c,r=0) {
	let m=[f]
	for (var i = 0; i <f; i++) {
	m[i]=[]
	for (var e = 0; e < c; e++) {
		m[i][e]=r
	}
}
return m;
}
//-------------------------------------------------
function show(m,x,y){
	for(let i=0;i<3;i++){
		
		for(let e=0;e<3;e++){
			if(m[e][i]==1)ctx.fillStyle="blue"
			if(m[e][i]==2)ctx.fillStyle="red"
			if(m[e][i]==3)ctx.fillStyle="green"
			if(m[e][i]==4)ctx.fillStyle="orange"
			if(m[e][i]==5)ctx.fillStyle="yellow"
			if(m[e][i]==6)ctx.fillStyle="white"
			ctx.strokeRect(x+i+22*i,y+e+22*e,20,20)
			ctx.fillRect(x+i+22*i,y+e+22*e,20,20)

		}
	}
	
}
//-------------------------------------------------
function ra(m){
	let aux=m[2][0];
	m[2][0]=m[2][2];
	m[2][2]=aux;
	
	 aux=m[0][0];
	m[0][0]=m[2][0];
	m[2][0]=aux;
	
	aux=m[0][0];
	m[0][0]=m[0][2];
	m[0][2]=aux;
	
	////////////////////////
	
	 aux=m[2][1];
	m[2][1]=m[1][2];
	m[1][2]=aux;
	
	 aux=m[1][0];
	m[1][0]=m[2][1];
	m[2][1]=aux;
	
	 aux=m[0][1];
	m[0][1]=m[1][0];
	m[1][0]=aux;
}
//-------------------------------------------------
function ro(m){
	let q=2,w=0;

	let aux=m[0][0];
	m[0][0]=m[0][2];
	m[0][2]=aux;
	
	 aux=m[0][0];
	m[0][0]=m[2][0];
	m[2][0]=aux;
	
	 aux=m[2][0];
	m[2][0]=m[2][2];
	m[2][2]=aux;
	////////////////////////
	 aux=m[0][1];
	m[0][1]=m[1][0];
	m[1][0]=aux;
	
	 aux=m[1][0];
	m[1][0]=m[2][1];
	m[2][1]=aux;
	
	 aux=m[2][1];
	m[2][1]=m[1][2];
	m[1][2]=aux;
	

}
//-------------------------------------------------
function mover_resto(m){
	let M,M1,M2,M3,M4,dir=[];
	if(m ==1)M=m1;
	else if(m== 2)M=m2;
	else if (m== 3)M=m3;
	else if (m== 4)M=m4;
	else if (m== 5)M=m5;
	else if (m== 6)M=m6;
	let v1=createMatriz(3,3),v2=createMatriz(3,3),v3=createMatriz(3,3),v4=createMatriz(3,3);
	for (var i = 0; i < 4; i++) {
		eval("M"+(i+1)+"=eval(\"m\"+M["+i+"])");//guarda las matruces de adyacencia
	}
	
		for (var i = 0; i < 4; i++) {
		aux=eval("M"+(i+1))
		for (var e = 0; e < 4; e++) {
			if(aux[e]==m)dir.push(e);//extare la direccion den la q esta cada color adyacente
		}
	}
	/////////////////////////rellena las matriceess
	for (var i = 0; i <4; i++) {
		aux=eval("c"+M[i]+"");

		if(dir[i]==0){
			for (var e = 0; e < 3; e++) {
				eval("v"+(i+1)+"[0]["+e+"]="+aux[0][e]);

				
			}
		}
		else if(dir[i]==1){
			for (var e = 0; e < 3; e++) {
				eval("v"+(i+1)+"["+e+"][2]="+aux[e][2]);
				
			}
		}
		else if(dir[i]==2){
			for (var e = 0; e < 3; e++) {
				eval("v"+(i+1)+"[2]["+e+"]="+aux[2][e]);
				
			}
		}
		else if(dir[i]==3){
			for (var e = 0; e < 3; e++) {
				eval("v"+(i+1)+"["+e+"][0]="+aux[e][0]);
				
			}
		}
		
	}
//////////////////////////////////////////////////////////////////
d=dir[0]-dir[3];
if(d>0){
	for (var i = 0; i < d; i++)ro(v4)
	}
else if(d<0) {
		for (var i = d; i <0; i++)ra(v4)
	}
d=dir[1]-dir[0];
if(d>0){
	for (var i = 0; i < d; i++)ro(v1)
	}
else if(d<0) {
		for (var i = d; i <0; i++)ra(v1)
	}
d=dir[2]-dir[1];
if(d>0){
	for (var i = 0; i < d; i++)ro(v2)
	}
else if(d<0) {
		for (var i = d; i <0; i++)ra(v2)
	}
d=dir[3]-dir[2];
if(d>0){
	for (var i = 0; i < d; i++)ro(v3)
	}
else if(d<0) {
		for (var i = d; i <0; i++)ra(v3)
	}
	///////////////////////////////////////////////////
	if (true) {for (var i = 0; i < 4; i++) {
		aux=eval("c"+M[i]+"");
		if(i==0){
			for (var e = 0; e < 3; e++) {
				for (var f = 0; f < 3; f++) {
					if(v4[e][f]!=0){
						aux[e][f]=v4[e][f];
					}
				}
			}
		}else{
			for (var e = 0; e < 3; e++) {
				for (var f = 0; f < 3; f++) {
					if(eval("v"+i+"["+e+"]["+f+"]!=0")){
						aux[e][f]=eval("v"+i+"["+e+"]["+f+"]");
					}
				}
			}
		}
		
	}
} 
pintar()	
}
//-------------------------------------------------
function revolver(){
	document.querySelector("#load").innerText="Loading ...";
	setTimeout(()=>{
		for (var i = 0; i <document.querySelector("#nPasos").value; i++) {
			let a=Random(-1,2);
			let b=Random(1, 7)
			if(a!=0){
				rotar(a,b)
			}
			
		}
document.querySelector("#load").innerText="";
	},499)
}
//-------------------------------------------------
function pintar() {

	show(cubo[0],80,150)
	show(cubo[1],80*2,150)
	show(cubo[2],80*3,150)
	show(cubo[3],80*4,150)
	show(cubo[4],80*3,70)
	show(cubo[5],80*3,230)
}
//-------------------------------------------------
function rotar(dir,c) {
	let a;
	if(dir==1) a="⟳";
	else a="⟲"
	document.querySelector(".pasos").innerHTML+="<button class=c"+c+">"+a+"</button> <br>";
	if(dir<0)ra(eval("c"+c))
	else ro(eval("c"+c))
	if(dir>0)mover_resto(c)
	else if(dir<0){
		mover_resto(c)
		mover_resto(c)
		mover_resto(c)
	}
	
}
//-------------------------------------------------
function rotarVector(v,dir,s=v.length) {
		if (dir<0) {
			let primero = v[0];
			let x;
			for(x= 0; x<s-1; x++)
			  v[x] = v[x+1];
			v[x]= primero;
		}else{
			let ultimo = v[s-1];
			let x;
			for(x= s-1; x>0; x--){
				aux=v[x-1]
			  v[x-1] = v[x];
			  v[x]=aux;
			}
			
			
		}
		
	}
//-------------------------------------------------
function mover(dir) {
		rotarVector(cubo,dir,4)
		if(dir<0){
			ro(c5)
			rotarVector(m5,1)
			ra(c6)
			rotarVector(m6,-1)
		}else if(dir>0){
			ra(c5)
			rotarVector(m5,-1)
			ro(c6)
			rotarVector(m6,1)
		}
				pintar();
		
	}
//-------------------------------------------------
function Random(min, max) { return Math.floor(Math.random() * (max - min)) + min;}//no incluye al max

///////////////--Cruz-///////////////////////////////
function filtro() {
	let mov=document.querySelector(".pasos").children;
	let result="";
	for (var i = 0; i < mov.length-1; i+=2) {
		//console.log(i,mov[i].className,mov[i].innerText,repeticiones(i,mov[i].className,mov[i].innerText))
		if(repeticiones(i,mov[i].className,mov[i].innerText)==3){
			if(mov[i].innerText=="⟳"){
				result+="<button class="+mov[i].className+">⟲</button> <br>";
			}
			else if(repeticiones(i,mov[i].className,mov[i].innerText)==4){
				i+=2*3
			}else{
				result+="<button class="+mov[i].className+">⟳</button> <br>";
			}
			i+=2*2
		}else{
			result+="<button class="+mov[i].className+">"+mov[i].innerText+"</button> <br>";
		}
		
	}
	document.querySelector(".pasos").innerHTML=result
	mov=document.querySelector(".pasos").children;
	result=""
	for (var i = 0; i < mov.length-1; i+=2) {
		//console.log(i,mov[i].className,mov[i].innerText,repeticiones(i,mov[i].className,mov[i].innerText))
		try{
		if(mov[i].className==mov[i+2].className && mov[i].innerText!=mov[i+2].innerText){
					i+=2;
		}else{
			result+="<button class="+mov[i].className+">"+mov[i].innerText+"</button> <br>";
		}
		}catch(e){}
		
		
	}
	document.querySelector(".pasos").innerHTML=result
}
//-------------------------------------------------
function evaluar() {
	let d=[];
	scanearBlancos()
	for (var i = 0; i < data.length; i++) {
		for (var e = 0; e < data[i].length; e++) {
			if(data[i][e][1]==ok[ev]){
				 d=["m"+data[i][0][0],"m"+data[i][1][0],"m"+data[i][1][1]]
				break;
			}
		}
	}
	if(d[0]=="m6" && d[1]==d[2])ev++;
	if(ev>3)ev=0
	return d;
}
//-------------------------------------------------
function rotarHasta(cara,condicion,f) {
	let d =eval(f),sal;
	//console.log("rotando ",cara,ev,sal)
		if(eval(condicion))return 0;
	else{
		rotar(1,cara)
		espera(90).then(() => rotarHasta(cara,condicion,f));
	}
}
//-------------------------------------------------
function armarCruz() {
		let d=evaluar();
		//console.log(d[0],eval(d[0]))
		//console.log(d[1],eval(d[1]))
		//console.log(d[2],eval(d[2]))
		let my=eval(d[0]),mx=eval(d[2]),mz=eval(d[1]);
		/////////////////////////////////////////////////////////
		if(d[0]==d[2]&& d[1]!="m6" && d[1]!="m5" && mz[1]==d[0][1]){
			//console.log("A")
			rotar(-1,d[1][1])
			rotar(-1,5)
			rotar(1,d[1][1])
		}
		else if(d[0]==d[2]&& d[1]!="m6" && d[1]!="m5" && mz[3]==d[0][1]){
			//console.log("B")
			rotar(1,d[1][1])
			rotar(1,5)
			rotar(-1,d[1][1])
		}
		else if(d[0]!="m6"&&d[1]==d[2]){
			//console.log("C")
			rotarHasta(d[1][1],'d[0]=="m6" && d[1]==d[2]',"evaluar()")	
		}
		else if(d[1]=="m5"&&d[0]==d[2]){
			//console.log("D")
			rotar(1,d[2][1])
		}
		else if(d[1]=="m6"&&d[0]==d[2]){
			//console.log("E")
			rotar(-1,d[2][1])
		}
		else if(my.indexOf(parseInt(d[2][1]))>-1 && d[0]!="m6"){
			//console.log("F")
			rotarHasta(d[0][1],'d[1]==d[2]',"evaluar()")
			
		}
		else if(mz.indexOf(parseInt(d[2][1]))>-1){
			//console.log("G")
			rotarHasta(d[1][1],'d[0]==d[2]',"evaluar()")
			
		}else if(d[0]=="m6" && d[1]!=d[2]){
			//console.log("H")
			rotar(-1,d[1][1])
			rotar(-1,d[1][1])
		}
		else
		{
			//console.log("NO SE WE")
		}

		cruz=scanearBlancos();
}
//-------------------------------------------------
function repeticiones(po,c,v) {
			let mov=document.querySelector(".pasos").children;
			let rep=0,clases=[],valores=[];
			for (var i = 0; i <mov.length; i+=2) {
				clases.push(mov[i].className)
				valores.push(mov[i].innerText)
			}
			for (var i =Math.floor(po*1/2); i < i+3; i++) {
				if(clases[i]==c && valores[i]==v){
					if(rep==4)return rep;
					rep++;
				}else{
					return rep;
				}
			}
			return rep;
}
//-------------------------------------------------
function Arista(cara,a) {
			let f=0,c=1,e=0,s="";
			for (var i = 0; i < 4; i++) {
				if(eval("c"+cara+po[i]+"=="+a)){
					let mtemp=eval("m"+cara);
					let mVecino=eval("m"+mtemp[i]);
					let poC=mVecino.indexOf(cara);

					 s+="s.push([["+cara+","+a+"],["+mtemp[i]+","+eval("c"+mtemp[i]+po[poC])+"]]);"
				}


			}
			
			return s.substring(0,s.length-1);
}
//-------------------------------------------------
function scanearBlancos() {
	s=[];
	let nBlancos=0;
	for (var i = 1; i < 7; i++)eval(Arista(i,6))
	data=s
	for (var i = 0; i < data.length; i++) {
				let scan=data[i];
				let caraN=scan[0][0]
				let caraR=scan[1][0]
				let caraVN=scan[0][1]
				let caraVR=scan[1][1]
				if(caraN==caraVN && caraR==caraVR)nBlancos++;
				
			}
	return nBlancos;
}
//-------------------------------------------------
function puedeRotar(c) {
			
			for (var i = 0; i < data.length; i++) {
				let scan=data[i];
				let caraN=scan[0][0]
				let caraR=scan[1][0]
				let caraVN=scan[0][1]
				let caraVR=scan[1][1]
				if(caraN==caraVN && caraR==c)return false;
				
			}
			return true;
		}
///////////////////////////////////////
