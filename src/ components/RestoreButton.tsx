import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToggleButtonProps } from "./ShowActiveButton";

export const RestoreButton = ({ onclick }: ToggleButtonProps) => {
  return (
    <Button onclick={onclick}>
      {<FontAwesomeIcon icon={faCalendarPlus} />}
    </Button>
  );
};
