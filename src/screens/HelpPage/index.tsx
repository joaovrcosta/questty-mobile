import {
    Container,
    HelpInfo,
    HelpText,
    HelpSubText,
    ResultInfo,
    ResultTopic,
    ResultTitle,
    ResultContent,
    ResultTopicWrapper,
    ResultContentWrapper,
    SubContainer,
    SelectWrapper,
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
                <SelectWrapper>
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
                </SelectWrapper>
                
                <Pressable
                    onPress={() => {
                        pressableActive ? setPressableActive(false) : setPressableActive(true)
                    }}>
                    <ResultInfo>
                        <ResultTopicWrapper>
                            <ResultTopic>Minha conta</ResultTopic>
                        </ResultTopicWrapper>

                        <ResultTitle>Como faço para personalizar o meu feed?</ResultTitle>

                        {pressableActive && (
                            <ResultContentWrapper>
                                <ResultContent testID="pressable_press_console">{textLog}</ResultContent>
                            </ResultContentWrapper>
                        )}

                    </ResultInfo>
                </Pressable>
            </SubContainer>

        </>
    )
}
