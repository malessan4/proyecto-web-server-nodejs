//Funcion agnóstica autoconvocada
//Agnóstica porque no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis

const main = () => {
    console.log('Aqui comenzaremos el servidor')
}


( async () =>{
    main()
})()
