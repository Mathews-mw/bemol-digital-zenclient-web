import { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/styles';

export default function Document() {
	return (
		<Html lang='pt-BR'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />

				<link href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700&family=Roboto:wght@300;400;500;700&display=swap' rel='stylesheet' />

				<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</Head>
			<body>
				<Main />
				<div id='root'></div>
				<NextScript />
			</body>
		</Html>
	);
}
