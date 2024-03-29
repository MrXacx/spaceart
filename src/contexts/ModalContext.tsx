import { createContext, useState } from "react";

interface ModalStoreProps {
  children: React.ReactNode;
}

export const ModalContext = createContext({} as any);

export const ModalProvider = ({ children }: ModalStoreProps) => {
  const [hideNewContract, setHideNewContract] = useState(true);
  const [hideNewSelection, setHideNewSelection] = useState(true);
  const [hideMyContract, setHideMyContract] = useState(true);
  const [hideMySelection, setHideMySelection] = useState(true);
  const [hideProfileUpdate, setHideProfileUpdate] = useState(true);
  const [hideNewPost, setHideNewPost] = useState(true);
  const [hideSelectArtist, setHideSelectArtist] = useState(true);
  const [hideLookRates, setHideLookRates] = useState(true);
  const [hidePrivateDataUpdate, setHidePrivateDataUpdate] = useState(true);
  const [skipSelectArtistToContract, setSkipSelectArtistToContract] =
    useState(false);
  const [hideSearchSelection, setHideSearchSelection] = useState(true);

  const toogleNewContractVisibility = () =>
    setHideNewContract(!hideNewContract);
  const toogleNewSelectionVisibility = () =>
    setHideNewSelection(!hideNewSelection);
  const toogleMyContractVisibility = () => setHideMyContract(!hideMyContract);
  const toogleMySelectionVisibility = () =>
    setHideMySelection(!hideMySelection);
  const toogleProfileUpdateVisibility = () =>
    setHideProfileUpdate(!hideProfileUpdate);
  const toogleNewPostVisibility = () => setHideNewPost(!hideNewPost);
  const toogleSelectArtistVisibility = () =>
    setHideSelectArtist(!hideSelectArtist);
  const toogleLookRatesVisibility = () => setHideLookRates(!hideLookRates);
  const tooglePrivateDataUpdateVisibility = () =>
    setHidePrivateDataUpdate(!hidePrivateDataUpdate);
  const toogleSearchSelectionVisibility = () =>
    setHideSearchSelection(!hideSearchSelection);

  return (
    <ModalContext.Provider
      value={{
        hideNewContract,
        toogleNewContractVisibility,
        hideNewSelection,
        toogleNewSelectionVisibility,
        hideMyContract,
        toogleMyContractVisibility,
        hideMySelection,
        toogleMySelectionVisibility,
        hideProfileUpdate,
        toogleProfileUpdateVisibility,
        hideNewPost,
        toogleNewPostVisibility,
        hideSelectArtist,
        toogleSelectArtistVisibility,
        hideLookRates,
        toogleLookRatesVisibility,
        skipSelectArtistToContract,
        setSkipSelectArtistToContract,
        hidePrivateDataUpdate,
        tooglePrivateDataUpdateVisibility,
        hideSearchSelection,
        toogleSearchSelectionVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
