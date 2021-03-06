import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {capitalizeFirstLetter} from '../utils/helpers'
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth'
import WorkoutList from '../components/WorkoutList';
import WorkoutForm from '../components/WorkoutForm';


const Profile = (props) => {
    
    const { username: userParam } = useParams();

    //controller please set this query up
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};
    //navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to='/profile/:username' />;
    }

    if (loading) {
        return <div> Loading... </div>;
    }

    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page. Use the navigation links above to sign up or log in!
            </h4>
        );
    }

    

    return (
        <div>
            <div>
                <h2 className="subheader">
                    Viewing {userParam ? `${capitalizeFirstLetter(user.username)}'s` : 'your'} profile.
                </h2>
                {user.username && (
                    <WorkoutForm></WorkoutForm>
                )
                }
            </div>

            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                    <WorkoutList
                        workouts={user.workouts}
                        title={`${capitalizeFirstLetter(user.username)}'s workouts...`}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
