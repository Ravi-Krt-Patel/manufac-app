
 const Mean = (arr,prop)=>{
	
	let nArr = JSON.parse(JSON.stringify(arr)).sort((a,b)=>a.Alcohol-b.Alcohol);
	
	let obj = {};
	let alcohalClass = nArr[0].Alcohol;
	let sum = 0;
	let count = 0;
	for(let i=0; i<nArr.length; i++){
		let el = nArr[i];
		if(el.Alcohol === alcohalClass){
			sum += parseFloat(el[prop]);
			count++;
		}else{
			let avg = sum/count;
			obj[alcohalClass] = avg;
			count = 1;
			sum = parseFloat(el[prop]);
			alcohalClass = el.Alcohol;
		}

	}
	let avg = sum/count;
	obj[alcohalClass] = avg;
	return obj;

}


export {Mean}
