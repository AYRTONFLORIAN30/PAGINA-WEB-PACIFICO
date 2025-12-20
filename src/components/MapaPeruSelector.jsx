import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highmaps'; 
import HighchartsReact from 'highcharts-react-official';
import './MapaPeruSelector.css';

// --- 1. DEFINIMOS LOS 4 COLORES DISTINTOS PARA CADA ZONA ---
const ZONE_COLORS = {
  1: '#76b900', // ZONA 1: Verde Corporativo
  2: '#ff9800', // ZONA 2: Naranja vibrante
  3: '#9c27b0', // ZONA 3: Morado intenso
  4: '#d32f2f'  // ZONA 4: Rojo fuerte
};

const MapaPeruSelector = ({ activeZoneId, onZoneClick }) => {
  const [topology, setTopology] = useState(null);

  useEffect(() => {
    const getMapData = async () => {
      try {
        const response = await fetch(
          'https://code.highcharts.com/mapdata/countries/pe/pe-all.topo.json'
        );
        const mapData = await response.json();
        setTopology(mapData);
      } catch (error) {
        console.error("Error cargando el mapa:", error);
      }
    };
    getMapData();
  }, []);

  // Definimos todas las regiones para cada zona
  const allRegions = [
    // ZONA 1 (Centro)
    { 'hc-key': 'pe-ju', zoneId: 1, name: "JUNÍN" },
    { 'hc-key': 'pe-pa', zoneId: 1, name: "PASCO" },
    { 'hc-key': 'pe-hv', zoneId: 1, name: "HUANCAVELICA" },
    { 'hc-key': 'pe-ay', zoneId: 1, name: "AYACUCHO" },

    // ZONA 2 (Selva)
    { 'hc-key': 'pe-hc', zoneId: 2, name: "HUÁNUCO" },
    { 'hc-key': 'pe-sm', zoneId: 2, name: "SAN MARTÍN" },
    { 'hc-key': 'pe-uc', zoneId: 2, name: "UCAYALI" },

    // ZONA 3 (Norte)
    { 'hc-key': 'pe-lb', zoneId: 3, name: "LAMBAYEQUE" },
    { 'hc-key': 'pe-cj', zoneId: 3, name: "CAJAMARCA" },
    { 'hc-key': 'pe-am', zoneId: 3, name: "AMAZONAS" },

    // ZONA 4 (Sur)
    { 'hc-key': 'pe-md', zoneId: 4, name: "MADRE DE DIOS" },
    { 'hc-key': 'pe-cs', zoneId: 4, name: "CUSCO" },
    { 'hc-key': 'pe-ap', zoneId: 4, name: "APURÍMAC" } 
  ];

  // --- 2. APLICAMOS LOS COLORES ---
  // Ya no usamos ternario (?). Cada región toma el color asignado a su zoneId.
  const chartData = allRegions.map(region => ({
    ...region,
    color: ZONE_COLORS[region.zoneId] 
  }));

  const options = {
    chart: {
      map: topology,
      backgroundColor: 'transparent',
      height: 550, 
    },
    title: { text: '' },
    credits: { enabled: false },
    legend: { enabled: false },
    mapNavigation: { enabled: false },
    tooltip: {
      enabled: true,
      headerFormat: '',
      backgroundColor: '#333',
      style: { color: '#fff', fontSize: '14px', fontWeight: 'bold' },
      // El borde del tooltip tomará el color de la zona automáticamente
      borderRadius: 10,
      pointFormatter: function() {
        if (this.zoneId) return `📍 ${this.name} (Zona ${this.zoneId})`;
        return false;
      }
    },
    plotOptions: {
      map: {
        allAreas: true,
        borderColor: 'white',
        borderWidth: 1.5,
        nullColor: '#e0e0e0', // Departamentos sin zona serán grises
        nullInteraction: false, 
        states: {
          hover: {
            // --- 3. MEJORA DEL HOVER ---
            // Quitamos el color fijo. Ahora solo aumentamos el brillo
            // para que se ilumine el color respectivo de cada zona.
            brightness: 0.2 
          }
        },
        events: {
          click: function (e) {
            const zona = e.point.zoneId;
            if (zona) {
              onZoneClick(zona);
            }
          }
        }
      }
    },
    series: [{
      data: chartData, 
      name: 'Regiones',
      joinBy: 'hc-key',
      dataLabels: { enabled: false }
    }]
  };

  if (!topology) return <div style={{textAlign:'center', color:'white', marginTop: '50px'}}>Cargando Mapa...</div>;

  return (
    <div className="mapa-wrapper">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'mapChart'}
        options={options}
      />
    </div>
  );
};

export default MapaPeruSelector;