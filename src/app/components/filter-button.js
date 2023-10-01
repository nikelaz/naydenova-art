import { comfortaa } from '../fonts';

const FilterButton = ({isActive, onClick, children}) => {
  let styles = 'py-1 px-5 rounded-3xl transition ';

  if (isActive) {
    styles += 'bg-teal-800 text-white hover:bg-teal-700';
  } else {
    styles += 'text-teal-900 hover:text-teal-800';
  }

  return (
    <button onClick={onClick} className={`${comfortaa.className} ${styles}`}>
      {children}
    </button>
  );
};

export default FilterButton;
 