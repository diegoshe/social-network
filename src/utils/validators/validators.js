export const required = value => {
	if (value ) return undefined;
	return 'error ';
}

export const maxLenght30 = value => {
	if (value && value.length > 30) return 'max length';
	return undefined;
}

export const maxLengthCreator = ( maxLength) => (value )=> {
	if (value.length > maxLength ) return `max length ${maxLength}`;
	return undefined;
}