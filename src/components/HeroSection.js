import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
	return (
		<div className="w-11/12 container mx-auto my-8 flex items-center justify-between">
			<div>
				<h1 className="font-medium text-4xl mb-4">We Need Your Head</h1>
				<p className="mb-8 leading-relaxed">
					Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
					plant cold-pressed tacos poke beard tote bag. Heirloom echo park
					mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
					try-hard chambray.
				</p>
				<div className="flex items-center gap-8 mt-4">
					<Button variant="outline">Find Doctor You Need</Button>
					<Button>
						<Link href={"/doctors/apply"}>Apply as a Doctor</Link>
					</Button>
				</div>
			</div>
			<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end">
				<Image
					width={400}
					height={400}
					src={
						"https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9jdG9yfGVufDB8fDB8fHww"
					}
				/>
			</div>
		</div>
	);
}
