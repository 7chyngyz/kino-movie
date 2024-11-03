"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import ReduxProvider from "@/providers/ReduxProvider";
import Loader from "@/components/ui/loader/Loader";

interface ILayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutClientProps> = ({ children }) => {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const loading = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(loading);
  }, []);

  if (loader) {
    return <Loader />;
  }
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;
