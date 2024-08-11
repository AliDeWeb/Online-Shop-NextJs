'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Images
import siteLogo from '@/public/icons/logo.png';

// Icons
import { BsSend } from 'react-icons/bs';

// Mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

// Icons
import { MdExpandMore } from 'react-icons/md';

const Footer = () => {
  // States
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = React.useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    [expanded],
  );

  return (
    <footer className="border-t border-solid border-[#eeeeee]">
      <div className="container">
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-4 py-[50px] xl:gap-6">
            <div className="col-span-1">
              <Link href="/">
                <Image
                  src={siteLogo}
                  alt="site logo"
                  width={130}
                  height={40}
                  className="h-10 w-[130px]"
                />
              </Link>
              <p className="mt-8 font-poppins text-sm font-normal text-[#777777]">
                71 Pilgrim Avenue Chevy Chase, east california.
              </p>
              <p className="mt-4">
                <span className="font-poppins font-bold text-[#777777]">
                  Call us:{' '}
                  <a
                    className="text-sm font-normal transition-all hover:text-[#3474d4]"
                    href="tel:+440123456789"
                  >
                    +44 0123 456 789
                  </a>
                </span>
              </p>
              <p className="mt-4">
                <span className="font-poppins font-bold text-[#777777]">
                  Email:{' '}
                  <a
                    className="text-sm font-normal transition-all hover:text-[#3474d4]"
                    href="mailto:alimoradi0business@gmail.com"
                  >
                    alimoradi0business@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <div className="col-span-1">
              <h4 className="mb-2.5 border-b border-solid border-[#eeeeee] pb-2.5 font-montserrat text-lg font-bold tracking-wider text-[#777777]">
                Information
              </h4>
              <ul>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">About us</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">FAQ</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Delivery Information</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="mb-2.5 border-b border-solid border-[#eeeeee] pb-2.5 font-montserrat text-lg font-bold tracking-wider text-[#777777]">
                Account
              </h4>
              <ul>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">My Account</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Order History</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Wish List</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Specials</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="mb-2.5 border-b border-solid border-[#eeeeee] pb-2.5 font-montserrat text-lg font-bold tracking-wider text-[#777777]">
                Services
              </h4>
              <ul>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Discount Returns</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Policy & policy</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Customer Service</Link>
                </li>
                <li className="py-2 font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Term & condition</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="mb-2.5 border-b border-solid border-[#eeeeee] pb-2.5 font-montserrat text-lg font-bold tracking-wider text-[#777777]">
                Newsletter
              </h4>
              <p className="py-2 font-poppins text-sm font-normal text-[#777777]">
                Get instant updates about our new products and special promos!
              </p>
              <div className="flex h-[40px] w-[330px] items-center justify-between border border-solid border-[#eeeeee] px-4">
                <input
                  type="text"
                  placeholder="Enter your email here..."
                  className="w-[calc(100%-50px)] border-none font-poppins text-sm font-light text-[#777777] outline-none"
                />
                <button className="flex size-[30px] items-center justify-center bg-[#3474d4] text-white">
                  <BsSend size={'1.3em'} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y divide-solid divide-[#eeeeee] py-[20px] child:py-1 lg:hidden">
          <Accordion
            style={{ fontFamily: 'var(--font-poppins)' }}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore size={'1.2em'} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                }}
              >
                <span className="inline-block !w-max font-montserrat font-bold tracking-wider text-[#777777]">
                  Contact us
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col gap-2">
                <p className="px-4 font-poppins text-sm font-normal text-[#777777]">
                  71 Pilgrim Avenue Chevy Chase, east california.
                </p>
                <p className="px-4">
                  <span className="font-poppins text-sm font-bold text-[#777777]">
                    Call us:{' '}
                    <a
                      className="font-normal transition-all hover:text-[#3474d4]"
                      href="tel:+440123456789"
                    >
                      +44 0123 456 789
                    </a>
                  </span>
                </p>
                <p className="px-4">
                  <span className="font-poppins font-bold text-[#777777]">
                    Email:{' '}
                    <a
                      className="text-sm font-normal transition-all hover:text-[#3474d4]"
                      href="mailto:alimoradi0business@gmail.com"
                    >
                      alimoradi0business@gmail.com
                    </a>
                  </span>
                </p>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ fontFamily: 'var(--font-poppins)' }}
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore size={'1.2em'} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                }}
              >
                <span className="font-montserrat font-bold tracking-wider text-[#777777]">
                  Information
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col gap-2">
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">About us</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">FAQ</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Delivery Information</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Contact us</Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ fontFamily: 'var(--font-poppins)' }}
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore size={'1.2em'} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                }}
              >
                <span className="font-montserrat font-bold tracking-wider text-[#777777]">
                  Account
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col gap-2">
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">My Account</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Order History</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Wish List</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Specials</Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            style={{ fontFamily: 'var(--font-poppins)' }}
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore size={'1.2em'} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                }}
              >
                <span className="font-montserrat font-bold tracking-wider text-[#777777]">
                  Services
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="flex flex-col gap-2">
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Discount Returns</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Policy & policy</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Customer Service</Link>
                </li>
                <li className="font-poppins text-sm font-normal text-[#777777] transition-all hover:text-[#3474d4]">
                  <Link href="/">Term & condition</Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            defaultExpanded
            style={{ fontFamily: 'var(--font-poppins)' }}
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              expandIcon={<MdExpandMore size={'1.2em'} />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography
                sx={{
                  width: '33%',
                  flexShrink: 0,
                }}
              >
                <span className="font-montserrat font-bold tracking-wider text-[#777777]">
                  Newsletter
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="pb-2 font-poppins text-sm font-normal text-[#777777]">
                Get instant updates about our new products and special promos!
              </p>
              <div className="flex h-[40px] items-center justify-between border border-solid border-[#eeeeee] px-4">
                <input
                  type="text"
                  placeholder="Enter your email here..."
                  className="w-[calc(100%-50px)] border-none font-poppins text-sm font-light text-[#777777] outline-none"
                />
                <button className="flex size-[30px] items-center justify-center bg-[#3474d4] text-white">
                  <BsSend size={'1.3em'} />
                </button>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="border-t border-solid border-[#eeeeee] py-5">
        <p className="text-center font-poppins font-light text-[#777777]">
          Copyright © 2024 EKKA.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
