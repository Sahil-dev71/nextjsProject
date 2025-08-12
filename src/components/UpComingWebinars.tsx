'use client'
import React from 'react'
import Link from 'next/link';
import { HoverEffect } from './ui/card-hover-effect';
import { title } from 'process';
function UpComingWebinars() {
    const upcomingWebinars = [
  {
    title: 'Jazz Improvisation Essentials',
    description:
      'Learn the art of improvisation in jazz and develop your own unique style.',
    slug: 'jazz-improvisation-essentials',
    isFeatured: true,
  },
  {
    title: 'Vocal Training for Beginners',
    description:
      'Strengthen your voice and learn essential techniques to improve your singing skills.',
    slug: 'vocal-training-for-beginners',
    isFeatured: true,
  },
  {
    title: 'Electronic Music Basics',
    description:
      'Get started with the tools and techniques for producing modern electronic music.',
    slug: 'electronic-music-basics',
    isFeatured: false,
  },
  {
    title: 'Music Theory for Songwriters',
    description:
      'Understand core music theory concepts to write better melodies and harmonies.',
    slug: 'music-theory-for-songwriters',
    isFeatured: true,
  },
  {
    title: 'Live Performance Masterclass',
    description:
      'Gain confidence and stage presence with tips from experienced live performers.',
    slug: 'live-performance-masterclass',
    isFeatured: true,
  },
  {
    title: 'Film Scoring Fundamentals',
    description:
      'Discover how to compose music that enhances storytelling in films and media.',
    slug: 'film-scoring-fundamentals',
    isFeatured: false,
  },
  {
    title: 'Advanced Guitar Techniques',
    description:
      'Push your guitar skills to the next level with advanced fingerstyle and soloing.',
    slug: 'advanced-guitar-techniques',
    isFeatured: true,
  },
  {
    title: 'Music Business 101',
    description:
      'Learn how to navigate the music industry and market your music effectively.',
    slug: 'music-business-101',
    isFeatured: false,
  },
  {
    title: 'Song Arrangement Secrets',
    description:
      'Uncover the techniques used by top producers to arrange hit songs.',
    slug: 'song-arrangement-secrets',
    isFeatured: true,
  },
];
const data=upcomingWebinars.filter(webinar=>webinar.isFeatured)
  return (
    <div className='p-12 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
         <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>  
              FEATURED WEBINARS  </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                    Enhance Your Music Journey </p>
         </div>
         <div className='mt-10'>
            <HoverEffect items={data.map(webinar=>{
              const web={
                title:webinar.title,
                description:webinar.description,
                link:webinar.slug
              }
              return web;
            })}/>
         </div>
         <div className='mt-10 text-center'>
            <Link href={"/"} className="px-4 py-2 rounded-2xl border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
              All Events
            </Link>
         </div>
      </div>  
    </div>
  )
}

export default UpComingWebinars
