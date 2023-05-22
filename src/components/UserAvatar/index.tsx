import Image from 'next/image';
import { ImageFrame, LettersContainer } from './styles';

interface IUserAvatarProps {
	avatar_url?: string;
	size?: number;
	name: string;
}

export function UserAvatar({ avatar_url, name, size = 32 }: IUserAvatarProps) {
	const splitFirstAndLastName = name.split(' ');
	const firtsNameLetter = splitFirstAndLastName[0]?.substring(1, 0);
	const lastNameLetter = splitFirstAndLastName[1]?.substring(1, 0);
	const firstLetterNames = firtsNameLetter + lastNameLetter;

	return (
		<ImageFrame style={{ width: size, height: size }}>
			{avatar_url ? (
				<Image src={avatar_url} width={size - 4} height={size - 4} alt='avatar do usuário' />
			) : (
				<LettersContainer style={{ width: size - 4, height: size - 4, fontSize: size / 3.2 }}>
					<span>{firstLetterNames}</span>
				</LettersContainer>
			)}
		</ImageFrame>
	);
}
