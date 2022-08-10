import React from 'react';
import { useQuery } from '@apollo/client';

import DrinkCard from '../components/DrinkCard';
import ChooseType from '../components/ChooseType';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>

      <div className="flex-row justify-center">
      <ChooseType />
      <DrinkCard/>
{/*   
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <DrinkList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
