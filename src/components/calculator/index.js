import React from "react";
import { Container,Screen, Current, Previous } from "./styled";

export default function Calculator() {
    return (
        <Container>
            <Screen>
            <Previous>10</Previous>
            <Current>10</Current>
            </Screen>
        </Container>
    )        
}