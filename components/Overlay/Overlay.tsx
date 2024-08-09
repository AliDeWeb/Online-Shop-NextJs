// Types
interface OverlayProps {
  isActive: boolean;
  onClick?: () => void;
}

const Overlay = ({ isActive, onClick }: OverlayProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? 'visible opacity-100' : 'invisible opacity-0'
      } fixed bottom-0 left-0 right-0 top-0 z-40 h-[100dvh] w-full bg-black/50 transition-all duration-300`}
    ></div>
  );
};

export default Overlay;
