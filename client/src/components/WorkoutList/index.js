import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3>No Workouts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {workouts &&
        workouts.map(workout => (
          <div key={workout._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${workout.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {workout.username}
              </Link>{' '}
              workout on {workout.day}
            </p>
            <div className="card-body">
              <Link to={`/workout/${workout._id}`}>
                <p>{workout.muscle} muscle worked out.</p>
                <p>{workout.name} exercise.</p>
                <p>{workout.weight} pounds.</p>
                <p>{workout.reps} reps.</p>
                <p>{workout.sets} sets.</p>
                <p>{workout.duration} minutes.</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WorkoutList;
