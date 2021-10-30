import React from 'react'
import Buttons from "./Buttons";
import DateTime from "./DateTime";
import Selects from "./Selects";
import TextFields from "./TextFields";
import "./Form.css";

const Form = () => {
    return (
      <div className='doctor-form-inner'>
        <TextFields label={`Doctor's Name`} />
        <Selects />
        <DateTime/>
        <TextFields label={`Enter Patients Name`} type={`text`} />
        <TextFields label={`Enter Patient E-mail`} type={`email`} />
        <Buttons
          value="search"
          sx={{width: "100%"}}
          variant="contained"
        />
      </div>
    );
}

export default Form;