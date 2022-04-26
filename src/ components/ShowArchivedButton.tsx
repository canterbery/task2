import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

import { ToggleButtonProps } from "./ShowActiveButton";

export const ShowArchivedButton = ({ onclick }: ToggleButtonProps) => {
  return (
    <Button onclick={onclick}>
      {<FontAwesomeIcon icon={faCalendarCheck} />}
    </Button>
  );
};
