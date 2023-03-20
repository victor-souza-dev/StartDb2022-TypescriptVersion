import { GlobalLoadingContext } from "./GlobalLoadingContext";
import { useState, useCallback, useEffect } from "react";

type PropsGlobalLoadingProvider = {
  children: JSX.Element;
};

export function GlobalLoadingProvider({
  children,
}: PropsGlobalLoadingProvider): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  const switchLoading = useCallback(() => {
    setLoading((prevLoading) => !prevLoading);
  }, []);

  return (
    <GlobalLoadingContext.Provider value={{ loading, switchLoading }}>
      {children}
    </GlobalLoadingContext.Provider>
  );
}
