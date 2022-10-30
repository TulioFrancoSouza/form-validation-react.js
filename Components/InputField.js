import React, {forwardRef, useImperativeHandle} from 'react';

const InputField = forwardRef((props, ref)=>{
  const [value, setValue] = React.useState('');

  const handleChange = (event)=>{
    setValue(event.target.value);
    props.onChange(event.target.name, event.target.value)
  }

  const validate = ()=>{
    return true;
  }
  
  useImperativeHandle(ref, ()=>{
    return {
      validate: ()=> validate()
    }
  })

  return(
    
    <div>
      {props.label && (
      <label>{props.label}</label>
    )}
      <input 
      placeholder={props.placeholder}
      name = {props.name}
      value = {props.value ? props.value : value}
      onChange = {(event) => handleChange(event)}
      type = {props.type}
      autoComplete={props.autoComplete}
      />
    </div>
  )

})

InputField.defaultProps = {
placeholder: '',
name: '',
type: '',
autoComplete: 'off',
value: '',
}

export default InputField