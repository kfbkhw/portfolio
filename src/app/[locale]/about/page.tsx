import { unstable_setRequestLocale } from 'next-intl/server';
import type { Params } from '@/types/param';
import { useTranslations } from 'next-intl';
import { cn } from '@/utils/cn';
import Main from '@/components/common/wrapper';
import { Meteors } from '@/components/ui/meteors';

export default function About({ params: { locale } }: Params) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('About');

    return (
        <>
            <Meteors number={50} />
            <Main>
                <h1
                    className={cn(
                        'text-6xl sm:text-7xl',
                        locale === 'en' ? 'font-logo' : 'font-cafe'
                    )}
                >
                    {t('title')}
                </h1>
                <p>{t('content')}</p>
            </Main>
        </>
    );
}
