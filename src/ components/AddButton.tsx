import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { ToggleButtonProps } from "./ShowActiveButton";

export const AddButton = ({ onclick }: ToggleButtonProps) => {
  return <Button onclick={onclick}>{<FontAwesomeIcon icon={faPlus} />}</Button>;
};
