import Image from 'next/image';
import cardS1 from '../Assets/Section1/cardS1.png';
import cardS1d from '../Assets/Section1/cardS1d.png';
function Section1() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
      <div className="w-full md:w-1/2 max-w-xl rounded-lg shadow-md overflow-hidden flex flex-row">
        <div className="w-1/2 h-auto">
          <Image src={cardS1} alt="Image 1" width={400} height={400} objectFit="cover" />
        </div>
        <div className="p-4 w-1/2">
          <h2 className="text-l font-bold mb-2 text-green-700">SALE UP TO 15%</h2>
          <p className="text-gray-700 font-bold ">Innovation in Education (Hardcover) </p>
          <p>Starting at: <span className='text-green-700'>$65.09</span></p>
        </div>
      </div>
      <div className="w-full md:w-1/2 max-w-xl rounded-lg shadow-md overflow-hidden flex flex-row">
        <div className="w-1/2 h-auto">
          <Image src={cardS1d} alt="Image 2" width={400} height={400} objectFit="cover" />
        </div>
        <div className="p-4 w-1/2">
          <h2 className="text-l font-bold mb-2 text-green-700">SALE UP TO 10%</h2>
          <p className="text-gray-700 font-bold ">Innovation in Education (Hardcover) </p>
          <p>Starting at: <span className='text-green-700'>$50.09</span></p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
