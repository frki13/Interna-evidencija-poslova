import { useState } from 'react';
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <Link
            to={`/jobs/${job.id}`}>
    <div className='border-t-4 border-white bg-white rounded-l shadow-md relative hover:cursor-pointer hover:bg-gray-200 hover:shadow-xl hover:border-green-500'>

      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-black p-1 rounded-sm text-center w-full bg-indigo-200'>Status posla:{job.type}</div>
          <h3 className='text-xl font-bold'>{job.title}</h3>
        </div>

        <div className='mb-5'>Opis:{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-sm text-orange-500 mb-5 hover:text-black'
        >
          {showFullDescription ? 'Sakrij' : 'Prikaži više'}
        </button>

        <h3 className='text-gray-500 mb-2'>Naplata: {job.salary} KM</h3>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            Datum isporuke: {job.location}
          </div>
          <Link
            to={`/edit-job/${job.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 p-4 rounded-l focus:outline-none focus:shadow-outline mt-4'
          >
            Uredi
          </Link>
          
        </div>
      </div>
    </div></Link>
    
  );
};
export default JobListing;
