import { OverlayTrigger, Tooltip, Button } from "react-bootstrap";

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
