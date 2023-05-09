const Median =(arr,prop)=>{
	let nArr = JSON.parse(JSON.stringify(arr)).sort((a,b)=>a.Alcohol-b.Alcohol);
	let obj = {};
	let alcohalClass = nArr[0].Alcohol;
	let sArr = [];
	let count = 0;
	for(let i=0; i<nArr.length; i++){
		let el = nArr[i];
		if(el.Alcohol === alcohalClass){
			sArr.push(el)
			count++;
		}else{
			sArr.sort((a,b)=>a[prop]-b[prop]);
			if(count%2 === 0){
				const mdn = (parseFloat(sArr[count / 2 - 1][prop]) + parseFloat(sArr[count / 2][prop])) / 2
				obj[alcohalClass] = mdn;
			}else{
				const mdn = parseFloat(sArr[(count - 1) / 2][prop]);
				obj[alcohalClass] = mdn;
			}
			sArr = [el];
			count = 1;
			alcohalClass = parseInt(el.Alcohol);
		}
	}
	sArr.sort((a,b)=>a[prop]-b[prop]);
	if(count%2 === 0){
		const mdn = (parseFloat(sArr[count / 2 - 1][prop]) + parseFloat(sArr[count / 2][prop])) / 2
		obj[alcohalClass] = mdn;
	}else{
		const mdn = parseFloat(sArr[(count - 1) / 2][prop]);
		obj[alcohalClass] = mdn;
	}

	return obj;
 

}

export {Median};