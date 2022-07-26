import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_WORKOUT } from '../../utils/mutations';
// import { QUERY_WORKOUTS, QUERY_ME } from '../../utils/queries';

const WorkoutForm = () => {
    const [formState, setFormState] = useState({
        muscle: '', name: '', weight: '', reps: '', sets: "", duration: ""
    })
    const [characterCount, setCharacterCount] = useState(0);
    const [addWorkout, { error }] = useMutation(ADD_WORKOUT)
    // const [addWorkout, { error }] = useMutation(ADD_WORKOUT, {
    //     update(cache, { data: { addWorkout } }) {

    //         // could potentially not exist yet, so wrap in a try/catch
    //         try {
    //             // update me array's cache
    //             const { me } = cache.readQuery({ query: QUERY_ME });
    //             cache.writeQuery({
    //                 query: QUERY_ME,
    //                 data: { me: { ...me, workouts: [...me.workouts, addWorkout] } },
    //             });
    //         } catch (e) {
    //             console.warn("First workout insertion by user!")
    //         }

    //         // update workout array's cache
    //         const { workouts } = cache.readQuery({ query: QUERY_WORKOUTS });
    //         cache.writeQuery({
    //             query: QUERY_WORKOUTS,
    //             data: { workouts: [addWorkout, ...workouts] },
    //         });
    //     }
    // });

    // update state based on form input changes
    const handleChange = (e) => {
        if (e.target.value.length <= 280) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            setCharacterCount(e.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addWorkout({
                variables: {
                    exercises: { ...formState }
                },
            });

            // clear form value
            setFormState({
                muscle: '', name: '', weight: '', reps: '', sets: "", duration: ""
            });
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p
                className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
            >
                Character Count: {characterCount}/280
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Exercise name"
                    value={formState.name}
                    name="name"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="Target muscle"
                    value={formState.muscle}
                    name="muscle"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="weight used (pounds)"
                    value={formState.weight}
                    name="weight"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="reps"
                    value={formState.reps}
                    name="reps"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="sets"
                    value={formState.sets}
                    name="sets"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder="duration (in minutes)"
                    value={formState.duration}
                    name="duration"
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>
                <button className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default WorkoutForm;
