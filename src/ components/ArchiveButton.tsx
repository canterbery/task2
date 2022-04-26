import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToggleButtonProps } from "./ShowActiveButton";

export const ArchiveButton = ({ onclick }: ToggleButtonProps) => {
  return (
    <Button onclick={onclick}>
      {<FontAwesomeIcon icon={faCalendarMinus} />}
    </Button>
  );
};
