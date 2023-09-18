import { XMarkIcon } from '@heroicons/react/24/outline';
import { Children, ReactNode } from 'react';

interface RegisterWorkoutWindowProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function RegisterWorkoutWindow({
  isVisible,
  onClose,
  children,
}: RegisterWorkoutWindowProps) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] h-[500px] ">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
}
