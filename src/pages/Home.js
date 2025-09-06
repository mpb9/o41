import { ArrowFatRight } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import TeamScore from '../components/team/TeamScore';
import { MATCHUPS } from '../data/MatchupData';
import { USERS } from '../data/UserData';
import { fetchLeagueData, fetchMatchupsData, fetchRostersData, fetchUsersData } from '../services/SleeperService';

export default function Home() {
  const [error, setError] = useState(null);
  const [matchups, setMatchups] = useState(null);
  const [rosters, setRosters] = useState(null);
  const [users, setUsers] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [currentMatchup, setCurrentMatchup] = useState(0);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const data = await fetchUsersData();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getUsersData();
  }, []);

  useEffect(() => {
    const getRosterData = async () => {
      try {
        const data = await fetchRostersData();
        setRosters(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    getRosterData();
  }, []);

  useEffect(() => {
    const getMatchupsData = async () => {
      try {
        const data = await fetchMatchupsData();
        setMatchups(data);
        setError(null);
        setLastUpdated(new Date());
      } catch (err) {
        setError(err.message);
      }
    };
    getMatchupsData();
    const intervalId = setInterval(getMatchupsData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleMatchup = () => {
    if (currentMatchup + 1 >= MATCHUPS.length) setCurrentMatchup(0);
    else setCurrentMatchup(currentMatchup + 1);
  };

  const getUserFromUserId = (user_id) => {
    return users.find((user) => user.user_id === user_id);
  };
  const getMatchupFromUserId = (user_id) => {
    const roster = getRosterFromUserId(user_id);
    return matchups.find((matchup) => matchup.roster_id === roster.roster_id);
  };
  const getRosterFromUserId = (user_id) => {
    return rosters.find((roster) => roster.user_id === user_id);
  };

  return (
    <div className='relative w-full min-h-screen bg-rad'>
      <Header lastUpdated={lastUpdated} activeRoute='Home' />

      {matchups !== null && rosters !== null && users !== null && currentMatchup !== null ? (
        <div className='flex flex-col items-center justify-start w-full overflow-scroll h-full-header'>
          <div className='w-[95%] px-4 h-full'>
            <div className='flex items-center justify-center w-full h-20'>
              <div className='hidden w-1/3 sm:block'></div>
              <h1 className='w-1/2 text-3xl text-center cursor-default sm:w-1/3 text-stone-200'>
                {MATCHUPS[currentMatchup].title}
              </h1>
              <div className='flex items-center pt-[3px] justify-end w-1/2 h-full sm:w-1/3 md:pr-14 text-primary'>
                <button
                  className='flex items-center justify-center px-3 text-[1.3rem] rounded-lg h-[50%] bg-stone-900 hover:bg-[#aed998] hover:text-stone-900'
                  onClick={toggleMatchup}>
                  <span>NEXT</span>
                  <ArrowFatRight weight='fill' className='ml-2' />
                </button>
              </div>
            </div>

            {MATCHUPS[currentMatchup].teams.length >= 3 ? (
              <div className='grid grid-cols-1 gap-2 pb-24 sm:grid-cols-2 md:grid-cols-3 xl:gap-4 xl:mx-10'>
                {MATCHUPS[currentMatchup].teams.map((user_id) => (
                  <TeamScore
                    key={user_id}
                    user={getUserFromUserId(user_id)}
                    roster={getRosterFromUserId(user_id)}
                    matchup={getMatchupFromUserId(user_id)}
                  />
                ))}
              </div>
            ) : (
              <div className='grid grid-cols-1 gap-2 pb-24 sm:grid-cols-2 xl:gap-8 xl:mx-14'>
                {MATCHUPS[currentMatchup].teams.map((user_id) => (
                  <TeamScore
                    key={user_id}
                    user={getUserFromUserId(user_id)}
                    roster={getRosterFromUserId(user_id)}
                    matchup={getMatchupFromUserId(user_id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center w-full text-3xl h-full-header text-primary'>
          Loading matchups...
        </div>
      )}
    </div>
  );
}
