import { Divider } from '../Divide';
import { TitleContainer, TitleText } from './styles';

interface IHeadingProps {
	title: string;
}

export function Title({ title }: IHeadingProps) {
	return (
		<TitleContainer>
			<TitleText>{title}</TitleText>

			<Divider />
		</TitleContainer>
	);
}
