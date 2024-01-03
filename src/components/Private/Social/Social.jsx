import google from '../../../assets/icons/google.png'

const Social = () => {
  return (
    <div className='mb-14'>
      <div>
        <div className="flex justify-center items-center gap-2 mt-6">
          <hr className="w-[200px] border-black" />
          Or
          <hr className="w-[200px] border-black" />
        </div>
      </div>
      <div className='font-medium mt-4'>
        <button className='flex items-center justify-around w-full border border-black py-3 rounded-full mt-2'>
            <img className='w-8' src={google} alt="google" />
            <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Social;
