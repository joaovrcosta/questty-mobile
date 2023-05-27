import {
    Container,
    HelpInfo,
    HelpText,
    HelpSubText,
    ResultInfo,
    ResultTopic,
    ResultTitle,
    ResultContent,
    ResultTopicContainer,
    ResultContentContainer
} from './styles';
import { Pressable } from 'react-native'
import { useState } from 'react';

export function HelpPage() {
    const [pressableActive, setPressableActive] = useState(false);
    let textLog = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt varius varius.";
    return (
        <Container>
            <HelpInfo>
                <HelpText>Central de ajuda</HelpText>
                <HelpSubText>Aqui nesta central de ajuda você pode encontrar a resposta sobre o funcionamento de nossa plataforma.
                    Filtre o resultado e leia sobre</HelpSubText>
            </HelpInfo>
            <Pressable
                onPress={() => {
                    pressableActive ? setPressableActive(false) : setPressableActive(true)
                }}>
                <ResultInfo>
                    <ResultTopicContainer>
                        <ResultTopic>Minha conta</ResultTopic>
                    </ResultTopicContainer>

                    <ResultTitle>Como faço para personalizar o meu feed?</ResultTitle>

                    {pressableActive && (
                        <ResultContentContainer>
                            <ResultContent testID="pressable_press_console">{textLog}</ResultContent>
                        </ResultContentContainer>
                    )}

                </ResultInfo>
            </Pressable>
        </Container>
    )
}