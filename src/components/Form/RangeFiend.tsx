import { Form, Slider } from 'antd'
import React from 'react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'
type TInputProps = {

    name: string;
    label?: string;
};
function RangeFiend({ label, name }: TInputProps) {
    const { formState: { errors } } = useFormContext();

    // Safely extract error message if it exists
    const errorMessage = (errors[name] as FieldError)?.message || '';
    return (
        <div style={{ marginBottom: '20px', fontSize: '40px' }}>
            <Controller
                render={({ field }) => (
                    <Form.Item
                        {...field}
                        label={label}
                        validateStatus={errorMessage ? 'error' : ''}
                        help={errorMessage as React.ReactNode} // Cast the message to ReactNode
                    >
                        <Slider defaultValue={30} disabled={false} />
                    </Form.Item>
                )}
                name={name}
            />
        </div>
    )
}

export default RangeFiend