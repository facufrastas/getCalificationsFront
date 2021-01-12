import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const InputBox = ({ title, keyText, type }) => {
    return (
        <div className="alineado-completo">
            <FormGroup>
                <Label for={keyText} className="font-weight-bold">{title}</Label>
                <Input style={{ width: '300px' }} type={type} name={keyText} id={keyText} placeholder={`Ingrese su ${title.toLowerCase()}`} />
            </FormGroup>
        </div>
    );
};