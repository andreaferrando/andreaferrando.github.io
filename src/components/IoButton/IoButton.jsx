import { useState } from "react";
import Button from "@cred/neopop-web/lib/components/Button";
import ReactGA from 'react-ga4';

const IoButton = (props) => {
  const [isOver, setIsOver] = useState(false);
  const colorConfig = {
    backgroundColor: 'var(--primary)',
    borderColor: 'var(--secondary)',
    color: 'white'
  }

  const log = () => {
    ReactGA.event({
      category: 'Button',
      action: props.log ?? props.title ?? 'button clicked, add log name'
    });
  }

  return (
    <div>
      <a
          href={props.ahref}
          style={{textDecoration:"none"}}
          onClick={log}
          onMouseOver={() => {
            setIsOver(true);
          }}
          onMouseOut={() => {
            setIsOver(false);
          }}
        >
        <Button
          style={{opacity: (isOver && "active") ? 0.75 : 1.0}}
          colorConfig={colorConfig}
          kind="elevated"
          size="big"
          onClick={null}
          textStyle={{FontWeights:'light', fontSize:12}}
          disabled={props.disabled}
        >
          {props.title}
        </Button>
      </a>
    </div>
  );
};

export default IoButton;
