import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToggleButtonProps } from "./ShowActiveButton";

export const DeleteButton = ({ onclick }: ToggleButtonProps) => {
  return (
    <Button onclick={onclick}>{<FontAwesomeIcon icon={faTrashCan} />}</Button>
  );
};
