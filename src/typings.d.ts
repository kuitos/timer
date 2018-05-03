/**
 * tiny-glob declaration
 */
declare module 'tiny-glob' {

	type Options = {
		cwd?: string;
		dot?: boolean;
		absolute?: boolean;
		filesOnly?: boolean;
		flush?: boolean;
	};

	type FilePath = string;

	function glob(str: string, opts: Options): Promise<FilePath[]>;

	/* tslint:disable */
	export = glob;
}

declare module '*.json' {
	const text: { version: string; };
	export = text;
}
