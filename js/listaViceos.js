var videos = [

    { titulo: 'Video 1', descripcion: 'Descripción video 1', url: 'https://www.youtube.com/embed/38CRu1rCaKg?si=e1xk0N8sKo72AQiz'},
    { titulo: 'Video 2', descripcion: 'Descripción video 2', url: 'https://www.youtube.com/embed/8x-g3xjyCjI?si=fKNqM1F2t4IMMidW' },
    { titulo: 'Video 3', descripcion: 'Descripción video 3', url: 'https://www.youtube.com/embed/w3UViP85alw?si=y0ampnFgSlRWyweo' },
    { titulo: 'Video 4', descripcion: 'Descripción video 4', url: 'https://www.youtube.com/embed/3woPVQExDsQ?si=5xnku1brpKu9eb7p' }
]

var listaVideos = document.getElementById('listaVideosArreglo');
mostrarLIstaVideos(videos);

function mostrarLIstaVideos(videosBuscados) {

    listaVideos.innerHTML='';
    videosBuscados.forEach(indiceVideo => {
        var fila = document.createElement('div');
        var col1UrlVideo = document.createElement('div');
        var iframeVideo = document.createElement('iframe');
        fila.setAttribute('class', 'row');
        col1UrlVideo.setAttribute('class', 'col');
        iframeVideo.setAttribute('src', indiceVideo.url);   
        iframeVideo.setAttribute('width', '300px');
        iframeVideo.setAttribute('height', '225px');
        iframeVideo.setAttribute('frameborder', '0');
        col1UrlVideo.appendChild(iframeVideo);
        fila.appendChild(col1UrlVideo);

        var col2TituloVideo = document.createElement('div');
        var h4TituloVideo = document.createElement('h4');
        var h6DescripcionVideo = document.createElement('h6');

        col2TituloVideo.setAttribute('class', 'col');
        h4TituloVideo.textContent = indiceVideo.titulo;
        h6DescripcionVideo.textContent = indiceVideo.descripcion;
        col2TituloVideo.appendChild(h4TituloVideo);
        col2TituloVideo.appendChild(h6DescripcionVideo);
        fila.appendChild(col2TituloVideo);

        var col3BotonVideo = document.createElement('div');
        var botonVideo = document.createElement('button');

        col3BotonVideo.setAttribute('class', 'col');
        botonVideo.setAttribute('class', 'btn btn-outline-primary');
        botonVideo.innerHTML = '@';
        col3BotonVideo.appendChild(botonVideo);
        fila.appendChild(col3BotonVideo);

        listaVideos.appendChild(fila);
    })
}

function buscarVideos() {
    var textoVideo = document.getElementById('txtBuscar').value;
    var videosBuscados = videos.filter(
        indiceVideo => {
            return indiceVideo.titulo.includes(textoVideo);
        }
    );

    mostrarLIstaVideos(videosBuscados);
}

