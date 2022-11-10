export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: 'text',
    minHeight: '43px',
    padding: '6px 12px',
    borderColor: state.isFocused ? '#b321215e' : '#161b22',
    outline: state.isFocused ? '#b321215e' : 'none',
    backgroundColor: '#161b22',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#b321215e',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    color: state.isFocused ? '#d83541' : 'inherit',
    backgroundColor: state.isFocused ? '#b321215e' : 'inherit',
    '&:hover': {
      backgroundColor: '#b321215e',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#161b22',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    fontSize: '15px',
    color: '#d83541',
  }),
  multiValue: (provided) => ({
    ...provided,
    color: '#d83541',
    backgroundColor: '#b321215e',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#b321215e',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    // borderColor: 'red',
  }),
  // clearIndicator: () => ({
  //   display: 'none',
  // }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
};
