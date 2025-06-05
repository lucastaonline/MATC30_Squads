import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Rankeador de links',
    description: 'Professor, passa nóis.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >
                <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                    {/* Header com menu de navegação horizontal */}
                    <header className="mb-8">
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-row gap-6">
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/">
                                        Home
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/table">
                                        Table Ranking
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/carrousel">
                                        Carrousel Ranking
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/charts">
                                        Charts Ranking
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/about">
                                        About
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </header>

                    {/* Conteúdo principal */}
                    <main className="flex flex-col gap-[32px] flex-1 items-center sm:items-start">
                        {children}
                    </main>

                    {/* Rodapé */}
                    <footer className="mt-8 flex gap-[24px] flex-wrap items-center justify-center">
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/lucastaonline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            lucastaonline
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/Arrivedercci"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Arrivedercci
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/iagooliveira"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            iagooliveira
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/jimy189"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            jimy189
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/Kolactin"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Kolactin
                        </a>
                        <a
                            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                            href="https://github.com/tisaaceng81"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            tisaaceng81
                        </a>
                    </footer>
                </div>
            </body>
        </html>
    );
}
