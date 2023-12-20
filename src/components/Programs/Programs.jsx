import React from 'react';
import './Programs.css';
import {programsData} from './../../data/programsData';

function Programs() {
  return (
    <div>
      <div className="programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        
      </div>
    </div>
  )
}

export default Programs
