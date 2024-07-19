"use client";

import { useState, useEffect } from "react";

import styled from "@emotion/styled";
import Board from "../components/Board";
import ControlBar from "../components/ControlBar";

import Modal from "../components/Modal";
import Toast from "../components/Toast";
import Dice from "react-dice-roll";

type diceType = 1 | 2 | 3 | 4 | 5 | 6;

const GameContainer = styled.div`
    display: flex;
    height: 100dvh;
`;

const BoardContainer = styled.div`
    flex: 5;
`;

const ControlBarContainer = styled.div`
    flex: 1;
`;

export default function Game() {
    const [currentPosition, setCurrentPosition] = useState(0);
    const [showDice, setShowDice] = useState(false);
    const [diceValue, setDiceValue] = useState<diceType>(1);
    const [showToast, setShowToast] = useState(false);
    const [storedDrinks, setStoredDrinks] = useState(0);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        const savedPosition = localStorage.getItem("currentPosition");
        const savedDrinks = localStorage.getItem("storedDrinks");
        if (savedPosition) setCurrentPosition(parseInt(savedPosition));
        if (savedDrinks) setStoredDrinks(parseInt(savedDrinks));
    }, []);

    useEffect(() => {
        localStorage.setItem("currentPosition", currentPosition.toString());
        localStorage.setItem("storedDrinks", storedDrinks.toString());
    }, [currentPosition, storedDrinks]);

    const rollDice = (value: diceType) => {
        setTimeout(() => {
            setShowDice(true);
        }, 300);

        setDiceValue(value);
        setTimeout(() => {
            setShowDice(false);
            movePlayer(value);
        }, 1300);
    };
    const moveTo = (steps: number) => {
        setCurrentPosition(steps);
    };

    const movePlayer = (steps: number) => {
        // Implement player movement logic here
        const newPosition = (currentPosition + steps) % 32;
        setCurrentPosition(newPosition);
    };
    const handleToastClose = () => {
        setShowToast(false);
    };

    const showToastMessage = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
    };

    return (
        <GameContainer>
            <BoardContainer>
                <Board currentPosition={currentPosition} showToastMessage={showToastMessage} moveTo={moveTo} />
            </BoardContainer>
            <ControlBarContainer>
                <ControlBar onRollDice={rollDice} />
            </ControlBarContainer>
            {showDice && (
                <Modal onClose={() => null}>
                    <Dice disabled={true} defaultValue={diceValue} cheatValue={diceValue} />
                </Modal>
            )}
            {showToast && <Toast message={toastMessage} onClose={handleToastClose} />}
        </GameContainer>
    );
}
