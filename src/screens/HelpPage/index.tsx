import {
    Container,
    HelpInfo,
    HelpText,
    HelpSubText
} from './styles';

export function HelpPage() {
    return (
        <Container>
            <HelpInfo>
                <HelpText>Central de ajuda</HelpText>
                <HelpSubText>Aqui nesta central de ajuda você pode encontrar a resposta sobre o funcionamento de nossa plataforma. 
                    Filtre o resultado e leia sobre</HelpSubText>
            </HelpInfo>
        </Container>
    )
}