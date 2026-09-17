import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highmaps'; 
import HighchartsReact from 'highcharts-react-official';
import './MapaPeruSelector.css';


const ZONE_COLORS = {
  1: '#76b900', 
  2: '#ff9800', 
  3: 'rgb(161, 113, 58)', 
  4: '#d32f2f'  
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

  const allRegions = [
    { 'hc-key': 'pe-ju', zoneId: 1, name: "JUNÍN" },
    { 'hc-key': 'pe-pa', zoneId: 1, name: "PASCO" },
    { 'hc-key': 'pe-hv', zoneId: 1, name: "HUANCAVELICA" },
    { 'hc-key': 'pe-ay', zoneId: 1, name: "AYACUCHO" },

    { 'hc-key': 'pe-hc', zoneId: 2, name: "HUÁNUCO" },
    { 'hc-key': 'pe-sm', zoneId: 2, name: "SAN MARTÍN" },
    { 'hc-key': 'pe-uc', zoneId: 2, name: "UCAYALI" },

    { 'hc-key': 'pe-lb', zoneId: 3, name: "LAMBAYEQUE" },
    { 'hc-key': 'pe-cj', zoneId: 3, name: "CAJAMARCA" },
    { 'hc-key': 'pe-am', zoneId: 3, name: "AMAZONAS" },

    { 'hc-key': 'pe-md', zoneId: 4, name: "MADRE DE DIOS" },
    { 'hc-key': 'pe-cs', zoneId: 4, name: "CUSCO" },
    { 'hc-key': 'pe-ap', zoneId: 4, name: "APURÍMAC" } 
  ];

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
        nullColor: '#e0e0e0', 
        nullInteraction: false, 
        states: {
          hover: {
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
