import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutList = ({ workouts, title }) => {
  if (!workouts.length) {
    return <h3 style={{ textDecoration: "underline", fontStyle: "italic" }} className='subheader'>No Workouts Yet!</h3>;
  }

  return (
    <div style={{ backgroundColor: "#a3cef1" }}>
      <div >
        <h3>{title}</h3>
      </div>
      {workouts &&
        workouts.map(workout => (
          <div key={workout._id} className="card">
            <p className="card-divider">
              <Link
                to={`/profile/${workout.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {workout.username}
              </Link>{' '}
              Workout on {workout.day}
            </p>
            <div className="card-section">
              <Link to={`/workout/${workout._id}`}>
                <p>{workout.exercises.name} /</p>
                <p >{workout.exercises.muscle} muscle worked out /</p>
                <p>{workout.exercises.weight} pounds /</p>
                <p>{workout.exercises.reps} reps /</p>
                <p>{workout.exercises.sets} sets /</p>
                <p>{workout.exercises.duration} minutes /</p>
              </Link>
            </div>
          </div>
        ))}
        <div>
          _
        </div> 
    </div>
  );
};

export default WorkoutList;
