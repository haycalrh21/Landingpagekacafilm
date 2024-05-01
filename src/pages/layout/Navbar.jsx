import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";

export default function Component() {
	return (
		<Navbar fluid rounded>
			<Navbar.Brand as={Link} href='https://flowbite-react.com'>
				<Image
					src='https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					width={50}
					height={50}
					className='mr-3 h-6 sm:h-9 '
					alt='Flowbite React Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold text-black'>
					Flowbite React
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href='#' active className='text-black'>
					Home
				</Navbar.Link>
				<Navbar.Link as={Link} href='#' className='text-black'>
					About
				</Navbar.Link>
				<Navbar.Link href='#' className='text-black'>
					Services
				</Navbar.Link>
				<Navbar.Link href='#' className='text-black'>
					Pricing
				</Navbar.Link>
				<Navbar.Link href='#' className='text-black'>
					Contact
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
