import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import {
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function SectionKaca() {
	const variants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
	};

	const AnimatedSection = ({ children }) => {
		const controls = useAnimation();
		const [ref, inView] = useInView();

		useEffect(() => {
			if (inView) {
				controls.start("visible");
			} else {
				controls.start("hidden");
			}
		}, [controls, inView]);

		return (
			<motion.div
				ref={ref}
				initial='hidden'
				animate={controls}
				variants={variants}
			>
				{children}
			</motion.div>
		);
	};

	return (
		<>
			<header className='bg-gray-950 text-gray-50 px-4 lg:px-6 py-4 flex items-center justify-between'>
				<Link className='flex items-center gap-2' href='#'>
					<AppWindowIcon className='h-6 w-6' />
					<span className='text-lg font-semibold'>Kaca Film</span>
				</Link>
				<Sheet>
					<SheetTrigger asChild>
						<Button className='lg:hidden' size='icon' variant='ghost'>
							<MenuIcon className='h-6 w-6' />
							<span className='sr-only'>Toggle navigation</span>
						</Button>
					</SheetTrigger>
					<SheetContent className='bg-gray-950 text-gray-50 p-6' side='right'>
						<div className='grid gap-6'>
							<Link className='text-lg font-medium hover:underline' href='#'>
								Beranda
							</Link>
							<Link
								className='text-lg font-medium hover:underline'
								href='#product'
								passHref
							>
								Produk
							</Link>
							<Link
								className='text-lg font-medium hover:underline'
								href='#pilihan'
								passHref
							>
								Mengapa Pilih Kami
							</Link>
							<Link
								className='text-lg font-medium hover:underline'
								href='#hubungi'
								passHref
							>
								Hubungi Kami
							</Link>
						</div>
					</SheetContent>
				</Sheet>
				<NavigationMenu className='hidden lg:flex'>
					<NavigationMenuList>
						<NavigationMenuLink asChild>
							<Link className='text-lg font-medium hover:underline' href='#'>
								Beranda
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link
								className='text-lg font-medium hover:underline'
								href='#product'
								passHref
							>
								Produk
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link
								className='text-lg font-medium hover:underline'
								href='#pilihan'
								passHref
							>
								Mengapa Pilih Kami
							</Link>
						</NavigationMenuLink>
						<NavigationMenuLink asChild>
							<Link
								className='text-lg font-medium hover:underline'
								href='#hubungi'
								passHref
							>
								Hubungi Kami
							</Link>
						</NavigationMenuLink>
					</NavigationMenuList>
				</NavigationMenu>
			</header>
			<main>
				<AnimatedSection>
					<section className='bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32'>
						<div className='container px-4 md:px-6'>
							<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='space-y-2'>
										<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
											Lindungi Rumahmu dengan Kaca Film Berkualitas
										</h1>
										<p className='max-w-[600px] text-gray-300 md:text-xl'>
											Dapatkan kaca film terbaik untuk melindungi rumahmu dari
											sinar UV dan meningkatkan efisiensi energi.
										</p>
									</div>
									<div className='flex flex-col gap-2 min-[400px]:flex-row'>
										<Link
											className='inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50'
											href='#product'
											passHref
										>
											Lihat Produk
										</Link>
										<Link
											className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-blue-500 bg-transparent px-8 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-blue-500/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800'
											href='#hubungi'
											passHref
										>
											Hubungi Kami
										</Link>
									</div>
								</div>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									<Image
										alt='Hero'
										className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
										height='550'
										src='https://images.unsplash.com/photo-1527352774566-e4916e36c645?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										width='550'
									/>
								</motion.div>
							</div>
						</div>
					</section>
				</AnimatedSection>

				<AnimatedSection>
					<section
						className='bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32'
						id='pilihan'
					>
						<div className='container px-4 md:px-6'>
							<div className='grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='space-y-2'>
										<div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-950 dark:text-gray-50'>
											Mengapa Pilih Kaca Film?
										</div>
										<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
											Manfaat Kaca Film untuk Rumahmu
										</h2>
										<p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
											Kaca film tidak hanya melindungi rumahmu dari sinar UV,
											tapi juga meningkatkan efisiensi energi dan memberikan
											privasi.
										</p>
									</div>
									<ul className='grid gap-4'>
										<li className='flex items-start gap-2'>
											<CheckIcon className='mt-1 h-5 w-5 flex-shrink-0 text-blue-500' />
											<div>
												<h3 className='text-lg font-semibold'>
													Perlindungan UV
												</h3>
												<p className='text-gray-500 dark:text-gray-400'>
													Kaca film melindungi rumahmu dari sinar UV yang
													berbahaya.
												</p>
											</div>
										</li>
										<li className='flex items-start gap-2'>
											<CheckIcon className='mt-1 h-5 w-5 flex-shrink-0 text-blue-500' />
											<div>
												<h3 className='text-lg font-semibold'>
													Efisiensi Energi
												</h3>
												<p className='text-gray-500 dark:text-gray-400'>
													Kaca film membantu menjaga suhu ruangan tetap nyaman
													dan mengurangi biaya listrik.
												</p>
											</div>
										</li>
										<li className='flex items-start gap-2'>
											<CheckIcon className='mt-1 h-5 w-5 flex-shrink-0 text-blue-500' />
											<div>
												<h3 className='text-lg font-semibold'>Privasi</h3>
												<p className='text-gray-500 dark:text-gray-400'>
													Kaca film memberikan privasi dan keamanan bagi
													rumahmu.
												</p>
											</div>
										</li>
									</ul>
								</div>
								<motion.div
									whileHover={{ scale: 1.2 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									<Image
										alt='Image'
										className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
										height='310'
										src='https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										width='550'
									/>
								</motion.div>
							</div>
						</div>
					</section>
				</AnimatedSection>
				<AnimatedSection>
					<section
						className='bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32'
						id='product'
					>
						<div className='container px-4 md:px-6'>
							<div className='grid gap-6 md:gap-8'>
								<div className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8'>
									<div className='grid gap-1'>
										<h2 className='text-3xl font-bold tracking-tighter'>
											Produk Kaca Film Kami
										</h2>
										<p className='text-gray-300'>
											Temukan kaca film terbaik untuk melindungi rumahmu.
										</p>
									</div>
								</div>
								<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
									<motion.div>
										<Link className='absolute inset-0 z-10' href='#'>
											<span className='sr-only'>View</span>
										</Link>

										<motion.div
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 0.9 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 17,
											}}
										>
											<img
												alt='Cover image'
												className='rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity'
												height={200}
												src='https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/jenis-kaca-film-mobil.jpeg'
												width={200}
											/>
										</motion.div>
										<div className='flex-1 py-4'>
											<h3 className='font-semibold tracking-tight text-gray-50'>
												Kaca Film Reflektif
											</h3>
											<small className='text-sm leading-none text-gray-400'>
												Melindungi dari sinar UV
											</small>
											<h4 className='font-semibold text-blue-500'>
												Rp 150.000
											</h4>
										</div>
									</motion.div>
									<motion.div>
										<Link className='absolute inset-0 z-10' href='#'>
											<span className='sr-only'>View</span>
										</Link>
										<motion.div
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 0.9 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 17,
											}}
										>
											<img
												alt='Cover image'
												className='rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity'
												height={200}
												src='https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/jenis-kaca-film-mobil.jpeg'
												width={200}
											/>
										</motion.div>
										<div className='flex-1 py-4'>
											<h3 className='font-semibold tracking-tight text-gray-50'>
												Kaca Film Tinted
											</h3>
											<small className='text-sm leading-none text-gray-400'>
												Memberikan privasi
											</small>
											<h4 className='font-semibold text-blue-500'>
												Rp 200.000
											</h4>
										</div>
									</motion.div>
									<motion.div>
										<Link className='absolute inset-0 z-10' href=''>
											<span className='sr-only'>View</span>
										</Link>
										<motion.div
											whileHover={{ scale: 1.2 }}
											whileTap={{ scale: 0.9 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 17,
											}}
										>
											<img
												alt='Cover image'
												className='rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity'
												height={200}
												src='https://astradigitaldigiroomuat.blob.core.windows.net/storage-uat-001/jenis-kaca-film-mobil.jpeg'
												width={200}
											/>
										</motion.div>

										<div className='flex-1 py-4'>
											<h3 className='font-semibold tracking-tight text-gray-50'>
												Kaca Film Anti Gores
											</h3>
											<small className='text-sm leading-none text-gray-400'>
												Melindungi kaca dari goresan
											</small>
											<h4 className='font-semibold text-blue-500'>
												Rp 100.000
											</h4>
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</section>
				</AnimatedSection>
				<AnimatedSection>
					<section
						className='bg-gray-950 text-gray-50 py-12 md:py-24 lg:py-32'
						id='hubungi'
					>
						<div className='container px-4 md:px-6'>
							<div className='grid gap-4 md:gap-8 lg:grid-cols-2 lg:gap-12'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
										Hubungi Kami untuk Informasi Lebih Lanjut
									</h2>
									<p className='max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										Kami siap membantu Anda menemukan solusi kaca film terbaik
										untuk rumah Anda.
									</p>
								</div>
								<div className='mx-auto w-full max-w-sm space-y-2'>
									<form className='flex flex-col space-y-2'>
										<Input
											className='max-w-lg flex-1'
											placeholder='Nama Anda'
											type='text'
										/>
										<Input
											className='max-w-lg flex-1'
											placeholder='Email Anda'
											type='email'
										/>
										<Textarea
											className='max-w-lg flex-1'
											placeholder='Pesan Anda'
										/>
										<Button className='self-end' type='submit'>
											Kirim Pesan
										</Button>
									</form>
								</div>
							</div>
						</div>
					</section>
				</AnimatedSection>
			</main>
			<footer className='bg-gray-950 text-gray-50 px-4 md:px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<p className='text-sm'>© 2024 Kaca Film. All rights reserved.</p>
				<nav className='flex gap-4 sm:gap-6'>
					<Link className='text-sm hover:underline' href='#'>
						Syarat dan Ketentuan
					</Link>
					<Link className='text-sm hover:underline' href='#'>
						Kebijakan Privasi
					</Link>
				</nav>
			</footer>
		</>
	);
}

function AppWindowIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<rect x='2' y='4' width='20' height='16' rx='2' />
			<path d='M10 4v4' />
			<path d='M2 8h20' />
			<path d='M6 4v4' />
		</svg>
	);
}

function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polyline points='20 6 9 17 4 12' />
		</svg>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='4' x2='20' y1='12' y2='12' />
			<line x1='4' x2='20' y1='6' y2='6' />
			<line x1='4' x2='20' y1='18' y2='18' />
		</svg>
	);
}
