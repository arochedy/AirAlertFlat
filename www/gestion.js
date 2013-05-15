var semaine=1;
var jour=1;
var min=2;
var sec=0;
var timer;
/*On recupere ou on créer le tableau de prograssion et la liste des exos dans le local storage */


//Ici on va changer les atributs de la page exos
$( '#exo' ).on('pagebeforeshow', function(){
clearTimeout(timer);
//.bind("pageshow",function() 
console.log("jour: "+ jour);
console.log("semaine : "+semaine);
/*
On verifie qu'on a pas fini la seance 
Si oui on met le lien "suivant" vers l''accueil et on sauvegarde la progression

*/
/* Sinon on met à jour la page exos pour faire l'exo (ou step)  suivant  et on precise le lien vers chrono ou vers exo suivnat */

	//On verifie d'abord si c'est le dernier step
	if(nbSteps==tableauFinal[semaine][jour][nbExosFait]["nbStep"])
	{//Alors on met le lien direct vers l'exo suivant et on augmente le numero d'exo et on remet à 0 le nb de steps
		
			if(nbExosFait==nbExosAfaire)
			{	//Si c'est le dernier step du dernier exo
				//On retourne à la page d'acceuil (faudrait mettre à jour le jour et la semaine
			
				$("#nomexo").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				$("#nbRep").html(tableauFinal[semaine][jour][nbExosFait]["nbRep"]);
				$("#titreExos").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				console.log("test jour : "+jour);
				saveProg();
				console.log("test2 jour : "+jour);
				$("#finStep").attr("href", "#one");
			}else{
					
				$("#nomexo").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				$("#nbRep").html(tableauFinal[semaine][jour][nbExosFait]["nbRep"]);
				$("#titreExos").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				
				$("#finStep").attr("href", "#exo2");
				
				nbExosFait++;
				nbSteps=1;	
			}
	}else
	{//S'il reste des steps à faire on renvoi vers la page chrono en aumentant le nombre de steps fait
	
			nbSteps++;
			$("#nomexo").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
			$("#nbRep").html(tableauFinal[semaine][jour][nbExosFait]["nbRep"]);
			
			$("#titreExos").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
			$("#finStep").attr("href", "#chrono");		
	}

});

//Ici on va changer les atributs de la page exo2
$( '#exo2' ).on("pagebeforeshow", function(event){
clearTimeout(timer);

	/*
On verifie qu'on a pas fini la seance 
Si oui on met le lien "suivant" vers l''accueil et on sauvegarde la progression

*/
/* Sinon on met à jour la page exos pour faire l'exo (ou step)  suivant  et on precise le lien vers chrono ou vers exo suivnat */

	//On verifie d'abord si c'est le dernier step
	if(nbSteps==tableauFinal[semaine][jour][nbExosFait]["nbStep"])
	{//Alors on met le lien direct vers l'exo suivant et on augmente le numero d'exo et on remet à 0 le nb de steps

			if(nbExosFait==nbExosAfaire)
			{	//Si c'est le dernier step du dernier exo
				//On retourne à la page d'acceuil (faudrait mettre à jour le jour et la semaine) 
			
				$("#nomexo2").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				$("#nbRep2").html(tableauFinal[semaine][jour][nbExosFait]["nbRep"]);
				$("#titreExos2").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
						
				console.log("test jour : "+jour);
				saveProg();
				console.log("test2 jour : "+jour);
				$("#finStep2").attr("href", "#one");
			}else{
					
				$("#nomexo2").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				$("#nbRep2").html(tableauFinal[semaine][jour][nbExosFait]["nbRep"]);
				$("#titreExos2").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
				
				$("#finStep2").attr("href", "#exo");
				
				nbExosFait++;
				nbSteps=1;	
			}
	}else
	{//S'il rest des steps à faire on renvoi vers la page chrono en aumentant le nombre de steps fait
	
			nbSteps++;
			$("#nomexo2").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
			$("#nbRep2").html(tableauFinal[semaine][jour][nbExosFait]["nbRep"]);
			
			$("#titreExos2").html(tableauFinal[semaine][jour][nbExosFait]["nom"]);
			$("#finStep2").attr("href", "#chrono");		
	}


});
var initTableau;
//On initialise les données de la séance
$( '#seance' ).on("pagebeforeshow", function(){

initTableau(); 


var test = window.localStorage.getItem("semaine");
  
	if(test!=null)
	{
		semaine=test;
		jour=window.localStorage.getItem("jour");
	
	}
	

nbExosAfaire=tableauFinal[semaine][jour]["nbexos"];
nbExosFait=1; 
nbSteps=1;



});

function saveProg(){

//on enregistre la progression
				if(jour==3)
				{
					window.localStorage.setItem("jour", 1);
					//faudra faire une verif pour savoir si c'est la derniere semaine !
					semaine++;
					window.localStorage.setItem("semaine", semaine);		
				}else{
				
					jour++;
					console.log(jour);
					window.localStorage.setItem("jour", jour);
				
				}	


}


