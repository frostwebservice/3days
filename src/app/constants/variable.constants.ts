import { environment } from 'src/environments/environment';
import { Lang } from '../utils/data.types';

export const LANGUAGES = ['en', 'ar'];
export const LangRegex = /en|ar/;
export const LANG_OPTIONS: Lang[] = [
	{
		code: 'en',
		country: 'English',
		icon: 'united-states'
	},
	{
		code: 'ar',
		country: 'Arabic',
		icon: 'arabic'
	},
];
