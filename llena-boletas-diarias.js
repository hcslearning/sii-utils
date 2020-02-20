var cantidades = [3,11,3,6,6,6,4,12,8,12,0,15,7,6,2,4,1,1,2,2,3,3,8,7,2,3,6,4,9,14];
var totales = [47970,151010,54150,267939,208919,114930,52965,288895,182900,317662,0,440023,121737,184939,20579,63539,12990,8589,29975,28579,53970,41569,151504,321390,130970,86970,133420,51132,133885,494714];
for (i = 0; i < totales.length; i++) {
	n = i+1;
	cantName = "totalDocumentos_" + n;
	totalName = "montoTotal_" + n;
	document.getElementsByName(cantName)[0].value = cantidades[i];	
	document.getElementsByName(totalName)[0].value = totales[i];
	
	var event = new Event('change');	
	document.getElementsByName(cantName)[0].dispatchEvent(event);
	document.getElementsByName(totalName)[0].dispatchEvent(event);
}
