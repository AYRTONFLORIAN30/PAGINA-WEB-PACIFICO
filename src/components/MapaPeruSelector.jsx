import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highmaps'; 
import HighchartsReact from 'highcharts-react-official';
import './MapaPeruSelector.css';

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

  const data = [
    { 'hc-key': 'pe-lb', color: activeZoneId === 3 ? '#76b900' : '#005691', zoneId: 3, name: "LAMBAYEQUE" },

    { 'hc-key': 'pe-hc', color: activeZoneId === 2 ? '#76b900' : '#005691', zoneId: 2, name: "HUÁNUCO" },
    
    { 'hc-key': 'pe-ju', color: activeZoneId === 1 ? '#76b900' : '#005691', zoneId: 1, name: "JUNÍN" },

    { 'hc-key': 'pe-md', color: activeZoneId === 4 ? '#76b900' : '#005691', zoneId: 4, name: "MADRE DE DIOS" }, 
  ];

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
      borderColor: '#76b900',
      borderRadius: 10,
      pointFormatter: function() {
        if (this.zoneId) return `📍 ${this.name}`;
        return false;
      }
    },
    plotOptions: {
      map: {
        allAreas: true,
        borderColor: 'white',
        borderWidth: 1.5,
        nullColor: '#d3d3d3', 
        nullInteraction: false, 
        states: {
          hover: {
            color: '#007cc3',
            brightness: 0.1
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
      data: data,
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