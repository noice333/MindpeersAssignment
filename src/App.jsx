import React from 'react';
import './App.css'
import CustomDoughnut from './CustomDoughnut';
import { useContext } from 'react';
import { ThemeContext } from './themeContext';
import FlowZone from './FlowZone';

const App = () => {

  const theme = useContext(ThemeContext);

  const data = [
    {
      start: new Date("2015-03-25T04:00:00"),
      end: new Date("2015-03-25T08:00:00")
    },
    {
      start: new Date("2015-03-25T16:00:00"),
      end: new Date("2015-03-25T20:00:00")
    },
  ];

  return (
    <div className="App px-3 px-sm-0" style={{ background: theme.background, width: '100%', height: 'calc(100% - 2.625em) !important' }}>
      <FlowZone>
        <CustomDoughnut data={data} />
      </FlowZone>
    </div>
  )
};

export default App;