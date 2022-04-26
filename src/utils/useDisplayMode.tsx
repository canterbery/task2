import { useState } from "react";

export const useDisplayMode = () => {
  const [showArchived, setDisplayMode] = useState(false);
  const toggleDisplayMode = () => setDisplayMode(!showArchived);
  return { toggleDisplayMode, showArchived };
};
