import { DatePicker, Form } from 'antd'
import React from 'react'
import { Controller } from 'react-hook-form'
type TInputProps = {
    name: string;
    label?: string;
    disabled?: boolean;
};
function DateField({ name, label }: TInputProps) {
    return (
        <div style={{ marginBottom: '20px' }}>
            <Controller
                name={name}
                render={({ field }) => (
                    <Form.Item label={label}>
                        <DatePicker {...field} size="large" style={{ width: '100%' }} />
                    </Form.Item>
                )}
            />
        </div>
    )
}

export default DateField