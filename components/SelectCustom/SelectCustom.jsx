import React from 'react';
import Select from 'react-select'; // Импорт стилей
import styles from './SelectCustom.module.scss';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #0170B9', // Стиль границы
    borderRadius: '7px', // Скругление углов
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#0170B9' : '#fff',
    color: state.isFocused ? '#fff' : '#333',
  }),
};

export const SelectCustom = () => {
  return (
    <div className={styles.selectData}>
      <Select
        options={options}
        isSearchable={true}
        styles={{
          control: (provided, state) => ({
            ...provided,
            border: '1px solid #0170B9',
            borderRadius: '7px',
            width: '100%',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#0170B9' : '#fff',
            color: state.isFocused ? '#fff' : '#333',
          }),
          // You can add more styles as needed
        }}
        className={styles.input} // You may need to adjust this class name
        classNamePrefix="select"
      />
    </div>
  );
};