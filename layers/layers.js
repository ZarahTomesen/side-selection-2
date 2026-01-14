var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_currentaerialphotographOrtho8cmRGB_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://service.pdok.nl/hwh/luchtfotorgb/wms/v1_0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Actueel_orthoHR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'current aerial photograph Ortho 8cm RGB',
                            popuplayertitle: 'current aerial photograph Ortho 8cm RGB',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_currentaerialphotographOrtho8cmRGB_1, 0]);
var format_rainwaterretentionbuffer_2 = new ol.format.GeoJSON();
var features_rainwaterretentionbuffer_2 = format_rainwaterretentionbuffer_2.readFeatures(json_rainwaterretentionbuffer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rainwaterretentionbuffer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rainwaterretentionbuffer_2.addFeatures(features_rainwaterretentionbuffer_2);
var lyr_rainwaterretentionbuffer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rainwaterretentionbuffer_2, 
                style: style_rainwaterretentionbuffer_2,
                popuplayertitle: 'rainwater retention buffer',
                interactive: true,
                title: '<img src="styles/legend/rainwaterretentionbuffer_2.png" /> rainwater retention buffer'
            });
var lyr_natura2000areas_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://portal.prvlimburg.nl/geodata/NATUUR/wms?request%3DGetCapabilities",
                              attributions: ' ',
                              params: {
                                "LAYERS": "VOORJ2026_BEHEERGEBIED_V",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'natura 2000 areas',
                            popuplayertitle: 'natura 2000 areas',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_natura2000areas_3, 0]);
var format_sideselection32nacho_4 = new ol.format.GeoJSON();
var features_sideselection32nacho_4 = format_sideselection32nacho_4.readFeatures(json_sideselection32nacho_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sideselection32nacho_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sideselection32nacho_4.addFeatures(features_sideselection32nacho_4);
var lyr_sideselection32nacho_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sideselection32nacho_4, 
                style: style_sideselection32nacho_4,
                popuplayertitle: 'side selection 3.2 nacho',
                interactive: true,
    title: 'side selection 3.2 nacho<br />\
    <img src="styles/legend/sideselection32nacho_4_0.png" /> apple orchard<br />\
    <img src="styles/legend/sideselection32nacho_4_1.png" /> forest edge<br />\
    <img src="styles/legend/sideselection32nacho_4_2.png" /> natural grassland<br />\
    <img src="styles/legend/sideselection32nacho_4_3.png" /> road verge<br />\
    <img src="styles/legend/sideselection32nacho_4_4.png" /> water buffer<br />' });
var format_sideselection32zarah_5 = new ol.format.GeoJSON();
var features_sideselection32zarah_5 = format_sideselection32zarah_5.readFeatures(json_sideselection32zarah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sideselection32zarah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sideselection32zarah_5.addFeatures(features_sideselection32zarah_5);
var lyr_sideselection32zarah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sideselection32zarah_5, 
                style: style_sideselection32zarah_5,
                popuplayertitle: 'side selection 3.2 zarah',
                interactive: true,
    title: 'side selection 3.2 zarah<br />\
    <img src="styles/legend/sideselection32zarah_5_0.png" /> apple orchard<br />\
    <img src="styles/legend/sideselection32zarah_5_1.png" /> calcareous grassland<br />\
    <img src="styles/legend/sideselection32zarah_5_2.png" /> forest edge<br />\
    <img src="styles/legend/sideselection32zarah_5_3.png" /> road verge<br />\
    <img src="styles/legend/sideselection32zarah_5_4.png" /> water buffer<br />' });
var format_buffer200m_6 = new ol.format.GeoJSON();
var features_buffer200m_6 = format_buffer200m_6.readFeatures(json_buffer200m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer200m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer200m_6.addFeatures(features_buffer200m_6);
var lyr_buffer200m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer200m_6, 
                style: style_buffer200m_6,
                popuplayertitle: 'buffer 200m',
                interactive: false,
                title: '<img src="styles/legend/buffer200m_6.png" /> buffer 200m'
            });
var format_buffer750m_7 = new ol.format.GeoJSON();
var features_buffer750m_7 = format_buffer750m_7.readFeatures(json_buffer750m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer750m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer750m_7.addFeatures(features_buffer750m_7);
var lyr_buffer750m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer750m_7, 
                style: style_buffer750m_7,
                popuplayertitle: 'buffer 750m',
                interactive: false,
                title: '<img src="styles/legend/buffer750m_7.png" /> buffer 750m'
            });

