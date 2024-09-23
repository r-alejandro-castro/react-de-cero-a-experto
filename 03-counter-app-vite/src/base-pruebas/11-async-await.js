export const getImagen = async() => {

    try {

        const apiKey = 'OJEaO557Zklb4ckEzP79mOs74z2MG96L';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // console.error(error)
        return 'No se pudo obtener la imagen'
    }
    
}

 getImagen();