function initTableau(){

	
	var indexSemaine=1;
	var indexJour=1; 
	var indexExo=1;

	var tabExo1=[2,2,3,3,4,2,4,3,4,5,6,4,0,3,4]; 
	var tabExo2=[2,2,2,2,2,2,2,2,2,2,4,4,0,2,4];
	var tabExo3=[2,2,2,2,2,2,2,2,2,2,2,2,0,2,2];
	var tabExo4=[2,2,2,2,2,2,2,2,2,2,2,2,0,2,2];
	var tabExo5=[1,1,1,2,2,2,2,4,3,4,4,4,0,1,4];
	var tabExo6=[4,4,4,4,4,4,5,5,5,5,5,6,0,4,5];
	stepExo=[tabExo1,tabExo2,tabExo3,tabExo4,tabExo5,tabExo6];

	var repExo1=[20,20,25,30,25,50,30,50,50,40,50,75,0,30,100]; 
	var repExo2=[10,15,20,25,30,25,40,45,50,55,30,35,0,30,50];
	var repExo3=[10,15,15,20,20,25,25,30,20,35,35,40,0,20,50];
	var repExo4=[15,20,25,30,25,40,50,60,70,80,90,100,0,30,100];
	var repExo5=[100,200,300,200,250,300,350,200,300,250,275,300,0,250,400];
	var repExo6=[15,20,20,20,25,30,25,25,30,30,30,30,0,20,50];
	var repExo=[repExo1,repExo2,repExo3,repExo4,repExo5,repExo6];


	tableauFinal=new Array();
	for(i=1;i<16;i++)
	{
		console.log("ok");
		tableauFinal[i]=new Array();
		/* JOUR 1 */
		indexJour=1;	
		tableauFinal[i][indexJour]=new Array();
		tableauFinal[i][indexJour]["nbexos"]=5;
		//Exo1
		indexExo=1;
		tableauFinal[i][indexJour][indexExo]=new Array(); 		
		tableauFinal[i][indexJour][indexExo]["nbStep"]=stepExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nbRep"]=repExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nom"]="Leap Ups";
		//Exo2
		indexExo=2;
		tableauFinal[i][indexJour][indexExo]=new Array(); 		
		tableauFinal[i][indexJour][indexExo]["nbStep"]=stepExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nbRep"]=repExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nom"]="Calf Raises";
		//Exo3
		indexExo=3;
		tableauFinal[i][indexJour][indexExo]=new Array(); 		
		tableauFinal[i][indexJour][indexExo]["nbStep"]=stepExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nbRep"]=repExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nom"]="Step Ups";
		//Exo4
		indexExo=4;
		tableauFinal[i][indexJour][indexExo]=new Array(); 		
		tableauFinal[i][indexJour][indexExo]["nbStep"]=stepExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nbRep"]=repExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nom"]="Thrust Ups";
		//Exo5
		indexExo=5;
		tableauFinal[i][indexJour][indexExo]=new Array(); 		
		tableauFinal[i][indexJour][indexExo]["nbStep"]=stepExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nbRep"]=repExo[indexExo-1][i-1];
		tableauFinal[i][indexJour][indexExo]["nom"]="Burnouts";
		

		/* JOUR 3 */
		//Le jour 3 est le meme que le jour 1
		tableauFinal[i][3]=tableauFinal[i][1];
		
		/* JOUR 2 */
		indexJour=2;
		tableauFinal[i][2]=new Array();
		tableauFinal[i][indexJour]["nbexos"]=6;
		for(j=1;j<6;j++)
		{
		
			tableauFinal[i][2][j]=new Array(); 
			tableauFinal[i][2][j]["nbStep"]=tableauFinal[i][1][j]["nbStep"];
			tableauFinal[i][2][j]["nbRep"]=tableauFinal[i][1][j]["nbRep"];
			tableauFinal[i][2][j]["nom"]=tableauFinal[i][1][j]["nom"];
		
		}
		
		//Exo6
		indexExo=6;
		tableauFinal[i][2][6]=new Array(); 		
		tableauFinal[i][2][6]["nbStep"]=stepExo[5][i-1];
		tableauFinal[i][2][6]["nbRep"]=repExo[5][i-1];
		tableauFinal[i][2][6]["nom"]="Squat Hops";
		
	}

}


$(document).on('vclick', '#validerDate', function(e){


jour=$('#jour option:selected').val();
semaine=$('#semaine option:selected').val();

window.localStorage.setItem("jour", jour);
window.localStorage.setItem("semaine", semaine);

});


$('#chrono').on("pagebeforeshow", function(){
console.log('fjrifjr');
min=2;
sec=0;
$("#nbMinutes").html(min);
$("#nbSecondes").html("00");
timer=setTimeout("chrono();", 1000);

});
function chrono(){

	if(sec==0){
		
		if(min==0){
		
			//c'est fini 
			clearTimeout(timer);
		}else{
		
			min--;
			sec=59;
			timer=setTimeout("chrono();", 1000);
		}


	}else{
		timer=setTimeout("chrono();", 1000);
		sec--;
	
	
	}
	
	if(sec<10){
	$("#nbSecondes").html("0"+sec);
	
	
	}else{
		$("#nbSecondes").html(sec);
	}
	$("#nbMinutes").html(min);
	

}









