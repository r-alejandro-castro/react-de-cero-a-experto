
//async convierte la funcion en promesa

//await nos ayuda a trabajar el codigo como si fuera asincrono. En pocas palabras nos dice, que ejecute esta linea de codigo, antes de ejecutar la siguiente linea de codigo. CONDICION: Solo funcionan los await dentro de la funcion async

const getImange = async() => {

    //Manejo de errores (try)

    try {
            
        const apiKey = 'OJEaO557Zklb4ckEzP79mOs74z2MG96L';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //Manejo de error peticiones HTTP
        console.erro(error)
    }
}

getImange();