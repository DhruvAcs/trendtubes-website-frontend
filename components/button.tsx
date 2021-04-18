import { ReactNode } from 'react';
import tailwindConfig from '../tailwind.config';

const Button = ({
	children,
	className,
	size,
	style,
	href,
	onClick,
	any,
}: {
	children?: ReactNode;
	className?: string;
	size?: string;
	style?: React.CSSProperties;
	href?: string;
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
	any?: any[];
}) => {
	return (
		<a
			style={style}
			className={`button select-none whitespace-nowrap bg-primary-color ${
				(size || '') == 'small'
					? 'py-2 px-4 text-base rounded-md'
					: (size || '') == 'xs'
					? 'py-2 px-4 text-sm rounded-md'
					: (size || '') == 'xxs'
					? 'py-2 px-3 text-xs rounded-md'
					: 'py-3 px-6 text-base rounded-md'
			} w-fit text-primary-text font-bold flex items-center justify-center ${
				className || ''
			}`}
			href={href}
			onClick={onClick}
			{...any}
		>
			{children || 'No text'}
		</a>
	);
};

interface OutlineButtonProps
	// extends React.InputHTMLAttributes<HTMLAnchorElement> {
	extends React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<any>,
		HTMLAnchorElement
	> {
	children?: ReactNode;
	className?: string;
	// style: any;
	size?: string;
	style?: React.CSSProperties;
	href?: string;
	color?: string;
	textColor?: string;
	highlightTextColor?: string;
}

const OutlineButton = ({
	children,
	className,
	size,
	style,
	href,
	color,
	textColor,
	highlightTextColor,
	...props
}: OutlineButtonProps) => {
	return (
		<a
			className={`button select-none whitespace-nowrap ${
				(size || '') == 'sm' || (size || '') == 'small'
					? 'py-2 px-4 text-base rounded-md'
					: (size || '') == 'xs'
					? 'py-2 px-4 text-sm rounded-md'
					: 'py-3 px-6 text-base rounded-md'
			} w-fit font-bold rounded-md flex items-center justify-center hover:bg-${
				color
					? Object.keys(tailwindConfig.theme.extend.colors).find(
							(key) => tailwindConfig.theme.extend.colors[key] === color
					  ) || 'primary-color'
					: 'primary-color'
			} hover:${highlightTextColor} ${className || ''}`}
			style={Object.assign(
				{
					boxShadow: `inset 0px 0px 0px 2px ${
						color || tailwindConfig.theme.extend.colors['primary-color']
					}`,
					color:
						textColor || tailwindConfig.theme.extend.colors['primary-color'],
				},
				style
			)}
			href={href}
			{...props}
		>
			{children || 'No text'}
		</a>
	);
};

export { Button, OutlineButton };
