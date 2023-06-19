import React, { useState, useCallback } from "react";

const InfoContext = React.createContext({
  informations: null,
  infoAreLoading: false,
  loadingError: null,
  fetchNotifications: () => {},
});

export const InfoContextProvider = (props) => {
  const [informationData, setInformationData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const transformDate = (dateString) => {
    const dateArray = dateString.split("T");
    const date = dateArray[0];
    const dateFragments = date.split("-");
    const year = dateFragments[0];
    const month = dateFragments[1];
    const day = dateFragments[2];
    const transformedDate = `${day}.${month}.${year}.`;
    return transformedDate;
  };

  const fetchNotifications = useCallback(async () => {
    if (informationData) {
      return informationData;
    }

    setIsLoading(true);

    try {
      const response = await fetch("api/notifications");
      const responseData = await response.json();
      const transformedInfo = responseData.notifications.map((infoData) => {
        return {
          id: infoData.id.toString(),
          title: infoData.name,
          text: infoData.description,
          date: transformDate(infoData.time),
        };
      });
      setInformationData(transformedInfo);
      setIsLoading(false);
    } catch (error) {
      setError("Дошло је до грешке, обавештења нису могла да се учитају!");
      setIsLoading(false);
    }
  }, [informationData]);

  const contextValue = {
    informations: informationData,
    infoAreLoading: isLoading,
    loadingError: error,
    fetchNotifications,
  };

  return (
    <InfoContext.Provider value={contextValue}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
