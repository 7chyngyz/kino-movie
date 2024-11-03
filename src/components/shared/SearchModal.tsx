import React, { useState } from "react";
import scss from "./SearchMulti.module.scss";
import { useRouter } from "next/navigation";

const SearchModal = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className={scss.Search}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie or tv show..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchModal;
