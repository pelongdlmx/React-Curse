import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDataSheet from 'react-datasheet';
import _ from 'lodash';
import 'react-datasheet/lib/react-datasheet.css';
 

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grid: [
        [{readOnly: true, value: ''},{value:'Parts', readOnly: true},{value:'Marketing Description', readOnly: true},{value:'Number of cores', readOnly: true},{value:'CPU', readOnly: true},{value:'Core supply voltage', readOnly: true},{value:'CPU Frequency (max)(MHz)', readOnly: true},{value:'Data Bus Freq (MAX)', readOnly: true},{value:'Total Flash Memory (KB)', readOnly: true},{value:'EEPROM/FlexRAM (KB)', readOnly: true},{value:'RAM', readOnly: true},{value:'QSPI', readOnly: true},{value:'@AAE995', readOnly: true},{value:'Cache (bytes)', readOnly: true},{value:'Floating point unit', readOnly: true},{value:'UART', readOnly: true},{value:'SCI', readOnly: true},{value:'LIN', readOnly: true},{value:'I2C', readOnly: true},{value:'FlexIO', readOnly: true},{value:'SPI', readOnly: true},{value:'USB', readOnly: true},{value:'Ethernet', readOnly: true},{value:'@type', readOnly: true},{value:'CAN', readOnly: true},{value:'@CAN note', readOnly: true},{value:'Number of Audio Peripherals', readOnly: true},{value:'SAI', readOnly: true},{value:'ADC (8 bit)', readOnly: true},{value:'ADC (10 bit)', readOnly: true},{value:'@channels', readOnly: true},{value:'@ADC note', readOnly: true},{value:'ADC (16 bit)', readOnly: true},{value:'ADC (12 bit)', readOnly: true},{value:'@channels__1', readOnly: true},{value:'@ADC note__1', readOnly: true},{value:'ADC (24 bit)', readOnly: true},{value:'DAC (6 bit)', readOnly: true},{value:'DAC (12 bit)', readOnly: true},{value:'PWM (16 bit)', readOnly: true},{value:'@channels__2', readOnly: true},{value:'TIM (16 bit)', readOnly: true},{value:'@channels__3', readOnly: true},{value:'@TIM note', readOnly: true},{value:'Quad decoder General purpose PWM (2ch)', readOnly: true},{value:'32-bit Timer Modules', readOnly: true},{value:'Segment LCD(S-LCD)', readOnly: true},{value:'Graphic LCD (G-LCD)', readOnly: true},{value:'Touch system interface(TSI)', readOnly: true},{value:'GPIOs', readOnly: true},{value:'Analog Comparator', readOnly: true},{value:'Internal analog functions (COMP)', readOnly: true},{value:'Internal analog functions (VREF)', readOnly: true},{value:'Internal analog functions (PGA)', readOnly: true},{value:'Internal analog functions (TRIAMP)', readOnly: true},{value:'Security method (CRC)', readOnly: true},{value:'Security method (RNG)', readOnly: true},{value:'Security method (mmCAU)', readOnly: true},{value:'Security method (DryICE)', readOnly: true},{value:'Security method (AES-D)', readOnly: true},{value:'Security method (LTC)', readOnly: true},{value:'Security Module (CSE)', readOnly: true},{value:'Debug and Trace (SWD)', readOnly: true},{value:'Debug and Trace (JTAG)', readOnly: true},{value:'Debug and Trace (cJTAG)', readOnly: true},{value:'Debug and Trace (TPIU)', readOnly: true},{value:'Debug and Trace (ITM)', readOnly: true},{value:'Debug and Trace (FPB)', readOnly: true},{value:'Debug and Trace (ETM)', readOnly: true},{value:'Debug and Trace (ETB)', readOnly: true},{value:'Debug and Trace (DWT)', readOnly: true},{value:'Debug and Trace (MTB)', readOnly: true},{value:'Ambient Temperature (Min)', readOnly: true},{value:'Ambient Temperature (Max)', readOnly: true},{value:'Voltage (min) (V)', readOnly: true},{value:'Voltage (max) (V)', readOnly: true},{value:'DMA', readOnly: true},{value:'Voltage (max) (V)', readOnly: true},{value:'DMA', readOnly: true}]
        // [{readOnly: true, value: 1}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        // [{readOnly: true, value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
        // [{readOnly: true, value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
        // [{readOnly: true, value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
      ]
    }
  }
  componentDidMount(){
    
  }
  render () {
    const myData = require('./data.json'); 
    const myTitles = require('./titles.json'); 
    let dataToState = `[{readOnly: true, value: ''},`; 
    myTitles.map((value, index) => {
      let totalObj = myTitles.length
      
      if(index >= 0 && index < totalObj-1){
        dataToState += `{value:'${value.title}', readOnly: true},`
      } if(index === totalObj-1){
        dataToState += `{value:'${value.title}', readOnly: true}]`
      }
    })
    dataToState = dataToState.replace(/(?:\r\n|\r|\n)/g, '')
    console.log(dataToState);
    // this.setState({grid: dataToState})

    return (
      <div>{console.log('this.state.grid', dataToState)}
        <ReactDataSheet
          data={this.state.grid}
          valueRenderer={(cell) => cell.value}
          onCellsChanged={changes => {
            const grid = this.state.grid.map(row => [...row])
            changes.forEach(({cell, row, col, value}) => {
              grid[row][col] = {...grid[row][col], value}
            })
            this.setState({grid})
            console.log(grid)
          }}
        />
      </div>
    )
  }
}

export default App;
