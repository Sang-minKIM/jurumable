"use client";

import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Board from "../components/Board";
import ControlBar from "../components/ControlBar";
import Dice from "../components/Dice";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

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
    const [diceValue, setDiceValue] = useState(0);
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

    const rollDice = () => {
        setShowDice(true);
        const newValue = Math.floor(Math.random() * 6) + 1;
        setDiceValue(newValue);
        setTimeout(() => {
            setShowDice(false);
            movePlayer(newValue);
        }, 2000);
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
                <Modal onClose={() => setShowDice(false)}>
                    <Dice value={diceValue} />
                </Modal>
            )}
            {showToast && <Toast message={toastMessage} onClose={handleToastClose} />}
        </GameContainer>
    );
}
