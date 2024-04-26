import { useEffect } from "react";

export const useDocumentEffect = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
}