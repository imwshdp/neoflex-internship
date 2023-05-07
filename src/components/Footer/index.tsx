import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { changeLanguage } from 'store/slices/settings';
import { languages } from 'store/slices/settings/types';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';

import LanguageIcon from 'resources/icons/LanguageIcon';
import VkIcon from 'resources/icons/SocialNetworksIcons/VkIcon';
import TelegramIcon from 'resources/icons/SocialNetworksIcons/TelegramIcon';
import WhatsappIcon from 'resources/icons/SocialNetworksIcons/WhatsappIcon';
import css from './index.module.css';

const Footer: React.FC = () => {
	const dispatch = useAppDispatch();
	const currentLanguage = useAppSelector(state => state.settings.language);
	const { t, i18n } = useTranslation();

	const swapLanguage = (langId: number) => {
		dispatch(changeLanguage({ langId }));
		langId ? i18n.changeLanguage('en') : i18n.changeLanguage('ru');
	};

	return (
		<footer className={css.footer}>
			<div className={css.footer_1}>
				<span className={css.anchor}>QPICK</span>
			</div>

			<div className={css.footer_2}>
				<ul>
					<li>{t('Favorites')}</li>
					<li>{t('Basket')}</li>
					<li>{t('Contacts')}</li>
				</ul>
			</div>

			<div className={css.footer_3}>
				<div className={css.info}>
					<span>{t('ServiceConditions')}</span>

					<div className={css.languages}>
						<LanguageIcon />
						<span
							className={currentLanguage === languages.ru ? 'activeColor' : ''}
							onClick={() => swapLanguage(languages.ru)}>
							Рус
						</span>
						<span
							className={currentLanguage === languages.en ? 'activeColor' : ''}
							onClick={() => swapLanguage(languages.en)}>
							Eng
						</span>
					</div>
				</div>
			</div>

			<div className={css.footer_4}>
				<VkIcon />
				<TelegramIcon />
				<WhatsappIcon />
			</div>
		</footer>
	);
};

export default Footer;
