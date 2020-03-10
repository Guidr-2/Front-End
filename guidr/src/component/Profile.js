import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

export default function Profile() {
  const [profileId, setProfileId] = useState();
  const [profileTitle, setProfileTitle] = useState();
  const [tagline, setTagline] = useState();
  const [guide_specialty, setGuide_specialty] = useState();

  useEffect(() => {
    axios
      .get('https://guidr-2.herokuapp.com/api/profiles/public/3')
      .then(response => {
        setProfileId(response.data[0].id);
        setProfileTitle(response.data[0].title);
        setTagline(response.data[0].tagline);
        setGuide_specialty(response.data[0].guide_specialty);
      })
      .catch(error => console.error(error));
  }, []);
  console.log('Profile', profileId);

  return (
    <div>
      <ProfileCard
        profileId={profileId}
        profileTitle={profileTitle}
        tagline={tagline}
        guide_specialty={guide_specialty}
      />
    </div>
  );
}
