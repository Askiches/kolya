let name = prompt('вы знаете колю?');
if (name === 'да') {
	let question = prompt('он вам должен деньги?', '');
	if (question == 'да' ) {
		alert('хуй вынь!');
	} else if (question === 'нет' || question === 'null') {
		alert('видимо вы должны коле');
	} else {
		alert('вы ему должны');
	} 
} else if (name === '' || name === null){
	alert('видимо вы плохо знаете колю');
} else {
	alert('он вас тоже')
}
