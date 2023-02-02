function ajouter_geojson_heberge (map) {
  // Fonctionne pas
  
  map.addLayer({
    id: 'tst',
    type: 'fill',
    source: {
      type: 'vector',
      url: 'mapbox://addwike.pop-perso'

    },
    'source-layer': 'layer1',
    layout: { visibility: 'visible' },
    paint: { 'fill-color': 'rgba(61,153,80,0.55)' }
  });

  map.addSource('pop', {
    type: 'vector',
    url: 'mapbox://addwike.pop-perso'
  });
  map.addLayer({
    'id': 'layer1',
    'type': 'line',
    'source': 'pop',
    'source-layer': 'layer1',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#69b4ff',
      'line-width': 1
    }
  });
}
