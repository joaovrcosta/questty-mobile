import * as S from './styles';

export function Avatar() {
  return (
    <S.AvatarContainer>
      <S.Avatar
        source={{
          uri: 'https://avatars.githubusercontent.com/u/70654718?v=4',
        }}
      />
    </S.AvatarContainer>
  );
}
