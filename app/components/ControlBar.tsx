import styled from "@emotion/styled";
import Link from "next/link";

const ControlBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Button = styled.button`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
`;

const ControlBar = ({ onRollDice }: { onRollDice: () => void }) => {
    return (
        <ControlBarContainer>
            <Button onClick={onRollDice}>주사위 던지기</Button>
            <Link href="/">
                <Button>홈화면으로 가기</Button>
            </Link>
        </ControlBarContainer>
    );
};

export default ControlBar;
