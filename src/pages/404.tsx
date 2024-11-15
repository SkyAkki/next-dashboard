import Link from 'next/link';
import PrimaryButton from '@/components/common/PrimaryButton';
const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <PrimaryButton text="Go Back Home"/>
      </Link>
    </div>
  );
};

export default Custom404;