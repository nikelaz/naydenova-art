import { comfortaa } from '../fonts';

const FilterButton = ({isActive, onClick, children}) => {
  let styles = 'py-1 px-5 rounded-3xl transition ';

  if (isActive) {
    styles += 'bg-pink-100 text-black hover:bg-teal-950 pointer-events-none';
  } else {
    styles += 'text-pink-900 hover:text-pink-850';
  }

  return (
    <button onClick={onClick} className={`${comfortaa.className} ${styles}`}>
      {children}
    </button>
  );
};

export default FilterButton;
 