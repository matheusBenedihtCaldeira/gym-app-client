import Link from 'next/link';

interface DropDownMenuProps {
  isVisible: boolean;
}

export default function DropDownMenu({ isVisible }: DropDownMenuProps) {
  if (!isVisible) return null;
  return (
    <div className="text-center absolute top-20 right-4 z-10 w-48 origin-top-right rounded-md text-slate-900 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-slate-200">
      <ul>
        <Link href="profile">
          <li className="hover:bg-gray-200 transition duration-300 ease-out md:ease-in p-1">
            Your Profile
          </li>
        </Link>
        <Link href="#">
          <li className="hover:bg-gray-200 p-1 transition duration-300 ease-out md:ease-in">
            Logout
          </li>
        </Link>
      </ul>
    </div>
  );
}
