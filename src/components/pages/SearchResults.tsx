"use client";
import { useParams } from "next/navigation";
import scss from "./SearchResults.module.scss";
import { useGetSearchQuery } from "@/redux/api/search";
import Header from "../layout/header/Header";

const SearchResults = () => {
  const params = useParams();
  const query = params.query;

  const { data } = useGetSearchQuery(query as string, {
    skip: !query,
  });

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const getFormattedDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className={scss.SearchResults}>
      <Header />
      <div className="container">
        <h2>Search Results:</h2>
        <div className={scss.results}>
          {data?.results?.length > 0 ? (
            data.results.map((item: any) => (
              <div key={item.id} className={scss.result_card}>
                {item.media_type === "movie" &&
                  (item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                      className={scss.image}
                    />
                  ) : (
                    <div className={scss.non_img}>
                      {" "}
                      <img
                        src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
                        alt=""
                      />{" "}
                    </div>
                  ))}
                {item.media_type === "tv" &&
                  (item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                      className={scss.image}
                    />
                  ) : (
                    <div className={scss.non_img}>
                      {" "}
                      <img
                        src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
                        alt=""
                      />{" "}
                    </div>
                  ))}
                {item.media_type === "person" &&
                  (item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                      className={scss.image}
                    />
                  ) : (
                    <div className={scss.non_img}>
                      {" "}
                      <img
                        src="https://ecomovie.life/assets/no-poster-4xa9LmsT.png"
                        alt=""
                      />{" "}
                    </div>
                  ))}
                <div className={scss.result_text}>
                  <h3>
                    {truncateText(
                      item.media_type === "movie" ? item.title : item.name,
                      20
                    )}
                  </h3>
                  {item.release_date && (
                    <p>{getFormattedDate(item.release_date)}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
