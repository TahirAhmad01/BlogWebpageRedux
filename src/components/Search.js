import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
import SearchIco from "../assets/search.svg";
import { SearchKey } from "../redux/SearchBlog/action";

function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  useEffect(() => {
    dispatch(SearchKey(value.toLowerCase()));
  }, [value, dispatch]);

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <DebounceInput
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        minLength={1}
        debounceTimeout={500}
        onChange={handleInput}
        value={value}
        placeholder="Search"
      />

      <img className="inline h-6 cursor-pointer" src={SearchIco} alt="Search" />
    </div>
  );
}

export default Search;
