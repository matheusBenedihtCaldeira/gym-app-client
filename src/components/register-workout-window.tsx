interface RegisterWorkoutWindowProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function RegisterWorkoutWindow({
  isVisible,
  onClose,
}: RegisterWorkoutWindowProps) {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={() => onClose()}
    >
      <div className="w-[600px] h-[500px] ">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2">Modal</div>
      </div>
    </div>
  );
}
