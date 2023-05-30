import {
    Container,
    HelpInfo,
    HelpText,
    HelpSubText,
    SubContainer,
    SelectWrapper,
    SelectText
} from './styles';
import { useState } from 'react';
import { BottomSheet, Button, ListItem } from '@rneui/themed';
import { PressableHelp } from '../../components/PressableHelp';
export function HelpPage() {
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
    const helpList= [
        {
            topic: 'Minha Conta',
            question: 'Como faço para personalizar o meu feed?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt varius varius.',
        },
        {
            topic: 'Minha Conta',
            question: 'Como posso modificar o meu email?',
            answer: 'Morbi urna dolor, fermentum maximus nibh non, malesuada tempor purus. Praesent tincidunt blandit dui.',
        },
        {
            topic: 'Minha Conta',
            question: 'Como faço para trocar a foto de perfil',
            answer: 'Fusce nibh massa, pulvinar sit amet nisl non, sagittis tempor urna. Aenean in sem tellus.',
        }
    ]
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

                {helpList.map((data)=>(
                    <>
                    <PressableHelp
                     textTopic={data.topic}
                     textAnswer={data.answer}
                     textQuestion={data.question}/>
                    </>
                )
                )}
            </SubContainer>

        </>
    )
}
