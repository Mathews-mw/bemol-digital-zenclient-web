import { Container, Circle } from './styles';

interface ILoadingComponentsProps {
	colorSchema: 'blue' | 'tomato' | 'light';
}

export function LoadingComponents({ colorSchema }: ILoadingComponentsProps) {
	return (
		<Container>
			<Circle animate={{ rotate: 360 }} transition={{ repeat: Infinity, repeatDelay: 0, ease: 'linear', duration: 0.8 }} colorSchema={colorSchema}></Circle>
		</Container>
	);
}
