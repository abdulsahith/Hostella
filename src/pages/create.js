import React, { useState } from 'react';
import './create.css';

function Create() {
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [date, setDate] = useState('');
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');  // Optional: To show success or error message

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('https://9e9e-2401-4900-4dea-3eb3-1452-4bd3-1433-cd5e.ngrok-free.app/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, dept, date, reason }),
        });

            if (response.ok) {
                setMessage('Form submitted successfully!');
                setName('');
                setDept('');
                setDate('');
                setReason('');
            } else {
                setMessage('Failed to submit form.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            console.error("Error:", error);
        }
    };

    return (
        <div className='container'>
            <div className='form-box'>
                <form onSubmit={handleSubmit}>
                    <div className='input-div'>
                        <input
                            className='input'
                            placeholder='Enter Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-div'>
                        <input
                            className='input'
                            placeholder='Enter Department'
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-div'>
                        <input
                            className='input'
                            type='date'  // Type set to date for better UX
                            placeholder='Enter Leave Date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className='input-div'>
                        <textarea
                            className='input'
                            placeholder='Reason For Leave'
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button className='btn' type='submit'>Submit</button>
                    {message && <p>{message}</p>}  {/* Display success or error message */}
                </form>
            </div>
        </div>
    );
}

export default Create;
