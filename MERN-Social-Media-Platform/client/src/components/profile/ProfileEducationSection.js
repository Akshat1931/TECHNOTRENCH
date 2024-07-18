import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileEducation from './ProfileEducation';

const ProfileEducationSection = ({ profile }) => {
  return (
    <div className='profile-edu bg-white p-2'>
      <h2 className='text-pimary'>Education</h2>
      {profile.education && profile.education.length > 0 ? (
        <Fragment>
          {profile.education.map((education) => (
            <ProfileEducation key={education._id} education={education} />
          ))}
        </Fragment>
      ) : (
        <h4>No education credentials</h4>
      )}
    </div>
  );
};

ProfileEducationSection.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileEducationSection;
