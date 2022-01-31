import React from 'react';
// import Button from '../generic/Button';
import ProfileCard from '../profile/ProfileCard';
// import ProfileCard from './profile/ProfileCard';

const App = () => (
  // eslint-disable-next-line max-len
  // <><div>Welcome to DALIChat!</div><Button label="Test Label" onClick={() => console.log('clicked!')} />
  <ProfileCard fullName="Chelsea Joe" profileUrl="help" username="joe" uid="idk" blurb="Dartmouth 25" portfolioUrl="help" />

);

export default App;
