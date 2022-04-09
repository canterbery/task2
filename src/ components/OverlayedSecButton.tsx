import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import { Placement } from "react-bootstrap/esm/types";

export interface OverlayedSecButtonProps {
  message: string;
  pic: JSX.Element;
  onclick: React.MouseEventHandler;
}
export const OverlayedSecButton = ({
  message,
  pic,
  onclick,
}: OverlayedSecButtonProps) => {
  return (
    <>
      <OverlayTrigger
        key="top"
        placement="left"
        overlay={<Tooltip id={`tooltip-top`}>{message}</Tooltip>}
      >
        <Button variant="secondary" onClick={onclick}>
          {pic}
        </Button>
      </OverlayTrigger>
    </>
  );
};
