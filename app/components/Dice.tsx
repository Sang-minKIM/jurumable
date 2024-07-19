import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rollAnimation = keyframes`
  0% { content: '1'; }
  20% { content: '2'; }
  40% { content: '3'; }
  60% { content: '4'; }
  80% { content: '5'; }
  100% { content: '6'; }
`;

const DiceContainer = styled.div`
    font-size: 10rem;
    &::after {
        content: "${(props: { value: number }) => props.value}";
        animation: ${rollAnimation} 1s linear;
    }
`;

const Dice = ({ value }: { value: number }) => {
    return <DiceContainer value={value} />;
};

export default Dice;
