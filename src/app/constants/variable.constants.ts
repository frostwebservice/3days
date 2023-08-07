import { environment } from 'src/environments/environment';
import { Lang } from '../utils/data.types';

export const LANGUAGES = ['en', 'fr', 'es'];
export const LangRegex = /en|ar/;
export const LANG_OPTIONS: Lang[] = [
	{
		code: 'en',
		country: 'english',
		icon: 'united-states'
	},
	{
		code: 'ar',
		country: 'arabic',
		icon: 'arabic'
	},
];
