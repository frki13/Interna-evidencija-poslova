const Hero = ({
  title = 'Interna evidencija poslova',
  subtitle = 'Razvijano u React.js za internu evidenciju by Almir',
}) => {
  return (
    <section style={{ backgroundImage: 'url("https://asprint.ba/wp-content/uploads/2024/04/112.png")', backgroundRepeat: 'no-repeat'}} className='bg-indigo-400 py-20 mb-4 justify-start'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col'>
        <div>
          <h1 className='text-right text-4xl font-extrabold text-black sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-right text-white'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
