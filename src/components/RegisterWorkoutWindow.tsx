import { ReactNode } from 'react';

interface RegisterWorkoutWindowProps {
  isVisible: boolean;
  children: ReactNode;
}

export default function RegisterWorkoutWindow({
  isVisible,
  children,
}: RegisterWorkoutWindowProps) {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] h-[500px] ">
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </div>
  );
}
