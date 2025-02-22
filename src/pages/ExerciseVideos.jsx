import React, { useState } from 'react';
import '../styles/ExerciseVideos.css';

const exerciseData = [
  { id: 1, category: 'Period Pain Relief', title: 'Yoga for Period Pain', videoUrl: 'https://youtube.com/embed/2X78NWuRfJU?si=mZXD1fKW56ok9Bwy' },
  { id: 2, category: 'Pregnancy', title: 'Prenatal Yoga', videoUrl: 'https://www.youtube.com/embed/B87FpWtkIKA?si=UYGWOymwTkQncyNI' },
  { id: 3, category: 'Daily Fitness', title: 'Morning Stretch', videoUrl: 'https://www.youtube.com/embed/rwdbg4W2Rbs?si=p5cjG09mtmVToQb8' },
  { id: 4, category: 'Breathing Exercises', title: 'Mind Calming Breathing', videoUrl: 'https://www.youtube.com/embed//lPJAtHWq08k?si=DzRJLQtZcrhRr3Am' },
  { id: 5, category: 'Hormonal Imbalance', title: 'Hormonal Balance Workout', videoUrl: 'https://www.youtube.com/embed/5JvbjrLESPs?si=G1Vr8MQq4V6xzMtJ' },
  { id: 5, category: 'Back Pain Relief', title: 'Back Pain Relief', videoUrl: 'https://www.youtube.com/embed/U3DParHgSMc?si=FJwlsya4v9mprtuR' }
];

const ExerciseVideos = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredVideos = exerciseData.filter((video) =>
    (filter === 'All' || video.category === filter) &&
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='exercise-videos-container'>
      <h1>Exercise Videos for Women's Health</h1>

      <div className='search-filter-container'>
        <input
          type='text'
          placeholder='Search exercises...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value='All'>All</option>
          <option value='Period Pain Relief'>Period Pain Relief</option>
          <option value='Pregnancy'>Pregnancy</option>
          <option value='Daily Fitness'>Daily Fitness</option>
          <option value='Breathing Exercises'>Breathing Exercises</option>
          <option value='Hormonal Imbalance'>Hormonal Imbalance</option>
          <option value='Back Pain Relief'>Back Pain Relief</option>
        </select>
      </div>

      <div className='video-grid'>
        {filteredVideos.map((video) => (
          <div key={video.id} className='video-card'>
            <h3>{video.title}</h3>
            <iframe
              width='100%'
              height='315'
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;