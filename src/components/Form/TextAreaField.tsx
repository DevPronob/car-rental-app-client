import { Form } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import { Controller, FieldError, useFormContext } from 'react-hook-form'

function TextAreaField({ name, label, defaultValue }: { name: string; label: string, defaultValue?: string }) {
    const { formState: { errors } } = useFormContext();

    // Safely extract error message if it exists
    const errorMessage = (errors[name] as FieldError)?.message || '';
    return (
        <div>
            <div style={{ marginBottom: '20px', fontSize: '40px' }}>
                <Controller
                    render={({ field }) => (
                        <Form.Item
                            {...field}
                            label={label}
                            validateStatus={errorMessage ? 'error' : ''}
                            help={errorMessage as React.ReactNode} // Cast the message to ReactNode
                        >
                            <TextArea defaultValue={defaultValue} showCount maxLength={1000} placeholder="Write Here" />
                        </Form.Item>
                    )}
                    name={name}
                />
            </div>

        </div>
    )
}

export default TextAreaField