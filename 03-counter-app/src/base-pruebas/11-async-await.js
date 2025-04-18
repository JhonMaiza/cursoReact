export const getImagen = async() => {

    try {

        const apiKey = 'FnA5PzFaUqgldtXxFsAjGOvUTsbX64ok';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return  'No se encontró la imagen';
    }
}

getImagen();



