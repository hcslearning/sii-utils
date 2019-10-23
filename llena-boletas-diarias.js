var cantidades = [3,11,3,6,6,6,4,12,8,12,0,15,7,6,2,4,1,1,2,2,3,3,8,7,2,3,6,4,9,14];
var netos = [40311,126900,45504,225160,175562,96581,44508,242769,153700,266944,0,369768,102301,155412,17294,53395,10916,7218,25189,24016,45353,34932,127314,270075,110059,73084,112119,42969,112509,415727];
var ivas = [7659,24110,8646,42779,33357,18349,8457,46126,29201,50718,0,70255,19436,29527,3285,10144,2074,1371,4786,4563,8617,6637,24190,51315,20911,13886,21301,8163,21376,78987];
var totales = [47970,151010,54150,267939,208919,114930,52965,288895,182900,317662,0,440023,121737,184939,20579,63539,12990,8589,29975,28579,53970,41569,151504,321390,130970,86970,133420,51132,133885,494714];
for (i = 0; i < netos.length; i++) {
	n = i+1;
	cantName = "totalDocumentos_" + n;
	netoName = "montoNeto_" + n;
	ivaName = "montoIva_" + n;
	totalName = "montoTotal_" + n;
	document.getElementsByName(cantName)[0].value = cantidades[i];	
	document.getElementsByName(netoName)[0].value = netos[i];
	document.getElementsByName(ivaName)[0].value = ivas[i];
	document.getElementsByName(totalName)[0].value = totales[i];
	
	var event = new Event('change');	
	document.getElementsByName(cantName)[0].dispatchEvent(event);
	document.getElementsByName(totalName)[0].dispatchEvent(event);
}
