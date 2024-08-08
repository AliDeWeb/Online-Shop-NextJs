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
        isActive ? "opacity-100 visible" : "opacity-0 invisible"
      } z-40 fixed top-0 right-0 left-0 bottom-0 w-full h-[100dvh] bg-black/50 transition-all duration-300`}
    ></div>
  );
};

export default Overlay;
