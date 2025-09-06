import Header from '../components/common/Header';

export default function InactiveLeague() {
  return (
    <div className='min-h-screen bg-stone-800'>
      <Header activeRoute='Home' />
      <div className='p-36'>
        <div className='text-center text-yellow-50'>
          <h1 className='text-5xl'>OFF-SEASON</h1>
          <p className='pt-16 text-2xl text-red-500'>(need to reactivate on Sleeper)</p>
          <p className='pt-4 text-2xl'>come back later</p>
        </div>
      </div>
    </div>
  );
}
