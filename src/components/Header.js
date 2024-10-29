import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

export default function Header() {
	return (
		<div className="py-4 bg-">
			<div className="sm:container lg:container md:container xl:container 2xl:container mx-auto flex items-center justify-between">
				<h1 className="font-bold text-3xl font-mono">LOGO</h1>
				<div>
					<Menubar>
						<MenubarMenu>
							<MenubarTrigger>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>UI</AvatarFallback>
								</Avatar>
							</MenubarTrigger>
							<MenubarContent>
								<MenubarItem>
									New Tab <MenubarShortcut>⌘T</MenubarShortcut>
								</MenubarItem>
								<MenubarItem>New Window</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Share</MenubarItem>
								<MenubarSeparator />
								<MenubarItem>Print</MenubarItem>
							</MenubarContent>
						</MenubarMenu>
					</Menubar>
				</div>
			</div>
		</div>
	);
}
