import { Container, IconGear, SelectModal, SelectModalText } from "./styles";

interface SelectCategoryProps {
  name: string;
}

export function SelectCategory({ name }: SelectCategoryProps) {
  return (
    <Container>
      <SelectModal>
        <SelectModalText>{name}</SelectModalText>
        <IconGear name="gear" />
      </SelectModal>
    </Container>
  );
}
