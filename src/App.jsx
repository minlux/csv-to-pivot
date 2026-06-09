import React, { useState, useEffect } from 'react';
import FileUploader from './components/FileUploader';
import RawCSVTable from './components/RawCSVTable';
import PivotConfigurator from './components/PivotConfigurator';
import PivotTable from './components/PivotTable';
import './styles/styles.css';

function App() {
  const [rawData, setRawData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [numericHeaders, setNumericHeaders] = useState([]);
  const [activeTab, setActiveTab] = useState('pivot');
  const [pivotConfig, setPivotConfig] = useState({
    rowFields: [],
    colFields: [],
    valFields: [],
    aggregateFuncs: {},
  });

  useEffect(() => {
    if (rawData.length > 0 && headers.length > 0) {
      const isDate = (value) => {
        const parsed = Date.parse(value);
        return !isNaN(parsed) && isNaN(Number(value));
      };

      const numerics = headers.filter(header =>
        rawData.some(row => {
          const val = row[header];
          const num = parseFloat(val);
          return (
            val !== '' &&
            !isNaN(num) &&
            !isDate(val)
          );
        })
      );

      setNumericHeaders(numerics);
    }
  }, [rawData, headers]);

  const { rowFields, colFields, valFields, aggregateFuncs } = pivotConfig;

  return (
    <div className="mainApp">
      <h1 className="home">CSV to Pivot Table</h1>

      <FileUploader setRawData={setRawData} setHeaders={setHeaders} />

      {rawData.length > 0 && (
        <>
          <div className="tabs">
            <button
              className={`tab-btn${activeTab === 'pivot' ? ' active' : ''}`}
              onClick={() => setActiveTab('pivot')}
            >
              Pivot Table
            </button>
            <button
              className={`tab-btn${activeTab === 'raw' ? ' active' : ''}`}
              onClick={() => setActiveTab('raw')}
            >
              Raw Data
            </button>
          </div>

          {activeTab === 'pivot' && (
            <div className="pivot-container">
              <PivotConfigurator
                data={rawData}
                headers={headers}
                numericHeaders={numericHeaders}
                pivotConfig={pivotConfig}
                setPivotConfig={setPivotConfig}
              />
              <PivotTable
                rawData={rawData}
                rowFields={rowFields}
                colFields={colFields}
                valFields={valFields}
                aggregateFuncs={aggregateFuncs}
              />
            </div>
          )}

          {activeTab === 'raw' && (
            <RawCSVTable data={rawData} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
