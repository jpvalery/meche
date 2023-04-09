import Head from 'next/head';

import Logo from '@/components/logo';

export default function Home() {
	return (
		<>
			<Head>
				<title>meche.ca</title>
				<meta
					name="description"
					content="Bougies faites à la main au Québec"
					key="desc"
				/>
				<meta property="og:title" content="meche.ca" />
				<meta
					property="og:description"
					content="Bougies faites à la main au Québec"
				/>
			</Head>
			<main className="min-h-screen p-44">
				<div className="grid grid-flow-row items-center justify-center gap-8">
					<Logo className="text-stone-950" />
					<div className="grid grid-flow-row items-center justify-center text-lg">
						<p className="uppercase text-center">
							Bougies faites à la main au Québec
						</p>
						<p className="uppercase text-center">100% cire de Soja</p>
						<p className="uppercase text-center">Naturelle & biodégradable</p>
					</div>
				</div>
			</main>
		</>
	);
}
