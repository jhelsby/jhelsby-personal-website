'use client'

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useWeb3Forms from '@web3forms/react';

interface Input {
    name: string;
    label: string;
    type: string;
    validation: any;
}

interface FormProps {
    subject: string;
    formInputs: Input[];
}

const Form: React.FC<FormProps> = ({ subject, formInputs }) => {
    const accessKey = '861e7f48-e941-44e4-9650-ba0567db088a';
    const { register, handleSubmit } = useForm();
    const [buttonColor, setButtonColor] = useState('');
    const [buttonMessage, setButtonMessage] = useState('');

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: 'mail@jhelsby.com',
            subject: subject,
        },
        onSuccess: (message: string, data: any) => {
            console.log(message);
            setButtonColor('green');
            setButtonMessage('Email sent!');

            // Reset button color and message after 5 seconds
            setTimeout(() => {
                setButtonColor('');
                setButtonMessage('');
            }, 4000);
        },
        onError: (message: string, data: any) => {
            console.log(message);
            setButtonColor('red');
            setButtonMessage('Server error.');

            // Reset button color and message after 5 seconds
            setTimeout(() => {
                setButtonColor('');
                setButtonMessage('');
            }, 4000);
        },
    });

    return (
        <form onSubmit={handleSubmit((formData) => {
            setButtonColor('orange');
            setButtonMessage('Sending...');
            onSubmit(formData);
        })}>
            {formInputs.map((input, index) => (
                <div key={index}>
                    <label htmlFor={input.name}>{input.label}:</label>
                    {input.type === 'textarea' ? (
                        <textarea {...register(input.name, input.validation)} />
                    ) : (
                        <input type={input.type} {...register(input.name, input.validation)} />
                    )}
                </div>
            ))}
            <button
                type='submit'
                style={{ backgroundColor: buttonColor }}
                disabled={buttonMessage !== ''}
            >
                {buttonMessage || 'Submit'}
            </button>
        </form>
    );
};

export default Form;
