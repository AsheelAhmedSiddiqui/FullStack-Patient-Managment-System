import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
	return (
		<div className="container mx-auto my-8 flex items-center justify-between">
			<div>
				<h1 className="font-medium text-4xl mb-4">We Need Your Head</h1>
				<p className="text-lg">
					There are many variations of passages of Lorem Ipsum available, but
					<br />
					the majority have suffered alteration in some form, <br /> by injected
					humour, or randomised words which don't <br />
					look even slightly believable
				</p>
				<div className="flex items-center gap-8 mt-4">
					<Button variant="outline">Learn More</Button>
					<Button>Apply as a Doctor</Button>
				</div>
			</div>
			<div className="heroImage w-2/4 flex items-center justify-end">
				<Image
					width={1000}
					height={800}
					src={
						"https://images.unsplash.com/photo-1638598124048-10c5b3f2f964?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRvY3RvcnN8ZW58MHx8MHx8fDI%3D"
					}
				/>
			</div>
		</div>
	);
}
