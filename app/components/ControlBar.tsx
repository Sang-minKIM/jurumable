import styled from "@emotion/styled";
import Link from "next/link";
import Dice from "react-dice-roll";

const ControlBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 100px;
`;

const Button = styled.button`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
`;

const ControlBar = ({ onRollDice }: { onRollDice: (value: 1 | 2 | 3 | 4 | 5 | 6) => void }) => {
    return (
        <ControlBarContainer>
            <Dice size={100} onRoll={(value) => onRollDice(value)} />
            <Link href="/">
                <Button>홈화면으로 가기</Button>
            </Link>
        </ControlBarContainer>
    );
};

export default ControlBar;