lyr_OSMStandard_0.setVisible(true);lyr_currentaerialphotographOrtho8cmRGB_1.setVisible(true);lyr_rainwaterretentionbuffer_2.setVisible(true);lyr_natura2000areas_3.setVisible(true);lyr_sideselection32nacho_4.setVisible(true);lyr_sideselection32zarah_5.setVisible(true);lyr_buffer200m_6.setVisible(true);lyr_buffer750m_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_currentaerialphotographOrtho8cmRGB_1,lyr_rainwaterretentionbuffer_2,lyr_natura2000areas_3,lyr_sideselection32nacho_4,lyr_sideselection32zarah_5,lyr_buffer200m_6,lyr_buffer750m_7];
lyr_rainwaterretentionbuffer_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'COMPARTIMENT_VOLGNUMMER': 'COMPARTIMENT_VOLGNUMMER', 'LEGGERSTATUS': 'LEGGERSTATUS', 'AANTAL_COMPARTIMENTEN': 'AANTAL_COMPARTIMENTEN', 'CATEGORIE': 'CATEGORIE', 'ONDERHOUDSPLICHTIGE': 'ONDERHOUDSPLICHTIGE', 'STATUS': 'STATUS', 'WS_KOPPEL': 'WS_KOPPEL', 'CODE': 'CODE', 'OBJECTID': 'OBJECTID', 'LEGGERDATUM': 'LEGGERDATUM', 'LEGGERBESLUIT': 'LEGGERBESLUIT', });
lyr_sideselection32nacho_4.set('fieldAliases', {'fid': 'fid', 'type ': 'type ', 'project': 'project', 'notes': 'notes', });
lyr_sideselection32zarah_5.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Location': 'Location', 'notes': 'notes', });
lyr_buffer200m_6.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Location': 'Location', 'notes': 'notes', });
lyr_buffer750m_7.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Location': 'Location', });
lyr_rainwaterretentionbuffer_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'COMPARTIMENT_VOLGNUMMER': 'Range', 'LEGGERSTATUS': 'TextEdit', 'AANTAL_COMPARTIMENTEN': 'TextEdit', 'CATEGORIE': 'TextEdit', 'ONDERHOUDSPLICHTIGE': 'TextEdit', 'STATUS': 'TextEdit', 'WS_KOPPEL': 'TextEdit', 'CODE': 'TextEdit', 'OBJECTID': 'TextEdit', 'LEGGERDATUM': 'DateTime', 'LEGGERBESLUIT': 'TextEdit', });
lyr_sideselection32nacho_4.set('fieldImages', {'fid': 'TextEdit', 'type ': 'TextEdit', 'project': 'TextEdit', 'notes': 'TextEdit', });
lyr_sideselection32zarah_5.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'notes': 'TextEdit', });
lyr_buffer200m_6.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', 'notes': 'TextEdit', });
lyr_buffer750m_7.set('fieldImages', {'fid': 'TextEdit', 'Type': 'TextEdit', 'Location': 'TextEdit', });
lyr_rainwaterretentionbuffer_2.set('fieldLabels', {'fid': 'hidden field', 'name': 'no label', 'COMPARTIMENT_VOLGNUMMER': 'hidden field', 'LEGGERSTATUS': 'hidden field', 'AANTAL_COMPARTIMENTEN': 'hidden field', 'CATEGORIE': 'hidden field', 'ONDERHOUDSPLICHTIGE': 'hidden field', 'STATUS': 'hidden field', 'WS_KOPPEL': 'hidden field', 'CODE': 'hidden field', 'OBJECTID': 'hidden field', 'LEGGERDATUM': 'hidden field', 'LEGGERBESLUIT': 'hidden field', });
lyr_sideselection32nacho_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'type ': 'inline label - visible with data', 'project': 'hidden field', 'notes': 'inline label - visible with data', });
lyr_sideselection32zarah_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Location': 'inline label - visible with data', 'notes': 'inline label - visible with data', });
lyr_buffer200m_6.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Location': 'no label', 'notes': 'no label', });
lyr_buffer750m_7.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Location': 'no label', });
lyr_buffer750m_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});