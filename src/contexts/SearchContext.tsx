import { Artist, Enterprise, User } from "../api/User";
import { AccountType } from "../enums/AccountType";
import { BrazilianState } from "../enums/BrazilianState";
import { ArtType } from "../enums/ArtType";
import { createContext, useState } from "react";

interface SearchStoreProps {
  children: React.ReactNode;
}

export const SearchContext = createContext({} as any);

export const SearchProvider = ({ children }: SearchStoreProps) => {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [artFilter, setArtFilter] = useState<ArtType>();

  const turnListOnCardData = (users: User[]) => {
    return users.map((user) => {
      const data = user.toObject();

      // Obtain art and wage in case search include artist
      const { art, wage } =
        user instanceof Artist
          ? user.toObject()
          : { art: undefined, wage: undefined };

      return {
        id: data.id,
        index: data.index,
        image: data.image,
        name: data.name,
        type: data.type,
        CEP: data.location?.CEP,
        city: data.location?.city,
        state: data.location?.state,
        art,
        wage,
      };
    });
  };

  const fetchRandomUsers = (typeSearched: AccountType, page = 0, limit = 5) => {
    // eslint-disable-next-line eqeqeq
    const userClient =
      typeSearched === AccountType.artist ? new Artist() : new Enterprise();
    userClient
      .fetchListWithoutFilter(page, limit)
      .then(turnListOnCardData)
      .then(setSearchResult)
      .catch((e) => console.log(e));
  };

  const fetchUsersByName = (
    typeSearched: AccountType,
    name: string,
    page = 0,
    limit = 5
  ) => {
    // eslint-disable-next-line eqeqeq
    const userClient =
      typeSearched === AccountType.artist ? new Artist() : new Enterprise();
    userClient
      .fetchListFilteringName(name, page, limit)
      .then(turnListOnCardData)
      .then(setSearchResult)
      .catch((e) => console.log(e.message));
  };

  const fetchUsersByLocation = (
    typeSearched: AccountType,
    state: BrazilianState,
    city: string,
    page = 0,
    limit = 5
  ) => {
    // eslint-disable-next-line eqeqeq
    const userClient =
      typeSearched === AccountType.artist ? new Artist() : new Enterprise();
    userClient
      .fetchListFilteringLocation(state, city, page, limit)
      .then(turnListOnCardData)
      .then(setSearchResult)
      .catch((e) => console.log(e.message));
  };

  return (
    <SearchContext.Provider
      value={{
        searchResult,
        setSearchResult,
        fetchRandomUsers,
        fetchUsersByName,
        fetchUsersByLocation,
        artFilter,
        setArtFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
