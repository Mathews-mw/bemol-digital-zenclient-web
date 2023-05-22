import { FieldError } from 'react-hook-form';
import { Props as PropsMask } from 'react-input-mask';
import { ForwardRefRenderFunction, ReactElement, forwardRef, useState } from 'react';

import { ErrorMessage } from '../ErrorMessage';

import { Eye, EyeOff } from 'lucide-react';
import { InputTextContainer, TextInputContainer, Prefix, Input, ButtonEyeView, Label } from './styles';
import { LoadingComponents } from '../../Loarders/LoadingComponents';

export interface ITextInputProps extends PropsMask {
	label?: string;
	prefix?: string;
	iconRight?: ReactElement;
	loading?: boolean;
	passwordView?: boolean;
	error?: FieldError;
}

const InputTextBase: ForwardRefRenderFunction<HTMLInputElement, ITextInputProps> = (
	{ label, prefix, iconRight, mask, type, loading = false, error, passwordView = false, ...props },
	ref
) => {
	const [passwordViewType, setPasswordViewType] = useState<'password' | typeof type>('password');

	const idLabel = label?.split('').join().toLowerCase();

	return (
		<InputTextContainer ref={ref}>
			{!!label && <Label htmlFor={idLabel}>{label}</Label>}

			<TextInputContainer data-error={error ? 'error' : ''}>
				<>
					{!!prefix && <Prefix>{prefix}</Prefix>}
					<Input mask={mask} id={idLabel} type={passwordView ? passwordViewType : type} {...props} />
					{!!iconRight && iconRight}
					{loading && <LoadingComponents colorSchema='tomato' />}
				</>

				{passwordView && (
					<ButtonEyeView type='button' onClick={() => setPasswordViewType(passwordViewType === 'password' ? 'text' : 'password')}>
						{passwordViewType === 'password' ? <Eye size={18} /> : <EyeOff size={18} />}
					</ButtonEyeView>
				)}
			</TextInputContainer>

			{!!error && <ErrorMessage>{error.message}</ErrorMessage>}
		</InputTextContainer>
	);
};

export const InputText = forwardRef(InputTextBase);
