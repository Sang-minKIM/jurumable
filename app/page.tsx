"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const Button = styled.button`
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
`;

export default function Home() {
    const resetGame = () => {
        localStorage.removeItem("currentPosition");
        localStorage.removeItem("storedDrinks");
    };

    return (
        <HomeContainer>
            <Title>주루마블</Title>
            <Link href="/game">
                <Button>게임 시작</Button>
            </Link>
            <Button onClick={resetGame}>게임 초기화</Button>
        </HomeContainer>
    );
}
