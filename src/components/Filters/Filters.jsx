import {
  DateWrap,
  FilterTitle,
  FilterWrap,
  IconWrap,
  Select,
} from "./Filters.styled";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Filters = ({
  allGenres,
  genre,
  onHandleChange,
  isFresh,
  toogleIsFresh,
}) => {
  return (
    <FilterWrap>
      <div>
        <FilterTitle>Фільтрувати за жанрами </FilterTitle>
        <Select name="genres" onChange={onHandleChange} value={genre} required>
          {allGenres &&
            allGenres.map((item, indx) => <option key={indx}>{item}</option>)}
        </Select>
      </div>
      <DateWrap onClick={toogleIsFresh}>
        <FilterTitle>По даті виходу</FilterTitle>
        <IconWrap>
          {isFresh ? <FaArrowUp fill="white" /> : <FaArrowDown fill="white" />}
        </IconWrap>
      </DateWrap>
    </FilterWrap>
  );
};

export default Filters;
