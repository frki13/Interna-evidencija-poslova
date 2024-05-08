import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className=' mx-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>Svi poslovi</h2>
            <p className='mt-2 mb-4'>
              Lista svih poslova u evidenciji
            </p>
            <Link
              to='/jobs'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Otvori
            </Link>
          </Card>
          <Card bg='bg-indigo-100'>
            <h2 className='text-2xl font-bold'>Novi posao?</h2>
            <p className='mt-2 mb-4'>
              Dodavanje poslova u evidenciju
            </p>
            <Link
              to='/add-job'
              className='inline-block bg-green-800 text-white rounded-lg px-4 py-2 hover:bg-green-600'
            >
              Unos posla
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
