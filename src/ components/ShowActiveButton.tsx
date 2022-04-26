import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

export interface ToggleButtonProps {
  onclick?: React.MouseEventHandler;
}

export const ShowActiveButton = ({ onclick }: ToggleButtonProps) => {
  return (
    <Button onclick={onclick}>{<FontAwesomeIcon icon={faCalendar} />}</Button>
  );
};
