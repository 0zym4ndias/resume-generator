'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Apple, Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const companies = [
  {
    name: 'Google',
    icon: (
      <svg
        className="size-10 text-gray-700 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  { name: 'Apple', icon: <Apple className="size-10 text-gray-700 dark:text-gray-300" /> },
  {
    name: 'Microsoft',
    icon: (
      <svg
        className="size-10 text-gray-700 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z" />
      </svg>
    ),
  },
  {
    name: 'Amazon',
    icon: (
      <svg
        className="size-10 text-gray-700 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.812-.65-1.53-.65h-.15c-.36.027-.63.117-.81.27-.18.154-.3.297-.344.434a2.265 2.265 0 00-.141.509 2.26 2.26 0 01-.157.507c-.068.112-.353.218-.851.316-.165.035-.349.053-.54.053-.19 0-.372-.018-.54-.053-.188-.053-.34-.135-.466-.247a1.118 1.118 0 01-.296-.43 1.659 1.659 0 01-.096-.641c0-.355.073-.69.22-1.004a1.81 1.81 0 01.744-.767c.421-.242.952-.403 1.594-.481.256-.035.518-.05.779-.05h.798c.566 0 1.075.077 1.528.232.455.155.814.394 1.08.717.363.457.61 1.014.733 1.674.08.442.118 1.05.118 1.82v.523c0 .422-.022.746-.075 1.643-.046.797-.085 1.122-.095 1.192a3.787 3.787 0 01-.386 1.45c-.337.807-.97 1.314-1.902 1.53a3.366 3.366 0 01-.786.087c-.833 0-1.525-.242-2.075-.726-.55-.483-.795-1.1-.795-1.847v-.074zm2.814.007c0 .319.084.57.257.757a.864.864 0 00.637.273c.19 0 .368-.042.523-.124a.894.894 0 00.368-.359c.09-.148.155-.34.19-.584.024-.188.035-.492.035-.915v-.049c-.57 0-.971.015-1.218.053-.497.054-.855.256-1.077.607a1.77 1.77 0 00-.248.915v.049l-.534.002.534-.002zm8.263.056c0-.328.188-.583.562-.764a.926.926 0 01.393-.07.847.847 0 01.637.235.796.796 0 01.232.599c0 .155-.033.319-.102.493-.197.474-.551.854-1.063 1.14l-.495-1.633zm-16.76-.005c0-.327.188-.583.563-.763a.926.926 0 01.393-.07.847.847 0 01.637.234.796.796 0 01.232.6c0 .154-.033.318-.102.492-.197.474-.551.854-1.064 1.14l-.494-1.633zm5.61-3.905h3.575v.525h-3.575V7.95z" />
      </svg>
    ),
  },
  {
    name: 'Meta',
    icon: (
      <svg
        className="size-10 text-gray-700 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
      </svg>
    ),
  },
  { name: 'LinkedIn', icon: <Linkedin className="size-10 text-gray-700 dark:text-gray-300" /> },
  {
    name: 'Walmart',
    icon: (
      <svg
        className="size-10 text-gray-700 dark:text-gray-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.02 7.37c.24 0 .44-.2.44-.44s-.2-.44-.44-.44-.44.2-.44.44.2.44.44.44zm-3.22 0c.24 0 .44-.2.44-.44s-.2-.44-.44-.44-.44.2-.44.44.2.44.44.44zm6.43 0c.24 0 .44-.2.44-.44s-.2-.44-.44-.44-.44.2-.44.44.2.44.44.44zM4.26 7.02c.19-.93.66-1.76 1.33-2.43.68-.68 1.5-1.15 2.43-1.33-.24-.06-.48-.09-.73-.09-1.84 0-3.32 1.49-3.32 3.32 0 .25.03.5.09.74.06-.07.13-.14.2-.21zm.07 3.45c-.38-.39-.68-.83-.9-1.31-.06.25-.1.5-.1.77 0 1.84 1.49 3.32 3.32 3.32.27 0 .52-.03.77-.1-.48-.22-.92-.52-1.31-.9-.82-.82-1.37-1.88-1.51-3 0-.06 0-.12-.02-.18-.22.52-.3 1.08-.25 1.4zm3.34 1.6c-.8-.01-1.58-.25-2.24-.66-.05.18-.07.38-.05.58.15 1.12 1.11 2.04 2.43 2.04 1.32 0 2.28-.92 2.43-2.04.02-.2 0-.4-.05-.58-.66.41-1.44.65-2.24.66h-.28zm3.35-1.6c.05-.32-.03-.88-.25-1.4 0 .06 0 .12-.02.18-.15 1.11-.7 2.17-1.51 3-.39.38-.84.68-1.31.9.25.06.5.1.77.1 1.84 0 3.32-1.49 3.32-3.32 0-.26-.03-.52-.1-.77-.22.49-.52.93-.9 1.31zm.51-3.45c.07.07.14.14.2.21.06-.24.09-.48.09-.74 0-1.83-1.49-3.32-3.32-3.32-.25 0-.49.03-.73.09.93.18 1.75.65 2.43 1.33.67.67 1.14 1.5 1.33 2.43zM12 8.36c.45 0 .89-.09 1.3-.27.76-.33 1.57-.92 1.6-1.97.02-.81-.48-1.53-1.2-1.84-.15.3-.43.5-.75.5s-.6-.2-.75-.5c-.72.31-1.22 1.03-1.2 1.84.03 1.05.84 1.64 1.6 1.97.41.18.85.27 1.3.27h.1zm-.1 4.32c-.45 0-.89-.09-1.3-.27-.76-.33-1.57-.92-1.6-1.97-.02-.81.48-1.53 1.2-1.84.15.3.43.5.75.5s.6-.2.75-.5c.72.31 1.22 1.03 1.2 1.84-.03 1.05-.84 1.64-1.6 1.97-.41.18-.85.27-1.3.27h-.1zm8.78 6.46H3.42c-.5 0-.9-.4-.9-.9V4.33c0-.5.4-.9.9-.9h17.24c.5 0 .9.4.9.9v13.91c0 .5-.4.9-.9.9zM3.42 1.33c-1.65 0-3 1.35-3 3v13.91c0 1.65 1.35 3 3 3h17.24c1.65 0 3-1.35 3-3V4.33c0-1.65-1.35-3-3-3H3.42z" />
      </svg>
    ),
  },
  { name: 'Github', icon: <Github className="size-10 text-gray-700 dark:text-gray-300" /> },
];

export const CompaniesCarousel = () => {
  const t = useTranslations('HomePage');
  return (
    <div className="w-full">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
        {t('company.title')}
      </h2>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {companies.map((company, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="rounded-full bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800">
                  {company.icon}
                </div>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {company.name}
                </p>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-6 flex justify-center gap-2">
          <CarouselPrevious className="static dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" />
          <CarouselNext className="static dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" />
        </div>
      </Carousel>
    </div>
  );
};
