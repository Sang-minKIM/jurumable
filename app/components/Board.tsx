import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 1px;
    width: 100%;
    height: 100%;
`;

const Cell = styled.div<{ isActive: boolean; bgColor: string }>`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-break: keep-all;
    color: ${({ bgColor }) => (bgColor === "#FAFFAF" ? "black" : "white")};
    background-color: ${({ bgColor }) => bgColor};

    background-color: ${({ isActive, bgColor }) => (isActive ? "#EF5A6F" : bgColor)};
`;

const EmptyCell = styled.div`
    grid-column: 2/ 10;
    grid-row: 2/ 8;
`;

const boardGrid = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 31, 10, 30, 11, 29, 12, 28, 13, 27, 14, 26, 15, 25, 24, 23, 22, 21, 20, 19, 18, 17,
    16,
];

const cellData = [
    { content: "출발", bgColor: "#FAFFAF" },
    { content: "양 옆 마셔!", bgColor: "#96C9F4" },
    { content: "이름에 'ㅇ' 들어간사람", bgColor: "#3FA2F6" },
    { content: "함 봐준다", bgColor: "#0F67B1" },
    { content: "오른쪽 마셔!", bgColor: "#96C9F4" },
    { content: "랜덤 게임", bgColor: "#3FA2F6" },
    { content: "2잔 ㄱㄱ", bgColor: "#0F67B1" },
    { content: "함 봐준다", bgColor: "#96C9F4" },
    { content: "랜덤게임", bgColor: "#3FA2F6" },
    { content: "술 적립", bgColor: "#FAFFAF" },
    { content: "왼쪽 마셔", bgColor: "#96C9F4" },
    { content: "랜덤게임", bgColor: "#3FA2F6" },
    { content: "함 봐준다", bgColor: "#0F67B1" },
    { content: "장씨 마셔", bgColor: "#96C9F4" },
    { content: "니 무라~", bgColor: "#3FA2F6" },
    { content: "2명 지목", bgColor: "#0F67B1" },
    { content: "세계여행", bgColor: "#FAFFAF" },
    { content: "양 옆 마셔~", bgColor: "#96C9F4" },
    { content: "이름 1글자 마셔", bgColor: "#3FA2F6" },
    { content: "랜덤게임", bgColor: "#0F67B1" },
    { content: "함 봐준다", bgColor: "#96C9F4" },
    { content: "운전 안 한 놈들 무라", bgColor: "#3FA2F6" },
    { content: "함 봐준다", bgColor: "#0F67B1" },
    { content: "랜덤게임", bgColor: "#96C9F4" },
    { content: "왼쪽 마셔", bgColor: "#3FA2F6" },
    { content: "술 저장고:", bgColor: "#FAFFAF" },
    { content: "랜덤게임", bgColor: "#0F67B1" },
    { content: "함 봐준다", bgColor: "#96C9F4" },
    { content: "니 무라~", bgColor: "#3FA2F6" },
    { content: "랜덤게임", bgColor: "#0F67B1" },
    { content: "함 봐준다", bgColor: "#96C9F4" },
    { content: "다 같이 한잔", bgColor: "#3FA2F6" },
];

const Board = ({
    currentPosition,
    showToastMessage,
    moveTo,
}: {
    currentPosition: number;
    showToastMessage: (message: string) => void;
    moveTo: (steps: number) => void;
}) => {
    // Implement board logic here

    const [soju, setSoju] = useState(0);
    const [isTraveling, setIsTraveling] = useState(false);
    const onTravel = (step: number) => {
        if (!isTraveling) return;
        moveTo(step);
        setIsTraveling(false);
    };
    useEffect(() => {
        if (currentPosition === 9) {
            setSoju((prev) => prev + 1);
        }

        if (currentPosition === 25) {
            showToastMessage(`${soju}잔 무라 🍻`);
            setSoju(0);
        }
        if (currentPosition === 16) {
            setIsTraveling(true);
        }
    }, [currentPosition]);
    return (
        <BoardContainer>
            <EmptyCell />
            {boardGrid.map((v, i) => (
                <Cell
                    onClick={() => onTravel(v)}
                    isActive={v === currentPosition}
                    key={v}
                    bgColor={cellData[v]?.bgColor}
                >
                    {v === 25 ? cellData[v]?.content + soju + "잔" : cellData[v]?.content}
                </Cell>
            ))}
        </BoardContainer>
    );
};

export default Board;
