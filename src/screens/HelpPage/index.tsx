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
    ResultContentContainer,
    SubContainer,
    SelectContainer,
    SelectText
} from './styles';
import { Pressable } from 'react-native'
import { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
export function HelpPage() {
    const [pressableActive, setPressableActive] = useState(false);
    const [topic, setTopic] = useState("Minha Conta")
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        {
            title: 'Minha Conta', onPress: () => {
                setTopic("Minha Conta")
                setIsVisible(false)
            }
        },
        {
            title: 'Perguntas', onPress: () => {
                setTopic("Perguntas")
                setIsVisible(false)
            }
        },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];

    let textLog = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt varius varius.";
    return (
        <>
            <Container>
                <HelpInfo>
                    <HelpText>Central de ajuda</HelpText>
                    <HelpSubText>Aqui nesta central de ajuda você pode encontrar a resposta sobre o funcionamento de nossa plataforma.
                        Filtre o resultado e leia sobre</HelpSubText>
                </HelpInfo>
            </Container>
            <SubContainer>
                <SelectContainer>
                <Button
                    title="Categorias"
                    onPress={() => setIsVisible(true)}

                />
                <BottomSheet modalProps={{}} isVisible={isVisible}>
                    {list.map((l, i) => (
                        <ListItem
                            key={i}
                            containerStyle={l.containerStyle}
                            onPress={l.onPress}
                        >
                            <ListItem.Content>
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>
                        <SelectText>{topic}</SelectText>
                </SelectContainer>
                
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
            </SubContainer>

        </>
    )
}
