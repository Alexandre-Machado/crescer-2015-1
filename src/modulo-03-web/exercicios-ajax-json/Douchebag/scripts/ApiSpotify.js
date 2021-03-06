'use strict';

function ApiSpotify(options) {
  options = options || {};
  this.urlBase = options.urlBase || 'https://api.spotify.com/v1';
};

ApiSpotify.prototype.pesquisarArtista = function(textoBusca) {
  console.log('pesquisando por %s', textoBusca);

  return $.ajax({
    url: String.format('{0}/search?q={1}&type=artist', this.urlBase, textoBusca),
    type: 'GET'
  });
};

ApiSpotify.prototype.obterDetalhesArtista = function(id) {
  console.log('obtendo detalhes de %s', id);

  return $.ajax({
    url: String.format('{0}/artists/{1}/albums', this.urlBase, id),
    data: { limit: 50 },
    type: 'GET'
  });
};