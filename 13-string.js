// Escreva uma função que converte o nome para iniciais. 
// Por exemplo, se eu passar o nome João e sobrenome Viana, a função deve retornar J.V.

// O retorno deve ser duas letras maiúsculas, seguidas de um ponto.

// Outros exemplos:
// `Maria Silva` => `M.S.`
// `Pedro Pedroso`  => `P.P`

function abbrevName(firstName, lastName){
	let convert = `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}.`

	return convert;
}

let fullName = 'Gadiego Nogueira'

console.log(`${fullName} => ${abbrevName(fullName.split(' ')[0], fullName.split(' ')[1])}`);