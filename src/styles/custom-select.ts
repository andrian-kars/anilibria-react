import { StylesConfig } from 'react-select'

export const customSelectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    cursor: 'text',
    minHeight: '43px',
    padding: '6px 12px',
    fontSize: '11pt',
    borderColor: '#ccc',
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
    fontSize: '11pt',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    fontSize: '15px',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
  // dropdownIndicator: (provided) => ({
  //   ...provided,
  //   padding: '2px',
  //   // width: '10px',
  // }),
  // clearIndicator: () => ({
  //   display: 'none',
  // }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
}
