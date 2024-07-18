import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileExperience from './ProfileExperience';

const ProfileExperienceSection = ({ profile }) => {
  return (
    <div className='profile-exp bg-white p-2'>
      <h2 className='text-pimary'>Experience</h2>
      {profile.experiences && profile.experiences.length > 0 ? (
        <Fragment>
          {profile.experiences.map((experience) => (
            <ProfileExperience key={experience._id} experience={experience} />
          ))}
        </Fragment>
      ) : (
        <h4>No experience credentials</h4>
      )}
    </div>
  );
};

ProfileExperienceSection.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileExperienceSection;
