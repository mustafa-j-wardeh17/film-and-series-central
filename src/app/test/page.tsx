'use client'
import React, { useState } from 'react';
import { CreateMovie, CreateSeedData, CreateSerieAndEpisodes } from '../../../lib/actions';

const TestForData = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            await CreateSeedData();
            setMessage('Data seeded successfully!');
        } catch (error) {
            setMessage('Error seeding data.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleMovieSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            await CreateMovie();
            setMessage('Movie seeded successfully!');
        } catch (error) {
            setMessage('Error seeding data.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleSerieSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            await CreateSerieAndEpisodes();
            setMessage('Serie seeded successfully!');
        } catch (error) {
            setMessage('Error seeding data.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-screen flex h-screen items-center justify-center gap-7 ">
            <form onSubmit={handleSubmit} className='flex flex-col '>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-md bg-sky-500 shadow-md transition-all duration-300 hover:bg-sky-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                >
                    {isSubmitting ? 'Submitting...' : 'Test For Data'}
                </button>
            </form>
            <form onSubmit={handleMovieSubmit}>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-md bg-sky-500 shadow-md transition-all duration-300 hover:bg-sky-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                >
                    {isSubmitting ? 'Submitting...' : 'Test For Movie'}
                </button>
            </form>
            <form onSubmit={handleSerieSubmit}>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-2 rounded-md bg-sky-500 shadow-md transition-all duration-300 hover:bg-sky-300 ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                        }`}
                >
                    {isSubmitting ? 'Submitting...' : 'Test For Serie'}
                </button>
            </form>
            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
};

export default TestForData;
