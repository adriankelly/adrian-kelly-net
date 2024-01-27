// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://adriankelly.net";
export const SITE_TITLE: string = "Adrian Kelly";
export const SITE_DESCRIPTION: string = "Adrian Kelly portfolio site";

// SEO metadata
export const TWITTER_CREATOR: string = "@adriankelly";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "About",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	it: "it",
};
