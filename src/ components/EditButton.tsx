import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToggleButtonProps } from "./ShowActiveButton";

export const EditButton = ({ onclick }: ToggleButtonProps) => {
  return (
    <Button onclick={onclick}>{<FontAwesomeIcon icon={faPencil} />}</Button>
  );
};
