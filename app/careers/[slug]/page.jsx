// app/careers/[slug]/page.js
import React from 'react';

const knownCareers = ['ias']; // update as needed

export default function CareerPage({ params }) {
  const { slug } = params;

  const isAvailable = knownCareers.includes(slug.toLowerCase());

  if (!isAvailable) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Career Detail Coming Soon</h1>
        <p className="mt-2 text-gray-600">We’re working on this career page. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Career: {slug.toUpperCase()}</h1>
      <p className="mt-2 text-gray-600">This is the page for {slug} career.</p>
    </div>
  );
}
