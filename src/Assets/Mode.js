
const frequency = (arr)=>{

	let objArr = {};
	for(let i=0; i<arr.length; i++){
		if(objArr[arr[i]]=objArr[arr[i]]){
			objArr[arr[i]] +=1
		}else{
			objArr[arr[i]] =1
		}
	}
	let max = null;
	let maxKey = null;
	for(let key in objArr){
		if(max==null){
			max = objArr[key];
			maxKey = key;
		}else if(max < objArr[key]){
			max = objArr[key];
			maxKey = key;
		}
	}
	return maxKey;
}


const Mode = (arr,prop)=>{
	let nArr = JSON.parse(JSON.stringify(arr)).sort((a,b)=>a.Alcohol-b.Alcohol);
	let obj = {};
	let alcohalClass = nArr[0].Alcohol;
	let sArr = [];
	for(let i=0; i<nArr.length; i++){
		let el = nArr[i];
		if(el.Alcohol === alcohalClass){
			sArr.push(parseFloat(el[prop]));
		}else{
			
			obj[alcohalClass] = frequency(sArr);
			sArr = [parseFloat(el[prop])];
			alcohalClass = parseInt(el.Alcohol);
		}

	}
	
	obj[alcohalClass] = frequency(sArr);
	return obj;

}

export {Mode}