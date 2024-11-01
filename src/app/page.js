import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<div className="min-h-screen">
			<HeroSection />
		</div>
	);
}

// const

const obj = {
	name: "Moiz Ali Khan",
	age: 20,
	contact: "moizali@gmail.com",
};

console.log(obj.age);
