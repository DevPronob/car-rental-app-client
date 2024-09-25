import { Form, Select } from 'antd';
import { Controller } from 'react-hook-form';

type TPHSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string; disabled?: boolean }[] | undefined;
    disabled?: boolean;
    mode?: 'multiple' | undefined;
    defaultValue?: { value: string; label: string; disabled?: boolean }[] | undefined;

};

function SelectField({ label, name, options, disabled, mode, defaultValue }: TPHSelectProps) {
    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        mode={mode}
                        defaultValue={defaultValue}
                        style={{ width: '100%' }}
                        {...field}
                        options={options}
                        size="large"
                        disabled={disabled}
                    />
                    {error && <small style={{ color: 'red' }}>{error.message}</small>}
                </Form.Item>
            )}
        />
    )
}

export default SelectField