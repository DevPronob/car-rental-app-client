import { Form, Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FieldError } from 'react-hook-form';

type TInputProps = {
    type: string;
    name: string;
    label?: string;
    disabled?: boolean;
    defaultValue?: string;
};

function InputField({ type, name, label, disabled, defaultValue }: TInputProps) {
    const { formState: { errors } } = useFormContext();

    // Safely extract error message if it exists
    const errorMessage = (errors[name] as FieldError)?.message || '';

    return (
        <div style={{ marginBottom: '20px', fontSize: '40px' }}>
            <Controller
                render={({ field }) => (
                    <Form.Item
                        label={label}
                        validateStatus={errorMessage ? 'error' : ''}
                        help={errorMessage as React.ReactNode} // Cast the message to ReactNode
                    >
                        <Input
                            {...field}
                            defaultValue={defaultValue}
                            type={type}
                            id={name}
                            size="large"
                            disabled={disabled}
                        />
                    </Form.Item>
                )}
                name={name}
            />
        </div>
    );
}

export default InputField;
